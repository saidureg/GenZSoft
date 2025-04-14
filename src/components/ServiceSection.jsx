import React from "react";
import ServicesImg1 from "../assets/services_1.png";
import ServicesImg2 from "../assets/services_2.png";
import ServicesImg3 from "../assets/services_3.png";
import ServicesImg4 from "../assets/services_4.png";
import ServicesImg5 from "../assets/services_5.png";
import ServicesImg6 from "../assets/services_6.png";
import ServicesImg7 from "../assets/services_7.png";
import ServicesImg8 from "../assets/services_8.png";
import ServicesImg9 from "../assets/services_9.png";
import { FaArrowRightLong } from "react-icons/fa6";
import ServicesCard from "../ui/ServicesCard";

const ServiceSection = ({ isServicePage = false }) => {
  const [showAllServices, setShowAllServices] = React.useState(isServicePage);
  const handleShowAllServices = () => {
    setShowAllServices(!showAllServices);
  };

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
      image: ServicesImg4,
    },
    {
      id: 5,
      title: "E-Learning",
      description:
        "We develop custom Moodle-based platforms to bring your online learning vision to life.",
      image: ServicesImg5,
    },
    {
      id: 6,
      title: "ERP",
      description:
        "ErpNext is the all-in-one management software to streamline every process in your organization's",
      image: ServicesImg6,
    },
    {
      id: 7,
      title: "Cloud DevOps",
      description:
        "We optimize and automate your cloud infrastructure, ensuring seamless deployment and scalability.",
      image: ServicesImg7,
    },
    {
      id: 8,
      title: "Software Testing as a Service",
      description:
        "Our testing ensures your software is reliable, secure, and performs flawlessly with tailored automation.",
      image: ServicesImg8,
    },
    {
      id: 9,
      title: "UI/UX and Graphics Design",
      description:
        "Crafting intuitive designs and visuals that enhance user experience and elevate your brand.",
      image: ServicesImg9,
    },
  ];
  return (
    <div className="bg-white py-[50px]">
      <div className="max-w-[78rem] mx-auto">
        <h2 className="text-[#0948FD] text-4xl lg:text-[50px] font-semibold text-center">
          Our Services & Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-[50px] px-6 lg:px-0">
          {services
            .slice(0, showAllServices ? services.length : 6)
            .map((data, index) => (
              <ServicesCard key={index} data={data} />
            ))}
        </div>
        <button
          onClick={handleShowAllServices}
          className="rounded-[99px] cursor-pointer bg-linear-to-r from-[#0047FF] to-[#7B55E8] text-lg font-semibold text-center font-inter mx-auto py-4 px-7 text-white flex justify-center items-center gap-1"
        >
          View All services
          <span>
            <FaArrowRightLong className="text-2xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;

{
  /* <button
onClick={handleShowAllServices}
className={`${
  showAllServices ? "hidden" : "block"
} rounded-[99px] cursor-pointer bg-linear-to-r from-[#0047FF] to-[#7B55E8] text-lg font-semibold text-center font-inter mx-auto py-4 px-7 text-white flex justify-center items-center gap-1`}
>
View All services
<span>
  <FaArrowRightLong className="text-2xl" />
</span>
</button> */
}
