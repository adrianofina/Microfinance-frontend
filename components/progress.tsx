import React from "react";

interface ProgressProps {
  value: number; // value between 0 and 100
  label: string;
}

const Progress: React.FC<ProgressProps> = ({ value, label }) => {
  return (
    <div className="w-full p-4">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium text-gray-700">{label}</span>
        <span className="text-lg font-medium text-gray-700">{value}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

const LoanProgress = () => {
  const loanApplicationProgress = 60; // Example progress for loan application
  const loanPaymentProgress = 40; // Example progress for loan payment

  return (
    <div className="space-y-4">
      <Progress value={loanApplicationProgress} label="Loan Application Progress" />
      <Progress value={loanPaymentProgress} label="Loan Payment Progress" />
    </div>
  );
};

export default LoanProgress;
