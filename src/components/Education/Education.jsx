import './Education.css';

function Education() {
  const educationData = [
    {
      id: 1,
      edu_level: "BSc. Honours in Software Engineering",
      institution: "University of Kelaniya",
      duration: "Apr 2024 - Present",
      description: "Specialized in Net-Centric Applications, Business Engineering Applications, Data Science & Engineering Applications, and Health Informatics Application",
    },

    {
      id: 2,
      edu_level: "Diploma in Information and Communication Technology",
      institution: "ICBT Kandy Campus",
      duration: "June 2023 - Dec 2023",
      description: "Completed a diploma with a strong foundation in fundamental ICT concepts"
    },

    {
      id: 3,
      edu_level: "GCE Advanced Level",
      institution: "Mahamaya Girls' College, Kandy",
      duration: "Feb 2008 - Jul 2021",
      description: "Studied Chemistry, Mathematics, and Physics under the Physical Science stream",
      results: "1A 2B's",
      z_score: "1.4830",
    },

  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>

        <div className="education-timeline">
          {educationData.map((item) => (
            <div key={item.id} className="education-card fade-in-up">
              <div className="education-header">
                <div className="education-titles">
                  <h3 className="institution">{item.institution}</h3>
                  <h4 className="degree">{item.edu_level}</h4>
                </div>
                <div className="duration-badge">{item.duration}</div>
              </div>

              <div className="education-body">
                {item.description && <p className="education-desc">{item.description}</p>}

                {item.results && (
                  <p className="education-desc"><strong>Results:</strong> {item.results}</p>
                )}

                {item.z_score && (
                  <p className="education-desc"><strong>Z-Score:</strong> {item.z_score}</p>
                )}

                {item.domains && (
                  <>
                    <h5 className="domains-title">Specialized Domains:</h5>
                    <ul className="domains-list">
                      {item.domains.map((domain, index) => (
                        <li key={index} className="domain-item">{domain}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
