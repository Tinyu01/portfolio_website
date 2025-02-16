// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: "Client 1", feedback: "Masingita delivered an outstanding project on time and within budget." },
        { id: 2, name: "Client 2", feedback: "Highly skilled and professional. Highly recommended!" },
    ];

    return (
        <div className="testimonials bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
                            <p className="text-gray-800 font-bold">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;