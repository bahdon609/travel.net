import React from "react";
import { CheckCircle } from "lucide-react";

const Remarks = () => {
  const guidelines = [
    "Travelly acts as a consultant and does not guarantee that the visa will be granted.",
    "The visa application procedure will begin only when all the required documents have been received.",
    "The Embassy has the right to adjust processing times, criteria, and costs at any time.",
    "The Embassy retains the authority to demand additional documents in addition to the ones listed above.",
    "All documents in Bengali must be notarized and translated into English.",
    "When providing biometrics at the embassy / Application center, the fingers of the applicant must be free of 'MEHEDI or any other color.'",
    "At the interview, applicants must present all original documents to the embassy / application center.",
  ];

  return (
    <div className="">
     
      <ul className="text-start">
        {guidelines.map((item, index) => (
          <li key={index} className="flex items-start gap-2 border-b py-4 ">
            <CheckCircle className="text-clr_primary_text" size={22} />
            <span className="text-text_sm2 ">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Remarks;
