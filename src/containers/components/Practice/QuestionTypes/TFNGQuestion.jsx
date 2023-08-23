import React from 'react';

const TFNGQuestion = ({ question, onChange, selectedOption }) => {
  const handleOptionChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="question">
      <p className="question-text">
        <span className="question-number">{question.number}</span>
        <span>{question.text}</span>
      </p>
      <div className="tfng-options">
        <label>
          <input
            type="radio"
            name={`tfng_${question.number}`}
            value="True"
            checked={selectedOption === 'True'}
            onChange={handleOptionChange}
          />
          True
        </label>
        <label>
          <input
            type="radio"
            name={`tfng_${question.number}`}
            value="False"
            checked={selectedOption === 'False'}
            onChange={handleOptionChange}
          />
          False
        </label>
        <label>
          <input
            type="radio"
            name={`tfng_${question.number}`}
            value="Not Given"
            checked={selectedOption === 'Not Given'}
            onChange={handleOptionChange}
          />
          Not Given
        </label>
      </div>
    </div>
  );
};

export default TFNGQuestion;
