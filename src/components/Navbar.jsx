import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import FullScreenMenu from './FullScreenMenu';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <a href="#" className="logo" onClick={handleLogoClick}>
            PORTFOLIO
          </a>

          <button 
            className="menu-toggle-btn mono" 
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <span className="menu-text">MENU</span>
            <Menu size={20} strokeWidth={1.5} className="menu-icon" />
          </button>
        </div>
      </header>

      <FullScreenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
