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

const CheckinRight_Banner = () => {
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
    //(formData);
    try {
      const response = await axiosPublic.post("/save-flight-data", formData);
      if (response.data) {
        toast.success("Form submitted successfully!");

        // Reset form fields after successful submission
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

  const dateInputRef = useRef(null); // Reference to the date input

  const handleDocumentClick = (e) => {
    if (dateInputRef.current && !dateInputRef.current.contains(e.target)) {
      dateInputRef.current.focus(); // Focus the date input on any click
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <BannerSkelator /> // Show skeleton loader while loading
      ) : (
        <div className="bg-cover bg-center h-[1000px] lg:h-[750px] ">
          <div className="relative h-[1000px] lg:h-[750px]  w-full overflow-hidden">
            {/* Image with Zoom Effect */}
            <img
              src={BannerIMG1}
              alt="Umrah"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-x-110 hover:scale-y-100 zoomX zoomY"
            />

            {/* Content (No Zoom) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" lg:p-4 rounded-lg">
                <div className="flex flex-col lg:flex-row justify-center  mx-auto w-full xl:w-[1300px] ">
                  <h1 className="lg:text-text_xxxl text-text_xl font-bold text-center text-[#0075BE] lg:mb-8 mt-m_8px lg:mt-0  flex items-center lg:w-[40%] mx-auto lg:h-[500px] ">
                    BEST TRAVEL AGENT IN BANGLADESH
                  </h1>
                  <div className="p-6 rounded-lg w-full lg:w-[60%] mx-auto lg:mt-m_16px ">
                    {/* Tab Headers */}
                    <div className="flex gap-1">
                      <button
                        className={`px-2 md:px-4 md:py-2  text-text_small md:text-text_title flex items-center justify-center md:gap-2 font-bold rounded-t-md ${
                          activeTab === "Tour"
                            ? "bg-blue_dark text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => setActiveTab("Tour")}
                      >
                        <MdOutlineCardTravel /> Tour
                      </button>
                      <button
                        className={`px-2 md:px-4 md:py-2  text-text_small md:text-text_title flex items-center justify-center md:gap-2 font-bold py-2 gap-1 rounded-t-md ${
                          activeTab === "Visa"
                            ? "bg-blue_dark text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => setActiveTab("Visa")}
                      >
                        <LiaCcVisa />
                        Visa
                      </button>
                      <button
                        className={`px-2 md:px-4 md:py-2  text-text_small md:text-text_title flex items-center justify-center md:gap-2 font-bold py-2 gap-1 rounded-t-md ${
                          activeTab === "Hotel"
                            ? "bg-blue_dark text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => setActiveTab("Hotel")}
                      >
                        <MdLocalHotel />
                        Hotel
                      </button>
                      <button
                        className={`px-2 md:px-4 md:py-2  text-text_small md:text-text_title flex items-center justify-center md:gap-2 font-bold py-2 gap-1 rounded-t-md ${
                          activeTab === "Flight"
                            ? "bg-blue_dark text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => setActiveTab("Flight")}
                      >
                        <RiFlightTakeoffLine />
                        Flight
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-purple_dark p-p_16px">
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
                            styles={{
                              menuList: (base) => ({
                                ...base,
                                maxHeight: "170px", // Adjust the height to fit 3 items (approximately)
                                overflowY: "auto", // Enable vertical scrollbar
                              }),
                            }}
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
                            styles={{
                              menuList: (base) => ({
                                ...base,
                                maxHeight: "170px", // Adjust the height to fit 3 items (approximately)
                                overflowY: "auto", // Enable vertical scrollbar
                              }),
                            }}
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

                      {activeTab === "Visa" && (
                        <div className="p-4 bg-[#5A4A8A] rounded-md">
                          {/* Country Selection */}
                          <label className="block text-white font-bold mb-2">
                            Where do you want to go?{" "}
                            <span className="text-text_sm2 text-red_500">
                              *
                            </span>
                          </label>
                          <Select
                            required
                            options={countryOptions}
                            value={countryOptions.find(
                              (option) => option.value === selectedCountryVisa
                            )}
                            onChange={(selectedOption) =>
                              setSelectedCountryVisa(selectedOption.value)
                            }
                            placeholder="Select a Country"
                            className="w-full mb-4 text-black font-semibold rounded bg-white "
                            styles={{
                              menuList: (base) => ({
                                ...base,
                                maxHeight: "170px", // Adjust the height to fit 3 items (approximately)
                                overflowY: "auto", // Enable vertical scrollbar
                              }),
                            }}
                          />

                          {/* Nationality Selection */}
                          <label className="block text-white font-bold mb-2">
                            Your Nationality{" "}
                            <span className="text-text_sm2 text-red_500">
                              *
                            </span>
                          </label>
                          <Select
                            required
                            options={nationalOptions}
                            value={nationalOptions.find(
                              (option) =>
                                option.value === selectedNationalityvisa
                            )}
                            onChange={(selectedOption) =>
                              setSelectedNationalityVisa(selectedOption.value)
                            }
                            placeholder="Select Nationality"
                            className="w-full mb-4 text-black font-semibold rounded bg-white "
                            styles={{
                              menuList: (base) => ({
                                ...base,
                                maxHeight: "170px", // Adjust the height to fit 3 items (approximately)
                                overflowY: "auto", // Enable vertical scrollbar
                              }),
                            }}
                          />

                          {selectedCountryVisa && selectedNationalityvisa && (
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
                                className="w-full mb-4 text-black font-semibold rounded bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            onClick={handleSubmitVisa}
                            className="mt-4 w-full p-3 font-bold text-white bg-blue_500 rounded-md flex items-center justify-center gap-1"
                            type="submit"
                          >
                            Search
                            <FaSearch />
                          </button>
                        </div>
                      )}

                      {activeTab === "Hotel" && (
                        <div>
                          <form
                            className="p-2 md:p-4 bg-[#5A4A8A] rounded-md"
                            onSubmit={handleSubmitHotel}
                          >
                            <div className="grid grid-cols-1 gap-4 mb-4">
                              {/* Destination Input */}
                              <div>
                                <label className="block text-white mb-1 ">
                                  Where do you want to go{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <div className="relative">
                                  <input
                                    type="text"
                                    value={distination}
                                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="City/State/Country/Country Code"
                                    onChange={(e) =>
                                      setDestination(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              {/* Check In / Check Out */}
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="flex-1 ">
                                  <label className="block text-white mb-1  ">
                                    Check In{" "}
                                    <span className="text-text_sm2 text-red_500">
                                      *
                                    </span>
                                  </label>

                                  <input
                                    value={check_in} // Use state for controlled input
                                    onChange={(e) =>
                                      setCheckInDate(e.target.value)
                                    } // Set state on change
                                    className="p-2 bg-white text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    type="date"
                                    placeholder="MM/DD/YYYY" // Placeholder text
                                  />
                                </div>
                                <div className="flex-1 ">
                                  <label className="block text-white mb-1 ">
                                    Check Out{" "}
                                    <span className="text-text_sm2 text-red_500">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    ref={dateInputRef} // Attach the ref to the input
                                    value={check_out}
                                    onChange={(e) =>
                                      setCheckOutDate(e.target.value)
                                    }
                                    type="date"
                                    className="p-2 bg-white text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="MM/DD/YYYY"
                                  />
                                </div>
                              </div>

                              {/* Room Selection */}
                              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div>
                                  <label className="block text-white mb-1 ">
                                    Rooms{" "}
                                    <span className="text-text_sm2 text-red_500">
                                      *
                                    </span>
                                  </label>
                                  <select
                                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={room} // Use state
                                    onChange={(e) => setRooms(e.target.value)} // Set state on change
                                  >
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-white mb-1 ">
                                    Adult (12+ yrs){" "}
                                    <span className="text-text_sm2 text-red_500">
                                      *
                                    </span>
                                  </label>
                                  <select
                                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={adult} // Use state
                                    onChange={(e) => setAdults(e.target.value)} // Set state on change
                                  >
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-white mb-1 ">
                                    Child (3-11 yrs){" "}
                                  </label>
                                  <select
                                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={child} // Use state
                                    onChange={(e) => setChild(e.target.value)} // Set state on change
                                  >
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                  </select>
                                </div>

                                {/* Infant Selection */}
                                <div>
                                  <label className="block text-white mb-1 ">
                                    Infant (0-2 yrs){" "}
                                  </label>
                                  <select
                                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={infant} // Use state
                                    onChange={(e) => setInfants(e.target.value)} // Set state on change
                                  >
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                  </select>
                                </div>
                              </div>

                              {/* Residence and Nationality */}
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-white mb-1 ">
                                    Residence{" "}
                                    <span className="text-text_sm2 text-red_500">
                                      *
                                    </span>
                                  </label>
                                  <Select
                                    options={countryOptions}
                                    value={countryOptions.find(
                                      (option) =>
                                        option.value === selectedCountryHotel
                                    )}
                                    onChange={(selectedOption) =>
                                      setSelectedCountryHotel(
                                        selectedOption.value
                                      )
                                    } // Set state
                                    placeholder="Country"
                                    styles={{
                                      menuList: (base) => ({
                                        ...base,
                                        maxHeight: "170px", // Adjust the height to fit 3 items (approximately)
                                        overflowY: "auto", // Enable vertical scrollbar
                                      }),
                                    }}
                                  />
                                </div>
                                <div>
                                  <label className="block text-white mb-1 ">
                                    Your Nationality{" "}
                                    <span className="text-text_sm2 text-red_500">
                                      *
                                    </span>
                                  </label>
                                  <Select
                                    options={nationalOptions}
                                    value={nationalOptions.find(
                                      (option) =>
                                        option.value ===
                                        selectedNationalityHotel
                                    )}
                                    onChange={(selectedOption) =>
                                      setSelectedNationalityHotel(
                                        selectedOption.value
                                      )
                                    } // Set state
                                    placeholder="Select Nationality"
                                    styles={{
                                      menuList: (base) => ({
                                        ...base,
                                        maxHeight: "170px", // Adjust the height to fit 3 items (approximately)
                                        overflowY: "auto", // Enable vertical scrollbar
                                      }),
                                    }}
                                  />
                                </div>
                              </div>

                              {/* Contact and Email */}
                              <div className="grid grid-cols-2 gap-4 ">
                                <div>
                                  <label className="block text-white mb-1 ">
                                    Contact Number{" "}
                                    <span className="text-text_sm2 text-red_500">
                                      *
                                    </span>
                                  </label>
                                  <div className="relative">
                                    <input
                                      value={phone}
                                      type="number"
                                      className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Contact Number"
                                      onChange={(e) =>
                                        setContactNumber(e.target.value)
                                      } // Set state on change
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="block text-white mb-1 ">
                                    Email Address{" "}
                                    <span className="text-text_sm2 text-red_500">
                                      *
                                    </span>
                                  </label>
                                  <div className="relative">
                                    <input
                                      value={email}
                                      type="email"
                                      className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Email Address"
                                      onChange={(e) => setEmail(e.target.value)} // Set state on change
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Search Button */}
                              <button
                                className="mt-4 w-full p-3 font-bold text-white bg-blue_500 rounded-md flex items-center justify-center gap-1"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      )}

                      {activeTab === "Flight" && (
                        <div>
                          <form
                            className="p-2 md:p-4 bg-[#5A4A8A] rounded-md"
                            onSubmit={handleSubmitFlight}
                          >
                            <div className="mb-4">
                              <div className="flex justify-around mb-3">
                                <label className="flex items-center text-white">
                                  <input
                                    type="radio"
                                    name="flight_type"
                                    id="One-Way"
                                    defaultChecked
                                    onChange={() => setFlightType("One-Way")}
                                    className="mr-2 "
                                  />
                                  One-Way
                                </label>
                                <label className="flex items-center text-white">
                                  <input
                                    type="radio"
                                    name="flight_type"
                                    id="ROUND-TRIP"
                                    onChange={() => setFlightType("ROUND-TRIP")}
                                    className="mr-2"
                                  />
                                  Round-Trip
                                </label>

                                <label className="flex items-center text-white">
                                  <input
                                    type="radio"
                                    name="flight_type"
                                    id="MULTI-CITY"
                                    onChange={() => setFlightType("MULTI-CITY")}
                                    className="mr-2"
                                  />
                                  Multi-City
                                </label>
                              </div>
                            </div>

                            {/* Flying from / Flying to / Departing */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="block text-white mb-1">
                                  Flying From{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Flying From"
                                  value={flyingFrom}
                                  onChange={(e) =>
                                    setFlyingFrom(e.target.value)
                                  }
                                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              <div>
                                <label className="block text-white mb-1">
                                  Flying To{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Flying To"
                                  value={flyingTo}
                                  onChange={(e) => setFlyingTo(e.target.value)}
                                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-2  gap-4 mb-4">
                              <div>
                                <label className="block text-white mb-1">
                                  Check In{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>

                                <input
                                  value={checkIn} // Controlled input
                                  onChange={(e) => setCheckIn(e.target.value)} // Correctly set the state on change
                                  className="p-2 bg-white text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  type="date"
                                  // This makes it a  field
                                />
                              </div>
                              <div className="flex-1 ">
                                <label className="block text-white mb-1 ">
                                  Check Out{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <input
                                  ref={dateInputRef} // Attach the ref to the input
                                  value={check_out}
                                  onChange={(e) =>
                                    setCheckOutDate(e.target.value)
                                  }
                                  type="date"
                                  className="p-2 bg-white text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="MM/DD/YYYY"
                                />
                              </div>
                            </div>

                            {/* Passenger details */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <label className="block text-white mb-1">
                                  Adult (12+ yrs){" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <select
                                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={adultCount}
                                  onChange={(e) =>
                                    setAdultCount(e.target.value)
                                  }
                                >
                                  <option>Select</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-white mb-1">
                                  Child (3-11 yrs)
                                </label>
                                <select
                                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={childCount}
                                  onChange={(e) =>
                                    setChildCount(e.target.value)
                                  }
                                >
                                  <option>Select</option>
                                  <option>0</option>
                                  <option>1</option>
                                  <option>2</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-white mb-1">
                                  Infant (0-2 yrs)
                                </label>
                                <select
                                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={infantCount}
                                  onChange={(e) =>
                                    setInfantCount(e.target.value)
                                  }
                                >
                                  <option>Select</option>
                                  <option>0</option>
                                  <option>1</option>
                                  <option>2</option>
                                </select>
                              </div>
                            </div>

                            {/* Class and Nationality */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="block text-white mb-1">
                                  Class{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <select
                                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  value={selectedClass}
                                  onChange={(e) =>
                                    setSelectedClass(e.target.value)
                                  }
                                >
                                  <option>Select a class</option>
                                  <option>Economy</option>
                                  <option>Business</option>
                                  <option>First Class</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-white mb-1">
                                  Your Nationality{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <Select
                                  options={nationalOptions}
                                  value={nationalOptions.find(
                                    (option) =>
                                      option.value === selectedNationalityFlight
                                  )}
                                  onChange={(selectedOption) =>
                                    setSelectedNationalityFlight(
                                      selectedOption.value
                                    )
                                  }
                                  placeholder="Select Nationality"
                                  styles={{
                                    menuList: (base) => ({
                                      ...base,
                                      maxHeight: "160px", // Adjust the height to fit 3 items (approximately)
                                      overflowY: "auto", // Enable vertical scrollbar
                                    }),
                                  }}
                                />
                              </div>
                            </div>

                            {/* Contact info */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="block text-white mb-1">
                                  Contact Number{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <div className="flex items-center">
                                  <input
                                    type="number"
                                    placeholder="Contact Number"
                                    value={contactNumbers}
                                    onChange={(e) =>
                                      setContactNumbers(e.target.value)
                                    }
                                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-white mb-1">
                                  Email Address{" "}
                                  <span className="text-text_sm2 text-red_500">
                                    *
                                  </span>
                                </label>
                                <div className="flex items-center">
                                  <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={emails}
                                    onChange={(e) => setEmails(e.target.value)}
                                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Search button */}
                            <button
                              type="submit"
                              className="mt-4 w-full p-3 font-bold text-white bg-blue_500 rounded-md flex items-center justify-center gap-1"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckinRight_Banner;
