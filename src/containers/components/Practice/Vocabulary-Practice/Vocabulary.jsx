import React, { useState } from 'react';
import './vocabulary.css';
import QuizQuestion from '../QuestionTypes/QuizQuestion'; // Import the extracted component
import DictionaryDetails from '../../DictionaryDetails/DictionaryDetails';
import vocabularycommonstyles from '../../Vocabulary/vocabularyCommon.module.css'

const Vocabulary = () => {
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
      correctAnswer: 'Mars',
    },
    // Add more question objects here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctWord, setCorrectWord] = useState(null);

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setCorrectWord(null); // Reset the correct word for the next question
  };

  const handlePrevQuestion = () => {
    setCurrentIndex(currentIndex - 1);
    setCorrectWord(null); // Reset the correct word for the previous question
  };

  const handleCorrectAnswer = (word) => {
    setCorrectWord(word); // Set the correct word if the answer is correct
  };

  return (
    <div className="container">
      <div className={vocabularycommonstyles.vocabulary_page}>
        <div className={vocabularycommonstyles.vocabulary_page_container}>
          <h1>Vocabulary Trainer</h1>
          {currentIndex >= 0 && currentIndex < quizData.length ? (
            <QuizQuestion
              question={quizData[currentIndex].question}
              options={quizData[currentIndex].options}
              correctAnswer={quizData[currentIndex].correctAnswer}
              onCorrectAnswer={handleCorrectAnswer} // Pass the handler to the QuizQuestion
            />
          ) : (
            <p>Congratulations! You have completed the quiz.</p>
          )}
          <div className="navigation-buttons">
            {currentIndex > 0 && (
              <button onClick={handlePrevQuestion}>Previous</button>
            )}
            {currentIndex < quizData.length - 1 && (
              <button onClick={handleNextQuestion}>Next</button>
            )}
          </div>
          {correctWord && (
            <div>
              <DictionaryDetails word={correctWord} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
