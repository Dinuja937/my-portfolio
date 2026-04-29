import './Projects.css';
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    )}
                    {project.liveLink !== "#" && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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
