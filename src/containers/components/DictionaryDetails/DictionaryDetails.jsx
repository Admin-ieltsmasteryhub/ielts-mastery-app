import React, { useState, useEffect } from 'react';
import { FaVolumeUp } from 'react-icons/fa';
import Button from '../Button/Button';
import "./dictionarydetails.css";

const DictionaryDetails = ({ word }) => {
  const [wordDetails, setWordDetails] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  const [wordNotFound, setWordNotFound] = useState(false);

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

  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (response.status === 404) {
          const data = await response.json();
          setWordNotFound(data);
          setWordDetails(null);
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

    fetchWordDetails();
  }, [word]);

  const firstPhoneticWithAudio = wordDetails?.[0]?.phonetics.find(phonetic => phonetic.audio);

  return (
    <div className='container'>
        <div className="container_renderdic">
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
            )
          )}
        </div>
      </div>
  );
};

export default DictionaryDetails;
