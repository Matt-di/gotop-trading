import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { transformTestimonialForFrontend } from '@/lib/api-transformers';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isFeatured: true },
      orderBy: { createdAt: 'desc' },
    });

    const transformedTestimonials = testimonials.map(transformTestimonialForFrontend);
    return NextResponse.json(transformedTestimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}
