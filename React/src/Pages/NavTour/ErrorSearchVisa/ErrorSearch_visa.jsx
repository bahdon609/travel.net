import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import img from "../../../assets/banner/bannerimageforhaj.jpg";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { div } from "framer-motion/client";
import SkeletonParallaxLoader from "../../ContactUs/Contact_SkeletonLoader";
import NavVisaSkelator from "../../NavVisa/NavVisaSkelator";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { url } from "../../../../connection";

const ErrorSearch_visa = () => {
  const [activeTab, setActiveTab] = useState(null);
  const imgUrl = `${url}/storage/uploads/visaPackage/`;
  const axiosPublic = useAxiosPublic();
  const location = useLocation();

  const { data: visaCategoryData = {} } = useQuery({
    queryKey: ["visa_category"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-visa-package-data");
      return res.data;
    },
  });
  //(visaCategoryData)

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      <div className="w-full">
        <div>
          {loading ? (
            <SkeletonParallaxLoader /> // Show skeleton loader while loading
          ) : (
            <Parallax
              blur={0}
              bgImage={img}
              bgImageAlt="Europe Tour Package"
              strength={500}
              bgImageStyle={{
                backgroundAttachment: "fixed",
                height: "55vh",
              }}
            >
              <div
                style={{
                  height: "35vh",
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
                  <h1 className="text-4xl font-bold mb-4">
                    Visa Service in Bangladesh - Visa Agency
                  </h1>
                </div>
              </div>
            </Parallax>
          )}
        </div>

        <div>
          {loading ? (
            <NavVisaSkelator /> // Show skeleton loader while loading
          ) : (
            <div>
              <div className="bg-blue-500 flex flex-wrap justify-center  lg:justify-between mt-m_8px mx-auto w-full xl:w-[1300px] rounded-md">
                {visaCategoryData?.visaPackageData?.map((tab, tabIndex) => (
                  <div className="" key={tabIndex}>
                    {/* Main Tab */}
                    <div
                      className={`py-p_24px px-p_16px  text-white font-semibold ${
                        activeTab === tabIndex
                          ? "bg-blue-700"
                          : "hover:bg-blue-600"
                      }`}
                      onMouseEnter={() => setActiveTab(tabIndex)}
                      onMouseLeave={() => setActiveTab(null)}
                    >
                      {tab.continent} <span>▼</span>
                    </div>

                    {/* Dropdown */}
                    {activeTab === tabIndex &&
                      tab?.visaPackages?.length > 0 && (
                        <div
                          className="absolute  left-0 right-0  bg-white text-blue-500 shadow-lg py-2  w-full xl:w-[1300px] mx-auto border  z-10 "
                          style={{ left: 0 }} // Aligns the dropdown to the left edge
                          onMouseEnter={() => setActiveTab(tabIndex)}
                          onMouseLeave={() => setActiveTab(null)}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full p-p_16px gap-2 max-h-[400px] overflow-y-auto">
                            {tab?.visaPackages?.map((visaPackage, index) => (
                              <Link
                                to={`/visa-details/${visaPackage.id}`}
                                className="flex gap-1 items-center"
                                key={index}
                              >
                                <img
                                  src={`${imgUrl}${visaPackage?.photo_1}`}
                                  className="w-20 h-14 object-cover"
                                  alt={visaPackage.title}
                                />
                                <h1 className="block px-4 py-2 hover:bg-gray-100 font-bold text-text_sm2">
                                  {visaPackage.title}
                                </h1>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>

              <div className="col-span-full text-center text-text_40px text-red-500 font-bold mt-10">
                <p>No visa packages found.</p>
              </div>
              <div>
                {visaCategoryData?.visaPackageData?.map((category, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-center pt-p_60px">
                      <button className="py-p_8px px-p_20px bg-red_halka text-red_dark font-bold rounded-sm text-text_large">
                        {category?.continent}
                      </button>
                    </div>

                    <hr className="mb-m_16px border-1" />

                    {/* Visa Packages Grid */}
                    <div className="mx-auto w-full xl:w-[1300px] pb-p_60px">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-6">
                        {category?.visaPackages?.map((country, index) => (
                          <Link
                            to={`/visa-details/${country.id}`}
                            key={index}
                            className="text-center relative duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                          >
                            <div className="w-full h-[200px]">
                              <img
                                src={`${imgUrl}${country?.photo_1}`}
                                alt={country.title}
                                className="object-cover shadow-lg w-full h-full border"
                              />
                            </div>

                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end top-36">
                              <p className="text-text_title mb-4 font-semibold text-white w-full text-center flex items-center justify-center">
                                {country.title}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mx-auto w-full xl:w-[1300px] mb-m_80px">
                <div className=" ">
                  {/* Section Header */}
                  <div className="bg-teal_color p-4 rounded-t-lg">
                    <h2 className="text-text_large font-bold text-black ">
                      Visa Service in Bangladesh
                    </h2>
                  </div>

                  {/* Main Content */}
                  <div className="bg-white p-6 rounded-b-lg shadow-lg">
                    {/* Main Heading */}
                    <h1 className="text-3xl font-bold mb-4">
                      Visa-processing Agency in Bangladesh
                    </h1>

                    {/* Paragraph */}
                    <p className="mb-4 text-justify">
                      Travel Design BD Travels is a professional visa-processing
                      agency in Bangladesh. The world has come close because of
                      globalization. We can easily travel across the world from
                      one corner to another for purposes like studying, medical
                      purposes, traveling, business, and immigrating to another
                      country and living there for the rest of our lives. Travel
                      Design BD Travel Agency is one of the most dedicated and
                      best travel agencies in Bangladesh for tours and travel,
                      supporting applied candidates for Medical Tourism, Tourist
                      Visa, Immigration, and student visa support. As the best
                      tourism company in Bangladesh, we ensure that your purpose
                      for traveling is fully served by us.
                    </p>
                    <h1 className="text-3xl font-bold mb-4">
                      Visa Processing Agency in Bangladesh, Travel Design BD
                      Travels
                    </h1>
                    <p className="mb-4 text-justify">
                      Our visa specialists and professionals are dedicated to
                      serving you with the highest priorities. Years of
                      experience in tours and travels in Bangladesh and in the
                      tourism industry will help you with a hassle-free and
                      relaxing visa processing experience. Travel Design BD
                      Travels strongly believes in providing the best quality
                      services with our experts to help you in your pursuit of
                      immigration, and that makes us the most trustworthy
                      visa-processing agency in Bangladesh as well as in this
                      sector of tours and travels.
                    </p>

                    <p className="mb-4 text-justify">
                      Our affordable hajj and Umrah package from Bangladesh have
                      helped a lot of people to go and perform their hajj.
                      Please visit to our office know the hajj and Umrah cost
                      from Bangladesh. We have achieved the title of best Umrah
                      Travel Agency in Bangladesh by ensuring the best service
                      to our customers. Feel free to come to our office and
                      discuss the Umrah visa requirements for Bangladeshi and
                      learn more about the Umrah package that we are offering
                      for you and your family. We have already launched our
                      Umrah package 2024-2025.
                    </p>
                    <h1 className="text-3xl font-bold mb-4">
                      Importance of Visa for Bangladeshi people
                    </h1>
                    <p className="mb-4 text-justify">
                      A visa is a legitimate form of identity that allows the
                      legal entry of a person to a different country. Although a
                      passport works, in the same manner, to prove that you are
                      legal to access a particular country or state, the main
                      difference between a passport and a visa is in the time
                      period. A visa makes the traveling reasons more specific
                      by stating the purpose of the visit along with a time
                      frame of how long you wish to stay in that country. As a
                      visa agency in Bangladesh, it is our duty to ensure that
                      you get the visa of your desired country along with a good
                      time frame for the purpose you wish to travel. Visa plays
                      an important role for Bangladeshi people as it does in any
                      other country. It carries the respect and reputation of
                      both the traveler and the host country. Without a visa and
                      passport, people will never make it. Every year a huge
                      number of Bangladeshi, travel internationally for various
                      purposes and apply for a visa like- tourist visas, student
                      visas, business visas, and medical visas. This is where we
                      as the best visa-processing agency in Bangladesh come into
                      play by helping you get the visa.
                    </p>

                    {/* Why Book Section */}
                    <h2 className="text-2xl font-bold mt-8 mb-4">Travel</h2>

                    <ul className="space-y-2 text-justify">
                      When one wishes to travel to another country, it is
                      mandatory that the person have a visa. Our visa processing
                      agency in Bangladesh will get the visa for you. Many
                      Bangladeshis have traveled internationally for tourism by
                      us as our visa agency in Bangladesh got them their visa.
                      Turkey is one of the countries that is chosen a lot by
                      Bangladeshi. That is why we also have Turkey tour packages
                      from Bangladesh.
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorSearch_visa;
