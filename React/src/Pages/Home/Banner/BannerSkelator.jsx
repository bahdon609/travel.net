import React from 'react';

const BannerSkelator = () => {
    return (
        <div>
            <div
                className="bg-gray-200 animate-pulse bg-cover bg-center h-[1000px] lg:h-[750px]"
            >
                <div className="flex flex-col lg:flex-row justify-center mx-auto w-full xl:w-[1300px]">
                    {/* Skeleton for the Header */}
                    <div className="lg:text-text_xxxl text-text_xl font-bold text-center pt-5 bg-gray-300 animate-pulse text-white  mt-10 lg:mt-40 flex items-center lg:w-[40%] mx-auto  h-[100px]"></div>

                    {/* Skeleton for the Tabs and Content */}
                   
                </div>
            </div>
            

        </div>
    );
};

export default BannerSkelator;