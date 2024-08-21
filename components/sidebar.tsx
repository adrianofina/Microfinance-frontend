'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const sidebarLinks = [
  { label: 'Adriano', route: '/adrian-chat' },
  { label: 'About us', route: '/about-us' },
  { label: 'Loan Officer', route: '/loan-officer' },
  { label: 'About us', route: '/about-us' },
  { label: 'Home', route: '/home' },
];

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#b8b8de] z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-42`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 bg-black text-white">
            <h2 className="text-lg">Adrian Dev</h2>
            <button
              onClick={toggleSidebar}
              className="focus:outline-none"
              aria-label="Close sidebar"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col mt-8 space-y-2 px-4">
            {sidebarLinks.map((link) => (
              <Link
                href={link.route}
                key={link.label}
                className="block py-2 px-4 text-black bg-[#b8b8de] hover:bg-[#9c9cdb] rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sign Out Link */}
          <div className="absolute bottom-4 left-4 w-full px-4">
            <Link
              href="/sign-out"
              className="flex items-center gap-2 text-black bg-[#b8b8de] hover:bg-[#9c9cdb] p-2 rounded-md text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                ></path>
              </svg>
              Sign out
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center w-full text-black bg-[#9c9cdb] hover:bg-[5ad6c8] p-4 shadow-md h-20">
        <button
          onClick={toggleSidebar}
          className="focus:outline-none"
          aria-label="Toggle sidebar"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
        <h2 className="text-lg font-semibold text-black ml-auto">Adrian CIMS</h2>
      </header>
      <br />
      <br />
     

      {/* Content */}
      <main className="flex-grow p-8 ml-16">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
