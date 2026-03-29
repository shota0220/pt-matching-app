import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password, specialty, bio } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "必須項目が不足しています。" },
        { status: 400 }
      );
    }

    // 既存チェック
    const existing = await prisma.therapist.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { message: "このメールアドレスは既に登録されています。" },
        { status: 400 }
      );
    }

    // 登録
    const therapist = await prisma.therapist.create({
      data: {
        name,
        email,
        password, // 今は平文でOK（後でハッシュ化する）
        specialty: specialty || "",
        message: bio || "",
        walletBalance: 0,
        rating: 5.0,
        lat: 33.5902, // 仮の値（後で位置情報登録画面を作る）
        lng: 130.4206,
      },
    });

    return NextResponse.json({ therapist }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "登録に失敗しました。" },
      { status: 500 }
    );
  }
}
