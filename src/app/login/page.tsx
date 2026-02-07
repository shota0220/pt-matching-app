//ログイン画面
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function LoginPage() {
    const router = useRouter(); 
    const [screenType, setScreenType] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleLogin = (role: "user" | "pt") => {
        if (!email || !password) {
            alert("メールアドレスとパスワードを入力してください");
            return;
        }

        if (role === "user") {
            // 利用者の場合は検索画面へ
            router.push("/search");
        } else {
            // 理学療法士の場合は管理画面（登録画面）へ飛ぶ
            router.push("/admin/register");
        }
    };

    // 画面０：選択画面
    if (screenType === 0) {
        return (
            <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
                <h2 style={{ color: "#333" }}>ログインの種類を選んでください</h2>
                <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                    <button 
                        onClick={() => setScreenType(1)}
                        style={{ padding: "20px", width: "250px", cursor: "pointer", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold" }}>
                        利用者としてログイン
                    </button>
                    <button 
                        onClick={() => setScreenType(2)}
                        style={{ padding: "20px", width: "250px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold" }}>
                        理学療法士としてログイン
                    </button>
                </div>
            </div>
        );
    }

    // 画面１：利用者ログイン画面
    if (screenType === 1) {
        return (
            <div style={{ padding: "50px", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" }}>
                <button onClick={() => setScreenType(0)} style={{ background: "none", border: "none", color: "#0070f3", cursor: "pointer" }}>← 戻る</button>
                <h2 style={{ marginTop: "20px" }}>利用者ログイン</h2>
                <div style={{ marginTop: "20px" }}>
                    <p>メールアドレス</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: "10px", width: "100%", boxSizing: "border-box" }} placeholder="user@example.com" />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>パスワード</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: "10px", width: "100%", boxSizing: "border-box" }} placeholder="••••••••" />
                </div>
                
                <button 
                    onClick={() => handleLogin("user")}
                    style={{ marginTop: "30px", padding: "15px", width: "100%", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
                    利用者としてログイン
                </button>
            </div>
        );
    }

    // 画面２：理学療法士ログイン画面
    if (screenType === 2) {
        return (
            <div style={{ padding: "50px", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" }}>
                <button onClick={() => setScreenType(0)} style={{ background: "none", border: "none", color: "#28a745", cursor: "pointer" }}>← 戻る</button>
                <h2 style={{ marginTop: "20px" }}>理学療法士ログイン</h2>
                <div style={{ marginTop: "20px" }}>
                    <p>メールアドレス</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: "10px", width: "100%", boxSizing: "border-box" }} placeholder="pt@example.com" />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>パスワード</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: "10px", width: "100%", boxSizing: "border-box" }} placeholder="••••••••" />
                </div>
                
                <button 
                    onClick={() => handleLogin("pt")}
                    style={{ marginTop: "30px", padding: "15px", width: "100%", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
                    理学療法士としてログイン
                </button>
            </div>
        );
    }

    return null;
}