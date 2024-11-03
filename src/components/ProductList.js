import React from 'react';

const ProductList = ({ products, onDelete }) => {
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
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.description}</td>
              <td className="border border-gray-300 p-2">{product.price}</td>
              <td className="border border-gray-300 p-2">{product.stock}</td>
              <td className="border border-gray-300 p-2">
                <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white p-1 rounded">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
