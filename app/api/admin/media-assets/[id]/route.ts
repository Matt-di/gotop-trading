import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const mediaAsset = await prisma.mediaAsset.findUnique({
      where: { id },
    });

    if (!mediaAsset) {
      return NextResponse.json(
        { error: "Media asset not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(mediaAsset);
  } catch (error) {
    console.error("Error fetching media asset:", error);
    return NextResponse.json(
      { error: "Failed to fetch media asset" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await prisma.mediaAsset.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting media asset:", error);
    return NextResponse.json(
      { error: "Failed to delete media asset" },
      { status: 500 },
    );
  }
}
