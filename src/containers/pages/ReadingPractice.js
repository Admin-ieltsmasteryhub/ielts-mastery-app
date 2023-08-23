import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterCopyright from '../components/Footer-Copyright/FooterCopyright';
import images from '../assets/images/about-us.png';
import ielts1 from '../assets/images/what-is-IELTS-1.jpg'
import Reading from '../components/Practice/Reading-Practice/Reading';

const ReadingPractice = () => {
 
  return (
    <>
    <Header />
    <Reading/>
    <Footer />
    <FooterCopyright />
  </>
  );
};

export default ReadingPractice;
