// pages/settings.tsx
"use client";
import React, { useState, useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../../context/usercontext'; // Adjust path if needed
import Sidebar from '@/app/components/bars/sidebar';

interface User {
  id: string;
  email: string;
  password?: string;
  theme?: string;
  name?: string; // Add name property to User interface
  // ... other user properties
}

const SettingsPage: React.FC = () => {
  const { user, updateUser } = useContext(UserContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [theme, setTheme] = useState(user?.theme || 'light');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [userName, setUserName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const profileEditRef = useRef<HTMLDivElement>(null);
  const passwordChangeRef = useRef<HTMLDivElement>(null);

  // Handle dark/light theme switch and persist the theme in localStorage
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    updateUser({ ...user, theme: newTheme });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const handlePasswordChange = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('/api/users/update-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.id, currentPassword, newPassword }),
      });

      if (response.ok) {
        setSuccessMessage('Password changed successfully.');
      } else {
        setErrorMessage('Password change failed.');
      }
    } catch (error) {
      setErrorMessage('An error occurred.');
    }
  };

  const handleProfileUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/users/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.id, name: userName, email }),
      });

      if (response.ok) {
        updateUser({ ...user, name: userName, email });
        setSuccessMessage('Profile updated successfully.');
      } else {
        setErrorMessage('Profile update failed.');
      }
    } catch (error) {
      setErrorMessage('An error occurred.');
    }
  };

  const handleMouseOverProfile = () => {
    setShowProfileEdit(true);
  };

  const handleMouseOutProfile = () => {
    setShowProfileEdit(false);
  };

  useEffect(() => {
    if (profileEditRef.current) {
      profileEditRef.current.addEventListener('mouseover', handleMouseOverProfile);
      profileEditRef.current.addEventListener('mouseout', handleMouseOutProfile);
    }

    return () => {
      if (profileEditRef.current) {
        profileEditRef.current.removeEventListener('mouseover', handleMouseOverProfile);
        profileEditRef.current.removeEventListener('mouseout', handleMouseOutProfile);
      }
    };
  }, []);

  return (
    <>
      <Sidebar />
      <br />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>

        {/* Theme Section */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2">
            Theme
          </label>
          <button
            onClick={handleThemeChange}
            className="bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        {/* Profile Update Section */}
        <div ref={profileEditRef} className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2">User Profile</label>
          {showProfileEdit ? (
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-all">
                Update Profile
              </button>
            </form>
          ) : (
            <div className="space-y-2">
              <p>Name: {user?.name}</p>
              <p>Email: {user?.email}</p>
              <button
                onClick={() => setShowProfileEdit(true)}
                className="text-blue-500 hover:underline"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>

     
    {/* Password Change Section */}
    <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 font-bold mb-4">Manage Password</label>
        <form onSubmit={handlePasswordChange} className="space-y-4 px-8">
            <div>
                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-all">
                Change Password
            </button>
        </form>
    </div>


        {/* Display success or error message */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </div>
    </>
  );
};

export default SettingsPage;