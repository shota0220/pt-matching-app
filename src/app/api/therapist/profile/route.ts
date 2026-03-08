//プロフィール保存用 API
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, specialty, experience, message } = body;

        // --- AIによるタグ抽出ロジック ---
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `以下の理学療法士の自己紹介文から、検索キーワードとして適切な「短いタグ」を5つ抽出して、カンマ区切りで出力してください。余計な説明は不要です。例：腰痛,徒手療法,スポーツ外傷\n\n文章：${message}`;
        
        const aiResult = await model.generateContent(prompt);
        const tagsString = aiResult.response.text(); 
        // ------------------------------

        const therapist = await prisma.therapist.upsert({
            where: { email: "demo-pt@example.com" },
            update: {
                name,
                specialty,
                experience: Number(experience),
                message,
                // DBにtagsカラム（String型）があると想定し、AIが作ったタグを保存
                tags: tagsString, 
            },
            create: { 
                name,
                email: "demo-pt@example.com", 
                specialty,
                experience: Number(experience),
                message,
                tags: tagsString,
                walletBalance: 0,
            },
        });

        return NextResponse.json({ success: true, tags: tagsString.split(',') });
    } catch (error) {
        return NextResponse.json({ success: false, error: "保存またはAI解析に失敗" }, { status: 500 });
    }
}