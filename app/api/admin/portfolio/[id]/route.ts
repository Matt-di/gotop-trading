import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const project = await prisma.portfolioProject.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Portfolio project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching portfolio project:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio project" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const {
      title,
      client,
      category,
      description,
      technologies,
      imageUrl,
      year,
      isFeatured,
    } = body;

    const project = await prisma.portfolioProject.update({
      where: { id },
      data: {
        title,
        client,
        category,
        description,
        technologies: technologies ? JSON.stringify(technologies) : undefined,
        imageUrl,
        year,
        isFeatured,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error updating portfolio project:", error);
    return NextResponse.json(
      { error: "Failed to update portfolio project" },
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
    await prisma.portfolioProject.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Portfolio project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting portfolio project:", error);
    return NextResponse.json(
      { error: "Failed to delete portfolio project" },
      { status: 500 },
    );
  }
}
