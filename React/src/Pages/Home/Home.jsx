import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import HolidayPackage from './HolidayPackage/HolidayPackage';
import CountryFlags from './CountryFlag/TopVisa_Service';
import AboutUs from './AboutUs/AboutUs';
import WhyChoose from './AboutUs/WhyChoose';
import Subscribe from './AboutUs/Subscribe';
import UmrahPackage from './UmrahPackage/UmrahPackage';
import Hajpackage from './Hajpackage/Hajpackage';
import HomeSkelator from './HomeSkelator';
import Banner2 from './Banner/Banner2';
import TopVisa_Service from './CountryFlag/TopVisa_Service';
import BannerSafewary from './Banner/BannerSafewary';
import StudeVisa from '../NavTour/StudeVisa';
import BannerSkelator from './Banner/BannerSkelator';

import Visa_Assistance_service from '../Visa_Assistance_service/Visa_Assistance_service';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import TopDestinations from '../TopDestinations/TopDestinations';
import WelcomeTravel_Design from '../Welcome_Travelley/Welcome_Travelley';
import VisitVisa from '../NavTour/VisitVisa';
import WorkVisa from '../NavTour/WorkVisa';
// import BannerB from './Banner/BannerB';

const Home = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);


    return (
      <div className="w-full">
        {loading ? <BannerSkelator /> : <Banner></Banner>}
        {loading ? <BannerSkelator /> : <BannerSafewary></BannerSafewary>}
        {loading ? (
          <BannerSkelator />
        ) : (
          <WelcomeTravel_Design></WelcomeTravel_Design>
        )}
        {loading ? (
          <BannerSkelator />
        ) : (
          <Visa_Assistance_service></Visa_Assistance_service>
        )}
        {loading ? <BannerSkelator /> : <WhyChooseUs></WhyChooseUs>}
        {loading ? <BannerSkelator /> : <TopDestinations></TopDestinations>}

        <div>
          {loading ? (
            <HomeSkelator />
          ) : (
            <div>
              <TopVisa_Service></TopVisa_Service>
              <VisitVisa></VisitVisa>
              <StudeVisa></StudeVisa>
              <WorkVisa></WorkVisa>
              <Banner2 />
            </div>
          )}
        </div>
      </div>
    );
};

export default Home;