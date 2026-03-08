//フロントエンド：SOAP生成モーダル
//施術完了」の前に、サクッと記録を完成させるUI
// src/components/SOAPModal.tsx (抜粋)
const [memo, setMemo] = useState("");
const [generatedSOAP, setGeneratedSOAP] = useState("");

const handleGenerateSOAP = async () => {
  // チャット要約と当日の音声メモをAPIに飛ばす
  const res = await fetch("/api/clinical/soap", {
    method: "POST",
    body: JSON.stringify({ summary: chatSummary, sessionMemo: memo })
  });
  const data = await res.json();
  setGeneratedSOAP(data.soap);
};

return (
  <div className="p-8 bg-white rounded-[3rem] shadow-2xl border border-gray-100 max-w-2xl w-full">
    <h3 className="font-black text-xl mb-4">施術記録の自動生成</h3>
    
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-[10px] font-black text-gray-400 uppercase">Session Memo (Voice/Text)</label>
        <VoiceInput onResult={(text) => setMemo(memo + text)} />
      </div>
      <textarea 
        value={memo} 
        onChange={(e) => setMemo(e.target.value)}
        className="w-full h-32 p-4 bg-gray-50 rounded-2xl border-none text-sm font-bold"
        placeholder="今日の歩行状態や実施したメニュー..."
      />
      
      <button 
        onClick={handleGenerateSOAP}
        className="w-full py-4 bg-black text-white rounded-2xl font-black text-xs tracking-widest"
      >
        🪄 AIでSOAP形式に変換
      </button>

      {generatedSOAP && (
        <div className="mt-6 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-xs font-bold leading-relaxed whitespace-pre-wrap">
          {generatedSOAP}
        </div>
      )}
    </div>
  </div>
);