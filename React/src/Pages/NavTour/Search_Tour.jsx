import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import img from '../../assets/banner/bannerimageforhaj.jpg'
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router-dom';
import { url } from '../../../connection';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SkeletonParallaxLoader from '../ContactUs/Contact_SkeletonLoader';
import NavTourSkelator from './NavTourSkelator/NavTourSkelator';

const Search_Tour = () => {
    const [activeTab, setActiveTab] = useState(null);

    const imgUrl = `${url}/storage/uploads/tourPackage/`;
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const { country, nationality, filteredData } = location.state || {};

    //(filteredData)

    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
      <div>
        <div className="w-full">
          <div>
            {loading ? (
              <SkeletonParallaxLoader />
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
                      International tour packages from Bangladesh
                    </h1>
                  </div>
                </div>
              </Parallax>
            )}
          </div>

          <div>
            {loading ? (
              <NavTourSkelator /> // Show skeleton loader while loading
            ) : (
              <div>
                <div className="bg-blue-500 flex flex-wrap justify-center  lg:justify-between mt-m_8px mx-auto w-full xl:w-[1300px] rounded-md">
                  {filteredData?.continentData?.map((tab, tabIndex) => (
                    <div className="" key={tabIndex}>
                      {/* Main Tab */}
                      <button
                        className={`py-p_24px px-p_16px  text-white font-semibold ${
                          activeTab === tabIndex
                            ? "bg-blue-700"
                            : "hover:bg-blue-600"
                        }`}
                        onMouseEnter={() => setActiveTab(tabIndex)}
                        onMouseLeave={() => setActiveTab(null)}
                      >
                        {tab.continent} <span>▼</span>
                      </button>

                      {/* Dropdown */}
                      {activeTab === tabIndex && tab?.tagData?.length > 0 && (
                        <div
                          className="absolute  left-0 right-0  bg-white text-blue-500 shadow-lg py-2  w-full xl:w-[1300px] mx-auto border  z-10"
                          style={{ left: 0 }} // Aligns the dropdown to the left edge
                          onMouseEnter={() => setActiveTab(tabIndex)}
                          onMouseLeave={() => setActiveTab(null)}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full p-p_16px gap-2 max-h-[400px] overflow-y-auto">
                            {tab?.tagData?.map((visaPackage, index) => (
                              <Link
                                to=""
                                className="flex gap-1 items-center"
                                key={index}
                              >
                                <img
                                  src={visaPackage?.photo}
                                  className="w-20 h-14 object-cover"
                                  alt={visaPackage.name}
                                />
                                <h1 className="block px-4 py-2 hover:bg-gray-100 font-bold text-text_sm2">
                                  {visaPackage.name}
                                </h1>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="w-full mx-auto xl:w-[1300px] pb-p_60px mt-m_40px">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center gap-6">
                    {filteredData?.tourPackageData?.length > 0 ? (
                      filteredData.tourPackageData.map((tourPackage, index) => (
                        <Link
                          key={index}
                          to={`/tour-details/${tourPackage.id}`}
                          className="bg-white rounded-lg shadow-lg duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                        >
                          <div className="w-full h-[280px] overflow-hidden">
                            <img
                              src={`${imgUrl}${tourPackage?.photo_1}`}
                              alt={tourPackage.title}
                              className="rounded-t-lg w-full h-full object-cover"
                            />
                          </div>

                          <div className="p-p_16px">
                            <h3 className="text-text_large font-bold underline">
                              {tourPackage.title}
                            </h3>
                            <p className="text-red_500 font-semibold text-text_standard">
                              Start from BDT{" "}
                              {stripHtml(tourPackage.package_price)} per person
                            </p>

                            {tourPackage.package_duration ? (
                              <button className="btn_tag my-m_16px">
                                {tourPackage.package_duration}
                              </button>
                            ) : (
                              <div className="my-m_16px invisible btn_tag">
                                Duration
                              </div>
                            )}
                            <br />
                            <button className="btn_primary font-bold">
                              View Details
                            </button>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="col-span-full text-center text-text_40px text-red-500 font-bold">
                        <p>No tour packages found.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {filteredData?.continentData?.map((category, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-center pt-p_60px">
                        <button className="py-p_8px px-p_20px bg-red_halka text-red_dark font-bold rounded-sm text-text_large">
                          {category?.continent}
                        </button>
                      </div>

                      <hr className="mb-m_16px border-1" />

                      {/* Visa Packages Grid */}
                      <div className="mx-auto w-[1300px] pb-p_60px">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-6">
                          {category?.tagData?.map((country, index) => (
                            <Link
                              to={`/tour-category/${country.id}`}
                              key={index}
                              className="text-center relative duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                            >
                              <div className="w-full h-[200px]">
                                <img
                                  src={country?.photo}
                                  alt={country.name}
                                  className="object-cover shadow-lg w-full h-full border"
                                />
                              </div>
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end top-36">
                                <p className="text-text_title mb-4 font-semibold text-white w-full text-center flex items-center justify-center">
                                  {country.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-auto w-[1300px]">
                  <div className=" ">
                    {/* Section Header */}

                    <div className="bg-teal_color p-4 rounded-t-lg">
                      <h2 className="text-text_large font-bold text-black ">
                        International Tour Packages From Bangladesh
                      </h2>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white p-6 rounded-b-lg shadow-lg">
                      {/* Main Heading */}
                      <h1 className=" mb-1">
                        Are you looking for cheap holiday packages from
                        Bangladesh for your holiday? Then you are on the right
                        website, which happens to be the best travel agency in
                        Bangladesh as well as the best tour operator in
                        Bangladesh. Book a quick and easy holiday by choosing
                        one of our cheap holiday packages from Bangladesh to
                        hundreds of top destinations including Europe tour
                        packages from Bangladesh.
                      </h1>

                      {/* Paragraph */}
                      <p className="mb-1">
                        Our cheap international tour packages from Bangladesh
                        include flights and accommodation, so you can get your
                        holiday plans sorted with no hassles at all. In our
                        Bangladesh travel agency package tour, we also include
                        meals, drinks, transportation, and special facilities
                        like guided tours like any other tour operator in
                        Bangladesh.
                      </p>

                      <p className="mb-1">
                        Whether you would like an extended vacation or just need
                        to get away for a couple of days, you are sure to find
                        the trip that is right for you in our best travel deals
                        in BD travels.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>100% Guaranteed affordable prices.</li>
                        <li>
                          Free Travel consultation before booking your Umrah
                          Package.
                        </li>
                        <li>
                          We are very transparent with our clients and deliver
                          our promises.
                        </li>
                        <li>Best accommodations available.</li>
                        <li>
                          Promising you to provide the best value for your
                          money.
                        </li>
                        <li>All-time Customer support by phone or email.</li>
                        <li>
                          You will get support from our office in case of any
                          emergency.
                        </li>
                        <li>
                          Special arrangements are available for the disabled in
                          our Umrah package.
                        </li>
                      </ul>

                      {/* Key Features Section */}
                      <h2 className="text-2xl font-bold mt-8 mb-4">
                        Key Features of Our Umrah Package 2024-2025 from
                        Bangladesh
                      </h2>
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

export default Search_Tour;