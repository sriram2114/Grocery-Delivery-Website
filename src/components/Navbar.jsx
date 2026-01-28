import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center bg-green-600 text-white p-4">
      <Link to="/" className="text-2xl font-bold">RS Groceries</Link>
      <div className="flex gap-6">
        <Link to="/admin">Admin</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
