import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import img from "../../assets/banner/bannerimageforhaj.jpg";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import DOMPurify from "dompurify";
import { url } from "../../../connection";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SkeletonParallaxLoader from "../ContactUs/Contact_SkeletonLoader";
import NavTourSkelator from "../NavTour/NavTourSkelator/NavTourSkelator";

const Package_Tour = () => {
  const [activeTab, setActiveTab] = useState(null);

  const imgUrl = `${url}/storage/uploads/tourPackage/`;
  const axiosPublic = useAxiosPublic();
  const location = useLocation();

  const { data = {} } = useQuery({
    queryKey: ["tour_category"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-tour-package-data");
      return res.data;
    },
  });
  //(data)

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
              {/* multi tour start */}
              <div>
                <div className="flex items-center justify-center pt-p_60px">
                  <button className="py-p_8px px-p_20px bg-red_halka text-red_dark font-bold rounded-sm text-text_large">
                    {data?.multiCountryTourData?.title}
                  </button>
                </div>

                <hr className="mb-m_16px border-1" />

                {/* Visa Packages Grid */}
                <div className="mx-auto w-full xl:w-[1300px] pb-p_60px">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center gap-6">
                    {data?.multiCountryTourData?.tourPackageData?.map(
                      (tourPackage, index) => (
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

                            <br />
                            <button className="btn_primary font-bold">
                              View Details
                            </button>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div>
                {data?.continentData?.map((category, idx) => (
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
              <div className="mx-auto w-full xl:w-[1300px] mb-m_80px">
                <div className=" ">
                  {/* Section Header */}

                  <div className="bg-teal_color p-4 rounded-t-lg">
                    <h2 className="text-text_large font-bold text-black ">
                      {data?.tourPackageTextData?.package_title}
                    </h2>
                  </div>

                  {/* Main Content */}
                  <div className="bg-white p-6 rounded-b-lg shadow-lg">
                    <div
                      className=" "
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          data?.tourPackageTextData?.package_details || ""
                        ),
                      }}
                    />
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

export default Package_Tour;
