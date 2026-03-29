import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, symptom } = body;

    // 必須チェック
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "名前、メール、パスワードは必須です" },
        { status: 400 }
      );
    }

    // 二重登録チェック
    const existingUser = await prisma.user.findUnique({ where: { email } });
    const existingPT = await prisma.therapist.findUnique({ where: { email } });

    if (existingUser || existingPT) {
      return NextResponse.json(
        { message: "このメールアドレスは既に登録されています" },
        { status: 400 }
      );
    }

    // 一般利用者として登録
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        symptom: symptom || "未入力",
      },
    });

    return NextResponse.json(
      { message: "一般利用者として登録しました", user: newUser },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("User Registration Error:", error);
    return NextResponse.json(
      {
        message: "登録中にエラーが発生しました",
        detail: error.message,
      },
      { status: 500 }
    );
  }
}
