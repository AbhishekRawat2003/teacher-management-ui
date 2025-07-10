'use client';

import Link from 'next/link';
import { FiHome, FiUsers, FiPlus, FiCreditCard } from 'react-icons/fi'; // added FiCreditCard

const Sidebar = () => {
  return (
    <aside
      className={`fixed top-12 left-0 h-full bg-white dark:bg-[#2a2a40] shadow-lg z-40 w-16 hover:w-64 group transition-all duration-300 ease-in-out overflow-hidden`}
    >
      <div className="p-4 flex flex-col gap-6 h-full">
        <nav className="flex flex-col gap-4 text-gray-800 dark:text-white">

          <Link
            href="/"
            className="flex items-center gap-3 px-2 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-md"
          >
            <FiHome className="text-xl" />
            <span className="text-base font-medium hidden group-hover:inline-block">Dashboard</span>
          </Link>

          <Link
            href="/teachers"
            className="flex items-center gap-3 px-2 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-md"
          >
            <FiUsers className="text-xl" />
            <span className="text-base font-medium hidden group-hover:inline-block">All Teachers</span>
          </Link>
          <Link
            href="/payment"
            className="flex items-center gap-3 px-2 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-md"
          >
            <FiCreditCard className="text-xl" />
            <span className="text-base font-medium hidden group-hover:inline-block">UPI Payment</span>
          </Link>
          <Link
            href="/teachers/add"
            className="flex items-center gap-3 px-2 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-md"
          >
            <FiPlus className="text-xl" />
            <span className="text-base font-medium hidden group-hover:inline-block">Add Teacher</span>
          </Link>



        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
