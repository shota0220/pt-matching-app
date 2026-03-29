import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const role = (session.user as any).role as "THERAPIST" | "USER";

    // 1. まずチャット一覧を取得
    const chatRooms = await prisma.chat.findMany({
      where:
        role === "THERAPIST"
          ? { therapistId: userId }
          : { userId: userId },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (chatRooms.length === 0) {
      return NextResponse.json([]);
    }

    // 2. 相手側の情報をまとめて取得して紐づける

    if (role === "THERAPIST") {
      // PT → 相手は user
      const userIds = Array.from(
        new Set(chatRooms.map((c) => c.userId))
      );

      const users = await prisma.user.findMany({
        where: { id: { in: userIds } },
        select: {
          id: true,
          name: true,
          symptom: true,
        },
      });

      const userMap = new Map(users.map((u) => [u.id, u]));

      const formatted = chatRooms.map((room) => {
        const partner = userMap.get(room.userId);
        return {
          chatRoomId: room.id,
          lastMessage: room.message,
          updatedAt: room.createdAt,
          partner: {
            id: partner?.id ?? "",
            name: partner?.name ?? "利用者",
            symptom: partner?.symptom ?? "",
            role: "USER" as const,
          },
        };
      });

      return NextResponse.json(formatted);
    } else {
      // USER → 相手は therapist
      const therapistIds = Array.from(
        new Set(chatRooms.map((c) => c.therapistId))
      );

      const therapists = await prisma.therapist.findMany({
        where: { id: { in: therapistIds } },
        select: {
          id: true,
          name: true,
          specialty: true,
        },
      });

      const therapistMap = new Map(therapists.map((t) => [t.id, t]));

      const formatted = chatRooms.map((room) => {
        const partner = therapistMap.get(room.therapistId);
        return {
          chatRoomId: room.id,
          lastMessage: room.message,
          updatedAt: room.createdAt,
          partner: {
            id: partner?.id ?? "",
            name: partner?.name ?? "セラピスト",
            specialty: partner?.specialty ?? "",
            role: "THERAPIST" as const,
          },
        };
      });

      return NextResponse.json(formatted);
    }
  } catch (error) {
    console.error("Chat List Error:", error);
    return NextResponse.json(
      { error: "サーバーエラー" },
      { status: 500 }
    );
  }
}
