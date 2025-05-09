import React from 'react';

const UmrahDetails_Skelator = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row mx-auto w-full xl:w-[1300px] py-p_40px gap-6">
                {/* Left Column - Main Image */}
                <div className="w-full lg:w-[70%]">
                    <div className="bg-white h-[450px] overflow-hidden animate-pulse">
                        <div className="bg-gray-200 h-full w-full"></div>
                    </div>
                    {/* Thumbnail Carousel */}
                    <div className="flex justify-end gap-5 mt-m_8px border py-p_12px px-p_12px">
                        {Array(2).fill(0).map((_, index) => (
                            <div key={index} className="w-[30%] h-[100px] bg-gray-300 animate-pulse"></div>
                        ))}
                    </div>

                    <div className="  mt-5 rounded-md ">
                       

                        {Array(4).fill(0).map((_, index) => (
                            <div  key={index} className="bg-gray-300  flex items-center justify-between animate-pulse w-full border h-[70px]">
                                <div className='bg-gray-400 w-[30%] mx-5 h-6'></div>
                                <div className='bg-gray-400 '></div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Column - Details */}
                <div className="w-full lg:w-[30%] bg-white">
                    {/* Package Details */}
                    <div className="rounded-lg w-full">
                        <div className="bg-gray-300 p-p_16px animate-pulse">
                            <div className="bg-gray-400 h-8 w-2/3"></div>
                        </div>
                        <div className="border p-p_16px animate-pulse">
                            <div className="bg-gray-300 h-8 w-2/3 mb-2"></div>
                            <div className="bg-gray-300 h-6 w-1/2"></div>
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div className="mt-m_24px animate-pulse">
                        <div className="bg-gray-300 p-p_16px">
                            <div className="bg-gray-400 h-8 w-1/2"></div>
                        </div>

                        <div className="border p-p_16px text-text_medium">
                            <div className="bg-gray-300 h-6 w-4/4 mb-2"></div>
                            <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
                            <div className="bg-gray-300 h-6 w-4/4 mb-2"></div>
                        </div>
                    </div>

                    {/* Other Sections - Skeleton for "You May Also Like", "Tour Packages", etc. */}
                    <div className="space-y-6 mt-6">
                        {[...Array(4)].map((_, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-4">
                                <div className="h-6 bg-gray-200  w-1/2"></div>
                                <div className="space-y-2">
                                    {[...Array(4)].map((_, linkIndex) => (
                                        <div
                                            key={linkIndex}
                                            className="flex gap-4 items-center animate-pulse"
                                        >
                                            <div className="w-[110px] h-[55px] bg-gray-200 "></div>
                                            <div className="w-full">
                                                <div className="h-4 bg-gray-200  w-3/4"></div>
                                                <div className="h-4 bg-gray-200  w-1/2 mt-2"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UmrahDetails_Skelator;