"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import { PT } from '@/types';
import { calculateMatchScore } from '@/lib/matchScore';
import Map from '@/components/Map';

export default function ResultsClientContent({ initialPTs }: { initialPTs: PT[] }) {
    const searchParams = useSearchParams();
    const router = useRouter(); 
    
    const symptom = searchParams.get('symptom') || ""; 
    const expLimit = parseInt(searchParams.get('experience') || "0");

    const [sortType, setSortType] = useState("score");
    const [selectedPT, setSelectedPT] = useState<PT | null>(null);

    const userCondition = { symptom, targetExperience: expLimit.toString() };

    const displayList = useMemo(() => {
        let list = initialPTs.filter(pt => pt.experienceYears >= expLimit);
        
        const listWithScore = list.map(pt => ({
            ...pt,
            matchScore: calculateMatchScore(pt, userCondition, 33.5897, 130.4207)
        }));

        switch (sortType) {
            case "score": return [...listWithScore].sort((a, b) => b.matchScore - a.matchScore);
            case "rating": return [...listWithScore].sort((a, b) => b.rating - a.rating);
            case "price_low": return [...listWithScore].sort((a, b) => a.price - b.price);
            case "price_high": return [...listWithScore].sort((a, b) => b.price - a.price);
            case "exp_long": return [...listWithScore].sort((a, b) => b.experienceYears - a.experienceYears);
            default: return listWithScore;
        }
    }, [initialPTs, sortType, symptom, expLimit]);

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f8f9fa", fontFamily: "sans-serif" }}>
            
            <header style={{ padding: "15px 30px", backgroundColor: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", zIndex: 10 }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: "18px", color: "#333", fontWeight: "bold" }}>セラピスト検索結果</h1>
                    <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                        検索条件: {symptom || "指定なし"} / 候補: {displayList.length}名
                    </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "13px", color: "#666" }}>並び替え:</span>
                    <select 
                        style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", backgroundColor: "#fff" }}
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        <option value="score">おすすめ順</option>
                        <option value="rating">評価が高い順</option>
                        <option value="price_low">料金が安い順</option>
                        <option value="exp_long">ベテラン順</option>
                    </select>
                </div>
            </header>

            <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <div style={{ width: "45%", overflowY: "auto", padding: "20px", borderRight: "1px solid #eee" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {displayList.map((pt) => (
                            <div key={pt.id} 
                                onClick={() => setSelectedPT(pt)}
                                style={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    border: selectedPT?.id === pt.id ? "2px solid #0070f3" : "1px solid #eee", 
                                    padding: "15px", 
                                    borderRadius: "12px", 
                                    backgroundColor: "#fff", 
                                    cursor: "pointer",
                                    transition: "all 0.2s shadow"
                                }}
                            >
                                <img src={pt.photo} alt={pt.name} style={{ width: "55px", height: "55px", borderRadius: "50%", marginRight: "12px", objectFit: "cover", backgroundColor: "#eee" }} />
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>{pt.name}</h3>
                                    <p style={{ margin: "2px 0", fontSize: "12px", color: "#666" }}>{pt.specialty} / 経験{pt.experienceYears}年</p>
                                    <div style={{ fontWeight: "bold", color: "#0070f3", fontSize: "15px" }}>¥{pt.price.toLocaleString()}<span style={{ fontSize: "10px", color: "#999", marginLeft: "4px" }}>/ 60分</span></div>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <div style={{ backgroundColor: "#e6f7ff", color: "#0070f3", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }}>
                                        一致度 {pt.matchScore}%
                                    </div>
                                    <div style={{ fontSize: "12px", color: "#ffa500", marginTop: "4px" }}>★ {pt.rating.toFixed(1)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div style={{ width: "55%", position: "relative" }}>
                    <Map pts={displayList} onMarkerClick={(pt) => setSelectedPT(pt)} />
                </div>
            </div>

            {/* 詳細・誘導モーダル：ここをアップデートしました */}
            {selectedPT && (
                <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
                    <div style={{ backgroundColor: "#fff", width: "380px", borderRadius: "24px", padding: "30px", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
                        <img src={selectedPT.photo} style={{ width: "90px", height: "90px", borderRadius: "50%", marginBottom: "15px", border: "3px solid #f0f7ff", objectFit: "cover" }} />
                        <h2 style={{ margin: "0 0 5px 0", fontSize: "20px" }}>{selectedPT.name}</h2>
                        <p style={{ color: "#0070f3", fontSize: "14px", fontWeight: "bold", marginBottom: "15px" }}>{selectedPT.specialty} 専門</p>
                        
                        <div style={{ textAlign: "left", fontSize: "14px", color: "#444", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "12px", marginBottom: "20px", lineHeight: "1.6", maxHeight: "100px", overflowY: "auto" }}>
                            {selectedPT.message || "自己紹介文が設定されていません。"}
                        </div>
                        
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <button 
                                onClick={() => router.push(`/reserve/${selectedPT.id}`)}
                                style={{ width: "100%", padding: "16px", backgroundColor: "#0070f3", color: "#fff", border: "none", borderRadius: "12px", fontWeight: "bold", cursor: "pointer", fontSize: "16px", boxShadow: "0 4px 12px rgba(0,112,243,0.3)" }}
                            >
                                予約日時を選択する
                            </button>

                            {/* 公開プロフィールへの導線を追加 */}
                            <button 
                                onClick={() => router.push(`/therapist/${selectedPT.id}`)}
                                style={{ width: "100%", padding: "14px", backgroundColor: "#fff", color: "#0070f3", border: "2px solid #0070f3", borderRadius: "12px", fontWeight: "bold", cursor: "pointer", fontSize: "15px" }}
                            >
                                プロフィールを詳しく見る
                            </button>
                        </div>
                        
                        <button 
                            onClick={() => setSelectedPT(null)} 
                            style={{ marginTop: "15px", color: "#999", background: "none", border: "none", cursor: "pointer", fontSize: "14px", textDecoration: "underline" }}
                        >
                            閉じる
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}