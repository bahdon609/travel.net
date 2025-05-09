import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { url } from "../../../../connection";
import { useQuery } from "@tanstack/react-query";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopVisa_Service = () => {
  const axiosPublic = useAxiosPublic();
  const imgUrl = `${url}/storage/uploads/visaPackage/`;

  const { data = {} } = useQuery({
    queryKey: ["visa_pak"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-visa-service-data");
      return res.data;
    },
  });
  //(data)
  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <>
      <div className="mx-auto xl:w-[1300px] w-full mt-10">
        <div className="flex flex-col items-center md:mb-6">
          <p className="text-text_30px md:text-text_40px font-bold text-clr_primary_text mb-2">
            <span className="text-clr_primary_text">Our Top</span> VISA Service
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-20 h-[1px] bg-gray-300"></div>
            <div className="w-4 h-4 border-2 border-clr_primary_text rounded-full"></div>
            <div className="w-20 h-[1px] bg-gray-300"></div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center md:mb-10"></div>

          <div className="mt-4 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 lg:gap-10 mx-auto w-full xl:w-[1300px] mb-5">
            {data?.visaServiceData?.data?.map((visa) => (
              <Link to={`/visa-details/${visa.id}`} key={visa.id}>
                <div className="overflow-hidden">
                  <img
                    className="h-52 w-full cursor-pointer transform transition duration-300 hover:scale-110"
                    src={visa.photo_1}
                    alt={visa.title}
                  />
                </div>
                <div className="text-center rounded-lg shadow-lg py-4 text-black text-sm font-bold">
                  <h1 className="mb-2">{visa.title}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link
          to="/visa"
          className="flex items-center justify-center text-tex_green space-x-4"
        >
          <FaExternalLinkAlt className="text-text_xl text-clr_primary_text" />
          <button className="text-text_xl my-m_40px text-center text-clr_primary_text">
            More Visa Servises
          </button>
        </Link>
      </div>
    </>
  );
};

export default TopVisa_Service;
