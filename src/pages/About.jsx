import React from "react";
import Banner from "../components/Banner";
import BusinessInfo from "../components/BusinessInfo";
import FQASection from "../components/FQASection";
import Footer from "./Footer";
import GenzSoftIdea from "../components/GenzSoftIdea";
import CustomersLove from "../components/CustomersLove";
import TransformBusiness from "../components/TransformBusiness";

const About = () => {
  return (
    <>
      <Banner />
      <TransformBusiness />
      <div className="bg-[#F5F7FA] py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20 max-w-6xl mx-auto px-4 lg:px-0">
          <div>
            <h5 className="text-[#0948FD] text-[35px] font-bold mb-10">
              Our Vision
            </h5>
            <p className="text-xl text-[#4D4D4D] text-justify">
              To be a global leader in next-generation software solutions by
              harnessing the power of cloud computing, AI, and automation,
              empowering businesses to thrive in the digital era.
            </p>
          </div>
          <div className="grow">
            <h5 className="text-[#0948FD] text-[35px] font-bold mb-10">
              Our Mission
            </h5>
            <p className="text-xl text-[#4D4D4D] text-justify">
              We aim to simplify complex business challenges through intelligent
              automation, seamless integrations, and user-friendly software that
              enhances productivity, security, and efficiency.
            </p>
          </div>
        </div>
      </div>
      <GenzSoftIdea />
      <BusinessInfo />
      <FQASection bgColor="bg-[#FFF]" />
      <CustomersLove />
      <Footer />
    </>
  );
};

export default About;
