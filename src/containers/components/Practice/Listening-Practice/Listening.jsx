import React, { useState, useEffect } from 'react';
import './listening.css';
import AudioPlayer from '../../Audio-Player/AudioPlayer';
import ListeningQuestions from './ListeningQuestions';
import practicecommonstyles from '../practiceCommon.module.css';
import PdfViewerComponent from '../../PdfViewerComponent';
import { Container } from "reactstrap";

const Listening = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState('pdfViewer'); // Initialize the active tab state
  const isMobileView = window.innerWidth <= 768;

  useEffect(() => {
    const handleScroll = () => {
      const audioPlayerContainer = document.getElementById('audioPlayerContainer');
      const offset = audioPlayerContainer.offsetTop + audioPlayerContainer.offsetHeight-50;
      setIsSticky(window.pageYOffset >= offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (<>
    <style>{`
      .rhap_container{
        padding-top: 5px;
        padding-bottom: 5px;
      }

      @media only screen and (max-width: 767px) {
        .rhap_container {
          padding-top: 0.7px;
          padding-bottom: 5px;
      }
      }
    `}</style>
    <Container fluid>
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
              <AudioPlayer youtubeVideoID="uI_JZ-9_1bw" />
            </div>
            <div className="tab-container">
              <button
                className={`tab-button ${activeTab === 'pdfViewer' ? 'active' : ''}`}
                onClick={() => setActiveTab('pdfViewer')}
              >
                Paper View
              </button>
              <button
                className={`tab-button ${activeTab === 'listeningQuestions' ? 'active' : ''}`}
                onClick={() => setActiveTab('listeningQuestions')}
              >
                Digital View
              </button>
            </div>
            <div className="tab-content">
              {activeTab === 'pdfViewer' && <PdfViewerComponent document="/document.pdf" />}
              {activeTab === 'listeningQuestions' && <ListeningQuestions />}
            </div>
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
    </Container>
    </>);
};

export default Listening;
