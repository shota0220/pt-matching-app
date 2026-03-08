import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { specialty, experience, message, lat, lng } = body;

    // 1. バリデーション（最低限のチェック）
    if (!specialty || !experience) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    // 2. データベースへ保存
    // 本来はログイン中のユーザーID（Session）を使いますが、
    // まずは「新規作成」として動かします。メールアドレスはユニークなものを仮生成します。
    const newTherapist = await prisma.therapist.create({
      data: {
        name: "新規登録セラピスト", // 本来はログイン画面の名前を引き継ぐ
        email: `new_pt_${Date.now()}@example.com`,
        specialty,
        experience: Number(experience),
        message,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        rating: 5.0, // 新規登録時は満点からスタート！
        price: 6000,  // デフォルト料金
      },
    });

    return NextResponse.json({ message: "プロフィールを登録しました", data: newTherapist });
  } catch (error) {
    console.error("Profile Registration Error:", error);
    return NextResponse.json({ error: "サーバーエラーが発生しました" }, { status: 500 });
  }
}