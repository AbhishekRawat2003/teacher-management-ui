'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBook,
  FiCalendar,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';

export default function AddTeacherPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    dob: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const allFieldsFilled = Object.values(formData).every((v) => v.trim() !== '');
    if (!allFieldsFilled) {
      setError('❌ All fields are required');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/teachers/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to add teacher');

      setSuccess('✅ Teacher added successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        subject: '',
        dob: '',
      });

      setTimeout(() => {
        router.push('/teachers');
      }, 1500);
    } catch {
      setError('❌ Error adding teacher');
    } finally {
      setLoading(false);
    }
  };

  const inputs = [
    { label: 'Name', name: 'name', type: 'text', icon: <FiUser /> },
    { label: 'Email', name: 'email', type: 'email', icon: <FiMail /> },
    { label: 'Phone', name: 'phone', type: 'text', icon: <FiPhone /> },
    { label: 'Address', name: 'address', type: 'text', icon: <FiMapPin /> },
    { label: 'Subject', name: 'subject', type: 'text', icon: <FiBook /> },
    { label: 'Date of Birth', name: 'dob', type: 'date', icon: <FiCalendar /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-[#1e1e2f]">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 sm:px-6 md:px-10 py-8">
          <h1 className="text-3xl font-bold mb-8 text-indigo-700 dark:text-indigo-300 text-center">
            ➕ Add New Teacher
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#2a2a40] rounded-xl shadow-xl p-6 space-y-5 transition-all duration-300"
          >
            {inputs.map(({ label, name, type, icon }) => (
              <div key={name} className="relative">
                <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {label}
                </label>
                <span className="absolute left-3 top-[38px] text-gray-500 dark:text-gray-400">
                  {icon}
                </span>
                <input
                  type={type}
                  name={name}
                  placeholder={label}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#3a3a55] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-semibold rounded-md transition-all duration-300 shadow ${
                loading
                  ? 'bg-indigo-300 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {loading ? 'Submitting...' : 'Add Teacher'}
            </button>

            {error && (
              <p className="mt-2 flex items-center gap-2 text-sm text-red-600">
                <FiAlertCircle /> {error}
              </p>
            )}
            {success && (
              <p className="mt-2 flex items-center gap-2 text-sm text-green-600">
                <FiCheckCircle /> {success}
              </p>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}
