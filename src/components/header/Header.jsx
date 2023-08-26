import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/sanfour.png";
import HeaderSocials from "./HeaderSocials";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header_container">
          <h5>Hello It's me</h5>
          <h1>Hamza Sdiri</h1>
          <h5 className="text-light">
            I'm a{" "}
            <span style={{ color: "rgb(214, 99, 12)", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Software Engineering Student",
                  "Full-Stack Web Developer",
                ]}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <Cursor cursorStyle="|" />
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
