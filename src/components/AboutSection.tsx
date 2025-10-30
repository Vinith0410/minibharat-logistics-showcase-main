import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import teamImage from "@/assets/logistics-team.jpg";

const AboutSection = () => {
  const features = [
    "Pan-India logistics network",
    "Real-time tracking & monitoring",
    "Dedicated customer support",
    "Advanced warehouse management",
    "Sustainable delivery solutions"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Minibharat?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a logistics company - we're your strategic partner in growth, 
            delivering excellence across every mile of your business journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={teamImage}
              alt="Minibharat Logistics Team"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Business Through Smart Logistics
            </h3>
            
            <p className="text-lg text-gray-600 mb-6">
              With over a decade of experience in the logistics industry, Minibharat has emerged 
              as a trusted partner for businesses across India. Our commitment to innovation, 
              reliability, and customer satisfaction sets us apart.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              From small startups to large enterprises, we provide scalable solutions that grow 
              with your business. Our state-of-the-art technology and dedicated team ensure your 
              goods reach their destination safely and on time.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;