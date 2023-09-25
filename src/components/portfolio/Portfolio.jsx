import React, { useState, useEffect } from "react";
import "./portfolio.css";
import img0 from "../../assets/keyme.png";
import img1 from "../../assets/baskety.png";
import img2 from "../../assets/watersec.png";
import img3 from "../../assets/philia2.png";
import img4 from "../../assets/watersec/3.jpg";
import Modal from "react-modal";

// Set the app element to the root element with id "root"
Modal.setAppElement("#root");

const data = [
  {
    id: 1,
    image: img0,
    title: "KEYME",
    github: "",
    demo: "https://int.keyme.fr",
  },
  {
    id: 2,
    image: img4,
    title: "WaterSec App",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: img2,
    title: "CRUD APP",
    github: "",
    demo: "https://www.water-sec.com/",
  },
  {
    id: 4,
    image: img3,
    title: "LOGO (Mobile App)",
    github: "",
    demo: "",
  },
  {
    id: 5,
    image: img1,
    title: "BASKETY",
    github: "https://github.com/hamzasdiri/baskety",
    demo: "https://baskety.netlify.app/",
  },
];

const Portfolio = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImageModal = (images, index) => {
    setSelectedImages(images);
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <h3>{title}</h3>
              <div
                className="portfolio_item-image"
                onClick={() => setIsImageModalOpen(true)}
              >
                <img src={image} alt={id} />
              </div>
              <div className="portfolio_item-cta">
                <a
                  href={github || undefined}
                  className={github === "" ? "btn disabled" : "btn"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo || undefined}
                  className={demo === "" ? "btn disabled" : "btn"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <Modal
        isOpen="true"
        contentLabel="Image Carousel"
        className="image-carousel-modal"
        overlayClassName="image-carousel-overlay"
      >
        <button className="close-button" onClick={closeImageModal}>
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Portfolio;
