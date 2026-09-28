import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { navigation } from '../data/navigation';
import './FullScreenMenu.css';

const FullScreenMenu = ({ isOpen, onClose }) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait for menu to start closing before scrolling
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-10%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const linkContainerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 15 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fullscreen-menu-overlay"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          {/* Subtle Background Elements */}
          <div className="menu-bg-grid"></div>

          <div className="menu-header">
            <button 
              className="menu-close-btn" 
              onClick={onClose}
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>

          <div className="menu-content">
            <motion.nav 
              className="menu-nav"
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul>
                {navigation.map((item) => (
                  <motion.li key={item.number} variants={linkVariants}>
                    <a 
                      href={item.href} 
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="menu-item-link"
                    >
                      <span className="menu-item-num mono">{item.number}</span>
                      <span className="menu-item-label">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </div>

          <motion.div 
            className="menu-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="menu-social-links mono">
              <a href="https://github.com/epmubashira325-bot" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a href="https://www.linkedin.com/in/mubashira-ep" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
