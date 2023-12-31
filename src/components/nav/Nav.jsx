import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaPortrait } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useState } from "react";
const Nav = () => {
  const [activeState, setActive] = useState("#");

  return (
    <nav>
      <li className="links">
        <a
          href="#top"
          onClick={() => setActive("#")}
          className={activeState === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
      </li>
      <li className="links">
        {" "}
        <a
          href="#about"
          onClick={() => setActive("#about")}
          className={activeState === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
      </li>
      <li className="links">
        {" "}
        <a
          href="#experience"
          onClick={() => setActive("#experience")}
          className={activeState === "#experience" ? "active" : ""}
        >
          <BsBook />
        </a>
      </li>
      <li className="links">
        {" "}
        <a
          href="#services"
          onClick={() => setActive("#services")}
          className={activeState === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
      </li>
      <li className="links">
        {" "}
        <a
          href="#portfolio"
          onClick={() => setActive("#portfolio")}
          className={activeState === "#portfolio" ? "active" : ""}
        >
          <FaPortrait />
        </a>
      </li>
      <li className="links">
        {" "}
        <a
          href="#certificat"
          onClick={() => setActive("#certificat")}
          className={activeState === "#certificat" ? "active" : ""}
        >
          <AiFillSafetyCertificate />
        </a>
      </li>
      <li className="links">
        {" "}
        <a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={activeState === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </li>
    </nav>
  );
};

export default Nav;
