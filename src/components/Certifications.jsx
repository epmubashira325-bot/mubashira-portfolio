import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title mono">05 // LEARNING ARCHIVE</h2>

      <div className="archive-grid">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            className="archive-card"
            initial={{ opacity: 0, y: 40, rotateX: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.15, 
              type: "spring", 
              stiffness: 100,
              damping: 15
            }}
          >
            <div className="card-top">
              <span className="mono cert-date">{cert.date}</span>
              <div className="cert-icon"></div>
            </div>
            
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer mono">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
