import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";
import Testimonial from "../components/Testimonials/Testimonial";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import FooterCopyright from "../components/Footer-Copyright/FooterCopyright";



const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Courses />
      <ChooseUs />
      <Features />
      <CompanySection />
      {/* <AboutUs /> */}
      
      <FreeCourse />
      <Testimonial />
      <Newsletter />
      <Footer />
      <FooterCopyright />
    </Fragment>
  );
};

export default Home;
