//音声入力：ハンズフリー・入力機能
import { useState } from "react";
import { Mic, MicOff, Radio } from "lucide-react";

interface VoiceInputProps {
  onResult: (text: string) => void;
}

export default function VoiceInput({ onResult }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    // Web Speech API の呼び出し
    const SpeechRecognition = 
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("お使いのブラウザは音声入力に対応していません。Google Chrome 等をご利用ください。");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ja-JP";
    recognition.interimResults = false; // 確定した結果のみを取得
    recognition.continuous = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      onResult(text);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch (e) {
      console.error("Recognition start error:", e);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button 
        onClick={startListening}
        disabled={isListening}
        className={`relative flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg active:scale-95 ${
          isListening 
            ? "bg-red-500 text-white shadow-red-200" 
            : "bg-white text-blue-600 border border-blue-50 hover:bg-blue-50 shadow-blue-900/5"
        }`}
      >
        {isListening ? (
          <>
            <Radio size={14} className="animate-pulse" />
            <span>Listening...</span>
          </>
        ) : (
          <>
            <Mic size={14} />
            <span>音声入力</span>
          </>
        )}
        
        {/* 録音中の波紋エフェクト */}
        {isListening && (
          <span className="absolute inset-0 rounded-2xl bg-red-500 animate-ping opacity-20 -z-10"></span>
        )}
      </button>

      {isListening && (
        <p className="text-[10px] font-bold text-red-500 animate-pulse hidden md:block">
          お話しください...
        </p>
      )}
    </div>
  );
}

