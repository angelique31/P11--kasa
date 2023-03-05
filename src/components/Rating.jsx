import React from "react";
import fullStar from "../assets/stars-orange.png";
import emptyStar from "../assets/star-grey.png";

const Rating = ({ rating }) => {//prop rating qui sera le nombre d'étoiles à afficher.
  //Utilisez la prop rating pour générer une liste d'étoiles en utilisant une boucle for 
const stars = [];
  for (let i = 1; i <= 5; i++) {
    //Vérufier si l'indice de boucle est inférieur ou égal à la valeur de la prop rating, et si c'est le cas, nous ajoutons une étoile pleine à la liste, sinon nous ajoutons une étoile vide
    if (i <= rating) {
      stars.push(<img key={i} src={fullStar} alt="Full star" className="star" />);
    } else {
      stars.push(<img key={i} src={emptyStar} alt="Empty star" className="star" />);
    }
  }
  //Renvoi le contenu de la liste d'étoiles 
  return <div className="rating">{stars}</div>
  
};

export default Rating;
