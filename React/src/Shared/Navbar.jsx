import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // for menu icons
import img from "../assets/Logo/travelLogo.png";
import NavSkelator from "./NavSkelator";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update the selected state based on the current path
    const path = location.pathname;
    setSelected(path);
  }, [location]);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const currentPage = localStorage.getItem("selectedPage");
    if (currentPage) {
      setSelected(currentPage);
    }
  }, []);

  const handleLinkClick = (page) => {
    setSelected(page);
    localStorage.setItem("selectedPage", page);
    setIsSidebarOpen(false); // close sidebar after link click
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false); // close sidebar if clicked outside
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      {loading ? (
        <NavSkelator />
      ) : (
        <nav className="bg-white z-10 ">
          <div className="w-full  xl:w-[1300px] mx-auto   lg:py-p_8px  flex justify-between items-center  ">
            {/* Logo Section */}
            <div className="lg:flex items-center overflow-hidden hidden">
              <img
                src={img}
                alt="Travel Design BD Logo"
                className="w-[60px]  lg:w-[120px] lg:h-[70px] object-contain py-2 lg:py-0"
              />
              <div className="flex-col">
                <p className="text-clr_primary_text lg:text-xl font-semibold">
                  Travel Design BD
                </p>
              </div>
            </div>

            {/* Desktop Menu Items */}

            <div className="space-x-6 hidden lg:flex">
              <Link
                to="/"
                className={`relative pb-[4px] font-bold ${
                  selected === "/"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Home
                {selected !== "/" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <Link
                  to=""
                  className={`relative pb-[4px] font-bold ${
                    isOpen
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Visa
                  {!isOpen && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>

                {/* Dropdown Options */}
                {isOpen && (
                  <div
                    className="absolute left-0 mt-1 w-48 bg-white shadow-xl rounded-md border z-50"
                    onMouseEnter={() => setIsOpen(true)} // Mouse dropdown er vitore thakle hide hobe na
                    onMouseLeave={() => setIsOpen(false)} // Mouse sorale hide hobe
                  >
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <Link to="/visit-visa">Visit Visa Services</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <Link to="/study-visa">Study Visa Services</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 font-bold">
                        <Link to="/work-visa">Work Visa Services</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link
                to="/tour"
                className={`relative pb-[4px] font-bold ${
                  selected === "/tour"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Tour Services
                {selected !== "/tour" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
              <Link
                to="/umrah"
                className={`relative pb-[4px] font-bold ${
                  selected === "/umrah"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Umrah Package
                {selected !== "/umrah" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
              <Link
                to="/haj"
                className={`relative pb-[4px] font-bold ${
                  selected === "/haj"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Haj Package
                {selected !== "/haj" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>
              <Link
                to="/success"
                className={`relative pb-[4px] font-bold ${
                  selected === "/success"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Success Story
                {selected !== "/success" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>

              <Link
                to="/about-us"
                className={`relative pb-[4px] font-bold ${
                  selected === "/about-us"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                About Us
                {selected !== "/about-us" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>

              <Link
                to="/contact-us"
                className={`relative pb-[4px] font-bold ${
                  selected === "/contact-us"
                    ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                    : "text-black hover:text-clr_primary_text group"
                }`}
              >
                Contact Us
                {selected !== "/contact-us" && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                )}
              </Link>

              {/* Repeat for other links with their respective paths */}
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center justify-between z-50 w-full">
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt="Travel Design BD   Logo"
                  className="w-[60px]  lg:w-[120px] lg:h-[70px] object-contain py-2 lg:py-0"
                />
              </div>
              <button onClick={toggleSidebar}>
                {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Mobile Sidebar */}
            <div
              ref={sidebarRef}
              className={`fixed z-30 top-0 right-0 h-full w-[70%] bg-white shadow-lg transform ${
                isSidebarOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 lg:hidden`}
            >
              <div className="flex flex-col p-4 space-y-4 mt-20">
                <Link
                  to="/"
                  className={`relative pb-[4px] font-bold hidden ${
                    selected === "/"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Home
                  {selected !== "/" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>
                <Link
                  to="/"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Home
                  {selected !== "/" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>

                <Link
                  to="/visit-visa"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/visit-visa"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Visit Visa Services
                  {selected !== "/visit-visa" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>
                <Link
                  to="/study-visa"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/study-visa"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Study Visa Services
                  {selected !== "/study-visa" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>
                <Link
                  to="/work-visa"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/work-visa"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Work Visa Services
                  {selected !== "/work-visa" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>

                <Link
                  to="/tour"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/tour"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Tour Services
                  {selected !== "/tour" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>
                <Link
                  to="/umrah"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/umrah"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Umrah Package
                  {selected !== "/umrah" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>
                <Link
                  to="/haj"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/haj"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Haj Package
                  {selected !== "/haj" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>
                <Link
                  to="/success"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/success"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Success Story
                  {selected !== "/success" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>

                <Link
                  to="/about-us"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/about-us"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  About Us
                  {selected !== "/about-us" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>

                <Link
                  to="/contact-us"
                  className={`relative pb-[4px] font-bold ${
                    selected === "/contact-us"
                      ? "text-clr_primary_text border-b-2 border-clr_primary_text"
                      : "text-black hover:text-clr_primary_text group"
                  }`}
                >
                  Contact Us
                  {selected !== "/contact-us" && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-clr_primary_text transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

