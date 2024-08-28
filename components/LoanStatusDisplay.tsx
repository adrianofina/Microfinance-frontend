import React, { useState } from 'react';

function LoanStatusDisplay() {
  const [loanHistory, setLoanHistory] = useState([
    { id: '1 ', amount: 5000000, status: 'Paid', amountpaid: 5000000, overdue: false, penalties: 0, remainingBalance: 0 },
    { id: '2', amount: 700000, status: 'Paid', amountpaid: 500000, overdue: false, penalties: 0, remainingBalance: 200000 },
    { id: '3', amount: 3420000, status: 'Overdue', amountpaid: 3380000, overdue: true, penalties: 80000, remainingBalance: 120000 },
    { id: '4', amount: 3000000, status: 'Pending', amountpaid: 3500000, overdue: false, penalties: 0, remainingBalance: 150000 },
    { id: '5', amount: 2000000, status: 'In-progress', amountpaid: 0, overdue: false, penalties: 0, remainingBalance: 2000000 },
  ]);

  // Sort loanHistory by status priority (overdue > pending > In-progress > paid)
  const sortedLoanHistory = [...loanHistory].sort((a, b) => {
    const statusOrder = {
      'Overdue': 1,
      'Pending': 2,
      'In-progress': 3,
      'Paid': 4,
    };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  // Find the loan id with the highest priority status
  const highestPriorityLoan = sortedLoanHistory[0];

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-800">Loan Status: {highestPriorityLoan.status}</h3> 

      {/* Display the circle only if there's a Overdue loan */}
      {highestPriorityLoan.status === 'Overdue' && (
        <div className="mt-4">
          <div className="relative w-48 h-48 rounded-full flex items-center justify-center">
            {/* Outer Ring (colored) */}
            <div
              className={`absolute w-full h-full rounded-full ${
                highestPriorityLoan.overdue ? 'bg-red-500' : 'bg-yellow-400'
              } flex items-center justify-center`}
            />

            {/* Inner Circle (colored with page background) */}
            <div
              className={`absolute w-40 h-40 rounded-full flex items-center justify-center border-4 bg-gray-100`} 
            >
              {/* Display paid amount and total amount */}
              <div className="text-sm font-medium text-gray-800 mb-2"> 
                {highestPriorityLoan.amountpaid}  / {highestPriorityLoan.amount} 
                <br />
                {/* paid/amount <br />  */}
              </div>

              {/* Display remaining balance in the middle */}
              <div className="absolute bottom-4 text-xs font-medium text-gray-800 mb-2">
              Remaining Balance       <br />
              {highestPriorityLoan.remainingBalance} TZS 
              </div>

              {/* Display status-specific messages for pending loan */}
              {!highestPriorityLoan.overdue && (
                <div className="absolute top-4 text-xs font-medium text-gray-600">
                Pending. Please remember to pay before the 14th of this month.
                </div>
              )}
            </div>
          </div>

          {/* Display overdue message if applicable */}
          {highestPriorityLoan.overdue && (
            <div className="mt-2 text-sm font-medium text-red-500">
              You are being penalized.
            </div>
          )}
        </div>
      )}

      {/* Display a message for a fully paid loan */}
      {highestPriorityLoan.status === 'Paid' && (
        <div className="mt-4">
          <div className="text-sm font-medium text-green-500">
            Congratulations! You have already paid your loan.
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanStatusDisplay;