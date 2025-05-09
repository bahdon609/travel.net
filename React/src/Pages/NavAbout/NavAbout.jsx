import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import img from "../../assets/banner/bd-tour-image.jpg";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { url } from "../../../connection";
import { Link } from "react-router-dom";
import TeamMember from "./TeamMember";
import SkeletonParallaxLoader from "../ContactUs/Contact_SkeletonLoader";
import NavAboutSkelator from "./NavAboutSkelator";

const NavAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="z-1">
      <div>
        {loading ? (
          <SkeletonParallaxLoader /> // Show skeleton loader while loading
        ) : (
          <Parallax
            blur={0}
            bgImage={img}
            bgImageAlt="Europe Tour Package"
            strength={600}
            bgImageStyle={{
              backgroundAttachment: "fixed",
              height: "60vh",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                height: "50vh",
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
                <h1 className="text-4xl font-bold mb-2">About Us</h1>
              </div>
            </div>
          </Parallax>
        )}
      </div>

      <div>
        {loading ? (
          <NavAboutSkelator /> // Show skeleton loader while loading
        ) : (
          <div className="mx-auto w-full xl:w-[1300px] text-text_title  py-p_40px font-normal">
            <div>
              <TeamMember></TeamMember>
            </div>
            <p className="text-justify">
              Travel Design BD is a full-service Outbound Tour Operator in
              Bangladesh. The founder of Travel Design BD is a 100% tourism
              professional with knowledge of most of the destinations and
              services in the world for people to enjoy. Our specialized
              departments with expertise offer a variety of services. Each
              department works independently to provide the best services to our
              customers& clients and become the best travel agency in
              Bangladesh, focusing on creating friendship and a long-lasting
              relationship with our beloved clients. In the year 2013, we
              decided to create a tour company by the name Travel Design BD to
              specialize in the receptive tourism market and to achieve the
              title of the best tours and travel company in Bangladesh. In this
              regard, we have contracts and alliances with most of the hotels,
              tourist organizations & companies in most of the countries around
              the world that help us provide the best quality service to our
              clients. Therefore, we investigate every single detail of your
              trip, to ensure each sector has all the ingredients to satisfy our
              clients and help us become the best tour operator in Bangladesh.
              We can proudly talk of the following achievements:
            </p>
            <p className="text-justify">
              Certified travel agency of Bangladesh Government – Ministry of
              Civil Aviation and Tourism (Reg. No. 0006663) IATA Accredited
              Agent (Code: 42337654)
            </p>
            <p className="text-justify">
              Proud member of Association of Travel Agents of Bangladesh- ATAB
              (Reg. No. 13889) Proud member of Tour Operators Association of
              Bangladesh - TOAB (Membership No. 479) Proud member of Bangladesh
              Outbound Tour Operators Forum (BOTOF) Active alliances and
              networking with other agencies to serve its international
              clientele Growing corporate clients Accepts Credit Card
              transactions
            </p>
            <p className="text-justify">
              Moreover, Travel Design BD is also pleased and appreciative to the
              staff and personnel who are considered teammates of this company
              thus helping the staff to upgrade their skills through continuous
              formal and hands-on training and seminars towards achieving total
              customer satisfaction and well-being. Their full dedication helps
              us to become the best travel agency in Bangladesh.
            </p>
            <div className="my-m_16px">
              <h1 className="text-text_xl font-semibold">VISION:</h1>
              <p className="py-p_4px text-justify">
                To dominate the tourism industry by excellence in service with
                innovation & creative concepts in the global marketplace for our
                clients that will help us achieve the title of best travel
                agency in Bangladesh.
              </p>
            </div>
            <div className="my-m_16px">
              <h1 className="text-text_xl font-semibold ">MISSION:</h1>
              <p className="py-p_4px text-justify">
                Provide our clients with unforgettable travel experiences with
                guaranteed more than satisfactory services that exceed the level
                of their expectations.
              </p>
            </div>
            <div>
              <h1 className="text-text_xl font-semibold mt-m_16px">SERVICE:</h1>
              <p className="py-p_4px text-justify">
                Professional customer consultation providing hassle-free travel
                and journey. Creative but determined approach to search for the
                most appropriate travel arrangements and accommodations and
                identifying the best possible values. Our travel consultants are
                friendly, polite, professional, and experienced in accommodating
                both the seasoned traveler and those who are new to the world of
                travel.
              </p>
            </div>
            <div>
              <h1 className="text-text_xl font-semibold mt-m_16px">
                A TEAM OF EXPERTS:
              </h1>
              <p className="py-p_4px text-justify">
                We believe that only an experienced travel expert can help you
                discover its unique and amazing qualities. Travel Design BD has
                a team of specialists who work with full dedication and great
                passion, discipline, and knowledge not only to show you the best
                of the world but to allow you to feel it with all your senses
                and feel as if you are floating with joy.
              </p>
            </div>
            <div>
              <h1 className="text-text_xl font-semibold mt-m_16px">
                OUR TRIPS:
              </h1>
              <p className="py-p_4px text-justify">
                Our trips are carefully mastered to combine the cultural and
                natural riches with comfort, safety, luxury, and adventure to
                create trips that will have our guests talking for a long time.
                We have four key components: discovery, value, pace, and choice.
              </p>
            </div>
            <div>
              <h1 className="text-text_xl font-semibold mt-m_16px">
                KEY STRATEGIES:
              </h1>
              <p className="py-p_4px text-justify">
                The travel industry is a highly competitive industry with
                everyone competing to become the best travel agency in
                Bangladesh. To secure our position as a leader in this industry
                and to become the best tour operator agency in Bangladesh,
                Travel Design BD is keen on focusing on four strategic areas,
                namely: Always Keeping the Company financially and economically
                healthy. Presenting high-quality service to customers translates
                to customer loyalty resulting in repetition of orders and
                referrals that create new and bigger opportunities. Maintaining
                a high-performing team that consistently displays competence in
                customer orientation and driving for results with the highest
                regard for professional ethics and doing all the above at the
                lowest cost in the industry.
              </p>
            </div>
            <div>
              <h1 className="text-text_xl font-semibold mt-m_16px">
                WHAT CAN WE DO?
              </h1>
              <p className="py-p_4px text-justify ">
                Our services include EVERYTHING there is related to tourism,
                such as: International Airline Reservations & Ticketing Boat,
                Bus & Railways Ticketing Worldwide visa processing (embassy
                in/outside Bangladesh) Worldwide hotel reservation Worldwide car
                rental. Ground handling services Tour Guides---we speak your
                language All over the year excursions and itineraries,
                (Adventures, Eco-Tours, Biblical Tours, Cruises, Diving, Sea
                Resort Holidays, Ski Holidays, Relaxation & Spa Treatment
                Packages, & Tailored Made Tours) Incentive, Special interest
                groups. Destination Weddings Conferences & MISC. Cruises
                worldwide& locally Camping services. Catering Meet & Assist
                services.
              </p>
            </div>

            <div>
              <h1 className="text-text_xl font-semibold mt-m_16px">
                OUR SLOGAN:
              </h1>
              <p className="py-p_4px ">travel | enjoy | save</p>
            </div>
            <div>
              <h1 className="text-text_xl font-semibold mt-m_16px">OFFICE:</h1>
              <p className="py-p_4px ">
                119, ConfidenceTower (1st Floor) Shahjadpur,Gulshan, Dhaka-1212
              </p>
            </div>

            <div>
              <h1 className="text-text_xl font-semibold mt-m_16px">CONTACT:</h1>
              <p className="py-p_4px ">Email : contact@traveldesignbd.com</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavAbout;
