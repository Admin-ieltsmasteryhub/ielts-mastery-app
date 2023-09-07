// import React, { useState, useEffect } from 'react';
// import './listeningquestions.css';
// import Button from '../../Button/Button';

// const ListeningQuestions = () => {
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page number
//   const [answers, setAnswers] = useState({});

//   const handleInputChange = (questionNumber, event) => {
//     const updatedAnswers = { ...answers, [questionNumber]: event.target.value };
//     setAnswers(updatedAnswers);
//   };

//   const handleSubmit = () => {
//     console.log(answers);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, questionsPerPage.length - 1));
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'ArrowLeft') {
//       handlePrevPage();
//     } else if (event.key === 'ArrowRight') {
//       handleNextPage();
//     }
//   };

//   // Add event listener on component mount to listen for key presses
//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyPress);
//     // Clean up the event listener on component unmount
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, []);

//   // Define different sets of questions for each page
//   const questionsPerPage = [
//     [
//       {
//         number: 1,
//         text: 'Question 1 for __ Page 1',
//       },
//       {
//         number: 2,
//         text: 'Question 2 for __ Page 1',
//       },
//       // Add more questions for Page 1
//     ],
//     [
//       {
//         number: 11,
//         text: 'Question 1 __ for Page 2',
//       },
//       {
//         number: 12,
//         text: 'Question 2 __ for Page 2',
//       },
//       // Add more questions for Page 2
//     ],
//     // Add more pages with different sets of questions
//   ];

//   const currentPageQuestions = questionsPerPage[currentPage];

//   return (
//     <>
//       <div className="listening-container">
//         <form>
//           {currentPageQuestions.map((question) => (
//             <div key={question.number} className="question">
//               <p className="question-text">
//                 <span className="question-number">{question.number}</span>
//                 <span>
//                   {question.text.split('__').map((part, index, arr) => {
//                     if (index === arr.length - 1) {
//                       return part;
//                     }
//                     return (
//                       <React.Fragment key={index}>
//                         {part}
//                         <input
//                           type="text"
//                           onBlur={(e) => handleInputChange(question.number, e)}
//                           defaultValue={answers[question.number] || ''}
//                         />
//                       </React.Fragment>
//                     );
//                   })}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </form>
//         <div className="page-navigation">
//           {/* Left arrow for previous page */}
//           <div className="arrow_left" onClick={handlePrevPage}>
//             &#8249;
//           </div>
//           {/* Right arrow for next page */}
//           <div className="arrow_right" onClick={handleNextPage}>
//             &#8250;
//           </div>
//         </div>
//       </div>
//       <Button onClick={handleSubmit} buttonText={"Submit Test"}></Button>
//     </>
//   );
// };

// export default ListeningQuestions;

import React from 'react';
import FormContainer from '../FormContainer';

const ListeningQuestions = () => {
  // Define different sets of questions for each page
  const questionsPerPage = [
    
      {
        number: 1,
        text: 'Question 1 for __ Page 1',
        type: 'fill_in_the_blanks',
      },
      {
        number: 2,
        text: 'Question 2 for __ Page 1',
        type: 'fill_in_the_blanks',
      },
      {
        number: 3,
        text: 'What is the capital of France?',
        type: 'mcq',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
      },
      // Add more questions for Page 1
      {
        number: 11,
        text: 'Question 1 __ for Page 2',
        type: 'fill_in_the_blanks',
      },
      {
        number: 12,
        text: 'Question 2 __ for Page 2',
        type: 'fill_in_the_blanks',
      },
      {
        number: 13,
        text: 'What is the largest planet in our solar system?',
        type: 'mcqmulti',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      },
      {
        number: 14,
        text: 'True or False: The Earth is flat.',
        type: 'tfng',
      },
      // {
      //   number: 15,
      //   text: 'Complete the table based on the information in the passage:',
      //   type: 'table_completion',
      //   headings: ['Species 1', 'Size 2', 'Climate 3','Temp 4'],
      //   tableData: [
      //     ['abcd', 'asdfg', '__' ,'asdfg'],
      //     ['abcd', 'abcd', 'abcd','abcd'],
      //     ['abcd', '__', 'abcd','abcd'],
      //   ],
      // },
      // Add more questions for Page 2
    // Add more pages with different sets of questions
  ];
  

  const handleFormSubmit = (answers) => {
    console.log('Form data submitted:', answers);
    // Add your logic to handle the form data here
  };

  return (
    <>
      <FormContainer questions={questionsPerPage} onSubmit={handleFormSubmit} />
    </>
  );
};

export default ListeningQuestions;
