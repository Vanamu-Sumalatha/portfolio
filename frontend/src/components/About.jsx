import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/About.css";
import profilePic from "../Images/mypic2.jpg";
import cvFile from "../Documents/N190699_resume.pdf";

const About = () => {
  return (
    <Container fluid className="about-section text-center">
      {/* Title Animation */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Description Animation */}
      <motion.p
        className="about-description"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        I am a Computer Science student with strong programming and problem-solving skills.
        Proficient in various programming languages and web technologies, I enjoy developing efficient applications. 
        I thrive on innovative projects that push my limits and foster continuous learning. My goal is to contribute to the tech industry 
        by building impactful solutions that improve lives. I am eager to embrace new opportunities to enhance my skills and grow professionally.
      </motion.p>

      <Row className="justify-content-center align-items-center">
        {/* Left - Profile Picture Animation */}
        <Col xs={12} md={5} className="text-center">
          <motion.div
            className="profile-img-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={profilePic} alt="Sumalatha" className="profile-img animate-img" />
          </motion.div>
        </Col>

        {/* Right - About Me Content Animation */}
        <Col xs={12} md={7} className="text-md-start text-center">
          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p><strong>Name:</strong> Vanamu Sumalatha</p>
            <p><strong>Phone:</strong> +91 123456789</p>
            <p><strong>Degree:</strong> B.Tech, CSE</p>
            <p><strong>Email:</strong> <a href="mailto:sumalathavanamu@gmail.com">sumalathavanamu@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vanamu-sumalatha-38aba2227/" target="_blank" rel="noopener noreferrer">View Profile</a></p>
          </motion.div>

          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button href={cvFile} download="Sumalatha_CV.pdf" className="download-btn">
              Download CV
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
