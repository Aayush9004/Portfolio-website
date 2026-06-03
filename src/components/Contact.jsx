import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending' | 'sent' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('sent');

    setTimeout(() => {
      setSubmitStatus(null);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="section-header fade-up">
        <span className="section-label">06 &mdash; contact</span>
        <h2 className="section-title">Let's <span>Connect</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="contact-wrapper">
        <div className="contact-info fade-left">
          <div className="internship-badge">
            <i className="fas fa-circle-dot"></i>
            Open to Internship Opportunities
          </div>
          <h3>Got a Backend Problem?</h3>
          <p>
            Whether you're looking for a backend intern who can hit the ground running, want to collaborate on a project, 
            or just want to chat tech — my inbox is always open.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Aayush9904"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              id="contact-github"
            >
              <i className="fab fa-github"></i>
              github.com/Aayush9904
            </a>
            <a
              href="https://linkedin.com/in/aayush9904"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              id="contact-linkedin"
            >
              <i className="fab fa-linkedin"></i>
              linkedin.com/in/aayush9904
            </a>
            <a href="mailto:aayush@example.com" className="social-link" id="contact-email">
              <i className="fas fa-envelope"></i>
              aayush@example.com
            </a>
          </div>
        </div>
        <form
          className="contact-form fade-right"
          id="contactForm"
          onSubmit={handleFormSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Internship opportunity / Collaboration / Hey!"
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-send"
            id="send-btn"
            style={{
              background: submitStatus === 'sent' ? 'linear-gradient(135deg, #00ffd5, #00c2ff)' : '',
            }}
          >
            {submitStatus === 'sent' ? (
              <>
                <i className="fas fa-check"></i> Message Sent!
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
