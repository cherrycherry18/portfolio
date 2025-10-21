import React from "react";

const projects = [
  {
    title: ' Text-to-Image Generator',
    desc: 'Advanced web application using Stable Diffusion models for generating high-quality images from text prompts. Features include batch processing, style transfer, and real-time preview.',
    tech: ['Python', 'Django', 'Stable Diffusion', 'GAN', 'CLIP'],
    features: ['Real-time image generation', 'Style transfer capabilities', 'Batch processing', 'User authentication'],
    github: '#',
    demo: '#'
  },
  {
    title: ' E-Commerce Web Application',
    desc: 'Complete e-commerce solution with modern UI, secure payment integration, inventory management, and admin dashboard. Built with microservices architecture.',
    tech: ['React', 'FastAPI', 'MySQL',],
    features: ['Secure payment processing', 'Real-time inventory', 'Admin dashboard', 'Responsive design'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Hashtag Prediction',
    desc: 'Machine learning-powered system that analyzes social media content and suggests relevant hashtags using TF-IDF vectorization and k-NN algorithms.',
    tech: ['Python', 'KNN', 'TF-IDF', 'Flask',],
    features: ['Content analysis', 'Hashtag suggestions', 'Trending topics', 'API integration'],
    github: '#',
    demo: '#'
  },

];

export default function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Featured Projects</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
        A showcase of my recent work spanning full-stack development, machine learning, and modern web applications
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            
            <div className="tech-stack">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-features">
              <h4 style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginBottom: '8px' }}>Key Features:</h4>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', paddingLeft: '20px' }}>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-links">
              <a href={project.github} className="btn-primary" onClick={e => e.preventDefault()}>
                <span>📁</span> View Code
              </a>
              <a href={project.demo} className="btn-secondary" onClick={e => e.preventDefault()}>
                <span>🚀</span> Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}