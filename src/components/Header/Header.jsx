import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me-about.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Vinay Vijay Hariyani</h1>
      <h5 className="text_light">Front-End Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
