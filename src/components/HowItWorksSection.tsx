import { Handshake, GraduationCap, Cpu, Award, Megaphone, Network } from "lucide-react";
import nightHighwayImage from "@/assets/night-highway-tech.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Handshake,
      title: "Franchise Model",
      description: "Partner with us through our proven franchise system with minimal investment and maximum returns."
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing support to ensure your success in the logistics industry."
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Access to cutting-edge logistics technology and management systems for efficient operations."
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description: "Leverage our established brand reputation and customer trust built over years of excellence."
    },
    {
      icon: Megaphone,
      title: "Marketing Assistance",
      description: "Professional marketing support and promotional materials to help grow your business."
    },
    {
      icon: Network,
      title: "Support Network",
      description: "Join a network of successful partners with shared resources and collaborative growth opportunities."
    }
  ];

  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${nightHighwayImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our growing network of logistics partners and build a successful business with our proven system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Connecting Lines */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-12 left-full w-16 h-0.5 border-t-2 border-dashed border-orange-primary/60 transform translate-x-8"></div>
                )}
                
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 group w-full max-w-sm">
                  <div className="w-20 h-20 bg-orange-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="mb-4 text-orange-300 text-sm font-medium">Step {index + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;