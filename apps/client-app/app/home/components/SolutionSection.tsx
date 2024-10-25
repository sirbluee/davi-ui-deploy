import Image from "next/image";
import React from "react";
import SolutionImg from "@/public/images/home/solutionImg.png";
import Arrow from "@/public/images/home/Arrow.png";
import ArrowRight from "@/public/images/home/arrow-right.png";

export default function SolutionSection() {
  return (
    <>
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 lg:px-36 gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-[60%]">
            <Image
              src={SolutionImg} // Ensure this path is correct
              alt="Solution Image"
              width={810}
              height={710}
              className="rounded-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-[40%] relative">
            <h2 className="text-2xl font-bold mb-3">
              Solutions for Your Large
              <br /> Enterprise
            </h2>
            <p className="text-black font-medium mb-4">
              Leverage the power of data with DAVI’s advanced analytics and
              visualization tools. Our platform is built to handle the complex
              needs of large enterprises, enabling seamless integration,
              real-time insights, and collaboration across your entire
              organization.
            </p>
            <ul className="list-none space-y-4 text-gray-600">
              <li className="flex items-center ">
                <Image
                  src={ArrowRight}
                  alt="Arrow Right"
                  width={20}
                  height={20}
                  className="mr-2 -mt-5"
                />
                <p className="text-black font-medium">
                  Combine data from various sources to get a comprehensive view
                  of your business.
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={ArrowRight}
                  alt="Arrow Right"
                  width={20}
                  height={20}
                  className="mr-2 -mt-5"
                />
                <p className="text-black font-medium">
                  {" "}
                  Gain insights instantly with our real-time data processing and
                  visualization features.
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={ArrowRight}
                  alt="Arrow Right"
                  width={20}
                  height={20}
                  className="mr-2 -mt-5"
                />
                <p className="text-black font-medium">
                  {" "}
                  Discover hidden trends and receive predictive recommendations.
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={ArrowRight}
                  alt="Arrow Right"
                  width={20}
                  height={20}
                  className="mr-2 -mt-5"
                />
                <p className="text-black font-medium">
                  {" "}
                  Tailor your data views to suit your business needs.
                </p>
              </li>
            </ul>
            {/* Overlay Elements */}
            <div className="absolute -top-10 -right-1">
              <Image src={Arrow} alt="Overview Icon" width={100} height={100} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
