import React from 'react';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <div className="relative w-full max-w-sm sm:max-w-md p-14 bg-white bg-opacity-25 backdrop-blur-md rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button className="text-xl text-gray-600 hover:text-gray-800">&times;</button>
        </div>
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
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sign Up</h2>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
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
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-white bg-opacity-25 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            </div>
             <div>
            <label className="block text-gray-700" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-white bg-opacity-25 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-gradient-to-r from-purple-500 to-red-500 rounded-md shadow-md hover:bg-gradient-to-l"
          >
            SIGN UP
          </button>
        </form>
        <div className="flex flex-col items-center mt-6">
          <p className="text-sm text-gray-700">OR</p>
          <button
            type="button"
            className="mt-2 w-full py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-md flex items-center justify-center gap-2 hover:bg-gray-100"
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

export default SignUpPage;
