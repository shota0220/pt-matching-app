//プロフィール編集画面
"use client";
import { useState } from "react";

export default function ProfileEditPage() {
    const [bio, setBio] = useState("理学療法士です。腰痛の治療が得意です。よろしくお願いします。");
    const [isOptimizing, setIsOptimizing] = useState(false);

    const handleOptimize = async () => {
        setIsOptimizing(true);
        try {
            const res = await fetch("/api/ai/optimize", {
                method: "POST",
                body: JSON.stringify({ 
                    type: "optimize_profile", 
                    text: bio 
                }),
            });
            const data = await res.json();
            if (data.result) {
                // AIが提案した文章に置き換える（またはプレビューで見せる）
                setBio(data.result.trim());
            }
        } catch (error) {
            console.error("添削失敗:", error);
        } finally {
            setIsOptimizing(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-3xl mt-10">
            <h1 className="text-2xl font-bold mb-6">プロフィール編集</h1>
            
            <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700">自己紹介文（患者さんに公開されます）</label>
                <div className="relative">
                    <textarea 
                        className="w-full h-40 p-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-600 leading-relaxed"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <button 
                        onClick={handleOptimize}
                        disabled={isOptimizing}
                        className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
                    >
                        {isOptimizing ? "✨ 魔法をかけています..." : "✨ AIで魅力的に書き換える"}
                    </button>
                </div>
                
                <p className="text-[10px] text-gray-400">
                    ※AIがあなたの経験を元に、より患者さんに伝わりやすい表現を提案します。
                </p>

                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold mt-6 shadow-xl shadow-blue-100">
                    保存する
                </button>
            </div>
        </div>
    );
}