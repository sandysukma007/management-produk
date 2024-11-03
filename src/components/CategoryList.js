import React from 'react';

const CategoryList = ({ categories, onDelete, onUpdate }) => {
  const handleEdit = (category) => {
    onUpdate(category);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">Daftar Kategori</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Nama</th>
            <th className="border border-gray-300 p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {categories.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center border border-gray-300 p-2">Tidak ada kategori</td>
            </tr>
          ) : (
            categories.map((category) => (
              <tr key={category.id}>
                <td className="border border-gray-300 p-2">{category.name}</td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => handleEdit(category)} className="bg-yellow-500 text-white p-1 rounded mr-2">Edit</button>
                  <button onClick={() => onDelete(category.id)} className="bg-red-500 text-white p-1 rounded">Hapus</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
