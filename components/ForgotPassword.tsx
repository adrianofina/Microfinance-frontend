'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic email validation
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Implement your forgot password logic here (e.g., API call to send reset link)
    // For demonstration, we'll simulate successful email sending and redirect
    console.log('Sending password reset email to:', email);

    // Replace this with your actual forgot password logic
    const emailSent = true; // Assuming successful email sending for now

    if (emailSent) {
      setErrorMessage(''); // Clear error message
      router.push('/password-reset-success'); // Redirect to a success page
    } else {
      setErrorMessage('Failed to send password reset email.');
    }
  };

  const validateEmail = (email: string) => {
    // Simple email validation (you might want to use a more robust regex)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <div className="relative w-full max-w-sm sm:max-w-md p-14 bg-white bg-opacity-25 backdrop-blur-md rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5zm0 7l7-4-7-4-7 4 7 4z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Forgot Password</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {errorMessage && (
            <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
          )}
          <div>
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-white bg-opacity-25 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-gradient-to-r from-green-500 to-purple-500 rounded-full shadow-md hover:bg-gradient-to-l"
          >
            Send Reset Link
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-700">
            Remember your password?{' '}
            <a href="/login" className="text-purple-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;