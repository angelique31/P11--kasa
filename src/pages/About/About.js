import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
// import BannerAbout from "../../assets/banner-about.png";
// import { NavLink } from "react-router-dom";
import Navigation from "../../components/Header";

const About = () => {
  return (
    <div>
      <Navigation />
      <Banner type="About" />
      <Footer />
    </div>
  );
};

export default About;
