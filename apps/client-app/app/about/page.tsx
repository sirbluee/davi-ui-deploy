"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import about_image_1 from "@/public/images/about/about_image_1.png";
import about_image_3 from "@/public/images/about/about_image_3.png";

//background animation
import bg_animation from "@/public/images/about/background/processing-data.gif";

import { mockData, features_1, features_2 } from "./mockData";
import BrainStormCard from "@/app/about/components/brainStomCard";
import FeatureCard from "@/app/about/components/FeaturesListCard";
import { Button } from "@/app/about/components/atoms/Button";
import { HeroSection } from "./components/blockCode/HeroSection";
import { OurTeam } from "./components/blockCode/OurTeam";
import DashboardCard from "./components/DashboardCard";
import { BackgroundBeamsWithCollision } from "@/app/about/components/ui/background-animations";

export default function AboutPage() {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/service");
  };
  return (
    <div className="w-full">
      <div className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Card Section */}
        <div className="absolute top-[45%]  transform -translate-y-1/2 w-full justify-center gap-y-1 sm:gap-x-2 z-10">
          <div className="flex flex-wrap justify-center p-5 lg:p-10 gap-y-1 sm:gap-x-2">
            {mockData.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 transform transition-transform duration-300 hover:scale-105"
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

        {/* Block 1 */}
        <div
          className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10 p-4 lg:p-12 items-end justify-end lg:px-[15%] bg-cover bg-center min-h-screen"
          style={{
            backgroundImage: `url(${bg_animation.src})`,
          }}
        >
          <div className="flex-shrink-0 sm:w-1/2 sm:h-1/2 transform transition-transform duration-300 hover:scale-105">
            <Image
              src={about_image_1}
              alt="about_image_1"
              width={600}
              height={400}
              className="rounded-lg"
              unoptimized
            />
          </div>
          <div className="w-full lg:max-w-md mx-auto p-2 lg:p-4 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Solutions for Your Large Enterprise
            </h2>
            <p className="mb-6 text-lg font-light text-gray-300 text-center lg:text-left">
              {`Empower your business with DAVI's cutting-edge analytics platform,
      offering fast data processing and secure cloud solutions, tailored
      for scalability and performance.`}
            </p>
            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {features_1.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  alt={feature.alt}
                />
              ))}
            </div>
            <div className="flex justify-center lg:justify-start mt-4">
              <Button text="Learn More" onClick={handleLearnMoreClick} />
            </div>
          </div>
        </div>
      </div>
      {/* Block 2 */}
      <BackgroundBeamsWithCollision>
        <div className="bg-gray-100 py-10 p-4 lg:p-16 lg:px-[15%]">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
            <div className="p-5 w-full lg:w-1/2 xl:w-1/2 mx-auto lg:mx-0">
              <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
                Quick and Easy to Get Started
              </h2>
              <p className="text-gray-600 mb-4 text-center lg:text-left">
                Start using DAVI effortlessly with seamless setup and intuitive
                tools to optimize your data.
              </p>
              <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {features_2.map((feature) => (
                  <FeatureCard
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    alt={feature.alt}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:p-10 transform transition-transform duration-300 hover:scale-105">
              {/* <Image
              src={about_image_2}
              alt="about_image_2"
              width={600}
              height={500}
              className="rounded-lg"
            /> */}
              <DashboardCard />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
            <div className="flex-shrink-0 sm:w-1/2 sm:h-1/2 transform transition-transform duration-300 hover:scale-105">
              <Image
                src={about_image_3}
                alt="about_image_3"
                width={600}
                height={500}
                className="rounded-lg"
                unoptimized
              />
            </div>
            <div className="w-full lg:w-1/2 p-4 space-y-4 mt-8 lg:mt-0 lg:pl-[15%]">
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
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      {/* Block 3 */}

      {/* <div className="flex flex-wrap justify-center p-5 lg:p-20 gap-y-1 sm:gap-x-2">
        {mockData.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 transform transition-transform duration-300 hover:scale-105"
          >
            <BrainStormCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div> */}

      {/* Block 4 our Team */}
      <OurTeam />
    </div>
  );
}
