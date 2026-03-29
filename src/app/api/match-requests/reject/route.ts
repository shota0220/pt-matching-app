import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== "THERAPIST") {
      return NextResponse.json(
        { message: "権限がありません" },
        { status: 403 }
      );
    }

    const { requestId } = await request.json();

    if (!requestId) {
      return NextResponse.json(
        { message: "requestId が必要です" },
        { status: 400 }
      );
    }

    // ステータスを REJECTED に更新
    const updated = await prisma.matchRequest.update({
      where: { id: requestId },
      data: { status: "REJECTED" },
    });

    return NextResponse.json({
      message: "申請をお断りしました。",
      data: updated,
    });
  } catch (error: any) {
    console.error("Reject Error:", error);
    return NextResponse.json(
      { message: "拒否処理に失敗しました", detail: error.message },
      { status: 500 }
    );
  }
}
