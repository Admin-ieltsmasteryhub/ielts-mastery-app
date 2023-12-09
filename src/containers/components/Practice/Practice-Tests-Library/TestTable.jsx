// Example usage in your component
import React from 'react';
import styles from './teststable.module.css';
import PostButton from '../../Button/Button';
import {useNavigate} from "react-router-dom";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import NavButton from '../../NavLink/NavLink';

function TestTable() {
  const navigate = useNavigate(); 
  const testData = [
    { id: 1, name: 'Test 1', datePublished: '2023-01-01', difficulty: 'easy', testsTaken: 100 },
    { id: 2, name: 'Test 2', datePublished: '2023-02-01', difficulty: 'medium', testsTaken: 150 },
    { id: 3, name: 'Test 3', datePublished: '2023-03-01', difficulty: 'hard', testsTaken: 80 },
  ];

  const handleStartTest = (id) => {
    console.log("click worked"+ id);
    return navigate(`/blog/${id}`);
  }

  const handleViewSolutions = (id) => {
    console.log("click worked"+ id);
    return navigate(`/blog/${id}`);
  }

  return (
    <div className={styles.table_container}>
      <table className={styles.test_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Published</th>
            <th>Difficulty</th>
            <th>Tests Taken</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {testData.map(test => (
            <tr key={test.id}>
              <td>{test.name}</td>
              <td>{test.datePublished}</td>
              <td className={`${styles.difficulty} ${styles[test.difficulty]}`}>
                <span></span>
                {test.difficulty}
              </td>
              <td>{test.testsTaken}</td>
              <td className={styles.testtable_icons}>
              <NavButton linkText='Start Test' icon={<PlayArrowOutlinedIcon sx={{ fontSize: 'large' ,alignItems: 'center' }}/>} onClick={() => handleStartTest(test.id)} />
              <NavButton linkText='Solution' icon={<TipsAndUpdatesOutlinedIcon sx={{ fontSize: 'large' ,alignItems: 'center', marginLeft:'9px' }}/>} onClick={() => handleViewSolutions(test.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestTable;
