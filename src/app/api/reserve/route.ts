//予約
import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: Request) {
    try {
        // 1. セッション（ログイン情報）の確認
        const session = await getServerSession(authOptions);
        
        const body = await request.json();
        const { therapistId, date, price } = body;

        // 2. 必須データのバリデーション
        if (!therapistId || !date) {
            return NextResponse.json({ error: "予約情報が不足しています" }, { status: 400 });
        }

        // 3. ユーザーIDの特定（ログイン優先 ＞ body指定 ＞ テスト用）
        const userId = session?.user?.id || body.userId;
        
        if (!userId) {
            return NextResponse.json({ error: "ユーザーを特定できません。ログインしてください。" }, { status: 401 });
        }

        const bookingDate = new Date(date);

        // 4. データベース操作（トランザクションで整合性を保持）
        const result = await prisma.$transaction(async (tx) => {
            
            // A. 重複チェック：同じ療法士、同じ時間に既存の予約がないか
            // ステータスが PENDING（承認待ち）か CONFIRMED（確定）のものを対象にする
            const conflict = await tx.reservation.findFirst({
                where: {
                    therapistId: therapistId,
                    date: bookingDate,
                    status: { in: ["PENDING", "CONFIRMED"] }
                }
            });

            if (conflict) {
                throw new Error("この時間帯は既に他の予約が入っています。");
            }

            // B. セラピストの存在確認と料金の取得
            const therapist = await tx.therapist.findUnique({
                where: { id: therapistId },
                select: { price: true, name: true }
            });

            if (!therapist) {
                throw new Error("指定されたセラピストが見つかりません。");
            }

            // C. 予約レコードの作成
            const newReservation = await tx.reservation.create({
                data: {
                    userId: userId,
                    therapistId: therapistId,
                    date: bookingDate,
                    price: Number(price) || therapist.price || 5000,
                    status: "PENDING", // 初期状態は承認待ち
                },
                include: {
                    therapist: {
                        select: { name: true, specialty: true }
                    },
                    user: {
                        select: { name: true }
                    }
                }
            });

            return newReservation;
        });

        // 5. 成功レスポンス
        return NextResponse.json({ 
            message: "予約リクエストを送信しました！", 
            reservation: result 
        }, { status: 201 });

    } catch (error: any) {
        console.error("予約システム・エラー:", error);
        
        // トランザクション内での throw Error をキャッチしてフロントに返す
        return NextResponse.json({ 
            error: error.message || "予約処理中にサーバーエラーが発生しました" 
        }, { status: 500 });
    }
}