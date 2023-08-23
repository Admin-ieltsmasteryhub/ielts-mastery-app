import React from 'react';
import Essay from '../components/Practice/Essay-Practice/Essay';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterCopyright from '../components/Footer-Copyright/FooterCopyright';
import images from '../assets/images/about-us.png';
import ielts1 from '../assets/images/what-is-IELTS-1.jpg'

const EssayPractice = () => {
  return (
    <div>
      <Header />
      <Essay/>
      <Footer />
      <FooterCopyright />
    </div>
  );
};

export default EssayPractice;
