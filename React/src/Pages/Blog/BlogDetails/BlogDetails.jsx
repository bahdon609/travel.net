
import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import img from '../../../assets/banner/bannerimageforhaj.jpg'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { url } from '../../../../connection';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import SkeletonParallaxLoader from '../../ContactUs/Contact_SkeletonLoader';
import BlogDetails_skelator from './blogDetails_skelator';


const BlogDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { id } = useParams();
  const [openSection, setOpenSection] = useState(null);
  const imgUrl = `${url}/storage/uploads/blogImg/`;
  const imgUrl_umrah = `${url}/storage/uploads/umrahPackage/`;
  const imgUrl_haj = `${url}/storage/uploads/hajjPackage/`;
  const imgUrl_tour = `${url}/storage/uploads/tourPackage/`;
  const imgUrl_visa = `${url}/storage/uploads/visaPackage/`;
  const axiosPublic = useAxiosPublic();

  const { data = {}, refetch } = useQuery({
    queryKey: ["umrah_details"],
    queryFn: async () => {
      const res = await axiosPublic(`/single-blog-data/${id}`);
      return res.data;
    },
  });
  //(data)
  const { data: home_data = {} } = useQuery({
    queryKey: ["home_data"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-homepage-data");
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [id, refetch]);


  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Function to toggle the active index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mainImage, setMainImage] = useState(data?.singleUmrahPackageData?.photo_1);
  const [thumbImages, setThumbImages] = useState([
    data?.singleUmrahPackageData?.photo_2,
    data?.singleUmrahPackageData?.photo_3,
  ]);


  useEffect(() => {
    if (data?.singleUmrahPackageData) {
      setMainImage(data.singleUmrahPackageData.photo_1);
      setThumbImages([
        data.singleUmrahPackageData.photo_2,
        data.singleUmrahPackageData.photo_3,
      ]);
    }
  }, [data]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="">

      <div>

        {loading ? (
          <SkeletonParallaxLoader /> // Show skeleton loader while loading
        ) : (
          <Parallax
            blur={0}
            bgImage={data?.singleBlogData?.photo}
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
                  {data?.singleBlogData?.title}
                </h1>
              </div>
            </div>
          </Parallax>

        )}
      </div>

      <div>
        {loading ? (
          <BlogDetails_skelator /> // Show skeleton loader while loading
        ) : (
          <div className="flex flex-col md:flex-row mx-auto w-[1300px]  py-p_40px gap-6">
            {/* Left Column - Main Image */}
            <div className="w-full lg:w-[70%]">
              <div className="bg-white h-[450px] overflow-hidden">
                <img
                  src={data?.singleBlogData?.photo}
                  alt="Umrah Package"
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="w-full mt-m_24px ">
                <div>
                  <h1 className="text-text_title font-bold text-sky_blue">
                    {data?.singleBlogData?.title}
                  </h1>
                  <p className="text-text_standard font-semibold py-p_10px">
                    {data?.singleBlogData?.updated_at}
                  </p>
                  <p className="text-text_medium font-semibold">
                    {stripHtml(data?.singleBlogData?.solid_post)}
                  </p>
                  <p className="text-text_medium mt-mt_medium font-semibold">
                    {stripHtml(data?.singleBlogData?.post)}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="w-full lg:w-[30%] bg-white">
              <div className="">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      Related Blogs
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {data?.getRelatedBlogData?.map((pkg, index) => (
                      <Link
                        to={`/blog-details/${pkg.id}`}
                        key={index}
                        className="mt-m_medium text-text_medium flex gap-4"
                      >
                        <div className=" overflow-hidden w-[1/5]">
                          <img
                            className="w-[80px] h-[65px] object-cover border"
                            src={pkg?.photo}
                            alt={pkg.title}
                          />
                        </div>
                        <div className='w-4/5'>
                          <h1 className="text-text_medium hover:text-sky_blue">{pkg.title}</h1>
                          <p className="text-text_standard mt-m_4px font-semibold">
                            {pkg.updated_at}
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
                      Our Service
                    </h3>
                    <hr />
                  </div>

                  <div>
                    <div className="mt-m_medium text-text_medium  gap-4">
                      <div className="flex flex-col gap-2 ">
                        <Link
                          to="/haj"
                          className="text-text_medium font-bold hover:text-sky_blue"
                        >
                          Haj
                        </Link>
                        <Link
                          to="/umrah"
                          className="text-text_medium font-bold hover:text-sky_blue"
                        >
                          Umrah
                        </Link>
                        <Link
                          to="/visa"
                          className="text-text_medium font-bold hover:text-sky_blue"
                        >
                          Visa
                        </Link>
                        <Link
                          to="/tour"
                          className="text-text_medium font-bold hover:text-sky_blue"
                        >
                          Tour
                        </Link>
                      </div>
                    </div>
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
                    {home_data?.tourPackageData?.map((pkg, index) => (
                      <Link
                        to={`/tour-details/${pkg.id}`}
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
                    {home_data?.hajjPackageData?.map((pkg, index) => (
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
                      Umrah packages
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {home_data?.umrahPackageData?.map((pkg, index) => (
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
{/* 
              <div className="mt-m_24px">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      Visa packages
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {home_data?.visaPackageData?.map((pkg, index) => (
                      <Link
                        to={`/visa-details/${pkg.id}`}
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
              </div> */}
            </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default BlogDetails;