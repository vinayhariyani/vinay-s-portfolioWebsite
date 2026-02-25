import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Vinay Hariyani
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Skills</a>
        </li>
        <li>
          <a href="#featured">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/vinay.hariyani.37" target="_blank">
          <FaFacebookF className="foorter_socials-icon" />
        </a>
        <a href="https://www.instagram.com/mevinayhariyani/" target="_blank">
          <FiInstagram className="foorter_socials-icon" />
        </a>
        <a href="https://x.com/VHariyani99881" target="_blank">
          <FaXTwitter className="foorter_socials-icon" />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; VINAY HARIYANI. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
