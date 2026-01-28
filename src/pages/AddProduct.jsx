import React, { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Fruits");
    const [image, setImage] = useState("");
    const { addProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({
            name,
            price: Number(price),
            category,
            image: image || "https://via.placeholder.com/150"
        });
        navigate("/admin");
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="border p-2 w-full rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                    required
                />
                <input
                    className="border p-2 w-full rounded"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    type="number"
                    required
                />
                <select
                    className="border p-2 w-full rounded"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Dairy">Dairy</option>
                </select>
                <input
                    className="border p-2 w-full rounded"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
