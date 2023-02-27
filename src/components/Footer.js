import React from "react";
import logoKasa from "../assets/logo-kasa-white.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__logo" src={logoKasa} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
