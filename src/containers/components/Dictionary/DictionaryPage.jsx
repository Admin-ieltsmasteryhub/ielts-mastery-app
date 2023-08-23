import React, { useState } from 'react';
import { FaVolumeUp } from 'react-icons/fa';
import "./dictionarypage.css";
import { toast } from 'react-toastify';
import Button from '../Button/Button';


const DictionaryPage = () => {
  const [searchWord, setSearchWord] = useState('');
  const [wordDetails, setWordDetails] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  const [wordNotFound, setWordNotFound] = useState(false);

  const notify = () => toast.error("Please enter a word to search.",{autoClose: 4000});

  const handleSearch = async () => {
    if (searchWord.trim() === '') {
      notify();
      console.error('Please enter a word to search.');
      return; // Don't proceed if search word is empty
    }
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
      if (response.status === 404) {
        const data = await response.json();
        setWordNotFound(data);
        setWordDetails(null); // Clear any previous data
      } else {
        const data = await response.json();
        setWordDetails(data);
        setWordNotFound(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setWordNotFound(true);
    }
  };
  
  

  const handleToggleAudio = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }
  };

  // Find the first phonetic entry that contains audio
  const firstPhoneticWithAudio = wordDetails?.[0]?.phonetics.find(phonetic => phonetic.audio);

  return (
    <div className='container'>
      <div className="article-page">
        <div className="container_dic">
          <h1>Dictionary</h1>
          <div className='dic_title'>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter a word"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
              <Button onClick={handleSearch} buttonText={"Search"}/>
            </div>
          </div>
          {wordNotFound ? (
              <div className="not-found-message">
                <h2>{wordNotFound.title}</h2>
                <p>{wordNotFound.message}</p>
                <p>{wordNotFound.resolution}</p>
              </div>
            ) : (
          firstPhoneticWithAudio && (
            <div>
              <div className='dic_title'>
                <h2>{wordDetails[0].word}</h2>
                <div className="audio-container">
                  <FaVolumeUp
                    title='Pronunciation'
                    className={`audio-icon ${isPlaying ? 'playing' : ''}`}
                    onClick={handleToggleAudio}
                  />
                  <audio
                    ref={(element) => setAudioRef(element)}
                    src={firstPhoneticWithAudio.audio}
                    onEnded={() => setIsPlaying(false)}
                  ></audio>
                </div>
                <span>{firstPhoneticWithAudio.text}</span>
              </div>
              <div>
                {wordDetails[0].meanings.map((meaning, meaningIndex) => (
                  <div key={meaningIndex} className="dic_title">
                    <h1>{meaning.partOfSpeech}</h1>
                    {meaning.definitions.map((definition, definitionIndex) => (
                      <div key={definitionIndex}>
                        <span><b>Def</b></span>: {definition.definition}
                        {definition.example && <p><em>Example: {definition.example}</em></p>}
                      </div>
                    ))}

                  </div>
                ))}
              </div>
              <div className="details">
                <p>License: <a href={wordDetails[0].license.url} target="_blank" rel="noopener noreferrer">{wordDetails[0].license.name}</a></p>
                {wordDetails[0].sourceUrls.length > 0 && (
                  <p>Source URLs: {wordDetails[0].sourceUrls.map((url, urlIndex) => <a key={urlIndex} href={url} target="_blank" rel="noopener noreferrer">{url}</a>)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;
