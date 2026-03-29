//プロフィール保存用 API
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        // デモ用として email を特定。本番は session.user.email を使用
        const targetEmail = session?.user?.email || "demo-pt@example.com";

        const body = await request.json();
        const { name, specialty, experience, message } = body;

        // 1. AIによるタグ抽出 (Gemini 1.5 Flash で高速処理)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `
            理学療法士の自己紹介から、検索に役立つキーワードを5つ抽出してください。
            【条件】:
            - 3〜5文字程度の短い言葉
            - カンマ区切り（,）のみで出力。
            - 説明、挨拶、改行は一切禁止。
            
            文章：${message}
        `;
        
        const aiResult = await model.generateContent(prompt);
        // 不要な文字を削除し、純粋なタグ文字列を作成
        const tagsString = aiResult.response.text().replace(/\n/g, "").trim(); 

        // 2. データベースの更新・作成
        const therapist = await (prisma as any).therapist.upsert({
            where: { email: targetEmail },
            update: {
                name,
                specialty,
                experience: Number(experience),
                message,
                tags: tagsString, // AIが生成したタグを保存
            },
            create: { 
                name,
                email: targetEmail, 
                specialty,
                experience: Number(experience),
                message,
                tags: tagsString,
                walletBalance: 0,
                rating: 5.0,
            },
        });

        return NextResponse.json({ 
            success: true, 
            tags: tagsString.split(',').map(t => t.trim()), // 配列にしてフロントへ返す
            therapist 
        });

    } catch (error: any) {
        console.error("Profile API Error:", error);
        return NextResponse.json({ 
            success: false, 
            error: "保存またはAI解析に失敗しました",
            detail: error.message 
        }, { status: 500 });
    }
}


