import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/sanfour.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header_container">
          <h5>Hello It's me</h5>
          <h1>Hamza Sdir</h1>
          <h5 className="text-light" style={{ display: "inline-flex" }}>
            I'm a
            <span
              style={{
                color: "rgb(214, 99, 12)",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                options={{
                  strings: [
                    "Software Engineering Student",
                    "Full-Stack Web Developer",
                    "Mobile App Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <div id="sectionScrollDown" className="scroll_down">
            <a href="#contact" className="scrDown">
              <span></span>Scroll Down
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
