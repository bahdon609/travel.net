import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import img from "../../assets/banner/bannerimageforhaj.jpg";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { url } from "../../../connection";
import { useQuery } from "@tanstack/react-query";
import SkeletonParallaxLoader from "../ContactUs/Contact_SkeletonLoader";
import NavHajSkelator from "./NavHajSkelator";
import DOMPurify from "dompurify";

const NavHaj = () => {
  const axiosPublic = useAxiosPublic();
  const imgUrl = `${url}/storage/uploads/hajjPackage/`;
  const { data = {} } = useQuery({
    queryKey: ["haj_category"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-hajj-package-data");
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
                <h1 className="text-4xl font-bold mb-4">
                  Haj Package 2024-2025 from Bangladesh
                </h1>
              </div>
            </div>
          </Parallax>
        )}
      </div>
      <div>
        {loading ? (
          <NavHajSkelator /> // Show skeleton loader while loading
        ) : (
          <div className="mx-auto w-full xl:w-[1300px]">
            <div className="flex flex-col items-center md:mb-6 mt-10">
              <p className="text-text_30px md:text-text_40px font-bold text-clr_primary_text mb-2">
                <span className="text-clr_primary_text">Haj Package</span>{" "}
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-[1px] bg-gray-300"></div>
                <div className="w-4 h-4 border-2 border-clr_primary_text rounded-full"></div>
                <div className="w-20 h-[1px] bg-gray-300"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6   py-p_60px">
              {/* Card 1 */}
              {data?.hajjPackageData?.data?.map((packageItem) => (
                <Link
                  key={packageItem.id}
                  to={`/haj-details/${packageItem.id}`}
                  className="bg-white rounded-lg shadow-lg duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                >
                  <div className="w-full h-[280px] overflow-hidden">
                    <img
                      src={`${imgUrl}${packageItem?.photo_1}`}
                      alt={packageItem.title}
                      className="rounded-t-lg w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-p_16px">
                    <h3 className="text-text_large font-bold underline">
                      {packageItem.title}
                    </h3>
                    <p className="text-red_500 font-semibold text-text_standard">
                      {stripHtml(packageItem.package_price)}
                    </p>

                    {packageItem.package_duration ? (
                      <button className="btn_tag my-m_16px">
                        {packageItem.package_duration}
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
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavHaj;
