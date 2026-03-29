//マッチングが成立し、理学療法士の報酬が更新されるモデル
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { requestId } = await request.json();

    const result = await prisma.$transaction(async (tx) => {
      // 1. 申請を承認
      const updatedRequest = await tx.matchRequest.update({
        where: { id: requestId },
        data: { status: "APPROVED" },
      });

      // 2. 報酬 +5000
      const updatedTherapist = await tx.therapist.update({
        where: { id: updatedRequest.therapistId },
        data: {
          walletBalance: {
            increment: 5000,
          },
        },
      });

      // 3. チャットルームが既にあるか確認
      const existingChat = await tx.chat.findFirst({
        where: {
          userId: updatedRequest.userId,
          therapistId: updatedRequest.therapistId,
        },
      });

      // 4. なければ作成
      let chatRoom = existingChat;
      if (!chatRoom) {
        chatRoom = await tx.chat.create({
          data: {
            userId: updatedRequest.userId,
            therapistId: updatedRequest.therapistId,
            message: "マッチングが成立しました。チャットを開始できます。",
            sender: "SYSTEM",
          },
        });
      }

      return { updatedRequest, updatedTherapist, chatRoom };
    });

    return NextResponse.json({
      message: "マッチング成立！チャットルームを作成しました。",
      chatRoomId: result.chatRoom.id,
      newBalance: result.updatedTherapist.walletBalance,
    });
  } catch (error: any) {
    console.error("承認エラー詳細:", error);
    return NextResponse.json(
      { message: "承認処理に失敗しました", detail: error.message },
      { status: 500 }
    );
  }
}


