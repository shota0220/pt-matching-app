//AIタグ検索 API の修正
//患者さんがトップページで「#腰痛に強い」などのタグをクリックしたとき、実際にそのキーワードを持つセラピストを抽出できるようにする
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get("tag"); // URLから ?tag=腰痛 などを取得

    try {
        const therapists = await prisma.therapist.findMany({
            where: tag ? {
                OR: [
                    { tags: { contains: tag } },      // 1. AIが自動生成したタグを最優先
                    { message: { contains: tag } },   // 2. 自己紹介文の内容
                    { specialty: { contains: tag } }, // 3. 専門分野の項目
                    { name: { contains: tag } }      // 4. 名前（一応）
                ]
            } : {},
            include: {
                // フロントで「評価」や「レビュー数」を表示するために必要
                reviews: {
                    select: {
                        id: true,
                        rating: true,
                    }
                }
            },
            orderBy: {
                // 新着順、または評価順などのデフォルトソート
                rating: 'desc'
            }
        });

        // フロントエンドで扱いやすいように、カンマ区切りのtagsを配列に変換して返す
        const formattedTherapists = therapists.map(t => ({
            ...t,
            tagList: t.tags ? t.tags.split(',').map(tag => tag.trim()) : []
        }));

        return NextResponse.json(formattedTherapists);
    } catch (error) {
        console.error("Therapists Fetch Error:", error);
        return NextResponse.json({ error: "取得失敗" }, { status: 500 });
    }
}