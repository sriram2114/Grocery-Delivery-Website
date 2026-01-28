import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        city: "",
        state: "",
        address: "",
        paymentMethod: "",
        upiId: ""
    });
    

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        

        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobileRegex.test(form.mobile)) return "Enter valid 10-digit mobile number.";
        if (!form.paymentMethod)
           return "Please choose a payment method";
        if (form.paymentMethod === "UPI") {
            const upiRegex = /^[\w.-]+@[\w.-]+$/;
            if (!upiRegex.test(form.upiId)) return "Enter valid UPI ID (e.g. name@upi)";
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate();
        if (err) return setError(err);

        clearCart();
        navigate("/thankyou");
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input name="firstName" value={form.firstName} onChange={handleChange}
                        placeholder="First Name" className="border p-2 w-full rounded" required />
                    <input name="lastName" value={form.lastName} onChange={handleChange}
                        placeholder="Last Name" className="border p-2 w-full rounded" required />
                    <input name="mobile" value={form.mobile} onChange={handleChange}
                        placeholder="Mobile Number" className="border p-2 w-full rounded" required />

                    <input name="city" value={form.city} onChange={handleChange}
                        placeholder="City" className="border p-2 w-full rounded" required />
                    <input name="state" value={form.state} onChange={handleChange}
                        placeholder="State" className="border p-2 w-full rounded" required />
                    <textarea name="address" value={form.address} onChange={handleChange}
                        placeholder="Full Address" className="border p-2 w-full rounded" required />

                    <div className="flex gap-4 items-center">
                        <label>
                            <input type="radio" name="paymentMethod" value="COD"
                                checked={form.paymentMethod === "COD"} onChange={handleChange} /> Cash on Delivery
                        </label>
                        <label>
                            <input type="radio" name="paymentMethod" value="UPI"
                                checked={form.paymentMethod === "UPI"} onChange={handleChange} /> UPI Payment
                        </label>
                    </div>

                    {form.paymentMethod === "UPI" && (
                        <input name="upiId" value={form.upiId} onChange={handleChange}
                            placeholder="Enter UPI ID (e.g. name@upi)"
                            className="border p-2 w-full rounded" required />
                    )}

                    {error && <p className="text-red-600">{error}</p>}

                    <h3 className="text-lg font-medium">Total Amount: ₹{total}</h3>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                        Place Order
                    </button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
