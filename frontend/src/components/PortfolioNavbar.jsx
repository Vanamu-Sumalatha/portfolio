import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "../styles/HeroPage.css"; // Ensure your CSS is applied

const PortfolioNavbar = () => {
  return (
    <Navbar expand="lg" className="px-3" style={{ backgroundColor: "#F0ECF9" }}>
      <Container>
        <Navbar.Brand href="#" className="navbar-brand">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="hero" smooth={true} duration={500}>Home</Link>
            <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
            <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
            <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
            <Link className="nav-link" to="certificates" smooth={true} duration={500}>Certificates</Link>
            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
