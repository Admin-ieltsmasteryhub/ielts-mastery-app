import React from 'react';
import './diagramquestion.css';

const TextboxInputQuestion = ({ question, onChange, value }) => {
    const handleInputChange = (event) => {
        onChange(event.target.value);
      };

  return (
    <div className="question">
      <p className="question-text">
        <span className="question-number">{question.number}</span>
        <span>{question.text}</span>
      </p>
      <div className="diagram-question">
        <div>
          <input
            type="text"
            onChange={handleInputChange}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default TextboxInputQuestion;
