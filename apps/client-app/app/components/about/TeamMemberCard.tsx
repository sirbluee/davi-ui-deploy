import Image, { StaticImageData } from "next/image";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

// Define an interface for social links
interface SocialLinks {
  facebook: string;
  linkedin: string;
  github: string;
}

// Define the TeamMember interface to match your data structure
interface TeamMember {
  id: number; // id is a number
  name: string;
  role: string;
  image: string | StaticImageData;
  socialLinks: SocialLinks;
}

interface TeamMemberCardProps {
  member: TeamMember; // Use the defined interface
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="relative p-6 bg-white rounded-xl shadow-lg w-full sm:w-72 h-80 mx-auto overflow-hidden transition-transform transform hover:scale-105">
      {/* Background Container */}
      <div className="absolute inset-0 bottom-0 bg-gray-400 h-[80%] rounded-b-[50%] opacity-50 z-0"></div>

      <div className="space-y-12">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform transform hover:scale-125">
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Role */}
          <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
            {member.name}
          </h2>
          <p className="text-gray-500 mb-4 text-center">{member.role}</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-6 relative z-10">
          <a
            href={member.socialLinks.facebook}
            className="text-blue-600 hover:text-blue-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={25} />
          </a>
          <a
            href={member.socialLinks.linkedin}
            className="text-blue-600 hover:text-blue-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={25} />
          </a>
          <a
            href={member.socialLinks.github}
            className="text-gray-600 hover:text-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};
