
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
import TempTest from './containers/pages/TempTest';


const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/blog/:id" element={<BlogPostPage/>} />
          <Route path="/about-IELTS/:title" element={<Article />} /> 
          <Route path="/Writing/essayevaluator" element={<EssayPractice />} />
          <Route path="/Writing/:title" element={<EssayPractice />} />
          <Route path="/Listening/listeningexercise" element={<ListeningPractice/>} />
          <Route path="/Listening/:title" element={<Article/>} />
          <Route path="/Reading/readingexercise" element={<ReadingPractice/>} />
          <Route path="/Reading/:title" element={<Article/>} />
          <Route path="/Speaking/:title" element={<Article/>} />
          <Route path="/Grammer/Essential-grammar-rules" element={<Article/>} />
          <Route path="/Grammer/Common-grammar-mistakes" element={<Article/>} />
          <Route path="/dictionary" element={<Dictionary/>} />
          <Route path="/Vocabulary/synonymsantonyms" element={<SynonymsAntonymsPage/>} />
          <Route path="/Vocabulary/idioms" element={<IdiomsPage/>} />
          <Route path="/Vocabulary/vocabularybuilding" element={<VocabularyPractice/>} />
          <Route path="/Temptest" element={<TempTest/>} />
        </Routes>
      </Router>
    );
  };

export default AppRoutes;
  
