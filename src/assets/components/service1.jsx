import React from "react";
import img from "../img/about-service-2.webp";
import { FaCircleCheck } from "react-icons/fa6";

function Service1() {
  return (
    <div>
      <div className="flex flex-row  justify-center bg-amber-800 !p-20 " >
        <div className="w-full ">
          <img src={img} alt="" className="rounded-2xl"/>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <p className="text-white text-[20px] sm:text-[25px] md:text-[35px] lg:text-[50px] font-manrope font-bold leading-8 sm:leading-10 ">
              Why our services are better than others?
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium font-manrope text-[#0E1F51] !py-10">
              We don't believe in a one-size-fit-all approach. Our services are
              carefully customized to suit your specific need, ensuring you to
              achieve your goals.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium font-manrope text-[#0E1F51] !pb-10">
              We believe in delivering value that extends your beyond the
              immediate project. Our services are designed to provide a
              long-term benefits.
            </p>
            <div className="flex flex-row gap-20">
              <div className="flex flex-row justify-center items-center gap-5">
                <FaCircleCheck size={20} color="#1B75BB" />
                <p className=" text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-manrope text-center font-semibold leading-8 sm:leading-10" >
                PPD Development
                </p>
              </div>
              <div className="flex flex-row justify-center items-center gap-5">
                <FaCircleCheck size={20} color="#1B75BB" />
                <p className=" text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-manrope text-center font-semibold leading-8 sm:leading-10" >
                Quick Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service1;
