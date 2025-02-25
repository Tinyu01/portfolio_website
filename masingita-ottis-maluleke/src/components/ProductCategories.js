// src/components/ProductCategories.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const categories = [
        { id: 1, title: "Software Templates", link: "/store/software" },
        { id: 2, title: "Design Assets", link: "/store/design" },
        { id: 3, title: "IT Tools", link: "/store/it" },
    ];

    return (
        <div className="product-categories bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Product Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map(category => (
                        <Link
                            key={category.id}
                            to={category.link}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
                        >
                            <h3 className="text-xl font-bold text-blue-800">{category.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;