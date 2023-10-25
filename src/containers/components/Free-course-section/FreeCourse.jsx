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
    <section>
      <Container>
        <Row>
          <Col>
            <div className={styles.free__course__title}>
            <div className={styles.title}>Our Free Courses</div>
            </div>
          </Col>
          {freeCourseData.map((item) => (
            <Col md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
