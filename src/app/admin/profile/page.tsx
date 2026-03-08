//理学療法士管理画面
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
// 💡 専門分野の選択肢はプロジェクトの共通定義から取得
import { SPECIALTIES } from "../../../types"; 

export default function PTRegisterPage() {
    const router = useRouter(); 
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState(SPECIALTIES[0]);
    const [experience, setExperience] = useState(0);
    const [bio, setBio] = useState(""); 
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ★ 保存ボタンを押した時の処理
    const handleSave = async () => {
        if (!name) {
            alert("氏名を入力してください");
            return;
        }

        setIsSubmitting(true);

        try {
            // 先ほど作成した API (src/app/api/therapist/profile/route.ts) を叩く
            const response = await fetch("/api/therapist/profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    specialty,
                    experience: Number(experience), // PrismaのInt型に合わせる
                    bio,
                    email: "demo-pt@example.com" // デモ用固定メールアドレス
                }),
            });

            const data = await response.json();

            if (data.success) {
                alert(name + " 先生、プロフィールを公開しました！");
                // 保存成功後、ダッシュボードへ遷移
                router.push("/admin/dashboard");
            } else {
                alert("保存に失敗しました: " + data.error);
            }
        } catch (error) {
            console.error("保存エラー:", error);
            alert("通信エラーが発生しました。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif", backgroundColor: "#fff" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", borderBottom: "2px solid #28a745", paddingBottom: "10px" }}>
                理学療法士：プロフィール登録
            </h1>
            
            <div style={{ marginTop: "30px" }}>
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <div style={{ 
                        width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "#f0f0f0", 
                        margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", 
                        fontSize: "40px", border: "2px dashed #ccc", color: "#999" 
                    }}>
                        👤
                    </div>
                    <p style={{ fontSize: "12px", color: "#0070f3", cursor: "pointer", marginTop: "10px" }}>顔写真をアップロードする</p>
                </div>

                <label style={labelStyle}>氏名</label>
                <input 
                    style={inputStyle} 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例：山田 太郎"
                />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div>
                        <label style={labelStyle}>専門分野</label>
                        <select 
                            style={inputStyle}
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                        >
                            {SPECIALTIES.map((s: string) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label style={labelStyle}>経験年数</label>
                        <input 
                            type="number"
                            style={inputStyle} 
                            value={experience} 
                            onChange={(e) => setExperience(Number(e.target.value))}
                        />
                    </div>
                </div>

                <label style={labelStyle}>自己紹介・得意なアプローチ</label>
                <textarea 
                    style={{ ...inputStyle, height: "120px", resize: "none" }} 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="例：脳血管疾患のリハビリを専門としています。ご自宅での自立した生活をサポートします。"
                />

                <div style={{ backgroundColor: "#fff8e1", padding: "15px", borderRadius: "8px", marginTop: "20px", fontSize: "13px", color: "#856404" }}>
                    ⚠️ 公開すると、博多エリアの利用者があなたのプロフィールを閲覧可能になります。
                </div>

                <button 
                    onClick={handleSave}
                    disabled={isSubmitting}
                    style={{ 
                        width: "100%", padding: "18px", 
                        backgroundColor: isSubmitting ? "#ccc" : "#28a745", 
                        color: "white", border: "none", borderRadius: "12px", 
                        fontSize: "16px", fontWeight: "bold", cursor: isSubmitting ? "not-allowed" : "pointer", 
                        marginTop: "20px", boxShadow: "0 4px 12px rgba(40,167,69,0.2)"
                    }}
                >
                    {isSubmitting ? "保存中..." : "プロフィールを公開する"}
                </button>
            </div>
        </div>
    );
}

// スタイル定義
const labelStyle = {
    display: "block", 
    fontWeight: "bold" as "bold", 
    fontSize: "14px",
    marginTop: "10px"
};

const inputStyle = {
    width: "100%", 
    padding: "12px", 
    margin: "8px 0 16px 0", 
    boxSizing: "border-box" as "border-box",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px"
};