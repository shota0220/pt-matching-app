//利用者側の画面
"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function UserDashboard() {
    // 状態管理: "WAITING"（探し中） または "MATCHED"（成立）
    const [status, setStatus] = useState("WAITING");

    return (
        <div style={{ 
            padding: "20px", 
            maxWidth: "500px", 
            margin: "0 auto", 
            fontFamily: "sans-serif", 
            backgroundColor: "#fdfdfd", 
            minHeight: "100vh" 
        }}>
            <header style={{ textAlign: "center", padding: "20px 0" }}>
                <h1 style={{ fontSize: "20px", color: "#333", fontWeight: "bold" }}>マイ・ケア</h1>
            </header>

            {/* 状態表示カード */}
            <div style={{ 
                backgroundColor: "white", 
                padding: "30px", 
                borderRadius: "24px", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)", 
                textAlign: "center", 
                marginBottom: "30px",
                border: "1px solid #f0f0f0"
            }}>
                {status === "WAITING" ? (
                    <div key="waiting-ui">
                        <div style={{ fontSize: "50px", marginBottom: "10px" }}>🔍</div>
                        <h3 style={{ margin: "10px 0", fontSize: "18px" }}>理学療法士を探しています...</h3>
                        <p style={{ fontSize: "14px", color: "#999", lineHeight: "1.6" }}>
                            博多駅周辺のプロフェッショナルへ、<br />あなたの相談を送信しました。
                        </p>
                    </div>
                ) : (
                    <div key="matched-ui">
                        <div style={{ fontSize: "50px", marginBottom: "10px" }}>✅</div>
                        <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#00c851" }}>マッチング成立！</h3>
                        <p style={{ fontSize: "14px", color: "#999", marginBottom: "20px" }}>
                            担当の理学療法士とチャットが可能です。
                        </p>
                        {/* Linkタグの直下にbuttonを置くNext.jsの標準的な書き方 */}
                        <Link href="/chat?name=担当セラピスト" style={{ textDecoration: 'none' }}>
                            <div style={{ 
                                width: "100%", 
                                padding: "15px", 
                                backgroundColor: "#00c851", 
                                color: "white", 
                                borderRadius: "12px", 
                                fontWeight: "bold",
                                cursor: "pointer",
                                textAlign: "center"
                            }}>
                                メッセージを送る
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            {/* 過去のリハビリ記録 */}
            <h4 style={{ color: "#666", marginBottom: "15px", fontSize: "15px" }}>最近の活動</h4>
            <div style={{ 
                borderLeft: "4px solid #0070f3", 
                paddingLeft: "15px", 
                marginBottom: "20px", 
                textAlign: "left" 
            }}>
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>2026年3月1日: カウンセリング申請</p>
                <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#999" }}>「膝の痛みについて」</p>
            </div>

            {/* デモ用切り替えボタン（画面右下に固定） */}
            <button 
                type="button"
                onClick={() => setStatus(prev => prev === "WAITING" ? "MATCHED" : "WAITING")}
                style={{ 
                    position: "fixed", 
                    bottom: "20px", 
                    right: "20px", 
                    opacity: 0.6, 
                    fontSize: "11px", 
                    padding: "10px", 
                    borderRadius: "8px", 
                    backgroundColor: "#333",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    zIndex: 9999
                }}>
                【開発用】状態を切り替える
            </button>
        </div>
    );
}