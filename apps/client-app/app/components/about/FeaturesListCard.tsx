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
    <div className="flex items-center p-4 transition-transform transform hover:scale-105">
      {/* Icon Section */}
      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-full border-2 border-gray-300 transition-all duration-300 hover:border-blue-500">
        <Image
          src={icon}
          alt={alt}
          height={100}
          width={100}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="ml-6">
        <h3 className="font-semibold text-lg transition-colors duration-300 hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-500 mb-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
