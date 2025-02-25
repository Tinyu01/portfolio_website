// src/components/SkillsSection.js
import React from 'react';

const SkillsSection = () => {
    const skills = [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "UX/UI Design", level: 75 },
        { name: "Database Administration", level: 70 },
        { name: "Cybersecurity", level: 65 },
        { name: "Project Management", level: 60 },
        { name: "Graphic Design", level: 55 },
    ];

    return (
        <div className="skills-section bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">{skill.name}</h3>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;