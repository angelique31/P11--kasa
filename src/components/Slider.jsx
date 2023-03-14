import React, { useState } from "react";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";

/**
 * Composant Slider permettant d'afficher un carrousel d'images avec des flèches de navigation.
 * @param {Object} props - Les props du composant.
 * @param {Array} props.images - Un tableau représentant les images du carrousel.
 * @returns {JSX.Element} - Le composant Slider avec les images et les flèches de navigation.
 */
const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button className="button__img" onClick={previousImage}>
        <img className="button__img--left" src={ArrowLeft} alt="arrowleft" />
      </button>
      <button className="button__img" onClick={nextImage}>
        <img
          className="button__img--right"
          src={ArrowRight}
          alt="arrow-right"
        />
      </button>
      <span className="carroussel__number">
        {currentIndex + 1}/{images.length}
      </span>
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt="slider images"
      />
    </div>
  );
};
export default Slider;
