import React from 'react';
import styles from './posts.module.css';
import { Link } from 'react-router-dom';

function TestLibCard({ id, title, postDate, content, readCount }) {
  return (
    <Link to={`/blog/${id}`} className={styles.post_link}>
      <div className={styles.post_card}>
        <h3 className={styles.post_title}>{title}</h3>
        <p className={styles.post_date}>Published on: {postDate}</p>
        <p className={styles.post_content}>{content}</p>
        <div className={styles.read_count_container}>
          <span className={styles.read_count_label}>Read Count:</span>
          <span className={styles.read_count_value}>{readCount}</span>
        </div>
      </div>
    </Link>
  );
}

export default TestLibCard;