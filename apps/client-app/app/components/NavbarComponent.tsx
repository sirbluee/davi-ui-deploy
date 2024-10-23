"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/navBar/logo.png";
import Link from "next/link";
import { MenuList } from "./menu";
import { usePathname } from "next/navigation";

// type MenuItem = {
//   name: string;
//   path: string;
//   active: boolean;
// };

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const pathname = usePathname();

  return (
    <nav className="text-white">
      <div className="container mx-auto px-8 lg:px-36 flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="logo"
                width={110}
                height={110}
                unoptimized
              />
            </Link>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {MenuList.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`font-medium ${
                item.path === pathname ? "bg-gray-100 text-blue-900 font-bold rounded-md py-1 px-2" : "text-white"
              } hover:text-blue-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-white hover:text-gray-200 font-medium"
          >
            Login
          </Link>
          <span className="text-white">|</span>
          <Link
            href="/signup"
            className="text-white hover:text-gray-200 font-medium"
          >
            Sign Up
          </Link>
          <Link href="/signup">
            <span className="bg-blue-600 text-white text-base font-bold px-4 py-3 rounded-md hover:bg-blue-700">
              Get Started
            </span>
          </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Sidebar Navigation for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-start space-y-6 mt-10 p-6">
          <Link
            href="/"
            className="text-white hover:text-gray-200 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-200 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-200 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-200 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="text-white hover:text-gray-200 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-white hover:text-gray-200 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>
          <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
            <span className="bg-blue-600 text-white text-base font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
