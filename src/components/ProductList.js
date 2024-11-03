import React, { useState } from 'react';

const ProductList = ({ products, onDelete, onUpdate }) => {
    console.log('Products:', products);
    console.log('onDelete:', onDelete);
    console.log('onUpdate:', onUpdate);
  const [editingProductId, setEditingProductId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  const handleEdit = (product) => {
    setEditingProductId(product.id);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (productId) => {
    if (onUpdate) {
      onUpdate(productId, formData);
      setEditingProductId(null);
    } else {
      console.error('onUpdate is not defined');
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">Daftar Produk</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Nama</th>
            <th className="border border-gray-300 p-2">Deskripsi</th>
            <th className="border border-gray-300 p-2">Harga</th>
            <th className="border border-gray-300 p-2">Stok</th>
            <th className="border border-gray-300 p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center border border-gray-300 p-2">Tidak ada produk</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 p-2">
                  {editingProductId === product.id ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border p-2 w-full"
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editingProductId === product.id ? (
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="border p-2 w-full"
                    />
                  ) : (
                    product.description
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editingProductId === product.id ? (
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="border p-2 w-full"
                    />
                  ) : (
                    new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR'
                    }).format(product.price)
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editingProductId === product.id ? (
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      className="border p-2 w-full"
                    />
                  ) : (
                    product.stock
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editingProductId === product.id ? (
                    <>
                      <button
                        onClick={() => handleSave(product.id)}
                        className="bg-blue-500 text-white p-1 rounded mr-2"
                      >
                        Simpan
                      </button>
                      <button
                        onClick={() => setEditingProductId(null)}
                        className="bg-gray-500 text-white p-1 rounded"
                      >
                        Batal
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-yellow-500 text-white p-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(product.id)}
                        className="bg-red-500 text-white p-1 rounded"
                      >
                        Hapus
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
