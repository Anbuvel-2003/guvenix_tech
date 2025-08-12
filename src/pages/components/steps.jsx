import React from "react";

function Step() {
  const steps = [
    {
      number: "1",
      title: "01. Discussion",
      description:
        "We start with a collaborative meeting to understand your needs and business goals.",
    },
    {
      number: "2",
      title: "02. Ideas & concepts",
      description:
        "Our experts brainstorm and outline tailored solutions for your project.",
    },
    {
      number: "3",
      title: "03. Testing & Trying",
      description:
        "We test concepts, gather feedback, and make refinements before launch.",
    },
    {
      number: "4",
      title: "04. Execute & install",
      description:
        "We finalize, deploy, and ensure everything works seamlessly post-launch.",
    },
  ];

  return (
    <div className="w-full !py-10 !px-0  flex items-center justify-center">
      <div className="w-full flex flex-col md:flex-row  md:space-x-0 space-y-10 md:space-y-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center w-full md:w-full flex-1 px-4 "
          >
            {/* Number Circle */}
            <div className="relative flex items-center justify-start !mb-6 cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 bg-white transition-all duration-300 group-hover:bg-blue-500 group-hover:border-none " />
              <span className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800  transition-colors group-hover:text-white duration-300">
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[18px] font-medium !mb-3 group-hover:text-blue-400 transition-colors duration-300 text-left cursor-pointer">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[16px] text-gray-600 transition-colors duration-300 text-center max-w-[300px] cursor-pointer">
              {step.description}
            </p>

            {/* Horizontal line (desktop only) */}
           {index !== steps.length - 1 && (
  <div className="hidden md:block absolute  top-7 left-ful lg:!ml-100 md:!ml-60 w-full h-0.5 bg-gray-300 z-[-1]" />
)}


            {/* Vertical line (mobile only) */}
            {index !== steps.length - 1 && (
              <div className="md:hidden w-0.5 h-0 !ml-8 bg-gray-300 !mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Step;
