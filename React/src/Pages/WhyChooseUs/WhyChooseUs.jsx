import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionItem2 from "./AccordionItem2";

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [openIndex2, setOpenIndex2] = useState(0);

  const accordionData = [
    {
      title: "WE HAVE ADEQUATE KNOWLEDGE ABOUT EVERY COUNTRY",
      content:
        "Whether you’re searching for group tours, customized tours, or solo tours, Travel Design BD will provide you with an experience like no other in Bangladesh and the Subcontinent, as well as all other countries.\n\nCORE COMPETENCY: Our biggest asset is our ability to manage the ground. We open doors that most individuals seem unable to open.",
    },
    {
      title: "ASSOCIATES IN ALL THE RIGHT PLACES",
      content: "Details about associates...",
    },
    { title: "EXQUISITE PLANNING", content: "Details about planning..." },
    { title: "SOLIDARITY", content: "Details about solidarity..." },
    { title: "CONSISTENCY", content: "Details about consistency..." },
    { title: "RELIABILITY", content: "Details about reliability..." },
  ];

  const accordionData2 = [
    {
      title: "WE HAVE ADEQUATE KNOWLEDGE ABOUT EVERY COUNTRYs",
      content:
        "Whether you’re searching for group tours, customized tours, or solo tours, Travel Design BD will provide you with an experience like no other in Bangladesh and the Subcontinent, as well as all other countries.\n\nCORE COMPETENCY: Our biggest asset is our ability to manage the ground. We open doors that most individuals seem unable to open.",
    },
    {
      title: "ASSOCIATES IN ALL THE RIGHT PLACES",
      content: "Details about associates...",
    },
    { title: "EXQUISITE PLANNING", content: "Details about planning..." },
    { title: "SOLIDARITY", content: "Details about solidarity..." },
    { title: "CONSISTENCY", content: "Details about consistency..." },
    { title: "RELIABILITY", content: "Details about reliability..." },
  ];

  return (
    <div className="bg-clr_gray_500 lg:py-10">
      <div className="">
        <h1 className=" text-text_30px md:text-text_40px font-bold text-clr_primary_text  text-center pb-6">
          Why Choose Us?
        </h1>

        <div className="flex flex-col lg:flex-row gap-4  w-full xl:w-[1300px] mx-auto text-clr_primary_text">
          <div className="flex-1 shadow-[4px_4px_10px_rgba(0,0,0,0.5)]">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          <div className="flex-1 shadow-[4px_4px_10px_rgba(0,0,0,0.5)] text-clr_primary_text">
            {accordionData2.map((item, index) => (
              <AccordionItem2
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex2 === index}
                onClick={() =>
                  setOpenIndex2(openIndex2 === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
