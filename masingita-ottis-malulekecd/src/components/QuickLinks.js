// src/components/QuickLinks.js
import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
    const links = [
        { name: "Portfolio", path: "/portfolio" },
        { name: "CV & Certifications", path: "/cv" },
        { name: "Online Store", path: "/store" },
        { name: "Blog", path: "/blog" },
        { name: "Discussion Board", path: "/discussion" },
        { name: "Contact Me", path: "/contact" },
    ];

    return (
        <div className="quick-links-section bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
                        >
                            <h3 className="text-xl font-semibold text-blue-800">{link.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;