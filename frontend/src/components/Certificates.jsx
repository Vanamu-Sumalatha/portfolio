import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cf1 from "../Images/cf1.jpg";
import cf2 from "../Images/cf2.jpg";
import cf3 from "../Images/cf3.jpg";
import "../styles/Certificates.css";

const certificates = [
  { image: cf1 },
  { image: cf2 },
  { image: cf3 },
];

const Certificates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div 
      ref={ref}
      className="certificate-container"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2 className="certificate-title">My Certificates</h2>
      <Carousel interval={3000} indicators={false} controls={true} nextIcon={<span className="carousel-control-next-icon" />} prevIcon={<span className="carousel-control-prev-icon" />}>
        {certificates.map((cert, index) => (
          <Carousel.Item key={index}>
            <motion.div 
              className="certificate-slide"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                className="certificate-img"
                src={cert.image}
                alt={`Certificate ${index + 1}`}
              />
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default Certificates;
