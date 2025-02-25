// src/components/ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="shopping-cart bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Shopping Cart</h2>
                {cart.map(item => (
                    <div key={item.id} className="bg-white p-6 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-bold text-blue-800">{item.name}</h3>
                        <p className="text-gray-700">${item.price}</p>
                        <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-full mt-4">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingCart;