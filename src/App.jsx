import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillUniverse from './components/SkillUniverse';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { SmoothCursor } from './components/ui/smooth-cursor';

function App() {
  return (
    <div className="app-container">
      <SmoothCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillUniverse />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
