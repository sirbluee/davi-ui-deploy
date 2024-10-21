"use client";

import React from "react";
import Image from "next/image";
import about_image_1 from "@/public/images/about/about_image_1.png";
import about_image_2 from "@/public/images/about/about_image_2.png";
import about_image_3 from "@/public/images/about/about_image_3.png";
import { mockData, features_1, features_2, teamMembers } from "./mockData";
import BrainStormCard from "@/app/components/about/brainStomCard";
import FeatureCard from "@/app/components/about/FeaturesListCard";
import bgTeam from "@/public/images/about/background/bgteam.png";
import { TeamMemberCard } from "@/app/components/about/TeamMemberCard";
import { Button } from "@/app/components/about/atoms/Button";
import TypingEffect from "../components/about/TypingEffect";

export default function AboutPage() {
  return (
    <div>
      {/* block 1 */}
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-36 p-12 items-center justify-center">
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
          <Image
            src={about_image_1}
            alt="about_image_1"
            width={600}
            height={400}
          />
        </div>
        <div className="max-w-md mx-auto p-8">
          {/* Title Section */}
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Solutions for Your Large Enterprise
          </h2>
          <p className="mb-8 text-xl font-light text-gray-600 text-center lg:text-left">
            Empower your business with DAVI’s cutting-edge analytics platform,
            offering fast data processing and secure cloud solutions, tailored
            for scalability and performance.
          </p>

          {/* Feature List */}
          <div className="space-y-1">
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

          {/* Learn More Button */}
          <Button
            text="Learn More"
            // onClick={() => console.log("Learn More clicked")}
          />
        </div>
      </div>
      {/* block 2 */}
      <div className="bg-gray-100 py-10 px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
          {/* Content Section */}
          <div className="p-5 w-full lg:w-1/3 mx-auto">
            {/* Title Section */}
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Quick and Easy to Get Started
            </h2>
            <p className="text-gray-600 mb-4 text-center lg:text-left">
              Start using DAVI effortlessly with seamless setup and intuitive
              tools to optimize your data.
            </p>
            {/* Dynamically Rendered Feature Cards */}
            <div className="space-y-1">
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

          {/* Image Section */}
          <div className="mt-10 lg:mt-0 lg:p-10 transform transition-transform duration-300 hover:scale-105">
            <Image
              src={about_image_2}
              alt="about_image_2"
              width={600}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
          <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
            <Image
              src={about_image_3}
              alt="about_image_3"
              width={600}
              height={500}
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 space-y-4">
            <h1 className="text-2xl font-bold mb-4 text-center lg:text-left transition-colors duration-300 hover:text-blue-600">
              How We Work
            </h1>
            <TypingEffect
              speed={10}
              text="At DAVI, we simplify the complexities of data analysis. From seamless data integration to real-time insights, our platform is designed to streamline your workflows and deliver actionable results."
            />
            <div className="flex justify-center lg:justify-start">
              <Button text="Learn More" />
            </div>
          </div>
        </div>
      </div>
      {/* block 3 */}
      <div className="flex flex-wrap justify-center space-x-5 p-20">
        {mockData.map((item, index) => (
          <BrainStormCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      {/* block 4 */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src={bgTeam}
          alt="bgTeam"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="p-10 space-y-6">
            <h1 className="text-4xl font-bold">Our Team</h1>
            <p className="text-lg">
              Our dedicated team of experts is committed to delivering
              innovative data solutions that drive business success.
            </p>
          </div>
          <div className="flex flex-col items-center">
            {/* First Row - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {teamMembers.slice(0, 4).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>

            {/* Second Row - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
              {teamMembers.slice(4).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
