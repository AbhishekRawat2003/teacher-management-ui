import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params }: { params: Record<string, string> }) {
  const { id } = params;
  const data = await req.json();
  // your update logic here
  return NextResponse.json({ message: 'Teacher updated', id });
}

export async function DELETE(req: NextRequest, { params }: { params: Record<string, string> }) {
  const { id } = params;
  // your delete logic here
  return NextResponse.json({ message: 'Teacher deleted', id });
}
