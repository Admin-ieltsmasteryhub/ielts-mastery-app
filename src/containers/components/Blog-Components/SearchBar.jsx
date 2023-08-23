import React from 'react';
import './SearchBar.css'; 
import Button from '../Button/Button';// Import a separate CSS file for custom styling

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <Button buttonText="Search"/>
    </div>
  );
}

export default SearchBar;
