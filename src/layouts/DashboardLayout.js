import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <nav className="w-64 h-screen bg-gray-800 text-white">
        <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/products">Produk</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
