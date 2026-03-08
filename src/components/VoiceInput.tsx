//音声入力：ハンズフリー・入力機能
//ブラウザ標準の Web Speech API を活用し、ChatWindow.tsx やメモ欄に音声入力を導入
// src/components/VoiceInput.tsx
"use client";
import { useState } from "react";

export default function VoiceInput({ onResult }: { onResult: (text: string) => void }) {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("このブラウザは音声入力に対応していません");

    const recognition = new SpeechRecognition();
    recognition.lang = "ja-JP";
    recognition.continuous = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      onResult(text);
    };

    recognition.start();
  };

  return (
    <button 
      onClick={startListening}
      className={`p-3 rounded-2xl transition-all ${isListening ? "bg-red-500 animate-pulse" : "bg-gray-100 hover:bg-gray-200"}`}
    >
      {isListening ? "🎤 録音中..." : "🎙️ 音声入力"}
    </button>
  );
}