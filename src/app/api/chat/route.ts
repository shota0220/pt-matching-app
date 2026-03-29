//チャット履歴を保存する
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

 //[POST] チャットメッセージの送信・保存
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user as { id: string; role: string } | undefined;

    if (!user) {
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    const { therapistId, message } = await req.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: "メッセージを入力してください" }, { status: 400 });
    }

    // メッセージの作成
    const chat = await prisma.chat.create({
      data: {
        userId: user.role === "USER" ? user.id : (req as any).userId || "", 
        therapistId: therapistId,
        message: message.trim(), 
        sender: user.role,  
      }
    });

    return NextResponse.json(chat);
  } catch (error) {
    console.error("Chat Post Error:", error);
    return NextResponse.json({ error: "メッセージの送信に失敗しました" }, { status: 500 });
  }
}


 //[GET] チャット履歴の取得
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user as { id: string; role: string } | undefined;

    if (!user) {
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const therapistId = searchParams.get("therapistId");

    if (!userId || !therapistId) {
      return NextResponse.json({ error: "IDが不足しています" }, { status: 400 });
    }

    // セキュリティチェック
    if (user.id !== userId && user.id !== therapistId) {
      return NextResponse.json({ error: "アクセス権限がありません" }, { status: 403 });
    }

    const history = await prisma.chat.findMany({
      where: {
        userId,
        therapistId,
      },
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
        message: true, 
        sender: true, 
        createdAt: true,
      }
    });

    return NextResponse.json(history);
  } catch (error) {
    console.error("Chat Fetch Error:", error);
    return NextResponse.json({ error: "履歴の取得に失敗しました" }, { status: 500 });
  }
}


