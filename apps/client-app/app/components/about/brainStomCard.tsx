import Image, { StaticImageData } from "next/image";
import React from "react";

interface BrainStormCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
}

const BrainStormCard: React.FC<BrainStormCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="w-1/4 flex flex-col items-center justify-center p-5 border border-gray-300 rounded-2xl mb-5 transition-transform transform hover:scale-105 hover:bg-slate-100 hover:shadow-lg duration-300 ease-in-out">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        className="mb-4 object-contain transition-transform transform hover:scale-110 duration-300 ease-in-out"
      />
      <h1 className="text-xl font-bold mb-2 transition-colors duration-300 ease-in-out hover:text-blue-600">
        {title}
      </h1>
      <p className="text-center text-gray-600 transition-colors duration-300 ease-in-out hover:text-gray-800">
        {description}
      </p>
    </div>
  );
};

export default BrainStormCard;
