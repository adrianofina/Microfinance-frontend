import React from 'react';
import Sidebar from '../../components/bars/sidebar';

const AdminPage: React.FC = () => {
  return (
    <div className="home">
      <Sidebar />
      <br />
      <br />
      <div className="flex-1 mb-4 p-24">
        <div className="home-content">
          <h1 className="header-2">Admin Page</h1>
          <p>Manage customer and loan data here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
