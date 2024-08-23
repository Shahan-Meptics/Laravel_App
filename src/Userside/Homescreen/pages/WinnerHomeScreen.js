


import React, { useState } from 'react';

import '../../../css/winnerhomescreen.css'; // Ensure you have this CSS file for styling

import image1 from '../../../assets/w1.png';
import image2 from '../../../assets/w2.png';
import image3 from '../../../assets/w3.png';

const images = [
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
];

const WinnerHomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 7; // Number of images to show at once

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= images.length - visibleImagesCount + 1 ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? images.length - visibleImagesCount : newIndex;
    });
  };

  return (
    <>
      <div style={{ position: 'relative', zIndex: '1', top: '-40px' }} className='d-flex justify-content-between container'>
        <h1 style={{ fontSize: '2.5rem', marginTop: '5px' }}>Winners</h1>

        <div className='d-flex align-items-center'>
          <span className='fa fa-chevron-left' onClick={handlePrev} style={{ cursor: 'pointer', fontSize: '2.3rem', color: 'black', marginRight: '10px' }}>
            <i className="">See all</i>
          </span>
          <span className='fa fa-chevron-right' onClick={handleNext} style={{ cursor: 'pointer', fontSize: '2.3rem', color: '#004CFF' }}>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </span>
        </div>
      </div>

      <div className="container winner-home-screen-container">
        <div className="image-slider">
          <div className="image-wrapper" style={{ transform: `translateX(-${(currentIndex * (100 / visibleImagesCount))}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="image-item">
                <img style={{ borderRadius: '100%' }} src={image} alt={`Image ${index + 1}`} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WinnerHomeScreen;
