import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

/**
 * GET: メッセージ履歴またはチャットリストの取得
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const therapistId = searchParams.get("therapistId");

  try {
    // A. 特定のペアのチャット履歴を取得
    if (userId && therapistId) {
      const messages = await prisma.chat.findMany({
        where: { userId, therapistId },
        orderBy: { createdAt: "asc" },
      });
      return NextResponse.json(messages);
    }

    // B. チャット可能なマッチング一覧を取得
    const approvedMatches = await prisma.matchRequest.findMany({
      where: { status: "APPROVED" },
      include: { user: true },
    });
    return NextResponse.json(approvedMatches);

  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ message: "取得失敗" }, { status: 500 });
  }
}

/**
 * POST: メッセージ送信 + AI予約自動検知
 */
export async function POST(request: Request) {
  try {
    const { userId, therapistId, message, senderType } = await request.json();

    if (!userId || !therapistId || !message) {
      return NextResponse.json({ message: "入力不足" }, { status: 400 });
    }

    // 1. メッセージをDBに保存
    const newMessage = await prisma.chat.create({
      data: {
        userId,
        therapistId,
        message,
        senderType: senderType || "USER",
      },
    });

    // 2. AI（Gemini）による予約成立の判定
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const aiPrompt = `
        あなたは理学療法士の予約管理アシスタントです。
        以下のメッセージから、具体的な「予約日時」と「料金」の合意が取れたか判定してください。
        
        合意がある場合（例：「○月○日の○時でお願いします」など）は、以下のJSON形式のみで返してください。
        {"isAppointed": true, "date": "YYYY-MM-DDTHH:mm:ss", "price": 5000}
        
        合意がない場合や、まだ相談中の場合は、以下の形式で返してください。
        {"isAppointed": false}

        現在の年: 2026年
        メッセージ内容: "${message}"
      `;

      const result = await model.generateContent(aiPrompt);
      const aiResponse = JSON.parse(result.response.text().replace(/```json|```/g, ""));

      // 3. 予約が成立していたら、自動で Reservation レコードを作成
      if (aiResponse.isAppointed) {
        await prisma.reservation.create({
          data: {
            userId,
            therapistId,
            date: new Date(aiResponse.date),
            price: aiResponse.price || 5000, // デフォルト単価
            status: "PENDING", // 管理画面に「未完了」として出現させる
          },
        });
        console.log("AIが自動予約を作成しました:", aiResponse.date);
      }
    } catch (aiError) {
      // AI解析に失敗してもチャット送信自体は成功させるため、エラーはログのみ
      console.error("AI Analysis Error:", aiError);
    }

    return NextResponse.json(newMessage);

  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ message: "送信失敗" }, { status: 500 });
  }
}