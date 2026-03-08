"use client";
import { useState, useEffect } from "react";

const POPULAR_TAGS = ["腰痛", "膝の痛み", "スポーツ", "産後ケア", "脳卒中"];

export default function HomePage() {
  const [therapists, setTherapists] = useState([]);
  const [activeTag, setActiveTag] = useState("");
  const [loading, setLoading] = useState(true);

  // タグが切り替わるたびにデータを取得
  useEffect(() => {
    const fetchTherapists = async () => {
      setLoading(true);
      const url = activeTag ? `/api/therapists?tag=${activeTag}` : "/api/therapists";
      const res = await fetch(url);
      const data = await res.json();
      setTherapists(data);
      setLoading(false);
    };
    fetchTherapists();
  }, [activeTag]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-6">専門性を、選ぶ。</h1>
        
        {/* リッチなタグUI */}
        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => setActiveTag("")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!activeTag ? "bg-black text-white" : "bg-gray-100 text-gray-500"}`}
          >
            すべて
          </button>
          {POPULAR_TAGS.map(tag => (
            <button 
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${activeTag === tag ? "bg-blue-600 border-blue-600 text-white shadow-lg" : "bg-white border-gray-100 text-gray-400 hover:border-blue-300"}`}
            >
              # {tag}
            </button>
          ))}
        </div>
      </header>

      {/* 検索結果一覧 */}
      {loading ? (
        <div className="text-center py-20 text-gray-300 font-bold">検索中...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map(t => (
            <div key={t.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 hover:scale-[1.02] transition-transform">
               <div className="flex justify-between items-start mb-4">
                 <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-black">
                   {t.name[0]}
                 </div>
                 <span className="text-yellow-500 font-black text-sm">★ {t.rating}</span>
               </div>
               <h3 className="font-black text-gray-800 text-lg mb-1">{t.name}</h3>
               <p className="text-xs font-bold text-blue-500 mb-4">{t.specialty}</p>
               
               {/* AIが自動生成したタグを表示 */}
               <div className="flex flex-wrap gap-2">
                 {t.tags?.split(',').map(tag => (
                   <span key={tag} className="text-[10px] bg-gray-50 text-gray-400 px-2 py-1 rounded-md font-bold">#{tag}</span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}