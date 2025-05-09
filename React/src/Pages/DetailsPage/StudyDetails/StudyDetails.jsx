import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { url } from "../../../../connection";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SkeletonParallaxLoader from "../../ContactUs/Contact_SkeletonLoader";
import VisaDetails_Skelator from "../VisaDetails/VisaDetails_Skelator";

const StudyDetails = () => {
  const { id } = useParams();
  const imgUrl_umrah = `${url}/storage/uploads/umrahPackage/`;
  const imgUrl_haj = `${url}/storage/uploads/hajjPackage/`;

  const axiosPublic = useAxiosPublic();

  const { data = {}, refetch } = useQuery({
    queryKey: ["visa_sservice_detailss"],
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

  // Function to toggle the active index

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const sanitizedHTML_post_details = DOMPurify.sanitize(
    data?.singleStudyVisaData?.post_details
  );

  return (
    <div className="">
      <div>
        {loading ? (
          <SkeletonParallaxLoader />
        ) : (
          <Parallax
            blur={0}
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
                <h1 className="text-4xl font-bold mb-4">
                  {data?.singleStudyVisaData?.title}
                </h1>
              </div>
            </div>
          </Parallax>
        )}
      </div>

      <div>
        {loading ? (
          <VisaDetails_Skelator />
        ) : (
          <div className="flex flex-col lg:flex-row mx-auto w-full xl:w-[1300px]  py-p_40px gap-6">
            {/* Left Column - Main Image */}
            <div className="w-full lg:w-[70%] bg-white shadow-xl">
              <div className="bg-white h-[450px] overflow-hidden">
                <img
                  src={data?.singleStudyVisaData?.photo_1}
                  alt="Umrah Package"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="p-5">
                <h2 className=" font-semibold  text-2xl">
                  {data?.singleStudyVisaData?.title}
                </h2>

                <p
                  className=" font-normal  text-lg mt-3"
                  dangerouslySetInnerHTML={{
                    __html: sanitizedHTML_post_details,
                  }}
                ></p>
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
                <div className="border p-p_16px w-full h-full ">
                  <img
                    className="w-full h-full"
                    src={data?.singleStudyVisaData?.photo_1}
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
                    <strong>Address:</strong>119, ConfidenceTower (1st Floor)
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
                        to={`/study-visa-details/${pkg.id}`}
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
                            Visa
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyDetails;
