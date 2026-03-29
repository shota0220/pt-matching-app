//レビューをGeminiに渡し、セラピストの「人柄」や「技術」をタグ化
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    try {
        const { reviews } = await request.json();
        
        // レビューがない場合は空配列を返す（エラーにしないのが運用のコツ）
        if (!reviews || reviews.length === 0) {
            return NextResponse.json({ tags: ["評価収集中"] });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // レビュー内容を抽出して結合
        const reviewText = reviews.map((r: any) => r.comment).join("\n");

        const prompt = `
            あなたは理学療法士の専門エージェントです。
            以下のレビュー群から、このセラピストの「専門性」「人柄」「施術スタイル」を分析し、
            ユーザーが直感的に理解できる特徴タグ（3〜5文字）を最大5つ抽出してください。

            条件：
            - 解説は一切不要。タグのみをカンマ区切りで出力。
            - 臨床的に価値のある特徴（例：膝関節専門、脳外経験豊富）を優先。
            
            レビュー内容:
            ${reviewText}
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        
        // 余計な改行や記号を削除して配列化
        const tags = responseText
            .replace(/\n/g, "")
            .split(",")
            .map(tag => tag.trim())
            .filter(tag => tag !== "");

        return NextResponse.json({ tags });

    } catch (error) {
        console.error("AI分析エラー:", error);
        return NextResponse.json({ error: "分析に失敗しました" }, { status: 500 });
    }
}

