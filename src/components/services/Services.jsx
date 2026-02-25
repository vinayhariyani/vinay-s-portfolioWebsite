import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Technical Skills</h2>

      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>Languages</h3>
          </div>
          <div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>JavaScript</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>SQL</p>
              </li>
            </ul>
          </div>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Libraries & Frameworks</h3>
          </div>
          <div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>React Native</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>React</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Next.js</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Redux Toolkit</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Recoil</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Tailwind CSS</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Bootstrap</p>
              </li>
            </ul>
          </div>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Tools & Fundamentals</h3>
          </div>
          <div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>Git & GitHub</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Firebase</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Android Studio</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Xcode</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>VS Code</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Jira</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>REST APIs</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Authentication & 2FA</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Responsive UI Design</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
