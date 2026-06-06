import React from "react";
import Button from "../Buttons/button";

const SectionHeader = ({ title, subtitle, buttonLabel, onButtonClick }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="space-y-3">
          <h2 className="text-2xl w-fit font-bold text-black relative">
            {title}
            <span className="w-2 h-2 rounded-full bg-[#99B81B] inline-block absolute -right-4 top-1" />
          </h2>
          {subtitle && <p className="text-base text-black">{subtitle}</p>}
        </div>
        {buttonLabel && (
          <Button
            onClick={onButtonClick}
            className="bg-[#7ab317] text-white rounded-full px-5 py-2 text-sm font-semibold whitespace-nowrap my-5"
          >
            {buttonLabel}
          </Button>
        )}
      </div>
      {/* {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>} */}
    </div>
  );
};

export default SectionHeader;
