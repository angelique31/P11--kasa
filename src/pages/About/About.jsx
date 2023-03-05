import React from "react";
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
import ArrowTop from "../../assets/arrow-top.png";
import Header from "../../components/Header";

/**
 * Composant représentant la page À propos
 * Affiche des informations dans des dropdowns
 * @returns {JSX.Element} composant principal de la page à propos
 */
const About = () => {
  return (
    <div>
      <Header />
      <Banner type="About" />
      <Dropdown
        title="Fiabilité"
        text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        arrow={ArrowTop}
      />
      <Dropdown
        title="Respect"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        arrow={ArrowTop}
      />
      <Dropdown
        title="Service"
        text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        arrow={ArrowTop}
      />
      <Dropdown
        title="Responsabilité"
        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        arrow={ArrowTop}
      />
      <Footer />
    </div>
  );
};

export default About;
