
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
          <Route path="/about-IELTS/:title" element={<Article />} /> 
          <Route path="/Writing/essayevaluator" element={<EssayPractice />} />
          <Route path="/Listening/listeningexercise" element={<ListeningPractice/>} />
          <Route path="/Reading/readingexercise" element={<ReadingPractice/>} />
          <Route path="/dictionary" element={<Dictionary/>} />
          <Route path="/vocabulary/synonymsantonyms" element={<SynonymsAntonymsPage/>} />
          <Route path="/vocabulary/idioms" element={<IdiomsPage/>} />
          <Route path="/vocabulary/vocabularybuilding" element={<VocabularyPractice/>} />
        </Routes>
      </Router>
    );
  };

export default AppRoutes;
  