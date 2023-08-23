import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterCopyright from '../components/Footer-Copyright/FooterCopyright';
import images from '../assets/images/about-us.png';
import ielts1 from '../assets/images/what-is-IELTS-1.jpg'
import Vocabulary from '../components/Practice/Vocabulary-Practice/Vocabulary';



const VocabularyPractice = () => {
 
  return (
    <>
    <Header />
    <Vocabulary/>
    <Footer />
    <FooterCopyright />
  </>
  );
};

export default VocabularyPractice;
