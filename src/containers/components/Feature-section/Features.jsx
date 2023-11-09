import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./features.module.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our structured learning approach and expert guidance enable you to grasp complex concepts efficiently, making your IELTS preparation time-effective and accelerating your progress.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Our dedicated support team is available round the clock to address your queries, provide feedback on practice tests, and offer personalized assistance at every step of your IELTS journey.",
    icon: "ri-discuss-line",
  },

  {
    title: "Comprehensive Study Materials",
    desc: "Gain access to a wide range of comprehensive study materials, including practice exercises, sample essays, and interactive learning resources, ensuring a well-rounded and effective preparation for your IELTS exam.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section >
      <Container fluid className={styles.features_section}>
        <Row>
        <div className={styles.choose__content}>
              <h2>Key Features</h2>
            </div>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index} className="d-flex align-items-stretch">
              <div className={styles.single__feature}>
                <h6> <i class={item.icon}></i>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
