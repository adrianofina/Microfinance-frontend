'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/button";
import { Loader2 } from 'lucide-react';
import { applyForLoan, getLoggedInUser } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';

const LoanApplicationPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    duration: '', // Example additional field
    employmentStatus: '', // Example additional field
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = await getLoggedInUser();
      setUser(loggedInUser);
    };

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      if (user) {
        await handleLoanApplication(user.id, formData);
      } else {
        setMessage("User not found. Please log in.");
      }
    } catch (error) {
      console.log(error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoanApplication = async (userId: string, loanData: any) => {
    try {
      await applyForLoan(userId, loanData);
      setMessage("Loan application submitted successfully!");
      router.push('/'); // Redirect to home page
    } catch (error) {
      console.log(error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  'use client'; // Move the directive here

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Apply for a Loan</h2>
        {message && (
          <p className="mb-4 text-center text-red-600">{message}</p>
        )}
        {isLoading ? (
          <div className="flex justify-center">
            <Loader2 size={20} className="animate-spin" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
                Loan Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the amount"
              />
            </div>
            <div>
              <label htmlFor="purpose" className="block text-gray-700 text-sm font-bold mb-2">
                Purpose:
              </label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the purpose"
              />
            </div>
            <div>
              <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">
                Loan Duration (months):
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter duration in months"
              />
            </div>
            <div>
              <label htmlFor="employmentStatus" className="block text-gray-700 text-sm font-bold mb-2">
                Employment Status:
              </label>
              <input
                type="text"
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter employment status"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => router.push('/home')}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium"
              >
                Back to Home
              </button>
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Apply for Loan
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoanApplicationPage;