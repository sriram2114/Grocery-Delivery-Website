import React from "react";

const ProductCard = ({ product, addToCart }) => (
  <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
    <p className="text-gray-600">₹{product.price}</p>
    <p className="text-sm text-gray-500">{product.category}</p>
    <button
      onClick={() => addToCart(product)}
      className="bg-green-600 text-white px-3 py-1 mt-2 rounded hover:bg-green-700">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
