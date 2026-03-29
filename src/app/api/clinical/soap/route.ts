//SOAP自動生成：バックエンドロジック
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // セラピスト判定（role ではなく DB で判定）
    const therapist = await prisma.therapist.findUnique({
      where: { email: session?.user?.email || "" },
    });

    if (!therapist) {
      return NextResponse.json(
        { error: "セラピストのみがSOAPを作成できます" },
        { status: 403 }
      );
    }

    const { userId, summary, sessionMemo } = await request.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
      あなたは熟練の理学療法士です。以下の情報を統合し、臨床的に価値の高いSOAP形式の記録を作成してください。

      【入力情報】
      1. 患者の訴えとチャット履歴の要約: ${summary}
      2. 当日の理学療法実施内容・メモ: ${sessionMemo}

      【出力ルール】
      - 専門的な医学用語を適切に使用すること。
      - Assessment(A)では臨床的推論を行うこと。
      - 出力は必ず以下のJSON形式のみ。

      {
        "s": "",
        "o": "",
        "a": "",
        "p": ""
      }
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("AIが有効なJSONを生成できませんでした");

    const soapData = JSON.parse(jsonMatch[0]);

    const record = await prisma.clinicalRecord.create({
      data: {
        userId,
        therapistId: therapist.id,
        subjective: soapData.s,
        objective: soapData.o,
        assessment: soapData.a,
        plan: soapData.p,
      },
    });

    return NextResponse.json({
      success: true,
      message: "SOAP記録の生成と保存が完了しました",
      record,
    });

  } catch (error: any) {
    console.error("Clinical AI API Error:", error);
    return NextResponse.json(
      {
        error: "AIによる解析中にエラーが発生しました",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}


