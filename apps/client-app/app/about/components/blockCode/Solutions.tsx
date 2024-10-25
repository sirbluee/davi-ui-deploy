import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animations

import bg_animation from "@/public/images/about/background/processing-data.gif";
import about_animations from "@/public/images/about/about_animations.gif";

import { features_1 } from "@/app/about/mockData";
import FeatureCard from "@/app/about/components/FeaturesListCard";
import { Button } from "@/app/about/components/atoms/Button";

export const Solutions = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/service");
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10 p-4 lg:p-12 items-center lg:items-start justify-between pt-20 lg:pt-48 sm:px-8 md:px-12 lg:px-24 xl:px-[18%] bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${bg_animation.src})`,
      }}
      initial={{ opacity: 0, scale: 0.8 }} // Initial scale and opacity before the user scrolls
      whileInView={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale when in view
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition settings
      viewport={{ once: false, amount: 0.3 }} // Trigger the animation when 30% of the div is in view
    >
      <motion.div
        className="flex-shrink-0 sm:w-1/2 sm:h-1/2 lg:pt-[3%] xl:pt-[6%] transform transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, x: -100 }} // Initial position (slide in from the left)
        whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
        transition={{ duration: 0.5, ease: "easeOut" }} // Timing settings for image
        viewport={{ once: false, amount: 0.3 }} // Replay animation on scroll back
      >
        <Image
          src={about_animations}
          alt="about_animations"
          width={600}
          height={400}
          className="rounded-lg"
          unoptimized
        />
      </motion.div>
      <motion.div
        className="w-full lg:max-w-md mx-auto p-2 lg:p-4 text-white"
        initial={{ opacity: 0, y: 50 }} // Slide up from below
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Delay the text slightly for a staggered effect
        viewport={{ once: false, amount: 0.3 }} // Replay animation when scrolled back
      >
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
          Solutions for Your Large Enterprise
        </h2>
        <p className="mb-6 text-lg font-light text-gray-300 text-center lg:text-left">
          {`Empower your business with DAVI's cutting-edge analytics platform,
            offering fast data processing and secure cloud solutions, tailored
            for scalability and performance.`}
        </p>

        {/* Feature List */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          initial={{ opacity: 0, y: 50 }} // Initial position (slide up)
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Delay for staggered animation
          viewport={{ once: false, amount: 0.3 }} // Replay when scrolling back
        >
          {features_1.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              alt={feature.alt}
              titleColor="text-white" // Custom title color
              descriptionColor="text-slate-300" // Custom description color
            />
          ))}
        </motion.div>

        <div className="flex justify-center lg:justify-start mt-4">
          <Button text="Learn More" onClick={handleLearnMoreClick} />
        </div>
      </motion.div>
    </motion.div>
  );
};
