//予約を作る (POST)：患者が予約ボタンを押した時に動く

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


//GET: ユーザーの予約一覧取得
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "ログインが必要です" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "ユーザーが見つかりません" },
        { status: 404 }
      );
    }

    const reservations = await prisma.reservation.findMany({
      where: { userId: user.id },
      include: {
        therapist: {
          select: {
            name: true,
            specialty: true,
            rating: true,
          },
        },
      },
      orderBy: { date: "asc" },
    });

    const formatted = reservations.map((res) => ({
      id: res.id,
      date: res.date.toISOString(),
      status: res.status,
      price: res.price,
      therapistName: res.therapist.name,
      specialty: res.therapist.specialty,
      rating: res.therapist.rating,
    }));

    return NextResponse.json(formatted);
  } catch (error: any) {
    console.error("ユーザー予約取得エラー:", error);
    return NextResponse.json(
      { error: "予約情報の取得に失敗しました", detail: error.message },
      { status: 500 }
    );
  }
}

// POST: 新規予約作成
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "ログインが必要です" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "ユーザーが見つかりません" },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { therapistId, date, price } = body;

    if (!therapistId || !date) {
      return NextResponse.json(
        { error: "必要な情報が不足しています" },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        userId: user.id,
        therapistId,
        date: new Date(date),
        price,
        status: "PENDING", // ← ここが重要（PT が承認するまで仮予約）
      },
    });

    return NextResponse.json({ success: true, reservation });
  } catch (error: any) {
    console.error("予約作成エラー:", error);
    return NextResponse.json(
      { error: "予約の作成に失敗しました", detail: error.message },
      { status: 500 }
    );
  }
}



