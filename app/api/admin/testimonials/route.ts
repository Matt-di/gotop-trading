import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, company, content, rating, imageUrl, featured } = body;

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        role,
        company,
        content,
        rating: parseInt(rating),
        imageUrl,
        isFeatured: featured || false,
      },
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 },
    );
  }
}
