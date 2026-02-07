"use client";
import Link from 'next/link'; 

export default function AdminDashboard() {
    // 仮の相談データ
    const consultations = [
        { id: 101, userName: "田中 健一 様", symptom: "膝の痛み（術後）", date: "2024/05/20" },
        { id: 102, userName: "佐藤 幸子 様", symptom: "腰痛・歩行不安", date: "2024/05/19" },
    ];

    return (
        <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
                <h1>理学療法士ダッシュボード</h1>
                <Link href="/admin/register" style={{ fontSize: "14px", color: "#0070f3" }}>プロフィール編集</Link>
            </header>

            <section style={{ marginTop: "30px" }}>
                <h2>届いている新規の相談</h2>
                {consultations.map((chat) => (
                    <div key={chat.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <h3 style={{ margin: "0 0 5px 0" }}>{chat.userName}</h3>
                            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>相談内容：{chat.symptom}</p>
                            <small style={{ color: "#999" }}>受信日：{chat.date}</small>
                        </div>
                        
                        <Link href={`/chat?name=${encodeURIComponent(chat.userName)}`}>
                            <button style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                                チャットで返信する
                            </button>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
}