// Slideshow.js
import React, { useEffect, useState } from 'react';
import './Slideshow.css';

import image1 from "../images/image1.jpg"
//import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';


const Slideshow = () => {

    const images = [image1, image3,image4];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]); 

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === slideIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
