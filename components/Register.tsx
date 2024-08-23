'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import { signIn, useSession } from "next-auth/react";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // API call to register a new user
    try {
      const response = await axios.post('/api/users', {
        fullName,
        email,
        password,
      });

      // Successful registration
      if (response.status === 201) {
        setErrorMessage(''); // Clear error message
        router.push('/home'); // Redirect to the landing page
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  const handleGoogleSubmit = async () => {
    try {
      const response = await signIn('google',{ redirect: false });
  
      if (response?.status == 200) {
        router.push('/home');
      } else {
        console.log('Google sign-in successful');
      }
    } catch (error) {
      console.error('An error occurred during Google sign-in:', error);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <div className="relative w-full max-w-sm sm:max-w-md p-14 bg-white bg-opacity-25 backdrop-blur-md rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-purple-400 via-blue-300 to-green-500 rounded-full">
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
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {errorMessage && (
            <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
          )}
          <div>
            <label className="block text-gray-700" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-white bg-opacity-25 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
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
          <div>
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-white bg-opacity-25 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-white bg-opacity-25 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-gradient-to-r from-purple-500 to-green-500 rounded-full shadow-md hover:bg-gradient-to-l"
          >
            SIGN UP
          </button>
        </form>
        <div className="flex flex-col items-center mt-6">
          <p className="text-sm text-gray-700">OR</p>
          <button
            onClick={handleGoogleSubmit}
            type="button"
            className="mt-2 w-full py-2 text-gray-700 bg-white border border-gray-300 rounded-full shadow-md flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5zm0 7l7-4-7-4-7 4 7 4z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-700">
            Already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
