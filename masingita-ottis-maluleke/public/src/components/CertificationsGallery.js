// src/components/CertificationsGallery.js
import React from 'react';

const CertificationsGallery = () => {
    const certifications = [
        { id: 1, name: "Cloud Application Developer", image: "/cert1.jpg", link: "/cert1" },
        { id: 2, name: "IoT Cloud Developer", image: "/cert2.jpg", link: "/cert2" },
        { id: 3, name: "ALX Software Engineering", image: "/cert3.jpg", link: "/cert3" },
    ];

    return (
        <div className="certifications-gallery bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certifications.map(cert => (
                        <div key={cert.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <img src={cert.image} alt={cert.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold text-blue-800 mb-2">{cert.name}</h3>
                            <a href={cert.link} className="bg-blue-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">View Details</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificationsGallery;