import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Netflix-SS.png";
import IMG2 from "../../assets/tictactoe.png";
import IMG3 from "../../assets/chatapp.png";
import IMG4 from "../../assets/dailygoals.png";
import IMG5 from "../../assets/piggame.png";
import IMG6 from "../../assets/guessthenumber.png";

// Array of 6 data-projects

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Tic-Tac-Toe Game",
    github: "https://github.com/vinayhariyani/Tic-Tac-Toe",
    demo: "https://tic-tac-byvinay.netlify.app/",
  },
  {
    id: 2,
    image: IMG5,
    title: "Project 5",
    github: "https://github.com/vinayhariyani/The-pig-game",
    demo: "https://piggame-byvinay.netlify.app/",
  },
  {
    id: 3,
    image: IMG6,
    title: "Guess-The-Number Game",
    github: "https://github.com/vinayhariyani/guess-the-number",
    demo: "https://guessthenumber-byvinay.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Personal Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live DEMO
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
