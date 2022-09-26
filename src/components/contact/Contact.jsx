import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_08so37l",
      "template_8ut3orc",
      form.current,
      "SYS0mrBqj1OThgsM4"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className=".contact_option-icon" />
            <h4>Email</h4>
            <h5>vinayhariyani7@gmail.com</h5>
            <a href="mailto:vinayhariyani7@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className=".contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Vinay Hariyani</h5>
            <a href="https://m.me/vinay.hariyani.37" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className=".contact_option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://bit.ly/3eW7rZ9" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
