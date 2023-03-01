import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/locationPage/${id}`}>
      <div className="card_container">
        <h2 className="card_container--title">{title}</h2>
        <img className="card_img" src={cover} alt={title} />
      </div>
    </Link>
  );
};

export default Card;
