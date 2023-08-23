import React from 'react';
import './posts.css';
import { Link } from 'react-router-dom';

function PostCard({ id, title, postDate, content, readCount }) {
  return (
    <Link to={`/blog/${id}`} className="post-link">
      <div className="post-card">
        <h3 className="post-title">{title}</h3>
        <p className="post-date">Published on: {postDate}</p>
        <p className="post-content">{content}</p>
        <div className="read-count-container">
          <span className="read-count-label">Read Count:</span>
          <span className="read-count-value">{readCount}</span>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;