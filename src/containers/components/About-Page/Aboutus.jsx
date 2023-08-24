import React from 'react';
import "./aboutus.css";

const AboutExam = ({ title, updateDate, author, image, article }) => {
    return (
        <div className='container'>
      <div className="article-page">
        <div className="container_a">
            <div className='book_test'>
          <h1>{title}</h1>
          </div>
          <p>Updated on {updateDate} by {author}</p>
{image && <img src={image} alt="Article" />}
<div className="article-content"  dangerouslySetInnerHTML={{ __html: article }}>
</div>
        </div>
        <div className="related-container">
          <h2>Related Posts</h2>
          {/* Add your related posts content here */}
        </div>
      </div>
      </div>
    );
  };

export default AboutExam;
