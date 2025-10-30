import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Area Vendor",
      price: "Contact for Pricing",
      period: "Enquiry/Year",
      features: [
        "Local area coverage",
        "Basic delivery services",
        "Standard support",
        "Monthly reporting",
        "Mobile app access",
        "Customer portal",
        "Basic training included",
        "Standard commission rates"
      ],
      popular: false
    },
    {
      name: "Core Vendor",
      price: "Contact for Pricing",
      period: "Enquiry/Year",
      features: [
        "Multi-city coverage",
        "Express delivery options",
        "Priority support 24/7",
        "Advanced analytics",
        "API integration",
        "White-label solutions",
        "Comprehensive training",
        "Enhanced commission rates",
        "Marketing support"
      ],
      popular: true
    },
    {
      name: "District Vendor",
      price: "Contact for Pricing",
      period: "Enquiry/Year",
      features: [
        "District-wide operations",
        "Warehouse facilities",
        "Dedicated account manager",
        "Custom reporting",
        "Inventory management",
        "Bulk shipping discounts",
        "Advanced training program",
        "Premium commission structure"
      ],
      popular: false
    },
    {
      name: "State Vendor",
      price: "Contact for Pricing",
      period: "Enquiry/Year",
      features: [
        "State-level operations",
        "Multiple warehouse locations",
        "Franchise opportunities",
        "Custom technology solutions",
        "Dedicated support team",
        "Enterprise-grade features",
        "Executive training program",
        "Maximum commission benefits",
        "Brand partnership opportunities"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose The Best Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick your plan. Change anytime. No switching fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-blue-900 text-white shadow-2xl scale-105 border-2 border-orange-primary"
                  : "bg-white text-gray-900 shadow-lg"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-primary to-orange-dark text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className={`text-sm font-medium mb-2 ${plan.popular ? "text-orange-200" : "text-orange-primary"}`}>
                  {plan.period}
                </div>
                <div className={`text-lg font-semibold ${plan.popular ? "text-white" : "text-gray-600"}`}>
                  {plan.price}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? "text-orange-200" : "text-orange-primary"
                    }`} />
                    <span className={`text-sm ${plan.popular ? "text-white" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-blue-900 hover:bg-gray-100"
                    : "border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white"
                }`}
                size="lg"
              >
                View Detail
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;