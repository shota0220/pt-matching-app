"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, MessageCircle, Search, X } from "lucide-react";

interface ChatRoom {
  chatRoomId: string;
  lastMessage: string;
  updatedAt: string;
  partner: {
    id: string;
    name: string;
    role: "USER" | "THERAPIST";
    symptom?: string;
    specialty?: string;
  };
}

export default function ChatListPage() {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [filtered, setFiltered] = useState<ChatRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  // 🔥 検索履歴
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    // 履歴読み込み
    const saved = localStorage.getItem("chatSearchHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }

    // チャット一覧取得
    fetch("/api/chats/list")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setFiltered(data);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔥 検索フィルタリング
  useEffect(() => {
    const lower = keyword.toLowerCase();

    const result = rooms.filter((room) => {
      const name = room.partner.name.toLowerCase();
      const last = room.lastMessage.toLowerCase();
      const symptom = room.partner.symptom?.toLowerCase() || "";
      const specialty = room.partner.specialty?.toLowerCase() || "";

      return (
        name.includes(lower) ||
        last.includes(lower) ||
        symptom.includes(lower) ||
        specialty.includes(lower)
      );
    });

    setFiltered(result);
  }, [keyword, rooms]);

  // 🔥 検索履歴に追加
  const saveHistory = (word: string) => {
    if (!word.trim()) return;

    const newHistory = [
      word,
      ...history.filter((h) => h !== word),
    ].slice(0, 5); // 最大5件

    setHistory(newHistory);
    localStorage.setItem("chatSearchHistory", JSON.stringify(newHistory));
  };

  // 🔥 履歴削除
  const deleteHistory = (word: string) => {
    const newHistory = history.filter((h) => h !== word);
    setHistory(newHistory);
    localStorage.setItem("chatSearchHistory", JSON.stringify(newHistory));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
        <h1 className="text-xl font-bold">チャット一覧</h1>
      </header>

      <main className="max-w-xl mx-auto px-6 py-6 space-y-6">

        {/* 🔥 検索バー */}
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="名前・症状・メッセージで検索"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onBlur={() => saveHistory(keyword)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/30 outline-none"
          />
        </div>

        {/* 🔥 検索履歴 */}
        {history.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-slate-500">検索履歴</p>

            <div className="flex flex-wrap gap-2">
              {history.map((h) => (
                <div
                  key={h}
                  className="flex items-center bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-slate-200"
                  onClick={() => setKeyword(h)}
                >
                  {h}
                  <X
                    size={12}
                    className="ml-2 text-slate-500 hover:text-slate-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteHistory(h);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* チャット一覧 */}
        {filtered.length === 0 ? (
          <p className="text-slate-500 text-sm">該当するチャットがありません。</p>
        ) : (
          filtered.map((room) => (
            <Link
              key={room.chatRoomId}
              href={`/chat/${room.chatRoomId}`}
              className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              <div>
                <p className="font-semibold text-slate-900">
                  {room.partner.name}
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  {room.partner.role === "USER"
                    ? `症状: ${room.partner.symptom || "未入力"}`
                    : `専門: ${room.partner.specialty || "未設定"}`}
                </p>

                <p className="text-sm text-slate-700 mt-2 line-clamp-1">
                  {room.lastMessage}
                </p>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-400">
                  {new Date(room.updatedAt).toLocaleTimeString("ja-JP", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>

                <MessageCircle className="text-blue-600 mt-2" size={20} />
              </div>
            </Link>
          ))
        )}
      </main>
    </div>
  );
}
