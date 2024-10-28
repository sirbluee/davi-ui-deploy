import React from "react";

import bgBanner from "@/public/images/about/background/bg-Banner.png";
import DataExtractionIllustration from "../atoms/DataExtractionIllustration";

export const HeroSection = () => {
  return (
    <section
      className="relative text-white text-left px-9 pt-10 h-auto md:h-[600px] w-full"
      style={{
        backgroundImage: `url(${bgBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto py-20 sm:px-8 md:px-12 lg:px-24 xl:px-36 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl sm:text-3xl lg:text-4xl font-bold mb-4">
            About DAVI
          </h2>
          <p className="text-base sm:text-lg leading-relaxed w-full sm:pr-10 sm:w-full">
            DAVI is your all-in-one solution for turning data into actionable
            insights. Our powerful platform integrates, analyzes, and visualizes
            your data, giving you real-time insights and custom dashboards. With
            AI-driven analytics and user-friendly design, DAVI makes data-driven
            decisions easy for businesses of all sizes.
          </p>
        </div>

        {/* Image */}
        <div className="px-16 md:px-0 md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <DataExtractionIllustration />
        </div>
      </div>
    </section>
  );
};
