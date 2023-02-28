import React, { useState } from "react";
import ArrowBottom from "../assets/arrow-bottom.png";
import ArrowTop from "../assets/arrow-top.png";

const Dropdown = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown_button" onClick={handleDropdown}>
        <p>{title}</p>
        <img
          className="dropdown_arrow"
          src={isOpen ? ArrowTop : ArrowBottom}
          alt="arrow"
        />
      </button>
      {isOpen && (
        <div className="dropdown_content">
          <p className="dropdown_content--text">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
