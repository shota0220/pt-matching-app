import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { rating, comment, userId, therapistId } = await request.json();

    const result = await prisma.$transaction(async (tx) => {
      // 1. レビュー作成
      const newReview = await tx.review.create({
        data: {
          rating: Number(rating),
          comment,
          userId,
          therapistId
        }
      });

      // 2. 平均評価更新
      const aggregations = await tx.review.aggregate({
        _avg: { rating: true },
        where: { therapistId }
      });

      const newAverage = aggregations._avg.rating || rating;

      await tx.therapist.update({
        where: { id: therapistId },
        data: { rating: newAverage }
      });

      // 3. 全レビュー取得（AI に渡すため）
      const allReviews = await tx.review.findMany({
        where: { therapistId },
        select: { comment: true }
      });

      // 4. AI タグ生成 API を呼ぶ
      const aiRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai/analyze-reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviews: allReviews })
      });

      const { tags } = await aiRes.json();

      // 5. タグを Therapist に保存（String として）
      await tx.therapist.update({
        where: { id: therapistId },
        data: { tags: JSON.stringify(tags) }
      });

      return newReview;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("レビュー投稿エラー:", error);
    return NextResponse.json({ error: "投稿に失敗しました" }, { status: 500 });
  }
}


