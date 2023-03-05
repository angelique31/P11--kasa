import React from "react";
import { NavLink } from "react-router-dom";
import logoKasa from "../assets/logo-kasa.png";

/**
  * Le composant Header contient un logo et des liens de navigation pour les pages Accueil et A propos.
  *
  * @returns {JSX.Element} Le contenu JSX du composant Header.
*/
const Header = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <img className="nav__logo" src={logoKasa} alt="logo kasa" />
      </NavLink>
      <ul className="navigation__link">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="navigation__link--active">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="navigation__link--active">A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
