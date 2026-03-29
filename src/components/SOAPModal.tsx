//フロントエンド：SOAP生成モーダル
"use client";
import { useState } from "react";
import { Sparkles, Mic, FileText, Copy, CheckCircle2, Wand2, X } from "lucide-react";

interface SOAPModalProps {
  chatSummary: string;
  onClose: () => void;
}

export default function SOAPModal({ chatSummary, onClose }: SOAPModalProps) {
  const [memo, setMemo] = useState("");
  const [soap, setSoap] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerateSOAP = async () => {
    if (!memo.trim()) return;
    setIsGenerating(true);

    try {
      const res = await fetch("/api/clinical/soap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          summary: chatSummary,
          sessionMemo: memo,
        }),
      });

      const data = await res.json();

      if (!data.record) {
        alert("AI が SOAP を生成できませんでした");
        return;
      }

      // ★ API の返り値に合わせて修正
      setSoap({
        s: data.record.subjective,
        o: data.record.objective,
        a: data.record.assessment,
        p: data.record.plan,
      });
    } catch (error) {
      console.error("生成エラー:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!soap) return;

    const text = `
S: ${soap.s}

O: ${soap.o}

A: ${soap.a}

P: ${soap.p}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-white sticky top-0">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-black text-gray-900 tracking-tighter text-xl leading-none">
                AIカルテ生成 (SOAP)
              </h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1.5">
                Powered by Clinical AI
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-300 hover:text-gray-900 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto space-y-8 custom-scrollbar">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-end px-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Mic size={12} className="text-blue-500" /> Session Observations
              </label>
            </div>

            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className="w-full h-40 p-6 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:border-blue-100 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-bold text-gray-700 outline-none placeholder:text-gray-300 shadow-inner"
              placeholder="今日の歩行訓練の様子やROMの改善、自主トレの指導内容を入力..."
            />

            <button
              onClick={handleGenerateSOAP}
              disabled={isGenerating || !memo.trim()}
              className="group w-full py-5 bg-gray-900 hover:bg-black disabled:bg-gray-200 text-white rounded-[1.8rem] font-black text-xs tracking-[0.3em] uppercase shadow-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              {isGenerating ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Wand2 size={16} className="group-hover:rotate-12 transition-transform" />
                  AIでSOAP形式に変換
                </>
              )}
            </button>
          </div>

          {/* Result Section */}
          {soap && (
            <div className="animate-in slide-in-from-bottom-6 fade-in duration-500">
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-blue-600" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Generated Clinical Note
                  </span>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-[10px] font-black text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm"
                >
                  {copied ? <CheckCircle2 size={12} /> : <Copy size={12} />}
                  {copied ? "COPIED!" : "COPY TEXT"}
                </button>
              </div>

              {/* SOAP Display */}
              <div className="space-y-4">
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-inner">
                  <p className="font-bold mb-1">S</p>
                  <p className="text-sm whitespace-pre-wrap">{soap.s}</p>
                </div>

                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-inner">
                  <p className="font-bold mb-1">O</p>
                  <p className="text-sm whitespace-pre-wrap">{soap.o}</p>
                </div>

                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-inner">
                  <p className="font-bold mb-1">A</p>
                  <p className="text-sm whitespace-pre-wrap">{soap.a}</p>
                </div>

                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-inner">
                  <p className="font-bold mb-1">P</p>
                  <p className="text-sm whitespace-pre-wrap">{soap.p}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-white border border-gray-100 text-gray-400 text-[10px] font-black uppercase rounded-full hover:bg-gray-50 transition-all tracking-widest"
                >
                  Close & Edit Later
                </button>

                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-blue-600 text-white text-[10px] font-black uppercase rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all tracking-widest flex items-center gap-2"
                >
                  Save to E-Record <CheckCircle2 size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
