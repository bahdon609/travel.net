import React from "react";
import USA_Study from "../assets/banner/usa_studys.jpg";

const USAVisaRequirements = () => {
  return (
    <div className="font-sans  mx-auto px-4">
      {/* Header Section */}
      <div>
        <div className="relative">
          <img
            src={USA_Study}
            alt=""
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-500 text-center">
            USA <span className="text-violet-950">Visa Requirements</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          USA Study Visa Requirements
        </h2>
        <p className="text-lg md:text-xl font-bold">
          Effortable tuition fees!!
        </p>

        <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
          <div className="md:w-2/3">
            <p className="text-lg font-bold mb-2">Study in USA?</p>
            <p>
              Studying in the United States and abroad doesn’t just give you
              tangible degrees and certificates. For any international student,
              the USA has a lot to offer: one of the most prestigious,
              top-ranked higher education systems in the world, eclectic cities,
              and beautiful natural parks, culture, history, and a very
              multicultural population.
            </p>
          </div>

          <div className="mt-6 md:mt-0 md:w-1/3">
            {/* Contact Section */}
            <div className="bg-gray-100 rounded shadow-md">
              <div className="bg-gray-700 p-4">
                <h3 className="text-lg font-bold text-white">
                  CONNECT WITH US
                </h3>
              </div>
              <div className="p-4">
                <p className="text-red-500 font-semibold text-lg mb-2">
                  Call for details
                </p>
                <p className="text-blue-500 font-semibold">+88 01511 004 002</p>
                <p className="text-blue-500 font-semibold">+880 1711 004 002</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 mt-8">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Basic Documents:
          </h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>$40 - $150 Application Fee (non-refundable).</li>
            <li>Scan copy of your Passport.</li>
            <li>
              Scan copies (original) or Official Sealed copies of
              Bachelor/Masters Certificates & Transcript.
            </li>
            <li>
              Forwarding Letter / NOC from the applicant’s company authority on
              the company’s letterhead.
            </li>
            <li>
              Scan Copies or Photocopies or Certified/Notarized Copies SSC/O
              Level and HSC/A Level Certificate and Marksheet.
            </li>
            <li>
              Scan copies (original) or Certified copies of Two/Three Academic
              Reference Letter.
            </li>
            <li>Statement of Purpose.</li>
            <li>
              Scan copy (original) or Notarized copy of IELTS/TOEFL Certificate.
            </li>
            <li>Scan copy of SAT/GMAT/GRE score (if required).</li>
            <li>Job experience letter (if required).</li>
            <li>
              Statement of Financial Support Form (non-US sponsor) or I-134 Form
              (US sponsor).
            </li>
            <li>Resume or CV (If Required).</li>
            <li>
              Other supporting documents (if available, e.g extracurricular
              activities)
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            List of Documents Required for F1 Student VISA Application:
          </h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>A valid Passport.</li>
            <li>DS-160 Confirmation Pages (barcodes must be readable)</li>
            <li>
              One photograph for each application (2" * 2" - 600px * 600px).
            </li>
            <li>SEVIS Fee Receipt.</li>
            <li>I-20 – Original.</li>
            <li>
              All Original educational Certificates & Marksheets/Transcripts.
            </li>
            <li>TOEFL / IELTS certificate.</li>
            <li>GRE / GMAT / SAT / ACT certificate (if required).</li>
            <li>Job Experience Letter (If any).</li>
            <li>
              Three to twelve months of bank statements for student visa
              applicants (NEC recommends to submit min. 6 months Bank
              Statement).
            </li>
            <li>Affidavit of Financial Support.</li>
            <li>Source of Income (Trade License, Tin Certificate, etc).</li>
            <li>Any other supporting Documents.</li>
          </ul>
        </div>

        <div className="text-sm text-gray-700">
          <p>Note:</p>
          <ul className="list-disc list-inside">
            <li>Visa Processing Fee Non-refundable.</li>
            <li>Visa Fee 20350/- can be changed without prior notice.</li>
            <li>Visa-related issuance rights reserved by the Embassy.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default USAVisaRequirements;
