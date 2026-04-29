import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bookfairImage from '../../assets/BookFair.png';
import univentsImage from '../../assets/UniVents.png';
import cricketImage from '../../assets/Cricket_League_Website.jpeg';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Bookfair Stall Reservation System",
      description: "A comprehensive web application for managing vendor registrations, book inventories, and a gamified checkout flow with a realistic credit card validation form.",
      image: bookfairImage,
      tags: ["React", "Spring Boot", "MySQL"],
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
      title: "UniVents UI/UX Design",
      description: "A comprehensive user interface and experience design project created in Figma for a university event management platform.",
      image: univentsImage,
      tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      githubLink: "#",
      liveLink: "https://www.figma.com/design/lBHT4HFpo4FBNrUmQVn2OP/UniVents?node-id=0-1&p=f&t=VPVxHPFTbvmkx4my-0"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card fade-in-up" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubLink !== "#" && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                        <FaGithub size={22} />
                      </a>
                    )}
                    {project.liveLink !== "#" && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
