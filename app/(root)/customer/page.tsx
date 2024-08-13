'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../../../components/sidebar';
import Navbar from '../../../components/navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
// import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';
import { getLoggedInUser, applyForLoan, getLoanHistory } from '@/lib/actions/user.actions';

const CustomerPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSection, setCurrentSection] = useState('credentials');
  const [loanHistory, setLoanHistory] = useState<any[]>([]);
  
  // const formSchema = authFormSchema('update-info'); // Use appropriate schema for additional information
  
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     firstName: '',
  //     lastName: '',
  //     address1: '',
  //     city: '',
  //     state: '',
  //     postalCode: '',
  //     dateOfBirth: '',
  //     ssn: '',
  //     email: '',
  //     phoneNumber: '',  // Example of additional fields
  //   },
  // });

  useEffect(() => {
    // Fetch logged-in user data
    const fetchUser = async () => {
      const loggedInUser = await getLoggedInUser();
      setUser(loggedInUser);
    };

    fetchUser();
  }, []);

  // const onSubmit = async (data: z.infer<typeof formSchema>) => {
  //   setIsLoading(true);

    // try {
    //   // Update user information
    //   const updatedUser = await updateUserInfo(data); // Ensure updateUserInfo function is defined
    //   setUser(updatedUser);

      // Optionally, redirect or handle UI updates
  //     setCurrentSection('loan-application');
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleLoanApplication = async (loanData: any) => {
    setIsLoading(true);

    try {
      await applyForLoan(loanData);
      // Optionally, handle UI updates or redirect
      setCurrentSection('loan-history');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLoanHistory = async () => {
    setIsLoading(true);

    try {
      const history = await getLoanHistory(user.id);
      setLoanHistory(history);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="customer-page">
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Adrian logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Adrian Microfinance</h1>
        </Link>
      </header>

      <nav className="navigation">
        <Button onClick={() => setCurrentSection('credentials')} className="nav-btn">Update Credentials</Button>
        <Button onClick={() => setCurrentSection('loan-application')} className="nav-btn">Apply for a Loan</Button>
        <Button onClick={() => { setCurrentSection('loan-history'); fetchLoanHistory(); }} className="nav-btn">View Loan History</Button>
      </nav>

      {currentSection === 'credentials' && (
        <div className="credentials-section">
          <h2>Update Your Information</h2>
          {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-4">
                <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your last name' />
              </div>
              <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your address' />
              <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city' />
              <div className="flex gap-4">
                <CustomInput control={form.control} name='state' label="State" placeholder='Enter your state' />
                <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Enter your postal code' />
              </div>
              <div className="flex gap-4">
                <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Enter your SSN' />
              </div>
              <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
              <CustomInput control={form.control} name='phoneNumber' label="Phone Number" placeholder='Enter your phone number' />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : 'Update Info'}
                </Button>
              </div>
            </form>
          </Form> */}
        </div>
      )}

      {currentSection === 'loan-application' && (
        <div className="loan-application-section">
          <h2>Apply for a Loan</h2>
          {/* Add your loan application form or component here */}
          {/* Example: <LoanApplicationForm onSubmit={handleLoanApplication} /> */}
        </div>
      )}

      {currentSection === 'loan-history' && (
        <div className="loan-history-section">
          <h2>Your Loan History</h2>
          {isLoading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <div>
              {loanHistory.length === 0 ? (
                <p>No loan history available.</p>
              ) : (
                <table className="loan-history-table">
                  <thead>
                    <tr>
                      <th>Loan ID</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Overdue</th>
                      <th>Penalties</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loanHistory.map((loan) => (
                      <tr key={loan.id}>
                        <td>{loan.id}</td>
                        <td>{loan.amount}</td>
                        <td>{loan.status}</td>
                        <td>{loan.overdue ? 'Yes' : 'No'}</td>
                        <td>{loan.penalties}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                // import HeaderBox from '@/components/headerbox'
// import { Pagination } from '@/components/pagination';
// import LoansTable from '@/components/loanstable';
// import { getLoanAccount, getLoanAccounts } from '@/lib/actions/loan.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';
// import { formatAmount } from '@/lib/utils';



// import React from 'react'

// const page = () => {
//   return (
//     <div className="loans">
//     <div className="loans-header">
//       <HeaderBox 
//         title="Loan History"
//         subtext="View your loan details and history."
//       />
//     </div>

//     <div className="space-y-6">
//       <div className="loans-account">
//         <div className="flex flex-col gap-2">
//           <h2 className="text-18 font-bold text-white">{account?.data.name}</h2>
//           <p className="text-14 text-blue-25">
//             {account?.data.officialName}
//           </p>
//           <p className="text-14 font-semibold tracking-[1.1px] text-white">
//             Loan ID: {account?.data.loanId}
//           </p>
//         </div>
        
//         <div className='loans-account-balance'>
//           <p className="text-14">Outstanding Balance</p>
//           <p className="text-24 text-center font-bold">{formatAmount(account?.data.outstandingBalance)}</p>
//         </div>
//       </div>

//       <section className="flex w-full flex-col gap-6">
//         <LoansTable 
//           loans={currentLoans}
//         />
//           {totalPages > 1 && (
//             <div className="my-4 w-full">
//               <Pagination totalPages={totalPages} page={currentPage} />
//             </div>
//           )}
//       </section>
//     </div>
//   </div>  )
// }
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
export default CustomerPage;