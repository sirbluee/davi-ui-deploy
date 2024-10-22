import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-white text-left h-screen" // Changed to left-aligned text
        style={{
          backgroundImage: `url('/images/home/hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-8 lg:px-36 relative z-10 flex flex-col items-start justify-center h-full">
          <h1 className="text-5xl font-bold mt-14 mb-4 leading-[56px]">
            Unlock the
            <br /> Full Potential
            <br /> of Your Data
            <br /> with <span className="text-[#407BFF]">DAVI</span>
          </h1>
          <p className="text-lg mb-10 leading-relaxed">
            An all-in-one platform for data analysis, visualization, and
            <br />
            integration. Empower your team to make data-driven
            <br /> decisions faster and smarter.
          </p>
          <Link href="/get-started">
            <span className="bg-[#443DFF] text-white text-base font-bold py-3 px-8 rounded-lg hover:bg-blue-700">
              Get Started
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
