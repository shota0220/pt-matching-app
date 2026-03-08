// src/app/api/ai/suggest/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Geminiの例

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  const { lastMessage, context } = await request.json();

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `
    あなたはプロの理学療法士の助手です。
    利用者からのメッセージ: "${lastMessage}"
    状況: ${context}
    
    上記に対して、セラピストが送るべき適切な返信案を3つ提案してください。
    条件：
    1. 丁寧かつ親しみやすい表現
    2. 専門性を感じさせつつ分かりやすい
    3. 箇条書きではなく、そのままコピーできる文章のみを返してください。
    区切り文字は "---" を使用してください。
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const suggestions = response.text().split("---");

  return NextResponse.json({ suggestions });
}