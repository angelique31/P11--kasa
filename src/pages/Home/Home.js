// import React, { useState, useEffect } from "react";
import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navigation from "../../components/Header";
import data from "../../data/data.json";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner type="Home" />
      <main>
        {data.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

/*************************************** */
