import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });

    // Parse features and technologies from JSON strings to arrays
    const parsedServices = services.map(service => ({
      ...service,
      features: JSON.parse(service.features || '[]'),
      technologies: service.technologies ? JSON.parse(service.technologies) : [],
      processSteps: service.processSteps ? JSON.parse(service.processSteps) : [],
    }));

    return NextResponse.json(parsedServices);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}
