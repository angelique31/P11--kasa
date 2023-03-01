import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Header";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";

const LocationPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
      // const location = jsonData.find((item) => item.id === parseInt(id));
      // setTags(location.tags);
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
              <img
                className="caroussel_img"
                src={selectedItem.cover}
                alt={selectedItem.title}
              />
            </section>
            <section className="content">
              <div>
                <h2 className="carroussel__title">{selectedItem.title}</h2>
                <p className="carroussel__city">{selectedItem.location}</p>
                <ul className="city">
                  {selectedItem.tags.map((tag) => (
                    <li className="city_list" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
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
          </article>
        )}
      </main>
      <div className="my-custom-dropdown">
        <Dropdown title="Description" titleClass="description-title"/>
        <Dropdown title="Equipements" titleClass="description-title"/>
      </div>
      <Footer />
    </div>
  );
};

export default LocationPage;
