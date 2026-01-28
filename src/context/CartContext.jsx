import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const exist = cart.find((i) => i.id === product.id);
        if (exist) {
            setCart(cart.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i)));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const removeFromCart = (id) => setCart(cart.filter(i => i.id !== id));
    const clearCart = () => setCart([]);

    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};
