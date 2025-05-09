import { Link } from "react-router-dom";

import { FaExternalLinkAlt } from "react-icons/fa";
import SuccessSkelator from "./SuccessSkelator";
import { useEffect, useState } from "react";
import img1 from "../assets/gallery/3 .jpg";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ParentComponent = () => {
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const { data = {} } = useQuery({
    queryKey: ["tour_category"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-photo-gallery-data");
      return res.data;
    },
  });
  //(data)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="mx-auto lg:w-[1300px] w-full">
        {/* heading */}

        {/* Skeleton Loader */}
        <SuccessSkelator />
      </div>
    );
  }

  return (
    <div className="mx-auto lg:w-[1300px] w-full">
      {/* heading */}
      <div className="flex flex-col items-center md:mb-6">
        <p className="text-text_30px md:text-text_40px font-bold text-clr_primary_text mb-2">
          <span className="text-clr_primary_text">Our Recent</span> Success
        </p>
        <div className="flex items-center space-x-2">
          <div className="w-20 h-[1px] bg-gray-300"></div>
          <div className="w-4 h-4 border-2 border-clr_primary_text rounded-full"></div>
          <div className="w-20 h-[1px] bg-gray-300"></div>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-auto mb-m_40px">
        {data?.photoGalleryData?.data?.map((succes_image, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={succes_image.photo}
              alt={succes_image.name}
              className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110 border"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
      {/* <Link
        to="/success"
        className="flex items-center justify-center text-tex_green space-x-4"
      >
        <FaExternalLinkAlt className="text-text_xl text-blue_500" />
        <button className="text-text_xl my-m_40px text-center text-blue_500">
          More Success
        </button>
      </Link> */}
    </div>
  );
};

export default ParentComponent;
