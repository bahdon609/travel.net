
import { Parallax } from 'react-parallax';
import img from '../../assets/banner/bannerimageforhaj.jpg'
import { url } from '../../../connection';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import SkeletonParallaxLoader from '../ContactUs/Contact_SkeletonLoader';
import Blog_Skelator from './Blog_Skelator';


const Blog = () => {
  const imgUrl = `${url}/storage/uploads/blogImg/`;
  const [loading, setLoading] = useState(true);
  const imgUrl_haj = `${url}/storage/uploads/hajjPackage/`;
  const imgUrl_tour = `${url}/storage/uploads/tourPackage/`;
  const imgUrl_umrah = `${url}/storage/uploads/umrahPackage/`;
  const imgUrl_visa = `${url}/storage/uploads/visaPackage/`;
  const axiosPublic = useAxiosPublic();
  const { data = {} } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/get-blog-data");
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
  //(home_data)

  //(data)

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const limitTextTo50Words = (htmlContent) => {
    const sanitizedContent = DOMPurify.sanitize(htmlContent);
    const textContent = sanitizedContent.replace(/<[^>]*>?/gm, "");
    const words = textContent.split(/\s+/);
    if (words.length > 50) {
      return `${words.slice(0, 60).join(" ")}...`;
    }
    return textContent;
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  const [visibleBlogs, setVisibleBlogs] = useState(5); // Initial limit of blogs

  const handleLoadMore = () => {
    setVisibleBlogs((prev) =>
      prev === 5 ? data?.getBlogData?.data?.length : 5
    ); // Toggle between 5 and all blogs
  };

  return (
    <div className="">
      <div>
        {loading ? (
          <SkeletonParallaxLoader /> // Show skeleton loader while loading
        ) : (
          <Parallax
            blur={0}
            bgImage={img} // Your image file
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
                <h1 className="text-4xl font-bold mb-4">All Blogs</h1>
              </div>
            </div>
          </Parallax>
        )}
      </div>

      <div>
        {loading ? (
          <Blog_Skelator />
        ) : (
          <div className="flex flex-col md:flex-row mx-auto w-full xl:w-[1300px]  py-p_40px gap-6">
            {/* Left Column - Main Image */}
            <div className="w-full lg:w-[70%]">
              <div>
                {data?.getBlogData?.data
                  ?.slice(0, visibleBlogs) // Show limited blogs based on `visibleBlogs`
                  ?.map((article, index) => (
                    <Link
                      to={`/blog-details/${article.id}`}
                      key={index}
                      className="flex flex-col lg:flex-row gap-4 mt-m_large"
                    >
                      <div className="w-full lg:w-[30%] h-[300px] overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={article.photo}
                          alt={article.title}
                        />
                      </div>
                      <div className="w-full lg:w-[70%]">
                        <h1 className="text-text_title font-bold hover:text-sky_blue">
                          {article.title}
                        </h1>
                        <p className="text-text_standard font-semibold py-p_10px">
                          {article.updated_at}
                        </p>
                        <p
                          className="text-text_medium mt-mt_medium font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              limitTextTo50Words(article.post)
                            ),
                          }}
                        ></p>
                        <button className="text-text_large text-sky_blue font-bold pt-p_16px hover:text-blue_blue">
                          Read More
                        </button>
                      </div>
                    </Link>
                  ))}

                {/* Load More Button */}
                {data?.getBlogData?.data?.length > 5 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleLoadMore}
                      className="px-6 py-2 bg-sky_blue text-white font-bold rounded hover:bg-blue_blue"
                    >
                      {visibleBlogs === 5 ? "Load More" : "Show Less"}
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Right Column - Details */}
            <div className="w-full lg:w-[30%] bg-white">
              <div className="mt-m_24px">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      Category
                    </h3>
                    <hr />
                  </div>

                  <div>
                    {data?.getBlogCategoryData?.map((pkg, index) => (
                      <Link
                        to={`/blog-details/${pkg.id}`}
                        key={index}
                        className="mt-m_medium text-text_medium  gap-4"
                      >
                        <div>
                          <h1 className="text-text_medium font-bold hover:text-sky_blue">
                            {pkg.category_name}
                          </h1>
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
                          to="/umrah-hajj"
                          className="text-text_medium font-bold hover:text-sky_blue"
                        >
                          Umrah & Hajj
                        </Link>

                        <Link
                          to="/visa"
                          className="text-text_medium font-bold hover:text-sky_blue"
                        >
                          Visa
                        </Link>
                        <Link
                          to="/package-tour"
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

              <div className="mt-m_24px">
                <div>
                  <div className="">
                    <h3 className="font-semibold text-black text-text_large border-b-4 border-blue_blue w-[45%] pb-p_4px">
                      Visa packages
                    </h3>
                    <hr />
                  </div>

                  {/* <div>
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;