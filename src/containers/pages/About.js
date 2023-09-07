import React, { useState, useEffect } from 'react';
import AboutExam from '../components/About-Page/Aboutus';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterCopyright from '../components/Footer-Copyright/FooterCopyright';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Article = () => {
  const { title } = useParams();

  // State to hold the fetched article data
  const [articleData, setArticleData] = useState({
    title: '',
    updateDate: '',
    author: '',
    image: null,
    article: null,
  });

  useEffect(() => {
    // Make a GET request to fetch the articleData based on the title
    // Replace this with your actual API endpoint and headers
    axios.get(`https://localhost:7284/api/Blog/${title}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(response => {
      console.log(response.data);
      // Update the state with the fetched data
      setArticleData(response.data);
    })
    .catch(error => {
      toast.error("Something went wrong!")
      console.error('Error fetching article data:', error);
      
    });
  }, [title]);

  return (
    <div>
      <Header />
      <AboutExam
        title={articleData.title.replaceAll('-',' ')}
        updateDate={articleData.updateDate}
        author={articleData.author}
        image={articleData.image}
        article={articleData.article}
      />
      <Footer />
      <FooterCopyright />
    </div>
  );
};

export default Article;
