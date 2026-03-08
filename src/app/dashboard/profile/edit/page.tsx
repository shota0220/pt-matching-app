"use client";
import { useState } from "react";

export default function ProfileEditPage() {
  const [currentMessage, setCurrentMessage] = useState("現在の手書きの自己紹介文...");
  const [aiRefinedText, setAiRefinedText] = useState(""); // AIが提案した文章
  const [isSaving, setIsSaving] = useState(false);

  // 1. プロフィール保存処理（先ほど修正したAPIを叩く）
  const handleFinalSave = async () => {
    if (!aiRefinedText) return alert("AI提案がありません");
    
    setIsSaving(true);
    try {
      const res = await fetch("/api/therapist/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "渡邉 健二", // 本来は入力フォームの値
          specialty: "徒手療法 / 腰痛専門",
          experience: 8,
          message: aiRefinedText // AIが磨いた文章を正式採用！
        })
      });

      if (res.ok) {
        alert("プロフィールを正式に更新しました！公開画面に反映されます。");
        setCurrentMessage(aiRefinedText); // 表示を更新
      }
    } catch (error) {
      console.error("保存失敗", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-black mb-8">プロフィールの編集</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 左側：現在の編集画面 */}
        <section className="space-y-4">
          <label className="text-sm font-bold text-gray-500">現在の自己紹介</label>
          <textarea 
            className="w-full h-64 p-4 rounded-2xl border border-gray-200 text-sm"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button className="w-full py-3 bg-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors">
            🪄 AIで文章を磨く（プレビュー生成）
          </button>
        </section>

        {/* 右側：AI提案プレビュー & 確定ボタン */}
        {aiRefinedText && (
          <section className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <label className="text-sm font-bold text-blue-600 flex items-center gap-2">
              ✨ AI提案のプロフィール
            </label>
            <div className="w-full h-64 p-6 rounded-2xl bg-blue-50 border border-blue-100 text-sm text-blue-900 leading-relaxed italic">
              {aiRefinedText}
            </div>

            {/* これが「確定」ボタン！ */}
            <button 
              onClick={handleFinalSave}
              disabled={isSaving}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-50"
            >
              {isSaving ? "保存中..." : "この内容でプロフィールを確定する"}
            </button>
            <p className="text-[10px] text-center text-gray-400 font-bold">
              ※確定すると公開画面のメッセージが書き換わります
            </p>
          </section>
        )}
      </div>
    </div>
  );
}