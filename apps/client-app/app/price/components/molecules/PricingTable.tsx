import React from "react";
import { FaCheck } from "react-icons/fa6";

const features = [
  "Sync Frequency",
  "Data Integration",
  "Data Cleaning Tools",
  "Custom Dashboards",
  "Support Options",
  "Data Export Formats",
  "Visualization Tools",
  // Add more features as needed
];

export const PricingTable = () => {
  return (
    <div className="max-w-5xl p-4 mx-auto overflow-hidde">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr] border-b border-gray-300">
        <div className="flex w-full justify-end p-6 text-center">
          <div className="bg-[#E6EDFF] w-[35%] p-2 rounded-md">
            <h3 className="text-[16px] text-blue-600">Free Trial 14 Day</h3>
            <p className="text-xl">0$</p>
          </div>
        </div>
        <div className="flex justify-center w-full p-6 text-center text-white border-l border-r border-t border-gray-300 rounded-t-lg">
          <div className="bg-[#443DFF] w-[80%] px-1 py-2 rounded-md">
            <h3 className="text-[16px]">Monthly Plan</h3>
            <p className="text-xl">10$/Month</p>
          </div>
        </div>

        <div className="p-6 text-center w-full">
          <div className="bg-[#E6EDFF] w-[80%] px-1 py-2 rounded-md">
            <h3 className="text-[16px] text-blue-600">Yearly Plan</h3>
            <p className="text-xl">100$/Year</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="divide-y divide-gray-300 border-b border-gray-300">
        {features.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr] divide-x divide-gray-300"
          >
            <div className="flex items-center justify-between p-4 pr-[20%]">
              <p className="text-gray-600">{feature}</p>
              {/* <AiOutlineClose className="text-blue-500 mt-2" /> */}
              <FaCheck className="text-blue-500 mt-2" />
            </div>
            <div className="flex p-4 justify-center">
              <FaCheck className="text-blue-500 mt-2" />
            </div>
            <div className="flex p-4 justify-center">
              <FaCheck className="text-blue-500 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
