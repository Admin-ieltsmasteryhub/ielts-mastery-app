import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-sec-1.png";
import styles from "./hero-section.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.heroContent}>
              <h2 className={styles.heroTitle}>
                Learn on your Suitable Schedule <br/>Anytime Anywhere <br />
              </h2>
              <p className={styles.heroText}>
                Unlock your potential with IELTS Prep through expert guidance,
                comprehensive resources, and personalized support. Start your
                journey today.
              </p>
            </div>
          </Col>

          <Col>
          <div className={styles.hero_sec_container}>
            <img src={heroImg} alt="" className={styles.heroImage} />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
