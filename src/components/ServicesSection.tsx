import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import courierImg from "@/assets/services/courier-services.jpg";
import warehouseImg from "@/assets/large-hih-warehouse.jpg";
import ecommerceImg from "@/assets/services/ecommerce-logistics.jpg";
import odh from "@/assets/services/sas-transport-min.jpg";
import grocery from "@/assets/grocery-warehouse.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: "apm",
      title: "APM Business Model",
      image: courierImg,
      description: "All Products Movement - Complete logistics solution for handling all types of products with efficiency and care.",
      link: "/apm-business-model"
    },
    {
      id: "large-hih",
      title: "Large HIH Business Model",
      image: warehouseImg,
      description: "Large Heavy Item Handling - Specialized services for managing and transporting large, heavy items safely.",
      link: "/large-hih-business-model"
    },
    {
      id: "grocery",
      title: "Grocery Business Model",
      image: grocery,
      description: "Flipkart-backed grocery delivery franchise opportunity with proven systems and support.",
      link: "/grocery-business-model"
    },

    {
  id: "odh-mdh",
  title: "ODH/MDH Business Model",
  image: odh,                         // or a string '/assets/..' if using public folder
  description: "Run your own Flipkart-backed delivery hub franchise with assured business, transparent earnings, and high growth potential.",
  link: "/odh-mdh-business-model"
},

  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-primary text-sm font-semibold mb-6">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our franchise business models designed for success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            return (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </AspectRatio>
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6 md:p-8">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <Link to={service.link}>
                    <Button 
                      variant="default" 
                      className="w-full group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;