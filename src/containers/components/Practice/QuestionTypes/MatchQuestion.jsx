import React from 'react';

const MatchQuestion = ({ question }) => {
  const { text, questions, matches } = question;

  return (
    <div className="question">
      <p className="question-text">{text}</p>
      <div className="match-question">
        <ol>
          {questions.map((question) => (
            <p >
              {question}
            </p>
          ))}
        </ol>
        <div className="matches">
          <ul>
            {matches.map((match, index) => (
              <li key={index}>{match}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MatchQuestion;
