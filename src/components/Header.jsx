import React from "react";
import { NavLink } from "react-router-dom";
import logoKasa from "../assets/logo-kasa.png";

const Header = () => {
  return (
    <div className="navigation">
      <img className="nav__logo" src={logoKasa} alt="logo kasa" />
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
