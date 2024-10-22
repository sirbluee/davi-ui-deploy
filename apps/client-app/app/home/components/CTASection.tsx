import Link from "next/link";
import React from "react";

export default function CTASection() {
  return (
    <>
      <section className="bg-blue-900 text-white text-center py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-lg mb-14">
            We’re so confident you’ll love DAVI, we’ve made our service
            month-to-month.
          </p>
          <Link href="/get-started">
            <span className="bg-[#131111] text-white text-base font-bold py-3 px-8 rounded-lg hover:bg-gray-900">
              Request a Demo
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
