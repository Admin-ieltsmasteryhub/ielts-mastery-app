import React from 'react';
import '../Listening-Practice/listeningquestions.css'

const MCQQuestion = ({ question, onChange, selectedOption }) => {
  const handleOptionChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="question">
      <p className="question-text">
        <span className="question-number">{question.number}</span>
        <span>{question.text}</span>
      </p>
      <ul>
      <div className="mcq-options">
        {question.options.map((option) => (
            <li>
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
          </li>
        ))}
      </div>
      </ul>
    </div>
  );
};

export default MCQQuestion;
