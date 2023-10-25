import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assets/images/why-choose-us.png";
import styles from "./choose_us.module.css";
import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className={styles.section_chooseus}>
      <Container fluid>
        <Row>
          <Col lg="6" md="6">
            <div className={styles.choose__content}>
              <div className={styles.choose__content_h}>Why Choose Us</div>
              <div className={styles.choose__content_p}>
              Choose us for your IELTS preparation because we offer personalized study plans, experienced tutors, realistic practice tests, and proven strategies. Our focus is on your success, providing you with the confidence and skills needed to excel in the IELTS exam and achieve your desired results.
              </div>
              
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={styles.choose__img}>
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt=""/>
              )}

              {!showVideo && (
                <span className={styles.play__icon}>
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
