import React, { useState } from 'react';

function LoanStatusDisplay() {
  const [loanHistory, setLoanHistory] = useState([
    { id: '1', amount: 5000, status: 'paid', amountpaid: 5000, overdue: false, penalties: 0, remainingBalance: 0 },
    { id: '2', amount: 7000, status: 'paid', amountpaid: 5000, overdue: false, penalties: 0, remainingBalance: 0 },
    { id: '3', amount: 3000, status: 'pending', amountpaid: 3500, overdue: false, penalties: 0, remainingBalance: 150 },
    { id: '4', amount: 3420, status: 'pending', amountpaid: 3380, overdue: true, penalties: 80, remainingBalance: 80 },
    { id: '5', amount: 2000, status: 'In-progress', amountpaid: 0, overdue: false, penalties: 0, remainingBalance: 2000 },
  ]);

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-800">Additional Information:</h3>

      {/* Filter for current loans (pending or in-application) */}
      {loanHistory
        .filter(loan => loan.status === 'pending' || loan.status === 'in-application')
        .map((loan, index) => (
          <div key={loan.id} className="mt-4">
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center">
              {/* Circle color based on status */}
              <div
                className={`absolute w-full h-full rounded-full ${
                  loan.status === 'pending'
                    ? 'bg-yellow-400'
                    : loan.status === 'In-progress'
                    ? 'bg-blue-400'
                    : 'bg-green-400'
                }`}
              />

              {/* Display paid amount and total amount */}
              <div className="text-sm font-medium text-gray-800">
                {loan.amountpaid}/{loan.amount}
              </div>

              {/* Display remaining balance in the middle */}
              <div className="absolute bottom-4 text-xs font-medium text-gray-800">
                {loan.remainingBalance}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default LoanStatusDisplay;