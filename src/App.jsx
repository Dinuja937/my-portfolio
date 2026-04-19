import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />

      <section id="skills" className="section-placeholder">
        <h2>Skills</h2>
      </section>

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
