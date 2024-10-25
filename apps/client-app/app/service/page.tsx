"use client"; // This line tells Next.js that this is a Client Component

import React, { useRef, useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import bgBanner from "/public/images/services/bg-banner.png";
import what from "/public/images/services/what.gif";
import d1 from "/public/images/services/d1.png";
import d2 from "/public/images/services/d2.png";
import BannerImage from "/public/images/services/servicesection.png";
import a1 from "/public/images/services/1.gif";
import a2 from "/public/images/services/2.gif";
import a3 from "/public/images/services/3.gif";
import a4 from "/public/images/services/4.gif";
import a5 from "/public/images/services/5.gif";
import etl from "/public/images/services/etl.gif";
import srcc from "/public/images/services/srcc.gif";
import clean from "/public/images/services/clean.gif";
import analysis from "/public/images/services/analysis.gif";
import visualize from "/public/images/services/visualize.gif";
import custom from "/public/images/services/custom.gif";

export default function Service() {
  const categories = [
    { id: "etl", label: "ETL" },
    { id: "data-source", label: "Data Source" },
    { id: "data-cleaning", label: "Data Cleaning" },
    { id: "data-analysis", label: "Data Analysis" },
    { id: "data-visualization", label: "Data Visualization" },
    { id: "custom-visualizations", label: "Custom Visualizations" },
  ];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollRight = () => {
    // Using type assertion to tell TypeScript that the current value is not null
    const scrollContainer = scrollContainerRef.current as HTMLDivElement;
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 150, // Scroll 150px to the right
        behavior: "smooth",
      });
    }
  };
  const [activeCategory, setActiveCategory] = useState("data-analysis");

  const steps = [
    {
      icon: (
        <Image
          src={a1} // Ensure you use the actual image path
          alt="Data Solutions Illustration"
          className="w-full h-auto"
        />
      ),
      title: "Import Data",
      description:
        "Bring in data from various sources like CSV, JSON, Excel, or web scraping.",
    },
    {
      icon: (
        <Image
          src={a2}
          alt="Data Solutions Illustration"
          className="w-full h-auto"
        />
      ),
      title: "Clean Data",
      description:
        "Clean and transform data effortlessly to ensure quality for analysis.",
    },
    {
      icon: (
        <Image
          src={a3}
          alt="Data Solutions Illustration"
          className="w-full h-auto"
        />
      ),
      title: "Analyze Data",
      description:
        "Apply analytics and machine learning to uncover insights and patterns.",
    },
    {
      icon: (
        <Image
          src={a4}
          alt="Data Solutions Illustration"
          className="w-full h-auto"
        />
      ),
      title: "Visualize Data",
      description:
        "Create interactive charts and dashboards for clear data visualization.",
    },
    {
      icon: (
        <Image
          src={a5}
          alt="Data Solutions Illustration"
          className="w-full h-auto"
        />
      ),
      title: "Results",
      description:
        "Achieve actionable insights quickly you want and share your findings.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white text-left h-auto md:h-[600px] w-full"
        style={{
          backgroundImage: `url(${bgBanner.src})`, // Background image with dynamic src
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg leading-relaxed w-full sm:pr-10 sm:w-full">
              Explore our comprehensive data services designed to help you
              analyze, visualize, and optimize your data.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              width={500}
              height={500}
              alt="Our Services"
              unoptimized={true}
              src={BannerImage}
              className="w-full max-w-[570px] h-auto"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 flex flex-col md:flex-row items-center bg-white ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 md:px-0">
            Getting Started with <span className="text-blue-600">DAVI</span>
          </h2>

          {/* Desktop Step Progress Bar */}
          <div className="hidden md:flex justify-center my-8 mx-[200pxx]">
            <div className="flex items-center space-x-6">
              {steps.map((_, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-semibold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-[200px] h-1 bg-blue-500"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Cards on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center px-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-4"
              >
                {step.icon}
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation Section */}
      <section
        className="w-full h-[600px] bg-cover bg-blue-700 bg-center relative"
        style={{ backgroundImage: `url('/images/services/data.gif')` }} // Correct background path
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="flex flex-col md:flex-row items-center text-center text-white px-4 max-w-3xl">
            {/* Left Image */}
            <Image
              src={d1} // Ensure you use the actual image path
              alt="Data Solutions Illustration"
              width={60}
              height={60}
              className="h-auto mb-4 md:mb-0"
            />

            {/* Text for Desktop and Mobile */}
            <p className="inline-block text-lg md:text-2xl font-semibold px-4">
              <span className="block md:hidden">
                Unlock powerful insights with DAVI's data solutions, designed
                for mobile!
              </span>
              <span className="hidden md:block">
                At DAVI, we unlock unique patterns in your data, enabling
                precise, data-driven business decisions.
              </span>
            </p>

            {/* Right Image */}
            <Image
              src={d2} // Ensure you use the actual image path
              alt="Data Solutions Illustration"
              width={60}
              height={60}
              className="h-auto mb-4 md:mb-0"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={what} // Ensure you use the actual image path
            alt="Data Solutions Illustration"
            width={508}
            height={400}
            className="h-auto"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why <span className="text-blue-600">DAVI</span>'s Data Solutions
            Stand Out
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            As a fully tailored, scalable, and high-performance ETL service
            provider, we serve the unique needs of your business. With a focus
            on delivering quality ETL services and actionable insights, here's
            why DAVI is the best choice for your data transformation journey.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      <div className="relative w-full flex lg:px-[400px] ">
        {/* Navigation Bar */}
        <nav className="w-full flex mx-auto p-2 space-x-8 rounded-md justify-start lg:justify-center mt-14 overflow-hidden bg-white relative">
          <div
            className="flex w-full overflow-auto whitespace-nowrap scrollbar-hide"
            ref={scrollContainerRef} // Attach the ref here
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-8 py-2 rounded-md ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 hover:bg-blue-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          {/* Right arrow indicator with scroll functionality */}
          <div
            className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent flex items-center justify-center cursor-pointer"
            onClick={scrollRight}
          >
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </nav>

        {/* Add styles for hiding the scrollbar in the nav */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>

      {/* Content Area */}
      <div className="mt-8 w-full max-w-6xl mx-auto mb-16">
        {/* ETL Category */}
        {activeCategory === "etl" && (
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 px-6 text-left mb-8 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                ETL (Extract, Transform, Load)
              </h2>
              <p className="text-base sm:text-lg mb-4">
                DAVI ensures seamless data integration from diverse sources,
                automating complex workflows to make data processing faster and
                more reliable. We support:
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Multi-Source Data Collection
                    </h3>
                    <p className="text-sm text-gray-500">
                      Connect and extract data from multiple sources, such as
                      databases, APIs, web scraping, and flat files.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Data Transformation
                    </h3>
                    <p className="text-sm text-gray-500">
                      Standardize, enrich, and aggregate data for deeper
                      insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Automated Loading
                    </h3>
                    <p className="text-sm text-gray-500">
                      Efficiently load data into any destination, whether it’s a
                      cloud platform, data warehouse, or local storage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <Image
                src={etl}
                alt="ETL Process Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Data Source Integration */}
        {activeCategory === "data-source" && (
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="w-full md:w-1/2 px-6 text-left mb-8 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Data Source Integration (Upload & Scraping)
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Simplify data sourcing with DAVI’s integration capabilities. We
                handle everything from manually uploaded datasets to automated
                web scraping.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Upload Flexibility
                    </h3>
                    <p className="text-sm text-gray-500">
                      Whether you're working with CSVs, Excel files, or JSON
                      formats, DAVI supports all common file types.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Advanced Scraping
                    </h3>
                    <p className="text-sm text-gray-500">
                      Automatically extract data from web pages, APIs, or even
                      PDFs using our custom scraping algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12">
            <Image
                src={srcc}
                alt="ETL Process Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Data Cleaning */}
        {activeCategory === "data-cleaning" && (
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="w-full md:w-1/2 px-6 text-left mb-8 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Data Cleaning
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Clean, consistent data is the foundation of any meaningful
                analysis. DAVI uses intelligent algorithms to:
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Remove Duplicates and Redundancies
                    </h3>
                    <p className="text-sm text-gray-500">
                      Eliminate errors and ensure consistency across datasets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Fix Incomplete or Corrupt Data
                    </h3>
                    <p className="text-sm text-gray-500">
                      Fill in missing values, correct inconsistencies, and
                      resolve inaccuracies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Normalization & Standardization
                    </h3>
                    <p className="text-sm text-gray-500">
                      Ensure uniform formats across datasets for smooth
                      integration and reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12">
            <Image
                src={clean}
                alt="ETL Process Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Data Analysis */}
        {activeCategory === "data-analysis" && (
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="w-full md:w-1/2 px-6 text-left mb-8 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Data Analysis & Descriptive Statistics
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Unlock meaningful insights from your data with DAVI’s
                comprehensive data analysis services.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Statistical Summaries
                    </h3>
                    <p className="text-sm text-gray-500">
                      Gain a clear understanding of your data through metrics
                      like mean, median, and variance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Data Trends & Patterns
                    </h3>
                    <p className="text-sm text-gray-500">
                      Identify key trends and correlations to support
                      decision-making.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Predictive Analytics
                    </h3>
                    <p className="text-sm text-gray-500">
                      Use historical data to forecast trends and behaviors with
                      precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12">
            <Image
                src={analysis}
                alt="ETL Process Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Data Visualization */}
        {activeCategory === "custom-visualizations" && (
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="w-full md:w-1/2 px-6 text-left mb-8 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Data Visualization
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Visualize complex data in an intuitive way with DAVI’s
                visualization tools.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Charts & Graphs
                    </h3>
                    <p className="text-sm text-gray-500">
                      Create bar graphs, pie charts, scatter plots, and heat
                      maps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Storytelling with Data
                    </h3>
                    <p className="text-sm text-gray-500">
                      Our visualizations highlight key insights and trends.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Interactive Dashboards
                    </h3>
                    <p className="text-sm text-gray-500">
                      Create customized dashboards for real-time data analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12">
            <Image
                src={visualize}
                alt="ETL Process Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Data Visualization */}
        {activeCategory === "data-visualization" && (
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 px-6 text-left mb-8 md:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Custom Visualizations (Data Cart, Custom Graphs)
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Visualize complex data in an intuitive way with DAVI’s
                visualization tools.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Charts & Graphs
                    </h3>
                    <p className="text-sm text-gray-500">
                      DAVI’s custom visualization services ensure your data is
                      presented in the best possible format to meet your
                      specific business needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Tailored Reports
                    </h3>
                    <p className="text-sm text-gray-500">
                      We create reports with visuals that match your branding
                      and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h3 className="font-semibold text-blue-600">
                      Unique Visual Solutions
                    </h3>
                    <p className="text-sm text-gray-500">
                      Need something beyond standard graphs? We design and
                      implement bespoke visualization tools that communicate
                      complex data simply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12">
            <Image
                src={custom}
                alt="ETL Process Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
