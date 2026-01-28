import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const AdminPanel = () => {
  const { products, deleteProduct } = useContext(ProductContext);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Admin Panel</h2>
        <Link to="/admin/add" className="bg-green-600 text-white px-3 py-1 rounded">Add Product</Link>
      </div>

      {products.map((p) => (
        <div key={p.id} className="flex justify-between items-center border-b py-2">
          <span>{p.name} - ₹{p.price}</span>
          <div className="flex gap-2">
            <Link to={`/admin/edit/${p.id}`} className="text-blue-600 hover:underline">Edit</Link>
            <button onClick={() => deleteProduct(p.id)} className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
