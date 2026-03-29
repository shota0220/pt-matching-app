//患者さんがリハビリ後に「星」と「コメント」を投稿するためのフォーム
"use client";
import { useState } from "react";
import { Star, MessageSquare, Send, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

interface ReviewFormProps {
  therapistId: string;
  userId: string;
}

export default function ReviewForm({ therapistId, userId }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!comment.trim()) return;
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment, userId, therapistId }),
      });
      
      if (res.ok) {
        setComment("");
        router.refresh(); 
      }
    } catch (error) {
      console.error("レビュー投稿エラー:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-blue-50 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
          <Heart size={20} fill="currentColor" />
        </div>
        <div>
          <h3 className="text-sm font-black text-gray-900 tracking-tight">リハビリはいかがでしたか？</h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Your Feedback Matters</p>
        </div>
      </div>

      {/* スター評価 */}
      <div className="flex justify-center gap-3 mb-8 py-4 bg-gray-50 rounded-[2rem] border border-gray-100/50 shadow-inner">
        {[1, 2, 3, 4, 5].map((num) => (
          <button 
            key={num} 
            onMouseEnter={() => setHoveredRating(num)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(num)}
            className="transition-all active:scale-90 hover:scale-110"
          >
            <Star 
              size={36} 
              className={`${
                num <= (hoveredRating || rating) ? "text-yellow-400" : "text-gray-200"
              } transition-colors`}
              fill={num <= (hoveredRating || rating) ? "currentColor" : "none"}
              strokeWidth={2.5}
            />
          </button>
        ))}
      </div>

      {/* コメント入力 */}
      <div className="relative mb-6 group">
        <div className="absolute top-4 left-5 text-gray-300 group-focus-within:text-blue-500 transition-colors">
          <MessageSquare size={18} />
        </div>
        <textarea 
          className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-[1.8rem] border-2 border-transparent text-sm font-bold min-h-[140px] outline-none focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-gray-300"
          placeholder="先生への感謝の気持ちや、施術後の変化を記録しましょう。あなたの声が他の利用者の助けになります。"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button 
        onClick={handleSubmit}
        disabled={isSubmitting || !comment.trim()}
        className="w-full py-5 bg-blue-600 text-white rounded-[1.8rem] font-black text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-30 disabled:grayscale flex items-center justify-center gap-3 group"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span>レビューを投稿する</span>
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-gray-300 font-bold mt-6 italic">
        投稿されたレビューは、セラピストのプロフィール画面に公開されます。
      </p>
    </div>
  );
}


