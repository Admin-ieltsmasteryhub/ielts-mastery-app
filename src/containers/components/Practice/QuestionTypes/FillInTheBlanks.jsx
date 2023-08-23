import React from 'react';
import '../Listening-Practice/listeningquestions.css'

const FormQuestion = ({ question, onChange, value }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="question">
      <p className="question-text">
        <span className="question-number">{question.number}</span>
        <span>
          {question.text.split('__').map((part, index, arr) => {
            if (index === arr.length - 1) {
              return part;
            }
            return (
              <React.Fragment key={index}>
                {part}
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={value}
                />
              </React.Fragment>
            );
          })}
        </span>
      </p>
    </div>
  );
};

export default FormQuestion;
