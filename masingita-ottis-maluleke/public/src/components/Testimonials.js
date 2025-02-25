import React from 'react';
import { motion } from 'framer-motion'; // Ensure this package is installed

const Testimonials = ({ colors }) => {
  return (
    <section className={`${colors.primary} py-16`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`${colors.card} backdrop-blur-sm p-6 rounded-xl border ${colors.border}`}
            >
              <p className="text-white/90 mb-4">
                "Masingita delivered an outstanding project that exceeded our expectations. His technical expertise and attention to detail were impressive."
              </p>
              <p className="text-white font-semibold">- Client {index + 1}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;