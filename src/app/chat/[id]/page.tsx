//予約確定後に、訪問先の住所詳細や現在の状態をやり取りするための画面
"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

interface Message {
    id: string | number;
    sender: "pt" | "user";
    text: string;
    time: string;
}

export default function ChatPage({ params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name") || "利用者";
    const userId = searchParams.get("userId") || "test_user_id"; // 実装時はURLかStateから取得
    const reservationId = params.id;
    const therapistId = "pt_fixed_1"; 

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
    const [isAiLoading, setIsAiLoading] = useState(false);
    const scrollEndRef = useRef<HTMLDivElement>(null);

    // 1. DBからチャット履歴をロード
    useEffect(() => {
        const loadHistory = async () => {
            try {
                const res = await fetch(`/api/chats?userId=${userId}&therapistId=${therapistId}`);
                const data = await res.json();
                const formatted = data.map((m: any) => ({
                    id: m.id,
                    sender: m.senderType === "PT" ? "pt" : "user",
                    text: m.message,
                    time: new Date(m.createdAt).toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" })
                }));
                setMessages(formatted);
            } catch (e) {
                console.error("履歴の読み込みに失敗しました", e);
            }
        };
        loadHistory();
    }, [userId, therapistId]);

    // メッセージが増えたら自動スクロール
    useEffect(() => {
        scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // 2. メッセージ送信（DB保存）
    const sendMessage = async (overrideText?: string) => {
        const textToSend = overrideText || input;
        if (!textToSend.trim()) return;

        const now = new Date();
        const newMessage: Message = { 
            id: Date.now(), 
            sender: "pt", 
            text: textToSend, 
            time: now.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }) 
        };

        setMessages((prev) => [...prev, newMessage]);
        setInput("");
        setAiSuggestions([]); // 送信したら提案を消す

        try {
            await fetch("/api/chats", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId,
                    therapistId,
                    message: textToSend,
                    senderType: "PT" // セラピスト側からの送信
                }),
            });
        } catch (error) {
            console.error("送信エラー:", error);
        }
    };

    // 3. AI返信提案を取得
    const getAiAdvice = async () => {
        const lastUserMsg = [...messages].reverse().find(m => m.sender === "user");
        if (!lastUserMsg) return alert("利用者からのメッセージがまだありません。");

        setIsAiLoading(true);
        try {
            const res = await fetch("/api/ai/optimize", {
                method: "POST",
                body: JSON.stringify({ 
                    type: "suggest_reply", 
                    text: lastUserMsg.text, 
                    context: "訪問リハビリの予約後の詳細確認" 
                })
            });
            const data = await res.json();
            // "---" で区切られた案を配列にする
            setAiSuggestions(data.result.split("---").map((s: string) => s.trim()));
        } catch (e) {
            console.error("AI提案エラー", e);
        } finally {
            setIsAiLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 font-sans">
            <header className="bg-white p-4 border-b flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {userName[0]}
                    </div>
                    <div>
                        <h1 className="font-bold text-gray-800 leading-none">{userName} 様</h1>
                        <span className="text-[10px] text-gray-400">ID: {reservationId}</span>
                    </div>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex flex-col ${msg.sender === "pt" ? "items-end" : "items-start"}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
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

            {/* AI提案エリア */}
            {aiSuggestions.length > 0 && (
                <div className="bg-blue-50 p-4 border-t border-blue-100 animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-[10px] font-bold text-blue-500 mb-2 uppercase tracking-widest">AI返信アシスト</p>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {aiSuggestions.map((suggestion, i) => (
                            <button 
                                key={i}
                                onClick={() => sendMessage(suggestion)}
                                className="bg-white border border-blue-200 p-3 rounded-xl text-xs text-gray-700 whitespace-nowrap hover:bg-blue-600 hover:text-white transition-colors shadow-sm shrink-0"
                            >
                                {suggestion.substring(0, 30)}...
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="p-4 bg-white border-t pb-8">
                <div className="flex flex-col gap-3">
                    {!aiSuggestions.length && (
                        <button 
                            onClick={getAiAdvice}
                            disabled={isAiLoading}
                            className="text-[11px] font-bold text-blue-600 flex items-center gap-1 hover:opacity-70 disabled:opacity-30"
                        >
                            {isAiLoading ? "思考中..." : "✨ AIに最適な返信案を聞く"}
                        </button>
                    )}
                    <div className="flex gap-2 bg-gray-100 p-1 rounded-3xl items-center pr-2">
                        <input 
                            className="flex-1 bg-transparent p-3 outline-none text-sm ml-2 text-gray-700"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="メッセージを入力..."
                            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
                        />
                        <button 
                            onClick={() => sendMessage()}
                            disabled={!input.trim()}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                                input.trim() ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-100"
                            }`}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}