"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [symptom, setSymptom] = useState("");

  // ★ 修正版：async/await を使って、保存が終わるまで絶対にページ遷移させない
  const handleFormSubmit = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, symptom }),
      });

      const data = await response.json();

      if (!response.ok) {
        // ★ ここでエラー内容を表示（「あ」ならここで止まる）
        alert("エラーが発生しました: " + data.message);
        return; 
      }

      // ★ 保存成功のアラート
      alert("DB保存に成功しました!一覧画面へ移動します。");
      router.push("/users"); // 一覧画面（これから作る）へ移動
    } catch (error) {
      alert("通信に失敗しました。サーバーが起動しているか確認してください。");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "450px", margin: "0 auto" }}>
      <h1>利用者登録</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input 
          placeholder="名前（2文字以上）" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ padding: "10px" }}
        />
        <input 
          placeholder="メールアドレス" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: "10px" }}
        />
        <textarea 
          placeholder="症状（5文字以上）" 
          value={symptom} 
          onChange={(e) => setSymptom(e.target.value)} 
          style={{ padding: "10px" }}
        />
        
        {/* ★ type="button" にすることで、勝手なページ移動を物理的に防ぎます */}
        <button 
          type="button" 
          onClick={handleFormSubmit}
          style={{ padding: "15px", background: "#0070f3", color: "white", border: "none", cursor: "pointer" }}
        >
          保存して検索
        </button>
      </div>
    </div>
  );
}