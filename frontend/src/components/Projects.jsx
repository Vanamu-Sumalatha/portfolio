import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Projects.css";

const allProjects = [
  {
    title: "Connectify Like Minds",
    description:
      "A social platform designed for students to connect based on academic interests, collaborate on projects, and share learning resources.",
    image: require("../Images/connectify.png"),
    github: "https://github.com/Vanamu-Sumalatha?tab=repositories",
  },
  {
    title: "Loan Application",
    description:
      "An online loan management system that allows users to apply for loans, check eligibility, track application status, and manage repayments.",
    image: require("../Images/loan.png"),
    github: "https://github.com/Vanamu-Sumalatha?tab=repositories",
  },
  {
    title: "Flora Cart",
    description:
      "An online floral e-commerce platform offering beautiful bouquets for all occasions with secure payment and real-time order tracking.",
    image: require("../Images/flower.png"),
    github: "https://github.com/Vanamu-Sumalatha?tab=repositories",
  },
  {
    title: "Sentiment Analysis",
    description:
"Sentiment analysis tool that identifies emotions in text, categorizing them as positive, negative, or neutral for insights into user opinions and trends.", 
image: require("../Images/sentiment-analysis.jpg"),
    github: "https://github.com/Vanamu-Sumalatha?tab=repositories",
  },
  {
    title: "Heart Disease Prediction",
    description:
"Heart disease prediction system that analyzes health data using machine learning to assess risk levels and provide early warning for preventive care.",    image: require("../Images/heart.png"),
    github: "https://github.com/Vanamu-Sumalatha?tab=repositories",
  },
  {
    title: "Portfolio Website",
    description:
"Personal portfolio website showcasing skills, projects, and experience with a responsive design for easy navigation and professional presentation.",    image: require("../Images/portfolio.jpg"),
    github: "https://github.com/Vanamu-Sumalatha?tab=repositories",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  // Intersection Observer for triggering animations when in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // When 20% of the component is in view, trigger
  });

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <Container className="projects-section" ref={ref}>
      <motion.h2 
        className="projects-title"
        initial={{ opacity: 0, y: 30 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <Row>
        {allProjects.slice(0, visibleProjects).map((project, index) => (
          <Col xs={12} sm={6} md={4} key={index} className="project-col">
            <motion.div 
              className="project-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button variant="primary">Source Code</Button>
                  </motion.a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      {visibleProjects < allProjects.length && (
        <motion.div 
          className="load-more-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button className="load-more-btn" onClick={loadMoreProjects}>
            More Projects
          </Button>
        </motion.div>
      )}
    </Container>
  );
};

export default Projects;
