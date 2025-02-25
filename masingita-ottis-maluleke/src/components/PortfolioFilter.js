// src/components/PortfolioFilter.js
import React, { useState } from 'react';

const PortfolioFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="portfolio-filter bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Filter and Search</h2>
                <div className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                </div>
            </div>
        </div>
    );
};

export default PortfolioFilter;