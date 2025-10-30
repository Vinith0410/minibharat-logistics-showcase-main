import Header from "@/components/Header";
import MarqueeSection from "@/components/MarqueeSection";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnersSection from "@/components/PartnersSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="animate-fade-in">
        <Header />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <MarqueeSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <HeroSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <StatsSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <AboutSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <ServicesSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <HowItWorksSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <PartnersSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <PricingSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
