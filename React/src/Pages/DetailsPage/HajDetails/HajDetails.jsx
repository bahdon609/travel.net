import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import img from "../../../assets/banner/bannerimageforhaj.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { url } from "../../../../connection";
import DOMPurify from "dompurify";
import UmrahDetails_Skelator from "../UmrahDetails/UmrahDetails_Skelator";
import SkeletonParallaxLoader from "../../ContactUs/Contact_SkeletonLoader";

const HajDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { id } = useParams();
  const [openSection, setOpenSection] = useState(null);
  const imgUrl = `${url}/storage/uploads/hajjPackage/`;
  const imgUrl_umrah = `${url}/storage/uploads/umrahPackage/`;
  const imgUrl_tour = `${url}/storage/uploads/tourPackage/`;
  const imgUrl_visa = `${url}/storage/uploads/visaPackage/`;
  const axiosPublic = useAxiosPublic();

  const { data = {}, refetch } = useQuery({
    queryKey: ["haj_details"],
    queryFn: async () => {
      const res = await axiosPublic(`/single-hajj-package-data/${id}`);
      return res.data;
    },
  });
  //(data);
  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [id, refetch]);

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
    data?.singleHajjPackageData?.photo_1
  );
  const [thumbImages, setThumbImages] = useState([
    data?.singleHajjPackageData?.photo_2,
    data?.singleHajjPackageData?.photo_3,
  ]);

  const handleThumbnailClick = (clickedImage) => {
    const previousMainImage = mainImage;
    setMainImage(clickedImage);
    setThumbImages((prev) =>
      prev.map((img) => (img === clickedImage ? previousMainImage : img))
    );
  };

  useEffect(() => {
    if (data?.singleHajjPackageData) {
      setMainImage(data.singleHajjPackageData.photo_1);
      setThumbImages([
        data.singleHajjPackageData.photo_2,
        data.singleHajjPackageData.photo_3,
      ]);
    }
  }, [data]);

  const sanitizedHTML = DOMPurify.sanitize(
    data?.singleHajjPackageData?.post_details
  );
  const sanitizedHTML_itinerary = DOMPurify.sanitize(
    data?.singleUmrahPackageData?.itinerary_details
  );
  const sanitizedHTML_remarks = DOMPurify.sanitize(
    data?.singleUmrahPackageData?.remarks_details
  );
  const sanitizedHTML_faq = DOMPurify.sanitize(
    data?.singleHajjPackageData?.faq_details
  );

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
            bgImage={`${imgUrl}${data?.singleHajjPackageData?.photo_1}`}
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
                  {data?.singleHajjPackageData?.title}
                </h1>
              </div>
            </div>
          </Parallax>
        )}
      </div>

      <div>
        {loading ? (
          <UmrahDetails_Skelator /> // Show skeleton loader while loading
        ) : (
          <div className="flex flex-col md:flex-row mx-auto w-full xl:w-[1300px]  py-p_40px gap-6">
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
                {thumbImages.filter((image) => image).length > 0 && // Check if there are valid images
                  thumbImages
                    .filter((image) => image) // Remove null or undefined values
                    .map((image, index) => (
                      <img
                        key={index}
                        style={{
                          height: "100px",
                          width: "30%",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        src={`${imgUrl}${image}`} // No need for fallback as null images are removed
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
                        <IoIosArrowUp className="font-bold text-text_xl text-black" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="font-bold text-text_30px text-black" />
                      )}
                    </span>
                  </button>

                  {activeIndex === 0 && (
                    <div className="p-4 bg-gray-100">
                      <div
                        className=""
                        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
                      />
                    </div>
                  )}
                </div>

                {/* Collapsible Item - Faq */}

                <div>
                  <button
                    className={`w-full p-4 border-b text-left flex justify-between items-center ${
                      activeIndex === 3
                        ? " bg-sky_blue_100"
                        : " bg-white text-black"
                    }`}
                    onClick={() => toggleAccordion(3)}
                  >
                    <span
                      className={`font-bold text-text_title ${
                        activeIndex === 3 ? "text-black" : "text-black"
                      }`}
                    >
                      FAQ
                    </span>
                    <span>
                      {activeIndex === 3 ? (
                        <IoIosArrowUp className="font-bold text-text_xl text-black" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="font-bold text-text_30px text-black" />
                      )}
                    </span>
                  </button>

                  {activeIndex === 3 && (
                    <div className="p-4 bg-gray-100">
                      <div
                        className=""
                        dangerouslySetInnerHTML={{ __html: sanitizedHTML_faq }}
                      />
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
                    {data?.singleHajjPackageData?.title}
                  </h2>
                </div>
                <div className="border p-p_16px ">
                  <p className="text-text_title">
                    Starts From BDT{" "}
                    <span className="font-bold text-sky_blue">
                      {stripHtml(data?.singleHajjPackageData?.package_price)}{" "}
                    </span>{" "}
                    Per Person
                  </p>
                  {/* <p className="text-text_title ">Price Valid Till 06 Nov 2024</p> */}
                  <button className="btn_tag text-text_standard mt-m_medium">
                    Hajj
                  </button>
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
                    {data?.moerHajjPackageData?.map((pkg, index) => (
                      <Link
                        to={`/haj-details/${pkg.id}`}
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
                          <h1 className="text-text_medium hover:text-sky_blue">
                            {pkg.title}
                          </h1>
                          <p className="text-text_standard mt-m_4px font-semibold">
                            {stripHtml(pkg.package_price)}
                          </p>
                        </div>
                      </Link>
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
                    {data?.umrahPackageData?.map((pkg, index) => (
                      <Link
                        to={`/umrah-details/${pkg.id}`}
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
                          <h1 className="text-text_medium hover:text-sky_blue">
                            {pkg.title}
                          </h1>
                          <p className="text-text_standard mt-m_4px font-semibold">
                            {stripHtml(pkg.package_price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-m_24px">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      Visa packages
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {data?.visaPackageData?.map((pkg, index) => (
                      <Link
                        to={`/study-visa-details/${pkg.id}`}
                        key={index}
                        className="mt-m_medium text-text_medium flex gap-4"
                      >
                        <div className="w-[80px] h-[55px] overflow-hidden">
                          <img
                            className="h-full w-full"
                            src={`${imgUrl_visa}${pkg?.photo_1}`}
                            alt={pkg.title}
                          />
                        </div>
                        <div>
                          <h1 className="text-text_medium hover:text-sky_blue">
                            {pkg.title}
                          </h1>
                          <p className="text-text_standard mt-m_4px font-semibold">
                            Visa
                          </p>
                        </div>
                      </Link>
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

export default HajDetails;
