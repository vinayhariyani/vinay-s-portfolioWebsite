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
    image: IMG1,
    title: "NetFlix-Clone-FrontEnd",
    github: "https://github.com/vinayhariyani/Netflix-clone-FrontEnd",
    demo: "https://glittering-cascaron-3ee436.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Tic-Tac-Toe Game",
    github: "https://github.com/vinayhariyani/Tic-Tac-Toe",
    demo: "https://tic-tac-byvinay.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Group Chat App",
    github: "https://github.com/vinayhariyani/Basic-Group-Chat",
    demo: "https://steady-beijinho-9f8e1b.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project 4",
    github: "https://github.com/vinayhariyani/DailyGoalsApp",
    demo: "https://dailygoalsapp-byvinay.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project 5",
    github: "https://github.com/vinayhariyani/The-pig-game",
    demo: "https://piggame-byvinay.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Guess-The-Number Game",
    github: "https://github.com/vinayhariyani/guess-the-number",
    demo: "https://guessthenumber-byvinay.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
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
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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
