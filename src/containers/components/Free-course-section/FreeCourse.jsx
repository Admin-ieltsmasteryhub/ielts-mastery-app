import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assets/images/web-development.png";
import courseImg02 from "../../assets/images/kids-learning.png";
import courseImg03 from "../../assets/images/seo.png";
import courseImg04 from "../../assets/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";
import styles from "./free-course.module.css"

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "SEO - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section >
      <Container fluid className={styles.questionssec}>
        <Row>
        <Col><div className={styles.questionform}> This is it</div></Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
