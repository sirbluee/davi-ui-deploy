import React from "react";
import NavbarComponent from "../components/NavbarComponent";

const services = [
  {
    title: "Upload Files",
    description:
      "Effortlessly bring your data into the platform with support for multiple file formats. Our service ensures a seamless and efficient upload process, getting your data ready for immediate processing and analysis.",
    points: [
      "Supports Multiple File Formats: Upload data in various formats, including CSV, Excel, JSON, XML, and more.",
      "Drag-and-Drop Interface: Quickly upload files with our intuitive drag-and-drop functionality.",
      "Bulk Upload Capability: Upload multiple files at once to reduce manual effort.",
      "Data Preview and Mapping: Preview data and map columns to ensure accuracy.",
    ],
    image: "./images/services/uploadimage.png",
  },
  {
    title: "Scraping Data",
    description:
      "Automate the process of gathering data from various web sources to keep your datasets up-to-date. Our platform supports scraping a variety of formats, ensuring data is extracted in a structured format for further analysis.",
    points: [
      "Scrape data from websites, APIs, and web services.",
      "Extract content from HTML, XML, JSON, and other formats.",
      "Automate periodic data collection for trend analysis.",
      "Easily clean and format scraped data to fit various patterns.",
    ],
    image: "./images/services/scraping.png",
  },
  // {
  //   title: "ETL (Extract, Transform, Load)",
  //   description:
  //     "Streamline the process of data integration with our ETL capabilities. Our platform allows you to efficiently move data between systems, transform data formats, and ensure consistency for better data quality.",
  //   points: [
  //     "Extract data from multiple sources.",
  //     "Transform data into consistent formats.",
  //     "Load data into your desired destination for further analysis.",
  //     "Schedule ETL processes for automation.",
  //   ],
  //   image: "./images/services/scraping.png",
  // },
  {
    title: "Data Cleaning",
    description:
      "Enhance your data quality with comprehensive cleaning tools that detect and correct errors. Our platform ensures your datasets are consistent and ready for analysis by removing inaccuracies, duplicates, and irrelevant data.",
    points: [
      "Remove duplicates and errors from datasets.",
      "Standardize formats, data types, and naming conventions.",
      "Handle missing values using imputation techniques.",
      "Clean complex datasets for better analysis.",
    ],
    image: "./images/services/cleanning.png",
  },
  {
    title: "Data Analysis",
    description:
      "Empower your data analysis with user-friendly tools that make it easier to uncover insights. Create reports with aggregated data summaries and perform advanced statistical analyses.",
    points: [
      "Perform data exploration with various techniques.",
      "Create interactive dashboards for visualization.",
      "Gain insights using statistical methods and algorithms.",
    ],
    image: "./images/services/anlyst.png",
  },
  // {
  //   title: "Automation",
  //   description:
  //     "Automate data workflows to integrate multiple sources, improve data processing time, and eliminate manual intervention. Set up automated data pipelines that run on a schedule, triggered events, or other conditions.",
  //   points: [
  //     "Create scheduled data pipelines.",
  //     "Integrate multiple data sources for end-to-end automation.",
  //     "Set alerts for issues during data processing.",
  //   ],
  //   image: "./images/services/scraping.png",
  // },
  {
    title: "Data Visualization",
    description:
      "Bring your data to life with customized and interactive visualizations. Our platform supports various chart types, including bar, line, pie charts, and scatter plots, providing clear insights for decision-making.",
    points: [
      "Use pre-built templates for quick visualization.",
      "Customize charts with advanced options.",
      "Generate reports for sharing insights.",
    ],
    image: "../images/services/visualize.png",
  },
];

const steps = [
  {
    number: "1",
    title: "Import Data",
    description: "Bring in data from various sources like CSV, JSON, Excel, or web scraping.",
    icon: "./images/services/1.png",
  },
  {
    number: "2",
    title: "Prepare & Clean Data",
    description: "Clean and transform data effortlessly to ensure quality for analysis.",
    icon: "./images/services/2.png",
  },
  {
    number: "3",
    title: "Analyze Data",
    description: "Apply analytics and machine learning to uncover insights and patterns.",
    icon: "./images/services/3.png",
  },
  {
    number: "4",
    title: "Visualize Data",
    description: "Create interactive charts and dashboards for clear data visualization.",
    icon: "./images/services/4.png",
  },
  {
    number: "5",
    title: "Results",
    description: "Achieve actionable insights quickly and share your findings.",
    icon: "./images/services/5.png",
  },
];

export default function Service() {
  return (
    <div className="">
      {/* Navbar */}
      <div className="absolute w-full z-50">
        <NavbarComponent />
      </div>

      {/* Hero Section */}
      <section
        className="relative text-white text-left h-auto md:h-[535px] w-full"
        style={{
          backgroundImage: `url('/images/services/background2.png')`,
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
            <p className="text-base sm:text-lg leading-relaxed w-full sm:w-full">
              Explore our comprehensive data services designed to help you analyze, visualize, and optimize your data.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="./images/services/servicesection.png"
              alt="Our Services"
              className="w-full max-w-[570px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8 lg:px-24">
          <h2 className="text-[20px] max-w-[800px] mx-auto font-bold text-center mb-12">
            Start with a brief introduction or overview about the services your platform offers. Let users quickly understand the main features and value.
          </h2>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Text Content */}
                <div className="md:w-1/2 text-left px-4">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                {/* Image */}
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center px-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-w-sm h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24">
        <h2 className="text-2xl font-bold text-center mb-12">
          Getting Started with <span className="text-blue-600">DAVI</span>
        </h2>

        {/* Row 1 - Top Icons, Titles, and Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={step.icon} alt={step.title} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2 - Horizontal Line with Numbered Steps */}
        <div className="relative mb-12">
          {/* Horizontal Line */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-blue-600"></div>
          {/* Numbered Circles */}
          <div className="grid grid-cols-5 gap-8 text-center relative">
            {steps.map((step, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Bottom Titles and Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </div>
  );
}
