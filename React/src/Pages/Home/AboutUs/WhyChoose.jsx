import React from "react";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <div className="bg-[#D8E3E6]  pb-p_20px">
      <div className="mx-auto lg:w-[1300px] pt-p_40px">
        <div className="flex items-center gap-20 pt-p_40px ">
          <div>
            <img
              className="object-cover rounded-sm h-[200px] w-[270px]"
              src="https://media.cnn.com/api/v1/images/stellar/prod/elysian-e9x-render-1-20240708110211041.jpg?c=original&q=h_447,c_fill"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-text_30px font-bold">Why Choose Us</h1>
          </div>
        </div>
        <div>
          <p className="text-text_medium mt-m_16px text-justify">
            It is very important for you to choose your travel agency very
            wisely. When you take one or two weeks off from your regular
            schedule just for some relaxation, you must expect nothing but
            pleasure, satisfaction and enjoyment to refresh yourself and get you
            back on track. Therefore, Travel Design BD travel agency is there to
            ensure that your holidays do not go to a waste with their top
            quality services and cheap tour packages from Bangladesh. Starting
            from your visa processing, as we are one of the best visa processing
            agency in Bangladesh, buying your tickets, booking your
            accommodation, tour arrangements and till returning you safely to
            your home it is all on our shoulders. All you have to do is to
            choose your desired tour package, sit back, relax, and let us do the
            rest. We guarantee that you will not get the chance to complain
            about anything.
          </p>
        </div>
      </div>

      <Link to="/contact-us" className="flex items-center justify-center mt-8">
        <button className="btn_primary font-bold">Contact Us</button>
      </Link>
    </div>
  );
};

export default WhyChoose;
