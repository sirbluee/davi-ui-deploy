"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animations

import { features_2 } from "@/app/about/mockData";
import FeatureCard from "@/app/about/components/FeaturesListCard";
import { Button } from "@/app/about/components/atoms/Button";
import DashboardCard from "@/app/about/components/DashboardCard";
import about_image_3 from "@/public/images/about/about_image_3.png";

export const Quick = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/service");
  };

  return (
    <motion.div
      className="bg-gray-100 py-10 p-4 lg:p-16 lg:px-24 xl:px-[15%]"
      initial={{ opacity: 0, scale: 0.9 }} // Start smaller and with 0 opacity
      whileInView={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      viewport={{ once: false, amount: 0.3 }} // Replay on scroll back
    >
      {/* First Row: Text and DashboardCard */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
        <motion.div
          className="p-5 w-full lg:w-1/2 xl:w-1/2 mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -100 }} // Slide in from the left
          whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and position
          transition={{ duration: 0.5, ease: "easeOut" }} // Timing settings for the text section
          viewport={{ once: false, amount: 0.3 }} // Replay on scroll back
        >
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Quick and Easy to Get Started
          </h2>
          <p className="text-gray-600 mb-4 text-center lg:text-left">
            Start using DAVI effortlessly with seamless setup and intuitive
            tools to optimize your data.
          </p>
          <motion.div
            className="space-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            initial={{ opacity: 0, y: 50 }} // Slide up from below
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Staggered effect for features
            viewport={{ once: false, amount: 0.3 }} // Replay when scrolling back
          >
            {features_2.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                alt={feature.alt}
                titleColor="text-black" // Custom title color
                descriptionColor="text-gray-500"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* DashboardCard Animation */}
        <motion.div
          className="mt-8 lg:mt-0 lg:p-10 transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, x: 100 }} // Slide in from the right
          whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and position
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation for DashboardCard
          viewport={{ once: false, amount: 0.3 }} // Replay on scroll back
        >
          <DashboardCard />
        </motion.div>
      </div>

      {/* Second Row: Image and "How We Work" Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
        <motion.div
          className="flex-shrink-0 sm:w-1/2 sm:h-1/2 transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, x: -100 }} // Slide in from the left
          whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and position
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation for the image
          viewport={{ once: false, amount: 0.3 }} // Replay on scroll back
        >
          <Image
            src={about_image_3}
            alt="about_image_3"
            width={600}
            height={500}
            className="rounded-lg"
            unoptimized
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 p-4 space-y-4 mt-8 lg:mt-0 lg:pl-[15%]"
          initial={{ opacity: 0, y: 50 }} // Slide up from below
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Smooth transition for the text
          viewport={{ once: false, amount: 0.3 }} // Replay on scroll back
        >
          <h1 className="text-2xl font-bold mb-4 text-center lg:text-left transition-colors duration-300 hover:text-blue-600">
            How We Work
          </h1>
          <p className="text-lg font-light text-gray-600 text-center lg:w-full lg:text-left">
            At DAVI, we simplify the complexities of data analysis. From
            seamless data integration to real-time insights, our platform is
            designed to streamline your workflows and deliver actionable
            results.
          </p>
          <div className="flex justify-center lg:justify-start mt-2">
            <Button text="Learn More" onClick={handleLearnMoreClick} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
