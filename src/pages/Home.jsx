import React from "react";
import Banner from "../components/Banner";
import About from "./About";
import Footer from "./Footer";
import FQASection from "../components/FQASection";
import Portfolio from "./Portfolio";
import Services from "./Services";
import CustomersLove from "../components/CustomersLove";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <CustomersLove />
      <Portfolio />
      <FQASection />
      <Footer />
    </>
  );
};

export default Home;
