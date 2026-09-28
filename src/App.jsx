import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillUniverse from './components/SkillUniverse';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import SmokeEffect from './components/SmokeEffect';

function App() {
  return (
    <div className="app-container">
      <SmokeEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillUniverse />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
