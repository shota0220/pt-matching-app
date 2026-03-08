//患者さんがリハビリ後に「星」と「コメント」を投稿するためのフォーム
"use client";
import { useState } from "react";

interface ReviewFormProps {
  therapistId: string;
  userId: string;
}

export default function ReviewForm({ therapistId, userId }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!comment.trim()) return alert("コメントを入力してください");
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment, userId, therapistId }),
      });
      if (res.ok) {
        alert("レビューを投稿しました！");
        setComment("");
        location.reload(); // 最新のレビューを反映
      }
    } catch (error) {
      console.error("投稿エラー:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 mt-10">
      <h3 className="font-bold text-blue-900 mb-4">リハビリはいかがでしたか？</h3>
      <div className="flex gap-3 mb-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button 
            key={num} 
            onClick={() => setRating(num)}
            className={`text-3xl transition-transform active:scale-90 ${num <= rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </button>
        ))}
      </div>
      <textarea 
        className="w-full p-4 rounded-2xl border-none text-sm mb-4 outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
        placeholder="施術の感想や、セラピストへの感謝を伝えましょう"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button 
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "送信中..." : "レビューを投稿する"}
      </button>
    </div>
  );
}