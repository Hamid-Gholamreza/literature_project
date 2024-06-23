import React, { useEffect } from 'react';
import picture from '../images/audio-background.jpg';
import audio1 from '../audios/Khayyam-audio1.mp3'; 
import audio2 from '../audios/Khayyam-audio2.mp3'; 
import audio3 from '../audios/Khayyam-audio3.mp3'; 
import audio4 from '../audios/Khayyam-audio4.mp3'; 
import audio5 from '../audios/Khayyam-audio5.mp3'; 

function Audio() {
      
      const handleError = (event) => {
        console.error('Error loading media:', event.target.error);
      };


  return (
    <div>
      <div className="audio-background">
        <img src={picture} alt="" />
      </div>
      <div className="audio-container">
        <audio controls className="audio-player" onError={handleError} >
            <source src={audio1} />
        </audio>
        <p>قسمت اول - رباعیات 1 تا 38</p>
        <audio controls className="audio-player" onError={handleError} >
            <source src={audio2} />
        </audio>
        <p>قسمت دوم - رباعیات 38 تا 74</p>
        <audio controls className="audio-player" onError={handleError} >
            <source src={audio3} />
        </audio>
        <p>قسمت سوم - رباعیات 75 تا 111</p>
        <audio controls className="audio-player" onError={handleError} >
            <source src={audio4} />
        </audio>
        <p>قسمت چهارم - رباعیات 112 تا 148</p>
        <audio controls className="audio-player" onError={handleError} >
            <source src={audio5} />
        </audio>
        <p>قسمت پنجم - رباعیات 149 تا 178</p>
      </div>
    </div>
  );
}

export default Audio;
