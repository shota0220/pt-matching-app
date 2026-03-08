//予約
import { NextResponse } from 'next/server';
import prisma from "@/lib/prisma"; // インスタンスを共通化している方を推奨

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { therapistId, date, price, userId: clientUserId } = body;

        // 1. バリデーション：必要なデータが揃っているか
        if (!therapistId || !date || !price) {
            return NextResponse.json({ error: "予約情報が不足しています" }, { status: 400 });
        }

        // 2. 日時・ユーザーIDの設定
        // ログイン機能が完成していれば、クライアントから送られたID、なければシードのテストユーザー
        const userId = clientUserId || "user_fukuoka_test";
        const bookingDate = new Date(date);

        // 3. データベース操作（トランザクション）
        // 予約の作成と、セラピスト側の状態更新などを一気に行う
        const result = await prisma.$transaction(async (tx) => {
            
            // A. 重複チェック：同じ時間に既に予約（確定済）がないか
            const conflict = await tx.reservation.findFirst({
                where: {
                    therapistId: therapistId,
                    date: bookingDate,
                    status: { in: ["PENDING", "CONFIRMED"] } // 承認待ちor確定済みのものはブロック
                }
            });

            if (conflict) {
                throw new Error("この時間帯は既に他の予約が入っています。");
            }

            // B. 予約レコードの作成
            const newReservation = await tx.reservation.create({
                data: {
                    userId: userId,
                    therapistId: therapistId,
                    date: bookingDate,
                    price: Number(price),
                    status: "PENDING",
                },
                // 完了後に画面に表示したい関連データも一緒に持ってくる
                include: {
                    therapist: {
                        select: { name: true, specialty: true }
                    }
                }
            });

            return newReservation;
        });

        return NextResponse.json({ 
            message: "予約リクエストを送信しました！", 
            reservation: result 
        }, { status: 201 });

    } catch (error: any) {
        console.error("予約保存エラー:", error);
        return NextResponse.json({ 
            error: error.message || "予約処理中にエラーが発生しました" 
        }, { status: 500 });
    }
}