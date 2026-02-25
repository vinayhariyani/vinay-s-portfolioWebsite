import React from "react";
import "./experience.css";
import { MdWork } from "react-icons/md";

const experienceData = [
  {
    id: 1,
    role: "Software Development Engineer I",
    company: "Signzy",
    location: "Bangalore, India",
    period: "April 2025 – January 2026",
    responsibilities: [
      "Led complete frontend development of Savings Account Onboarding journey for Yes Bank",
      "Built responsive, high-performance interfaces using React",
      "Developing internal product with Next.js, Tailwind CSS, implementing 2FA authentication",
      "Converted Figma designs to production-ready UI and authored SRS documentation",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Dept/TeknoPoint",
    location: "Mumbai, India",
    period: "June 2023 – March 2025",
    responsibilities: [
      "Owned end-to-end development of My Opus mobile app (Aditya Birla Group) as sole React Native developer",
      "Published app on App Store and Play Store, achieving 1K+ downloads",
      "Implemented secure authentication system with native login/signup flows",
      "Collaborated with product, design, and QA teams for feature delivery",
    ],
  },
  {
    id: 3,
    role: "React and JavaScript Mentor",
    company: "Xsyser Infosystem",
    location: "Mumbai, India",
    period: "Feb 2024 – May 2024",
    responsibilities: [
      "Mentored students in React and JavaScript fundamentals to advanced concepts",
      "Taught state management using Redux Toolkit and Context API",
      "Guided students through hands-on project implementation",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Journey</h5>
      <h2>Work Experience</h2>
      <div className="container experience_container">
        {experienceData.map(({ id, role, company, location, period, responsibilities }) => (
          <article key={id} className="experience_item">
            <div className="experience_item-header">
              <MdWork className="experience_icon" />
              <div>
                <h3>{role}</h3>
                <h4>{company}</h4>
                <small className="text-light">{location} | {period}</small>
              </div>
            </div>
            <ul className="experience_responsibilities">
              {responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
