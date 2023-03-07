import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";
import Rating from "../../components/Rating";
import Slider from "../../components/Slider";
import Header from "../../components/Header";

/**
 * Composant qui affiche les détails de la page d'une location.
 * @param {Object} props - Les props du composant
 * @param {Object} props.data - Les données de toutes les locations
 * @param {string} props.id - L'ID de la location sélectionnée
 * @returns {JSX.Element} Elément JSX représentant les détails de la page d'une location.
 *
 */
const LocationPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, [id]);

  const selectedItem = data.find((item) => item.id === id);

  return (
    <div className="location_page">
      <Header />

      <main className="carroussel">
        {selectedItem && (
          <article key={selectedItem.id}>
            <section className="carroussel__container">
              <Slider images={selectedItem.pictures} /> 
            </section>
            
            <section className="content">
              <div className="content_info">
                <h2 className="content__title">{selectedItem.title}</h2>
                <p className="content__city">{selectedItem.location}</p>
                <ul className="content-info__city">
                  {selectedItem.tags.map((tag) => (
                  <li className="content-info__city--list" key={tag}>
                    {tag}
                  </li>
                  ))}
                </ul>
              </div>

              <div className="content-owner">
                <div className="content-owner__picture">
                  <p className="content-owner__picture--name">{selectedItem.host.name}</p>
                  <img
                    className="content-owner__picture--img"
                    src={selectedItem.host.picture}
                    alt={selectedItem.title}
                  />
                </div>
                <Rating rating={selectedItem.rating} />
              </div>
             
           
                
              
            </section>
          </article>
        )}
      </main>
      <div className="custom-dropdown">
      {/* On vérifie si l'objet "selectedItem" existe avant de continuer à afficher les dropdowns. Ensuite, il utilise la syntaxe conditionnelle pour vérifier si les propriétés "description" et "equipments" sont définies avant d'afficher le texte. */}
      {selectedItem && (
    <>
      {selectedItem.description && (
        <Dropdown title="Description" titleClass="description-title" text={selectedItem.description} textClass="description-text"/>
      )}
      {selectedItem.equipments && (
        <Dropdown
          title="Equipements"
          titleClass="description-title"
          textClass="description-text"
          text={
            <ul>
              {selectedItem.equipments.map((equipment, index) => (
                <li className="equipments"  key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      )}
    </>
  )}
       
      </div>
      <Footer />
    </div>
  );
};

export default LocationPage;




