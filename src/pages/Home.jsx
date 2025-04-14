import React from "react";
import Banner from "../components/Banner";
import Footer from "./Footer";
import FQASection from "../components/FQASection";
import CustomersLove from "../components/CustomersLove";
import BusinessInfo from "../components/BusinessInfo";
import GenzSoftIdea from "../components/GenzSoftIdea";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  return (
    <>
      <Banner />
      <BusinessInfo />
      <ServiceSection />
      <CustomersLove />
      <GenzSoftIdea />
      <FQASection bgColor="bg-[#F5F5F5]" />
      <Footer />
    </>
  );
};

export default Home;
