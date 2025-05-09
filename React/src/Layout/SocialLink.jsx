import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLink = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading state (e.g., data fetching)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // After 2 seconds, set isLoading to false
    }, 2000);
  }, []);

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col">
      {isLoading ? (
        // Show skeleton loaders when loading
        <>
          <div className="w-10 h-10 bg-gray-300 animate-pulse "></div>
          <div className="w-10 h-10 bg-gray-300 animate-pulse "></div>
          <div className="w-10 h-10 bg-gray-300 animate-pulse "></div>
          <div className="w-10 h-10 bg-gray-300 animate-pulse "></div>
          <div className="w-10 h-10 bg-gray-300 animate-pulse "></div>
          <div className="w-10 h-10 bg-gray-300 animate-pulse "></div>
        </>
      ) : (
        // Display actual social media icons after loading
        <>
          <a
            href="https://www.facebook.com/travelsmentorbd"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container w-10 h-10 flex items-center justify-center bg-blue-600 text-white hover:scale-110 transition-transform "
          >
            <FaFacebookF />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=8801511004002" // Replace with the actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-green-500 text-white hover:scale-110 transition-transform"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white hover:scale-110 transition-transform "
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition-transform "
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-blue-800 text-white hover:scale-110 transition-transform "
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:example@example.com"
            className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white hover:scale-110 transition-transform"
          >
            <FaEnvelope />
          </a>
        </>
      )}
    </div>
  );
};

export default SocialLink;
