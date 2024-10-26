"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

import background from "@/public/images/about/icons/custom/background.png";
import imac_frame_icon from "@/public/images/about/icons/custom/imac-frame-1.png";
import others_icon from "@/public/images/about/icons/custom/others-icons.png";
import note_icon from "@/public/images/about/icons/custom/note-icons.png";
import data_extraction_icon from "@/public/images/about/icons/custom/data-extraction.png";
import CircularChart from "./CircularChart";

const DataExtractionIllustration: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="relative w-[550px] h-[320px]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
      }}
    >
      <motion.div
        className="absolute inset-0 m-5 w-[520px] h-[295px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={background}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 w-[520px] h-[310px] flex justify-center items-center duration-200 ease-in-out transform"
        whileHover={{ scale: 1.05 }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={imac_frame_icon}
          alt="imac_frame_icon"
          height={600}
          width={600}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 pl-28 pb-24 pt-10 flex justify-center items-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <Image src={others_icon} alt="others_icon" height={400} width={400} />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src={note_icon}
          alt="note_icon"
          height={140}
          width={140}
          className="pb-24"
        />
        <Image
          src={data_extraction_icon}
          alt="data_extraction_icon"
          height={190}
          width={190}
          className="duration-200 ease-in-out transform"
        />
        <div className="space-y-3">
          <motion.div
            className="relative bg-white h-[90px] w-[140px] border-[6px] rounded-lg border-gray-800 flex duration-200 ease-in-out transform"
            whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-start text-gray-500 space-y-[5px] pl-3 pt-1 pr-1">
              <div className="bg-gray-500 w-[20px] h-1"></div>
              {Array(7)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="bg-gray-300 w-full h-1"></div>
                ))}
              <div className="flex flex-row space-x-1 justify-start items-start mt-[2px]">
                {Array(23)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-[1px] h-[5px] bg-gray-700 rounded-md"
                    ></div>
                  ))}
                <div className="w-[1px] h-[5px] bg-gray-100 rounded-md"></div>
              </div>
            </div>
            <div className="flex items-end justify-between h-full w-full pl-[2px] pb-2 pr-2 relative">
              <div className="space-y-1">
                {Array(12)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="h-[1px] w-[7px] bg-gray-700 rounded-md"
                    ></div>
                  ))}
              </div>
              {/* Chart */}
              {[
                { height: 35, color: "gray" },
                { height: 30, color: "blue" },
                { height: 35, color: "gray" },
                { height: 15, color: "blue" },
                { height: 30, color: "gray" },
                { height: 35, color: "blue" },
                { height: 60, color: "gray" },
              ].map((bar, i) => (
                <motion.div
                  key={i}
                  className={`bg-${bar.color}-500 w-3`}
                  initial={{ height: 0 }}
                  animate={{
                    height: `${bar.height}px`,
                    transition: {
                      duration: 0.5,
                      delay: i * 0.05,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                ></motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="bg-white h-[90px] w-[140px] border-[6px] rounded-lg border-gray-800 duration-200 ease-in-out transform"
            whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex flex-row h-full w-full items-center justify-between p-2">
              <div className="duration-200 ease-in-out transform">
                <CircularChart
                  size={60}
                  strokeWidth={7}
                  segments={[
                    { value: 15, color: "#3b82f6" }, // blue for 25%
                    { value: 15, color: "#9ca3af" }, // light gray for 15%
                    { value: 60, color: "#2f3e46" }, // dark gray for 60%
                  ]}
                />
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex flex-row justify-end items-center space-x-1">
                  <div className="bg-gray-800 h-2 w-2"></div>
                  <div className="bg-gray-800 h-[2px] rounded-md w-7"></div>
                </div>
                <div className="flex flex-row justify-end items-center space-x-1">
                  <div className="bg-blue-600 h-2 w-2"></div>
                  <div className="bg-gray-800 h-[2px] rounded-md w-7"></div>
                </div>
                <div className="flex flex-row justify-end items-center space-x-1">
                  <div className="bg-gray-400 h-2 w-2"></div>
                  <div className="bg-gray-800 h-[2px] rounded-md w-7"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DataExtractionIllustration;
