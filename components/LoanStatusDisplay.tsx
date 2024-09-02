import React, { useState } from 'react';

function LoanStatusDisplay() {
  const [loanHistory, setLoanHistory] = useState([
    { id: '1 ', amount: 5000000, status: 'Paid', amountpaid: 5000000, overdue: false, penalties: 0, remainingBalance: 0 },
    { id: '2', amount: 700000, status: 'Paid', amountpaid: 500000, overdue: false, penalties: 0, remainingBalance: 200000 },
    { id: '3', amount: 3420000, status: 'Overdue', amountpaid: 3380000, overdue: true, penalties: 80000, remainingBalance: 120000 },
    { id: '4', amount: 3000000, status: 'In-progress', amountpaid: 3500000, overdue: false, penalties: 0, remainingBalance: 150000 },
    { id: '5', amount: 2000000, status: 'In-application', amountpaid: 0, overdue: false, penalties: 0, remainingBalance: 0 },
  ]);

  // Sort loanHistory by status priority (overdue > progess > In-application > paid)
  const sortedLoanHistory = [...loanHistory].sort((a, b) => {
    const statusOrder = {
      'Overdue': 1,
      'In-progress': 2,
      'In-application': 3,
      'Paid': 4,
    };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  // Find the loan id with the highest priority status
  const highestPriorityLoan = sortedLoanHistory[0];

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-800">Loan Status: {highestPriorityLoan.status}</h3> 

   {/* Conditional rendering for different loan statuses */}
   <div className="mt-4">
        <div className="relative w-52 h-52 rounded-full flex items-center justify-center">
          {/* Outer Ring (colored) */}
          <div
            className={`absolute w-full h-full rounded-full ${
              highestPriorityLoan.status === 'Overdue' ? 'bg-red-500' :
              highestPriorityLoan.status === 'In-progress' ? 'bg-yellow-400' :
              highestPriorityLoan.status === 'In-application' ? 'bg-blue-200' :
              'bg-green-500' 
            } flex items-center justify-center`}
          />

            {/* Inner Circle (colored with page background) */}
            <div
              className={`absolute w-40 h-40 rounded-full flex items-center justify-center border-4 bg-gray-100`} 
            >
              {/* Display paid amount and total amount */}
              <div className="font-bold text-sm text-gray-800 mb-2"> 
              {highestPriorityLoan.amount} / {highestPriorityLoan.amountpaid} 
                <br />
                {/* paid/amount <br />  */}
              </div>

              {/* Display remaining balance in the middle */}
              <div className="absolute bottom-8 text-xs font-medium text-gray-800 mb-2">
             <span className="font-bold">Remaining Balance</span> 
            <br />
            <span 
              className={`font-bold absolute top-4 left-4 text-xs  mb-2 ${
                highestPriorityLoan.status === 'Overdue' ? 'text-red-700' : 
                highestPriorityLoan.status === 'In-progress' ? 'text-yellow-700' : 
                highestPriorityLoan.status === 'In-application' ? 'text-blue-700' : 
                'text-green-500' 
              }`}
            >
              {highestPriorityLoan.remainingBalance} TZS 
            </span> 
              </div>

          
            </div>
          </div>

          {/* Display overdue message if applicable */}
          {highestPriorityLoan.overdue && (
            <div className="mt-2 text-sm font-medium text-red-500">
            {/* Late payment fee applied: Your loan is now overdue. */}
            {/* <br /> */}
                   Penalty interest rate activated:
            <br /> Please settle your outstanding balance.
            </div>
          )}

        {/* Display status-specific messages for pending loan */}
        {highestPriorityLoan.status !== 'Paid' && !highestPriorityLoan.overdue && highestPriorityLoan.status !== 'In-application' && ( 
          <div className="mt-2 text-sm font-medium  text-yellow-500">
            Friendly reminder:
            <br />
            Pay by the 14th of this month to stay on track.
          </div>
        )}
          
         {/* Display a message for an In-application loan */}
         {highestPriorityLoan.status === 'In-application' && ( 
          <div className="mt-2 text-sm font-medium  text-blue-500">
            Your loan application is currently being processed.
            <br />
            We will notify you of the outcome shortly.
          </div>
        )}
          {/* Display a message for a fully paid loan */}
        {highestPriorityLoan.status === 'Paid' && ( // Correct condition
          <div className="mt-2 text-sm font-medium  text-green-500">
            Congratulations! 
            <br />
            You have paid your loan.
          </div>
        )}     
            
        </div>
      

    </div>
  );
}

export default LoanStatusDisplay;