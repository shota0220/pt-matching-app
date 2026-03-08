//予約データをDBから取得して表示するページ
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        // user_1 の予約をセラピスト情報付きで取得
        const reservations = await prisma.reservation.findMany({
            where: { userId: "user_1" },
            include: { therapist: true }, 
            orderBy: { date: 'asc' }
        });
        return NextResponse.json(reservations);
    } catch (error) {
        return NextResponse.json({ error: "取得失敗" }, { status: 500 });
    }
}