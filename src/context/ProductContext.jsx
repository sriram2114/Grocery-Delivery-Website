import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 60, category: "Fruits", image: "/photos/download.jpeg" },
    { id: 2, name: "Banana", price: 20, category: "Fruits", image: "/photos/download (1).jpeg" },
    { id: 3, name: "Orange", price: 30, category: "Fruits", image: "/photos/download (2).jpeg" },
    { id: 4, name: "Grapes", price: 40, category: "Fruits", image: "/photos/download (3).jpeg" },
    { id: 5, name: "Tomato", price: 30, category: "Vegetables", image: "/photos/download (4).jpeg" },
    { id: 6, name: "Potato", price: 25, category: "Vegetables", image: "/photos/download (5).jpeg" },
    { id: 7, name: "Carrot", price: 20, category: "Vegetables", image: "/photos/download (6).jpeg" },
    { id: 8, name: "Spinach", price: 20, category: "Vegetables", image: "/photos/download (7).jpeg" },
    { id: 9, name: "Cabbage", price: 20, category: "Vegetables", image: "/photos/download (8).jpeg" },
    { id: 10, name: "Milk", price: 45, category: "Dairy", image: "/photos/download (9).jpeg" },
    { id: 11, name: "Cheese", price: 70, category: "Dairy", image: "/photos/download (10).jpeg" },
    { id: 12, name: "Butter", price: 65, category: "Dairy", image: "/photos/download (11).jpeg" },
    { id: 13, name: "Curd", price: 40, category: "Dairy", image: "/photos/download (12).jpeg" },
    { id: 14, name: "Paneer", price: 80, category: "Dairy", image: "/photos/download (13).jpeg" },

  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
