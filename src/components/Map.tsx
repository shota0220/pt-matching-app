//Google Mapsなどを使ってPTの位置をピンで表示
"use client";

// 受け取るデータのルールを定義
interface MapProps {
  pts: any[];
  onMarkerClick?: (pt: any) => void;
}

export default function Map({ pts, onMarkerClick }: MapProps) {
  return (
    <div style={{ 
      width: "100%", 
      height: "100%", 
      backgroundColor: "#cbd5e1", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      color: "#475569" 
    }}>
      <div style={{ fontSize: "40px", marginBottom: "10px" }}>📍</div>
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        {pts.length} 名の場所を表示中
      </div>
      <div style={{ fontSize: "12px", marginTop: "5px" }}>
        （Google Maps API 連携準備中）
      </div>
      
      {/* 動作確認用の簡易ボタン（デモ用） */}
      <div style={{ marginTop: "10px", display: "flex", gap: "5px" }}>
        {pts.slice(0, 3).map(pt => (
          <button 
            key={pt.id} 
            onClick={() => onMarkerClick?.(pt)}
            style={{ fontSize: "10px", padding: "2px 5px", cursor: "pointer" }}
          >
            {pt.name}の場所
          </button>
        ))}
      </div>
    </div>
  );
}