import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";

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
    <CardSpotlight className=" text-black hover:text-white">
      <div className="w-full flex flex-col space-y-2 items-center justify-start transition-transform transform hover:scale-105 duration-300 ease-in-out h-full">
        <div className="overflow-hidden transition-all duration-300 ease-in-out">
          <Image
            src={icon}
            alt={title}
            width={100}
            height={100}
            className="object-contain transition-transform duration-300 ease-in-out border-2 border-blue-200 hover:border-blue-500 rounded-full"
          />
        </div>
        <h1 className="text-xl font-bold transition-colors duration-300 ease-in-out hover:text-blue-600">
          {title}
        </h1>
        <p className="text-center text-gray-600 hover:text-white transition-colors duration-300 ease-in-out ">
          {description}
        </p>
      </div>
    </CardSpotlight>
  );
};

export default BrainStormCard;
