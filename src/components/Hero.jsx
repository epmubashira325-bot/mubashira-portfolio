import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-grid"></div>
      
      <div className="hero-content">
        <div className="hero-name-container">
          <div className="hero-huge-name-wrapper">
            <motion.h1 
              className="hero-huge-name"
              style={{ y: textY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              MUBASHIRA
            </motion.h1>
          </div>
          
          <motion.div 
            className="hero-image-wrapper"
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <img src="/images/profile-cutout.png" alt="Mubashira EP" className="hero-profile-image" onError={(e) => {
              e.target.style.display = 'none';
            }} />
          </motion.div>
        </div>

        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="hero-role">Python AI Developer</h2>
          <p className="hero-skills mono">
            Python &bull; AI/ML &bull; Full Stack &bull; Computer Vision
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary mono">[ EXPLORE WORK ]</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary mono">[ VIEW RESUME ]</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
