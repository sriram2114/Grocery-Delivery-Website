import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const { products, updateProduct } = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const existing = products.find((item) => item.id === Number(id));

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Fruits");
    const [image, setImage] = useState("");

    useEffect(() => {
        if (existing) {
            setName(existing.name);
            setPrice(existing.price);
            setCategory(existing.category);
            setImage(existing.image);
        }
    }, [existing]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct({ id: Number(id), name, price: Number(price), category, image });
        navigate("/admin");
    };

    if (!existing) return <div className="p-6">Product not found.</div>;

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
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
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default EditProduct;
