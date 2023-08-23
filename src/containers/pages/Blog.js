import React, { Fragment, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterCopyright from "../components/Footer-Copyright/FooterCopyright";
import SearchBar from "../components/Blog-Components/SearchBar";
import Posts from "../components/Blog-Components/Posts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Fragment>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Posts title="Recent Posts" searchQuery={searchQuery} />
      <Posts title="Top Posts" searchQuery={searchQuery} />
      <Footer />
      <FooterCopyright />
    </Fragment>
  );
};

export default Blog;
