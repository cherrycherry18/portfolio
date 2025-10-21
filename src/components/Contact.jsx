import React, { useState } from "react";

export default function Contact() {
  // Set your public contact info here. Leave phone empty to hide it.
  const CONTACT = {
    github: 'https://github.com/cherrycherry18',
    linkedin: 'https://www.linkedin.com/in/charan-gubbala-417a30259',
    email: 'nameischaran4@gmail.com',
    phone: '' // e.g., '+91-9XXXXXXXXX' (rendered only if not empty)
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="card">
      <h2>Get In Touch</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem' }}>
        I'm always interested in new opportunities and exciting projects. Whether you have a question, 
        want to collaborate, or just want to say hello, feel free to reach out!
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        {/* Contact Information */}
        <div>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '24px' }}>Contact Information</h3>
          
          {/* Quick icon row */}
          <div style={{ display: 'flex', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '10px 14px' }}>
              🐙 GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '10px 14px' }}>
              💼 LinkedIn
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn btn-secondary" style={{ padding: '10px 14px' }}>
              📧 Email
            </a>
            {CONTACT.phone && (
              <a href={`tel:${CONTACT.phone}`} className="btn btn-secondary" style={{ padding: '10px 14px' }}>
                ☎️ Phone
              </a>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.5rem' }}>📧</span>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Email</div>
                <a href={`mailto:${CONTACT.email}`} style={{ color: 'var(--accent-primary)' }}>
                  {CONTACT.email}
                </a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.5rem' }}>📍</span>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Location</div>
                <div style={{ color: 'var(--text-secondary)' }}>West Godavari, India</div>
              </div>
            </div>
            
            {CONTACT.phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>☎️</span>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Phone</div>
                  <a href={`tel:${CONTACT.phone}`} style={{ color: 'var(--accent-primary)' }}>
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.5rem' }}>💼</span>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Availability</div>
                <div style={{ color: 'var(--text-secondary)' }}>Open to opportunities</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.5rem' }}>🔗</span>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>LinkedIn</div>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)' }}>
                  charan-gubbala
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '24px' }}>Send a Message</h3>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              />
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div style={{ 
                color: 'var(--accent-tertiary)', 
                textAlign: 'center', 
                marginTop: '16px',
                padding: '12px',
                background: 'rgba(78, 205, 196, 0.1)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--accent-tertiary)'
              }}>
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}