// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="hero-section bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
                <h1 className="text-5xl font-bold">MASINGITA OTTIS MALULEKE</h1>
                <p className="text-xl mt-4">Software Engineer | UX Designer | Graphics Designer | Database Administrator | IT Specialist | Project Manager</p>
                <div className="mt-8">
                    <Link to="/portfolio" className="btn bg-white text-blue-500 px-6 py-2 rounded-full mr-4">Explore My Work</Link>
                    <a href="/cv.pdf" download className="btn bg-white text-blue-500 px-6 py-2 rounded-full mr-4">Download My CV</a>
                    <Link to="/store" className="btn bg-white text-blue-500 px-6 py-2 rounded-full">Visit My Store</Link>
                </div>
            </div>
            <div className="quick-links-section p-10">
                <div className="grid grid-cols-3 gap-4">
                    <Link to="/portfolio" className="card bg-white p-6 rounded-lg shadow-lg">Portfolio</Link>
                    <Link to="/cv" className="card bg-white p-6 rounded-lg shadow-lg">CV & Certifications</Link>
                    <Link to="/store" className="card bg-white p-6 rounded-lg shadow-lg">Online Store</Link>
                    <Link to="/blog" className="card bg-white p-6 rounded-lg shadow-lg">Blog</Link>
                    <Link to="/discussion" className="card bg-white p-6 rounded-lg shadow-lg">Discussion Board</Link>
                    <Link to="/contact" className="card bg-white p-6 rounded-lg shadow-lg">Contact Me</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;