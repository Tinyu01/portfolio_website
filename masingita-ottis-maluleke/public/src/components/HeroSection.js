import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ colors }) => {
    return (
        <section className={`relative ${colors.primary} py-20 bg-gradient-to-r from-blue-500 to-purple-600`}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-bold text-white mb-6">
                        MASINGITA OTTIS MALULEKE
                    </h1>
                    <p className="text-xl text-white/90 mb-8">
                        Software Engineer | UX Designer | Graphics Designer | Database Administrator | IT Specialist | Project Manager
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className={`${colors.card} backdrop-blur-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-opacity-80 shadow-lg`}>
                            Explore My Work
                        </button>
                        <button className={`${colors.card} backdrop-blur-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-opacity-80 shadow-lg`}>
                            Download My CV
                        </button>
                        <button className={`${colors.card} backdrop-blur-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-opacity-80 shadow-lg`}>
                            Visit My Store
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;