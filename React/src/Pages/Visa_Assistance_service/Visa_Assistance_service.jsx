import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Visa_Assistance_service = () => {
  const countries = [
    { name: "Canada", flag: "🇨🇦" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "USA", flag: "🇺🇸" },
    { name: "UAE-Dubai", flag: "🇦🇪" },
    { name: "Thailand", flag: "🇹🇭" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "Malaysia", flag: "🇲🇾" },
  ];

  const axiosPublic = useAxiosPublic();

  const { data: work_visa = {} } = useQuery({
    queryKey: ["work visa assistance service"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-working-visa-data");
      return res.data;
    },
  });
  console.log(work_visa)
  return (
    <div className="bg-clr_bg_visa_assistance lg:py-10 ">
      <div className=" w-full xl:w-[1300px] mx-auto">
        <h1 className="text-3xl font-bold text-clr_primary_text text-text_40px mb-2 text-center">
          Work Visa Assistance Services
        </h1>
        <p className="text-gray-500 text-justify mb-6">
          Welcome to Travel Design BD – Your Trusted Visa Assistance Partner in
          Bangladesh! As the leading Visa Processing agent in Bangladesh, we
          specialize in securing tourist visas for 68 countries worldwide.
          Unlock the world with ease as we provide expert Visa Processing
          services. Welcome to Travel Design BD – Your Trusted Visa Assistance
          Partner in Bangladesh! As the leading Visa Processing agent in
          Bangladesh, we specialize in securing tourist visas for 68 countries
          worldwide. Unlock the world with ease as we provide expert Visa
          Processing services. Welcome to Travel Design BD – Your Trusted Visa
          Assistance Partner in Bangladesh! As the leading Visa Processing agent
          in Bangladesh, we specialize in securing tourist visas for 68
          countries worldwide. Unlock the world with ease as we provide expert
          Visa Processing services.{" "}
          <span className="text-clr_text_yellow">Click Here</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {work_visa?.workingVisaData?.data?.map((country, index) => (
            <div
              key={index}
              className="border border-yellow-400 rounded-lg p-4 flex flex-col items-center shadow-md bg-white"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden ">
                <img
                  className="rounded-full w-full  h-full object-cover"
                  src={country.photo_1}
                  alt=""
                />
              </div>
              <Link
                to={`/work-visa-details/${country.id}`}
                className="mt-4 bg-clr_btn_primary text-white py-2 px-4 rounded-md hover:bg-clr_btn_yellow"
              >
                {country.country_name} country name
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Visa_Assistance_service;
