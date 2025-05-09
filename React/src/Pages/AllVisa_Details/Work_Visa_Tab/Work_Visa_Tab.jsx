import { useState } from "react";
import DOMPurify from "dompurify";
import VisaCheckList from "../AllVisa_Details_Tab/VisaCheckList";
import Remarks from "../AllVisa_Details_Tab/Remarks";
import Visa_FAQ from "../AllVisa_Details_Tab/Visa_FAQ";
import Appointment from "../AllVisa_Details_Tab/Study_Appointment";
import Work_Visa_Appointment from "./Work_Visa_Appointment";
import Work_Visa_Checklist from "./Work_Visa_Checklist";

const Work_Visa_Tab = ({ data }) => {
  const [activeTab, setActiveTab] = useState("DETAILS");
  const [openIndex, setOpenIndex] = useState(0);
  const [openIndex2, setOpenIndex2] = useState(0);

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
  const sanitizedHTML = DOMPurify.sanitize(
    data.singleWorkingVisaData?.post_details
  );
  return (
    <div className=" p-2">
      <div className="flex flex-wrap gap-3 ">
        <button
          className={`p-4   ${
            activeTab === "DETAILS"
              ? "bg-clr_btn_primary text-white"
              : "bg-clr_tab"
          }  rounded-t-md text-text_medium font-bold w-fit`}
          onClick={() => setActiveTab("DETAILS")}
        >
          DETAILS
        </button>
        <button
          className={`p-4   ${
            activeTab === "BASIC INFORMATION"
              ? "bg-clr_btn_primary text-white"
              : "bg-clr_tab"
          }  rounded-t-md text-text_medium font-bold w-fit`}
          onClick={() => setActiveTab("BASIC INFORMATION")}
        >
          BASIC INFORMATION
        </button>
        <button
          className={`p-4   ${
            activeTab === "REMARKS"
              ? "bg-clr_btn_primary text-white"
              : "bg-clr_tab"
          } w-fit rounded-t-md text-text_medium font-bold`}
          onClick={() => setActiveTab("REMARKS")}
        >
          REMARKS
        </button>
        <button
          className={`p-4   ${
            activeTab === "FAQ" ? "bg-clr_btn_primary text-white" : "bg-clr_tab"
          } w-fit rounded-t-md text-text_medium font-bold`}
          onClick={() => setActiveTab("FAQ")}
        >
          FAQ
        </button>
        <button
          className={`p-4   ${
            activeTab === "APPOINTMENT"
              ? "bg-clr_btn_primary text-white"
              : "bg-clr_tab"
          } w-fit rounded-t-md text-text_medium font-bold`}
          onClick={() => setActiveTab("APPOINTMENT")}
        >
          APPOINTMENT
        </button>
      </div>

      {activeTab === "DETAILS" && (
        <div className="">
          <h2 className="text-text_xxl font-bold text-center my-6">
            {data.singleWorkingVisaData?.title} <span> </span>Checklist
          </h2>
          <div className="flex flex-col gap-2">
            {data.singleWorkingVisaData?.working_visa_document_data?.map(
              (item, index) => (
                <Work_Visa_Checklist
                  key={index}
                  title={item.title}
                  content={DOMPurify.sanitize(item.post_details)} // Sanitize content
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              )
            )}
          </div>
        </div>
      )}

      {activeTab === "BASIC INFORMATION" && (
        <div className="">
          <h2 className="text-text_xxl font-bold text-center mt-6">
            {data.singleWorkingVisaData?.title} <span> </span>Basic Information
          </h2>
          <p dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        </div>
      )}

      {activeTab === "REMARKS" && (
        <div className="mt-6 text-center">
          <h2 className="text-text_xxl font-bold text-center mt-6">Remarks</h2>

          <div className="mt-2">
            <Remarks></Remarks>
          </div>
        </div>
      )}

      {activeTab === "FAQ" && (
        <div className="">
          <h2 className="text-text_xxl font-bold text-center my-6">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-2">
            {accordionData2.map((item, index) => (
              <Visa_FAQ
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
      )}

      {activeTab === "APPOINTMENT" && (
        <div className="mt-6 text-center">
          <h2 className="text-text_xxl font-bold text-center my-6">
            Book an Appointment
          </h2>

          <div>
            <Work_Visa_Appointment data={data}></Work_Visa_Appointment>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work_Visa_Tab;
