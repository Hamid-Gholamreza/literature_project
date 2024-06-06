// src/components/AudioPlayer.js

import React, { useEffect } from 'react';
import picture from '../images/audio-background.jpg';
import audio from '../audios/Khayyam-audio1.m4a'; // Your audio file path

function AudioPlayer() {

    const handleLoadedData = () => {
        const audioElement = document.querySelector('audio-player');
        audioElement.play();
      };
      
      const handleError = (event) => {
        console.error('Error loading media:', event.target.error);
      };


  return (
    <div>
      <div className="audio-background">
        <img src={picture} alt="" />
      </div>
      <div className="audio-container">
        <audio controls className="audio-player" onLoadedData={handleLoadedData} onError={handleError} >
            <source src={picture} />
        </audio>
      </div>
    </div>
  );
}

export default AudioPlayer;
