import { IoIosMailOpen } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Parallax } from "react-parallax";
import img from "../../assets/banner/bd-tour-image.jpg";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { MdCallEnd, MdLocationOn, MdMail } from "react-icons/md";
import SkeletonParallaxLoader from "./Contact_SkeletonLoader";
import SkeletorLoaderKeep from "./skeletorLoaderKeep";

const ContactUs = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    // Simulate loading completion
    setTimeout(() => setLoading(false), 2000); // 2 seconds for demo purpose

    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    //(formData);

    try {
      // Assuming you're sending form data to an API endpoint
      const res = await axiosPublic.post("/save-contact-form-data", formData);

      if (res.data) {
        toast.success("Form submitted successfully!");
        //("Response data:", res.data);

        // Clear the form fields after successful submission
        e.target.reset();
      }
    } catch (err) {
      console.error("Error details:", err);
      if (err.response) {
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        console.error("Response headers:", err.response.headers);
      } else if (err.request) {
        console.error("Request data:", err.request);
      } else {
        console.error("Error message:", err.message);
      }
      console.error("Error config:", err.config);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <SkeletonParallaxLoader textWidth={textWidth} /> // Show skeleton loader while loading
        ) : (
          <Parallax
            blur={0}
            bgImage={img}
            bgImageAlt="Europe Tour Package"
            strength={600}
            bgImageStyle={{
              backgroundAttachment: "fixed",
              height: "60vh",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="text-center text-white"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "20px",
                }}
              >
                <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
              </div>
            </div>
          </Parallax>
        )}
      </div>

      <div>
        {loading ? (
          <SkeletorLoaderKeep /> // Show skeleton loader while loading
        ) : (
          <div>
            <div className="flex flex-col lg:flex-row gap-gap_primary w-full xl:w-[1300px] mx-auto px-2 lg:px-0 my-m_24px">
              <div className="flex-1">
                <h1 className="text-text_secondary text-left mb-0 font-bold text-text_xxl  uppercase">
                  Keep in touch
                </h1>

                <form onSubmit={handleSubmit} className="mt-mt_secondary">
                  <input
                    type="text"
                    name="name"
                    className="mt-mt_medium h-[50px] focus:ring-0 px-4 focus:border rounded-rounded_primary bg-bg_secondary w-full focus:outline-none border"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="number"
                    name="phone"
                    className="mt-mt_medium h-[50px] focus:ring-0 px-4 focus:border rounded-rounded_primary bg-bg_secondary w-full focus:outline-none border"
                    placeholder="Enter Your Phone"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="mt-mt_medium h-[50px] focus:ring-0 px-4 focus:border rounded-rounded_primary bg-bg_secondary w-full focus:outline-none border"
                    placeholder="Enter Your Email"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    className="mt-mt_medium h-[50px] focus:ring-0 px-4 focus:border rounded-rounded_primary bg-bg_secondary w-full focus:outline-none border"
                    placeholder="Enter Your Subject"
                    required
                  />
                  <textarea
                    name="message"
                    className="mt-mt_medium p-pl_primary focus:ring-0 px-4 focus:border rounded-rounded_primary bg-bg_secondary w-full focus:outline-none border"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write Your Message"
                  ></textarea>
                  <button className="btn_primary my-4 w-full font-extrabold">
                    Send Message
                  </button>
                </form>
              </div>
              <div></div>
              <div className="flex-1 flex items-center">
                <div>
                  <p className="text-text_large font-normal text-justify">
                    Important- It is highly recommended to you that you talk to
                    us about your tours and travels. We have our experienced
                    tour experts who will guide you with all the valid
                    information that you need to know about your tours. You can
                    ask questions and can have a clear idea about your tour.
                    Accommodations, foods, visas, pricing of packages, all
                    information should be discussed beforehand to avoid any
                    misunderstanding in the future. You can reach us through
                    email. Send us a mail and we will get back to you right
                    away. Or you can call us directly at the given phone number
                    and talk to us. The best way is to come to visit us, have a
                    cup of tea and talk to our expert guides in person and book
                    your package right away!
                  </p>

                  <div className="flex">
                    <a
                      href="https://www.facebook.com/travelsmentorbd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-container w-14 h-10 flex items-center justify-center bg-blue-600 text-white hover:scale-110 transition-transform "
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=8801511004002" // Replace with the actual WhatsApp number
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-10 flex items-center justify-center bg-green-500 text-white hover:scale-110 transition-transform"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-10 flex items-center justify-center bg-blue-400 text-white hover:scale-110 transition-transform "
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition-transform "
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-10 flex items-center justify-center bg-blue-800 text-white hover:scale-110 transition-transform "
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="mailto:example@example.com"
                      className="w-14 h-10 flex items-center justify-center bg-gray-700 text-white hover:scale-110 transition-transform"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1  lg:grid-cols-3 w-full xl:w-[1300px] mx-auto  gap-5 mb-m_24px">
              <div className=" text-center shadow p-5 rounded border border-gray-300">
                <div className="text-3xl mb-4 text-center text-blue-500">
                  <MdLocationOn className="text-center w-full mx-auto text-text_60px" />
                </div>
                <h2 className="text-xl font-bold">Find Us</h2>
                <h5 className="mt-2 text-gray-700">
                  119, ConfidenceTower (1st Floor) Shahjadpur,Gulshan,
                  Dhaka-1212
                </h5>
              </div>

              <div className=" text-center shadow p-5 rounded border border-gray-300">
                <div className="text-3xl mb-4 text-blue-500 text-center">
                  <MdMail className="text-center w-full mx-auto text-text_60px" />
                </div>
                <h2 className="text-xl font-bold">Mail Us</h2>
                <h5 className="mt-2 text-gray-700">
                  {" "}
                  contact@traveldesignbd.com
                </h5>
              </div>

              <div className=" text-center shadow p-5 rounded border border-gray-300 ">
                <div className=" mb-4 text-center text-blue-500">
                  <MdCallEnd className="text-center w-full mx-auto text-text_60px" />
                </div>
                <h2 className="text-xl font-bold">Call Us</h2>
                <h5 className="mt-2 text-gray-700">
                  +880 1711 004 002 <br /> +880 1511 004 002
                </h5>
              </div>
            </div>

            <div className="mt-mt_secondary w-full xl:w-[1300px] mx-auto mb-m_24px">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.248826417131!2d90.4217654753845!3d23.78069788990686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d78ebae7b5%3A0x19b215c1532d0ff4!2sBTI%20Premier%20Shopping%20Mall%2C%20L-2%2C%20S-14%2FE%20North%20Badda%2C%20Gulshan%2C%20Dhaka-1212!5e0!3m2!1sen!2sbd!4v1716726957366!5m2!1sen!2sbd"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0 rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
