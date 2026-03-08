//レビュー（評価）表示機能の画面
//セラピストがこれまでに受け取った評価を「星」と一緒に表示する
"use client";

// Prismaの型定義に基づいたインターフェース
interface Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: string | Date;
  user: {
    name: string;
  };
}

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  // レビューがまだない場合の表示
  if (reviews.length === 0) {
    return (
      <div className="mt-12 p-8 border-2 border-dashed border-gray-100 rounded-3xl text-center">
        <p className="text-gray-400 text-sm italic">
          まだレビューがありません。最初のリハビリ後に感想をお待ちしています。
        </p>
      </div>
    );
  }

  // 平均スコアの計算（簡易版）
  const averageRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="mt-12 space-y-6">
      {/* ヘッダーエリア：合計件数と平均表示 */}
      <div className="flex items-end justify-between px-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800">利用者からのレビュー</h3>
          <p className="text-sm text-gray-500">{reviews.length}件の評価</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-blue-600">{averageRating}</span>
          <span className="text-sm text-gray-400 ml-1">/ 5.0</span>
        </div>
      </div>

      {/* レビューカード一覧 */}
      <div className="grid gap-4">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:border-blue-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex flex-col gap-1">
                {/* 星5つの評価インジケーター */}
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? "fill-current" : "text-gray-200"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-bold text-gray-800 tracking-tight">
                  {review.user?.name || "匿名希望"} 様
                </span>
              </div>
              
              {/* 投稿日 */}
              <time className="text-[10px] text-gray-400 font-medium">
                {new Date(review.createdAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </time>
            </div>

            {/* レビュー本文 */}
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}