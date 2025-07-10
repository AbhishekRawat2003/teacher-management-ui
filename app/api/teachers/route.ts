
import { NextResponse } from 'next/server';
let teachers: any[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    address: '123 Main St, City',
    subject: 'Mathematics',
    dob: '1990-01-01',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876501234',
    address: '456 Park Ave, City',
    subject: 'Science',
    dob: '1985-06-15',
  }
];

// GET: Return all teachers
export async function GET() {
  return NextResponse.json(teachers);
}

// POST: Add a new teacher
export async function POST(req: Request) {
  const body = await req.json();

  const newTeacher = {
    id: Date.now().toString(),
    name: body.name,
    email: body.email,
    phone: body.phone,
    address: body.address,
    subject: body.subject,
    dob: body.dob,
  };

  teachers.push(newTeacher);
  return NextResponse.json(newTeacher, { status: 201 });
}

// Temporary in-memory data store (can be replaced with DB later)
// Temporary in-memory data store (can be replaced with DB later)
// Temporary in-memory data store (can be replaced with DB later)