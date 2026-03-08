//AIプロフィール添削機能
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

// 環境変数からキーを読み込む
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    try {
        const { type, text, context } = await request.json();

        // APIキーがない場合のガード
        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({ error: "APIキーが設定されていません" }, { status: 500 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        let prompt = "";
        if (type === "suggest_reply") {
            prompt = `
                あなたはプロの理学療法士の助手です。
                利用者からのメッセージ: "${text}"
                状況: ${context}
                
                上記に対して、セラピストが送るべき適切な返信案を3つ提案してください。
                条件：
                1. 丁寧かつ親しみやすい表現
                2. 専門性を感じさせつつ分かりやすい
                3. 返信案のみを "---" という記号で区切って出力してください。余計な解説は不要です。
            `;
        } else if (type === "optimize_profile") {
            prompt = `
                以下の理学療法士の自己紹介文を、患者さんに信頼感と安心感を与える魅力的な文章にリライトしてください。
                【リライトの指針】
                - 専門性を保ちつつ、難しい言葉を避け、患者さんの悩みに寄り添うトーンにする
                - 文末はですます調で統一
                原文: "${text}"
            `;
        }

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const output = response.text();

        return NextResponse.json({ result: output });

    } catch (error) {
        console.error("AI API Error:", error);
        return NextResponse.json({ error: "AI処理中にエラーが発生しました" }, { status: 500 });
    }
}