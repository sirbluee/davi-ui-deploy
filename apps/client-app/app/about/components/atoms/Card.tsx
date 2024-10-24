import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full h-[354px] bg-gradient-to-r from-green-500 to-blue-800 rounded-xl transition-all duration-200 hover:shadow-lg">
      <div className="w-full h-[354px] bg-gray-800 rounded-xl transition-transform duration-200 hover:scale-95 flex flex-col items-center p-6">
        <div className="overflow-hidden mb-4 transition-transform duration-300 ease-in-out">
          <Image
            src={icon}
            alt={title}
            width={100}
            height={100}
            className="object-contain transition-transform duration-300 ease-in-out border-2 border-transparent hover:border-blue-500 rounded-full"
          />
        </div>
        <h1 className="text-xl font-bold mb-2 text-white transition-colors duration-300 ease-in-out hover:text-blue-600">
          {title}
        </h1>
        <p className="text-center text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
