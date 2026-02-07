//結果画面
"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PT } from '../../types';
import { allPTs } from '../../lib/therapistData';

const therapists: PT[] = allPTs;

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const symptom = searchParams.get('symptom') || ""; 
    const expLimit = parseInt(searchParams.get('experience') || "0");
    const filteredByExp = therapists.filter(pt => pt.experienceYears >= expLimit);

    const matched = filteredByExp.filter(pt => 
        symptom !== "" && (
            pt.specialty.includes(symptom) || 
            pt.message.includes(symptom) || 
            pt.skills.some(skill => skill.includes(symptom))
        )
    );
    
    const others = filteredByExp.filter(pt => 
        !matched.find(m => m.id === pt.id)
    );

    const displayList = [...matched, ...others];

    return (
        <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
            <h1>検索結果一覧</h1>
            <p style={{ marginBottom: "20px", color: "#666" }}>
                「{symptom}」でお探しの方におすすめの理学療法士
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {displayList.map((pt) => {
                    const isMatched = matched.some(m => m.id === pt.id);
                    return (
                        <div key={pt.id} style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            border: isMatched ? "2px solid #0070f3" : "1px solid #ddd", 
                            padding: "20px", 
                            borderRadius: "15px",
                            backgroundColor: isMatched ? "#f0f7ff" : "#fff",
                            position: "relative",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}>
                            {/* おすすめ*/}
                            {isMatched && (
                                <span style={{ position: "absolute", top: "-10px", left: "10px", backgroundColor: "#0070f3", color: "white", padding: "2px 8px", borderRadius: "5px", fontSize: "12px", fontWeight: "bold" }}>
                                    オススメの理学療法士
                                </span>
                            )}

                            {/* 左側：顔写真 */}
                            <img src={pt.photo} alt={pt.name} style={{ width: "70px", height: "70px", borderRadius: "12px", marginRight: "20px", objectFit: "cover" }} />
                            
                            {/* 中央：プロフィール情報 */}
                            <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                                    <h3 style={{ margin: 0, fontSize: "18px" }}>{pt.name}</h3>
                                    <span style={{ color: "#f1c40f", fontWeight: "bold" }}>★ 4.8</span> 
                                </div>
                                <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                                    経験 {pt.experienceYears}年目 / 専門：{pt.specialty}
                                </p>
                                {/* スキル */}
                                <div style={{ display: "flex", gap: "5px", marginTop: "8px" }}>
                                    {pt.skills.slice(0, 2).map(skill => (
                                        <span key={skill} style={{ fontSize: "10px", background: "#eee", padding: "2px 8px", borderRadius: "10px", color: "#555" }}>
                                            #{skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 右側：詳細ボタン */}
                            <Link href={`/results/${pt.id}`} style={{ marginLeft: "10px" }}>
                                <button style={{ 
                                    padding: "10px 20px", 
                                    backgroundColor: isMatched ? "#0070f3" : "#28a745", 
                                    color: "white", 
                                    border: "none", 
                                    borderRadius: "8px", 
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap"
                                }}>
                                    詳細を見る
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}