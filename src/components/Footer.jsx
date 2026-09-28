import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="mono">&copy; {new Date().getFullYear()} MUBASHIRA EP.</p>
        </div>
        
        <div className="footer-right">
          <p className="mono">ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
