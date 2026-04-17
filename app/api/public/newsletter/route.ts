import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

    // Check if email already exists
    const existingSubscription = await prisma.newsletterSubscription.findUnique({
      where: { email },
    });

    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return NextResponse.json(
          { message: 'You are already subscribed to our newsletter' },
          { status: 400 }
        );
      } else {
        // Reactivate subscription
        await prisma.newsletterSubscription.update({
          where: { email },
          data: { isActive: true },
        });

        return NextResponse.json({
          message: 'Successfully subscribed to our newsletter!'
        });
      }
    }

    // Create new subscription
    await prisma.newsletterSubscription.create({
      data: {
        email,
      },
    });

    return NextResponse.json({
      message: 'Successfully subscribed to our newsletter!'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
