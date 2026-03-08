//ログイン画面
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

// バリデーション設定
const loginSchema = z.object({
  email: z.string().email({ message: "メールアドレスの形式が正しくありません" }),
  password: z.string().min(6, { message: "パスワードは6文字以上で入力してください" }),
});

export default function LoginPage() {
    const router = useRouter(); 
    const [screenType, setScreenType] = useState(0); // 0:選択, 1:利用者, 2:PT
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ログイン処理（既存ユーザー向け）
    const handleLogin = (role: "user" | "pt") => {
        const result = loginSchema.safeParse({ email, password });

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            alert(fieldErrors.email?.[0] || fieldErrors.password?.[0] || "入力内容に誤りがあります");
            return;
        }

        // ログイン後はそれぞれのメイン画面へ
        if (role === "user") {
            router.push("/search"); // 患者さんは検索トップへ
        } else {
            router.push("/results"); // PTは自分の掲載を確認できるよう結果一覧へ（またはマイページ）
        }
    };

    // ★新規登録処理（理学療法士が「初めて」使う時）
    const handleStartRegistration = () => {
        const result = loginSchema.safeParse({ email, password });
        if (!result.success) {
            alert("まずはメールアドレスとパスワードを正しく入力してください");
            return;
        }
        // アカウント作成の第一歩として、詳細プロフィール入力画面へ飛ばす
        // 本来はここでAPIを叩いてUserを作成しますが、まずは画面を繋ぎます
        router.push("/register/profile");
    };

    const containerStyle = { padding: "40px 20px", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" };
    const inputStyle = { padding: "12px", width: "100%", boxSizing: "border-box" as const, borderRadius: "8px", border: "1px solid #ddd", marginTop: "5px" };
    const buttonStyle = (color: string, outline = false) => ({ 
        marginTop: "15px", 
        padding: "15px", 
        width: "100%", 
        backgroundColor: outline ? "white" : color, 
        color: outline ? color : "white", 
        border: outline ? `2px solid ${color}` : "none", 
        borderRadius: "8px", 
        cursor: "pointer", 
        fontWeight: "bold" as const 
    });

    // 最初の役割選択画面
    if (screenType === 0) {
        return (
            <div style={{ ...containerStyle, textAlign: "center", marginTop: "10vh" }}>
                <h1 style={{ color: "#0070f3", marginBottom: "10px" }}>リハヒカリ</h1>
                <p style={{ color: "#666", marginBottom: "40px" }}>あなたにぴったりのリハビリを、すぐそばに。</p>
                <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>どちらで利用しますか？</h2>
                <button onClick={() => setScreenType(1)} style={buttonStyle("#0070f3")}>利用者（患者様）として</button>
                <button onClick={() => setScreenType(2)} style={buttonStyle("#28a745")}>理学療法士として</button>
            </div>
        );
    }

    // フォーム画面
    return (
        <div style={containerStyle}>
            <button onClick={() => setScreenType(0)} style={{ background: "none", border: "none", color: "#666", cursor: "pointer", marginBottom: "20px" }}>← 戻る</button>
            <h2 style={{ marginBottom: "25px" }}>{screenType === 1 ? "利用者" : "理学療法士"}モード</h2>
            
            <div style={{ marginBottom: "20px" }}>
                <label style={{ fontSize: "14px", fontWeight: "bold" }}>メールアドレス</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} placeholder="example@mail.com" />
            </div>
            
            <div style={{ marginBottom: "20px" }}>
                <label style={{ fontSize: "14px", fontWeight: "bold" }}>パスワード</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} placeholder="6文字以上" />
            </div>

            <button 
                onClick={() => handleLogin(screenType === 1 ? "user" : "pt")}
                style={buttonStyle(screenType === 1 ? "#0070f3" : "#28a745")}>
                ログイン
            </button>

            {/* 理学療法士の場合のみ「新規登録」ボタンを表示 */}
            {screenType === 2 && (
                <div style={{ marginTop: "40px", textAlign: "center", borderTop: "1px solid #eee", paddingTop: "20px" }}>
                    <p style={{ fontSize: "13px", color: "#666" }}>まだアカウントをお持ちでない方</p>
                    <button 
                        onClick={handleStartRegistration}
                        style={buttonStyle("#28a745", true)}>
                        新しく理学療法士として登録する
                    </button>
                </div>
            )}
        </div>
    );
}