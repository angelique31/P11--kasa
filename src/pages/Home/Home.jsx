import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

/**
 * Composant fonctionnel représentant la page d'accueil de l'application.
 * Affiche l'en tête, une bannière, une galerie de cartes et un footer.
 * @returns {JSX.Element} Composant principal de la page d'accueil.
 */
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
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
