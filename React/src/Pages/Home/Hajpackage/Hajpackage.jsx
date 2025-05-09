import React from 'react';
import { Parallax } from 'react-parallax';
import { url } from '../../../../connection';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { Link } from 'react-router-dom';


const Hajpackage = () => {

    const axiosPublic = useAxiosPublic();
    const imgUrl = `${url}/storage/uploads/hajjPackage/`;

    const { data = {} } = useQuery({
        queryKey: ["haj_package"],
        queryFn: async () => {
            const res = await axiosPublic.get("/get-homepage-data");
            return res.data;
        },
    });
    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };

    return (
        <div>

            <div className="holiday__bg--img relative">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                {/* Content */}
                <div className="relative z-10 mx-auto w-full xl:w-[1300px] holidayContent">
                    {/* Scrollable Content */}
                    <div className="h-full pb-16">
                        {/* Header Section */}
                        <div className="text-center text-white mb-8 pt-20">
                            <h1 className="text-4xl font-bold mb-4">Haj Packages From Bangladesh</h1>
                            <p className="text-lg mb-6 text-justify">
                                Are you planning to embark on the sacred journey of Hajj from Bangladesh? Look no further! Our comprehensive Hajj package is designed to provide you with a life-changing spiritual experience, expert guidance, comfortable accommodations, and seamless transportation. You will get all details about the different Hajj package durations and prices, the reasons why you should choose our Hajj package, the highlights of the itinerary, the preparation and requirements, safety measures, booking and reservations, and frequently asked questions. Join us on this extraordinary pilgrimage and make your journey of a lifetime truly unforgettable.
                            </p>
                            <h2 className="font-semibold text-xl">Here are some of the Top and Cheap Packages for you during the Hajj</h2>
                        </div>

                        {/* Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {data?.hajjPackageData?.map((packageItem) => (
                                <Link to={`/haj-details/${packageItem.id}`}
                                    key={packageItem.id}
                                    className="bg-white rounded-lg shadow-lg duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                                >
                                    <img
                                        src={`${imgUrl}${packageItem?.photo_1}`}
                                        alt={packageItem.title}
                                        className="rounded-t-lg w-full"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold underline">{packageItem.title}</h3>
                                        <p className="text-red-500 font-semibold">{stripHtml(packageItem.package_price)}</p>
                                        {packageItem.package_duration ? (
                                            <button className="btn_tag my-m_16px">{packageItem.package_duration}</button>
                                        ) : (
                                            <div className="my-m_16px invisible btn_tag">Duration</div>
                                        )}
                                        {/* <button className="btn_tag my-m_16px">10 Days</button> */}
                                        <br />
                                        <button className="btn_primary font-bold">
                                            View Details
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Button */}
                        <Link to='/haj' className="flex items-center justify-center mt-8">
                            <button className="btn_primary font-bold">
                                View All
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Hajpackage;

