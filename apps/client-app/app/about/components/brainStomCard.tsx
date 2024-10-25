import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";

interface BrainStormCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
  descriptionColor?: string; // Optional prop for text color
}

const BrainStormCard: React.FC<BrainStormCardProps> = ({
  icon,
  title,
  description,
  descriptionColor = "text-gray-300", // Default color if not provided
}) => {
  return (
    <CardSpotlight className="text-black hover:text-white">
      <div className="w-full lg:h-[280px] flex flex-col space-y-3 items-center justify-start transition-transform transform hover:scale-105 duration-300 ease-in-out h-full">
        <div className="overflow-hidden text-black transition-all duration-300 ease-in-out">
          <Image
            src={icon}
            alt={`Icon for ${title}`}
            width={100}
            height={100}
            priority={true}
            className="object-cover transition-transform duration-300 ease-in-out border-2 border-blue-500 hover:border-slate-100 rounded-full"
          />
        </div>
        <h1 className="text-xl font-bold text-white bg-clip-text hover:text-slate-100">
          {title}
        </h1>
        <p
          className={`text-center transition-colors duration-300 ease-in-out ${descriptionColor} hover:text-white`}
        >
          {description}
        </p>
      </div>
    </CardSpotlight>
  );
};

export default BrainStormCard;
