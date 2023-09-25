import React from "react";
import "./certificat.css";
import img1 from "../../assets/certificat1.png";
import img2 from "../../assets/certificat.png";
const data = [
  {
    id: 1,
    image: img1,
    title: "Front End Development Libraries",
    url: "https://freecodecamp.org/certification/hvmzv/front-end-development-libraries",
  },
  {
    id: 2,
    image: img2,
    title: "Certification of Organization",
    url: "",
  },
];

const Certificat = () => {
  return (
    <section id="certificat">
      <h5>What I got</h5>
      <h2>Certificates</h2>

      <div className="container certificat_container">
        {data.map(({ id, image, title, url }) => {
          return (
            <article className="certificat_item" key={id}>
              <div className="certificat_item-image">
                {url !== "" ? (
                  <a href={url} target="_blank" rel="noreferrer">
                    <img src={image} alt={id} />
                  </a>
                ) : (
                  <img src={image} alt={id} />
                )}
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificat;
