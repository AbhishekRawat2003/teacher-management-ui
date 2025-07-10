// app/api/teachers/[id]/route.ts
import { NextResponse } from 'next/server';

let teachers: any[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', subject: 'Math' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', subject: 'Science' },
];

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const updated = await req.json();
  const id = params.id;

  teachers = teachers.map(t => t.id === id ? { ...t, ...updated } : t);

  return NextResponse.json({ message: 'Teacher updated', id });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  teachers = teachers.filter(t => t.id !== id);
  return NextResponse.json({ message: 'Teacher deleted', id });
}
