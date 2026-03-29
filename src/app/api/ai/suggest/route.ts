import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  try {
    const { lastMessage, context } = await request.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      あなたはプロの理学療法士をサポートする優秀なAI秘書です。
      【状況（Context）】: ${context}
      【患者さんからのメッセージ】: "${lastMessage}"
      
      上記に対し、セラピストが送るべき適切な返信案を、以下の3つの異なる視点で作成してください。
      1. 【安心・共感】患者さんの不安に寄り添い、安心感を与える返信
      2. 【専門的・具体的】理学療法士としての知見を交えた、信頼感のある返信
      3. 【行動・予約】次回の訪問予約や、自主トレの促しを含む返信

      条件：
      - 解説やタイトルは一切不要。
      - そのままコピー＆ペーストして送信できる文章のみを出力してください。
      - 各返信案を "---" という記号のみで区切ってください。
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // 記号で分割し、余計な空白を削除して配列化
    const suggestions = responseText
      .split("---")
      .map(s => s.trim())
      .filter(s => s.length > 0);

    return NextResponse.json({ suggestions });

  } catch (error) {
    console.error("AI提案エラー:", error);
    return NextResponse.json({ error: "提案の生成に失敗しました" }, { status: 500 });
  }
}