import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterCopyright from '../components/Footer-Copyright/FooterCopyright';
import Idioms from '../components/Vocabulary/Idioms/Idioms';



const IdiomsPage = () => {
 
  return (
    <>
    <Header />
    <Idioms/>
    <Footer />
    <FooterCopyright />
  </>
  );
};

export default IdiomsPage;
