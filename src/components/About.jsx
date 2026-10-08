import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SplitText from './ui/motion-split-text';
import DraggableWidgetGrid from './ui/draggable-widget-grid';
import './About.css';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };



  return (
    <section id="about" className="about-section">
      <div className="about-pingpong-container">
        <h2 className="pingpong-text">ABOUT ME</h2>
      </div>

      <motion.div 
        className="about-static-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="about-content-col">
          <motion.div className="about-intro-text" variants={containerVariants}>
            <p>
              <SplitText text="I’m a **Python AI  & Full Stack Developer** with hands-on experience in **Python, Django, REST APIs, React.js, JavaScript, AI/ML, and Computer Vision**." />
            </p>
            <p>
              <SplitText text="Skilled in building **scalable web applications, backend systems, automation solutions, and AI-powered applications**, with a focus on creating efficient, reliable, and user-focused software solutions." />
            </p>
          </motion.div>

          <motion.div className="about-info-rows" variants={containerVariants}>
            <motion.div className="info-row" variants={itemVariants}>
              <span className="info-label mono">ROLE</span>
              <span className="info-value">Python AI Junior Developer</span>
            </motion.div>
            <motion.div className="info-line" variants={lineVariants}></motion.div>
            
            <motion.div className="info-row" variants={itemVariants}>
              <span className="info-label mono">FOCUS</span>
              <span className="info-value">AI/ML &bull; Full Stack &bull; Computer Vision</span>
            </motion.div>
            <motion.div className="info-line" variants={lineVariants}></motion.div>
            
            <motion.div className="info-row" variants={itemVariants}>
              <span className="info-label mono">LOCATION</span>
              <span className="info-value">Mannarkkad , Kerala</span>
            </motion.div>
            <motion.div className="info-line" variants={lineVariants}></motion.div>
          </motion.div>
        </div>


      </motion.div>
    </section>
  );
};

export default About;
