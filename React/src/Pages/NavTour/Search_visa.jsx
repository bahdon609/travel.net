import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { url } from "../../../connection";
import { useLocation } from "react-router-dom";
import NavVisaSkelator from "../NavVisa/NavVisaSkelator";
import SkeletonParallaxLoader from "../ContactUs/Contact_SkeletonLoader";
import VisaDetails_Skelator from "../DetailsPage/VisaDetails/VisaDetails_Skelator";

const Search_visa = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const imgUrl = `${url}/storage/uploads/visaPackage/`;
  const imgUrl_umrah = `${url}/storage/uploads/umrahPackage/`;
  const imgUrl_tour = `${url}/storage/uploads/tourPackage/`;
  const imgUrl_haj = `${url}/storage/uploads/hajjPackage/`;
  const location = useLocation();
  const { country, nationality, filteredData } = location.state || {};

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // Function to toggle the active index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mainImage, setMainImage] = useState(
    filteredData?.singleVisaPackageData?.photo_1
  );
  const [thumbImages, setThumbImages] = useState([
    filteredData?.singleVisaPackageData?.photo_2,
    filteredData?.singleVisaPackageData?.photo_3,
  ]);

  const handleThumbnailClick = (clickedImage) => {
    const previousMainImage = mainImage;
    setMainImage(clickedImage);
    setThumbImages((prev) =>
      prev.map((img) => (img === clickedImage ? previousMainImage : img))
    );
  };

  useEffect(() => {
    if (filteredData?.singleVisaPackageData) {
      setMainImage(filteredData?.singleVisaPackageData.photo_1);
      setThumbImages([
        filteredData?.singleVisaPackageData.photo_2,
        filteredData?.singleVisaPackageData.photo_3,
      ]);
    }
  }, [filteredData]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="">
      <div>
        {loading ? (
          <SkeletonParallaxLoader />
        ) : (
          <Parallax
            blur={0}
            bgImage={`${imgUrl}${filteredData?.singleVisaPackageData?.photo_1}`}
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
                  {filteredData?.singleVisaPackageData?.title}
                </h1>
              </div>
            </div>
          </Parallax>
        )}
      </div>

      <div>
        {loading ? (
          <VisaDetails_Skelator /> // Show skeleton loader while loading
        ) : (
          <div className="flex flex-col md:flex-row mx-auto w-[1300px]  py-p_40px gap-6">
            {/* Left Column - Main Image */}
            <div className="w-full lg:w-[70%]">
              <div className="bg-white h-[450px] overflow-hidden">
                <img
                  src={`${imgUrl}${mainImage || "fallback.jpg"}`}
                  alt="Umrah Package"
                  className="w-full h-full object-cover "
                />
              </div>
              {/* Thumbnail Carousel */}
              <div className="flex justify-end gap-5 mt-m_8px border py-p_12px px-p_12px">
                {thumbImages.map((image, index) => (
                  <img
                    key={index}
                    style={{
                      height: "100px",
                      width: "30%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    src={`${imgUrl}${image || "fallback.jpg"}`} // Fallback image for thumbnails
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleThumbnailClick(image)} // Handle click event
                  />
                ))}
              </div>

              <div className="w-full mt-m_24px border bg-white shadow-lg rounded-lg">
                {/* Collapsible Item - Details */}
                <div>
                  <button
                    className={`w-full p-4 border-b text-left flex justify-between items-center ${
                      activeIndex === 0
                        ? " bg-sky_blue_100"
                        : " bg-white text-black"
                    }`}
                    onClick={() => toggleAccordion(0)}
                  >
                    <span
                      className={`font-bold text-text_title ${
                        activeIndex === 0 ? "text-black" : "text-black"
                      }`}
                    >
                      Details
                    </span>
                    <span>
                      {activeIndex === 0 ? (
                        <IoIosArrowUp className="font-bold text-text_30px text-black" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="font-bold text-text_30px text-black" />
                      )}
                    </span>
                  </button>

                  {activeIndex === 0 && (
                    <div className="p-4 bg-gray-100">
                      <p>
                        {" "}
                        {stripHtml(
                          filteredData?.singleVisaPackageData?.post_details
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* Collapsible Item - Itinerary */}
                <div>
                  <button
                    className={`w-full p-4 border-b text-left flex justify-between items-center ${
                      activeIndex === 1
                        ? " bg-sky_blue_100"
                        : " bg-white text-black"
                    }`}
                    onClick={() => toggleAccordion(1)}
                  >
                    <span
                      className={`font-bold text-text_title ${
                        activeIndex === 1 ? "text-black" : "text-black"
                      }`}
                    >
                      Itinerary
                    </span>
                    <span>
                      {activeIndex === 1 ? (
                        <IoIosArrowUp className="font-bold text-text_30px text-black" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="font-bold text-text_30px text-black" />
                      )}
                    </span>
                  </button>

                  {activeIndex === 1 && (
                    <div className="p-4 bg-gray-100">
                      <p>
                        {stripHtml(
                          filteredData?.singleVisaPackageData?.itinerary_details
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* Collapsible Item - Remarks */}

                <div>
                  <button
                    className={`w-full p-4 border-b text-left flex justify-between items-center ${
                      activeIndex === 2
                        ? " bg-sky_blue_100"
                        : " bg-white text-black"
                    }`}
                    onClick={() => toggleAccordion(2)}
                  >
                    <span
                      className={`font-bold text-text_title ${
                        activeIndex === 2 ? "text-black" : "text-black"
                      }`}
                    >
                      Remarks
                    </span>
                    <span>
                      {activeIndex === 2 ? (
                        <IoIosArrowUp className="font-bold text-text_30px text-black" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="font-bold text-text_30px text-black" />
                      )}
                    </span>
                  </button>

                  {activeIndex === 2 && (
                    <div className="p-4 bg-gray-100">
                      <p>
                        {stripHtml(
                          filteredData?.singleVisaPackageData?.remarks_details
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="w-full lg:w-[30%] bg-white">
              {/* Package Details */}
              <div className=" rounded-lg w-full">
                <div className="bg-sky_blue p-p_16px">
                  <h2 className=" font-semibold text-white text-text_large ">
                    {filteredData?.singleVisaPackageData?.title}
                  </h2>
                </div>
                <div className="border p-p_16px w-full h-full ">
                  <img
                    className="w-full h-full"
                    src={`${imgUrl}${filteredData?.singleVisaPackageData?.photo_1}`}
                    alt=""
                  />
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="mt-m_24px">
                <div className="bg-sky_blue p-p_16px">
                  <h3 className="font-semibold text-white text-text_large">
                    Contact Us
                  </h3>
                </div>

                <div className="border p-p_16px text-text_medium">
                  <p className="py-p_4px">
                    <strong>Phone:</strong> +88 01511 004 002
                  </p>
                  <p className="py-p_4px">
                    <strong>Email:</strong> contact@traveldesignbd.com
                  </p>
                  <p className="py-p_4px">
                    <strong>Phone:</strong> +880 1711 004 002
                  </p>
                  <p className="py-p_4px">
                    <strong>Address:</strong> 119, ConfidenceTower (1st Floor)
                    Shahjadpur,Gulshan, Dhaka-1212
                  </p>
                </div>
              </div>

              <div className="mt-m_24px">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      You May Also Like
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {filteredData?.moerVisaPackageData?.map((pkg, index) => (
                      <div
                        key={index}
                        className="mt-m_medium text-text_medium flex gap-4"
                      >
                        <div className="w-[80px] h-[55px] overflow-hidden">
                          <img
                            className="h-full w-full"
                            src={`${imgUrl}${pkg?.photo_1}`}
                            alt={pkg.title}
                          />
                        </div>
                        <div>
                          <h1 className="text-text_medium">{pkg.title}</h1>
                          <p className="text-text_standard mt-m_4px font-semibold">
                            Visa
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-m_24px">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      Tour packages
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {filteredData?.tourPackageData?.map((pkg, index) => (
                      <div
                        key={index}
                        className="mt-m_medium text-text_medium flex gap-4"
                      >
                        <div className="w-[80px] h-[55px] overflow-hidden">
                          <img
                            className="h-full w-full"
                            src={`${imgUrl_tour}${pkg?.photo_1}`}
                            alt={pkg.title}
                          />
                        </div>
                        <div>
                          <h1 className="text-text_medium">{pkg.title}</h1>
                          <p className="text-text_standard mt-m_4px font-semibold">
                            {stripHtml(pkg.package_price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-m_24px">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      Umrah packages
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {filteredData?.umrahPackageData?.map((pkg, index) => (
                      <div
                        key={index}
                        className="mt-m_medium text-text_medium flex gap-4"
                      >
                        <div className="w-[80px] h-[55px] overflow-hidden">
                          <img
                            className="h-full w-full"
                            src={`${imgUrl_umrah}${pkg?.photo_1}`}
                            alt={pkg.title}
                          />
                        </div>
                        <div>
                          <h1 className="text-text_medium">{pkg.title}</h1>
                          <p className="text-text_standard mt-m_4px font-semibold">
                            {stripHtml(pkg.package_price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-m_24px">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      Haj packages
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {filteredData?.hajjPackageData?.map((pkg, index) => (
                      <div
                        key={index}
                        className="mt-m_medium text-text_medium flex gap-4"
                      >
                        <div className="w-[80px] h-[55px] overflow-hidden">
                          <img
                            className="h-full w-full"
                            src={`${imgUrl_haj}${pkg?.photo_1}`}
                            alt={pkg.title}
                          />
                        </div>
                        <div>
                          <h1 className="text-text_medium">{pkg.title}</h1>
                          <p className="text-text_standard mt-m_4px font-semibold">
                            {stripHtml(pkg.package_price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search_visa;
