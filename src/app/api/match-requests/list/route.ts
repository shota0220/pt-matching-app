import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== "THERAPIST") {
      return NextResponse.json(
        { error: "権限がありません" },
        { status: 403 }
      );
    }

    const therapistId = (session.user as any).id;

    const requests = await prisma.matchRequest.findMany({
      where: {
        therapistId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            symptom: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(requests);
  } catch (error) {
    console.error("MatchRequest List Error:", error);
    return NextResponse.json(
      { error: "サーバーエラー" },
      { status: 500 }
    );
  }
}
