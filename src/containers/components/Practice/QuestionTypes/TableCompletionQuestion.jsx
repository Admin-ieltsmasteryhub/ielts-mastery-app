import React from 'react';
import '../Listening-Practice/listeningquestions.css';

const TableCompletionQuestion = ({ question, onChange,value }) => {
  const handleInputChange = (event, questionNumber) => {
    const { value } = event.target;
    onChange(questionNumber, value);
  };

  return (
    <div className="table-completion-question">
      <p>{question.text}</p>
      <table className="table-completion">
        <thead>
          <tr>
            {question.headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {question.tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cellData, columnIndex) => (
                <td key={columnIndex}>
                  {cellData.includes('__') ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(event) =>
                        handleInputChange(event, cellData.substring (0,2))
                      }
                    />
                  ) : (
                    <span>{cellData}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCompletionQuestion;
