import React from 'react';
import Sidebar from './navbar'; // Adjust import path as needed

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen"> {/* Use flex-col for vertical layout */}
      <main className="flex-1 p-4"> {/* Main content takes up remaining space */}
        {children}
      </main>
    </div>
  );
};

export default PageLayout;