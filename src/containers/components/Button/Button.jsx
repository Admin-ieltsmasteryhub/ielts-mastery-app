import React from 'react';
import "./Button.css"
function PostButton({ onClick, buttonText,icon }) {
  return (
      <button className="post-button" onClick={onClick}>
        {buttonText}{icon}
      </button>
  );
}

export default PostButton;
