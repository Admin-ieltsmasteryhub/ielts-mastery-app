import React, { useState, useEffect } from 'react';
import './listening.css';
import AudioPlayer from '../../Audio-Player/AudioPlayer';
import ListeningQuestions from './ListeningQuestions';
import practicecommonstyles from '../practiceCommon.module.css'

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
      <div className={practicecommonstyles.practice_page_container}>
      <div className={practicecommonstyles.practice_page_child1}>
        <div>
          <div className={practicecommonstyles.practice_page_title}>
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
      </div>
      <div className={practicecommonstyles.practice_page_child2}>
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
