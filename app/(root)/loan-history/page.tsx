'use client';

import { useState, useEffect } from 'react';
import { getLoanHistory, getLoggedInUser } from '@/lib/actions/user.actions';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoanHistoryPage = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loanHistory, setLoanHistory] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      // Simulating fetching user data
      const loggedInUser = { id: '1', name: 'Laurent Adriano' }; // For demo purposes
      setUser(loggedInUser);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchLoanHistory();
    }
  }, [user]);

  const fetchLoanHistory = async () => {
    setIsLoading(true);

    // Simulating loan history data
    const history = [
      { id: '1', amount: 5000, status: 'paid', amountpaid: 5000, overdue: false, penalties: 0, remainingBalance: 0 },
      { id: '2', amount: 7000, status: 'paid', amountpaid: 5000, overdue: false, penalties: 0, remainingBalance: 0 },
      { id: '3', amount: 3000, status: 'pending', amountpaid: 3500, overdue: false, penalties: 0, remainingBalance: 150 },
      { id: '4', amount: 3420, status: 'pending', amountpaid: 3380, overdue: true, penalties: 80, remainingBalance: 80 },
      { id: '5', amount: 2000, status: 'in-application', amountpaid: 0, overdue: false, penalties: 0, remainingBalance: 2000 },
    ];
    setLoanHistory(history);

    setIsLoading(false);
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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Loan History</h2>
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
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount Paid
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Overdue
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Penalties
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remaining Balance
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
                      <div className="text-sm text-gray-900">${loan.amount.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{loan.status}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${loan.amountpaid.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{loan.overdue ? 'Yes' : 'No'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${loan.penalties.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${loan.remainingBalance.toFixed(2)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      <button 
        onClick={handleHomeClick} 
        className="text-sm text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
        Home
      </button>
    </div>
  );
};

export default LoanHistoryPage;