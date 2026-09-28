import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title mono">03 // CAREER JOURNEY</h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {experience.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company mono">{exp.company} &mdash; {exp.location}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-date mono">{exp.date}</span>
                  <span className="exp-type mono">{exp.type}</span>
                </div>
              </div>

              <ul className="exp-responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="mono tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
