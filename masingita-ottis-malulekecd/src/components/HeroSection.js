// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-section bg-gradient-to-r from-blue-800 to-purple-900 text-white text-center py-32"
        >
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4">MASINGITA OTTIS MALULEKE</h1>
                <p className="text-xl mb-8">Software Engineer | UX Designer | Graphics Designer | Database Administrator | IT Specialist | Project Manager</p>
                <div className="flex justify-center space-x-4">
                    <Link to="/portfolio" className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Explore My Work</Link>
                    <a href="/cv.pdf" download className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Download My CV</a>
                    <Link to="/store" className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Visit My Store</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;