import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import {  FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import "../styles/HeroPage.css";
import profilePic from "../Images/mypic.jpg";
import cvFile from "../Documents/N190699_resume.pdf"; // Add your CV file in the "Documents" folder

const HeroPage= () => {
  return (
    <>
    

      <Container fluid className="hero d-flex align-items-center">
        <Row className="w-100 text-center text-md-start">
          <Col xs={12} md={6} className="text-section d-flex flex-column justify-content-center align-items-center align-items-md-start px-4">
            <h1 className="text-wrap text-center text-md-start">
              Hello, I am <span className="name-highlight">Sumalatha</span>
            </h1>
            <p className="about-text text-center text-md-start">
            I’m a Computer Science student who loves turning ideas into reality through code. Whether it’s crafting sleek web applications or solving tough challenges, I enjoy every step of the process. Always exploring, always building <i>let’s create something incredible!</i>
            </p>
            <div className="social-icons d-flex justify-content-center justify-content-md-start">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/vanamu-sumalatha-38aba2227/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Vanamu-Sumalatha" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <div className="mt-3 d-flex justify-content-center justify-content-md-start">
  <Button className="hire-me-btn me-2">Hire Me</Button>
  <a href={cvFile} download="Sumalatha_CV.pdf">
    <Button className="download-cv-btn">Download CV</Button>
  </a>


              
            </div>
          </Col>

          <Col xs={12} md={6} className="profile-pic-container d-flex justify-content-center align-items-center mt-4 mt-md-0">
            <img src={profilePic} alt="Sumalatha" className="profile-pic img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroPage;
