'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/sidebar';
import Header from '../../../components/header';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchButton.module.css';

// Sample customer data (can be replaced with actual data fetching)
const sampleCustomers = [
  {
    id: 1,
    name: 'Laurent Adriano',
    loanHistory: [
      { id: '1', amount: 5000000, status: 'paid', amountpaid: 5000000, overdue: false, penalties: 0, remainingBalance: 0 },
      { id: '2', amount: 700000, status: 'paid', amountpaid: 500000, overdue: false, penalties: 0, remainingBalance: 200000 },
      { id: '3', amount: 3000000, status: 'pending', amountpaid: 3500000, overdue: false, penalties: 0, remainingBalance: 150000 },
      { id: '4', amount: 3420000, status: 'pending', amountpaid: 3380000, overdue: true, penalties: 80000, remainingBalance: 80000 },
      { id: '5', amount: 2000000, status: 'in-application', amountpaid: 0, overdue: false, penalties: 0, remainingBalance: 2000000 },
    ],
    application: {
      loanAmount: 2000000,
      purpose: 'Home Improvement',
      status: 'Pending',
    },
    credentials: {
      firstName: 'Laurent',
      surname: 'Adriano',
      phoneNumber: '+255784461743',
      email: 'adriandevelopment@gmail.com',
      dateOfBirth: '14 Feb 1969',
      address: 'Business Street, Dar es Salaam',
      gender: 'Male',
      occupation: 'Business Man',
      maritalStatus: 'Married',
    },
  },
  // Sample Customer 2
  {
    id: 2,
    name: 'Maria Sanchez',
    loanHistory: [
      { amount: 1500000, status: 'Approved', date: '2023-09-12' },
    ],
    application: {
      loanAmount: 3000000,
      purpose: 'Education',
      status: 'Approved',
    },
    credentials: {
      firstName: 'Maria',
      surname: 'Sanchez',
      phoneNumber: '+15551234567',
      email: 'maria.sanchez@email.com',
      dateOfBirth: '05 Jul 1985',
      address: '123 Main Street, New York',
      gender: 'Female',
      occupation: 'Teacher',
      maritalStatus: 'Single',
    },
  },
  // Sample Customer 3
  {
    id: 3,
    name: 'John Doe',
    loanHistory: [
      { amount: 800000, status: 'Declined', date: '2023-10-01' },
      { amount: 1200000, status: 'Approved', date: '2023-11-20' },
    ],
    application: {
      loanAmount: 2500000,
      purpose: 'Car Purchase',
      status: 'Pending',
    },
    credentials: {
      firstName: 'John',
      surname: 'Doe',
      phoneNumber: '+18005551212',
      email: 'john.doe@example.com',
      dateOfBirth: '22 Dec 1990',
      address: '456 Oak Avenue, Los Angeles',
      gender: 'Male',
      occupation: 'Software Engineer',
      maritalStatus: 'Married',
    },
  },
  // Sample Customer 4
  {
    id: 4,
    name: 'Jane Smith',
    loanHistory: [],
    application: {
      loanAmount: 1000000,
      purpose: 'Medical Expenses',
      status: 'Declined',
    },
    credentials: {
      firstName: 'Jane',
      surname: 'Smith',
      phoneNumber: '+1112223333',
      email: 'jane.smith@email.com',
      dateOfBirth: '18 May 1978',
      address: '789 Pine Street, Chicago',
      gender: 'Female',
      occupation: 'Nurse',
      maritalStatus: 'Divorced',
    },
  },
  // Sample Customer 5
  {
    id: 5,
    name: 'David Lee',
    loanHistory: [
      { amount: 2000000, status: 'Approved', date: '2023-08-15' },
      { amount: 1500000, status: 'Approved', date: '2023-10-25' },
    ],
    application: {
      loanAmount: 4000000,
      purpose: 'Business Investment',
      status: 'Approved',
    },
    credentials: {
      firstName: 'David',
      surname: 'Lee',
      phoneNumber: '+14445556666',
      email: 'david.lee@company.com',
      dateOfBirth: '10 Sep 1982',
      address: '900 Elm Street, Dallas',
      gender: 'Male',
      occupation: 'Entrepreneur',
      maritalStatus: 'Married',
    },
  },
  // Add other customers here...
];

