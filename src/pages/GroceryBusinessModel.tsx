import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import groceryDeliveryImage from "@/assets/grocery-delivery.jpg";
import { 
  Package,
  DollarSign,
  Star,
  Zap,
  Shield,
  MapPin,
  CheckCircle,
  ArrowRight,
  TrendingUp
} from "lucide-react";

const GroceryBusinessModel = () => {
  useEffect(() => {
    document.title = "Grocery Business Model - Flipkart-Backed Franchise | Mini Bharat Logistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join Mini Bharat Logistics Grocery Franchise. Flipkart-backed business model with assured daily volumes, multiple revenue streams, and fast ROI. Start your grocery delivery franchise today.");
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Assured Daily Orders",
      description: "Fixed shipments of prepaid & COD groceries from Flipkart"
    },
    {
      icon: DollarSign,
      title: "Multiple Income Streams",
      description: "Forward deliveries + returns + COD + open box deliveries"
    },
    {
      icon: Star,
      title: "Premium Festival Payouts",
      description: "Extra rates during Big Billion Days & peak season"
    },
    {
      icon: Zap,
      title: "Quick Payment Cycle",
      description: "COD remitted within 24–48 hrs, invoices cleared in 30 days"
    },
    {
      icon: Shield,
      title: "Performance Incentives",
      description: "Higher income for SLA & customer experience compliance"
    },
    {
      icon: MapPin,
      title: "Scalable Pan-India Model",
      description: "Start with 1 cluster, expand nationwide"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Order Assignment",
      description: "Mini Bharat assigns daily grocery orders for your cluster"
    },
    {
      step: "2", 
      title: "Manage Deliveries",
      description: "Handle deliveries, returns, and COD with your team"
    },
    {
      step: "3",
      title: "Earn Per Order",
      description: "Payments earned per order as per rate card + festival premiums"
    },
    {
      step: "4",
      title: "Scale & Grow",
      description: "Expand to multiple clusters → higher volumes → increased income"
    }
  ];

  const franchiseBenefits = [
    "Guaranteed Business Security – Flipkart agreement ensures steady inflow",
    "Daily Demand = No Off-Season Risk – Groceries are essential year-round",
    "Fast ROI – With COD settlements in 24–48 hrs, cash flow stays strong",
    "High-Income Potential – Larger orders, premium season rates, open box services",
    "Scalable Nationwide – Operate clusters in Tier I–IV cities",
    "Trusted Partnership – Direct tie-up with Flipkart, backed by strict SOPs & compliance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section - Fresh & Clean */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-emerald-100/40" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(34 197 94 / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge className="px-6 py-3 text-sm font-black bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-xl">
                🥬 FLIPKART-BACKED FRANCHISE
              </Badge>
              
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                Grocery<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Delivery
                </span><br/>
                Franchise
              </h1>
              
              <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                Own a Flipkart-Backed Grocery Franchise with Assured Daily Business
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Run a Grocery delivery franchise under Flipkart's official agreement. Guaranteed daily shipments, multiple revenue streams, and fast ROI – all backed by India's largest e-commerce brand.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-10 py-7 text-lg font-black bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-2xl shadow-2xl hover:scale-105 transition-all">
                  Start Your Franchise <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-10 py-7 text-lg font-black border-2 border-slate-900 text-slate-900 rounded-2xl hover:bg-slate-900 hover:text-white transition-all">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-[3rem] blur-3xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={groceryDeliveryImage} alt="Fresh grocery delivery" className="w-full h-auto" />
                
                {/* Floating Stats */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <p className="text-sm font-bold text-slate-600 mb-1">Monthly Earning</p>
                  <p className="text-3xl font-black text-green-600">₹10-20L</p>
                </div>
                
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <p className="text-sm font-bold text-slate-600 mb-1">Daily Orders</p>
                  <p className="text-3xl font-black text-emerald-600">1000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Card Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Grocery?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Essential business with year-round demand and multiple income streams
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="group border-2 border-slate-200 hover:border-green-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/30">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-slate-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Works</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-3xl font-black text-white shadow-2xl group-hover:scale-110 transition-all">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all border-2 border-transparent group-hover:border-green-600">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Benefits */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Franchise <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Benefits</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {franchiseBenefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all border-2 border-green-200/50 hover:border-green-600">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg font-semibold text-slate-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Potential */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Earning <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Potential</span>
            </h2>
            <p className="text-xl text-slate-300">Tier II Grocery Cluster - Real Numbers</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 border-0 shadow-2xl hover:scale-105 transition-all">
              <CardContent className="p-10 text-center text-white">
                <div className="text-sm font-bold uppercase tracking-wider mb-4 opacity-90">Regular Operations</div>
                <div className="text-5xl font-black mb-4">₹18L</div>
                <div className="text-sm opacity-90 mb-6">Per Month</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-medium">1,000 orders/day × Avg ₹60 per order</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-600 to-red-600 border-0 shadow-2xl hover:scale-105 transition-all">
              <CardContent className="p-10 text-center text-white">
                <div className="text-sm font-bold uppercase tracking-wider mb-4 opacity-90">Festival Season</div>
                <div className="text-5xl font-black mb-4">₹20-21L</div>
                <div className="text-sm opacity-90 mb-6">Per Month</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-medium">With festive premium payout</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Badge className="px-8 py-4 text-lg font-black bg-white text-slate-900 shadow-2xl">
              <TrendingUp className="w-5 h-5 mr-2" />
              Assured daily volumes = fast breakeven & high growth
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Ready to Start Your<br/>Grocery Franchise?
            </h2>
            
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              Join our network of successful partners delivering essential groceries across India
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Assured Orders", "Fast ROI", "Festival Premiums", "Flipkart Partnership"].map((badge, idx) => (
                <Badge key={idx} variant="outline" className="px-6 py-3 border-2 border-white/50 text-white text-base font-bold hover:bg-white/20 transition-all">
                  {badge}
                </Badge>
              ))}
            </div>
            
            <Button size="lg" className="px-16 py-8 text-xl font-black bg-white text-green-600 hover:bg-slate-100 shadow-2xl hover:scale-110 transition-all rounded-2xl">
              Apply Now – Become a Grocery Franchise Partner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroceryBusinessModel;