import Link from "next/link";
import React from "react";
import Image from "next/image";
import parallax from "../../../public/images/home/paralax.png";
import classNames from "classnames";

export default function CTASection() {
  return (
    <>
      <section className="relative min-h-screen">
        {/* scroll-parallax bg-black opacity-50 blur-sm */}
        <div className="fixed inset-0 w-full h-full">
          <Image
            src={parallax}
            alt="Background"
            className="w-full h-80 object-cover object-center"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-20">
          <div className="min-h-screen flex flex-col items-center justify-center text-white p-6 space-y-8">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-center animate-fade-in">
              Ready to get started?
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto">
              We're so confident you'll love DAVI, we've made our service
              month-to-month.
            </p>

            {/* CTA Button */}
            <Link
              href="/demo"
              className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 
                     text-white font-semibold rounded-lg 
                     transition-colors duration-300 
                     transform hover:scale-105"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
      <section className="h-80">
        <h1>hello</h1>
      </section>
    </>
  );
}
