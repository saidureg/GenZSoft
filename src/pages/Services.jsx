import React from "react";
import ServicesCard from "../ui/ServicesCard";
import ServicesImg1 from "../assets/services_1.png";
import ServicesImg2 from "../assets/services_2.png";
import ServicesImg3 from "../assets/services_3.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web App Development",
      description:
        "Develop robust online applications to suit your business needs and cater to your clients faithfully.",
      image: ServicesImg1,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Developing innovative and native mobile apps for Android, iOS platforms",
      image: ServicesImg2,
    },
    {
      id: 3,
      title: "AI & ML",
      description:
        "Expertly crafted AI and ML solutions to transform your organization and drive smart decision-making.",
      image: ServicesImg3,
    },
    {
      id: 4,
      title: "E-commerce",
      description:
        "We provide ultimate e-commerce solution as well as customization for your e-commerce business",
      image: ServicesImg1,
    },
    {
      id: 5,
      title: "E-Learning",
      description:
        "We develop custom Moodle-based platforms to bring your online learning vision to life.",
      image: ServicesImg2,
    },
    {
      id: 6,
      title: "ERP",
      description:
        "ErpNext is the all-in-one management software to streamline every process in your organization's",
      image: ServicesImg3,
    },
  ];

  return (
    <div className="bg-white py-[50px]">
      <div className="max-w-[78rem] mx-auto">
        <h2 className="text-[#0948FD] text-4xl lg:text-[50px] font-semibold text-center">
          Our Services & Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[40px] px-6 lg:px-0">
          {services.map((data, index) => (
            <ServicesCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
