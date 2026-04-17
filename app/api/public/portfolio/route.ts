import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { transformPortfolioProjectForFrontend } from '@/lib/api-transformers';

export async function GET() {
  try {
    // For now, return all projects without filtering
    // In production, you'd use middleware or a different approach for query parameters
    const projects = await prisma.portfolioProject.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10, // Default limit
    });

    const transformedProjects = projects.map(transformPortfolioProjectForFrontend);
    return NextResponse.json(transformedProjects);
  } catch (error) {
    console.error('Error fetching portfolio projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio projects' },
      { status: 500 }
    );
  }
}
