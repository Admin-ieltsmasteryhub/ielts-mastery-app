import React, { useState } from 'react';
import './idioms.css';
import vocabularycommonstyles from '../vocabularyCommon.module.css'

const Idioms = () => {
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
        <div className={vocabularycommonstyles.vocabulary_page_container}>
          <div className="idioms-expressions-page">
            <h1>Idioms and Expressions</h1>
            <table className="results-table">
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Idioms</th>
                  <th>Expressions</th>
                </tr>
              </thead>
              <tbody>
                {currentResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.word}</td>
                    <td>{result.idioms.join(', ')}</td>
                    <td>{result.expressions.join(', ')}</td>
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
  );
};

export default Idioms;

const dummyResults = [
  // Sample data
  {
    word: 'Jump',
    idioms: ['Jump for joy', 'Jump the gun', 'Jump ship'],
    expressions: ['Jump to conclusions', 'Jump down someone\'s throat'],
  },
  // Add more data items here
];
