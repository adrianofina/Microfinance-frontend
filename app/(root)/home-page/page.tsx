import React from 'react';
import Sidebar from '../../../components/sidebar';
import Navbar from '../../../components/navbar';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="home-content">
          <h1 className="header-2">Home</h1>
          <p>Welcome to Adrian Customer Information Management System.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
