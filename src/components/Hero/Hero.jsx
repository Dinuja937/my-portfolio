import './Hero.css';
import profileImg from '../../assets/Portfolio.jpeg';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container fade-in">
          <img
            src={profileImg}
            alt="Dinuja Ranaweera"
            className="hero-image"
          />
        </div>

        <div className="hero-text fade-in-up">
          <h1 className="hero-name">Hi, I am Dinuja Ranaweera</h1>
          <h2 className="hero-title">Software Engineering Undergraduate</h2>
          <p className="hero-tagline">
            Passionate about building user-friendly and impactful digital solutions
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://drive.google.com/drive/folders/1qXrJtsx1GoZH47X2ZFaanUlEwWSq0AOd?usp=drive_link" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
