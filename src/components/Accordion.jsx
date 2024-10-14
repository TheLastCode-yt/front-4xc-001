import { useState } from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="border border-gray-300 rounded-lg bg-[#303135] w-full xl:col-span-2 col-span-6 h-fit min-h-[88px]"
    >
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
      >
        <span className="text-xl font-medium">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className={`p-4 ${isOpen ? 'block' : 'hidden'} `}>{answer}</div>
      </motion.div>
    </motion.div>
  );
};

export default Accordion;
