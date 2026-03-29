//レビュー（評価）表示機能の画面
//セラピストがこれまでに受け取った評価を「星」と一緒に表示する
"use client";
import { Star, MessageCircle, Calendar, User } from "lucide-react";

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
  // 1. レビューがまだない場合のEmpty State
  if (reviews.length === 0) {
    return (
      <div className="mt-16 p-12 bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-[3rem] text-center animate-in fade-in duration-700">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-300 shadow-sm">
          <MessageCircle size={32} />
        </div>
        <h4 className="text-gray-900 font-black text-sm mb-1 uppercase tracking-widest">No Reviews Yet</h4>
        <p className="text-gray-400 text-xs font-bold italic px-6 leading-relaxed">
          まだレビューがありません。<br />最初のリハビリ後に、あなたの貴重な感想をお待ちしています。
        </p>
      </div>
    );
  }

  // 2. 平均スコアの計算
  const avg = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
  const averageRating = avg.toFixed(1);

  return (
    <div className="mt-16 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 統計ヘッダー */}
      <div className="flex items-end justify-between px-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Star size={20} fill="currentColor" strokeWidth={0} />
            <h3 className="text-lg font-black tracking-tighter text-gray-900 uppercase">Patient Reviews</h3>
          </div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-7">
            {reviews.length} Total Feedbacks
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black text-blue-600 tracking-tighter italic">{averageRating}</span>
            <span className="text-xs font-black text-gray-300">/ 5.0</span>
          </div>
        </div>
      </div>

      {/* レビューカード一覧 */}
      <div className="grid gap-5">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-50 hover:border-blue-100 transition-all group"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <User size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-gray-900 tracking-tight">
                    {review.user?.name || "匿名希望"} 様
                  </span>
                  {/* 星評価の可視化 */}
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-100"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-300 uppercase tracking-widest">
                <Calendar size={12} />
                {new Date(review.createdAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </div>
            </div>

            <div className="relative pl-4 border-l-2 border-gray-50 group-hover:border-blue-100 transition-colors">
              <p className="text-gray-600 text-sm font-medium leading-[1.8] whitespace-pre-wrap italic">
                "{review.comment}"
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-[9px] text-gray-300 font-black uppercase tracking-[0.4em] py-4">
        Trust & Quality assured by Reha-Hikari
      </p>
    </div>
  );
}
