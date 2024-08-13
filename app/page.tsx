import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Adrian CIMS</h1>
        <p className="text-lg">
          Manage your customer information and loans efficiently with Adrian Customer Information Management System.
        </p>
      </header>
      
      <div className="flex flex-col gap-4 mt-8">
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>
        <a href="/sign-up" className="text-blue-600 hover:underline">
          Sign Up
        </a>
      </div>
      
      <footer className="mt-auto p-4">
        <p className="text-sm text-gray-600">© 2024 Adrian CIMS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
