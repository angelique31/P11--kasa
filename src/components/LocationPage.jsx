import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Header";
import Footer from "./Footer";
import Dropdown from "./Dropdown";
import Rating from "./Rating";
// import Slider from "./Slider";
import Carroussel from "./Caroussel";



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
      <Navigation />

      <main className="carroussel">
        {selectedItem && (
          <article key={selectedItem.id}>
            <section className="caroussel_container">
              <Carroussel pictures={selectedItem.pictures} />
            </section>
            <section className="content">
              <div>
                <h2 className="carroussel__title">{selectedItem.title}</h2>
                <p className="carroussel__city">{selectedItem.location}</p>
                
              </div>

              <div className="content_picture">
                <p className="name">{selectedItem.host.name}</p>
                <img
                  className="picture_name"
                  src={selectedItem.host.picture}
                  alt={selectedItem.title}
                />
              </div>
             
            </section>
            <section className="city_stars">
                <ul className="city">
                  {selectedItem.tags.map((tag) => (
                    <li className="city_list" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              <Rating rating={selectedItem.rating} />
            </section>
          </article>
        )}
      </main>
      <div className="my-custom-dropdown">
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




