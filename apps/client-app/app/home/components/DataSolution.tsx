"use client";
import Image from "next/image";
import DataSulutionImg from "@/public/images/home/data-solution.png";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function DataSolution() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  interface DataSolutionProps {
    title?: string;
    subtitle?: string;
    description?: string;
  }
  const Data: DataSolutionProps[] = [
    {
      title: "Data Engineer",
      subtitle: "Streamline data integration and ensure quality data flow.",
      description:
        "Davi automates the integration of data from multiple sources, standardizes data formats, and monitors data quality, allowing data engineers to focus on building robust data pipelines without manual intervention.",
    },
    {
      title: "Data Analyst",
      subtitle: "Clean and prepare datasets for actionable insights.",
      description:
        "With Davi, data analysts can use intuitive tools to cleanse, transform, and enrich data, making it ready for analysis in minutes. The platform's smart suggestions simplify complex data preparation tasks, enabling quicker delivery of insights.",
    },
    {
      title: "Business Leader",
      subtitle: "Gain real-time visibility with automated dashboards.",
      description:
        "Davi empowers business leaders by providing real-time dashboards that aggregate key performance indicators across departments. The platform's customizable views ensure that leaders have the information they need at their fingertips to make data-driven decisions.",
    },
    {
      title: "IT Administrator",
      subtitle: "Manage data governance and ensure security compliance.",
      description:
        "Davi offers comprehensive data governance features that help IT administrators maintain data integrity, comply with regulatory requirements, and secure sensitive information through user access controls, data masking, and audit trails.",
    },
    {
      title: "Data Scientist",
      subtitle: "Transform raw data into predictive models efficiently.",
      description:
        "For data scientists, Davi accelerates the process of transforming raw data into machine learning-ready datasets. The platform supports advanced transformations, statistical analysis, and integration with popular modeling tools, allowing for a seamless flow from data preparation to predictive insights.",
    },
  ];
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-8 lg:px-36 text-center">
          <h2 className="text-xl font-bold mb-8">
            Data Solutions for Every Role in Your Organization
          </h2>
          <div className="flex justify-between">
            {/* Left section - Content */}
            <div className="flex flex-col w-1/2 overflow-y-auto h-96 pr-4 scrollbar-left">
              {Data.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-start p-4 rounded transition-all duration-300 ease-in-out"
                >
                  <h1 className="text-[25px] mb-2">{item.title}</h1>
                  <h2 className="mb-1 font-semibold">{item.subtitle}</h2>

                  {/* Smooth transition for expanding/collapsing description */}
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      expandedIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-700 text-left mb-2">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex justify-center items-center text-[#443DFF] hover:underline"
                  >
                    {expandedIndex === index ? (
                      <>
                        View Less <IoIosArrowUp className="w-6 h-6" />
                      </>
                    ) : (
                      <>
                        View More <IoIosArrowDown className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Right section - Image */}
            <div className="bg-blue-100">
              <Image
                src={DataSulutionImg}
                alt="Data Solution"
                width={530}
                height={397}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
