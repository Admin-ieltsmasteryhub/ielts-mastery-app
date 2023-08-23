import React, { useState } from 'react';
import './synonymsantonyms.css';

const SynonymsAntonymsPage = () => {
  const [results, setResults] = useState(dummyResults); // Replace with your API data
  const resultsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = results.slice(startIndex, endIndex);

  return (
    <div className='container'>
    <div className="sa-page">
    <div className="container_dic">
    <div className="synonyms-antonyms-page">
      <h1>Synonyms and Antonyms</h1>
      <table className="results-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Synonyms</th>
            <th>Antonyms</th>
          </tr>
        </thead>
        <tbody>
          {currentResults.map((result, index) => (
            <tr key={index}>
              <td>{result.word}</td>
              <td>{result.synonyms.join(', ')}</td>
              <td>{result.antonyms.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(results.length / resultsPerPage) }).map((_, index) => (
          <button
            key={index}
            className={index + 1 === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default SynonymsAntonymsPage;

const dummyResults = [
  // Sample data
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  {
    word: 'Happy',
    synonyms: ['Joyful', 'Content', 'Ecstatic'],
    antonyms: ['Sad', 'Unhappy', 'Miserable'],
  },
  // Add more data items here
];
