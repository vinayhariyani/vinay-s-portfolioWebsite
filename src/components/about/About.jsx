import React from "react";
import "./about.css";
import ME from "../../assets/final-copy.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years of Experience</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>3 Clients</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>4 Projects</small>
            </article>
          </div>
          <p>
            I'm a Frontend Developer with 2+ years of experience building
            high-performance web and mobile applications using React, React
            Native, and Next.js. I've led end-to-end development of production
            features, including onboarding journeys, dashboards, authentication
            flows, and 2FA systems. Skilled in translating Figma designs into
            scalable UI, writing SRS documentation, and collaborating with
            stakeholders. Passionate about creating clean, intuitive, and
            user-focused experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
