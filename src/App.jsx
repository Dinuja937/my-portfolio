import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Education />
      <Skills />

      <section id="projects" className="section-placeholder">
        <h2>Projects</h2>
      </section>

      <section id="blogs" className="section-placeholder">
        <h2>Blog Articles</h2>
      </section>

      <section id="contact" className="section-placeholder">
        <h2>Contact</h2>
      </section>
    </div>
  );
}

export default App;
