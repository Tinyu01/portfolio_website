// src/components/ExperienceTimeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceTimeline = () => {
    const experiences = [
        { date: "2021 - Present", title: "Software Engineer", company: "Tech Corp", description: "Developed scalable web applications." },
        { date: "2019 - 2021", title: "UX Designer", company: "Design Studio", description: "Designed user-friendly interfaces." },
    ];

    return (
        <VerticalTimeline>
            {experiences.map((exp, index) => (
                <VerticalTimelineElement
                    key={index}
                    date={exp.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                    <p>{exp.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default ExperienceTimeline;