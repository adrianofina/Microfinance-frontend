'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/sidebar';
import Header from '../../../components/header';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchButton.module.css';
import LoansTable from '../../../components/LoansTable'; 
import AddCustomerForm from '@/components/newcustomer';

const LoanOfficerPage: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // const handleAddCustomerClick = () => {
  //   router.push('/loan-officer/newcustomer'); // Update this path to the correct route for your AddCustomerPage
  // };

  // Sample customer data (replace with your actual data fetching logic)
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Laurent Adriano',
      loanHistory: [
        {
          id: 1,
          amount: 15000,
          interestRate: 6,
          status: 'paid',
          overdue: false,
          date: '2023-04-10'
        }
      ],
      application: {
        status: 'Pending'
      },
      credentials: {
        firstName: 'Laurent',
        surname: 'Adriano',
        phoneNumber: '+255784461743',
        email: 'adriandevelopment@gmail.com',
        dateOfBirth: '1969-02-14',
        address: 'Business Street, Mwanza',
        gender: 'Male',
        occupation: 'Business Man',
        maritalStatus: 'Married'
      }
    },
    {
      id: 2,
      name: 'John Doe',
      loanHistory: [
        {
          id: 1,
          amount: 10000,
          interestRate: 5,
          status: 'paid',
          overdue: false,
          date: '2023-01-15'
        },
        {
          id: 2,
          amount: 5000,
          interestRate: 3,
          status: 'pending',
          overdue: false,
          date: '2023-03-20'
        }
      ],
      application: {
        status: 'Pending'
      },
      credentials: {
        firstName: 'John',
        surname: 'Doe',
        phoneNumber: '123-456-7890',
        email: 'john.doe@example.com',
        dateOfBirth: '1990-01-01',
        address: '123 Main Street',
        gender: 'Male',
        occupation: 'Software Engineer',
        maritalStatus: 'Married'
      }
    },
    {
      id: 3,
      name: 'Jane Smith',
      loanHistory: [
        {
          id: 1,
          amount: 20000,
          interestRate: 4,
          status: 'in-application',
          overdue: false,
          date: '2023-02-10'
        }
      ],
      application: {
        status: 'Pending'
      },
      credentials: {
        firstName: 'Jane',
        surname: 'Smith',
        phoneNumber: '456-789-0123',
        email: 'jane.smith@example.com',
        dateOfBirth: '1985-05-15',
        address: '456 Oak Avenue',
        gender: 'Female',
        occupation: 'Teacher',
        maritalStatus: 'Single'
      }
    },
    {
      id: 4,
      name: 'Peter Jones',
      loanHistory: [
        {
          id: 1,
          amount: 8000,
          interestRate: 2,
          status: 'pending',
          overdue: false,
          date: '2023-05-05'
        }
      ],
      application: {
        status: 'Pending'
      },
      credentials: {
        firstName: 'Peter',
        surname: 'Jones',
        phoneNumber: '789-012-3456',
        email: 'peter.jones@example.com',
        dateOfBirth: '1980-10-28',
        address: '789 Pine Street',
        gender: 'Male',
        occupation: 'Doctor',
        maritalStatus: 'Divorced'
      }
    },
    {
      id: 5,
      name: 'Emily Brown',
      loanHistory: [
        {
          id: 1,
          amount: 12000,
          interestRate: 4,
          status: 'paid',
          overdue: false,
          date: '2023-03-15'
        }
      ],
      application: {
        status: 'Pending'
      },
      credentials: {
        firstName: 'Emily',
        surname: 'Brown',
        phoneNumber: '012-345-6789',
        email: 'emily.brown@example.com',
        dateOfBirth: '1992-07-22',
        address: '123 Maple Avenue',
        gender: 'Female',
        occupation: 'Lawyer',
        maritalStatus: 'Single'
      }
    }
  ]);

  // Fetch customer data (replace with your actual data fetching logic)
  // useEffect(() => {
  //   setIsLoading(true);
  //   // Replace this with your actual data fetching logic
  //   fetch('/api/customers') // Replace with your API endpoint
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCustomers(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching customers:', error);
  //       setIsLoading(false);
  //     });
  // }, []);

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
              {customers.map((customer) => (
                <li
                  key={customer.id}
                  className="cursor-pointer hover:bg-gray-100 p-2 rounded transition duration-300 ease-in-out"
                  onClick={() => handleCustomerSelect(customer)}
                >
                  {customer.name}
                </li>
              ))}
            </ol>
            <br />


            <div className="flex gap-4">
              <Button
              className='bg-green-300 hover:bg-green-600 rounded'
              onClick={() => router.push('/newcustomer')}
              > Add New Customer
              </Button>

              <Button
                onClick={() => router.push('/home')}
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
              <br />
              <div className="mb-6">
      <h3 className="font-bold text-lg">Loan History</h3>
      {/* Wrap the LoansTable in a div with a fixed height and overflow-y: auto */}
      <div className="max-h-82 overflow-y-auto"> {/* Adjust the height as needed */}
        <LoansTable loanHistory={selectedCustomer.loanHistory} />
      </div>
    </div>

              {selectedCustomer.application.status === 'Pending' && (
                <div className="flex space-x-8 mb-4">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanOfficerPage;