import Image from "next/image";
import React from "react";

// Interface for the service data
interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

// Mock data for services
const services: Service[] = [
  {
    id: 1,
    title: "Upload Files",
    description:
      "Easily import data from various file formats to get started. Our platform supports quick uploads and ensures your data is ready for processing and analysis.",
    icon: "/images/home/IconService1.png",
  },
  {
    id: 2,
    title: "Scraping Data",
    description:
      "Automate data collection from web sources to enrich your datasets. Gather valuable insights from websites and online data for more effective analysis.",
    icon: "/images/home/IconService2.png",
  },
  {
    id: 3,
    title: "Data Cleaning",
    description:
      "Ensure your data is accurate and ready for analysis with our smart cleaning tools. Detect and fix errors, fill in missing values, and standardize formats to improve data quality.",
    icon: "/images/home/IconService3.png",
  },
  {
    id: 4,
    title: "Data Analysis",
    description:
      "Gain valuable insights from your data. DAVI’s advanced analytics tools allow you to process and analyze large datasets efficiently, helping you make informed business decisions.",
    icon: "/images/home/IconService4.png",
  },
  {
    id: 5,
    title: "Ai generation",
    description:
      "Leverage the power of machine learning to detect patterns and make predictions. Automate data processing and uncover trends that drive business growth.",
    icon: "/images/home/IconService5.png",
  },
  {
    id: 6,
    title: "Data Visualizations",
    description:
      "Transform complex data into clear, actionable visuals. Create charts, graphs, and interactive dashboards to communicate your data effectively.",
    icon: "/images/home/IconService6.png",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-36 text-center mb-10 relative">
        <Image
          src="/images/home/Pattern.png"
          alt="pattern"
          width={80}
          height={80}
          className="absolute top-1 left-4 hidden md:block"
        />
        <h2 className="text-xl font-bold mb-8">Our Services</h2>
        <p className="text-[#9593A1] text-sm font-medium mb-12">
          Explore the comprehensive solutions DAVI offers to help you<br/> analyze,
          visualize, and optimize your data.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 rounded-2xl shadow-sm border-[1.5px] border-[#E6EDFF] text-left"
            >
              {service.icon && (
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={40}
                  height={40}
                  className="mb-3"
                />
              )}
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-black text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <Image
          src="/images/home/Pattern.png"
          alt="pattern"
          width={80}
          height={80}
          className="absolute bottom-3 right-4 hidden md:block"
        />
      </div>
    </section>
  );
}
