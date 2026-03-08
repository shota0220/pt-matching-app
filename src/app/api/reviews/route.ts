import { NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

// 特定のセラピストのレビュー一覧を取得
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const therapistId = searchParams.get('therapistId');

    const reviews = await prisma.review.findMany({
        where: { therapistId: therapistId as string },
        include: { user: true }, // 投稿者の名前を表示するため
        orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(reviews);
}

// レビューを投稿する
export async function POST(request: Request) {
    const body = await request.json();
    const { rating, comment, userId, therapistId } = body;

    const review = await prisma.review.create({
        data: { rating, comment, userId, therapistId }
    });

    // 【重要】セラピストの平均評価(rating)を再計算して更新するロジックをここに入れると完璧です
    return NextResponse.json(review);
}