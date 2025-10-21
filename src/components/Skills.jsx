import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ['Java', 'Python', 'JavaScript',]
  },
  {
    title: "Frontend Development",
    skills: [ 'HTML5', 'CSS3','React.js',]
  },
  {
    title: "Backend Development",
    skills: ['FastAPI', 'Django', ]
  },
  {
    title: "Database & Tools",
    skills: ['MySQL', 'PostgreSQL', 'vs code', 'Git',]
  },
 
];

export default function Skills() {
  return (
    <section id="skills" className="card">
      <h2>Technical Skills</h2>
      {/* Category cards in 4-column grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '16px',
        marginTop: '16px' 
      }}>
        {skillCategories.map((category, index) => (
          <div key={index} className="card" style={{ 
            padding: '20px',
            textAlign: 'center',
            background: 'var(--card)',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ 
              marginBottom: '12px', 
              color: 'var(--accent-primary)',
              fontSize: '1.1rem'
            }}>
              {category.title}
            </h3>
            <ul style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} style={{ 
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  <span style={{
                    marginRight: '6px',
                    color: 'var(--accent-primary)'
                  }}>•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
