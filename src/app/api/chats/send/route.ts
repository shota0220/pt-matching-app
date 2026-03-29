import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const { chatId, message } = await request.json();

    if (!chatId || !message) {
      return NextResponse.json({ message: "入力不足" }, { status: 400 });
    }

    // チャットルーム情報を取得
    const chatRoom = await prisma.chat.findUnique({
      where: { id: Number(chatId) },
      select: { userId: true, therapistId: true },
    });

    if (!chatRoom) {
      return NextResponse.json({ message: "チャットルームが存在しません" }, { status: 404 });
    }

    const { userId, therapistId } = chatRoom;

    // 1. メッセージ保存
    const newMessage = await prisma.chat.create({
      data: {
        id: Number(chatId),
        userId,
        therapistId,
        message,
        sender: session?.user?.role || "USER",
      },
    });

    // 2. AI による予約検知（非同期）
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const aiPrompt = `
        あなたは理学療法士の予約管理アシスタントです。
        以下のメッセージから「具体的な日時」の予約合意があるか判定してください。
        
        合意がある場合：{"isAppointed": true, "date": "YYYY-MM-DDTHH:mm:ss", "price": 5000}
        合意がない場合：{"isAppointed": false}

        内容: "${message}"
      `;

      const result = await model.generateContent(aiPrompt);
      const text = result.response.text();
      const jsonMatch = text.match(/\{[\s\S]*\}/);

      if (jsonMatch) {
        const aiResponse = JSON.parse(jsonMatch[0]);

        if (aiResponse.isAppointed) {
          await prisma.reservation.create({
            data: {
              userId,
              therapistId,
              date: new Date(aiResponse.date),
              price: aiResponse.price || 5000,
              status: "PENDING",
            },
          });
        }
      }
    } catch (aiError) {
      console.error("AI解析エラー:", aiError);
    }

    return NextResponse.json(newMessage);

  } catch (error) {
    return NextResponse.json({ message: "送信失敗" }, { status: 500 });
  }
}
