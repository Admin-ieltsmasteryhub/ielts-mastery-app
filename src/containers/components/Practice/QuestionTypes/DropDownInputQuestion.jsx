import React from 'react';
import './diagramquestion.css';

const DropDownInputQuestion = ({ question, onChange, value }) => {
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
          {question.options && question.options.length > 0 ? (
            <select onChange={handleInputChange} value={value}>
              {question.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <select onChange={handleInputChange} value={value}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownInputQuestion;
