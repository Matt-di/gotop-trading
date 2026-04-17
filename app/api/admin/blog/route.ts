import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      author,
      category,
      tags,
      readTime,
      featured,
      published,
      imageUrl,
    } = body;

    // Get the admin user for authorId
    const adminUser = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    });

    if (!adminUser) {
      return NextResponse.json(
        { error: "Admin user not found" },
        { status: 400 },
      );
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        authorId: adminUser.id,
        category,
        tags,
        readTime,
        isFeatured: featured || false,
        publishedAt: published ? new Date() : undefined,
        featuredImage: imageUrl,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 },
    );
  }
}
