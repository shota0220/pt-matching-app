//バックエンド：3行要約（申し送り）API
//過去のチャット履歴を解析して、セラピスト向けの要約を作成する
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const therapistId = searchParams.get("therapistId");

  if (!userId || !therapistId) return NextResponse.json({ error: "ID不足" }, { status: 400 });

  try {
    // 1. 直近のメッセージを取得
    const messages = await prisma.chat.findMany({
      where: { userId, therapistId },
      orderBy: { createdAt: "desc" },
      take: 20, // 直近20件を要約対象にする
    });

    const chatHistory = messages.reverse().map(m => `${m.senderType}: ${m.message}`).join("\n");

    // 2. AIで3行要約
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
      以下のリハビリセラピストと患者のチャット内容を、
      セラピストが訪問前に確認すべき「申し送り事項」として3行で要約してください。
      - 箇条書き形式
      - 症状の変化や要望を優先
      - 丁寧なビジネス口調
      
      内容:
      ${chatHistory}
    `;

    const result = await model.generateContent(prompt);
    return NextResponse.json({ summary: result.response.text() });
  } catch (error) {
    return NextResponse.json({ error: "要約失敗" }, { status: 500 });
  }
}