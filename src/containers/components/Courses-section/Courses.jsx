import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import styles from "./courses.module.css";
import CourseCard from "./CourseCard";
import { HiArrowRight } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: false,
  };
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  return (
    
    <>
    <style>{`
     .slick-dots {
      list-style: disc;
      justify-content: center;
      align-items: center;
      padding: 0;
      position: relative;
      bottom: 0px;
      margin:0 3px;
    }
    .slick-dots li{
      margin:0px;
    }

    .slick-dots li button:before{
      font-size:10px;
      margin:0;
    }

    .slick-dots li.slick-active button:before{
      color:#D81632;
    }
      `}</style>
      <Container fluid className={styles.courses_sec_container}>
        <Row >
            <div className={styles.centered_content}>Our Popular Courses</div>
            <div className={styles.centered_content_p}>
              Unlock your potential with IELTS Mastery Hub. Achieve success in
              the IELTS exam through expert guidance, comprehensive resources,
              and personalized support. Start your journey today.
            </div>
          
            <NavLink className={styles.course_all_link} to={'/dictionary'}>View All Courses</NavLink>
            {!isMobileView ? <>
          {coursesData.map((item) => (
            <Col md="3" key={item.id}>
              <CourseCard item={item} />
            </Col>
            
          ))}</>: 

          <Slider {...settings}>
            {coursesData.map((item) => (
              <Col md="12" key={item.id}>
                <CourseCard item={item} />
              </Col>
            ))}
          </Slider>
          };
        </Row>
      </Container>
    </>
  );
};

export default Courses;
