import React from 'react';
import "./Button.css"
function PostButton({ onClick, buttonText }) {
  return (
      <button className="post-button" onClick={onClick}>
        {buttonText}
      </button>
  );
}

export default PostButton;
