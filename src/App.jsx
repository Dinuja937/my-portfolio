import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />

      <section id="education" className="section-placeholder">
        <h2>Education</h2>
      </section>

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
