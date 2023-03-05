import React from "react";
import logoKasa from "../assets/logo-kasa-white.png";

/**
 * Composant Footer affichant le logo Kasa et le texte des droits d'auteur.
 * @returns {JSX.Element} Composant Footer
 */
const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__logo" src={logoKasa} alt="logo kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
