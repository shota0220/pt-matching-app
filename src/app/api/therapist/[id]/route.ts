import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const therapist = await prisma.therapist.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        specialty: true,
        experience: true,
        message: true,
        price: true,
        photo: true,
      },
    });

    if (!therapist) {
      return NextResponse.json(
        { error: "Therapist not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(therapist);
  } catch (error: any) {
    console.error("Therapist Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch therapist", detail: error.message },
      { status: 500 }
    );
  }
}
