//保存場所
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 
import { therapistSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. バリデーション実行
    const validation = therapistSchema.safeParse(body);

    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const errorMessage = 
        fieldErrors.name?.[0] || 
        fieldErrors.email?.[0] || 
        fieldErrors.specialty?.[0] || 
        "入力内容に誤りがあります";

      return NextResponse.json({ message: errorMessage }, { status: 400 });
    }

    // 2. データベース（Therapistモデル）へ保存を実行
    const newTherapist = await prisma.therapist.create({
      data: {
        name: body.name,
        email: body.email,
        specialty: body.specialty,
        // schema.prisma で experienceYears と定義している場合はそちらに合わせます
        experience: typeof body.experience === 'string' ? parseInt(body.experience) : body.experience,
        message: body.bio || "",         // 自己紹介（schemaに合わせてmessageへ）
        photo: body.imageUrl || "",      // 写真URL（schemaに合わせてphotoへ）
        
        // ★ 福岡・博多駅の座標をデフォルト値としてセット
        lat: 33.5897, 
        lng: 130.4207, 
        // rating と price はデフォルト値または初期計算値を入れます
        rating: 4.0, 
        price: 5000,
      },
    }); 

    console.log("-----------------------------------------");
    console.log("✅ 福岡（博多）の理学療法士を登録しました:", newTherapist);
    console.log("-----------------------------------------");

    return NextResponse.json(
      { message: "理学療法士として登録に成功しました", user: newTherapist },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("DB保存エラー詳細:", error);
    return NextResponse.json(
      { message: "サーバー側でエラーが発生しました", detail: error.message },
      { status: 500 }
    );
  }
}