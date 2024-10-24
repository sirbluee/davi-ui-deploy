import React from "react";
import { mockData } from "@/app/about/mockData";
import BrainStormCard from "@/app/about/components/brainStomCard";

export const CardSection = () => {
  return (
    <div className="absolute top-[45%] transform -translate-y-1/2 w-full justify-center z-10 sm:px-8 md:px-12 lg:px-24 xl:px-36">
      <div className="flex flex-wrap justify-center gap-y-4 sm:gap-4 md:gap-6">
        {mockData.map((item, index) => (
          <div
            key={index}
            className="sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform duration-300 hover:scale-105"
          >
            <BrainStormCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
