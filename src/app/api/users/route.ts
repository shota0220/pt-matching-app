import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // 全ての利用者を、新しい順に取得
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        gender: true,
        symptom: true, // どんな悩みを持っているか
        medicalHistory: true, // 既往歴
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(users);
  } catch (error: any) {
    console.error("ユーザー一覧取得エラー:", error);
    return NextResponse.json(
      { message: "データ取得に失敗しました", detail: error.message }, 
      { status: 500 }
    );
  }
}

