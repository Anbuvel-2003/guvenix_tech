import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

function HomePageStep() {
  const steps = [
    {
      number: "01",
      title: "Discussion",
      description:
        "We start with a collaborative meeting to understand your needs and business goals.",
    },
    {
      number: "02",
      title: "Ideas & concepts",
      description:
        "Our experts brainstorm and outline tailored solutions for your project.",
    },
    {
      number: "03",
      title: "Testing & Trying",
      description:
        "We test concepts, gather feedback, and make refinements before launch.",
    },
    {
      number: "04",
      title: "Execute & install",
      description:
        "We finalize, deploy, and ensure everything works seamlessly post-launch.",
    },
  ];

  return (
    <div className="flex !mx-15">
      <div className="w-[60%] !py-10 !px-4 flex flex-col items-center">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <p className="text-[#104CBA] text-[20px]  font-manrope tracking-widest leading-8 sm:leading-10 ">
              CONSULTING EXCELLENCE
            </p>
            <p className="text-[20px] sm:text-[24px] md:text-[35px] lg:text-[50px] font-bold font-manrope text-[#0E1F51] !py-10">
              Best pathway to our clients.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium font-manrope text-[#0E1F51] !pb-10">
              Our consulting process begins with a thorough assessment of your
              current IT infrastructure, workflows, and pain points.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-cener items-center gap-5">
                <FaCircleCheck size={20} color="#1B75BB" />
                <p className=" text-[18px] font-manrope text-center font-medium leading-8 sm:leading-10">
                  24/7 Full Service Support
                </p>
              </div>
              <div className="flex flex-row justify-cener items-center gap-5">
                <FaCircleCheck size={20} color="#1B75BB" />
                <p className=" text-[18px] font-manrope text-center font-medium leading-8 sm:leading-10">
                  Immediate Response
                </p>
              </div>
              <div className="flex flex-row justify-cnter items-center gap-5">
                <FaCircleCheck size={20} color="#1B75BB" />
                <p className=" text-[18px] font-manrope text-center font-medium leading-8 sm:leading-10">
                   Easy to Approach us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* steps column */}
      <div className="w-full !py-10 !pl-20 flex flex-col items-center">
        <div className="relative lg:w-[70%] w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex w-full !mb-12
              lg:flex-row md:flex-row flex-row
              ${
                index % 2 === 0
                  ? "lg:justify-start md:justify-start justify-end"
                  : "lg:justify-end md:justify-end justify-end"
              }
            `}
            >
              {/* Step Box */}
              <div
                className={`bg-gray-100 rounded-xl !p-5 shadow-md 
                w-[85%] sm:w-[80%] md:w-[300px] `}
              >
                <h3 className="text-lg font-semibold !mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Number Circle */}
              <div
                className={`
                absolute flex items-center justify-center font-bold rounded-full z-10
                w-10 h-10 md:w-12 md:h-12
                bg-white border-2 border-gray-400
                lg:left-1/2 md:left-1/2 left-0
                transform lg:-translate-x-1/2 md:-translate-x-1/2 translate-x-0 lg:translate-y-10 md:-translate-y-10 translate-y-15
              `}
              >
                {step.number}
              </div>

              {/* Vertical Line (only between numbers) */}
              {index !== steps.length - 1 && (
                <div
                  className={`
                  absolute border-l-2 border-dotted border-gray-300 z-0
                  lg:left-1/2 md:left-1/2 left-5
                  top-12 bottom-[-6rem]
                  transform lg:-translate-x-1/2 md:-translate-x-1/2 translate-x-0 lg:-translate-y-0 md:-translate-y-1/2 translate-y-12
                `}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageStep;
