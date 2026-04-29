import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header fade-in-up">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">Interested in collaborating or have an exciting project in mind? Let's connect!</p>
        </div>

        <div className="contact-content fade-in-up">
          <div className="contact-info">
            <h3 className="info-heading">Contact Information</h3>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <FiMail size={24} />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>dinujachamodi@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiPhone size={24} />
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+94 70 142 4595</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin size={24} />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" action="https://formsubmit.co/dinujachamodi@gmail.com" method="POST">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="submit-btn">
                    <FiSend size={18} />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
