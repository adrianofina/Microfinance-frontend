import React from 'react';

const LoanTable = () => {
  const getStatusColor = (status, overdue) => {
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

  const loanHistory = [
    { id: '1 ', amount: 5000000, status: 'paid', amountpaid: 5000000, overdue: false, penalties: 0, remainingBalance: 0 },
    { id: '2', amount: 700000, status: 'paid', amountpaid: 500000, overdue: false, penalties: 0, remainingBalance: 200000 },
    { id: '3', amount: 3420000, status: 'pending', amountpaid: 3380000, overdue: true, penalties: 80000, remainingBalance: 120000 },
    { id: '4', amount: 3000000, status: 'pending', amountpaid: 3500000, overdue: false, penalties: 0, remainingBalance: 150000 },
    { id: '5', amount: 2000000, status: 'In-progress', amountpaid: 0, overdue: false, penalties: 0, remainingBalance: 2000000 },
  ];

  return (
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
  );
};

export default LoanTable;