import React, { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DictionaryPage from "../components/Dictionary/DictionaryPage";
import FooterCopyright from "../components/Footer-Copyright/FooterCopyright";
import SearchBar from "../components/Blog-Components/SearchBar";
import Posts from "../components/Blog-Components/Posts";

const Dictionary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header />
      <DictionaryPage/>
      <Footer />
      <FooterCopyright />
    </>
  );
};

export default Dictionary;
