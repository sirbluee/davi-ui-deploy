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
    <div className="w-full flex flex-col items-center justify-between p-5 border rounded-2xl mb-5 transition-transform transform hover:scale-105 hover:bg-slate-100 duration-300 ease-in-out h-full">
      <div className="overflow-hidden mb-4 transition-all duration-300 ease-in-out">
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="object-contain transition-transform duration-300 ease-in-out border-2 border-transparent hover:border-blue-500 rounded-full"
        />
      </div>
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
