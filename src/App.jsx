import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/styles.css"; // Import global styles

export default function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Website Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About, Skills, Projects, Internships, Contact */}
        <div className="container">
          <About />
          <Skills />
          <Projects />
          <Internships />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
