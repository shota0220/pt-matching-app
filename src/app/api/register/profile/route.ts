import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    // 1. セッション確認（therapist のみ許可）
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== "THERAPIST") {
      return NextResponse.json({ error: "権限がありません" }, { status: 403 });
    }

    const email = session.user?.email as string;

    const body = await req.json();
    const { specialty, experience, message, lat, lng } = body;

    // 2. バリデーション
    if (!specialty || experience === undefined) {
      return NextResponse.json(
        { error: "専門分野と経験年数は必須です" },
        { status: 400 }
      );
    }

    // 3. 既存の therapist を取得（初回登録かどうか判定）
    const existing = await prisma.therapist.findUnique({
      where: { email },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "セラピスト情報が見つかりません" },
        { status: 404 }
      );
    }

    const isFirstProfile = !existing.specialty || existing.experience === 0;

    // 4. 更新処理
    const updatedTherapist = await prisma.therapist.update({
      where: { email },
      data: {
        specialty,
        experience: Number(experience),
        message: message || "",
        lat: lat ?? 33.5897,
        lng: lng ?? 130.4207,

        // 初回プロフィール登録時のみ初期値をセット
        ...(isFirstProfile && {
          rating: 5.0,
          price: 6000,
        }),
      },
    });

    return NextResponse.json({
      message: "プロフィールを更新しました",
      data: updatedTherapist,
    });

  } catch (error: any) {
    console.error("Profile Registration Error:", error);
    return NextResponse.json(
      {
        error: "プロフィール更新中にエラーが発生しました",
        detail: error.message,
      },
      { status: 500 }
    );
  }
}



