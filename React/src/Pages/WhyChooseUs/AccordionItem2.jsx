import { motion } from "framer-motion";
import { FaMinus } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

const AccordionItem2 = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300  ">
      <button
        className="w-full  px-4 py-3 font-bold flex  gap-2 items-center bg-clr_gray_500 "
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
        <div className="p-4 text-gray-500 bg-clr_gray_500">{content}</div>
      </motion.div>
    </div>
  );
};

export default AccordionItem2;
