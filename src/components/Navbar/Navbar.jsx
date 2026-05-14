import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Dinuja
        </a>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-links" onClick={closeMenu}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#certifications" className="nav-links" onClick={closeMenu}>
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#blogs" className="nav-links" onClick={closeMenu}>
              Blog Articles
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? (
              <FiSun size={22} />
            ) : (
              <FiMoon size={22} />
            )}
          </button>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
