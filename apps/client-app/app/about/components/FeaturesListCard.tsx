import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string | StaticImageData;
  alt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  alt,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center transition-transform transform hover:scale-105">
      {/* Icon Section */}
      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-full border-2 border-gray-300 transition-all duration-300 hover:border-blue-500">
        <Image
          src={icon}
          alt={alt}
          height={100}
          width={100}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-125"
          quality={100}
        />
      </div>

      {/* Content Section */}
      <div className="text-center sm:text-left sm:ml-6 mt-4 sm:mt-0">
        <h3 className="font-semibold text-lg transition-colors duration-300 hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-400 mb-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
