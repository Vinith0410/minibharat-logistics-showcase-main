import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Truck, 
  Package, 
  ShoppingCart, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Users,
  Target
} from "lucide-react";
import courierImg from "@/assets/services/courier-services.jpg";
import ecommerceImg from "@/assets/services/ecommerce-logistics.jpg";
import warehouseImg from "@/assets/services/logistics-warehouse.jpg";

const Services = () => {
  useEffect(() => {
    document.title = "Business Models - Franchise Opportunities | Mini Bharat Logistics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Mini Bharat Logistics franchise business models: APM, Large HIH, and Grocery. Find the perfect franchise opportunity with assured volumes and transparent payouts.');
    }
  }, []);

  const businessModels = [
    {
      id: "apm",
      title: "APM Business Model",
      icon: Truck,
      path: "/apm-business-model",
      image: courierImg,
      tagline: "Drive Seller Pickups & Returns, Earn Assured Profits",
      description: "The APM (All Products Movement) Model lets franchise partners manage seller pickups & returns for Mini Bharat Logistics. Get assured shipment allocations, transparent per-shipment earnings, and strong growth potential.",
      features: [
        "Assured Daily Volumes",
        "Transparent Rate Card",
        "Fast Delivery Timelines",
        "Quick Cash Flow"
      ],
      highlight: "₹6.6-14 Lakhs/month",
      badge: "Most Popular"
    },
    {
      id: "large-hih",
      title: "Large HIH Business Model",
      icon: Package,
      path: "/large-hih-business-model",
      image: warehouseImg,
      tagline: "Heavy Item Handling - Premium Logistics Franchise",
      description: "Specialize in heavy item deliveries including appliances, furniture, and bulky items. Earn premium profits with assured volumes and handle high-value shipments with specialized equipment.",
      features: [
        "Premium Seasonal Payouts",
        "Earn from Both Ways",
        "Assured Daily Volumes",
        "Two-Man Delivery Support"
      ],
      highlight: "₹8-16 Lakhs/month",
      badge: "High Revenue"
    },
    {
      id: "grocery",
      title: "Grocery Business Model",
      icon: ShoppingCart,
      path: "/grocery-business-model",
      image: ecommerceImg,
      tagline: "Flipkart-Backed Grocery Logistics Franchise",
      description: "Handle daily grocery deliveries with Flipkart-backed business model. Assured daily orders, multiple revenue streams from forward & reverse logistics, and fast ROI with everyday essentials.",
      features: [
        "Assured Daily Orders",
        "Stable Demand",
        "High Revenue Orders",
        "Multiple Revenue Streams"
      ],
      highlight: "₹10-20 Lakhs/month",
      badge: "Fast ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />
      
      {/* Hero Section - Light & Professional */}
      <section className="relative py-12 md:py-20 lg:py-24 px-4 overflow-hidden bg-white">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge className="mb-4 md:mb-6 px-4 md:px-6 py-1.5 md:py-2 text-xs font-semibold bg-orange-50 text-[hsl(var(--orange-primary))] border border-orange-200">
              FRANCHISE OPPORTUNITIES
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-slate-900 leading-tight px-4">
              Choose Your
              <span className="block text-[hsl(var(--orange-primary))]">Business Model</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
              Three proven franchise models designed for different markets and investment levels
            </p>
          </div>
        </div>
      </section>

      {/* Business Models - Clean Card Layout */}
      <section className="py-8 md:py-12 lg:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {businessModels.map((model, idx) => {
            const IconComponent = model.icon;
            const isEven = idx % 2 === 0;
            
            return (
              <div 
                key={model.id}
                className="mb-8 md:mb-12 lg:mb-16 last:mb-0"
              >
                <Card className="overflow-hidden border-2 border-slate-200 hover:border-[hsl(var(--orange-primary))]/30 transition-all duration-300 hover:shadow-xl">
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image Side */}
                    <div className={`relative overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                        <Badge className="px-3 md:px-4 py-1 md:py-1.5 text-xs font-bold bg-white/95 text-[hsl(var(--orange-primary))] border-0 shadow-lg backdrop-blur-sm">
                          {model.badge}
                        </Badge>
                      </div>
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={model.image} 
                          alt={model.title}
                          className="w-full h-full object-cover md:hover:scale-105 transition-transform duration-700"
                        />
                      </AspectRatio>
                    </div>
                    
                    {/* Content Side */}
                    <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      {/* Icon & Title */}
                      <div className="flex items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[hsl(var(--orange-primary))]/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[hsl(var(--orange-primary))]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 break-words">
                            {model.title}
                          </h2>
                          <p className="text-xs sm:text-sm font-semibold text-[hsl(var(--orange-primary))] break-words">
                            {model.tagline}
                          </p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4 md:mb-6">
                        {model.description}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                        {model.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-xs md:text-sm text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Earning Highlight */}
                      <div className="bg-slate-50 p-4 md:p-5 rounded-xl mb-4 md:mb-6 border border-slate-200">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                              Monthly Earning Potential
                            </p>
                            <p className="text-2xl md:text-3xl font-black text-[hsl(var(--orange-primary))] break-words">
                              {model.highlight}
                            </p>
                          </div>
                          <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[hsl(var(--orange-primary))]/20 flex-shrink-0" />
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Link to={model.path} className="block w-full">
                        <Button 
                          className="w-full bg-[hsl(var(--orange-primary))] hover:bg-[hsl(var(--orange-dark))] text-white font-semibold rounded-lg group"
                          size="lg"
                        >
                          Explore Full Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Partner Section - Light Theme */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">
              Why Partner With <span className="text-[hsl(var(--orange-primary))]">Mini Bharat</span>?
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Industry-leading benefits designed to accelerate your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: TrendingUp, title: "High ROI", desc: "12-18 month payback with scalable income" },
              { icon: Package, title: "Assured Volumes", desc: "Guaranteed daily shipments" },
              { icon: Shield, title: "Transparent Payouts", desc: "Clear rates & timely settlements" },
              { icon: Users, title: "24/7 Support", desc: "Comprehensive assistance" }
            ].map((item, idx) => (
              <Card 
                key={idx}
                className="p-5 md:p-6 text-center border-2 border-slate-200 hover:border-[hsl(var(--orange-primary))]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--orange-primary))]/10 to-[hsl(var(--orange-primary))]/5 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-[hsl(var(--orange-primary))]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base md:text-lg">{item.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;