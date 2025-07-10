'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#2a2a40] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className=" text-xl font-bold text-indigo-600 ">Teacher Management System</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-800 dark:text-white hover:underline">Dashboard</Link>
          <Link href="/teachers" className="text-gray-800 dark:text-white hover:underline">All Teachers</Link>
          <Link href="/teachers/add" className="text-gray-800 dark:text-white hover:underline">Add Teacher</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800 dark:text-white">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white dark:bg-[#2a2a40]">
          <Link href="/" className="text-gray-800 dark:text-white hover:underline">Dashboard</Link>
          <Link href="/teachers" className="text-gray-800 dark:text-white hover:underline">All Teachers</Link>
          <Link href="/teachers/add" className="text-gray-800 dark:text-white hover:underline">Add Teacher</Link>
        </div>
      )}
    </nav>
    
  );
};

export default Navbar;
