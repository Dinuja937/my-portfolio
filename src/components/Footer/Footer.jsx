import './Footer.css';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Dinuja Ranaweera</h2>
            <p>Software Engineering Undergraduate & Tech Enthusiast</p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/Dinuja937" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dinuja-ranaweera-23a563315/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://medium.com/@dinujachamodi" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="social-link">
              <FaMedium size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Dinuja Ranaweera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
