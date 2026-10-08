import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import './Certifications.css';

const Card = ({ cert, index, total }) => {
  const isCardLeft = index % 2 !== 0;
  const isNodeLeft = !isCardLeft;
  const isLast = index === total - 1;
  const num = (index + 1).toString().padStart(2, '0');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`roadmap-step ${isCardLeft ? 'step-card-left' : 'step-card-right'}`}
    >
      <motion.div 
        initial={{ opacity: 0, x: isCardLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="step-content"
      >
        <div className="roadmap-card archive-card">
          <div className="card-top">
            <span className="cert-num mono">{num}</span>
            <span className="cert-date mono">{cert.date}</span>
          </div>
          <h3 className="cert-title">{cert.title}</h3>
          <p className="cert-issuer mono">{cert.issuer}</p>
        </div>
      </motion.div>
      
      <div className={`step-node-container ${isNodeLeft ? 'node-left' : 'node-right'}`}>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="step-node"
        >
          <div className="node-dot"></div>
        </motion.div>
      </div>
      
      {!isLast && (
        <svg className="step-curve" preserveAspectRatio="none" viewBox="0 0 100 100">
          {isNodeLeft ? (
            <motion.path 
              d="M 0,0 C 0,50 100,50 100,100" 
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          ) : (
            <motion.path 
              d="M 100,0 C 100,50 0,50 0,100" 
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          )}
        </svg>
      )}

      <div className="step-empty"></div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="roadmap-header">
         <h2 className="section-title mono">05 // LEARNING ARCHIVE</h2>
      </div>
      
      <div className="roadmap-vertical-container">
        <div className="roadmap-items">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              cert={cert} 
              index={index} 
              total={certifications.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
