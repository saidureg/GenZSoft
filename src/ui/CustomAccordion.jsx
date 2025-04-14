import React, { useState } from "react";

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "1. What services does GenzSoft Cloud offer?",
      answer:
        " We provide web & mobile app development, custom software solutions, AI & cloud services, IoT integrations, ERP solutions, DevOps support, UI/UX design, and software testing.",
    },
    {
      question: " 2. Can you develop a custom solution for my business?",
      answer:
        "Yes! We tailor software solutions to fit your specific needs, ensuring scalability, security, and high performance.",
    },
    {
      question: "3. How long does it take to develop a project?",
      answer:
        "Timelines vary based on project complexity. Simple projects may take weeks, while larger ones can take months. We'll provide a clear timeline after discussing your requirements.",
    },
    {
      question: "4. Do you offer support after project completion?",
      answer:
        "Absolutely! We provide ongoing maintenance, updates, and support to ensure your software runs smoothly.",
    },
    {
      question: "5. What industries do you work with?",
      answer:
        "We serve businesses across e-commerce, healthcare, finance, education, startups, and enterprises, delivering innovative digital solutions.",
    },
    {
      question: "6. How do we get started?",
      answer:
        "Simply contact us with your project idea! We'll discuss your needs, propose a solution, and get started on transforming your vision into reality.",
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="py-1">
          <div
            onClick={() => toggle(index)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="font-bold text-[#0948FD] text-lg lg:text-xl">
              {item.question}
            </h2>
            <img
              src="/arrow.png"
              alt="arrow"
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          {openIndex === index && (
            <div className="mt-2 text-sm text-[#4D4D4D] pr-20">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CustomAccordion;
