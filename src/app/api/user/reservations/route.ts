import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export async function GET() {
  try {
    // セッション取得
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // ログイン中ユーザーの予約一覧を取得
    const reservations = await prisma.reservation.findMany({
      where: { userId: session.user.id },
      include: {
        therapist: {
          select: {
            id: true,
            name: true,
            specialty: true,
            photo: true,
            rating: true,
          },
        },
      },
      orderBy: { date: "asc" },
    });

    return NextResponse.json(reservations);
  } catch (error) {
    console.error("GET /api/user/reservations error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

