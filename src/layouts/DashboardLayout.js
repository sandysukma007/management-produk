import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import icons from Heroicons v2

const DashboardLayout = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(null); // State untuk menyimpan dropdown yang terbuka
  const [dropdownHeight, setDropdownHeight] = useState(0); // State untuk menyimpan tinggi dropdown yang terbuka

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
      setDropdownHeight(0); // Reset tinggi dropdown saat menutup
    } else {
      setOpenDropdown(dropdown);
      // Atur tinggi dropdown yang terbuka
      if (dropdown === 'products') {
        setDropdownHeight(80); // Contoh tinggi dropdown untuk Produk
      } else {
        setDropdownHeight(40); // Contoh tinggi dropdown untuk Kategori
      }
    }
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
            <div
              onClick={() => toggleDropdown('products')}
              className="cursor-pointer flex items-center justify-between"
            >
              Produk
              {openDropdown === 'products' ? (
                <ChevronUpIcon className="h-5 w-5 ml-2" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 ml-2" />
              )}
            </div>
            {openDropdown === 'products' && (
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
          <li className="p-4 hover:bg-gray-700 relative">
            <div
              onClick={() => toggleDropdown('categories')}
              className="cursor-pointer flex items-center justify-between"
            >
              Kategori
              {openDropdown === 'categories' ? (
                <ChevronUpIcon className="h-5 w-5 ml-2" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 ml-2" />
              )}
            </div>
            {openDropdown === 'categories' && (
              <ul className="absolute left-0 top-full bg-gray-700 text-white w-full mt-2">
                <li className="p-4 hover:bg-gray-600">
                  <Link to="/categories">List Kategori</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6 bg-gray-100" style={{ paddingTop: `${dropdownHeight}px` }}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
