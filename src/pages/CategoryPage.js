import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);

  // Fungsi untuk memuat kategori dari API
  const fetchCategories = async () => {
    setLoading(true); // Set loading true saat memuat kategori
    try {
      const response = await axios.get('http://localhost:4000/categories');
      setCategories(response.data);
    } catch (error) {
      setError('Gagal memuat kategori');
    } finally {
      setLoading(false); // Set loading false setelah selesai memuat
    }
  };

  useEffect(() => {
    fetchCategories(); // Memanggil fungsi untuk memuat kategori saat komponen pertama kali dimuat
  }, []);

  const handleAddOrUpdateCategory = async (category) => {
    try {
      if (category.id) {
        await axios.put(`http://localhost:4000/categories/${category.id}`, category);
      } else {
        await axios.post('http://localhost:4000/categories', category);
      }
      fetchCategories(); // Panggil fungsi untuk memuat kategori setelah berhasil menambah atau memperbarui
      setEditingCategory(null); // Reset editingCategory setelah selesai
    } catch (error) {
      console.error('Error updating/creating category:', error);
      setError('Gagal menyimpan kategori'); // Set error jika terjadi kesalahan
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/categories/${id}`);
      setCategories(categories.filter(cat => cat.id !== id)); // Hapus kategori dari state lokal
    } catch (error) {
      setError('Gagal menghapus kategori'); // Set error jika terjadi kesalahan
    }
  };

  const handleUpdateCategory = (category) => {
    setEditingCategory(category); // Set kategori yang akan diedit
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manajemen Kategori</h1>
      <CategoryForm onSubmit={handleAddOrUpdateCategory} initialData={editingCategory} />
      <CategoryList categories={categories} onDelete={handleDeleteCategory} onUpdate={handleUpdateCategory} />
    </div>
  );
};

export default CategoryPage;
