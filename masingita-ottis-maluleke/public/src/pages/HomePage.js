import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // Ensure this package is installed
import HeroSection from '../components/HeroSection';
import QuickLinks from '../components/QuickLinks';
import AboutMeBrief from '../components/AboutMeBrief';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const lightColors = {
        primary: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
        secondary: 'bg-white',
        text: 'text-gray-900',
        card: 'bg-white/80',
        border: 'border-gray-300'
    };

    const darkColors = {
        primary: 'bg-gradient-to-r from-purple-900 via-pink-900 to-red-900',
        secondary: 'bg-gray-800',
        text: 'text-gray-100',
        card: 'bg-gray-800/80',
        border: 'border-gray-600'
    };

    const colors = isDarkMode ? darkColors : lightColors;

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {/* Theme Toggle */}
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`fixed top-4 right-4 p-3 rounded-full ${colors.card} backdrop-blur-md shadow-lg transition-transform transform hover:scale-110 z-50`}
            >
                {isDarkMode ? <Sun className="text-white" /> : <Moon className="text-gray-800" />}
            </button>

            {/* Hero Section */}
            <HeroSection colors={colors} />

            {/* Quick Links */}
            <QuickLinks colors={colors} />

            {/* About Me Brief */}
            <AboutMeBrief colors={colors} />

            {/* Featured Projects */}
            <FeaturedProjects colors={colors} />

            {/* Testimonials */}
            <Testimonials colors={colors} />
        </div>
    );
};

export default HomePage;