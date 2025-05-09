import { useState } from "react";
import VisaCheckList from "./VisaCheckList";
import Remarks from "./Remarks";
import Visa_FAQ from "./Visa_FAQ";
import DOMPurify from "dompurify";
import Study_Appointment from "./Study_Appointment";

const AllVisa_Details_Tab = ({ data }) => {
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
    data.singleStudyVisaData?.post_details
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
            {data.singleStudyVisaData?.title} <span> </span>Checklist
          </h2>
          <div className="flex flex-col gap-2">
            {data.singleStudyVisaData?.study_visa_document_data?.map(
              (item, index) => (
                <VisaCheckList
                  key={index}
                  title={item.title}
                  content={item.post_details} // Sanitize content
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
            {data.singleStudyVisaData?.title} <span> </span>Basic Information
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
            <Study_Appointment data={data}></Study_Appointment>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllVisa_Details_Tab;
