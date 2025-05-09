import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Parallax } from 'react-parallax';
import { url } from '../../../../connection';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const HolidayPackage = () => {

    const axiosPublic = useAxiosPublic();
    const imgUrl = `${url}/storage/uploads/tourPackage/`;
    const { data = {} } = useQuery({
        queryKey: ["haj_package"],
        queryFn: async () => {
            const res = await axiosPublic.get("/get-homepage-data");
            return res.data;
        },
    });
    //(data)



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
                <div className="relative z-10 mx-auto lg:w-[1300px] holidayContent">
                    {/* Header Section */}
                    <div className="text-center text-white mb-8 pt-20 inset-0">
                        <h1 className="text-4xl font-bold mb-4">Cheap International Holiday Packages From Bangladesh</h1>
                        <p className="text-lg mb-6 text-justify">
                            Thinking of taking a break from everyday's busy life? Our packages are very much cost-effective, offering the best facilities, fine hotels, and delicious foods. Explore the beauty of nature with a glass of your favorite drink!
                        </p>
                        <h2 className="font-semibold text-xl">Check out the Latest Cost-Effective Tour Packages!</h2>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16">
                        {data?.tourPackageData?.map((packageItem) => (
                            <Link to={`/tour-details/${packageItem.id}`}
                                key={packageItem.id}
                                className="bg-white rounded-lg shadow-lg duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                            >
                                <div className="w-full h-[280px] overflow-hidden">
                                    <img
                                        src={`${imgUrl}${packageItem?.photo_1}`}
                                        alt={packageItem.title}
                                        className="rounded-t-lg w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold underline">{packageItem.title}</h3>
                                    <p className="text-red-500 font-semibold">{stripHtml(packageItem?.package_price)}</p>
                                   <br />
                                    <button className="btn_primary font-bold my-m_16px">View Details</button>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <Link to='/tour' className="flex items-center justify-center">
                        <button className="btn_primary font-bold my-m_40px text-center">View All </button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default HolidayPackage;

