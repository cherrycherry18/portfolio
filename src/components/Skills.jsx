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
  const flatSkills = skillCategories.flatMap(cat => cat.skills);
  return (
    <section id="skills" className="card">
      <h2>Technical Skills</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
        A quick snapshot of tools and technologies I work with
      </p>
      {/* 3 x 3 grid of skill cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '16px'
      }}>
        {flatSkills.slice(0, 9).map((skill) => (
          <div key={skill} style={{
            background: 'var(--card)',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '16px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {skill}
          </div>
        ))}
      </div>

      {/* Remaining grouped by category below */}
      <div style={{ marginTop: '32px' }} className="skill-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <div className="skill-pills">
              {category.skills.map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
