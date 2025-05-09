import React, { useEffect } from "react";
import img from "../../../assets/banner/30-days-non-shifting-hajj-package.jpg";
import { url } from "../../../../connection";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const UmrahPackage = () => {
  const imgUrl = `${url}/storage/uploads/umrahPackage/`;
  const axiosPublic = useAxiosPublic();
  const { data = {} } = useQuery({
    queryKey: ["umrah"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-homepage-data");
      return res.data;
    },
  });
  //(data);

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mx-auto w-full xl:w-[1300px]">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-text_30px font-bold my-m_40px">
            Umrah Packages From Bangladesh
          </h1>
          <p className="text-text_medium text-justify">
            Thinking of taking a break from every day's busy life? Planning to
            go out of the country with your loved ones to have some fun and
            quality time in a cost-effective way? Travel Design BD travel agency
            introduces you to their cheap and budget-friendly international
            holiday packages from Bangladesh just for your benefit and
            refreshment. Our packages are very much cost effective putting no
            pressure on your budget and giving you the best facilities that will
            leave you mind-blown. Our packages give you nothing but the best
            accommodation in the country’s finest hotels and resorts and
            mouth-watering delicious foods that taste like little drops of
            heaven. Our experienced guide will take you to the different and
            famous places in the country you wish to travel as well. All you
            have to do is sit back and relax while enjoying the Mother Nature’s
            view with a glass of your favorite drink in your hand.
          </p>
          <h2 className="font-semibold mt-6 text-text_large">
            Here are some of the Top and Cheap Packages for you during the Umrah
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.umrahPackageData?.map((item, index) => (
            <Link
              to={`/umrah-details/${item.id}`}
              key={index}
              className="bg-white rounded-lg shadow-lg duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
            >
              <div className="w-full h-[280px] overflow-hidden">
                <img
                  src={`${imgUrl}${item?.photo_1}`}
                  alt={item.title}
                  className="rounded-t-lg w-full h-full object-cover"
                />
              </div>

              <div className="p-p_16px  ">
                <h3 className="text-text_large font-bold underline">
                  {item.title}
                </h3>
                <p className="text-red_500 font-semibold text-text_standard">
                  Start from {stripHtml(item?.package_price)} Per Person
                </p>
                {item.package_duration ? (
                  <button className="btn_tag my-m_16px">
                    {item.package_duration}
                  </button>
                ) : (
                  <div className="my-m_16px invisible btn_tag">Duration</div>
                )}
                <br />

                <button className="btn_primary font-bold mt-auto">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link to="/umrah">
            <button className="btn_primary font-bold my-m_80px text-center grid grid-cols-2 items-center justify-center gap-1 w-full  ">
              View All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UmrahPackage;
