import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.portfolioProject.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // Parse technologies from JSON string to array
    const parsedProjects = projects.map(project => ({
      ...project,
      technologies: JSON.parse(project.technologies || '[]'),
    }));

    return NextResponse.json(parsedProjects);
  } catch (error) {
    console.error('Error fetching portfolio projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio projects' },
      { status: 500 }
    );
  }
}
