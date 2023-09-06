import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/sanfour3.jpg";
import { BsCalendarDate, BsArrowReturnRight } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { FaUniversity , FaLanguage } from "react-icons/fa";

const About = () => {
  const [section, setSection] = useState("experience");
  const [job, setJob] = useState("UNTY");
  const unty_tasks = [
    "Developing an interactive website",
    "Integrating screens according to the models",
    "Developing APIs as needed",
    "Integrating APIs",
  ];
  const watersec_tasks1 = [
    "Creating cross-platform application",
    "Contributing in app designing",
    "Adding and optimizing features as per specifications",
  ];
  const watersec_tasks2 = [
    "Developed an interactive website",
    "Implemented its new fully responsive design",
    "Connected it with the backend to show real time data using socket.io",
  ];
  const enactus_tasks = [
    "Implemented routing using React router",
    "Developed and maintained the user interface (responsive)",
  ];
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="buttons">
            <ul className="sections">
              <li
                onClick={() => setSection("experience")}
                className={section === "experience" ? "active" : ""}
              >
                Work Experience
              </li>
              <li
                onClick={() => setSection("info")}
                className={section === "info" ? "active" : ""}
              >
                Personal Info
              </li>
            </ul>
          </div>
          {section === "experience" ? (
            <div className="experience">
              <div className="experience-header">
                <BsArrowReturnRight
                  size={30}
                  color="rgb(214, 99, 12)"
                  className="arrow"
                />
                <ul className="jobs">
                  <li
                    onClick={() => setJob("UNTY")}
                    className={job === "UNTY" ? "active-job" : ""}
                  >
                    UNTY
                  </li>
                  <li
                    onClick={() => setJob("WaterSec")}
                    className={job === "WaterSec" ? "active-job" : ""}
                  >
                    WaterSec
                  </li>
                  <li
                    onClick={() => setJob("Enactus")}
                    className={job === "Enactus" ? "active-job" : ""}
                  >
                    Enactus INSAT
                  </li>
                </ul>
              </div>
              <div className="experiences_container">
                <article className="experience_box">
                  <div className="experience_head">
                    <h3>
                      {job === "UNTY"
                        ? "Full-Stack Web Developer (Internship)"
                        : job === "WaterSec"
                        ? "Mobile App Developer (Part-Time Job)"
                        : "Front-End Developer (Freelance)"}
                    </h3>
                  </div>
                  <div className="date">
                    {job === "UNTY"
                      ? "May 2023 - August 2023"
                      : job === "WaterSec"
                      ? "September 2022 - June 2023"
                      : "April 2022 - May 2022"}
                  </div>
                  <ul className="experience_list">
                    {job === "UNTY"
                      ? unty_tasks.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        })
                      : job === "WaterSec"
                      ? watersec_tasks1.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        })
                      : enactus_tasks.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        })}
                  </ul>
                  {job === "WaterSec" && (
                    <>
                      <div className="experience_head">
                        <h3>Front-End Developer (Internship)</h3>
                      </div>
                      <div className="date">June 2022 - August 2022</div>
                      <ul className="experience_list">
                        {watersec_tasks2.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </article>
              </div>
            </div>
          ) : (
            <div className="info">
              <div className="about_cards">
                <article className="about_card">
                  <BsCalendarDate className="about_icon" />
                  <h5>DATE OF BIRTH</h5>
                  <small>01/01/2001</small>
                </article>

                <article className="about_card">
                  <FaUniversity className="about_icon" />
                  <h5>INSAT</h5>
                  <small>Software Engineering</small>
                </article>

                <article className="about_card">
                  <FaLanguage className="about_icon" />
                  <h5>LANGUAGES</h5>
                  <ul>
                    <li>
                      <small>*Arabic</small>
                    </li>
                    <li>
                      <small>*Frensh</small>
                    </li>
                    <li>
                      <small>*English</small>
                    </li>
                  </ul>
                </article>
              </div>

              <p className="content-p">
                Hello, my name is Hamza. I am a Software Engineering Student at
                National Institute of Applied Science and Technology (INSAT).
                <br />
                <br />
                I am always energetic and eager to learn new skills.
                <br />
                <br />
                Software engineer with a proven ability to adapt in both
                self-starting and collaborative environments while staying
                focused on achieving high-quality results under strict
                deadlines.
                <br />
                <br />
                Hard-working web developer and designer with a flair for
                creating elegant solutions in the least amount of time.
                <br />
                <br />
                For further information , you can reach out to me on my website.
              </p>
              <div id="contactBtn">
                <a href="#contact" className="btn btn-primary">
                  Let's Talk
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
