import React from "react";

const Card = ({ title, cover }) => {
  return (
    <div className="card_container">
      <h2 className="card_container--title">{title}</h2>
      <img className="card_img" src={cover} alt={title} />
    </div>
  );
};

export default Card;
