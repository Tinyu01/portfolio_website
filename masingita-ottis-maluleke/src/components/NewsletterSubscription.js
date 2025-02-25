// src/components/NewsletterSubscription.js
import React, { useState } from 'react';
import axios from 'axios';

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/subscribe', { email });
            alert('Subscribed successfully!');
        } catch (error) {
            alert('Subscription failed. Please try again.');
        }
    };

    return (
        <div className="newsletter-subscription bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Subscribe to Our Newsletter</h2>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-lg mr-4"
                    />
                    <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSubscription;