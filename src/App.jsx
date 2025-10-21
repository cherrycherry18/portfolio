import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "./styles/styles.css"; // Import global styles

export default function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Layout with Sticky Profile */}
      <div className="main-layout">
        {/* Sticky Profile Sidebar */}
        <Profile />

        {/* Main Website Sections */}
        <main className="main-content">
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
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
