import React from 'react';
import { motion } from 'framer-motion';
import { Code, Download, ShoppingBag, ExternalLink, Github, Mail } from 'lucide-react';

const QuickLinks = ({ colors }) => {
  const quickLinks = [
    { title: 'Portfolio', icon: <Code size={24} />, path: '/portfolio' },
    { title: 'CV & Certifications', icon: <Download size={24} />, path: '/cv' },
    { title: 'Online Store', icon: <ShoppingBag size={24} />, path: '/store' },
    { title: 'Blog', icon: <Github size={24} />, path: '/blog' },
    { title: 'Discussion Board', icon: <ExternalLink size={24} />, path: '/discussion' },
    { title: 'Contact Me', icon: <Mail size={24} />, path: '/contact' }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} backdrop-blur-sm p-6 rounded-xl ${colors.border} border transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center gap-3">
                {link.icon}
                <h3 className={`text-xl font-semibold ${colors.text}`}>{link.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;