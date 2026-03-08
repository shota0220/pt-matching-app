//チャットページ
"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function ChatPage({ params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name") || "利用者";
    const reservationId = params.id; // URLの [id] 部分（予約IDなど）
    
    // セラピストIDは本来認証情報から取得しますが、一旦定数で置いておきます
    const therapistId = "pt_fixed_1"; 

    const [messages, setMessages] = useState([
        { id: 1, sender: "pt", text: "初めまして！今の症状について詳しく教えていただけますか？", time: "10:00" }
    ]);
    const [input, setInput] = useState("");
    const scrollEndRef = useRef<HTMLDivElement>(null);

    // メッセージが増えたら自動で一番下までスクロール
    useEffect(() => {
        scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const now = new Date();
        const timeStr = formatTime(now);
        
        // 1. 画面上の即時反映
        const newMessage = { 
            id: Date.now(), 
            sender: "pt", 
            text: input, 
            time: timeStr 
        };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");

        // 2. DB保存APIへのリクエスト
        try {
            await fetch("/api/chats/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    reservationId: reservationId, // どの予約に関するチャットか
                    senderId: therapistId,
                    text: input,
                }),
            });
        } catch (error) {
            console.error("送信エラー:", error);
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 font-sans">
            {/* ヘッダー：相手の名前を強調 */}
            <header className="bg-white p-4 border-b flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                        {userName[0]}
                    </div>
                    <h1 className="font-bold text-gray-800">{userName} 様</h1>
                </div>
                <span className="text-xs text-green-500 font-bold bg-green-50 px-2 py-1 rounded">オンライン</span>
            </header>

            {/* チャットエリア：吹き出しのスタイルを洗練 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex flex-col ${msg.sender === "pt" ? "items-end" : "items-start"}`}>
                        <div className={`max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                            msg.sender === "pt" 
                            ? "bg-blue-600 text-white rounded-tr-none" 
                            : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                        }`}>
                            {msg.text}
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
                    </div>
                ))}
                <div ref={scrollEndRef} />
            </div>

            {/* 入力エリア：iOS風のモダンなデザイン */}
            <div className="p-4 bg-white border-t pb-8">
                <div className="flex gap-2 bg-gray-100 p-1 rounded-3xl items-center pr-2">
                    <input 
                        className="flex-1 bg-transparent p-3 outline-none text-sm ml-2 text-gray-700"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="メッセージを入力..."
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                            }
                        }}
                    />
                    <button 
                        onClick={sendMessage}
                        disabled={!input.trim()}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            input.trim() ? "bg-blue-600 text-white shadow-md scale-100" : "bg-gray-300 text-gray-100 scale-90"
                        }`}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}