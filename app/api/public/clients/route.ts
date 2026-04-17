import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { transformClientForFrontend } from '@/lib/api-transformers';

export async function GET() {
  try {
    const clients = await prisma.client.findMany({
      where: { isFeatured: true },
      orderBy: { createdAt: 'asc' },
    });

    const transformedClients = clients.map(transformClientForFrontend);
    return NextResponse.json(transformedClients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch clients' },
      { status: 500 }
    );
  }
}
