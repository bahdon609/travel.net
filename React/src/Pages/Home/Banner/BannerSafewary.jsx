import { Link } from "react-router-dom";
import cloud from "../../../assets/banner/bannerbanner.jpg";
import familyImg from "../../../assets/banner/relaxbannerImage.jpg";
import { FaCheckSquare } from "react-icons/fa";
import { useEffect, useState } from "react";

const BannerSafewary = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="mt-10">
        <div className="">
          <div
            className="flex flex-col lg:flex-row justify-center items-center w-full xl:w-[1300px] mx-auto gap-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://example.com/your-background-image.jpg')",
            }}
          >
            <div className="w-full ">
              <div className="flex flex-col items-center md:mb-6">
                <p className="text-text_30px md:text-text_40px font-bold text-clr_primary_text mb-2">
                  <span className="text-clr_primary_text">Our Top</span>{" "}
                  Services
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-[1px] bg-gray-300"></div>
                  <div className="w-4 h-4 border-2 border-clr_primary_text rounded-full"></div>
                  <div className="w-20 h-[1px] bg-gray-300"></div>
                </div>
              </div>

              <div className="mt-4 lg:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  gap-3 mb-5">
                <Link to="">
                  <div className="overflow-hidden bg-white">
                    <img
                      className="h-40 w-full cursor-pointer transform transition duration-300 hover:scale-110"
                      src="https://www.safewayconsultancy.com/resources/assets/theme_assets_file/images/s1.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center rounded-lg shadow-lg py-4 text-black text-sm font-bold">
                    <h1 className="mb-2">Visa Service</h1>
                  </div>
                </Link>
                <Link to="">
                  <div className="overflow-hidden bg-white">
                    <img
                      className="h-40 w-full cursor-pointer transform transition duration-300 hover:scale-110"
                      src="https://www.safewayconsultancy.com/resources/assets/theme_assets_file/images/s2.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center rounded-lg shadow-lg py-4 text-black text-sm font-bold">
                    <h1 className="mb-2">Study Visa</h1>
                  </div>
                </Link>
                <Link to="">
                  <div className="overflow-hidden bg-white">
                    <img
                      className="h-40 w-full cursor-pointer transform transition duration-300 hover:scale-110"
                      src="https://www.safewayconsultancy.com/resources/assets/theme_assets_file/images/s3.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center rounded-lg shadow-lg py-4 text-black text-sm font-bold">
                    <h1 className="mb-2">Package Tour</h1>
                  </div>
                </Link>

                <Link to="">
                  <div className="overflow-hidden bg-white">
                    <img
                      className="h-40 w-full cursor-pointer transform transition duration-300 hover:scale-110"
                      src="https://www.safewayconsultancy.com/resources/assets/theme_assets_file/images/s4.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center rounded-lg shadow-lg py-4 text-black text-sm font-bold">
                    <h1 className="mb-2">Umrah & Hajj</h1>
                  </div>
                </Link>

                <Link to="">
                  <div className="overflow-hidden bg-white">
                    <img
                      className="h-40 w-full cursor-pointer transform transition duration-300 hover:scale-110"
                      src="https://www.safewayconsultancy.com/resources/assets/theme_assets_file/images/s6.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center rounded-b-lg shadow-2xl py-4 bg-white  text-black text-sm font-bold">
                    <h1 className="mb-2">Hotel Resevation</h1>
                  </div>
                </Link>
                <Link to="">
                  <div className="overflow-hidden bg-white">
                    <img
                      className="h-40 w-full cursor-pointer transform transition duration-300 hover:scale-110"
                      src="https://www.safewayconsultancy.com/resources/assets/theme_assets_file/images/s5.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center rounded-b-lg shadow-2xl py-4 bg-white  text-black text-sm font-bold">
                    <h1 className="mb-2">Flight Resevation</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.ibb.co/gPxfvQq/cloud.png')",
            }}
          >
            <div className="w-full xl:w-[1300px] mx-auto gap-20 flex flex-col lg:flex-row justify-center items-center">
              <div className="w-full lg:w-[50%] ">
                <div className="mx-auto h-32 mt-32" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12 w-full lg:w-[50%] mb-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSafewary;
