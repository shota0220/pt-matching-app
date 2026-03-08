//プロフィール編集（マイページ）
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    specialty: "",
    experience: 0,
    message: "",
    price: 0,
  });

  // 1. 現在の自分のデータをDBから持ってくる（仮のID 'pt_fixed_1' でテスト）
  useEffect(() => {
    fetch("/api/mypage/profile?id=pt_fixed_1")
      .then(res => res.json())
      .then(data => setFormData(data));
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/mypage/profile", {
      method: "PUT", // 更新なので PUT を使います
      body: JSON.stringify({ id: 'pt_fixed_1', ...formData }),
    });

    if (res.ok) {
      alert("プロフィールを更新しました！");
      router.push("/results");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10">
      <h1 className="text-2xl font-bold mb-6 text-green-600">プロフィールの編集</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-bold">専門分野</label>
          <input type="text" className="w-full p-3 border rounded" 
            value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-bold">自己紹介（ここが地図のポップアップに出ます）</label>
          <textarea className="w-full p-3 border rounded" rows={5}
            value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-4 rounded-xl font-bold">
          変更を保存する
        </button>
      </form>
    </div>
  );
}