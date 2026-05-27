import { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import bookfairImage from '../../assets/BookFair.png';
import univentsImage from '../../assets/UniVents.png';
import cricketImage from '../../assets/Cricket_League_Website.jpeg';
import petnestImage from '../../assets/PetNest.png';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsData = [
    {
      id: 1,
      title: "Bookfair Stall Reservation System",
      description: "A comprehensive web application for managing vendor registrations, book inventories, and a gamified checkout flow with a realistic credit card validation form.",
      image: bookfairImage,
      tags: ["React", "Spring Boot", "REST API", "MySQL"],
      githubLink: "https://github.com/Dinuja937/bookfair-stall-reservation-system",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Cricket League Website",
      description: "A dynamic web platform designed for managing and showcasing a cricket league, featuring team standings, match schedules, and player statistics.",
      image: cricketImage,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubLink: "https://github.com/Dinuja937/Cricket-League-Website",
      liveLink: "#"
    },
    {
      id: 3,
      title: "PetNest eCommerce Store",
      description: "Developing a full-stack MERN eCommerce web application for a pet store with product listings, shopping cart, user authentication, order management, and admin dashboard features.",
      image: petnestImage,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Redis", "JWT Authentication", "Tailwind CSS", "Axios", "REST APIs", "Cloudinary"],
      githubLink: "https://github.com/Dinuja937/petnest-ecommerce",
      liveLink: "#"
    },
    {
      id: 4,
      title: "UniVents UI/UX Design",
      description: "A comprehensive user interface and experience design project created in Figma for a university event management platform.",
      image: univentsImage,
      tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      githubLink: "#",
      liveLink: "https://www.figma.com/design/lBHT4HFpo4FBNrUmQVn2OP/UniVents?node-id=0-1&p=f&t=VPVxHPFTbvmkx4my-0"
    }
  ];

  const currentProject = projectsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-carousel">
          <button type="button" className="carousel-button carousel-button-left" onClick={handlePrev} aria-label="Previous project">
            <FaChevronLeft />
          </button>

          <div className="project-card fade-in-up">
            <div className="project-image-container">
              <img src={currentProject.image} alt={currentProject.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  {currentProject.githubLink !== "#" && (
                    <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                      <FaGithub size={22} />
                    </a>
                  )}
                  {currentProject.liveLink !== "#" && (
                    <a href={currentProject.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{currentProject.title}</h3>
              <p className="project-description">{currentProject.description}</p>
              <div className="project-tags">
                {currentProject.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <button type="button" className="carousel-button carousel-button-right" onClick={handleNext} aria-label="Next project">
            <FaChevronRight />
          </button>
        </div>

        <div className="project-indicator">
          {currentIndex + 1} / {projectsData.length}
        </div>
      </div>
    </section>
  );
}

export default Projects;
