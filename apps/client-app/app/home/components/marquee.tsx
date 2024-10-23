import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export interface MarqueeItem {
  title: string;
  description?: string;
  img?: string;
}

export const mockMessages: MarqueeItem[] = [
  { title: "ETL", description: "", img: "/images/home/marquee/ETL.png" },
  { title: "CSV", description: "", img: "/images/home/marquee/csv.png" },
  {
    title: "MONGODB",
    description: "",
    img: "/images/home/marquee/mongodb.png",
  },
  {
    title: "Auto Cleaning",
    description: "",
    img: "/images/home/marquee/Auto_cleaning.png",
  },
  { title: "URL", description: "", img: "/images/home/marquee/url.png" },
  {
    title: "Custom Visaulize",
    description: "",
    img: "/images/home/marquee/Custom_Visualize.png",
  },
];

export interface MarqueeProps {
  items: MarqueeItem[];
  direction?: "horizontal" | "vertical";
  speed?: number;
  reverse?: boolean;
  className?: string;
  boxColors?: string[];
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = "horizontal",
  speed = 50,
  reverse = false,
  className = "",
  boxColors = ["bg-white"],
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(1);

  const duration =
    direction === "horizontal" ? `${100 / speed}s` : `${50 / speed}s`;
  const animationClass =
    direction === "horizontal"
      ? reverse
        ? "animate-scroll-horizontal-reverse"
        : "animate-scroll-horizontal"
      : reverse
      ? "animate-scroll-vertical-reverse"
      : "animate-scroll-vertical";

  useEffect(() => {
    if (!marqueeRef.current) return;

    const containerSize =
      direction === "horizontal"
        ? marqueeRef.current.offsetWidth
        : marqueeRef.current.offsetHeight;
    const contentSize =
      direction === "horizontal"
        ? marqueeRef.current.scrollWidth / items.length
        : marqueeRef.current.scrollHeight / items.length;

    // Calculate how many times the content needs to repeat to fill the container
    const repetitions = Math.ceil(containerSize / contentSize) + 1;
    setRepeatCount(repetitions);
  }, [items, direction]);

  // Function to pause the animation
  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };

  // Function to resume the animation
  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${
        direction === "horizontal" ? "w-full" : "h-[556px]"
      } ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={marqueeRef}
        className={`flex ${
          direction === "horizontal" ? "space-x-4" : "flex-col space-y-4"
        } ${animationClass}`}
        style={{
          animationDuration: duration, // Use Tailwind classes with custom duration
          animationPlayState: "running",
        }}
      >
        {Array(repeatCount)
          .fill(items)
          .flat()
          .map((item, index) => (
            <span
              key={index}
              className={`flex p-4 text-black w-44 h-64 justify-center items-center rounded-full ${
                boxColors[index % boxColors.length]
              }`}
            >
              <Image src={item.img} alt="" width={70} height={70} className=""/>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
