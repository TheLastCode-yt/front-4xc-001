'use client';
import { useState } from 'react';

const ExpandedBox = ({ title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-6 p-4 rounded-2xl border-custom__blue border relative">
      <div className="flex justify-between items-center">
        {/* texts */}
        <div className="w-[90%]">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div
            className={`mt-4 text-gray-700 transition-all duration-500 overflow-hidden 
              ${isExpanded ? 'max-h-[1000px]' : 'max-h-16'}`}
            style={{
              WebkitMaskImage: isExpanded
                ? 'none'
                : '-webkit-linear-gradient(top,#fff,hsla(0,0%,100%,.03))',
            }}
          >
            <p>{text}</p>
          </div>
        </div>
        {/* btn */}

        <div className="w-full h-full absolute flex items-end justify-end -left-[4%] bottom-[4%]">
          <button
            onClick={toggleExpand}
            className="text-2xl font-bold text-white focus:outline-none bg-custom__blue w-10 h-10 rounded-full transition-all duration-500"
          >
            {isExpanded ? '-' : '+'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedBox;
