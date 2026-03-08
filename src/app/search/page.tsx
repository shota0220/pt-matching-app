"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
    const router = useRouter();

    //ユーザーが入力した症状と経験年数の状態を管理
    const [symptom, setSymptom] = useState("");
    const [experience, setExperience] = useState("1");//初期値を1に設定
    
    const handleSearch = () => {
        //次の結果画面へ、入力した情報を引き継いで移動する
        router.push(`/results?symptom=${symptom}&experience=${experience}`);
    };

    return (
        <div style={{ padding: "40px", maxWidth: "500px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
                あなたのお悩みを教えてください
            </h1>
            
            <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
                    今の症状の詳しく教えてください（自由記述）
                </label>
                <input type="text"
                placeholder="階段の上り下りで膝が痛む、肩が痛むなど"
                    value={symptom}
                    onChange={(e) => setSymptom(e.target.value)}>
                    
                </input>    
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
                    希望する経験年数
                </label>
                <div>
                <label><input type="radio" name="exp" value="1" checked={experience === "1"} onChange={(e) => setExperience(e.target.value)} /> 1年以上</label>
                <label><input type="radio" name="exp" value="4" checked={experience === "4"} onChange={(e) => setExperience(e.target.value)} style={{ marginLeft: "10px" }} /> 4年以上</label>
                <label><input type="radio" name="exp" value="8" checked={experience === "8"} onChange={(e) => setExperience(e.target.value)} style={{ marginLeft: "10px" }} /> 8年以上</label>
                </div>
            </div>

            <button 
                onClick={handleSearch}
                style={{ width: "100%", backgroundColor: "#0070f3", color: "white", padding: "15px", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: "bold" }}
            >
                理学療法士を探す
            </button>
        </div>
    );
}