import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { url } from "../../../connection";
import SkeletonParallaxLoader from "../ContactUs/Contact_SkeletonLoader";
import UmrahDetails_Skelator from "../DetailsPage/UmrahDetails/UmrahDetails_Skelator";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllVisa_Details_Tab from "./AllVisa_Details_Tab/AllVisa_Details_Tab";

const AllVisa_Details = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { id } = useParams();
  const imgUrl = `${url}/storage/uploads/umrahPackage/`;
  const imgUrl_haj = `${url}/storage/uploads/hajjPackage/`;
  const imgUrl_tour = `${url}/storage/uploads/tourPackage/`;
  const imgUrl_visa = `${url}/storage/uploads/visaPackage/`;
  const axiosPublic = useAxiosPublic();

  const { data = {}, refetch } = useQuery({
    queryKey: ["umrah_details"],
    queryFn: async () => {
      const res = await axiosPublic(`/single-study-visa-data/${id}`);
      return res.data;
    },
  });
  //(data);

  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [id, refetch]);
  //(data);

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mainImage, setMainImage] = useState(
    data?.singleUmrahPackageData?.photo_1
  );
  const [thumbImages, setThumbImages] = useState([
    data?.singleUmrahPackageData?.photo_2,
    data?.singleUmrahPackageData?.photo_3,
  ]);

  const handleThumbnailClick = (clickedImage) => {
    const previousMainImage = mainImage;
    setMainImage(clickedImage);
    setThumbImages((prev) =>
      prev.map((img) => (img === clickedImage ? previousMainImage : img))
    );
  };

  useEffect(() => {
    if (data?.singleUmrahPackageData) {
      setMainImage(data.singleUmrahPackageData.photo_1);
      setThumbImages([
        data.singleUmrahPackageData.photo_2,
        data.singleUmrahPackageData.photo_3,
      ]);
    }
  }, [data]);
  const sanitizedHTML = DOMPurify.sanitize(
    data?.singleUmrahPackageData?.post_details
  );
  const sanitizedHTML_itinerary = DOMPurify.sanitize(
    data?.singleUmrahPackageData?.itinerary_details
  );
  const sanitizedHTML_remarks = DOMPurify.sanitize(
    data?.singleUmrahPackageData?.remarks_details
  );
  const sanitizedHTML_faq = DOMPurify.sanitize(
    data?.singleUmrahPackageData?.faq_details
  );

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="bg-gray-50 ">
      <div>
        {loading ? (
          <SkeletonParallaxLoader /> // Show skeleton loader while loading
        ) : (
          <Parallax
            blur={0}
            // bgImage={`${imgUrl}${data?.singleUmrahPackageData?.photo_1}`}
            bgImage={data?.singleStudyVisaData?.photo_1}
            bgImageAlt="Europe Tour Package"
            strength={500}
            bgImageStyle={{
              backgroundAttachment: "fixed",
              height: "55vh",
              width: "100%",
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
                <h1 className="text-4xl font-bold mb-4 w-full h-full">
                  {data?.singleStudyVisaData?.title}
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
          <div className="flex flex-col lg:flex-row mx-auto w-full xl:w-[1300px]  py-p_40px gap-6">
            {/* Left Column - Main Image */}
            <div className="w-full lg:w-[70%]">
              <div className="bg-white h-[400px] overflow-hidden">
                <img
                  //   src={`${imgUrl}${mainImage || "fallback.jpg"}`}
                  src={data?.singleStudyVisaData?.photo_1}
                  alt="Umrah Package"
                  className="w-full h-full object-cover shadow-sm "
                />
              </div>

              <div className="w-full mt-m_24px  bg-white shadow-lg ">
                <AllVisa_Details_Tab data={data}></AllVisa_Details_Tab>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="w-full lg:w-[30%] bg-white">
              {/* Package Details */}
              <div className=" rounded-lg w-full">
                <div className="bg-sky_blue p-p_16px">
                  <h2 className=" font-semibold text-white text-text_large ">
                    {data?.singleStudyVisaData?.title}
                  </h2>
                </div>
                <div className="border p-p_16px ">
                  <p className="text-text_title">
                    Starts From BDT{" "}
                    <span className="font-bold text-sky_blue">
                      {stripHtml(data?.singleUmrahPackageData?.package_price)}{" "}
                    </span>{" "}
                    Per Person
                  </p>
                  {/* <p className="text-text_title ">Price Valid Till 06 Nov 2024</p> */}
                  <button className="btn_tag text-text_standard mt-m_medium">
                    study visa
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
                    <strong>Phone:</strong> +88 01511 004 002 , +880 1711 004
                    002
                  </p>

                  <p className="py-p_4px">
                    <strong>Email:</strong> contact@traveldesignbd.com
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
                    {data?.moerStudyVisaData?.map((pkg, index) => (
                      <Link
                        to={`/umrah-details/${pkg.id}`}
                        key={index}
                        className="mt-m_medium text-text_medium flex gap-4"
                      >
                        <div className="w-[80px] h-[55px] overflow-hidden">
                          <img
                            className="h-full w-full"
                            src={pkg?.photo_1}
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
                      Haj packages
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {data?.hajjPackageData?.map((pkg, index) => (
                      <Link
                        to={`/haj-details/${pkg.id}`}
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

export default AllVisa_Details;
