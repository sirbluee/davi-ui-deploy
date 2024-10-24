"use client";
import Image from "next/image";
import React from "react";
import ScanImg from "@/public/images/home/span.png";
import Marquee, { mockMessages } from "./marquee";

export default function IntergrationSection() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:-space-x-16 space-y-8 md:space-y-0">
          {/* Left Side - Image List */}
          <div className="flex w-full h-full md:w-[40%] justify-center gap-8">
            <div className="">
              <Marquee
                items={mockMessages}
                direction="vertical"
                speed={0.2}
                reverse={false}
              />
            </div>
            <div className="">
              <Marquee
                items={mockMessages}
                direction="vertical"
                speed={0.2}
                reverse={true}
              />
            </div>
          </div>

        {/* Right Side - Text and Curved Image for Desktop */}
        <div className="hidden md:flex w-full md:w-[60%] p-4 md:p-8 flex-col items-start relative">
          <h2 className="text-6xl md:text-8xl font-medium mb-8 md:mb-16">
            Integrate
            <br />
            <span className="block md:inline">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            your data
          </h2>

          <div className="relative w-full flex justify-center mb-4 md:absolute md:mt-28 md:right-1/3">
            <Image
              src={ScanImg}
              alt="Dashboard example"
              objectFit="cover"
              width={200}
              height={200}
            />
          </div>
          <p className="text-black text-left text-base md:text-xl w-full md:w-[70%]">
            Seamlessly integrate, clean, and visualize data with automated ETL,
            turning raw sources like CSV and MySQL into meaningful insights for
            smarter decisions.
          </p>
        </div>

        {/* Right Side - Text and Curved Image for Phone */}
        <div className="flex md:hidden w-full p-4 flex-col items-center relative">
          <h2 className="text-6xl font-medium mb-8 leading-tight text-center">
            Integrate
            <br />
            your data
          </h2>

          <div className="relative w-full flex justify-center mb-4">
            <Image
              src={ScanImg}
              alt="Dashboard example"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <p className="text-black text-center text-base w-full">
            Seamlessly integrate, clean, and visualize data with automated ETL,
            turning raw sources like CSV and MySQL into meaningful insights for
            smarter decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
