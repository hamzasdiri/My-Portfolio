import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/sanfour.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Hamza Sdiri</h1>
          <h5 className="text-light">Software Engineering Student</h5>
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
