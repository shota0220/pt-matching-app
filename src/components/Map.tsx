//Google Mapsなどを使ってPTの位置をピンで表示
"use client";
import { MapPin, Navigation, Compass, Layers } from "lucide-react";
import { PT } from '@/types';

interface MapProps {
  pts: PT[];
  onMarkerClick: (pt: PT) => void;
  center: { lat: number; lng: number };
}

export default function Map({ pts, onMarkerClick }: MapProps) {
  return (
    <div className="w-full h-full bg-[#E5EBF2] relative overflow-hidden flex flex-col items-center justify-center border-2 border-white shadow-inner rounded-[2.5rem]">
      
      {/* 背景のグリッド：地図のテクスチャ感を演出 */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      </div>
      
      {/* 地図のUIパーツ（雰囲気作り） */}
      <div className="absolute top-6 right-6 flex flex-col gap-2">
        <button className="p-3 bg-white rounded-2xl shadow-lg text-gray-400 hover:text-blue-600 transition-all"><Layers size={20} /></button>
        <button className="p-3 bg-white rounded-2xl shadow-lg text-gray-400 hover:text-blue-600 transition-all"><Compass size={20} /></button>
      </div>

      <div className="absolute top-6 left-6">
        <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <span className="text-[10px] font-black text-gray-800 uppercase tracking-widest">Fukuoka-City Live</span>
        </div>
      </div>

      {/* センターインフォメーション */}
      <div className="z-10 text-center p-8 bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-white max-w-[280px]">
        <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-4 text-blue-600">
          <Navigation size={32} />
        </div>
        <h3 className="font-black text-gray-900 text-lg tracking-tighter leading-none mb-2">
          セラピスト・マップ
        </h3>
        <p className="text-[10px] text-gray-400 font-bold leading-relaxed mb-4">
          あなたの周辺で活動中の<br />プロフェッショナルを表示しています
        </p>
        <div className="inline-block text-[9px] font-black text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
          現在 {pts.length} 名を発見
        </div>
      </div>
      
      {/* 下部マーカーリスト */}
      <div className="absolute bottom-8 left-0 w-full px-6 flex gap-3 overflow-x-auto no-scrollbar py-2">
        {pts.length > 0 ? (
          pts.map(pt => (
            <button 
              key={pt.id} 
              onClick={() => onMarkerClick?.(pt)}
              className="group flex items-center gap-3 bg-white pl-2 pr-5 py-2 rounded-[1.2rem] shadow-xl hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 shrink-0 border border-gray-100/50"
            >
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors">
                <MapPin size={16} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black leading-tight">{pt.name} 先生</p>
                <p className="text-[8px] font-bold opacity-60">福岡市中央区</p>
              </div>
            </button>
          ))
        ) : (
          <div className="bg-white/50 px-6 py-3 rounded-2xl mx-auto text-[10px] font-bold text-gray-400 italic">
            近隣にセラピストがまだ見つかりません
          </div>
        )}
      </div>

      {/* 位置情報の波紋アニメーション（地図っぽさを出す） */}
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-400/20 rounded-full animate-ping delay-75" />
    </div>
  );
}


