// components/Footer.tsx
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

const Footer: React.FC = () => {
  return (
    <div
      className="bg-[#131111] text-white w-full py-12 "
      style={{
        backgroundImage: `url('/images/footer/bg-footer.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-24">
        <div className="text-center lg:text-left">
          <h2 className="flex justify-center md:justify-start text-xl font-bold mb-2">
            <Image
              src={Logo}
              alt="Description of the logo"
              width={123}
              height={36}
            />
          </h2>

          <p className="text-sm  mb-4 pt-6 pb-6">
            DAVI enables businesses to integrate, analyze, and visualize data
            for smarter decision-making.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <Image src={Facebok} alt="Facebook icon" width={38} height={38} />
            <Image src={Linkedin} alt="LinkedIn icon" width={38} height={38} />
            <Image src={Twitter} alt="Twitter icon" width={38} height={38} />
            <Image
              src={Instargram}
              alt="Instagram icon"
              width={38}
              height={38}
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="pt-4">ETL</li>
            <li className="pt-4">Data Visualization</li>
            <li className="pt-4">Data Cleaning</li>
            <li className="pt-4">Data Analyst</li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="pt-4">How it works</li>
            <li className="pt-4">Member</li>
            <li className="pt-4">Brainstorm</li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm flex items-center justify-center lg:justify-start space-x-3 pt-4">
            <Image src={Message} alt="Message icon" width={24} height={24} />
            <span>davi168@gmail.com</span>
          </p>
          <p className="text-sm flex items-center justify-center lg:justify-start space-x-3 pt-4">
            <Image src={Location} alt="Location icon" width={24} height={24} />
            <span>
              AP-1295, Street Aphivath, Sangkat Chrouy Changvar, Phnom Penh,
              Cambodia. Near OCIC Wedding Center.
            </span>
          </p>
          <p className="text-sm flex items-center justify-center lg:justify-start space-x-3 pt-4">
            <Image src={Call} alt="Call icon" width={24} height={24} />
            <span>0 86 40 147</span>
          </p>
        </div>
      </div>
      <div className="border-t border-white-600 my-8 mx-6 lg:mx-32"></div>
      <div className="text-center mt-10 text-sm">
        <p>Copyright © 2024 DAVI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
