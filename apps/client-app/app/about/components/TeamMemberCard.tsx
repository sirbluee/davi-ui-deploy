import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

// Define an interface for social links
interface SocialLinks {
  facebook: string;
  linkedin: string;
  github: string;
}

// Update the TeamMember interface to support both string and StaticImageData for the image
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string | StaticImageData;
  socialLinks: SocialLinks;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="relative p-2 sm:p-6 bg-gray-100 rounded-lg shadow-md w-40 sm:w-56 h-52 sm:h-64 mx-auto overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group">
      {/* Background Container */}
      <div className="absolute inset-0 bottom-0 bg-gray-200 h-[80%] rounded-b-full opacity-50 z-0"></div>
      <div className="relative pt-2 z-10 flex flex-col items-center space-y-4 sm:space-y-5">
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-110 sm:hover:scale-125 group-hover:border-blue-500">
          <Image
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name and Role */}
        <div className="text-center">
          <h2 className="text-sm sm:text-lg font-semibold text-gray-800">
            {member.name}
          </h2>
          <p className="text-xs sm:text-sm text-">{member.role}</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-3 mt-3">
          <a
            href={member.socialLinks.facebook}
            className="text-blue-600 hover:text-blue-800 transition-colors hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s Facebook`}
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href={member.socialLinks.linkedin}
            className="text-blue-600 hover:text-blue-800 transition-colors hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href={member.socialLinks.github}
            className="text-gray-600 hover:text-gray-800 transition-colors hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s GitHub`}
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
