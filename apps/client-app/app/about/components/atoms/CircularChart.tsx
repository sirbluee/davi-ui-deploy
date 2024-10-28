import React, { useEffect, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

interface CircularChartProps {
  size?: number;
  segments: { value: number; color: string }[];
  strokeWidth?: number;
}

export const CircularChart: React.FC<CircularChartProps> = ({
  size = 200,
  segments,
  strokeWidth = 20,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);

  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  const percentageValue = useMotionValue(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Animate the overall percentage from 0 to 100
    const percentageAnimation = animate(0, 100, {
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setPercentage(Math.round(latest));
        percentageValue.set(latest);
      },
    });

    // Animate the segments' values
    const segmentAnimations = segments.map((segment, index) => {
      return animate(0, (segment.value / total) * circumference, {
        duration: 1.5,
        ease: "easeInOut",
        delay: index * 0.3,
        onUpdate: (value) => {
          setAnimatedValues((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
          });
        },
      });
    });

    return () => {
      percentageAnimation.stop();
      segmentAnimations.forEach((animation) => animation.stop());
    };
  }, [percentageValue, segments, total, circumference]);

  let cumulativeOffset = 0;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {segments.map((segment, index) => {
          const segmentLength = animatedValues[index] || 0;
          const strokeDasharray = `${segmentLength} ${circumference}`;
          const strokeDashoffset = cumulativeOffset;
          cumulativeOffset -= (segment.value / total) * circumference;

          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ fontSize: size / 5 }}
      >
        <div className="text-black font-bold" style={{ fontSize: size / 4 }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default CircularChart;
