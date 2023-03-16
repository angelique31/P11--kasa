import React, { useState } from "react";
import ArrowBottom from "../assets/arrow-bottom.png";
import ArrowTop from "../assets/arrow-top.png";

/**
 * Composant Dropdown affichant un titre et un contenu qui se déploie/ferme en cliquant sur le titre.
 * @param {Object} props - L'objet de props
 * @param {string} props.title - Le titre affiché dans le Dropdown.
 * @param {string} props.text - Le contenu du Dropdown.
 * @param {string} props.titleClass - La classe CSS pour le titre.
 * @returns {JSX.Element} - Le composant Dropdown.
 */
const Dropdown = ({ title, text, titleClass, contentClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown_button" onClick={handleDropdown}>
        <p className={titleClass}>{title}</p>
        <img
          className="dropdown_button--arrow"
          src={isOpen ? ArrowTop : ArrowBottom}
          alt="arrow"
        />
      </button>
      {isOpen && (
        <div className={`dropdown__content ${contentClass}`}>
          <div className={`dropdown__content--text description-text`}>
            {text}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
