import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopDestinations = () => {
  const destinations = [
    {
      name: "France",
      image:
        "https://etripto.in/uploads/0000/1/2024/09/19/phi-phi-leh-island-1513592219-600.png",
    },
    {
      name: "Dubai",
      image:
        "https://Travel Design BD.net/wp-content/uploads/2021/08/top-destination_thailand_Travel Design BD.jpg",
    },
    {
      name: "Turkey",
      image:
        "https://avada.website/tour-operator/wp-content/uploads/sites/169/2022/06/maldives-tour.jpg",
    },
    {
      name: "Turkey",
      image:
        "https://royalskyholidays.com/wp-content/uploads/2022/01/Maldives-tour-packages.jpg",
    },
    {
      name: "Turkey",
      image:
        "https://etripto.in/uploads/0000/1/2024/09/19/phi-phi-leh-island-1513592219-600.png",
    },
    {
      name: "Turkey",
      image:
        "https://comfortmytravel.com/wp-content/uploads/2021/02/1-2-min.jpg",
    },
    {
      name: "Turkey",
      image: "https://static.toiimg.com/photo/67382132.cms",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-10 relative">
      <h2 className="text-text_xl md:text-text_30px lg:text-text_40px font-bold text-clr_primary_text mb-6 ">
        OUR TOP DESTINATIONS
      </h2>

      {/* Swiper Container */}
      <div className="relative w-[90%] xl:w-[1200px] mx-auto rounded-xl ">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
          spaceBetween={200}
          centeredSlides={true} // Ensures the center image is in focus
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            1024: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
          }}
          className="h-[300px] rounded-xl"
        >
          {destinations.map((destination, index) => (
            <SwiperSlide
              key={index}
              className="relative flex flex-col items-center rounded-xl"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className={`h-[300px] w-full object-cover ${
                  index === 3 ? "rounded-xl" : "rounded-lg"
                }`}
              />
              <p className="absolute bottom-4 text-lg font-semibold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                {destination.name.toUpperCase()}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-swiper-button-prev absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 bg-clr_primary_text text-white rounded-full">
          <FaChevronLeft size={24} />
        </div>
        <div className="custom-swiper-button-next absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 bg-clr_primary_text text-white rounded-full">
          <FaChevronRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
