import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const project = await prisma.portfolioProject.findUnique({
      where: { id: params.id },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Portfolio project not found' },
        { status: 404 }
      );
    }

    // Parse technologies from JSON string to array
    const parsedProject = {
      ...project,
      technologies: JSON.parse(project.technologies || '[]'),
    };

    return NextResponse.json(parsedProject);
  } catch (error) {
    console.error('Error fetching portfolio project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio project' },
      { status: 500 }
    );
  }
}
