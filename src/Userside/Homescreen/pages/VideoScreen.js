import React from 'react';
import '../../../css/videohomescreen.css';

const VideoScreen = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="text-center">
     
        <iframe 
        className='video-screen'
          src="https://www.youtube.com/embed/ukhT2KLRsYw" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default VideoScreen;
