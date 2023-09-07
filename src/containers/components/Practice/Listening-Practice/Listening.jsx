import React, { useState, useEffect } from 'react';
import './listening.css';
import AudioPlayer from '../../Audio-Player/AudioPlayer';
import ListeningQuestions from './ListeningQuestions';
import ielts11 from '../../../assets/audios/ielts11.mp3';

const Listening = () => {
  const [isSticky, setIsSticky] = useState(false);
  const isMobileView = window.innerWidth <= 768;
  useEffect(() => {
    const handleScroll = () => {
      const audioPlayerContainer = document.getElementById('audioPlayerContainer');
      const offset = audioPlayerContainer.offsetTop + audioPlayerContainer.offsetHeight;
      setIsSticky(window.pageYOffset >= offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container'>
      <div className="article-page">
        <div className={isMobileView ? null :"container_a"}>
          <div className='title_practice_page '>
            <h1>Listening Practice</h1>
            <h5>Get your listening skills evaluated</h5>
          </div>
          <div
            className={`audio-player-container ${isSticky ? 'sticky' : ''}`}
            id="audioPlayerContainer"
          >
            <AudioPlayer youtubeVideoID='uI_JZ-9_1bw'/>
          </div>
          <ListeningQuestions />
        </div>
        <div className="related-container">
          <h2>Four Pillars of IELTS writing</h2>
          <ul>
            <li>Task Response</li>
            <li>Coherence and Cohesion</li>
            <li>Lexical Resource (Vocabulary)</li>
            <li>Grammatical Range & Accuracy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Listening;
