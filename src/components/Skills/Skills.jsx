import './Skills.css';

function Skills() {
  const skillsData = [
    {
      id: 1,
      category: "Frontend Development",
      skills: [
        { name: "React.js", logo: "devicon-react-original colored" },
        { name: "JavaScript", logo: "devicon-javascript-plain colored" },
        { name: "HTML5", logo: "devicon-html5-plain colored" },
        { name: "CSS3", logo: "devicon-css3-plain colored" },
        { name: "Tailwind", logo: "devicon-tailwindcss-original colored" },
      ]
    },
    {
      id: 2,
      category: "Backend Development",
      skills: [
        { name: "Node.js", logo: "devicon-nodejs-plain colored" },
        { name: "Express.js", logo: "devicon-express-original" },
        { name: "Python", logo: "devicon-python-plain colored" }
      ]
    },
    {
      id: 3,
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", logo: "devicon-mongodb-plain colored" },
        { name: "MySQL", logo: "devicon-mysql-plain colored" },
        { name: "Git", logo: "devicon-git-plain colored" },
        { name: "GitHub", logo: "devicon-github-original" },
        { name: "VS Code", logo: "devicon-vscode-plain colored" },
        { name: "Figma", logo: "devicon-figma-plain colored" },
        { name: "Postman", logo: "devicon-postman-plain colored" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {skillsData.map((skillGroup) => (
            <div key={skillGroup.id} className="skill-card fade-in-up">
              <div className="skill-header">
                <span className="skill-icon">{skillGroup.icon}</span>
                <h3 className="skill-category">{skillGroup.category}</h3>
              </div>
              <div className="skill-tags">
                {skillGroup.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    <i className={skill.logo + " skill-logo"}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
