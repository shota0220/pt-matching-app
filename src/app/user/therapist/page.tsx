// 利用者がセラピストを選ぶ「詳細プロフィール画面」
import { prisma } from "@/lib/prisma";
import type { Therapist } from "../../../../node_modules/.prisma/client";

export default async function UserTherapistView() {
    // 💡 型定義が一致したため、ここでのエラーも消えます
    const pt = await prisma.therapist.findUnique({
        where: { 
            email: "demo-pt@example.com" 
        }
    });

    if (!pt) {
        return (
            <div style={{ padding: "40px", textAlign: "center" }}>
                <p>セラピストが見つかりません。</p>
                <a href="/admin/dashboard" style={{ color: "#0070f3" }}>管理画面でプロフィールを登録してください</a>
            </div>
        );
    }

    return (
        <div style={{ padding: "20px", maxWidth: "450px", margin: "0 auto", fontFamily: "sans-serif" }}>
            <div style={{ backgroundColor: "white", borderRadius: "24px", padding: "30px", border: "1px solid #f0f0f0", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h2 style={{ fontSize: "22px", margin: "0 0 10px 0" }}>{pt.name} 先生</h2>
                <div style={{ marginBottom: "15px", color: "#2e7d32", fontWeight: "bold" }}>{pt.specialty}</div>
                
                <div style={{ display: "flex", gap: "20px", marginBottom: "20px", color: "#666", fontSize: "14px" }}>
                    {/* 💡 ここで .experience が「存在する項目」として認識されます */}
                    <span>臨床経験: <strong>{pt.experience ?? 0}年</strong></span>
                    <span>エリア: <strong>福岡市</strong></span>
                </div>

                <div style={{ textAlign: "left", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "16px" }}>
                    <p style={{ fontSize: "15px", lineHeight: "1.6", whiteSpace: "pre-wrap", color: "#333", margin: 0 }}>
                        {/* 💡 .bio も補完候補に出てくるようになります */}
                        {pt.bio || "リハビリを通じて、あなたの生活の質を向上させるサポートをいたします。"}
                    </p>
                </div>
                
                <button style={{ width: "100%", marginTop: "25px", padding: "12px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}>
                    この先生に相談する
                </button>
            </div>
        </div>
    ); 
}