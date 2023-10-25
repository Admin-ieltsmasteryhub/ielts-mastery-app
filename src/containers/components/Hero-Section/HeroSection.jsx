import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styles from "./hero-section.module.css";
import PostButton from "../Button/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const HeroSection = () => {
  return (
    <section >
      <Container fluid className={styles.heroSection}>
        <Row>
          <Col>
            <div className={styles.heroContent}>
              <h2 className={styles.heroTitle}>
                Learn on your Suitable Time, <br/>Anytime Anywhere <br />
              </h2>
              <p className={styles.heroText}>
                Unlock your potential with IELTS Prep through expert guidance,
                comprehensive resources, and personalized support. Start your
                journey today.
              </p>
              <div className={styles.hero_action_button}>
                <div className={styles.hero_action_button_text}>Start Your Journey
                <ArrowForwardIcon/></div>
              </div>
            </div>
          </Col>

          {/* <Col>
          <div className={styles.hero_sec_container}>
            <img src={heroImg} alt="" className={styles.heroImage} />
          </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
