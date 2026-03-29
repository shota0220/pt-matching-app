//バックエンド：3行要約（申し送り）API
//過去のチャット履歴を解析して、セラピスト向けの要約を作成する
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chatIdParam = searchParams.get("chatId");

  if (!chatIdParam) {
    return NextResponse.json({ error: "chatId が必要です" }, { status: 400 });
  }

  const chatId = Number(chatIdParam);
  if (isNaN(chatId)) {
    return NextResponse.json({ error: "chatId が不正です" }, { status: 400 });
  }

  try {
    // 1. チャットルーム情報を取得
    const chatRoom = await prisma.chat.findUnique({
      where: { id: chatId },
      select: {
        userId: true,
        therapistId: true,
      },
    });

    if (!chatRoom) {
      return NextResponse.json({ error: "チャットルームが存在しません" }, { status: 404 });
    }

    const { userId, therapistId } = chatRoom;

    // 2. チャット履歴 + 患者情報
    const [messages, user] = await Promise.all([
      prisma.chat.findMany({
        where: { id: chatId },
        orderBy: { createdAt: "desc" },
        take: 20,
      }),
      prisma.user.findUnique({
        where: { id: userId },
        select: { symptom: true, medicalHistory: true },
      }),
    ]);

    if (messages.length === 0) {
      return NextResponse.json({ summary: "まだやり取りがありません。" });
    }

    const chatHistory = messages
      .reverse()
      .map((m) => `${m.sender}: ${m.message}`)
      .join("\n");

    // 3. AI 要約
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
あなたは理学療法士の優秀なアシスタントです。
以下の情報を元に、セラピストが訪問前に確認すべき「重要事項」を3行でまとめてください。

【患者の基本症状】: ${user?.symptom || "不明"} / ${user?.medicalHistory || ""}
【最新のチャット履歴】:
${chatHistory}

制約：
- 箇条書き3行
- 身体の変化を最優先
- リハビリの目標や準備物も含む
`;

    const result = await model.generateContent(prompt);

    return NextResponse.json({
      summary: result.response.text(),
      lastUpdate: messages[messages.length - 1].createdAt,
    });
  } catch (error) {
    console.error("AI要約エラー:", error);
    return NextResponse.json({ error: "要約失敗" }, { status: 500 });
  }
}



