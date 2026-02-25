import React from "react";
import "./featuredwork.css";
import YesBankLogo from "../../assets/yesbank_logo.svg";
import MyOpusLogo from "../../assets/myopus_logo.jpg";

const FeaturedWork = () => {
  return (
    <section id="featured">
      <h5>Production Work</h5>
      <h2>Featured Projects</h2>
      <div className="container featured_container">
        <article className="featured_item">
          <div className="featured_badge">
            <span>🏆 Live in Production</span>
          </div>
          <div className="featured_content">
            <div className="featured_logo">
              <img src={YesBankLogo} alt="Yes Bank" />
            </div>
            <div className="featured_details">
              <h3>Yes Bank - Savings Account Onboarding</h3>
              <p className="featured_description">
                Led the complete frontend development of the digital savings
                account onboarding journey for Yes Bank. Built with React,
                delivering a seamless experience for thousands of users in
                production.
              </p>
              <div className="featured_tech">
                <span>Jquery</span>
                <span>JavaScript</span>
                <span>Responsive Design</span>
              </div>
              <div className="featured_cta">
                <a
                  href="https://quickapply.yes.bank.in/savings/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project →
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="featured_item">
          <div className="featured_badge">
            <span>📱 50K+ Downloads</span>
          </div>
          <div className="featured_content">
            <div className="featured_logo">
              <img src={MyOpusLogo} alt="My Opus" />
            </div>
            <div className="featured_details">
              <h3>My Opus - Aditya Birla Group</h3>
              <p className="featured_description">
                Owned end-to-end development as the sole React Native developer.
                Published on App Store and Play Store with optimized
                WebView-based hybrid architecture and secure authentication
                system.
              </p>
              <div className="featured_tech">
                <span>React Native</span>
                <span>JavaScript</span>
                <span>Authentication</span>
                <span>Mobile Development</span>
              </div>
              <div className="featured_cta">
                <a
                  href="https://play.google.com/store/apps/details?id=com.grasim.birlaopus&hl=en_IN"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Store
                </a>
                <a
                  href="https://apps.apple.com/in/app/my-opus/id6477375358"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedWork;
