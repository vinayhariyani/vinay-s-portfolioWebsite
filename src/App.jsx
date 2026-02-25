import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import FeaturedWork from "./components/featured/FeaturedWork";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <FeaturedWork />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
