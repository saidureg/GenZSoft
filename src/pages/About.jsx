import React from "react";
import { CgCreditCard } from "react-icons/cg";
import projectIcon from "../assets/Icon/project.png";
import vectorIcon from "../assets/Icon/Vector.png";
import happyIcon from "../assets/Icon/happy.png";
import paymentIcon from "../assets/Icon/payment.png";

const About = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-4 lg:py-0 px-4 lg:px-0">
        <div className="text-black px-2">
          <h1 className="text-3xl lg:text-4xl leading-11 text-[#4D4D4D] font-semibold text-center lg:text-left">
            Helping a local
            <span className="block text-[#0948FD]">
              business reinvent itself
            </span>
          </h1>
          <p className="mt-4 text-lg text-[#18191F] text-center lg:text-left">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:gap-10 pl-3 pr-10 my-4 lg:my-[50px]">
          <div className="flex justify-center items-center gap-5">
            <img
              src={projectIcon}
              alt="Project Icon"
              className="w-8 lg:w-auto"
            />
            <div>
              <h5 className="text-xl lg:text-[28px] text-[#4D4D4D] font-bold">
                15+
              </h5>
              <p className="text-[#717171] text-sm lg:text-base">
                Projects Delivered
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src={vectorIcon} alt="Vector Icon" className="w-8 lg:w-auto" />
            <div>
              <h5 className="text-xl lg:text-[28px] text-[#4D4D4D] font-bold">
                10+
              </h5>
              <p className="text-[#717171] text-sm lg:text-base">Client</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src={happyIcon} alt="Happy Icon" className="w-8 lg:w-auto" />
            <div>
              <h5 className="text-xl lg:text-[28px] text-[#4D4D4D] font-bold">
                98.9%
              </h5>
              <p className="text-[#717171] text-sm lg:text-base">
                Client Satisfaction
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 ml-9 lg:ml-20">
            <img
              src={paymentIcon}
              alt="Payment Icon"
              className="w-8 lg:w-auto"
            />
            <div>
              <h5 className="text-xl lg:text-[28px] text-[#4D4D4D] font-bold">
                500000+
              </h5>
              <p className="text-[#717171] text-sm lg:text-base">Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
