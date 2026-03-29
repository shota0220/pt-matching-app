//AIプロフィール添削機能
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    try {
        const { type, text, context } = await request.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({ error: "APIキー未設定" }, { status: 500 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        let prompt = "";
        if (type === "suggest_reply") {
            prompt = `
                理学療法士のチャットアシスタントとして、患者さんへの返信を3つ提案してください。
                【状況】: ${context}
                【届いたメッセージ】: "${text}"
                
                条件：
                - 1. 共感的、2. 専門的、3. 次のアクション（予約等）を促す、の3パターンを作成。
                - 解説は不要。返信案のみを "@@@" で区切って出力してください。
            `;
        } else if (type === "optimize_profile") {
            prompt = `
                理学療法士としての自己紹介文を、患者さんに信頼感を与える文章にリライトしてください。
                【専門分野】: ${context}
                【原文】: "${text}"
                指針：
                - 「寄り添う姿勢」と「具体的な改善イメージ」を強調。
                - 専門用語を分かりやすく噛み砕く。
            `;
        }

        const result = await model.generateContent(prompt);
        let output = result.response.text();

        // 返信案の場合は配列にして返すと、フロントエンドでの .map() が楽になります
        if (type === "suggest_reply") {
            const suggestions = output.split("@@@").map(s => s.trim()).filter(s => s !== "");
            return NextResponse.json({ suggestions });
        }

        return NextResponse.json({ result: output });

    } catch (error) {
        console.error("AI API Error:", error);
        return NextResponse.json({ error: "AI処理中にエラーが発生しました" }, { status: 500 });
    }
}

