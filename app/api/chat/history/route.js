import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { options } from '../../(auth)/auth/[...nextauth]/options';

import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const session = await getServerSession(options);

    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { role, content } = await request.json();

    // Check if content is defined and not empty
    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const chatMessage = await prisma.chatMessage.create({
      data: {
        role,
        content,
        userId: session.user.id,
      },
    });

    return NextResponse.json(chatMessage);
  } catch (error) {
    console.error('Error saving chat message:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function GET(request) {
  try {
    const session = await getServerSession(options);

    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const userId = session.user.id;

    // Fetch chat messages for the authenticated user
    const chatMessages = await prisma.chatMessage.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc', // Sort messages by creation time in ascending order
      },
    });

    return NextResponse.json(chatMessages);
  } catch (error) {
    console.error('Error fetching chat messages:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}