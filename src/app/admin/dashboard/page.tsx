"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function TherapistConnect() {
    const [approvedMatches, setApprovedMatches] = useState([]);
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(true);
    
    // モーダル・デモ状態管理
    const [showSoapModal, setShowSoapModal] = useState(false);
    const [showSnsModal, setShowSnsModal] = useState(false);
    const [showChart, setShowChart] = useState(false);
    const [showFamilyView, setShowFamilyView] = useState(false); // ★家族画面用
    const [isPaid, setIsPaid] = useState(false); // ★決済ステータス
    const [isAiAnalyzing, setIsAiAnalyzing] = useState(false);
    const [soapForm, setSoapForm] = useState({ s: "", o: "", a: "", p: "" });

    const API_KEY = "YOUR_API_KEY_HERE"; 
    const HAKATA_STATION = { lat: 33.5897, lng: 130.4207 };
    const userLocations = [{ id: 1, position: { lat: 33.592, lng: 130.415 } }, { id: 2, position: { lat: 33.585, lng: 130.425 } }];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const chatRes = await fetch("/api/chats/list");
                const approvedData = await chatRes.json();
                setApprovedMatches(approvedData);
                setBalance(approvedData.length * 5000 + 145000); 
                setLoading(false);
            } catch (err) { setLoading(false); }
        };
        fetchData();
    }, []);

    const runAiAnalysis = () => {
        setIsAiAnalyzing(true);
        setTimeout(() => {
            setSoapForm({
                s: "「階段が楽になった」「膝の痛みなし」",
                o: "10m歩行: 8.5s (前回10.2s)",
                a: "下肢筋力向上により立脚相が安定。歩行効率が改善。",
                p: "屋外歩行時の耐久性向上を目標に設定。"
            });
            setIsAiAnalyzing(false);
        }, 1200);
    };

    if (loading) return <div style={{ textAlign: "center", padding: "100px" }}>データを同期中...</div>;

    return (
        <APIProvider apiKey={API_KEY}>
            <div style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto", fontFamily: 'sans-serif', backgroundColor: "#fcfcfc", minHeight: "100vh" }}>
                
                {/* 1. 報酬 & 自動決済KPI */}
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px", marginBottom: "30px" }}>
                    <div style={{ border: "1px solid #0070f3", padding: "25px", borderRadius: "20px", backgroundColor: "#f0f7ff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <p style={{ margin: 0, color: "#0070f3", fontSize: "12px", fontWeight: "bold" }}>当月売上 (自動決済連携済み)</p>
                            <h2 style={{ fontSize: "42px", margin: "5px 0", color: "#1a1a1a", fontWeight: "900" }}>¥{balance.toLocaleString()}</h2>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "16px", color: "#0070f3", fontWeight: "bold" }}>完了案件: {approvedMatches.length}件</div>
                            <div style={{ color: "#ffb400", fontWeight: "bold", fontSize: "14px" }}>★ 4.9 (24件)</div>
                        </div>
                    </div>
                    <div style={{ border: "1px solid #eee", padding: "25px", borderRadius: "20px", backgroundColor: "#fff" }}>
                        <p style={{ margin: 0, color: "#999", fontSize: "12px", fontWeight: "bold" }}>次回振込予定日</p>
                        <h2 style={{ fontSize: "24px", margin: "5px 0", color: "#1a1a1a", fontWeight: "bold" }}>2026/04/10</h2>
                        <p style={{ margin: 0, color: "#2e7d32", fontSize: "11px" }}>● Stripe決済システム稼働中</p>
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "30px" }}>
                    <section>
                        <h2 style={{ fontSize: "18px", marginBottom: "15px", color: "#444" }}>📍 エリア需要モニタリング</h2>
                        <div style={{ width: "100%", height: "350px", borderRadius: "24px", overflow: "hidden", border: "1px solid #eee" }}>
                            <Map defaultCenter={HAKATA_STATION} defaultZoom={14} disableDefaultUI={true}>
                                {userLocations.map(u => <Marker key={u.id} position={u.position} />)}
                            </Map>
                        </div>
                    </section>

                    <section>
                        <h2 style={{ fontSize: "17px", marginBottom: "15px", color: "#444" }}>本日の訪問・管理</h2>
                        {approvedMatches.map((match: any) => (
                            <div key={match.id} style={{ padding: "20px", border: "1px solid #eee", borderRadius: "20px", background: "#fff", marginBottom: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                                    <span style={{ fontWeight: "bold" }}>{match.user?.name || match.name} 様</span>
                                    <span style={{ color: isPaid ? "#2e7d32" : "#ffb400", fontSize: "12px", fontWeight: "bold" }}>
                                        {isPaid ? "✓ 決済完了" : "● 未決済"}
                                    </span>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                                    <button onClick={() => setShowSoapModal(true)} style={miniButtonStyle("#1a1a1a")}>📝 SOAP作成</button>
                                    <button onClick={() => setShowFamilyView(true)} style={miniButtonStyle("#6200ee")}>🏠 家族画面</button>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                                    <button onClick={() => setShowChart(true)} style={miniButtonStyle("#0070f3")}>📊 成果図解</button>
                                    <button onClick={() => setShowSnsModal(true)} style={miniButtonStyle("#ff4b4b")}>🚀 SNSシェア</button>
                                </div>
                                <button onClick={() => { setIsPaid(true); alert("Stripe決済を実行しました（¥5,000）"); }} style={{ width: "100%", padding: "10px", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "10px", fontSize: "12px", cursor: "pointer", fontWeight: "bold" }}>💳 今すぐ決済を実行</button>
                            </div>
                        ))}
                    </section>
                </div>

                {/* --- 家族用マイページ・プレビューモーダル --- */}
                {showFamilyView && (
                    <div style={overlayStyle}>
                        <div style={{ ...modalStyle, width: "375px", padding: "0", overflow: "hidden", border: "8px solid #333", borderRadius: "40px" }}>
                            <div style={{ backgroundColor: "#6200ee", color: "white", padding: "20px", textAlign: "center" }}>
                                <p style={{ fontSize: "12px", margin: 0 }}>利用者家族様専用マイページ</p>
                                <h3 style={{ margin: "5px 0" }}>リハビリ報告書</h3>
                            </div>
                            <div style={{ padding: "20px", textAlign: "left", backgroundColor: "#f5f5f5", height: "450px", overflowY: "auto" }}>
                                <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "15px", marginBottom: "15px" }}>
                                    <p style={{ fontSize: "11px", color: "#999" }}>担当: 多田 健二 (PT)</p>
                                    <h4 style={{ margin: "5px 0", color: "#6200ee" }}>本日の成果</h4>
                                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>「階段昇降がスムーズになりました」</p>
                                    <div style={{ height: "100px", backgroundColor: "#eef2ff", borderRadius: "10px", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#0070f3", fontSize: "12px" }}>
                                        [ 改善グラフ表示エリア ]
                                    </div>
                                </div>
                                <button onClick={() => setShowFamilyView(false)} style={{ width: "100%", padding: "12px", backgroundColor: "#333", color: "white", borderRadius: "10px", border: "none", cursor: "pointer" }}>ダッシュボードに戻る</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- SOAPモーダル --- */}
                {showSoapModal && (
                    <div style={overlayStyle}>
                        <div style={modalStyle}>
                            <h2 style={{ fontSize: "18px", marginBottom: "15px" }}>AI記録アシスタント</h2>
                            <button onClick={runAiAnalysis} style={{ width: "100%", padding: "12px", backgroundColor: "#0070f3", color: "#fff", border: "none", borderRadius: "10px", marginBottom: "15px", fontWeight: "bold", cursor: "pointer" }}>
                                {isAiAnalyzing ? "解析中..." : "🪄 チャットからSOAPを下書き"}
                            </button>
                            <div style={{ textAlign: "left" }}>
                                {Object.entries(soapForm).map(([key, val]) => (
                                    <div key={key} style={{ marginBottom: "10px" }}>
                                        <label style={{ fontSize: "11px", fontWeight: "bold", color: "#0070f3" }}>{key.toUpperCase()}</label>
                                        <textarea value={val} onChange={(e) => setSoapForm({...soapForm, [key]: e.target.value})} style={textareaStyle} rows={2} />
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => { setShowSoapModal(false); alert("保存しました。家族マイページへ反映されます。"); }} style={{ width: "100%", marginTop: "15px", padding: "12px", borderRadius: "10px", backgroundColor: "#1a1a1a", color: "#fff", border: "none", cursor: "pointer" }}>保存して家族へ共有</button>
                        </div>
                    </div>
                )}

                {/* --- SNSシェア & インスタ画像生成 --- */}
                {showSnsModal && (
                    <div style={overlayStyle}>
                        <div style={{ ...modalStyle, width: "450px" }}>
                            <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>SNS実績シェア</h2>
                            <div style={{ width: "100%", aspectRatio: "1/1", background: "linear-gradient(135deg, #0070f3 0%, #00a3ff 100%)", borderRadius: "15px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white", padding: "30px", marginBottom: "20px" }}>
                                <span style={{ fontSize: "12px", fontWeight: "bold" }}>REHAB REPORT</span>
                                <h3 style={{ fontSize: "24px", margin: "10px 0", fontWeight: "900" }}>歩行スピード<br/>17.5%向上！</h3>
                                <p style={{ fontSize: "12px" }}>博多エリア訪問リハ実績</p>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                                <button onClick={() => alert("Xに投稿しました")} style={snsButtonStyle("#1a1a1a")}>𝕏</button>
                                <button onClick={() => alert("画像を保存しました")} style={snsButtonStyle("#E4405F")}>Instagram</button>
                                <button onClick={() => alert("LINEで送信しました")} style={snsButtonStyle("#06C755")}>LINE</button>
                            </div>
                            <button onClick={() => setShowSnsModal(false)} style={{ width: "100%", marginTop: "20px", padding: "10px", border: "1px solid #eee", background: "none", cursor: "pointer" }}>閉じる</button>
                        </div>
                    </div>
                )}

                {/* --- 成果図解モーダル --- */}
                {showChart && (
                    <div style={overlayStyle}>
                        <div style={{ ...modalStyle, width: "400px" }}>
                            <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>リハビリ成果</h2>
                            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: "150px", background: "#f9f9f9", padding: "20px", borderRadius: "15px" }}>
                                <div style={{ width: "40%", height: "40%", background: "#ccc", borderRadius: "5px" }}></div>
                                <div style={{ width: "40%", height: "90%", background: "#0070f3", borderRadius: "5px" }}></div>
                            </div>
                            <p style={{ marginTop: "15px", fontSize: "14px" }}>初回から**1.7秒**の短縮に成功！</p>
                            <button onClick={() => setShowChart(false)} style={{ width: "100%", marginTop: "20px", padding: "10px", borderRadius: "10px", border: "1px solid #ddd", cursor: "pointer" }}>閉じる</button>
                        </div>
                    </div>
                )}

            </div>
        </APIProvider>
    );
}

const miniButtonStyle = (color: string) => ({
    padding: "10px", backgroundColor: "white", color: color, border: `1px solid ${color}`, borderRadius: "10px", fontSize: "10px", fontWeight: "bold", cursor: "pointer"
} as const);

const snsButtonStyle = (bg: string) => ({
    padding: "12px", backgroundColor: bg, color: "white", border: "none", borderRadius: "10px", fontSize: "11px", fontWeight: "bold", cursor: "pointer"
} as const);

const textareaStyle = { width: "100%", padding: "8px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "13px", marginTop: "4px" } as const;

const overlayStyle = { position: "fixed" as const, top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(5px)" };

const modalStyle = { backgroundColor: "white", padding: "30px", borderRadius: "28px", width: "420px", textAlign: "center" as const, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" };