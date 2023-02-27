import React from "react";
import BannerHome from "../assets/banner-home.png";
import BannerAbout from "../assets/banner-about.png";

const Banner = ({ type }) => {
  return type === "Home" ? (
    <div className="banner-container">
      <h1 className="banner-container__title">
        Chez vous, partout et ailleurs
      </h1>
      <img className="bannerHome" src={BannerHome} alt="bannière" />
    </div>
  ) : (
    <div className="banner-container">
      <img className="bannerHome" src={BannerAbout} alt="bannière" />
    </div>
  );
};
export default Banner;
