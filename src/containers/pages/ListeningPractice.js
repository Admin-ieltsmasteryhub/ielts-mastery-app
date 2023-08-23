import React from 'react';
import Essay from '../components/Practice/Essay-Practice/Essay';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterCopyright from '../components/Footer-Copyright/FooterCopyright';
import images from '../assets/images/about-us.png';
import ielts1 from '../assets/images/what-is-IELTS-1.jpg'
import Listening from '../components/Practice/Listening-Practice/Listening';

const ListeningPractice = () => {
 
  return (
    <>
    <Header />
    <Listening/>
    <Footer />
    <FooterCopyright />
  </>
  );
};

export default ListeningPractice;
