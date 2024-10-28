import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import man_image from "@/public/images/about/man.jpg";
import user_image from "@/public/images/about/User.png";

const DashboardCard: FC = () => {
  const [plance, setPlance] = useState(0);
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // Function to animate the number count up
  const animateNumber = (target: number, setValue: (value: number) => void) => {
    let current = 0;
    const increment = target / 100;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.floor(current));
      }
    }, 20);
  };

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    const currentCardRef = cardRef.current; // Copy the ref value to a variable

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef); // Use the copied variable in the cleanup
      }
    };
  }, []);

  // Start animation when the component becomes visible
  useEffect(() => {
    if (isVisible) {
      animateNumber(254, setPlance);
      animateNumber(3000, setActive);
      animateNumber(3254, setTotal);
      animateNumber(5960.99, setRevenue);
      animateNumber(318, setPercent);
    }
  }, [isVisible]);

  return (
    <div ref={cardRef} className="bg-gray-400 rounded-xl p-3 relative">
      {/* Background Circle */}
      <div
        className="absolute top-12 right-10 transform -translate-y-1/2 translate-x-1/2 w-40 h-40 rounded-full opacity-25"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            #F87171 0px,
            #F87171 2px,
            transparent 2px,
            transparent 4px
          )`,
        }}
      ></div>
      <div className="relative bg-white rounded-xl shadow-lg p-4 w-[350px]">
        {/* Top floating chart */}
        <div className="absolute top-[-45px] sm:top-[-50px] sm:left-[-60px] left-[-25px] bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 lg:hover:scale-125">
          <div className="w-32 h-auto rounded-md p-2">
            <div>
              <div
                className={`bg-blue-300 h-3 rounded-full transition-all duration-[2000ms] ease-in-out ${
                  isVisible ? "w-1/3" : "w-0"
                }`}
              ></div>
              <div
                className={`bg-purple-200 mt-3 mb-0.5 h-4 rounded-full transition-all duration-[2000ms] ease-in-out ${
                  isVisible ? "w-1/2" : "w-0"
                }`}
              ></div>
              <div className="flex flex-row h-14 justify-between items-end">
                {[
                  { height: "h-8", color: "bg-purple-200" },
                  { height: "h-10", color: "bg-red-300" },
                  { height: "h-6", color: "bg-purple-200" },
                  { height: "h-10", color: "bg-red-300" },
                  { height: "h-12", color: "bg-purple-200" },
                  { height: "h-7", color: "bg-purple-200" },
                  { height: "h-10", color: "bg-red-300" },
                  { height: "h-10", color: "bg-red-300" },
                  { height: "h-6", color: "bg-purple-200" },
                  { height: "h-10", color: "bg-red-300" },
                  { height: "h-12", color: "bg-purple-200" },
                  { height: "h-7", color: "bg-purple-200" },
                  { height: "h-10", color: "bg-red-300" },
                  { height: "h-10", color: "bg-red-300" },
                  { height: "h-12", color: "bg-purple-200" },
                  { height: "h-7", color: "bg-purple-200" },
                  { height: "h-10", color: "bg-red-300" },
                ].map((bar, index) => (
                  <div
                    key={index}
                    className={`${
                      bar.color
                    } w-1 rounded-full transition-all duration-[3500ms] ease-in-out transform origin-bottom ${
                      isVisible ? bar.height : "h-0"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="z-10">
          <div className="flex justify-between">
            <div className="text-lg font-bold mb-2">Employees</div>
            <div className="flex items-center text-gray-500 text-sm">
              <span>Aug 25 - Sept 29</span>
              <svg
                className="w-4 h-4 ml-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {/* Stats Section */}
          <div className="flex justify-between">
            <div className="mt-4 space-y-2">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-row items-center space-x-2">
                  <div className="bg-purple-700 h-3 w-3 rounded-md"></div>
                  <span className="text-sm text-gray-600">Plance</span>
                </div>
                <span className="text-lg font-semibold hover:text-blue-500">
                  {plance}
                </span>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex flex-row items-center space-x-2">
                  <div className="bg-orange-500 h-3 w-3 rounded-md"></div>
                  <span className="text-sm text-gray-600">Active</span>
                </div>
                <span className="text-lg font-semibold hover:text-blue-500">
                  {active}
                </span>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex flex-row items-center space-x-2">
                  <div className="bg-orange-300 h-3 w-3 rounded-md"></div>
                  <span className="text-sm text-gray-600">Total</span>
                </div>
                <span className="text-lg font-semibold hover:text-blue-500">
                  {total}
                </span>
              </div>
            </div>

            {/* Circular Avatar Graphic */}
            <div className="relative flex items-center justify-center w-48 h-48 transform transition-transform duration-300 hover:scale-105 lg:hover:scale-110">
              {/* Center Avatar */}
              <div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center z-10">
                <Image
                  src={user_image}
                  alt="user_image"
                  height={150}
                  width={150}
                  quality={100}
                  className="transform -scale-x-100"
                />
              </div>

              {/* Orbits */}
              <div className="absolute w-28 h-28 border-t-2 border-purple-500 rounded-full animate-spin-slow"></div>
              <div className="absolute w-36 h-36 border-r-2 border-orange-600 rounded-full animate-spin-reverse"></div>
              <div className="absolute w-44 h-44 border-b-2 border-l-2 border-orange-400 rounded-full animate-spin-reverse"></div>

              {/* Orbiting Dots */}
              <div className="absolute bottom-[23px] left-[120px] w-3 h-3 bg-red-800 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute top-[7px] left-[60px] w-3 h-3 bg-orange-400 rounded-full"></div>
              <div className="absolute top-[65px] left-[140px] w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
          </div>
          {/* Recent Activity */}
          <div className="mt-6 p-3 bg-gray-100 rounded-md flex items-center space-x-2 hover:bg-slate-300 transform transition-transform duration-300 hover:scale-105">
            <div className="w-8 h-8 bg-gray-200 rounded-lg relative overflow-hidden">
              <Image
                src={man_image}
                alt="smey09"
                layout="fill"
                objectFit="cover"
                unoptimized
              />
            </div>

            <div>
              <div className="text-sm font-semibold">
                Smey joined team development
              </div>
              <div className="text-xs text-gray-500">
                27 October, 2024 | 12:17 AM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom floating card */}
        <div className="absolute bottom-[30px] sm:bottom-10 sm:left-1/2 right-[-25px] w-56 h-20 bg-white p-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 lg:hover:scale-125">
          <div className="flex flex-row space-x-2">
            {/* Revenue Text */}
            <div>
              <div className="text-sm text-gray-500">Revenue</div>
              <div className="flex flex-row items-center">
                <div className="text-xl font-bold flex hover:text-blue-500">
                  ${revenue.toFixed(2)}
                </div>
                <div className="text-[12px] text-green-500">
                  <span className="text-[10px] px-1">▲</span>
                  <span>${percent}%</span>
                </div>
              </div>
            </div>
            {/* Line Chart */}
            <div className="flex-grow w-28">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Area Fill */}
                <path
                  d="M0 30 L10 25 L20 28 L30 20 L40 22 L50 18 L60 10 L70 15 L80 8 L90 12 L100 5 L100 40 L0 40 Z"
                  fill="url(#gradientFill)"
                />

                {/* Line Path */}
                <path
                  d="M0 30 L10 25 L20 28 L30 20 L40 22 L50 18 L60 10 L70 15 L80 8 L90 12 L100 5"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
