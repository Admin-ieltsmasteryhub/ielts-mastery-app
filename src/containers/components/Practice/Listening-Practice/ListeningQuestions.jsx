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
      {
        number: 15,
        text: 'Label the Diagram:', // Provide a question prompt
        type: 'diagram',
        imageUrl: 'C:/Source/ielts-mastery-app/src/containers/assets/images/kids-learning.png' // Use the 'diagram' type for DiagramQuestion
      },
      {
        number: 16,
        text: '__',
        type: 'fill_in_the_blanks',
      },
      {
        number: 17,
        type: 'textbox_input',
      },
      {
        text: 'Match the correct statement with the letter',
        type: 'match',
        questions: [
          'Johannes Gutenberg was famous for',
          'What Gutenberg thought to have in invention',
          'Gutenberg thought to have also invented the-',
          'What revolution did the printing press create',
        ],
        matches: ['A Oil-based ink', 
      'B Information revolution', 
      'C Inventing printing press', 
      'D Metal alloy', 
      'E Punch matrix system'],
      },
      {
        number: 18,
        type: 'dropdown_input',
        text: 'Select the correct option:',
        options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
      },
      {
        number: 19,
        text: 'Complete the table based on the information in the passage:',
        type: 'table_completion',
        headings: ['Species 1', 'Size 2', 'Climate 3','Temp 4'],
        tableData: [
          ['abcd', 'asdfg', '__' ,'asdfg'],
          ['abcd', 'abcd', 'abcd','abcd'],
          ['abcd', '__', 'abcd','abcd'],
        ],
      },
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
