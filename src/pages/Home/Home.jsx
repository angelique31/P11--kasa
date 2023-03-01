import React, { useState, useEffect } from "react";

import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navigation from "../../components/Header";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navigation />
      <Banner type="Home" />
      <main className="gallery">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            cover={item.cover}
            id={item.id}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

/********************************************* */
