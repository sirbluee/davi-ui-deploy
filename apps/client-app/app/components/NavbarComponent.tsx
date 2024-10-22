import Image from "next/image";
import Logo from "@/public/images/navBar/logo.png";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <nav className="p-4">
      <div className="container w-auto mx-32 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="logo" width={110} height={110} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/home"
            className="text-white hover:text-gray-200 font-medium"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-200 font-medium"
          >
            Service
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-200 font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-200 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center">
          <Link
            href="/login"
            className="text-white hover:text-gray-200 font-medium mr-2"
          >
            Login
          </Link>
          <span className="text-white text-xl">|</span>
          <Link
            href="/signup"
            className="text-white hover:text-gray-200 font-medium ml-2"
          >
            Sign Up
          </Link>
          <Link href="/get-started" className="ml-8">
            <span className="bg-[#443DFF] text-white text-base font-bold p-3 rounded-lg hover:bg-blue-700">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
