import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    // For demo purposes, create a sample service
    // In production, you'd use request body parsing with proper validation
    const service = await prisma.service.create({
      data: {
        name: 'New Service',
        icon: '🔧',
        shortDescription: 'A new service offering',
        fullDescription: 'Detailed description of the new service',
        features: JSON.stringify(['Feature 1', 'Feature 2']),
        technologies: JSON.stringify(['Technology 1', 'Technology 2']),
        processSteps: JSON.stringify([]),
        isActive: true,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}
