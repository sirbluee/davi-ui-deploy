"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
type MarqueeProps = {
  children?: React.ReactNode;
  duration?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  pauseOnHover?: boolean;
};

export default function Marquee({
  children,
  duration = 20,
  direction = "horizontal",
  reverse = false,
  pauseOnHover = false,
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;

    // Set the animation
    const keyframes =
      direction === "horizontal"
        ? [
            { transform: `translateX(${reverse ? "50%" : "-100%"})` },
            { transform: `translateX(${reverse ? "-100%" : "100%"})` },
          ]
        : [
            { transform: `translateY(${reverse ? "100%" : "-100%"})` },
            { transform: `translateY(${reverse ? "-100%" : "100%"})` },
          ];

    const animation = marqueeElement.animate(keyframes, {
      duration: duration * 1000,
      iterations: Infinity,
      easing: "linear",
    });

    // Pause on hover
    if (pauseOnHover) {
      marqueeElement.addEventListener("mouseenter", () => animation.pause());
      marqueeElement.addEventListener("mouseleave", () => animation.play());
    }

    // Cleanup
    return () => {
      animation.cancel();
      if (pauseOnHover) {
        marqueeElement.removeEventListener("mouseenter", () =>
          animation.pause()
        );
        marqueeElement.removeEventListener("mouseleave", () =>
          animation.play()
        );
      }
    };
  }, [duration, direction, reverse, pauseOnHover]);
  return (
    <div
      ref={marqueeRef}
      className={`flex ${
        direction === "horizontal" ? "flex-row" : "flex-col"
      } items-center`}
      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {children}
    </div>
  );
}

type ReviewCardProps = {
  title?: string;
  description?: string;
  img?: string;
};


interface ReviewProps {
  title?: string;
  description?: string;
  img?: string;
}

const reviews: ReviewProps[] = [
  {
    title: "CSV",
    description: "@alice",
    img: "/images/home/marquee/csv.png",
  },
  {
    title: "ETL",
    description: "@alice",
    img: "/images/home/marquee/etl.png",
  },
  {
    title: "MONGODB",
    description: "@alice",
    img: "/images/home/marquee/mongodb.png",
  },
  {
    title: "URL",
    description: "@alice",
    img: "/images/home/marquee/url.png",
  },{
    title: "CSV",
    description: "@alice",
    img: "/images/home/marquee/csv.png",
  },
  {
    title: "ETL",
    description: "@alice",
    img: "/images/home/marquee/etl.png",
  },
  {
    title: "MONGODB",
    description: "@alice",
    img: "/images/home/marquee/mongodb.png",
  },
  {
    title: "URL",
    description: "@alice",
    img: "/images/home/marquee/url.png",
  }
];

export function ReviewCard({ title, description, img }: ReviewCardProps) {
  const imageUrl = img || "/default-image.png"; 
  return (
    <div className="flex bg-white w-40 h-60 justify-center items-center rounded-full m-3">
      <Image
          src={imageUrl}
          alt={title || "Review image"}
          width={60}
          height={60}
          className=""
        />
        {/* <h1>{img}</h1> */}
    </div>
  );
}
// For horizontal marquee
const firstRowReviews = reviews.slice(0, reviews.length / 2);
// For vertical marquee
const secondRowReviews = reviews.slice(reviews.length / 2);

export function MarqueeDemo() {
  return (
    <div className="relative px-3 flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="">
        <Marquee duration={35} direction="vertical" pauseOnHover>
          {firstRowReviews.map((review) => (
            <ReviewCard key={review.title} {...review} />
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee duration={35} direction="vertical" reverse pauseOnHover>
          {secondRowReviews.map((review) => (
            <ReviewCard key={review.title} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
