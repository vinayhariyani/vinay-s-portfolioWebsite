import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Skills</h2>

      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>Non-Technical Sills</h3>
          </div>
          <div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>Cooperation</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Adaptability</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Creativity</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Enthusiasm</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Time management</p>
              </li>
              {/* <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li> */}
            </ul>
          </div>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Technical Skills</h3>
          </div>
          <div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>HTML5</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>CSS3</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>JavaScript</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>ReactJS</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Bootstrap</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Responsive Web Designing</p>
              </li>
              {/* <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li> */}
            </ul>
          </div>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service_head">
            <h3>Essential Skills</h3>
          </div>
          <div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon" />
                <p>Microsoft Word</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Git and GitHub</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Web Hosting</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Code Optimization</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Windows 10/11</p>
              </li>
              {/* <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
              </li> */}
            </ul>
          </div>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
