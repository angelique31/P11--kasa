import React from "react";
import fullStar from "../assets/stars-orange.png";
import emptyStar from "../assets/star-grey.png";

/**
 * Composant qui affiche une note en forme d'étoiles, basé sur une prop de notation
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.rating - Le nombre d'étoiles à afficher.
 * @returns  {JSX.Element} - Le contenu JSX pour afficher la note sous forme d'étoiles.
 */
const Rating = ({ rating }) => {
  //prop rating qui sera le nombre d'étoiles à afficher.
  //Utilisez la prop rating pour générer une liste d'étoiles en utilisant une boucle for
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    //Vérifier si l'indice de boucle est inférieur ou égal à la valeur de la prop rating, et si c'est le cas, nous ajoutons une étoile pleine à la liste, sinon nous ajoutons une étoile vide
    if (i <= rating) {
      stars.push(
        <img key={i} src={fullStar} alt="Full star" className="star" />
      );
    } else {
      stars.push(
        <img key={i} src={emptyStar} alt="Empty star" className="star" />
      );
    }
  }
  //Renvoi le contenu de la liste d'étoiles
  return <div className="rating">{stars}</div>;
};

export default Rating;
