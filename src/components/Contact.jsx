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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    const accessKey = '5b77ce54-3903-4572-87d3-d90c870fb303';
    if (!accessKey) {
      console.warn("Web3Forms access key is not configured.");
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 4000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('sent');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error(data.message);
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    }

    setTimeout(() => {
      setSubmitStatus(null);
    }, 4000);
  };

  return (
    <section id="contact">
      <div className="section-header fade-up">
        <span className="section-label">05 &mdash; contact</span>
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
              href="https://github.com/Aayush9004"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              id="contact-github"
            >
              <i className="fab fa-github"></i>
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-singh-4532b6292/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              id="contact-linkedin"
            >
              <i className="fab fa-linkedin"></i>
              Linkedin
            </a>
            <a href="mailto:aayushsingh9004@gmail.com" className="social-link" id="contact-email">
              <i className="fas fa-envelope"></i>
              Mail
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
            disabled={submitStatus === 'sending' || submitStatus === 'sent'}
            style={{
              background: 
                submitStatus === 'sent' 
                  ? 'linear-gradient(135deg, #00ffd5, #00c2ff)' 
                  : submitStatus === 'error'
                  ? 'linear-gradient(135deg, #ff416c, #ff4b2b)'
                  : submitStatus === 'sending'
                  ? 'rgba(255, 255, 255, 0.15)'
                  : '',
              cursor: (submitStatus === 'sending' || submitStatus === 'sent') ? 'not-allowed' : 'pointer',
              opacity: submitStatus === 'sending' ? 0.7 : 1,
            }}
          >
            {submitStatus === 'sending' ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Sending...
              </>
            ) : submitStatus === 'sent' ? (
              <>
                <i className="fas fa-check"></i> Message Sent!
              </>
            ) : submitStatus === 'error' ? (
              <>
                <i className="fas fa-exclamation-triangle"></i> Send Failed
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
