import React from "react";
import Image from "next/image";
import Logo from "@/public/images/footer/logo.png";
import Facebok from "@/public/images/footer/facebook.png";
import Instargram from "@/public/images/footer/instargram.png";
import Linkedin from "@/public/images/footer/linkedin.png";
import Twitter from "@/public/images/footer/twiter1.png";
import Message from "@/public/images/footer/message_icon.png";
import Call from "@/public/images/footer/call-icon.png";
import Location from "@/public/images/footer/location_icon.png";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div
      className="pt-10 bg-black text-white w-full"
      style={{
        backgroundImage: `url('/images/footer/bg-footer.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Footer Container with the same margins as navbar */}
      <div className="container mx-auto px-8 lg:px-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-8">
        {/* Logo and Social Links - Left Aligned */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-2">
            <Image
              src={Logo}
              alt="Company logo"
              width={123}
              height={36}
              unoptimized
            />
          </h2>
          <p className="text-sm mb-4 pt-6">
            DAVI enables businesses to integrate, analyze, and visualize data
            for smarter decision-making.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="/facebook">
              <Image
                src={Facebok}
                alt="Facebook icon"
                width={38}
                height={38}
                unoptimized
              />
            </Link>
            <Link href="/linkedin">
              <Image
                src={Linkedin}
                alt="LinkedIn icon"
                width={38}
                height={38}
                unoptimized
              />
            </Link>
            <Link href="/switter">
              <Image
                src={Twitter}
                alt="Twitter icon"
                width={38}
                height={38}
                unoptimized
              />
            </Link>
            <Link href="/instargram">
              <Image
                src={Instargram}
                alt="Instagram icon"
                width={38}
                height={38}
                unoptimized
              />{" "}
            </Link>
          </div>
        </div>

        {/* Services Section - Hidden on Mobile */}
        <div className="hidden sm:block text-left">
          <h3 className="text-xl font-bold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="pt-2">
              <Link href="/service">ETL </Link>
            </li>
            <li className="pt-2">
              <Link href="/service">Data Visualization </Link>
            </li>
            <li className="pt-2">
              <Link href="/service">Data Cleaning </Link>
            </li>
            <li className="pt-2">
              <Link href="/service">Data Analyst </Link>
            </li>
          </ul>
        </div>

        {/* About Section - Hidden on Mobile */}
        <div className="hidden sm:block text-left">
          <h3 className="text-xl font-bold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="pt-2">
              <Link href="/about">How it works </Link>
            </li>
            <li className="pt-2">
              <Link href="/about">Member </Link>
            </li>
            <li className="pt-2">
              <Link href="/about">Brainstorm </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section - Left Aligned */}
        <div className="text-left">
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <div className="text-sm flex items-center space-x-3 pt-2">
            <Image src={Message} alt="Message icon" width={24} height={24} />
            <span>davi168@gmail.com</span>
          </div>
          <div className="text-sm flex items-start space-x-3 pt-4">
            <Image
              className="mt-1"
              src={Location}
              alt="Location icon"
              width={24}
              height={24}
            />
            <span>
              AP-1295, Street Aphivath, Sangkat Chrouy Changvar, Phnom Penh,
              Cambodia.
            </span>
          </div>

          <div className="text-sm flex items-center space-x-3 pt-4">
            <Image src={Call} alt="Call icon" width={24} height={24} />
            <span>086 40 147</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 mx-8 lg:mx-36"></div>
      <div className="text-center py-6 text-sm">
        <p>Copyright © 2024 DAVI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
