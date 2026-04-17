import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Fetch real counts from the database
    const [
      servicesCount,
      portfolioCount,
      blogPostsCount,
      testimonialsCount,
      clientsCount,
      contactSubmissionsCount,
      unreadContactCount,
    ] = await Promise.all([
      prisma.service.count(),
      prisma.portfolioProject.count(),
      prisma.blogPost.count(),
      prisma.testimonial.count(),
      prisma.client.count(),
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { isRead: false } }),
    ]);

    const stats = {
      services: servicesCount,
      portfolio: portfolioCount,
      blogPosts: blogPostsCount,
      testimonials: testimonialsCount,
      clients: clientsCount,
      contactSubmissions: unreadContactCount,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard statistics" },
      { status: 500 },
    );
  }
}
