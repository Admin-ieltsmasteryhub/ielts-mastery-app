import React from 'react';
import '../Listening-Practice/listeningquestions.css';

const MCQMultiQuestions = ({ question, onChange, selectedOptions }) => {
  const handleOptionChange = (event) => {
    const option = event.target.value;
    if (event.target.checked) {
      // If the checkbox is checked, add the option to the selectedOptions array
      onChange([...selectedOptions, option]);
    } else {
      // If the checkbox is unchecked, remove the option from the selectedOptions array
      onChange(selectedOptions.filter((item) => item !== option));
    }
  };

  return (
    <div className="question">
      <p className="question-text">
        <span className="question-number">{question.number}</span>
        <span>{question.text}</span>
      </p>
      <ul>
        <div className="mcq-options">
          {question.options &&
            question.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions.includes(option)}
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

export default MCQMultiQuestions;
