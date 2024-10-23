import React from "react";
import Image from "next/image";
import { TeamMemberCard } from "../TeamMemberCard";
import { teamMembers } from "../../mockData";
import bgTeam from "@/public/images/about/background/bgteam.png";
export const OurTeam = () => {
  return (
    <div className="relative w-full py-10 lg:py-20">
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.slice(0, 4).map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Second Row with 3 items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {teamMembers.slice(4, 7).map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
