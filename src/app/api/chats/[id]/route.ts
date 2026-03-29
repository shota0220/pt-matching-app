import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const chatId = Number(params.id);

  if (isNaN(chatId)) {
    return NextResponse.json({ error: "chatId が不正です" }, { status: 400 });
  }

  try {
    const messages = await prisma.chat.findMany({
      where: { id: chatId },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ message: "取得失敗" }, { status: 500 });
  }
}
