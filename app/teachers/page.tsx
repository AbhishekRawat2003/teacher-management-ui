// File: app/teachers/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';

interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  subject: string;
  dob: string;
}

export default function TeacherDashboard() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch('/api/teachers');
        const data = await res.json();
        setTeachers(data);
      } catch (err) {
        console.error('Failed to fetch teachers');
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="p-6 min-h-screen bg-gray-100 dark:bg-[#1e1e2f]">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          All Teachers
        </h1>

        {loading ? (
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#2a2a40] rounded-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Subject</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">DOB</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.id} className="border-b hover:bg-gray-50 dark:hover:bg-[#3a3a55]">
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{teacher.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{teacher.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{teacher.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{teacher.subject}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{teacher.dob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}