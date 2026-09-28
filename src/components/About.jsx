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

  const aboutWidgets = [
    { id: "01", size: "sm", title: "AI / MACHINE LEARNING", desc: "Building practical AI and ML applications using Python." },
    { id: "02", size: "sm", title: "FULL STACK DEVELOPMENT", desc: "Building responsive web applications and backend APIs." },
    { id: "03", size: "sm", title: "COMPUTER VISION", desc: "Working with OpenCV, YOLOv8 and image/video processing." }
  ];

  const renderAboutWidget = (item) => (
    <div className="wid-block" style={{ height: '100%', margin: 0, padding: '2rem', display: 'flex', flexDirection: 'column', background: 'transparent', border: 'none' }}>
      <div className="wid-block-header" style={{ marginBottom: '2rem' }}>
        <span className="wid-num mono" style={{ color: 'var(--accent)' }}>{item.id}</span>
        <ArrowRight className="wid-arrow" size={20} strokeWidth={1.5} style={{ opacity: 0.5 }} />
      </div>
      <div className="wid-block-content" style={{ marginTop: 'auto' }}>
        <h4 className="wid-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h4>
        <p className="wid-desc" style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</p>
      </div>
    </div>
  );

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
              <SplitText text="I’m a **Python AI Junior Developer and Full Stack Developer** passionate about building practical, user-focused software solutions." />
            </p>
            <p>
              <SplitText text="I work across **Python, Django, REST APIs, React.js, JavaScript, AI/ML, and Computer Vision**, with experience developing web applications, backend systems, automation solutions, and AI-powered projects." />
            </p>
            <p>
              <SplitText text="I enjoy turning ideas and real-world requirements into **clean, responsive, and scalable applications** while continuously learning and exploring new technologies." />
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

        {/* Second Part - What I Do */}
        <motion.div className="what-i-do-section" variants={containerVariants}>
          <motion.h3 className="wid-heading mono text-center" variants={itemVariants} style={{ marginBottom: '1rem' }}>
            WHAT I DO
          </motion.h3>
          <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '3rem', fontSize: '0.85rem' }}>
            Drag and rearrange these cards.
          </p>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <DraggableWidgetGrid
              items={aboutWidgets}
              renderItem={renderAboutWidget}
              maxColumns={3}
              cellSize={300}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
