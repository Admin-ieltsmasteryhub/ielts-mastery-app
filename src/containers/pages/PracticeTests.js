import React, { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterCopyright from "../components/Footer-Copyright/FooterCopyright";
import Tests from "../components/Practice/Practice-Tests-Library/Tests";

const PracticeTests = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Fragment>
      <Header />
      <Tests/>
      <Footer />
      <FooterCopyright />
    </Fragment>
  );
};

export default PracticeTests;
