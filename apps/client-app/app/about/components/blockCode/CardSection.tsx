"use client";

import React, { useState, useEffect, useCallback } from "react";
import { mockData } from "@/app/about/mockData";
import BrainStormCard from "@/app/about/components/brainStomCard";
import { motion } from "framer-motion";

export const CardSection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to detect scroll direction
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]); // Dependency array includes `lastScrollY`

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Now using `handleScroll` as a dependency

  return (
    <div className="md:absolute md:top-[45%] md:transform md:-translate-y-1/2 w-full justify-center z-10 sm:px-5 py-3 px-9 md:px-[15%] lg:px-2 xl:px-36">
      <div className="flex flex-wrap justify-center gap-y-4 sm:gap-4 md:gap-6">
        {mockData.map((item, index) => (
          <motion.div
            key={index}
            className="sm:w-1/2 md:w-1/3 lg:w-1/4 transform transition-transform duration-300 hover:scale-105"
            initial={{
              opacity: 0,
              x: scrollDirection === "down" ? 150 : -150,
              scale: 0.9, // Start slightly smaller
              rotate: scrollDirection === "down" ? 5 : -5, // Adds rotation
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1, // Scale to full size
              rotate: 0, // Reset rotation
            }}
            transition={{
              duration: 0.4, // Faster duration
              delay: index * 0.1, // Faster stagger
              ease: "easeOut", // Smooth easing
            }}
            viewport={{ once: false, amount: 0.3 }} // Replay animation on every scroll, visible when 30% in view
            exit={{
              opacity: 0,
              x: scrollDirection === "down" ? -150 : 150, // Exit in opposite direction
              scale: 0.9, // Shrink on exit
              rotate: scrollDirection === "down" ? -5 : 5, // Rotate on exit
            }}
          >
            <BrainStormCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
      {/* Bottom Line for Connecting the Cards */}
      <div className="hidden lg:flex relative mt-8 w-full justify-center items-end">
        {/* Horizontal Gradient Line Animation: Left to Right */}
        <motion.div
          className="absolute bottom-0 h-[8px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ width: 0 }}
          whileInView={{ width: "54%" }} // Animate when in view
          transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
          viewport={{ once: false }} // Replay animation on every scroll
        />

        {/* Vertical lines below each card */}
        <motion.div
          className="absolute left-[23%] w-[6px] bg-blue-500"
          initial={{ height: 0 }}
          whileInView={{ height: "32px" }} // Animate when in view
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={{ bottom: 0, originY: 1 }} // Start the animation from the bottom
          viewport={{ once: false }} // Replay animation on every scroll
        />

        <motion.div
          className="absolute left-1/2 w-[6px] bg-purple-500"
          initial={{ height: 0 }}
          whileInView={{ height: "32px" }} // Animate when in view
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={{ bottom: 0, originY: 1 }} // Start the animation from the bottom
          viewport={{ once: false }} // Replay animation on every scroll
        />

        <motion.div
          className="absolute right-[23%] w-[6px] bg-pink-500"
          initial={{ height: 0 }}
          whileInView={{ height: "32px" }} // Animate when in view
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={{ bottom: 0, originY: 1 }} // Start the animation from the bottom
          viewport={{ once: false }} // Replay animation on every scroll
        />
      </div>
    </div>
  );
};
