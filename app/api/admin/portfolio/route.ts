import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.portfolioProject.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching portfolio projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio projects" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
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

    const project = await prisma.portfolioProject.create({
      data: {
        title,
        client,
        category,
        description,
        technologies: JSON.stringify(technologies),
        imageUrl,
        year: year || new Date().getFullYear().toString(),
        isFeatured: isFeatured || false,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating portfolio project:", error);
    return NextResponse.json(
      { error: "Failed to create portfolio project" },
      { status: 500 },
    );
  }
}
