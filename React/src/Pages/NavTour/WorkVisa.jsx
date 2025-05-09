import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { url } from "../../../connection";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import { Link, useLocation } from "react-router-dom";
import NavVisaSkelator from "../NavVisa/NavVisaSkelator";
// Import other visa components as needed

const WorkVisa = () => {
  const [activeTab, setActiveTab] = useState(null);
  const imgUrl = `${url}/storage/uploads/visaPackage/`;
  const axiosPublic = useAxiosPublic();
  const location = useLocation();

  const { data: work_visa = {} } = useQuery({
    queryKey: ["work visa"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-working-visa-data");
      return res.data;
    },
  });
  //(work_visa);

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // Function to truncate text after a certain number of words
  const truncateText = (htmlString, wordLimit) => {
    const text = stripHtml(htmlString); // Remove HTML tags
    const words = text.split(/\s+/); // Split the text into words
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + " ..."
      : text;
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
          <NavVisaSkelator />
        ) : (
          <div>
            <div className="flex flex-col items-center md:mb-6">
              <p className="text-text_30px md:text-text_40px font-bold text-clr_primary_text mb-2">
                <span className="text-clr_primary_text">Work Visa</span>
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-[1px] bg-gray-300"></div>
                <div className="w-4 h-4 border-2 border-clr_primary_text rounded-full"></div>
                <div className="w-20 h-[1px] bg-gray-300"></div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 lg:gap-10 mx-auto w-full xl:w-[1300px] mb-5">
              {work_visa?.workingVisaData?.data?.map((visa) => (
                // to={`/azerbaijan-visa-details/${visa.id}`} key={visa.id}
                <Link to={`/work-visa-details/${visa.id}`} key={visa.id}>
                  <div className="overflow-hidden">
                    <img
                      className="h-40 w-full cursor-pointer transform transition duration-300 hover:scale-110"
                      src={visa.photo_1}
                      alt={visa.title}
                    />
                  </div>
                  <div className="text-center rounded-lg shadow-lg py-4 text-black text-sm font-bold px-2">
                    <h1 className="mb-2">{visa.title}</h1>
                    <p>{truncateText(visa.post_details, 4)}</p>
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

export default WorkVisa;
