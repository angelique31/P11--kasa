import React from "react";
import { Link } from "react-router-dom";

/**
Composant fonctionnel représentant une carte cliquable menant vers une page de location
@param {Object} props - L'objet de props
@param {string} props.id - L'ID du lien de la page 
@param {string} props.title - Le titre de la carte
@param {string} props.cover - L'URL de l'image de couverture de la carte
@returns {JSX.Element} - Un élément JSX représentant la carte
*/
const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/locationPage/${id}`}>
      <div className="card__container">
        <h2 className="card__container--title">{title}</h2>
        <img className="card__container--img" src={cover} alt={title} />
      </div>
    </Link>
  );
};

export default Card;
