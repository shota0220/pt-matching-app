"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// 距離計算の関数（博多駅を基準点として計算）
const calculateDistance = (lat1: number, lng1: number) => {
  const HAKATA_LAT = 33.5897;
  const HAKATA_LNG = 130.4207;
  const R = 6371;
  const dLat = (lat1 - HAKATA_LAT) * Math.PI / 180;
  const dLng = (lng1 - HAKATA_LNG) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(HAKATA_LAT * Math.PI/180) * Math.cos(lat1 * Math.PI/180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))).toFixed(1);
};

export default function AdvancedUserSearchPage() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("すべて");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/users").then(res => res.json()).then(data => setUsers(data)).catch(() => setUsers([]));
  }, []);

  const filteredUsers = users.filter((u: any) => 
    filter === "すべて" || (u.symptom && u.symptom.includes(filter))
  );

  const handleSendRequest = async () => {
    const res = await fetch("/api/match-requests", {
      method: "POST",
      body: JSON.stringify({
        therapistId: "current-pt-id", 
        userId: selectedUser.id,
        message: msg
      })
    });
    if(res.ok) {
      alert("スカウトを送信しました！");
      setSelectedUser(null);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      {/* ナビゲーション（線を繋ぐ部分） */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">利用者スカウト（福岡・博多エリア）</h1>
        <Link href="/mypage" className="text-blue-600 hover:underline font-medium">
          ← マイページへ戻る
        </Link>
      </div>

      {/* 悩みフィルタ */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {["すべて", "腰痛", "膝の痛み", "肩こり", "リハビリ"].map(tag => (
          <button 
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-6 py-2 rounded-full border transition-all ${
                filter === tag ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 利用者カード一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUsers.map((user: any) => (
          <div key={user.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
            <span className="absolute top-4 right-4 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-100">
              現在地から {calculateDistance(33.58, 130.40)}km
            </span>
            <h2 className="text-xl font-bold mb-3 text-gray-800">{user.name}さん</h2>
            <div className="bg-blue-50 p-4 rounded-xl mb-5 text-blue-900 text-sm leading-relaxed">
              <strong>お悩み内容：</strong><br /> {user.symptom}
            </div>
            <button 
              onClick={() => setSelectedUser(user)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition-colors"
            >
              マッチング申請を送る
            </button>
          </div>
        ))}
      </div>

      {/* 申請用モーダル */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-3xl w-full max-w-md shadow-2xl">
            <h3 className="text-xl font-bold mb-2">{selectedUser.name}さんへ</h3>
            <p className="text-gray-500 text-sm mb-4">スカウトメッセージを入力してください</p>
            <textarea 
              className="w-full border border-gray-200 p-4 rounded-xl mb-6 h-40 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="例：初めまして。博多駅周辺で活動している理学療法士です。その症状であれば、自宅でできる簡単なエクササイズからお手伝いできます。"
              onChange={(e) => setMsg(e.target.value)}
            />
            <div className="flex gap-3">
              <button onClick={() => setSelectedUser(null)} className="flex-1 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium">キャンセル</button>
              <button onClick={handleSendRequest} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200">送信する</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}