import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterCopyright from '../components/Footer-Copyright/FooterCopyright';
import SynonymsAntonyms from '../components/Vocabulary/SynonymsAntonyms/SynonymsAntonyms';


const SynonymsAntonymsPage = () => {
 
  return (
    <>
    <Header />
    <SynonymsAntonyms/>
    <Footer />
    <FooterCopyright />
  </>
  );
};

export default SynonymsAntonymsPage;
