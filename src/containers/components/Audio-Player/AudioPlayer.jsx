import React from 'react';
import ReactPlayer from 'react-player';
import './audioplayer.css'; // Import the CSS file for styling
import ielts11 from '../../assets/audios/ielts11.mp3';

const AudioPlayer = () => {
  return (
    <audio src={ielts11} controls style={{ width: '100%' }} className="audio-player"
    ></audio>
  );
};

export default AudioPlayer;
