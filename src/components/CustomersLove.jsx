import React from "react";
import solutionIcon from "../assets/Icon/solution.png";
import rotateIcon from "../assets/Icon/rotate.png";
import supportIcon from "../assets/Icon/support.png";

const CustomersLove = () => {
  return (
    <div className="bg-[#F5F7FA] py-[38px]">
      <div>
        <h2 className="text-[#0948FD] text-3xl lg:text-[40px] font-semibold text-center">
          Build a Brand Your Customers Love
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[40px] px-4 lg:px-0">
          <div className="py-6 px-8 text-center flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg">
            <img src={solutionIcon} alt="Solution Icon" />
            <h3 className="text-3xl font-bold text-[#4D4D4D]">
              Reliable & Scalable Solutions
            </h3>
            <p className="text-sm text-[#717171]">
              Get high-performance services tailored to your business growth.
            </p>
          </div>
          <div className="py-6 px-8 text-center flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg">
            <img src={rotateIcon} alt="Rotate Icon" />
            <h3 className="text-3xl font-bold text-[#4D4D4D]">
              Always Quick Turnaround
            </h3>
            <p className="text-sm text-[#717171]">
              We ensure fast delivery and efficient solutions to keep your
              business running smoothly.
            </p>
          </div>
          <div className="py-6 px-8 text-center flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg">
            <img src={supportIcon} alt="Support Icon" />
            <h3 className="text-3xl font-bold text-[#4D4D4D]">
              24/7 Email & Live Chat Support
            </h3>
            <p className="text-sm text-[#717171]">
              Get round-the-clock assistance from our expert team whenever you
              need help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersLove;
