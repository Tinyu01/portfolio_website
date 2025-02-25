import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProjects = ({ colors }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack React & Node.js application',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'IoT Dashboard',
      description: 'Real-time device monitoring system',
      tech: ['Vue.js', 'WebSocket', 'Express'],
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${colors.text}`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`${colors.card} backdrop-blur-sm rounded-xl overflow-hidden border ${colors.border}`}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>{project.title}</h3>
                <p className={`${colors.text} mb-4`}>
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`${colors.card} px-3 py-1 rounded-full text-sm ${colors.text}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;