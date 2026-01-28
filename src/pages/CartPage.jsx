import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { cart, removeFromCart, total, clearCart } = useContext(CartContext);

    return (
        <div className="p-6">
            <h2 className="text-2xl mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b py-2">
                            <span>{item.name} - ₹{item.price} x {item.qty}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <h3 className="mt-4 text-xl">Total: ₹{total}</h3>
                    <div className="flex gap-4 mt-3">
                        <button onClick={clearCart} className="bg-red-600 text-white px-3 py-1 rounded">
                            Clear Cart
                        </button>
                        <Link to="/checkout">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded">
                                Place the order
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
