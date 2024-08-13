import React from 'react';
import Sidebar from '../../../components/sidebar';
import Navbar from '../../../components/navbar';

const LoanOfficerPage: React.FC = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="home-content">
          <h1 className="header-2">Loan Officers Page</h1>
          <p>Add and approve customer credentials here.</p>
        </div>
      </div>
    </div>
  );
};

export default LoanOfficerPage;
