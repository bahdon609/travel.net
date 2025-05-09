import { motion } from "framer-motion";
import { FaMinus } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

const Visa_FAQ = ({ title, content, isOpen, onClick }) => {
  return (
    <div className=" ">
      <button
        className="w-full  p-3 font-bold flex  gap-2 text-text_medium items-center bg-clr_tab rounded-t-md  "
        onClick={onClick}
      >
        {isOpen ? <FaMinus /> : <TiPlus />} {title}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-4 text-gray-700 text-text_sm2 bg-white">
          {content}
        </div>
      </motion.div>
    </div>
  );
};

export default Visa_FAQ;
