//SOAP自動生成：バックエンドロジック
//チャット要約（背景）と当日のメモ（実施内容）を組み合わせて、医療基準に沿ったSOAP形式へ変換して保存する機能
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  const { summary, sessionMemo } = await request.json();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); // より賢いProモデルを推奨
  const prompt = `
    理学療法士の記録（SOAP形式）を作成してください。
    【背景（チャット要約）】: ${summary}
    【当日のメモ（音声入力等）】: ${sessionMemo}

    以下の形式で出力してください：
    S (Subjective): 患者の主訴・発言
    O (Objective): 客観的所見・実施した訓練・数値
    A (Assessment): 分析・改善の兆し・課題
    P (Plan): 次回の指針

    専門用語を用いつつ、簡潔でプロフェッショナルな表現にしてください。
  `;

  const result = await model.generateContent(prompt);
  return NextResponse.json({ soap: result.response.text() });
}