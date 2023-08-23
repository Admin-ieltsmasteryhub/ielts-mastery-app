import React, { useState } from 'react';
import Button from '../../Button/Button';
import "./essay.css";

const Essay = ({ title, updateDate, author, image, article }) => {
  const [essayQuestion, setEssayQuestion] = useState("");
  const [essayAnswer, setEssayAnswer] = useState("");

  return (
    <div className='container'>
      <div className="article-page">
        <div className="container_a">
          <div className='book_test'>
            <h1>Essay Checker</h1>
            <h5>Get your essay evaluated and know band score before real exam</h5>
          </div>
          <div>
            <textarea
              className="essay-question-textarea" // Added CSS class name for the textarea
              placeholder="The Question of Essay"
              value={essayQuestion}
              onChange={(e) => setEssayQuestion(e.target.value)}
            />
            <textarea
              className="essay-answer-textarea"// Added CSS class name for the textarea
              placeholder="Your essay"
              value={essayAnswer}
              onChange={(e) => setEssayAnswer(e.target.value)}
            />
            </div>
            <Button buttonText={"Check Essay!!"}/>
        </div>
        <div className="related-container">
          <h2>Four Pillars of IELTS writing </h2>
          <ul>
            <li>Task Response</li>
            <li>Coherence and Cohesion</li>
            <li>Lexical Resource (Vocabulary)</li>
            <li>Grammatical Range & Accuracy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essay;
