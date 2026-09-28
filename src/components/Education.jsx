import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="edu-wrapper">
        <motion.div 
          className="academic-record"
          initial={{ opacity: 0, y: 50, rotateX: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <div className="record-border-inner">
            <div className="record-header mono">
              <span></span>
              <span>RCET // KERALA</span>
            </div>
            
            <div className="record-body">
              <h3 className="degree-title">Bachelor of Technology</h3>
              <h4 className="major-title">Artificial Intelligence and Data Science</h4>
              
              <div className="record-details">
                <p>Royal College of Engineering and Technology</p>
                <p className="mono years">2022 &mdash; 2026</p>
              </div>
            </div>

            <div className="record-footer">
              <div className="seal">
                <div className="seal-inner"></div>
              </div>
              <div className="mono verification">STATUS: COMPLETED</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
