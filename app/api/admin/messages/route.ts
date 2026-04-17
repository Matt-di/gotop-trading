import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const messages = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact messages" },
      { status: 500 }
    );
  }
}
