//理学療法士管理画面
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { SPECIALTIES } from "../../../types"; 

export default function PTRegisterPage() {
    const router = useRouter(); 
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState(SPECIALTIES[0]); // 初期値をリストの1番目にする
    const [experience, setExperience] = useState(0);

    const handleSave = () => {
        if (!name) {
            alert("氏名を入力してください");
            return;
        }
        alert(name + " さんの情報を保存しました。管理画面へ移動します。");
        router.push("/admin/dashboard");
    };

    return (
        <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
            <h1>理学療法士：プロフィール登録</h1>
            
            <div style={{ marginTop: "20px" }}>
                <label style={{ display: "block", fontWeight: "bold" }}>氏名</label>
                <input 
                    style={{ width: "100%", padding: "10px", margin: "10px 0", boxSizing: "border-box" }} 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例：山田 太郎"
                />

                <label style={{ display: "block", fontWeight: "bold" }}>専門分野</label>
                <select 
                    style={{ width: "100%", padding: "10px", margin: "10px 0" }}
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                >
                    
                    {SPECIALTIES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>

                <label style={{ display: "block", fontWeight: "bold" }}>経験年数</label>
                <input 
                    type="number"
                    style={{ width: "100%", padding: "10px", margin: "10px 0", boxSizing: "border-box" }} 
                    value={experience} 
                    onChange={(e) => setExperience(Number(e.target.value))}
                />
                

                <button 
                    onClick={handleSave}
                    style={{ 
                        width: "100%", padding: "15px", backgroundColor: "#28a745", color: "white", 
                        border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer", marginTop: "20px" 
                    }}
                >
                    プロフィールを公開する
                </button>
            </div>
        </div>
    );
}