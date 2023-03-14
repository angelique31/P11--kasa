import React from "react";
import BannerHome from "../assets/banner-home.png";
import BannerAbout from "../assets/banner-about.png";

/**
 * Le composant Banner affiche une bannière différente en fonction du type de page.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.type - Le type de page pour afficher la bannière appropriée. Doit être "Home" ou autre.
 *
 * @returns {JSX.Element} Le contenu JSX du composant Banner.
 */
const Banner = ({ type }) => {
  return type === "Home" ? (
    <div className="banner__container">
      <h1 className="banner__container--title">
        Chez vous, partout et ailleurs
      </h1>
      <img
        className="banner__container--picture"
        src={BannerHome}
        alt="bannière"
      />
    </div>
  ) : (
    <div className="banner__container">
      <img
        className="banner__container--picture"
        src={BannerAbout}
        alt="bannière"
      />
    </div>
  );
};
export default Banner;
