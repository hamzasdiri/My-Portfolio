import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zdr6y2p",
        "template_m9gx5sh",
        form.current,
        "HRD9reWUog3LNuJnQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("message has been sent successfully!");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <a
              href="mailto:sdiri.hamza@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <HiOutlineMail className="contact_option-icon" />
                <h4>EMAIL</h4>
                <h5>sdiri.hamza@outlook.com</h5>
                Send a message
              </div>
            </a>
          </article>

          <article className="contact_option">
            <a
              href="https://m.me/hamza.sdiri.148"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <RiMessengerLine className="contact_option-icon" />
                <h4>MESSENGER</h4>
                <h5>Hamza Sdiri</h5>
                Send a message
              </div>
            </a>
          </article>
          <article className="contact_option">
            <a
              href="https://api.whatsapp.com/send?phone=+21627710115"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <BsWhatsapp className="contact_option-icon" />
                <h4>WHAT'SAPP</h4>
                <h5>00 216 27 710 115</h5>
                Send a message
              </div>
            </a>
          </article>
        </div>
        {/*END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary sendBtn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
