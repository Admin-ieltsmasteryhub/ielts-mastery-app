import React from 'react';
import "./aboutus.css";
import practicecommonstyles from '../Practice/practiceCommon.module.css'

const AboutExam = ({ title, updateDate, author, image, article }) => {
    return (
        <div className='container'>
      <div className={practicecommonstyles.practice_page_container}>
        <div className={practicecommonstyles.practice_page_child1}>
            <div className={practicecommonstyles.practice_page_title}>
          <h1>{title}</h1>
          </div>
          <p>Updated on {updateDate} by {author}</p>
{image && <img src={image} alt="Article" />}
<div className="article-content"  dangerouslySetInnerHTML={{ __html: article }}>
</div>
        </div>
        <div className={practicecommonstyles.practice_page_child2}>
          <h2>Related Posts</h2>
          {/* Add your related posts content here */}
        </div>
      </div>
      </div>
    );
  };

export default AboutExam;
