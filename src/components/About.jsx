import React from "react";

export default function About() {
  return (
    <section id="about" className="card">
      <h2>About Me</h2>
      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          I'm Gubbala Charan, a passionate and detail-oriented MCA student at Swarnandhra College of Engineering and Technology (JNTU), with a strong background in computer science and full-stack development. I have hands-on experience in React.js, FastAPI, Python, and Java, and enjoy building web applications that combine functionality with clean, user-friendly design. Through my projects — including a Text-to-Image Generator using Stable Diffusion and GANs, an E-Commerce Website, and a Social Media Hashtag Prediction system — I've developed practical skills in both frontend and backend technologies. My internships at Datapoint IT & Hardware Pvt. Ltd. and Triaright Solutions helped me apply my learning to real-world software development and deepen my interest in AI and web technologies. I'm constantly learning new tools, exploring innovative ideas, and striving to create impactful solutions that make technology more accessible and efficient.
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="mini-card" style={{ background: 'var(--card)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '16px', padding: '16px' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '8px', fontSize: '1.05rem' }}>🎓 Education</h3>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <div><strong>MCA</strong> — Swarnandhra College (JNTU)</div>
            <div style={{ color: 'var(--text-muted)' }}>2023 - 2025</div>
            <div><strong>B.Sc (Computer Science)</strong></div>
          </div>
        </div>
        <div className="mini-card" style={{ background: 'var(--card)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '16px', padding: '16px' }}>
          <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '8px', fontSize: '1.05rem' }}>🏆 Certifications</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <li>Python Programming</li>
            <li>AWS Academy — Data Engineering</li>
            <li>Machine Learning Fundamentals</li>
          </ul>
        </div>
        <div className="mini-card" style={{ background: 'var(--card)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '16px', padding: '16px' }}>
          <h3 style={{ color: 'var(--accent-tertiary)', marginBottom: '8px', fontSize: '1.05rem' }}>📧 Contact</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <li><strong>Email:</strong> <a href="mailto:nameischaran4@gmail.com" style={{ color: 'var(--accent-primary)' }}>nameischaran4@gmail.com</a></li>
            <li><strong>Location:</strong> West Godavari, India</li>
            <li><strong>Resume:</strong> <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)' }}>View</a></li>
          </ul>
        </div>
        <div className="mini-card" style={{ background: 'var(--card)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '16px', padding: '16px' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '8px', fontSize: '1.05rem' }}>🔗 Connect</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/charan-gubbala-417a30259" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)' }}>charan-gubbala</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/cherrycherry18" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)' }}>@cherrycherry18</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
