import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useInView } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import "../styles/Skills.css";

const skillsData = [
  { name: "Java", percentage: 70 },
  { name: "Python", percentage: 50 },
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 80 },
  { name: "JavaScript", percentage: 65 },
  { name: "React", percentage: 75 },
  { name: "SQL", percentage: 85 },
  { name: "MongoDB", percentage: 70 },
  { name: "Excel", percentage: 50 },
  { name: "Figma", percentage: 40 },
];

const Skills = () => {
  const [progress, setProgress] = useState(skillsData.map(() => 0));
  const [visibleSkills, setVisibleSkills] = useState(8);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let currentPercent = 0;
      const maxPercentage = Math.max(...skillsData.map((skill) => skill.percentage));

      const interval = setInterval(() => {
        if (currentPercent >= maxPercentage) {
          clearInterval(interval);
        } else {
          currentPercent += 1;
          setProgress((prevProgress) =>
            prevProgress.map((_, index) =>
              currentPercent <= skillsData[index].percentage ? currentPercent : skillsData[index].percentage
            )
          );
        }
      }, 30);
    }
  }, [isInView]);

  return (
    <Container ref={ref} className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <Row>
        {skillsData.slice(0, visibleSkills).map((skill, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="skill-col">
            <div className="progress-container">
              <CircularProgressbar
                value={progress[index]}
                text={`${progress[index]}%`}
                styles={buildStyles({
                  textColor: "#6F42C1",
                  pathColor: "#6F42C1",
                  trailColor: "#FF4C4C",
                  textSize: "16px",
                })}
              />
            </div>
            <p className="skill-name">{skill.name}</p>
          </Col>
        ))}
      </Row>
      {visibleSkills < skillsData.length && (
        <div className="more-skills-container">
          <Button className="more-skills-btn" onClick={() => setVisibleSkills(skillsData.length)}>
            More Skills
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Skills;
