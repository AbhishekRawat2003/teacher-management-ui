'use client';

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 dark:bg-[#1e1e2f] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="md:ml-10 p-4 sm:p-6 md:p-10 pl-20 transition-all duration-300">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-8 tracking-tight">
            Faculty Dashboard
          </h1>

          {/* Faculty Profile */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-[#2a2a40] p-6 rounded-2xl shadow mb-10">
            <div className="flex-shrink-0">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Faculty Avatar"
                width={100}
                height={100}
                className="rounded-full border-2 border-indigo-600"
              />
            </div>
            <div className="text-gray-800 dark:text-white w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <h2 className="text-2xl font-bold mb-1">Dr. John Doe</h2>
                <p><span className="font-semibold">Email:</span> johndoe@example.com</p>
                <p><span className="font-semibold">Phone:</span> +91 9876543210</p>
              </div>
              <div>
                <p><span className="font-semibold">Qualification:</span> Ph.D. in Computer Science</p>
                <p><span className="font-semibold">Address:</span> 123 Faculty Lane, University Campus</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#2a2a40] rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-[1.02]">
              <h2 className="text-md font-medium text-gray-600 dark:text-gray-300">👩‍🏫 Total Teachers</h2>
              <p className="text-4xl font-bold text-indigo-600 mt-2">2</p>
            </div>

            <div className="bg-white dark:bg-[#2a2a40] rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-[1.02]">
              <h2 className="text-md font-medium text-gray-600 dark:text-gray-300">📆 Last Updated</h2>
              <p className="text-base mt-2 text-gray-700 dark:text-gray-300">July 9, 2025</p>
            </div>

            <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-[1.02]">
              <h2 className="text-md font-medium">🎓 Department Overview</h2>
              <p className="text-lg font-semibold mt-2">5 Active Subjects</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/teachers"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-5 rounded-xl text-center font-medium shadow transition duration-300"
            >
              📋 View All Teachers
            </Link>
            <Link
              href="/teachers/add"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded-xl text-center font-medium shadow transition duration-300"
            >
              ➕ Add New Teacher
            </Link>
            <Link
              href="/settings"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-5 rounded-xl text-center font-medium shadow transition duration-300"
            >
              ⚙️ Manage Settings
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
