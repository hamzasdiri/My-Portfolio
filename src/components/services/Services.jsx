import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container center">
        <article className="service">
          <div className="service_head">
            <h3>SOFTWARE DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Crafting engaging and intuitive user interfaces using HTML, CSS,
                and JavaScript
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Building robust server-side logic with technologies like Node.js
                and Express.js
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Implementing efficient databases (SQL or NoSQL) to store and
                manage your data
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Creating RESTful or GraphQL APIs for seamless communication
                between frontend and backend
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Using frameworks like Flutter to create apps that work on both
                iOS and Android
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Connecting your app to a backend server for real-time data and
                functionality
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
