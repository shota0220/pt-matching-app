//PT詳細ページ
"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { allPTs } from "../../../lib/therapistData";
import { PT } from "../../../types";

export default function DetailPage() {
    const params = useParams();
    const id = params.id;
    
    const therapists = allPTs as PT[];
    // URLのIDと一致する人を探す
    const pt = therapists.find((item) => item.id === Number(id));

    // もしデータが見つからなかった時
    if (!pt) {
        return (
            <div style={{ padding: "40px" }}>
                <p>理学療法士が見つかりません。</p>
                <Link href="/results">一覧に戻る</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
            <Link href="/results" style={{ color: "#0070f3", textDecoration: "none" }}>← 結果一覧に戻る</Link>
            
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                {/* 顔写真を表示 */}
                <img 
                    src={pt.photo} 
                    alt={pt.name} 
                    style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", border: "4px solid #f0f0f0" }} 
                />
                <h1 style={{ fontSize: "28px", margin: "10px 0" }}>{pt.name} 先生</h1>
                <p style={{ color: "#0070f3", fontWeight: "bold" }}>専門：{pt.specialty}</p>
                <p>経験年数：{pt.experienceYears}年</p>
            </div>
            
            <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", margin: "20px 0", lineHeight: "1.6" }}>
                <h3 style={{ marginTop: "0" }}>メッセージ</h3>
                <p>{pt.message}</p>
            </div>

            {/* マッチを申請するボタン */}
            <Link href={`/chat?id=${pt.id}&name=${encodeURIComponent(pt.name)}`}>
                <button style={{ 
                    width: "100%", 
                    padding: "18px", 
                    backgroundColor: "#28a745", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "10px", 
                    fontSize: "18px", 
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                }}>
                    マッチング申請する
                </button>
            </Link>
        </div>
    );
}