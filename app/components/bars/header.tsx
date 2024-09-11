'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const headerLinks = [
  { label: 'Adriano', route: '/adrian-chat' },
  { label: 'Loan Officer', route: '/loan-officer' },
  { label: 'About us', route: '/about-us' },
  { label: 'Home', route: '/home' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between w-full bg-gray-200 p-4 h-16 shadow-md">
      <div className="flex items-center">
        {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className="focus:outline-none mr-4"
          aria-label="Toggle sidebar"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-200 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out w-48 z-50`}
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
              {headerLinks.map((link) => (
                <Link
                  href={link.route}
                  key={link.label}
                  className="block py-2 px-4 text-black hover:bg-gray-300 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Sign Out Link */}
            <div className="absolute bottom-4 left-4 w-full px-4">
              <Link
                href="/sign-out"
                className="flex items-center gap-2 text-black hover:bg-gray-300 p-2 rounded-md text-sm"
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
      </div>

      {/* Header Title */}
      <div className="text-right flex-grow">
        <h2 className="text-lg font-semibold text-black">Adrian CIMS</h2>
      </div>
    </header>
  );
};

export default Header;
