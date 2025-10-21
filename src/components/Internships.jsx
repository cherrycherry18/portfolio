import React from "react";

const internships = [
  {
    company: "Datapoint IT & Hardware Pvt. Ltd.",
    role: "Python Developer with Deep Learning",
    duration: "6 months",
    period: "2023",
    description: "Developed machine learning models and deep learning applications using Python, TensorFlow, and PyTorch. Worked on computer vision projects and natural language processing tasks.",
    achievements: [
      "Built image classification models with 95% accuracy",
      "Developed NLP pipelines for text analysis",
      "Implemented deep learning architectures for computer vision",
      "Collaborated with senior developers on ML projects"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "Pandas"]
  },
  {
    company: "Triaright Solutions",
    role: "Python Development Intern",
    duration: "4 months",
    period: "2022",
    description: "Worked on backend development using Python frameworks and database management. Gained experience in API development and web application architecture.",
    achievements: [
      "Developed RESTful APIs using FastAPI",
      "Implemented database optimization techniques",
      "Created automated testing suites",
      "Participated in code reviews and agile development"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Git", "Pytest"]
  }
];

export default function Internships() {
  return (
    <section id="internships" className="card">
      <h2>Professional Experience</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
        Hands-on experience gained through internships and real-world projects
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {internships.map((internship, index) => (
          <div key={index} style={{ 
            background: 'var(--bg-tertiary)', 
            padding: '24px', 
            borderRadius: 'var(--radius)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'var(--transition)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>{internship.company}</h3>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>{internship.role}</h4>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{internship.duration}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{internship.period}</div>
              </div>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
              {internship.description}
            </p>
            
            <div style={{ marginBottom: '16px' }}>
              <h5 style={{ color: 'var(--accent-secondary)', marginBottom: '8px', fontSize: '1rem' }}>Key Achievements:</h5>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', fontSize: '0.9rem' }}>
                {internship.achievements.map((achievement, idx) => (
                  <li key={idx} style={{ marginBottom: '4px' }}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 style={{ color: 'var(--accent-tertiary)', marginBottom: '8px', fontSize: '1rem' }}>Technologies Used:</h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {internship.technologies.map(tech => (
                  <span key={tech} style={{
                    background: 'var(--card)',
                    color: 'var(--accent-primary)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: '1px solid rgba(0, 212, 255, 0.2)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
