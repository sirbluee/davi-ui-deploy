import NavbarComponent from "@/app/components/NavbarComponent";
import HeroSection from "@/app/home/components/HeroSection";
import FeaturesSection from "@/app/home/components/FeatureSection";
import SolutionSection from "@/app/home/components/SolutionSection";
import IntergrationSection from "@/app/home/components/IntergrationSection";
import ServiceSection from "@/app/home/components/ServiceSection";
import DataInsightSection from "@/app/home/components/DataInsightSection";
import CTASection from "@/app/home/components/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <div className="absolute w-full z-50">
        <NavbarComponent />
      </div>

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

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
    </>
  );
}
