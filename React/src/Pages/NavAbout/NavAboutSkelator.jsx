import React from 'react';

const NavAboutSkelator = () => {
    return (
        <div>
            <div className="mx-auto w-full xl:w-[1300px] text-text_title py-p_60px font-normal">
                <div className="animate-pulse">
                <div className="w-[40%] mx-auto h-10 bg-gray-200  mb-4"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg animate-pulse">
                                <div className="w-full h-48 bg-gray-200  mb-4"></div>
                                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mt-6"></div>
                            </div>
                        ))}
                    </div>

                    <div className="my-m_16px animate-pulse">
                        <div className="bg-gray-200 h-80 w-full rounded mb-4"></div> 
                       
                    </div>

                    <div className="my-m_16px animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* Vision title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* Vision paragraph loader */}
                    </div>
                    <div className="my-m_16px animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* Mission title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* Mission paragraph loader */}
                    </div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* Service title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* Service paragraph loader */}
                    </div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* A Team of Experts title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* A Team of Experts paragraph loader */}
                    </div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* Our Trips title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div>
                    </div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* Key Strategies title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* Key Strategies paragraph loader */}
                    </div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* What Can We Do title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* What Can We Do paragraph loader */}
                    </div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* Our Slogan title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* Our Slogan paragraph loader */}
                    </div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* Office title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* Office paragraph loader */}
                    </div>
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 w-40 rounded mb-2"></div> {/* Contact title loader */}
                        <div className="bg-gray-200 h-16 w-full rounded mb-6"></div> {/* Contact paragraph loader */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavAboutSkelator;