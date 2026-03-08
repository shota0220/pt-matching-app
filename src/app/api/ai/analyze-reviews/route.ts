//レビューをGeminiに渡し、セラピストの「人柄」や「技術」をタグ化
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    const { reviews } = await request.json();
    
    if (!reviews || reviews.length === 0) return NextResponse.json({ tags: [] });

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // レビュー内容をテキストにまとめる
    const reviewText = reviews.map((r: any) => r.comment).join("\n");

    const prompt = `
        以下の理学療法士へのレビューを分析し、このセラピストの特徴を表す短いタグ（3〜5文字）を最大5つ抽出してください。
        例: 優しく丁寧、腰痛に強い、理論的、話しやすい、強めのマッサージ
        出力形式: タグのみをカンマ区切りで。
        レビュー内容:
        ${reviewText}
    `;

    const result = await model.generateContent(prompt);
    const tags = result.response.text().split(",").map(tag => tag.trim());

    return NextResponse.json({ tags });
}