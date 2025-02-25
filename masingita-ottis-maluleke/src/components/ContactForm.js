// src/components/ContactForm.js
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [captcha, setCaptcha] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captcha) {
            alert('Please verify you are not a robot.');
            return;
        }
        // Handle form submission
    };

    return (
        <div className="contact-form bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-lg mb-4" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg mb-4" />
                    <textarea placeholder="Message" className="w-full px-4 py-2 rounded-lg mb-4" rows="5"></textarea>
                    <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={(value) => setCaptcha(value)} />
                    <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 mt-4">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;