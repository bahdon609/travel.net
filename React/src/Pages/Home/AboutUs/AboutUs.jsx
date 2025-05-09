import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-auto w-full lg:w-[1300px] gap-6">
      <div className="my-m_40px flex-1">
        <h1 className="text-text_30px font-bold uppercase">
          ABOUT Travel Design BD TOURS TRAVEL
        </h1>
        <div className="text-text_title font-normal text-justify">
          <p>
            Travel Design BD is a trusted and reliable tour and travel agency
            among all the leading and updated tour-operating services in
            Bangladesh. We are here to bring the luxury to your traveling.
            Travel Design BD is a proud member of Association of Travel Agents
            of Bangladesh-ATAB and Tour Operators Association of Bangladesh.
            Safe traveling, your security, and your enjoyment are our focus
            during your travels. Our experienced and expert traveling guides
            ensure that you do not need to move an inch from your comfort zone
            and make sure that you always have a beautiful satisfactory smile on
            your face. We believe that your smile is our success and Travel
            Design BD will do anything to keep you smiling.{" "}
          </p>
        </div>
        <div className="text-text_title font-normal my-m_8px text-justify">
          <p>
            By the Grace of Almighty Allah, we are very pleased to say that the
            Umrah service is the most successful program from oboskash Being
            honest and fair is our main motive towards our customer and
            therefore we deliver you the best services during the Umrah. We know
            how important this ritual is for the Muslims and thus Travel Design
            BD has come up with different Umrah packages from Bangladesh. Each
            of our packages is designed for you so that you can pick it
            according to your desired budget to enjoy and be satisfied with our
            services. Our experienced trainers will guide you to the end and see
            any of your matter. We also have a Hajj program that we want to make
            successful like our Umrah program. Thanks to our top-notch services,
            most of our customers are based on the recommendation from the
            previous customers.{" "}
          </p>
        </div>
      </div>
      <div className="flex-1">
        <iframe
          src="https://www.youtube.com/embed/RRT3Fz7SRKw"
          title="Youtube video"
          allowFullScreen
          className="w-full h-[500px]"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
