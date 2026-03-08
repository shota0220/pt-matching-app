import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const reservationId = params.id;

    const updated = await prisma.reservation.update({
      where: { id: reservationId },
      data: { status: "CONFIRMED" },
    });

    return NextResponse.json({ message: "予約を確定しました", updated });
  } catch (error) {
    return NextResponse.json({ error: "更新に失敗しました" }, { status: 500 });
  }
}