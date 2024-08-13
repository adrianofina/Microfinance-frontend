import React from 'react';
import Link from 'next/link';

const sidebarLinks = [
  { label: 'Home', route: '/home' },
  { label: 'Loan Officer', route: '/loan-officer' },
  { label: 'Customer', route: '/customer' },
  { label: 'Admin', route: '/admin' },
  { label: 'Chat', route: '/chat' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Adrian CIMS</h2>
      <nav className="mt-8">
        {sidebarLinks.map((link) => (
          <Link href={link.route} key={link.label}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
