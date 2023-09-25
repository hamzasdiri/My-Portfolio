import React, { useState } from "react";
import "./portfolio.css";
import img0 from "../../assets/keyme.png";
import img1 from "../../assets/baskety.png";
import img2 from "../../assets/watersec.png";
import img3 from "../../assets/philia2.png";
import img4 from "../../assets/watersecapp.png";
import philia from "../../assets/philia/philia.mp4";

import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const watersec_images = importAll(
  require.context("../../assets/watersec", false, /\.jpg/)
);
const philia_images = importAll(
  require.context("../../assets/philia", false, /\.jpg/)
);
philia_images["philia.mp4"] = philia;

const data = [
  {
    id: 1,
    image: img0,
    title: "KEYME",
    github: "",
    demo: "https://int.keyme.fr",
    media: [],
  },
  {
    id: 2,
    image: img4,
    title: "WaterSec App",
    github: "",
    demo: "",
    media: watersec_images,
  },
  {
    id: 3,
    image: img2,
    title: "CRUD APP",
    github: "",
    demo: "https://www.water-sec.com/",
    media: [],
  },
  {
    id: 4,
    image: img3,
    title: "LOGO (Mobile App)",
    github: "",
    demo:
      "https://www.linkedin.com/posts/hamza-sdiri_dear-network-im-so-glad-to-share-with-activity-6943542265403334656-pU6c?utm_source=share&utm_medium=member_desktop",
    media: philia_images,
  },
  {
    id: 5,
    image: img1,
    title: "BASKETY",
    github: "https://github.com/hamzasdiri/baskety",
    demo: "https://baskety.netlify.app/",
    media: [],
  },
];

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentProjectTitle, setCurrentProjectTitle] = useState("");

  const openModal = (images, title) => {
    if (typeof images === "object" && Object.keys(images).length > 0) {
      const imageUrls = Object.values(images);
      setCurrentImages(imageUrls);
      setCurrentProjectTitle(title);
      setIsModalOpen(true);
    } else {
      console.error("Images is not a valid object.");
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo, media }) => {
          return (
            <article className="portfolio_item" key={id}>
              <h3>{title}</h3>
              <div
                className="portfolio_item-image"
                onClick={() => openModal(media, title)}
              >
                <img
                  src={image}
                  alt={id}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
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
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        center={false}
        styles={{ modal: { height: "95%", padding: "0px" } }}
      >
        <h2>{currentProjectTitle}</h2>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          autoPlay={false}
          infiniteLoop={true}
          emulateTouch={true}
          dynamicHeight={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                className="custom-carousel-button prev-button"
                type="button"
                onClick={onClickHandler}
                title={label}
              >
                <BsFillArrowLeftCircleFill />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                className="custom-carousel-button next-button"
                type="button"
                onClick={onClickHandler}
                title={label}
              >
                <BsFillArrowRightCircleFill />
              </button>
            )
          }
          className="carousel"
        >
          {currentImages.map((image, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
              }}
            >
              {image.toLowerCase().slice(-4) == ".mp4" ? (
                <video
                  controls
                  autoPlay
                  muted
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                >
                  <source src={image} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={image}
                  alt={`Project Image ${index}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          ))}
        </Carousel>
      </Modal>
    </section>
  );
};

export default Portfolio;
