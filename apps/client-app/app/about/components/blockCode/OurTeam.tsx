"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TeamMemberCard } from "@/app/about/components/TeamMemberCard";
import { teamMembers } from "@/app/about/mockData";
import bgTeam from "@/public/images/about/background/bgteam.png";

export const OurTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Ensure animation triggers every time in view

  // Animation variants based on ID
  const itemVariants = {
    visible: (id: number) => {
      // Determine animation direction based on ID
      const delay = (id - 1) * 6; // Delay based on ID (index), where ID=1 has no delay, ID=2 has a 6s delay, etc.

      return {
        opacity: 1,
        x: 0, // Set x to 0 to animate to the center position
        y: 0, // Set y to 0 to animate to the center position
        transition: {
          duration: 0.8,
          delay: delay / 1000, // Convert delay to seconds
        },
      };
    },
    hidden: (id: number) => {
      let x = 0;
      let y = 0;

      if ([1, 2, 5].includes(id)) {
        x = -50; // Animate in from the left
      } else if ([3, 4, 7].includes(id)) {
        x = 50; // Animate in from the right
      } else if (id === 6) {
        y = 50; // Animate in from the bottom
      }

      return {
        opacity: 0,
        x,
        y,
      };
    },
  };

  return (
    <div ref={ref} className="relative w-full py-10 lg:py-20">
      {/* Background Image */}
      <Image
        src={bgTeam}
        alt="bgTeam"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-10">
        <div className="pb-6 sm:pb-10 space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Our Team
          </h1>
          <p className="text-sm sm:text-lg text-gray-200">
            Our dedicated team of experts is committed to delivering innovative
            data solutions that drive business success.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-col items-center space-y-6 px-4 sm:px-0">
          {/* First Row with 4 items */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {teamMembers.slice(0, 4).map((member) => (
              <motion.div
                key={member.id}
                custom={member.id} // Pass the ID to the variants
                variants={itemVariants}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row with 3 items */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {teamMembers.slice(4, 7).map((member) => (
              <motion.div
                key={member.id}
                custom={member.id} // Pass the ID to the variants
                variants={itemVariants}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
