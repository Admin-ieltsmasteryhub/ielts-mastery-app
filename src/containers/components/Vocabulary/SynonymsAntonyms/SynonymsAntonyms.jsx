
import React, { useState } from 'react';
import './synonymsantonyms.css';
import vocabularycommonstyles from '../vocabularyCommon.module.css';

const SynonymsAntonymsPage = () => {
  const [results, setResults] = useState(dummyResults); // Replace with your API data
  const resultsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const pagesToShow = 5; // Number of pages to show in the pagination

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = results.slice(startIndex, endIndex);

  // Calculate the range of page numbers to display in the pagination
  const totalPages = Math.ceil(results.length / resultsPerPage);
  const halfPagesToShow = Math.floor(pagesToShow / 2);
  let startPage = Math.max(currentPage - halfPagesToShow, 1);
  let endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  // Adjust the startPage if there are not enough pages to show
  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  // Create an array of page numbers to show in the pagination
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) =>
    startPage + index
  );

  return (
    <div className='container'>
      <div className={vocabularycommonstyles.vocabulary_page}>
        <div className={vocabularycommonstyles.vocabulary_page_container}>
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
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={pageNumber === currentPage ? 'active' : ''}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
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
  },  {
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
  },  {
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
  },  {
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
