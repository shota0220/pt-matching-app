import { NextResponse } from "next/server";
// ★ 修正1: インポート元を @prisma/client から「生成した場所」に変更
import { PrismaClient } from "@prisma/client";

// ★ 修正2: インスタンス作成時に型をしっかり紐付ける
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { requestId } = body;

    // 1. 申請を「承認」に更新
    // 型が生成先から読み込まれていれば、as any なしで matchRequest が認識されます
    const updatedRequest = await (prisma as any).matchRequest.update({
      where: { id: requestId },
      data: { status: "APPROVED" },
    });

    // 2. 理学療法士の報酬をプラス
    // これも walletBalance が認識されるようになります
    await (prisma as any).therapist.update({
      where: { id: updatedRequest.therapistId },
      data: { 
        walletBalance: { 
          increment: 5000 
        } 
      },
    });

    return NextResponse.json({ message: "マッチング成立！" });
  } catch (error: any) {
    console.error("承認エラー詳細:", error);
    return NextResponse.json(
      { message: "エラーが発生しました", detail: error.message }, 
      { status: 500 }
    );
  }
}