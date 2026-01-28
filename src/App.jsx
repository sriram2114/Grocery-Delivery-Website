import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import AdminPanel from "./pages/AdminPanel";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/add" element={<AddProduct />} />
            <Route path="/admin/edit/:id" element={<EditProduct />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
