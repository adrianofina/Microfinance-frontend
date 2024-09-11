import React from 'react';
import Sidebar from '../../components/bars/sidebar';
import Navbar from '../../components/bars/navbar';

const AdminPage: React.FC = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="home-content">
          <h1 className="header-2">Admin Page</h1>
          <p>Manage customer and loan data here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
