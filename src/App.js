import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<h2>Selamat datang di Admin Dashboard</h2>} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
