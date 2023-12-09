import React, { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterCopyright from "../components/Footer-Copyright/FooterCopyright";
import TestLibrary from "../components/Practice/Practice-Tests-Library/TestLibrary"

const PracticeTestLib = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Fragment>
      <Header />
      <TestLibrary title="Recent Posts" searchQuery={searchQuery} />
      <TestLibrary title="Top Posts" searchQuery={searchQuery} />
      <Footer />
      <FooterCopyright />
    </Fragment>
  );
};

export default PracticeTestLib;
