import { NextRequest, NextResponse } from 'next/server';

// Dummy data for example (replace with DB logic)
let teachers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', subject: 'Math' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', subject: 'Science' },
];

// PUT: Update teacher by ID
export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  const data = await request.json();

  teachers = teachers.map((teacher) =>
    teacher.id === id ? { ...teacher, ...data } : teacher
  );

  return NextResponse.json({ message: 'Teacher updated', id });
}

// DELETE: Remove teacher by ID
export async function DELETE(_: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  teachers = teachers.filter((teacher) => teacher.id !== id);

  return NextResponse.json({ message: 'Teacher deleted', id });
}
