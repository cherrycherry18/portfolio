import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div style={{ 
              fontSize: '1.2rem', 
              fontWeight: '700', 
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '8px'
            }}>
              Gubbala Charan
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Associate Software Engineer Intern | MCA Graduate
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/resume.jpg" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          marginTop: '24px', 
          paddingTop: '24px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}>
          <p>
            © 2024 Gubbala Charan. Built with React.js and lots of ☕
          </p>
          <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <a href="mailto:nameischaran4@gmail.com" style={{ color: 'var(--accent-primary)' }}>
              📧 Email
            </a>
            <a href="https://www.linkedin.com/in/charan-gubbala-417a30259" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-secondary)' }}>
              💼 LinkedIn
            </a>
            <a href="https://github.com/cherrycherry18" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-tertiary)' }}>
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
