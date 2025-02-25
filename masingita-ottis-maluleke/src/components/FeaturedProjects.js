// src/components/FeaturedProjects.js
import React from 'react';

const FeaturedProjects = () => {
    const projects = [
        { id: 1, title: "Project 1", description: "A React-based e-commerce platform.", image: "/project1.jpg", link: "/project1" },
        { id: 2, title: "Project 2", description: "A Node.js API for IoT devices.", image: "/project2.jpg", link: "/project2" },
    ];

    return (
        <div className="featured-projects bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map(project => (
                        <div key={project.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a href={project.link} className="bg-blue-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;