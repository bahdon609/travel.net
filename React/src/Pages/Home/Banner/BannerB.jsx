import React, { useEffect, useRef, useState } from "react";
import { MdLocalHotel, MdOutlineCardTravel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import { LiaCcVisa } from "react-icons/lia";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import BannerSkelator from "./BannerSkelator";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Default Swiper styles
import "swiper/css/navigation"; // For Navigation module
import { Navigation } from "swiper/modules";
import BannerIMG1 from "../../../assets/banner/bannerIMG1.jpg";
import BannerIMG2 from "../../../assets/banner/holiday-pack-bg.webp";

const BannerB = () => {
  const [activeTab, setActiveTab] = useState("Tour");
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryVisa, setSelectedCountryVisa] = useState("");

  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedNationalityvisa, setSelectedNationalityVisa] = useState("");

  // for hotel start
  const [check_in, setCheckInDate] = useState(null);
  const [check_out, setCheckOutDate] = useState(null);
  const [distination, setDestination] = useState(null);
  const [room, setRooms] = useState(null);
  const [adult, setAdults] = useState(null);
  const [infant, setInfants] = useState("0");
  const [phone, setContactNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [child, setChild] = useState("0");
  const [selectedCountryHotel, setSelectedCountryHotel] = useState("");
  const [selectedNationalityHotel, setSelectedNationalityHotel] =
    useState("Bangladeshi");

  // for flight start
  const [checkIn, setCheckIn] = useState(null);
  const [flyingFrom, setFlyingFrom] = useState(null);
  const [flyingTo, setFlyingTo] = useState(null);
  const [adultCount, setAdultCount] = useState("1");
  const [childCount, setChildCount] = useState("0");
  const [infantCount, setInfantCount] = useState("0");
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [contactNumbers, setContactNumbers] = useState(null);
  const [emails, setEmails] = useState(null);
  const [flightType, setFlightType] = useState("oneWay");
  const [selectedNationalityFlight, setSelectedNationalityFlight] =
    useState("Bangladeshi");

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axiosPublic.get("/get-homepage-data");
        setCountryData(response.data.getCountryData);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  //(countryData);

  const countryOptions = countryData.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  const nationalOptions = countryData.map((country) => ({
    value: country.nationality,
    label: country.nationality,
  }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if phone number is provided and if it has exactly 11 digits
    if (!contactNumbers) {
      toast.error("Phone number is required.");
      return; // Exit function if phone number is not provided
    }

    if (contactNumbers.length !== 11) {
      toast.error("Phone number must be 11 digits.");
      return; // Exit function if phone number is not 11 digits
    }

    // Check if email is provided
    if (!emails) {
      toast.error("Email is required.");
      return; // Exit function if email is missing
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emails)) {
      toast.error("Please enter a valid email address.");
      return; // Exit function if email is not valid
    }

    const selectedCountryData = countryData.find(
      (country) => country.name === selectedCountry
    );
    const selectedNationalityData = countryData.find(
      (country) => country.nationality === selectedNationality
    );

    const formData = {
      country: selectedCountryData?.name,
      nationality: selectedNationalityData?.nationality,
      contact_number: contactNumbers,
      contact_email: emails,
    };
    //(formData);
    try {
      const res = await axiosPublic.post("/filter-tour-package-data", formData);

      if (res.data) {
        toast.success("Filter successfully!");
        navigate("/tour-search", {
          state: {
            country: selectedCountryData?.name || null, // Handle cases where data might be undefined
            nationality: selectedNationalityData?.nationality || null,
            filteredData: res.data, // Assuming res.data contains the filtered data
          },
        });
      }
    } catch (err) {
      toast.error(err.response.data.errors);
      console.error("Error details:", err);
    }
  };
  // for visa start

  const handleSubmitVisa = async (event) => {
    event.preventDefault();

    // Check if phone number is provided and if it has exactly 11 digits
    if (!contactNumbers) {
      toast.error("Phone number is required.");
      return; // Exit function if phone number is not provided
    }

    if (contactNumbers.length !== 11) {
      toast.error("Phone number must be 11 digits.");
      return; // Exit function if phone number is not 11 digits
    }

    // Check if email is provided
    if (!emails) {
      toast.error("Email is required.");
      return; // Exit function if email is missing
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emails)) {
      toast.error("Please enter a valid email address.");
      return; // Exit function if email is not valid
    }
    const selectedCountryData = countryData.find(
      (country) => country.name === selectedCountryVisa
    );
    const selectedNationalityData = countryData.find(
      (country) => country.nationality === selectedNationalityvisa
    );

    const formData = {
      country: selectedCountryData?.name,
      nationality: selectedNationalityData?.nationality,
      contact_number: contactNumbers,
      contact_email: emails,
    };
    //(formData);
    try {
      const res = await axiosPublic.post("/filter-visa-package-data", formData);
      //(res);
      if (res.data) {
        toast.success("Filter successfully!");
        navigate("/visa-search", {
          state: {
            country: selectedCountryData?.name,
            nationality: selectedNationalityData?.nationality,
            filteredData: res.data,
          },
        });
      }
    } catch (error) {
      // toast.error("Visa package not found.");
      navigate("/search-visa");
      // console.error("Error details:", err);
    }
  };

  const handleSubmitHotel = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (!distination) {
      toast.error("Destination field is required.");
      return;
    }
    if (!check_in) {
      toast.error("Check in field is required.");
      return;
    }
    if (!check_out) {
      toast.error("Check out field is required.");
      return;
    }
    if (!room) {
      toast.error("Room field is required.");
      return;
    }

    if (!adult) {
      toast.error("Adult field is required.");
      return;
    }

    const selectedCountryData = countryData.find(
      (country) => country.name === selectedCountryHotel
    );
    const selectedNationalityDataHotel = countryData.find(
      (country) => country.nationality === selectedNationalityHotel
    );

    if (!selectedCountryData?.name) {
      toast.error("Country field is required.");
      return;
    }
    if (!selectedNationalityDataHotel?.nationality) {
      toast.error("Nationality field is required.");
      return;
    }
    if (!phone) {
      toast.error("Phone number is required.");
      return;
    }

    if (phone.length !== 11) {
      toast.error("Phone number must be 11 digits.");
      return;
    }

    if (!email) {
      toast.error("Email is required.");
      return; // Exit function if email is missing
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // Create a form data object
    const formData = {
      check_in,
      check_out,
      distination,
      room,
      adult,
      infant,
      country: selectedCountryData?.name,
      nationality: selectedNationalityDataHotel?.nationality,
      phone,
      email,
      child,
    };

    //(formData);

    try {
      const response = await axiosPublic.post("/save-hotel-data", formData);
      if (response.data) {
        toast.success("Form submitted successfully!");
        // Reset form fields after successful submission
        resetFormHotel();
      }
    } catch (error) {
      console.error("Error submitting form:", error.response.data.errors);
      toast.error("Error submitting form. Please try again."); // Optionally notify the user of the error
    }
  };

  const resetFormHotel = () => {
    setCheckInDate(""); // Ensure the state corresponds to the form input
    setCheckOutDate("");
    setDestination("");
    setRooms("");
    setAdults("");
    setInfants("");
    setSelectedCountryHotel(null); // Check that this is tied to your dropdown
    setSelectedNationalityHotel("Bangladeshi"); // Default value
    setContactNumber("");
    setEmail("");
    setChild("");
  };

  const handleSubmitFlight = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!flyingFrom) {
      toast.error("Flying From field is required.");
      return;
    }
    if (!flyingTo) {
      toast.error("Flying to field is required.");
      return;
    }
    if (!checkIn) {
      toast.error("Check In field is required.");
      return;
    }
    if (!adultCount) {
      toast.error("Adult field is required.");
      return;
    }

    if (!adultCount) {
      toast.error("Adult field is required.");
      return;
    }

    if (!selectedClass) {
      toast.error("Class  field is required.");
      return;
    }
    if (!selectedNationalityFlight) {
      toast.error("Nationality field is required.");
      return;
    }
    if (!contactNumbers) {
      toast.error("Phone number is required.");
      return; // Exit function if phone number is not provided
    }

    if (contactNumbers.length !== 11) {
      toast.error("Phone number must be 11 digits.");
      return; // Exit function if phone number is not 11 digits
    }

    // Check if email is provided
    if (!emails) {
      toast.error("Email is required.");
      return; // Exit function if email is missing
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emails)) {
      toast.error("Please enter a valid email address.");
      return; // Exit function if email is not valid
    }

    // Create form data object
    const formData = {
      flight_type: flightType, // Get the selected radio value
      flight_from: flyingFrom,
      flight_to: flyingTo,
      departing_date: checkIn,
      adult: adultCount,
      child: childCount,
      infant: infantCount,
      flight_class: selectedClass,
      nationality: selectedNationalityFlight,
      phone: contactNumbers,
      email: emails,
    };
    try {
      const response = await axiosPublic.post("/save-flight-data", formData);
      if (response.data) {
        toast.success("Form submitted successfully!");
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  const resetForm = () => {
    setFlyingFrom("");
    setFlyingTo("");
    setCheckIn("");
    setAdultCount("");
    setChildCount("");
    setInfantCount("");
    setSelectedClass("");
    setSelectedNationalityFlight("Bangladeshi");
    setContactNumbers("");
    setEmails("");
  };

  const dateInputRef = useRef(null);

  const handleDocumentClick = (e) => {
    if (dateInputRef.current && !dateInputRef.current.contains(e.target)) {
      dateInputRef.current.focus();
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <BannerSkelator />
      ) : (
        <div className="bg-cover bg-center  ">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            className="h-full"
          >
            {/* slide-1 */}
            <SwiperSlide>
              <div className="relative  h-[1000px] lg:h-[750px] w-full overflow-hidden">
                <img
                  src={BannerIMG1}
                  alt="Umrah"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-x-110 hover:scale-y-100 zoomX zoomY"
                />

                {/* Content (No Zoom) */}
                <div className="absolute inset-0 flex items-start justify-center ">
                  <div className=" p-4 rounded-lg">
                    <div className="flex flex-col lg:flex-row justify-center  mx-auto w-full xl:w-[1300px] ">
                      <h1 className="lg:text-text_xxxl text-text_xl font-bold text-center text-white lg:mb-8 mt-m_8px lg:mt-0  flex items-center lg:w-[40%] mx-auto lg:h-[500px] ">
                        BEST TRAVEL AGENT IN BANGLADESH
                      </h1>
                      {activeTab === "Tour" && (
                        <div className="p-4 bg-[#5A4A8A] rounded-md">
                          {/* Country Selection */}
                          <label className="block text-white font-bold mb-2">
                            Where do you want to go?{" "}
                            <span className="text-text_sm2 text-red_500">
                              *
                            </span>
                          </label>
                          <Select
                            options={countryOptions}
                            value={countryOptions.find(
                              (option) => option.value === selectedCountry
                            )}
                            onChange={(selectedOption) =>
                              setSelectedCountry(selectedOption.value)
                            }
                            placeholder="Select a Country"
                            className="w-full mb-4 text-black font-semibold rounded bg-white "
                            required
                          />

                          {/* Nationality Selection */}
                          <label className="block text-white font-bold mb-2">
                            Your Nationality{" "}
                            <span className="text-text_sm2 text-red_500">
                              *
                            </span>
                          </label>
                          <Select
                            options={nationalOptions}
                            value={nationalOptions.find(
                              (option) => option.value === selectedNationality
                            )}
                            onChange={(selectedOption) =>
                              setSelectedNationality(selectedOption.value)
                            }
                            placeholder="Select Nationality"
                            className="w-full mb-4 text-black font-semibold rounded bg-white "
                            required
                          />

                          {/* Conditional Fields for Contact Number and Email */}
                          {selectedCountry && selectedNationality && (
                            <div>
                              {/* Contact Number Field */}
                              <label className="block text-white font-bold mb-2">
                                Contact Number{" "}
                                <span className="text-text_sm2 text-red_500">
                                  *
                                </span>
                              </label>
                              <input
                                type="number"
                                name="contact_number"
                                placeholder="Contact Number"
                                className="w-full mb-4 text-black font-semibold rounded bg-white p-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={(e) =>
                                  setContactNumbers(e.target.value)
                                }
                              />

                              {/* Contact Email Field */}
                              <label className="block text-white font-bold mb-2">
                                Email Address{" "}
                                <span className="text-text_sm2 text-red_500">
                                  *
                                </span>
                              </label>
                              <input
                                type="email"
                                name="contact_email"
                                placeholder="Email Address"
                                className="w-full mb-4 text-black font-semibold rounded bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setEmails(e.target.value)}
                                required
                              />
                            </div>
                          )}

                          {/* Submit Button */}
                          <button
                            className="mt-4 w-full p-3 font-bold text-white bg-blue_500 rounded-md flex items-center justify-center gap-1"
                            onClick={handleSubmit}
                            type="submit"
                          >
                            Search <FaSearch />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Navigation buttons */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      )}
    </div>
  );
};

export default BannerB;
