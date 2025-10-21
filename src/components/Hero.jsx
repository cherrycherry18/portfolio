import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        {/* MAIN CONTENT */}
        <div className="hero-main">
          <h1>
            Hi, I'm Charan Gubbala<span className="accent">Gubbala Charan</span>
          </h1>
          <p className="lead">
            Associate Software Engineer Intern | MCA Graduate
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
          </div>
          
        </div>
      </div>
    </section>
  );
}
