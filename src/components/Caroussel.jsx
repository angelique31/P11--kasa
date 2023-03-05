// import React from 'react';
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";


// const Carroussel = () => {
//     return (
//         <div>
//             <button>
//                 <img
//                   className="button_img--left"
//                   src={ArrowLeft}
//                   alt="arrowleft"
//                 />
//               </button>
            
//               <button>
//                 <img
//                   className="button_img--right"
//                   src={ArrowRight}
//                   alt="arrow-right"
//                 />
//               </button>
//               <span className="carroussel__number"></span>
//         </div>
//     );
// };

// export default Carroussel;

/***************************************** */

// import arrowRight from "../../assets/arrowRight.png";
// import arrowLeft from "../../assets/arrowLeft.png";
import { useState } from "react";


/** Banniere avec une image
 * @param {array} pictures - Tableau d'image à afficher dans le carroussel
 * @return {JSX.Element}
 */
function Carroussel({ pictures }) {
  const [idPicture, updateId] = useState(0);

  if (pictures.length > 1) {
    return (
      <div className="caroussel_container">
        <button
          onClick={() =>
            idPicture === 0
              ? updateId(pictures.length - 1)
              : updateId(idPicture - 1)
          }
        >
          <img
            className="button_img--left"
            src={ArrowLeft}
            alt="Précedent"
          />
        </button>
        <img
          className="caroussel_img"
          src={pictures[idPicture]}
          alt="Images"
        />
        <button
          onClick={() =>
            idPicture === pictures.length - 1
              ? updateId(0)
              : updateId(idPicture + 1)
          }
        >
          <p className="carrousel__copy">
            {idPicture + 1}/{pictures.length}
          </p>
          <img
            className="button_img--right"
            src={ArrowRight}
            alt="Suivant"
          />
        </button>
      </div>
    );
  } else {
    return (
      <div className="caroussel_container">
        <img
          className="caroussel_img"
          src={pictures[idPicture]}
          alt=""
        />
        <p className="carrousel__copy">1/1</p>
      </div>
    );
  }
}

export default Carroussel;

