import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-heading">LET'S CONNECT</h2>
        <p className="contact-subheading">Have a project or opportunity?</p>

        <div className="contact-socials">
          <a href="mailto:epmubashira325@gmail.com" className="social-icon-link" aria-label="Email" title="Email">
            <Mail size={26} />
          </a>
          <a href="tel:+919072071443" className="social-icon-link" aria-label="Call" title="Call: +91 90720 71443">
            <Phone size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mubashira-ep/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn" title="LinkedIn">
            <LinkedinIcon size={26} />
          </a>
          <a href="https://github.com/epmubashira325-bot" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub" title="GitHub">
            <GithubIcon size={26} />
          </a>
        </div>

        <div className="contact-meta-badges">
          <a href="tel:+919072071443" className="contact-badge-item" title="Click to call">
            <Phone size={15} className="location-icon" />
            <span className="mono">+91 90720 71443</span>
          </a>

          <div className="contact-badge-item">
            <MapPin size={15} className="location-icon" />
            <span className="mono">Mannarkkad, Palakkad, Kerala, India</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
