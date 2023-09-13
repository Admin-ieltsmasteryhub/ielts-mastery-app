import React, { useState } from 'react';
import './Listening-Practice/listeningquestions.css';
import FormQuestion from './QuestionTypes/FillInTheBlanks';
import MCQQuestion from './QuestionTypes/MCQQuestion';
import MCQMultiQuestions from './QuestionTypes/MCQMultiQuestion';
import TFNGQuestion from './QuestionTypes/TFNGQuestion';
import TableCompletionQuestion from './QuestionTypes/TableCompletionQuestion';
import DiagramQuestion from './QuestionTypes/DiagramQuestion';
import Button from '../Button/Button';
import TextboxInputQuestion from './QuestionTypes/TextboxInputQuestion';
import MatchQuestion from './QuestionTypes/MatchQuestion'; // Import MatchQuestion component
import DropDownInputQuestion from './QuestionTypes/DropDownInputQuestion';

const FormContainer = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const handleInputChange = (questionNumber, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: answer,
    }));
  };

  // const handleTableCompletionChange = (questionNumber, row, column, value) => {
  //   setAnswers((prevAnswers) => ({
  //     ...prevAnswers,
  //     [questionNumber]: {
  //       ...prevAnswers[questionNumber],
  //       [row]: {
  //         ...prevAnswers[questionNumber]?.[row],
  //         [column]: value,
  //       },
  //     },
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <div className="listening-container">
      <form onSubmit={handleSubmit}>
        {questions.map((question) => {
          if (question.type === 'mcq') {
            return (
              <MCQQuestion
                key={question.number}
                question={question}
                onChange={(answer) => handleInputChange(question.number, answer)}
                selectedOption={answers[question.number] || ''}
              />
            );
          } else if (question.type === 'mcqmulti') {
            return (
              <MCQMultiQuestions
                key={question.number}
                question={question}
                onChange={(answer) => handleInputChange(question.number, answer)}
                selectedOptions={answers[question.number] || []}
              />
            );
          } else if (question.type === 'tfng') {
            return (
              <TFNGQuestion
                key={question.number}
                question={question}
                onChange={(answer) => handleInputChange(question.number, answer)}
                selectedOption={answers[question.number] || ''}
              />
            );
          } else if (question.type === 'table_completion') {
            return (
              <TableCompletionQuestion
                key={question.number}
                question={question}
                onChange={(questionNumber, value) =>
                  handleInputChange(questionNumber, value)
                }
              />
            );
          } else if (question.type === 'diagram') {
            return (
              <DiagramQuestion
                key={question.number}
                question={question}
                onChange={(answer) => handleInputChange(question.number, answer)}
                value={answers[question.number] || ''}
              />
            );
          } else if (question.type === 'textbox_input') {
            return (
              <TextboxInputQuestion
                key={question.number}
                question={question}
                onChange={(answer) => handleInputChange(question.number, answer)}
                value={answers[question.number] || ''}
              />
            );
          }else if (question.type === 'dropdown_input') {
            return (
              <DropDownInputQuestion
              key={question.number}
              question={question}
              onChange={(answer) => handleInputChange(question.number, answer)}
              value={answers[question.number] || ''}
            />

            );
          } else if (question.type === 'match') {
            return (
              <MatchQuestion
                key={question.number}
                question={question}
              />
            );
          } else {
            return (
              <FormQuestion
                key={question.number}
                question={question}
                onChange={(answer) => handleInputChange(question.number, answer)}
                value={answers[question.number] || ''}
              />
            );
          }
        })}
        <Button buttonText={'Submit'}/>
      </form>
    </div>
  );
};

export default FormContainer;
