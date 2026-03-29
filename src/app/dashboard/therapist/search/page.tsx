//理学療法士側から積極的にアプローチを仕掛けるスカウト機能の画面
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, ChevronRight, X, Loader2, UserRound } from "lucide-react";

const calculateDistance = (uLat: number, uLng: number) => {
  const HAKATA_LAT = 33.5897;
  const HAKATA_LNG = 130.4207;
  const R = 6371;

  if (!uLat || !uLng) return "―";

  const dLat = (uLat - HAKATA_LAT) * Math.PI / 180;
  const dLng = (uLng - HAKATA_LNG) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(HAKATA_LAT * Math.PI / 180) *
      Math.cos(uLat * Math.PI / 180) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
};

export default function TherapistUserSearchPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
      } catch {
        setUsers([]);
      }
    };
    loadUsers();
  }, []);

  const filteredUsers = users.filter((u) =>
    filter === "" ? true : u.symptom?.includes(filter)
  );

  const handleSendRequest = async () => {
    if (!msg.trim()) return alert("メッセージを入力してください。");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/match-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: selectedUser.id,
          message: msg,
        }),
      });

      if (res.ok) {
        setSelectedUser(null);
        setMsg("");
      }
    } catch {
      alert("送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">利用者検索</h1>
          <Link
            href="/dashboard/therapist"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            マイページへ戻る
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-10">
        {/* Filter */}
        <div className="mb-10">
          <p className="text-sm font-semibold mb-3">症状で絞り込み</p>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {["", "腰痛", "膝の痛み", "肩こり", "リハビリ", "脳血管", "訪問"].map(
              (tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-lg text-sm border transition ${
                    filter === tag
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {tag === "" ? "すべて" : tag}
                </button>
              )
            )}
          </div>
        </div>

        {/* User List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                    <UserRound size={28} />
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-500">距離</p>
                    <p className="font-semibold text-slate-900 flex items-center gap-1">
                      <MapPin size={14} className="text-blue-500" />
                      {calculateDistance(user.lat, user.lng)} km
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold">{user.name}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    ID: {user.id.slice(0, 8)}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">症状</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {user.symptom || "未入力"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedUser(user)}
                className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                メッセージを送る
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">
              {selectedUser.name} さんへメッセージ
            </h2>

            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="メッセージを入力してください"
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm min-h-[140px] outline-none focus:ring-2 focus:ring-blue-500/20"
            />

            <button
              onClick={handleSendRequest}
              disabled={isSubmitting}
              className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-40"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                "送信する"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}




