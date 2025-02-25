import React from 'react';
import { Link } from 'react-router-dom';

const AboutMeBrief = () => {
    return (
        <div className="about-me-brief bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <img src="/profile.jpg" alt="Masingita Ottis Maluleke" className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-white/20" />
                <div className="text-center md:text-left">
                    <p className="text-lg text-white/80 mb-4">Hi, I'm Masingita Ottis Maluleke, a passionate Software Engineer and Designer based in Roodepoort.</p>
                    <Link to="/about" className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-white/20 transition duration-300 border border-white/20">Learn More About Me</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMeBrief;