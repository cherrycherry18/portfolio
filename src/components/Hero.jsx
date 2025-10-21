import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>
            Hi, I'm CHARAN GUBBALA <span className="accent">Gubbala Charan</span>
          </h1>
          <p className="lead">
            Associate Software Engineer Intern • MCA Graduate
          </p>
          <p>
            I specialize in building modern web applications using React.js and FastAPI, 
            and developing innovative AI solutions including text-to-image generation and 
            machine learning models. Passionate about creating technology that makes a real impact.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <span>🚀</span> View My Work
            </a>
            <a href="/resume.jpg" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <span>📄</span> Download Resume
            </a>
          </div>
          
          {/* Quick Stats */}
          <div style={{ 
            display: 'flex', 
            gap: '32px', 
            marginTop: '40px', 
            flexWrap: 'wrap' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: 'var(--accent-primary)',
                lineHeight: '1'
              }}>6+</div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-secondary)' 
              }}>Projects</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: 'var(--accent-secondary)',
                lineHeight: '1'
              }}>2</div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-secondary)' 
              }}>Internships</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: 'var(--accent-tertiary)',
                lineHeight: '1'
              }}>15+</div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-secondary)' 
              }}>Technologies</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PROFILE CARD */}
        <div className="hero-right">
          <div className="profile-card">
            {/* Avatar Image from public folder */}
            <div className="avatar">
              <img src="/profile.jpg" alt="Gubbala Charan" />
            </div>

            {/* Profile Info */}
            <div className="profile-info">
              <h3>Gubbala Charan</h3>
              <p>Associate Software Engineer Intern | MCA Graduate</p>
              <p>React.js • FastAPI • Python • ML</p>
              <p className="small">📍 West Godavari, India</p>
              
              {/* Social Links */}
              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                marginTop: '20px',
                justifyContent: 'center'
              }}>
                <a href="mailto:nameischaran4@gmail.com" style={{ 
                  color: 'var(--accent-primary)',
                  fontSize: '1.5rem',
                  transition: 'var(--transition)'
                }}>
                  📧
                </a>
                <a href="https://www.linkedin.com/in/charan-gubbala-417a30259" target="_blank" rel="noreferrer" style={{ 
                  color: 'var(--accent-secondary)',
                  fontSize: '1.5rem',
                  transition: 'var(--transition)'
                }}>
                  💼
                </a>
                <a href="https://github.com/cherrycherry18" target="_blank" rel="noreferrer" style={{ 
                  color: 'var(--accent-tertiary)',
                  fontSize: '1.5rem',
                  transition: 'var(--transition)'
                }}>
                  🐙
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
