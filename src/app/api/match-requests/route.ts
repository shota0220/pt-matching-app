//マッチング申請保存
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/generated/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { therapistId, userId, message } = body;

    const newRequest = await prisma.matchRequest.create({
      data: {
        therapistId,
        userId,
        message,
        status: "PENDING",
      },
    });

    return NextResponse.json({ message: "申請を送りました", data: newRequest }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "保存失敗" }, { status: 500 });
  }
}