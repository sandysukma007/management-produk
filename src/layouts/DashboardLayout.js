import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import icons from Heroicons v2

const DashboardLayout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex">
      <nav className="w-64 h-screen bg-gray-800 text-white">
        <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 relative">
            {/* Toggler for dropdown */}
            <div
              onClick={toggleDropdown}
              className="cursor-pointer flex items-center justify-between"
            >
              Produk
              {isDropdownOpen ? (
                <ChevronUpIcon className="h-5 w-5 ml-2" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 ml-2" />
              )}
            </div>
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 top-full bg-gray-700 text-white w-full mt-2">
                <li className="p-4 hover:bg-gray-600">
                  <Link to="/products">List Produk</Link>
                </li>
                <li className="p-4 hover:bg-gray-600">
                  <Link to="/products/add">Tambah Produk</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
