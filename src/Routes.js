
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/pages/Home';
import Blog from './containers/pages/Blog';
import BlogPostPage from './containers/components/Blog-Components/BlogPostPage';
import Article from './containers/pages/About';
import EssayPractice from './containers/pages/EssayPractice';
import ListeningPractice from './containers/pages/ListeningPractice';
import ReadingPractice from './containers/pages/ReadingPractice';
import Dictionary from './containers/pages/Dictionary';
import SynonymsAntonymsPage from './containers/pages/SynonymsAntonyms';
import IdiomsPage from './containers/pages/Idioms';
import VocabularyPractice from './containers/pages/VocabularyPractice';


const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/blog/:id" element={<BlogPostPage/>} />
          <Route path="/about/:title" element={<Article />} />
          <Route path="/EssayPractice" element={<EssayPractice />} />
          <Route path="/ListeningPractice" element={<ListeningPractice/>} />
          <Route path="/ReadingPractice" element={<ReadingPractice/>} />
          <Route path="/Dictionary" element={<Dictionary/>} />
          <Route path="/SynonymsAntonyms" element={<SynonymsAntonymsPage/>} />
          <Route path="/Idioms" element={<IdiomsPage/>} />
          <Route path="/VocabularyPractice" element={<VocabularyPractice/>} />
        </Routes>
      </Router>
    );
  };

export default AppRoutes;
  