//予約確定後に、訪問先の住所詳細や現在の状態をやり取りするための画面
"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ChevronLeft, Send, MoreHorizontal, Sparkles } from "lucide-react";

function ChatContent() {
  const router = useRouter();
  const params = useParams();
  const { data: session } = useSession();

  const chatId = Number(params.id);
  const myRole = (session?.user as any)?.role;
  const myId = (session?.user as any)?.id;

  const [partnerName, setPartnerName] = useState("相手");
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const scrollEndRef = useRef<HTMLDivElement>(null);

  // ★ AI 返信案
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loadingAI, setLoadingAI] = useState(false);

  // 🔥 チャット履歴取得
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch(`/api/chats/${chatId}`);
      const data = await res.json();

      setMessages(data);

      if (data.length > 0) {
        const first = data[0];
        const partner =
          myRole === "THERAPIST" ? first.userName : first.therapistName;
        setPartnerName(partner || "相手");
      }
    };

    fetchMessages();
  }, [chatId, myRole]);

  // 🔥 スクロール自動移動
  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔥 メッセージ送信
  const sendMessage = async () => {
    if (!input.trim()) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = {
      id: Date.now(),
      sender: myRole === "THERAPIST" ? "pt" : "user",
      message: input,
      time: timeStr,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    await fetch("/api/chats/send", {
      method: "POST",
      body: JSON.stringify({
        chatId,
        message: newMessage.message,
      }),
    });
  };

  // ★ AI 返信案生成
  const generateAISuggestions = async () => {
    if (messages.length === 0) return;

    const lastMessage = messages[messages.length - 1].message;

    setLoadingAI(true);
    const res = await fetch("/api/ai/suggest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lastMessage,
        context: myRole === "THERAPIST" ? "理学療法士としての返信" : "患者としての返信",
      }),
    });

    const data = await res.json();
    setSuggestions(data.suggestions || []);
    setLoadingAI(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-white border border-slate-200 rounded-xl shadow-sm">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <p className="text-sm font-semibold text-slate-900">{partnerName}</p>
            <p className="text-xs text-slate-400">チャット相談</p>
          </div>
        </div>

        <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition">
          <MoreHorizontal size={20} />
        </button>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 bg-slate-50">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === "pt" || msg.sender === "THERAPIST"
                  ? "items-end"
                  : "items-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 text-sm rounded-lg shadow-sm ${
                  msg.sender === "pt" || msg.sender === "THERAPIST"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-200 text-slate-800"
                }`}
              >
                {msg.message}
              </div>
              <span
                className={`text-[10px] mt-1 ${
                  msg.sender === "pt" || msg.sender === "THERAPIST"
                    ? "text-blue-600"
                    : "text-slate-400"
                }`}
              >
                {new Date(msg.createdAt || Date.now()).toLocaleTimeString(
                  "ja-JP",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </span>
            </div>
          ))}

          <div ref={scrollEndRef} />
        </div>
      </div>

      {/* ★ AI 返信案表示エリア */}
      {suggestions.length > 0 && (
        <div className="border-t border-slate-200 bg-white p-4 space-y-3">
          <p className="text-xs text-slate-500">AI の返信案</p>
          {suggestions.map((s, i) => (
            <div
              key={i}
              onClick={() => setInput(s)}
              className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm cursor-pointer hover:bg-blue-100 transition"
            >
              {s}
            </div>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex gap-3 items-end">
          <textarea
            rows={1}
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none resize-none focus:bg-white focus:ring-2 focus:ring-blue-500/30"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="メッセージを入力"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />

          {/* ★ AI ボタン */}
          <button
            onClick={generateAISuggestions}
            className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-100 text-purple-700 hover:bg-purple-200 transition"
          >
            {loadingAI ? (
              <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Sparkles size={20} />
            )}
          </button>

          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition ${
              input.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-slate-100 text-slate-300"
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-xs text-slate-500">接続中...</p>
        </div>
      }
    >
      <ChatContent />
    </Suspense>
  );
}
