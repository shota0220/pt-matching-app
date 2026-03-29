import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "認証が必要です" }, { status: 401 });
    }

    const role = (session.user as any).role;
    const sessionUserId = (session.user as any).id;

    const { therapistId, userId, message } = await request.json();

    // 役割に応じて ID を補完する
    const finalTherapistId = role === "THERAPIST" ? sessionUserId : therapistId;
    const finalUserId = role === "USER" ? sessionUserId : userId;

    if (!finalTherapistId || !finalUserId) {
      return NextResponse.json({ message: "IDが不足しています" }, { status: 400 });
    }

    // 二重申請チェック
    const existingRequest = await prisma.matchRequest.findFirst({
      where: {
        therapistId: finalTherapistId,
        userId: finalUserId,
        status: "PENDING",
      },
    });

    if (existingRequest) {
      return NextResponse.json(
        { message: "既に申請済みです。回答をお待ちください。" },
        { status: 400 }
      );
    }

    // 作成
    const newRequest = await prisma.matchRequest.create({
      data: {
        therapistId: finalTherapistId,
        userId: finalUserId,
        message,
        status: "PENDING",
      },
    });

    return NextResponse.json(
      {
        message:
          role === "THERAPIST"
            ? "利用者へスカウトを送りました！"
            : "理学療法士にマッチング申請を送りました！",
        data: newRequest,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("申請保存エラー:", error);
    return NextResponse.json(
      { message: "保存に失敗しました", detail: error.message },
      { status: 500 }
    );
  }
}
