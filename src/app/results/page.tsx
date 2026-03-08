// 結果画面
// サーバーサイドで動作させるため "use client" を外した親コンポーネントを作ります
import prisma from "@/lib/prisma";
import ResultsClientContent from "./ResultsClientContent"; // 表示用コンポーネント（後述）
import { Suspense } from 'react';

export default async function ResultsPage() {
    // 1. サーバーサイドでデータベースから全セラピストを取得
    const ptsFromDB = await prisma.therapist.findMany();

    // 2. データベースの型をフロントエンドの PT 型に整形
    const allPTs = ptsFromDB.map(pt => ({
        id: pt.id,
        name: pt.name,
        specialty: pt.specialty,
        experienceYears: pt.experience, // schema.prismaの項目名に合わせる
        skills: [], 
        photo: pt.photo || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&h=200&fit=crop",
        message: pt.message || "",
        lat: pt.lat,
        lng: pt.lng,
        rating: pt.rating,
        price: pt.price,
    }));

    return (
        <Suspense fallback={<div>データを読み込み中...</div>}>
            {/* 3. 取得した本物のデータをクライアントコンポーネントに渡す */}
            <ResultsClientContent initialPTs={allPTs} />
        </Suspense>
    );
}