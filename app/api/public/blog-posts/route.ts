import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { transformBlogPostForFrontend } from '@/lib/api-transformers';

export async function GET() {
  try {
    // For now, return featured posts without filtering
    // In production, you'd use middleware or a different approach for query parameters
    const posts = await prisma.blogPost.findMany({
      where: { isFeatured: true },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { publishedAt: 'desc' },
      take: 5, // Default limit
    });

    const transformedPosts = posts.map(transformBlogPostForFrontend);
    return NextResponse.json(transformedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
