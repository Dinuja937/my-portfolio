import './Certifications.css';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

function Certifications() {
  const certificationsData = [
    {
      id: 1,
      title: "IEEEXtreme 19.0 Programming Competition",
      organization: "IEEE",
      date: "2025",
      link: "https://certificate.ieeextreme.org/generate-email-certificate/o3w2ProU9ExfqE",
      icon: "devicon-code-plain colored"
    },
    {
      id: 2,
      title: "Figma Design Basics and Features",
      organization: "Alison",
      date: "2025",
      link: "https://drive.google.com/file/d/1dqbPmnrFUuLwOMbDxa9fkqhiQ2Z4drUL/view",
      icon: "devicon-figma-plain colored"
    },
    {
      id: 3,
      title: "Java Intermediate",
      organization: "Sololearn",
      date: "2025",
      link: "https://api2.sololearn.com/v2/certificates/CC-ONNNFC5D/image/png?t=639141987008963170",
      icon: "devicon-java-plain colored"
    },
    {
      id: 4,
      title: "Introduction to C",
      organization: "Sololearn",
      date: "2024",
      link: "https://api2.sololearn.com/v2/certificates/CC-G1TYP374/image/png?t=639141988015269609",
      icon: "devicon-c-plain colored"
    },
    {
      id: 5,
      title: "Python for Beginners",
      organization: "University of Moratuwa",
      date: "2024",
      link: "https://drive.google.com/file/d/15Pg3CxDQEPDsdojZ-tzRHRude8lxDdd5/view",
      icon: "devicon-python-plain colored"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">Licenses & Certifications</h2>

        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.organization}</p>
                <p className="cert-date">Issued {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-btn"
                >
                  Verify <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="cert-footer">
          <p>More certifications available on my <a href="https://www.linkedin.com/in/dinuja-ranaweera-23a563315/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
