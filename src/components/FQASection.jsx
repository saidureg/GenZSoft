import React from "react";

const FQASection = () => {
  return (
    <div className="bg-[#F5F5F5] py-10">
      <h2 className="text-[#0948FD] text-3xl lg:text-[40px] font-semibold text-center mt-[21px] mb-[40px]">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="max-w-5xl mx-auto space-y-5 px-4 lg:px-0">
        <div>
          <h5 className="text-[#0948FD] text-lg lg:text-xl font-bold">
            1. What services does GenzSoft Cloud offer?
          </h5>
          <p className="text-[14px] text-[#4D4D4D]">
            We provide web & mobile app development, custom software solutions,
            AI & cloud services, IoT integrations, ERP solutions, DevOps
            support, UI/UX design, and software testing.
          </p>
        </div>
        <div>
          <h5 className="text-[#0948FD] text-lg lg:text-xl font-bold">
            2. Can you develop a custom solution for my business?
          </h5>
          <p className="text-[14px] text-[#4D4D4D]">
            Yes! We tailor software solutions to fit your specific needs,
            ensuring scalability, security, and high performance.
          </p>
        </div>
        <div>
          <h5 className="text-[#0948FD] text-lg lg:text-xl font-bold">
            3. How long does it take to develop a project?
          </h5>
          <p className="text-[14px] text-[#4D4D4D]">
            Timelines vary based on project complexity. Simple projects may take
            weeks, while larger ones can take months. We’ll provide a clear
            timeline after discussing your requirements.
          </p>
        </div>
        <div>
          <h5 className="text-[#0948FD] text-lg lg:text-xl font-bold">
            4. Do you offer support after project completion?
          </h5>
          <p className="text-[14px] text-[#4D4D4D]">
            Absolutely! We provide ongoing maintenance, updates, and support to
            ensure your software runs smoothly.
          </p>
        </div>
        <div>
          <h5 className="text-[#0948FD] text-lg lg:text-xl font-bold">
            5. What industries do you work with?
          </h5>
          <p className="text-[14px] text-[#4D4D4D]">
            We serve businesses across e-commerce, healthcare, finance,
            education, startups, and enterprises, delivering innovative digital
            solutions.
          </p>
        </div>
        <div>
          <h5 className="text-[#0948FD] text-lg lg:text-xl font-bold">
            6. How do we get started?
          </h5>
          <p className="text-[14px] text-[#4D4D4D]">
            Simply contact us with your project idea! We'll discuss your needs,
            propose a solution, and get started on transforming your vision into
            reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FQASection;
