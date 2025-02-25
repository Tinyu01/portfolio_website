// src/components/InteractiveCV.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const InteractiveCV = () => {
    return (
        <div className="interactive-cv bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Interactive CV</h2>
                <PDFDownloadLink document={<MyDocument />} fileName="cv.pdf">
                    {({ loading }) => (loading ? 'Loading document...' : 'Download CV')}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default InteractiveCV;