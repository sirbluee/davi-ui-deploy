import Image from "next/image";
import React from "react";

interface Feature {
  _id: number;
  title: string;
  description: string;
  backgroundImage: string;
  icon: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      _id: 1,
      title: "Data Integration",
      description:
        "Seamlessly combine data from various sources including CSV, Excel, SQL databases, and APIs. DAVI makes data integration simple and efficient.",
      backgroundImage: "/images/home/cardfeathure1.png",
      icon: "/images/home/IconCard1.png",
    },
    {
      _id: 2,
      title: "Real-Time Analytics",
      description:
        "Analyze your data in real-time to get up-to-date insights. DAVI’s powerful engine handles large datasets without compromising speed.",
      backgroundImage: "/images/home/cardfeathure2.png",
      icon: "/images/home/IconCard2.png",
    },
    {
      _id: 3,
      title: "Visualize Dashboards",
      description:
        "Create personalized dashboards with drag-and-drop functionality. Tailor each dashboard to visualize the data that matters most to your business.",
      backgroundImage: "/images/home/cardfeathure3.png",
      icon: "/images/home/IconCard3.png",
    },
    {
      _id: 4,
      title: "Visualizations",
      description:
        "Seamlessly combine data from various sources including CSV, Excel, SQL databases, and APIs. DAVI makes data integration simple and efficient.",
      backgroundImage: "/images/home/cardfeathure4.png",
      icon: "/images/home/IconCard4.png",
    },
  ];

  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-8 lg:px-36 text-center">
          <h2 className="text-xl font-bold mb-8">Our Features</h2>
          <p className="text-gray-600 text-sm font-medium mb-12">
            Explore how our platform transforms data into actionable
            <br />
            intelligence to enhance your decision-making.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature._id}
                className="relative p-6 rounded-lg border-[1px] text-left duration-200 hover:border-[0px] hover:scale-105 hover:shadow-md"
                style={{
                  backgroundImage: `url(${feature.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* Icon Positioned at the Top Left */}
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Image
                      src={feature.icon}
                      alt={`${feature.title} Icon`}
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="mt-16">
                  <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
