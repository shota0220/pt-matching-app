import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/generated/client"; // 生成した場所に合わせて調整

const prisma = new PrismaClient();

export async function GET() {
  try {
    // 全ての利用者を、新しい順に取得
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "データ取得失敗" }, { status: 500 });
  }
}