import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

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
    title: "CComprehensive Study Materials",
    desc: "Gain access to a wide range of comprehensive study materials, including practice exercises, sample essays, and interactive learning resources, ensuring a well-rounded and effective preparation for your IELTS exam.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
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
