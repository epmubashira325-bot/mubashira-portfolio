import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message functionality is frontend-only for now.');
    setTimeout(() => setStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-heading">LET'S BUILD.</h2>
            <p className="contact-subheading">Have a project, opportunity, or idea?</p>

            <div className="contact-details mono">
              <div>
                <span>EMAIL:</span>
                <a href="mailto:epmubashira325@gmail.com">epmubashira325@gmail.com</a>
              </div>
              <div>
                <span>LINKEDIN:</span>
                <a href="https://www.linkedin.com/in/mubashira-ep" target="_blank" rel="noopener noreferrer">in/mubashira-ep</a>
              </div>
              <div>
                <span>GITHUB:</span>
                <a href="https://github.com/epmubashira325-bot" target="_blank" rel="noopener noreferrer">github.com/epmubashira325-bot</a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <textarea 
                name="message" 
                placeholder="Message" 
                rows="5" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn mono">
              SEND MESSAGE &rarr;
            </button>
            
            {status && <p className="form-status mono">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
