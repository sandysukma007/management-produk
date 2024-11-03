import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';
import CategoryPage from './pages/CategoryPage'; // Import halaman kategori

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<h2>Selamat datang di Admin Dashboard</h2>} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/add" element={<AddProductPage />} />
          <Route path="/categories" element={<CategoryPage />} /> {/* Rute untuk kategori */}
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
