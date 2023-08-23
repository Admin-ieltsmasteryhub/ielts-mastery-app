import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../Vocabulary-Practice/vocabulary.css';

const QuizQuestion = ({ question, options, correctAnswer, onCorrectAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setIsCorrect(selectedValue === correctAnswer);
    if (selectedValue === correctAnswer) {
      toast('You got it right!');
      onCorrectAnswer(selectedValue); // Pass the selected answer as the word to the handler
    }
  };

  return (
    <div className="quiz-question">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <label
            key={index}
            className={`option ${
              isCorrect === null
                ? ''
                : selectedOption === option
                ? isCorrect
                  ? 'correct'
                  : 'incorrect'
                : ''
            }`}
          >
            <input
              type="radio"
              name={`quiz-option-${question}`}
              value={option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
