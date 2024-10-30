import Link from "next/link";
import React from "react";

export default function CTASection() {
  return (
    <>
      <section>
        <div className="relative scroll-parallax ">
          <div className="flex z-50 flex-col items-center justify-center text-white py-16 space-y-8 bg-memey ">
            {/* Header */}
            <h2 className="text-3xl md:text-5xl font-bold text-center animate-fade-in">
              Ready to get started?
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto">
              We are so confident you will love DAVI, we have made our service
              month-to-month.
            </p>

            {/* CTA Button */}
            <Link
              href="/signup"
              className="flex mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700
                     text-white font-semibold rounded-lg 
                     transition-colors hover:duration-150
                     transform hover:scale-105"
            >
              Try DAVI Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
