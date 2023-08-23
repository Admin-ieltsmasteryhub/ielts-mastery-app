import React, { useState, useEffect } from 'react';
import AboutExam from '../components/About-Page/Aboutus';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FooterCopyright from '../components/Footer-Copyright/FooterCopyright';
import images from '../assets/images/about-us.png';
import { useParams } from 'react-router-dom';

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
    // Data for the POST request
    // Make a POST request to fetch the articleData based on the title
    // Replace this with your actual API endpoint and headers
    console.log(title);
    fetch('https://localhost:7284/api/Blog/What%20is%20IELTS%3F', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Update the state with the fetched data
      setArticleData(data);
    })
    .catch(error => {
      console.error('Error fetching article data:', error);
    });
  }, [title]);

  return (
    <div>
      <Header />
      <AboutExam
        title={articleData.title}
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
