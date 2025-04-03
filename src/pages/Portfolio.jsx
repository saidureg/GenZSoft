import React from "react";
import rightImg from "../assets/portfolio.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-[#0948FD] text-3xl lg:text-[40px] font-semibold text-center mt-[21px] mb-[40px]">
        How GenzSoft Cloud Brings Your Ideas to Life
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 px-4 lg:px-0">
        <div className="w-full lg:w-1/2">
          <img src={rightImg} alt="section image" />
        </div>
        <div className="space-y-5 w-full lg:w-1/2">
          <div>
            <h5 className="text-[#0948FD] text-xl font-bold">
              Share Your Vision
            </h5>
            <p className="text-[14px] text-[#4D4D4D]">
              Tell us about your business goals, challenges, and ideas. We
              analyze your needs and craft a tailored strategy to bring your
              vision to life.
            </p>
          </div>
          <div>
            <h5 className="text-[#0948FD] text-xl font-bold">
              Innovate & Create
            </h5>
            <p className="text-[14px] text-[#4D4D4D]">
              Our expert team designs and develops cutting-edge web, mobile, AI,
              and cloud solutions, ensuring innovation, efficiency, and
              scalability.
            </p>
          </div>
          <div>
            <h5 className="text-[#0948FD] text-xl font-bold">Launch & Grow</h5>
            <p className="text-[14px] text-[#4D4D4D]">
              We deliver a fully optimized solution, ready to scale with your
              business. With continuous support and updates, your success never
              stops.
            </p>
          </div>
          <div>
            <h5 className="text-[#0948FD] text-base font-semibold flex items-center gap-2">
              Place your first order now
              <span>
                <FaArrowRightLong className="text-2xl" />
              </span>
            </h5>
            <div className="w-60 h-[1px] bg-[#4D4D4D]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
