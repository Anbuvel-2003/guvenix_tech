// import React from "react";

// function Footer() {
//   return <div>footer</div>;
// }

// export default Footer;
import React from "react";
import logo from "../assets/2.png";
import bg1 from "../assets/footer-bg1.png";
import bg2 from "../assets/footer-bg2.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <footer className="bg-[#1B75BB] text-white">
      {/* Top Section with Background Images */}
      <div className="relative overflow-hidden">
        {/* Background images */}
        <img
          src={bg2}
          alt="bg"
          className="absolute opacity-50 object-cover w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] 
          top-0 left-1/2 -translate-x-1/2 
          lg:left-0 lg:bottom-0 lg:top-auto lg:translate-x-0"
        />
        <img
          src={bg1}
          alt="bg"
          className="absolute opacity-50 object-cover w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] 
          bottom-0 left-1/2 -translate-x-1/2 
          lg:right-0 lg:bottom-0 lg:left-auto lg:translate-x-0"
        />

        {/* Content */}
        <div className="relative z-10 !px-10 sm:!px-10 lg:!px-20 !py-12 lg:!pt-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {/* Logo + About */}
            <div className="lg:w-1/2">
              <h3 className="text-white text-lg font-semibold !mb-4">
                Guvenix Technologies
              </h3>
              <p className="text-[#fff] lg:w-[75%] text-justify !mb-6">
                We are a skilled collective of freelance developers and
                designers, specializing in full-stack development, custom
                software solutions, and intuitive, user-focused design. From
                concept to launch, we transform bold ideas into scalable,
                future-ready technology.
              </p>
              {/* <div className="flex gap-5">
                <a
                  href="https://www.facebook.com/share/16kW9eZbo2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={24} className="sm:!size-[28px]" />
                </a>
                <a
                  href="https://www.instagram.com/vikramaadhithya_pvt.ltd?igsh=MTB5NDllcjVycnJmYQ=="
                  target="_blank"
                >
                  <FaInstagram size={24} className="sm:!size-[28px]" />
                </a>
                <a
                  href="https://www.linkedin.com/company/aadhithyaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandLinkedin size={24} className="sm:!size-[28px]" />
                </a>
              </div> */}
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 lg:w-1/2">
              <div>
                <h4 className="text-white text-lg font-semibold !mb-4">
                  Quick Link
                </h4>
                <ul className="!space-y-3 sm:!space-y-4">
                  <li>
                    <a href="/" className="text-[#fff] hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Services"
                      className="text-[#fff] hover:text-white"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/portfolio"
                      className="text-[#fff] hover:text-white"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/AboutUs"
                      className="text-[#fff] hover:text-white"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ContactUs"
                      className="text-[#fff] hover:text-white"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold !mb-4">
                  Support
                </h4>
                <ul className="!space-y-3 sm:!space-y-4">
                  <li>
                    <a href="/" className="text-[#fff] hover:text-white">
                      Getting started
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-[#fff] hover:text-white">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-[#fff] hover:text-white">
                      Report a bug
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-[#fff] hover:text-white">
                      Chat support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold !mb-4">
                  Contact Us
                </h4>
                <ul className="!space-y-3 sm:!space-y-4">
                  <li className="flex gap-2">
                    <MdLocationOn size={24} className="sm:!size-[28px]" />
                    <a
                      href="mailto:info@aadhithyaa.in"
                      className="text-[#fff] hover:text-white"
                    >
                     Coimbatore
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <MdEmail size={24} className="sm:!size-[28px]" />
                    <a
                      href="mailto:info@aadhithyaa.in"
                      className="text-[#fff] hover:text-white"
                    >
                      guvenix1606@gmail.com
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <MdPhone size={24} className="sm:!size-[28px]" />
                    <a
                      href="mailto:info@aadhithyaa.in"
                      className="text-[#fff] hover:text-white"
                    >
                      +91 9677395645
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#194365] h-auto lg:h-[80px] flex flex-col lg:flex-row justify-center items-center text-[#fff] !text-[14px] sm:!text-[16px] !px-6 !py-4">
        <p className="text-center lg:text-left">
         Copyright 2025 by <a className="font-bold " href="/">Guvenix</a>   All Right Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
