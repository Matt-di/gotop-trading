import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { transformServiceForFrontend } from '@/lib/api-transformers';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'asc' },
    });

    const transformedServices = services.map(transformServiceForFrontend);
    return NextResponse.json(transformedServices);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}
