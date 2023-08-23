import React, { useState } from 'react';
import './dictionarypage.css'; // Import your custom CSS file

const DictionaryPage = () => {
  const [searchWord, setSearchWord] = useState('');
  const [wordDetails, setWordDetails] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
      const data = await response.json();
      setWordDetails(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="dictionary-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a word"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {wordDetails && wordDetails.map((wordDetail, index) => (
        <div key={index} className="word-card">
          <h2>{wordDetail.word}</h2>
          <div className="phonetics">
            <h3>Phonetics</h3>
            <ul>
              {wordDetail.phonetics.map((phonetic, phoneticIndex) => (
                <li key={phoneticIndex}>
                  <p>Text: {phonetic.text}</p>
                  <p>Pronunciation: {phonetic.audio ? phonetic.audio.split('-')[1] : 'N/A'}</p>
                  {phonetic.audio && <audio controls src={phonetic.audio}></audio>}
                </li>
              ))}
            </ul>
          </div>
          <div className="meanings">
            <h3>Meanings</h3>
            {wordDetail.meanings.map((meaning, meaningIndex) => (
              <div key={meaningIndex} className="meaning">
                <h4>Part of Speech: {meaning.partOfSpeech}</h4>
                <ul>
                  {meaning.definitions.map((definition, definitionIndex) => (
                    <li key={definitionIndex}>
                      <p>Definition: {definition.definition}</p>
                      {definition.example && <p>Example: {definition.example}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="details">
            <p>License: <a href={wordDetail.license.url} target="_blank" rel="noopener noreferrer">{wordDetail.license.name}</a></p>
            <p>Source URLs: {wordDetail.sourceUrls.map((url, urlIndex) => <a key={urlIndex} href={url} target="_blank" rel="noopener noreferrer">{url}</a>)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DictionaryPage;
