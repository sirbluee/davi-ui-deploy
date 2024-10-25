"use client";
import HeroSection from "@/app/home/components/HeroSection";
import FeaturesSection from "@/app/home/components/FeatureSection";
import SolutionSection from "@/app/home/components/SolutionSection";
import IntergrationSection from "@/app/home/components/IntergrationSection";
import ServiceSection from "@/app/home/components/ServiceSection";
import DataInsightSection from "@/app/home/components/DataInsightSection";
import CTASection from "@/app/home/components/CTASection";

import DataSolution from "./components/DataSolution";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "center-bottom",
      });
      AOS.refreshHard();
    };

    initAOS();
  }, []);
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Solutions Section */}
      <SolutionSection />

      {/* Integration Section */}
      <IntergrationSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Powerful Data Insights Section */}
      <DataInsightSection />

      {/* Data Solution */}
      <DataSolution />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
    </>
  );
}
