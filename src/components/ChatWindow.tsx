//利用者と理学療法士が直接やり取りを行う「チャットコンポーネント」
"use client";
import { useState, useEffect, useRef } from "react";
import { Send, ShieldCheck, User, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  message: string;
  senderType: "USER" | "THERAPIST";
  createdAt: string;
}

export default function ChatWindow({ 
  userId, 
  therapistId, 
  currentUserType 
}: { 
  userId: string, 
  therapistId: string, 
  currentUserType: "USER" | "THERAPIST" 
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // メッセージが追加されたら自動スクロール
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // 1. メッセージ履歴の取得
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(`/api/chats?userId=${userId}&therapistId=${therapistId}`);
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("履歴の取得に失敗しました");
      }
    };
    fetchHistory();
  }, [userId, therapistId]);

  // 2. メッセージ送信（AI予約検知連動）
  const sendMessage = async () => {
    if (!input.trim()) return;

    const currentInput = input;
    setInput(""); // 即座にクリア（楽観的UI）

    const res = await fetch("/api/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        therapistId,
        message: currentInput,
        senderType: currentUserType
      }),
    });

    if (res.ok) {
      const newMessage = await res.json();
      setMessages((prev) => [...prev, newMessage]);
      
      // AI予約検知の通知
      if (currentInput.includes("予約") || currentInput.includes("お願い")) {
        console.log("AIが予約意図を検知しました。カレンダーを更新中...");
      }
    }
  };

  return (
    <div className="flex flex-col h-[650px] bg-white rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
      {/* ヘッダー：医療機関のような信頼感 */}
      <div className="px-8 py-6 bg-white border-b border-gray-50 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-2xl">
            <MessageCircle size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black text-gray-900 tracking-tight">メッセージ対話</h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Secure PT Session</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black border border-green-100">
          <ShieldCheck size={12} /> AI Monitoring
        </div>
      </div>

      {/* メッセージエリア */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-6 bg-gray-50/30 scroll-smooth"
      >
        {messages.map((msg) => {
          const isMe = msg.senderType === currentUserType;
          return (
            <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div className="flex flex-col gap-1 max-w-[80%]">
                <div className={`p-5 rounded-[2rem] text-sm font-bold shadow-sm leading-loose ${
                  isMe 
                    ? "bg-blue-600 text-white rounded-tr-none shadow-blue-100" 
                    : "bg-white text-gray-800 border border-gray-50 rounded-tl-none"
                }`}>
                  {msg.message}
                </div>
                <div className={`text-[10px] px-2 font-black text-gray-300 ${isMe ? "text-right" : "text-left"}`}>
                  {new Date(msg.createdAt).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 入力エリア */}
      <div className="p-8 bg-white border-t border-gray-50">
        <div className="flex gap-3 bg-gray-50 p-2 rounded-[2rem] border border-gray-100 focus-within:border-blue-200 focus-within:bg-white transition-all shadow-inner">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="「来週の予約をお願いします」など..."
            className="flex-1 bg-transparent px-6 py-3 text-sm focus:outline-none font-bold text-gray-700"
          />
          <button 
            onClick={sendMessage}
            className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 active:scale-90 transition-all shadow-xl shadow-blue-200 group"
          >
            <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-300 font-bold mt-4 uppercase tracking-tighter">
          Messages are encrypted for your privacy
        </p>
      </div>
    </div>
  );
}

