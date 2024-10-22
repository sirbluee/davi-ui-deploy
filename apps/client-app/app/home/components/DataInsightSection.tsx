import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DataInsightSection() {
  return (
    <>
      <section className="py-12 relative bg-gray-100 md:bg-transparent">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url('/images/home/CTAbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto w-full md:w-auto px-8 lg:px-36 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Right Side - Image (order first on small screens) */}
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="/images/home/CTAImg.png"
                alt="CTA Image"
                width={400}
                height={400}
                className="w-full max-w-md"
              />
            </div>

            {/* Left Side - Text Content (order second on small screens) */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-6">
                Unlock Powerful Data Insights Today
              </h2>
              <ul className="flex flex-wrap justify-center md:justify-start font-medium mb-8 gap-x-6 gap-y-4 text-black">
                {/* List Items */}
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/home/iconTick.png"
                    alt="tick"
                    width={16}
                    height={16}
                  />
                  <span>Data Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/home/iconTick.png"
                    alt="tick"
                    width={16}
                    height={16}
                  />
                  <span>Data Cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/home/iconTick.png"
                    alt="tick"
                    width={16}
                    height={16}
                  />
                  <span>Real-Time Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/home/iconTick.png"
                    alt="tick"
                    width={16}
                    height={16}
                  />
                  <span>Data Visualize</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/home/iconTick.png"
                    alt="tick"
                    width={16}
                    height={16}
                  />
                  <span>AI-Powered Insights</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/images/home/iconTick.png"
                    alt="tick"
                    width={16}
                    height={16}
                  />
                  <span>Visualize Dashboards</span>
                </li>
              </ul>
              <Link href="/get-started">
                <button className="bg-[#443DFF] text-white text-base font-bold py-3 px-6 rounded-lg hover:bg-blue-700 mx-auto md:mx-0">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
