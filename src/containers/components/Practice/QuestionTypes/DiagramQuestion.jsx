import React from 'react';
import './diagramquestion.css';

const DiagramQuestion = ({ question, onChange, value }) => {

  return (
    <div className="question">
      <p className="question-text">
        <span className="question-number">{question.number}</span>
        <span>{question.text}</span>
      </p>
      <div className="diagram-question">
        <div className="diagram-container">
          <img
            src='/images/kids-learning.png'
            alt="Diagram"
            className='diagram-image'
          />
        </div>
      </div>
    </div>
  );
};

export default DiagramQuestion;
