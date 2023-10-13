import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import styles from "./courses.module.css";
import CourseCard from "./CourseCard";
import { HiArrowRight } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container fluid>
        <Row >
          <div className={styles.centered_content}>
            <h2>Our Popular Courses</h2>
            <p>
              Unlock your potential with IELTS Mastery Hub. Achieve success in
              the IELTS exam through expert guidance, comprehensive resources,
              and personalized support. Start your journey today.
            </p>
          </div>
          <Col lg="12" className={styles.course_all_link}>
            <NavLink to={'/dictionary'}>View All <HiArrowRight></HiArrowRight></NavLink>
          </Col>
          {coursesData.map((item) => (
            <Col lg="3" md="8" sm="8" key={item.id}>
              <CourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
