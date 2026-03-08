//チャット履歴を保存する
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId, therapistId, message } = await req.json();
  
  // 解説：メッセージをDBに保存。これでリロードしても履歴が残る
  const chat = await prisma.chat.create({
    data: { userId, therapistId, message }
  });
  
  return NextResponse.json(chat);
}