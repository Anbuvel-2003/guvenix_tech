
import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/2.png";
import Logo1 from "../assets/1.png";
import { CiMobile3, CiSettings } from "react-icons/ci";
import { LuBrainCircuit, LuCloudCog, LuMonitorCog } from "react-icons/lu";
import { FaPencilRuler } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbBrandSpeedtest } from "react-icons/tb";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Handle scroll effect to hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (index) => {
    // setActiveDropdown(activeDropdown == index ? null : index);
    console.log("checkingggg", activeDropdown);
    if (activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    { title: "About Us", path: "/aboutUs" },
    { title: "Contact Us", path: "/contactUs" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="  px-4">
        <div className="flex  lg:justify-start justify-between lg:w-[95vw] md:w-[95vw]  items-center h-16">
          {/* Logo - moved significantly to the right */}
          <div className="flex-shrink-0  hidden lg:block cursor-pointer ">
            <img
              src={Logo1}
              alt={`client-`}
              className="w-[25%] h-[25%] "
              onClick={() => window.location.href = "/"}
            />
          </div>
          <div className="flex-shrink-0 lg:hidden block ">
            <img
              src={Logo}
              alt={`client-`}
              className="w-[15%] h-[15%] md:w-[25%] md:h-[25%] "
              onClick={() => window.location.href = "/"}
            />
          </div>

          {/* Desktop Navigation - improved spacing */}
          <div
            className="hidden lg:flex !py-5 items-center justify-end gap-20 flex-1 pr-8"
            ref={dropdownRef}
          >
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => {
                  link.dropdown && setActiveDropdown(null);
                }}
              >
                <a
                  href={link.path}
                  className="relative group flex items-center uppercase text-sm font-syne text-black 
    hover:text-transparent hover:bg-[#00ADEE] hover:bg-clip-text transition-all duration-700 ease-in-out"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {link.title}
                  {link.dropdown && (
                    <span className="ml-1 text-xs inline-block text-black">
                      ▾
                    </span>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ADEE] group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-b-lg shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full">
                  <a
                    href={link.path}
                    className="block !px-3 !py-2 text-[16px]  font-syne text-black w-full"
                    onClick={() => toggleDropdown(index)}
                  >
                    {link.title}
                  </a>
                  {link.dropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="!px-3 !py-2 transition-transform duration-200"
                      aria-expanded={activeDropdown === index}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;