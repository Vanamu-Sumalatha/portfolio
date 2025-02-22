import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/HeroPage.css";

import PortfolioNavbar from "./components/PortfolioNavbar";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <PortfolioNavbar />
      <section id="hero"><HeroPage /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;
