import React from "react";
import "./portfolio.css";
import img0 from "../../assets/keyme.png";
import img1 from "../../assets/baskety.png";
import img2 from "../../assets/watersec.png";
import img3 from "../../assets/philia2.png";
import img4 from "../../assets/watersecapp.jpg";
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
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={id} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                {github !== "" && (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                {demo !== "" && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
