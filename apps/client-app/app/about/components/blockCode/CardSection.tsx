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
    <div className="md:absolute md:top-[43%] md:transform md:-translate-y-1/2 w-full justify-center z-10 sm:px-5 py-3 px-9 md:px-[15%] lg:px-2 xl:px-36">
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
    </div>
  );
};
