//予約を承認する (PATCH)：セラピストが「承認」を押した時に動く
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function PATCH(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "ログインが必要です" },
        { status: 401 }
      );
    }

    // ログイン中のユーザーがセラピストか確認
    const therapist = await prisma.therapist.findUnique({
      where: { email: session.user.email },
    });

    if (!therapist) {
      return NextResponse.json(
        { error: "セラピストのみ承認できます" },
        { status: 403 }
      );
    }

    // 予約を更新（承認）
    const updated = await prisma.reservation.update({
      where: { id },
      data: { status: "CONFIRMED" },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Reservation Confirm Error:", error);
    return NextResponse.json(
      { error: "サーバーエラー" },
      { status: 500 }
    );
  }
}



