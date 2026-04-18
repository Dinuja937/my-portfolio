import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />

      <section id="about" className="section-placeholder">
        <h2>About Me</h2>
      </section>

      <section id="skills" className="section-placeholder">
        <h2>Skills</h2>
      </section>

      <section id="projects" className="section-placeholder">
        <h2>Projects</h2>
      </section>

      <section id="contact" className="section-placeholder">
        <h2>Contact</h2>
      </section>
    </div>
  );
}

export default App;
