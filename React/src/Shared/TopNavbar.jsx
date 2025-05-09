import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import TopNavSkelator from "./TopNavSkelator";

const TopNavbar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <TopNavSkelator />
      ) : (
        <div className="bg-top_bg p-p_6px  hidden lg:flex">
          {" "}
          {/* Hidden by default, flex on large screens */}
          <div className="w-full  xl:w-[1300px] mx-auto text-white flex flex-col lg:flex-row  gap-1 justify-between items-center">
            <div className="flex flex-row items-start lg:items-center lg:space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs lg:text-text_title">
                  <MdEmail />
                </span>
                <a
                  href="mailto:info@traveldesignbd.com"
                  className="text-xs lg:text-text_title text-gray_base hover:text-white"
                >
                  info@traveldesignbd.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs lg:text-text_title">📞</span>
                <a
                  href="+88 01511 004 002"
                  className="text-gray_base hover:text-white text-xs lg:text-text_title"
                >
                  +880 1511 004 002
                </a>
                <a
                  href="+880 1711 004 002"
                  className="text-gray_base hover:text-white text-xs lg:text-text_title"
                >
                  +880 1711 004 002
                </a>
              </div>
            </div>
            <div className=" flex">
              <a
                href="https://www.facebook.com/travelsmentorbd"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container w-12 h-10 flex items-center justify-center bg-blue-600 text-white hover:scale-110 transition-transform "
              >
                <FaFacebookF />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=8801511004002"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-10 flex items-center justify-center bg-green-500 text-white hover:scale-110 transition-transform"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-10 flex items-center justify-center bg-blue-400 text-white hover:scale-110 transition-transform "
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition-transform "
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-10 flex items-center justify-center bg-blue-800 text-white hover:scale-110 transition-transform "
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:example@example.com"
                className="w-12 h-10 flex items-center justify-center bg-gray-700 text-white hover:scale-110 transition-transform"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
