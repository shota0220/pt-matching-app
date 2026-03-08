//senderType に応じて左右に振り分け、色を変えることで「誰の発言か」を一目でわかるようにする
"use client";
import { useState, useEffect } from "react";

interface Message {
  id: string;
  message: string;
  senderType: "USER" | "THERAPIST";
  createdAt: string;
}

export default function ChatWindow({ userId, therapistId, currentUserType }: { userId: string, therapistId: string, currentUserType: "USER" | "THERAPIST" }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // 1. メッセージ履歴の取得
  useEffect(() => {
    const fetchHistory = async () => {
      const res = await fetch(`/api/chats?userId=${userId}&therapistId=${therapistId}`);
      const data = await res.json();
      setMessages(data);
    };
    fetchHistory();
  }, [userId, therapistId]);

  // 2. メッセージ送信（ここでAI予約検知APIが走る）
  const sendMessage = async () => {
    if (!input.trim()) return;

    const res = await fetch("/api/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        therapistId,
        message: input,
        senderType: currentUserType // 現在ログインしている側の種別
      }),
    });

    if (res.ok) {
      const newMessage = await res.json();
      setMessages([...messages, newMessage]);
      setInput("");
      // ヒント: ここで「予約が自動作成されました」という通知を出すと親切です
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
      {/* ヘッダー */}
      <div className="p-6 bg-blue-600 text-white flex justify-between items-center">
        <h3 className="font-black text-sm uppercase tracking-widest">Chat Session</h3>
        <span className="text-[10px] bg-white/20 px-3 py-1 rounded-full font-bold">Secure AI Active</span>
      </div>

      {/* メッセージエリア */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
        {messages.map((msg) => {
          // 自分が送ったメッセージかどうかで左右を判定
          const isMe = msg.senderType === currentUserType;
          return (
            <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] p-4 rounded-[1.8rem] text-sm font-bold shadow-sm leading-relaxed ${
                isMe 
                  ? "bg-blue-600 text-white rounded-tr-none" 
                  : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
              }`}>
                {msg.message}
                <div className={`text-[9px] mt-1 opacity-50 ${isMe ? "text-right" : "text-left"}`}>
                  {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 入力エリア */}
      <div className="p-6 bg-white border-t border-gray-100 flex gap-3">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="予約の相談や体調を伝えましょう..."
          className="flex-1 bg-gray-100 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all font-bold"
        />
        <button 
          onClick={sendMessage}
          className="bg-blue-600 text-white p-3 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-100"
        >
          🚀
        </button>
      </div>
    </div>
  );
}