import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle, Mail, ChevronLeft, ChevronRight, Truck, Warehouse, ShoppingCart, Package } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";
import warehouseImage from "@/assets/warehouse-interior.jpg";
import teamImage from "@/assets/logistics-team.jpg";
import slider1 from "@/assets/slider/1.jpg";
import slider2 from "@/assets/slider/2.jpg";
import slider3 from "@/assets/slider/3.jpg";

const HeroSection = () => {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedInvestments, setSelectedInvestments] = useState<string[]>([]);
  const [formStep, setFormStep] = useState(1);

  const slides = [
    {
      image: slider1,
      title: "Revolutionizing Logistics",
      subtitle: "Across Bharat",
      description: "Connecting businesses nationwide with innovative logistics solutions. Experience seamless delivery, storage, and transportation services.",
      cta: "Explore Solutions"
    },
    {
      image: slider2,
      title: "Advanced Warehousing",
      subtitle: "Solutions",
      description: "State-of-the-art storage facilities with cutting-edge inventory management systems for optimal efficiency.",
      cta: "View Warehouses"
    },
    {
      image: slider3,
      title: "Trusted Logistics",
      subtitle: "Partner",
      description: "Join thousands of businesses who trust us with their logistics needs. Professional, reliable, and efficient service.",
      cta: "Join Network"
    }
  ];

  const businessModels = [
    {
      title: "LMA",
      description: "Last Mile Delivery Solutions",
      icon: Truck
    },
    {
      title: "Warehouse",
      description: "Storage & Fulfillment Services",
      icon: Warehouse
    },
    {
      title: "Grocery",
      description: "Grocery Logistics & Distribution",
      icon: ShoppingCart
    },
    {
      title: "Hub",
      description: "Distribution Hub Operations",
      icon: Package
    }
  ];

  const partnerPlans = [
    { value: "local-vendor", label: "Local Vendor" },
    { value: "area-vendor", label: "Area Vendor" },
    { value: "dist-vendor", label: "District Vendor" },
    { value: "state-vendor", label: "State Vendor" },
    { value: "channel-partner", label: "Channel Partner" },
    { value: "business-support", label: "Business Support (Corporate Partner)" }
  ];

  const investmentOptions = [
    { value: "75000", label: "₹75,000" },
    { value: "109000", label: "₹1,09,000" },
    { value: "135000", label: "₹1,35,000" },
    { value: "165000", label: "₹1,65,000" },
    { value: "199000", label: "₹1,99,000" },
    { value: "355000", label: "₹3,55,000" }
  ];

  const handleInvestmentToggle = (value: string) => {
    setSelectedInvestments(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const socialIcons = [
    { icon: Facebook, label: "Facebook", color: "text-blue-600" },
    { icon: Instagram, label: "Instagram", color: "text-pink-600" },
    { icon: Twitter, label: "Twitter", color: "text-blue-400" },
    { icon: Linkedin, label: "LinkedIn", color: "text-blue-700" },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Slider */}
      <div className="relative min-h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {slides[currentSlide].title}{" "}
                <span className="text-orange-primary">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                {slides[currentSlide].cta}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-orange-primary" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        {/* Social Media Button */}
        <div className="relative">
          <Button
            variant="cta"
            size="icon"
            className="w-12 h-12 rounded-full shadow-xl"
            onClick={() => setIsSocialOpen(!isSocialOpen)}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          
          {isSocialOpen && (
            <div className="absolute right-16 top-0 flex space-x-2 bg-white rounded-lg p-2 shadow-xl">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <button
                    key={index}
                    className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${social.color}`}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Enquire Now Button */}
        <Button
          variant="cta"
          size="icon"
          className="w-12 h-12 rounded-full shadow-xl"
          onClick={() => setIsEnquireOpen(true)}
        >
          <Mail className="w-6 h-6" />
        </Button>
      </div>

      {/* Enquire Modal */}
      <Dialog open={isEnquireOpen} onOpenChange={(open) => {
        setIsEnquireOpen(open);
        if (!open) {
          setFormStep(1);
          setSelectedService("");
          setSelectedInvestments([]);
        }
      }}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Business Inquiry Form
              <div className="text-sm font-normal text-muted-foreground mt-2">
                Step {formStep} of 2
              </div>
            </DialogTitle>
          </DialogHeader>

          <form className="space-y-6 p-4" onSubmit={(e) => e.preventDefault()}>
            {/* Step 1: Business Model Selection */}
            {formStep === 1 && (
              <>
                <div>
                  <Label className="text-base font-semibold mb-4 block">Choose Your Business Model *</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    { businessModels.map((model, index) => {
                      const IconComponent = model.icon;
                      return (
                        <div
                          key={index}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedService === model.title
                              ? "border-orange-primary bg-orange-primary/10"
                              : "hover:border-orange-primary hover:shadow-lg"
                          }`}
                          onClick={() => setSelectedService(model.title)}
                        >
                          <IconComponent className="w-10 h-10 mx-auto mb-2 text-orange-primary" />
                          <h3 className="font-semibold text-center text-sm mb-1">{model.title}</h3>
                          <p className="text-xs text-gray-600 text-center">{model.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    variant="cta" 
                    size="lg"
                    onClick={() => {
                      if (selectedService) {
                        setFormStep(2);
                      }
                    }}
                    disabled={!selectedService}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}

            {/* Step 2: Personal Details & Investment */}
            {formStep === 2 && (
              <>
                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email ID *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="10-digit mobile number" required />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input id="pincode" placeholder="6-digit pincode" required />
                  </div>
                </div>

                {/* Partner Plan - Only for LMA */}
                {selectedService === "LMA" && (
                  <div>
                    <Label htmlFor="partnerPlan">Choose Plan *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Partner Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-[100]">
                        {partnerPlans.map((plan) => (
                          <SelectItem key={plan.value} value={plan.value}>
                            {plan.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Investment Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Investment Desired *</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {investmentOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={`investment-${option.value}`}
                          checked={selectedInvestments.includes(option.value)}
                          onCheckedChange={() => handleInvestmentToggle(option.value)}
                        />
                        <Label
                          htmlFor={`investment-${option.value}`}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-orange-primary/10 rounded-lg">
                    <p className="text-sm font-medium">Recommended: <span className="text-orange-primary">₹1,25,000</span></p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setFormStep(1)}
                  >
                    Back
                  </Button>
                  <Button variant="cta" type="submit" size="lg">
                    Submit Inquiry
                  </Button>
                </div>
              </>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;