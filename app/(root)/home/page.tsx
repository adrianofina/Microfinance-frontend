'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../../../components/sidebar';
import LoanProgress from '../../../components/progress';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/button";
import { Loader2 } from 'lucide-react';
// import { getLoggedInUser, applyForLoan, getLoanHistory } from '@/lib/actions/user.actions';

const HomePage = () => {
  const router = useRouter();
  // const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loanHistory, setLoanHistory] = useState<any[]>([]);
  const [showLoanHistory, setShowLoanHistory] = useState(false); // New state variable for loan history
  const backgroundRef = useRef(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const loggedInUser = await getLoggedInUser();
  //     setUser(loggedInUser);
  //   };

  //   fetchUser();
  // }, []);

  const handleLoanApplication = async (loanData: any) => {
    setIsLoading(true);

    try {
      // if (user) {
      //   await applyForLoan(user.id, loanData);
      //   router.push('/loan-history');
      // } else {
      //   console.error("User not found");
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLoanHistory = async () => {
    setIsLoading(true);

    try {
      // if (user) {
      //   const history = await getLoanHistory(user.id);
      //   setLoanHistory(history);
      // } else {
      //   console.error("User not found");
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLoanHistory = () => {
    setShowLoanHistory(!showLoanHistory);
  };

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const animation = background.animate(
      [
        { backgroundColor: 'hsl(0, 0%, 98%)' },
        { backgroundColor: 'hsl(0, 0%, 96%)' },
        { backgroundColor: 'hsl(0, 0%, 94%)' },
        { backgroundColor: 'hsl(0, 0%, 92%)' },
        { backgroundColor: 'hsl(0, 0%, 90%)' },
        { backgroundColor: 'hsl(0, 0%, 98%)' },
      ],
      {
        duration: 3000, // Animation duration (in milliseconds)
        iterations: Infinity, // Repeat infinitely
        easing: 'ease-in-out', // Smooth transition
      }
    );

    return () => animation.cancel(); // Clean up the animation on unmount
  }, []);

  return (
    <div className="flex h-screen w-screen" ref={backgroundRef}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-auto p-12">
        <div className='flex ml-auto items-center mb-6'>
          {/* <Link href="/" legacyBehavior>
            <a className="ml-auto ml-3">
              <Image 
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Adrian logo"
              />
            </a>
          </Link> */}
          <h1 className="text-2xl font-bold text-gray-800 ml-auto ml-2"></h1>
        </div>
        <br />

        {/* Welcome and Credentials Section */}
        <div className="welcome-section bg-gray-100 rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome User!</h2>
          <p className="mb-6 text-gray-700">
            Meet Adriano, Your trusted partner for financial solutions. We are here to help you achieve your financial goals.
          </p>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800">Your Credentials:</h3>
            <p className="text-gray-700">First Name: Laurent</p>
            <p className="text-gray-700">Surname: Adriano</p>
            <p className="text-gray-700">Phone Number: +255784461743</p>
            <p className="text-gray-700">Email: adriandevelopment@gmail.com</p>
            <p className="text-gray-700">Date of Birth: 14 Feb 1969</p>
            <p className="text-gray-700">Address: Business Street, Mwanza</p>
            <p className="text-gray-700">Gender: Male</p>
            <p className="text-gray-700">Occupation: Business Man</p>
            <p className="text-gray-700">Marital status: Married</p>
          </div>
          <div className="flex space-x-4">
            <Button
              onClick={() => router.push('/credentials')}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Credentials
            </Button>
            <Button
              onClick={() => router.push('/loan-application')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Apply for a Loan
            </Button>
            <Button
              onClick={toggleLoanHistory} 
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              {showLoanHistory ? 'Hide Loan History' : 'View Loan History'}
            </Button>
          </div>
          {/* Loan History Section (Conditional) */}
          {showLoanHistory && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-800">Your Loan History:</h3>
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <Loader2 size={30} className="animate-spin" />
                </div>
              ) : (
                <div className="overflow-x-auto mb-4">
                  {loanHistory.length === 0 ? (
                    <p>No loan history available.</p>
                  ) : (
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Loan ID
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount (TZS)
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount Paid (TZS)
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Overdue
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Penalties (TZS)
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Remaining Balance (TZS)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {loanHistory.map((loan) => (
                          <tr key={loan.id} className={getStatusColor(loan.status, loan.overdue)}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{loan.id}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{loan.amount.toFixed(2)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 capitalize">{loan.status}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{loan.amountpaid.toFixed(2)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{loan.overdue ? 'Yes' : 'No'}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{loan.penalties.toFixed(2)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{loan.remainingBalance.toFixed(2)}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;