const LoanOfficerPage: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCustomerSelect = (customer: any) => {
    setSelectedCustomer(customer);
  };

  const handleApprove = () => {
    if (selectedCustomer) {
      alert('Loan Approved'); // Implement loan approval logic here
    }
  };

  const handleDecline = () => {
    if (selectedCustomer) {
      alert('Loan Declined'); // Implement loan decline logic here
    }
  };

  const getStatusColor = (status: string, overdue: boolean) => {
    if (overdue) return 'bg-red-200'; // Light red for overdue
    switch (status) {
      case 'paid':
        return 'bg-green-200'; // Light green for paid
      case 'pending':
        return 'bg-yellow-200'; // Light yellow for pending
      case 'in-application':
        return 'bg-gray-200'; // Light gray for in-application
      default:
        return 'bg-gray-100';
    }
  };

  const handleHomeClick = () => {
    router.push('/home'); // Adjust the path as needed
  };


  return (
    
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Loan Officer Page</h1>
            <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-8 rounded shadow-md">
  <h2 className="text-xl font-bold mb-4">Select a customer from the list.</h2>
  <ol className="list-decimal pl-8">
    {sampleCustomers.map((customer) => (
      <li
        key={customer.id}
        className="cursor-pointer hover:bg-gray-100 p-2 rounded transition duration-300 ease-in-out"
        onClick={() => handleCustomerSelect(customer)}
      >
        {customer.name}
      </li>
    ))}
  </ol>

  <div className="flex gap-4">
    <Button
      onClick={() => router.push('/newcustomer')}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add New Customer
    </Button>

    <Button
      onClick={() => router.push('/login')}
      className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
    >
      Search Customer
      {/* <input
        type="text"
        placeholder="Search customer"
        className={styles.searchInput}
      />
      <SearchIcon className={styles.searchIcon} /> */}
    </Button>
  </div>
</div>

          {selectedCustomer && (
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold mb-4">{selectedCustomer.name} Details</h2>

              <div className="mb-6">
                <h3 className="font-bold text-lg">Loan History</h3>
                {isLoading ? (
                  <div className="flex justify-center items-center py-4">
                    <Loader2 size={30} className="animate-spin" />
                  </div>
                ) : (
                  <div className="overflow-x-auto mt-2">
                    {selectedCustomer.loanHistory.length === 0 ? (
                      <p>No loan history available.</p>
                    ) : (
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Loan ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount (TZS)
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount Paid (TZS)
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Overdue
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Penalties (TZS)
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Remaining Balance (TZS)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {selectedCustomer.loanHistory.map((loan) => (
                            <tr key={loan.id} className={getStatusColor(loan.status, loan.overdue)}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{loan.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{loan.amount.toFixed(2)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{loan.status}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{loan.amountpaid.toFixed(2)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{loan.overdue ? 'Yes' : 'No'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{loan.penalties.toFixed(2)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{loan.remainingBalance.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}
              </div>

              {selectedCustomer.application.status === 'Pending' && (
                <div className="flex space-x-4">
                  <button
                    onClick={handleApprove}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Approve Loan
                  </button>
                  <button
                    onClick={handleDecline}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Decline Loan
                  </button>
                </div>
              )}

              <div className="mt-6">
                <h3 className="font-bold text-lg">Credentials</h3>
                <p><strong>First Name:</strong> {selectedCustomer.credentials.firstName}</p>
                <p><strong>Surname:</strong> {selectedCustomer.credentials.surname}</p>
                <p><strong>Phone Number:</strong> {selectedCustomer.credentials.phoneNumber}</p>
                <p><strong>Email:</strong> {selectedCustomer.credentials.email}</p>
                <p><strong>Date of Birth:</strong> {selectedCustomer.credentials.dateOfBirth}</p>
                <p><strong>Address:</strong> {selectedCustomer.credentials.address}</p>
                <p><strong>Gender:</strong> {selectedCustomer.credentials.gender}</p>
                <p><strong>Occupation:</strong> {selectedCustomer.credentials.occupation}</p>
                <p><strong>Marital Status:</strong> {selectedCustomer.credentials.maritalStatus}</p>
              </div>
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default LoanOfficerPage;