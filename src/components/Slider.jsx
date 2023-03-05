import React, { useState } from 'react';
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";
import data from '../data.json';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data.map(item => item.pictures).flat(); // récupération de toutes les images dans le fichier data.json

  const previousImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <button onClick={previousImage}>
        <img className="button_img--left" src={ArrowLeft} alt="arrowleft" />
      </button>
      <button onClick={nextImage}>
        <img className="button_img--right" src={ArrowRight} alt="arrow-right" />
      </button>
      <span className="carroussel__number">{currentIndex + 1} / {images.length}</span>
      <img src={images[currentIndex]} alt="banner" />
    </div>
  );
};

export default Slider;
