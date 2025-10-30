import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Network, Clock, CreditCard, RotateCcw, Package, Home, MapPin, Truck, Cpu, Users, Calendar, Smartphone, Wallet, DollarSign, Zap, Star, Award, Shield, CheckCircle, ArrowRight, Download } from "lucide-react";
import { useEffect } from "react";
// Import images
import heroBackground from "@/assets/why-choose-us/hero-background.jpg";
import deliveryPartner from "@/assets/why-choose-us/delivery-partner.jpg";
import deliveryDriver from "@/assets/why-choose-us/delivery-driver.jpg";
import mobileApp from "@/assets/why-choose-us/mobile-app.jpg";
import networkVisualization from "@/assets/why-choose-us/network-visualization.jpg";
const WhyChooseUs = () => {
  const whyChooseFeatures = [{
    icon: Network,
    title: "Multi-modal network (Air + Surface)",
    description: "Comprehensive delivery network covering air and surface transportation"
  }, {
    icon: Clock,
    title: "Same day & next day delivery",
    description: "Fast delivery options to meet urgent requirements"
  }, {
    icon: CreditCard,
    title: "Cash / digital payment solutions",
    description: "Flexible payment options for customers and businesses"
  }, {
    icon: RotateCcw,
    title: "Reverse logistics partner",
    description: "Efficient return and exchange management"
  }, {
    icon: Package,
    title: "Handling of 5 kg to 30 kg weight parcels",
    description: "Versatile package handling capabilities"
  }, {
    icon: Home,
    title: "Door as a service",
    description: "Complete door-to-door delivery solutions"
  }];
  const businessFeatures = [{
    icon: MapPin,
    title: "Our Footprint",
    description: "We have an extensive reach and strong footprint with over 3,700+ cities, that connect seamlessly to unified across 28 states with a smart optimizing, efficient and intelligent logistics solutions across India."
  }, {
    icon: Truck,
    title: "Dedicated Fleet Network",
    description: "Our integrated transportation network consisting of over 1,300 hubs, links, services through dedicated fleet runs, thereby streamlined speedily to transport anywhere in India."
  }, {
    icon: Cpu,
    title: "Technology and Automation",
    description: "Our state-of-the-technology and automation is efficiently deliver orders and enabling. We use AI/ML systems to optimize routes, improve inventory management and more."
  }, {
    icon: Users,
    title: "Professional and Skilled Force",
    description: "Our highly experienced and skilled front sector highly-trained to driving performance and response 24 x 7 everyday. They are committed to providing excellent delivery experience."
  }, {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Our optimized end-to-end operations enhance the speed of our quick-to-end delivery services leading to efficiency through enhanced customer satisfaction."
  }];
  const partnerBenefits = ["Full-time and part-time delivery job opportunities", "Support with 2-wheeler training", "Deliver food, groceries, or E-commerce products"];
  const appFeatures = [{
    icon: Wallet,
    title: "Best Payouts",
    description: "Receive a guaranteed minimum daily income based on the number of orders delivered."
  }, {
    icon: DollarSign,
    title: "Extra Income",
    description: "Earn additional income with weekend incentives, distance pay for trips over 2 kms, and rain surge bonuses."
  }, {
    icon: Zap,
    title: "Fast Payments",
    description: "Get paid every Thursday for the orders completed in the previous week."
  }];
  const driverBenefits = ["Monthly Earning ₹35,000", "Weekly Payments", "Exciting Bonuses & Incentives", "Flexible Working Hours", "Insurance Benefits"];

  // SEO: dynamic title, description, canonical
  useEffect(() => {
    document.title = "Why Choose Us | MiniBharat Logistics";
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute("content", "Why Choose Us - Seamless logistics, nationwide reach, partner benefits, and driver earnings with our technology-first logistics network.");
    }
    const linkEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement || document.createElement("link");
    linkEl.setAttribute("rel", "canonical");
    linkEl.setAttribute("href", window.location.href);
    if (!linkEl.parentElement) document.head.appendChild(linkEl);
  }, []);
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Why Choose Us Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjY2MDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-orange-dark to-accent bg-clip-text text-transparent mb-6 leading-tight">
              Why Choose Our Express
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leading logistics solutions with comprehensive services and nationwide reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float border border-primary/20"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float border border-accent/20" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-light/20 rounded-full animate-float border border-orange-primary/20" style={{
        animationDelay: '2s'
      }}></div>
      </section>

      {/* Seamless Logistics Section */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-muted/30 via-background to-secondary/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-orange-dark bg-clip-text text-transparent mb-6">
              Seamless logistics for your e-commerce business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions powered by technology and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return <Card key={index} className="bg-card/90 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group border border-border/50 hover:border-primary/20" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-dark rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    <div className="mt-6">
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-primary/20 hover:border-primary">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <img src={networkVisualization} alt="Logistics network visualization background" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-orange-light/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Why Join Us as a <span className="bg-gradient-to-r from-primary to-orange-dark bg-clip-text text-transparent">Delivery Partner?</span>
              </h2>
              <div className="space-y-6 mb-10">
                {partnerBenefits.map((benefit, index) => <div key={index} className="flex items-center text-foreground text-lg hover:text-primary transition-colors animate-fade-in group" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-orange-dark rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-md">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span>{benefit}</span>
                  </div>)}
              </div>
              
              <div className="flex items-center space-x-4 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                <img src={deliveryPartner} alt="Delivery Partner" className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-lg" loading="lazy" />
                <div>
                  <p className="text-muted-foreground italic">"Best decision I made for my career. Great income and flexibility!"</p>
                  <p className="text-primary font-semibold mt-1">- Rajesh Kumar, Partner</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="rounded-2xl p-10 text-center relative overflow-hidden bg-gradient-to-br from-primary via-orange-primary to-orange-dark shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgyek0zNiA0VjBoLTJ2NGgtNHYyaDR2NEgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8 relative z-10">
                  Here's what you need to partner with us:
                </h3>
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-8 border border-border/50 relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary/10 rounded-lg p-4 aspect-square flex items-center justify-center border border-primary/20">
                      <CreditCard className="w-8 h-8 text-primary" />
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 aspect-square flex items-center justify-center border border-primary/20">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground font-bold text-lg mb-4">PAN & AADHAR CARD</p>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-dark rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <Button size="lg" className="mt-8 bg-card text-primary hover:bg-card/90 hover:scale-105 font-bold text-lg px-8 py-4 relative z-10 transition-all shadow-lg">
                  Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Earnings Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-muted/20 via-background to-primary/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Want to earn as a delivery driver? <br />
              <span className="bg-gradient-to-r from-primary to-orange-dark bg-clip-text text-transparent">Be your own boss with us!</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Earn up to Rs. 35,000 working part-time or full-time, Deliver packages and more. Start in just a easy steps.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-orange-dark text-primary-foreground font-bold text-lg px-8 py-4 animate-scale-in hover:scale-105 transition-all shadow-lg">
              Sign up and join today! <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-12 relative overflow-hidden shadow-xl border border-border/50">
              {/* Central Image */}
              <div className="text-center mb-12 relative z-10">
                <div className="relative inline-block">
                  <img src={deliveryDriver} alt="Happy Delivery Driver" className="w-64 h-64 rounded-2xl object-cover shadow-lg mx-auto border-4 border-primary/20" loading="lazy" />
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary to-orange-dark rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Floating Benefits */}
              <div className="absolute top-8 left-8 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float hover:scale-105 transition-transform cursor-pointer border border-border/50">
                <div className="flex items-center space-x-2">
                  <Wallet className="w-5 h-5 text-primary" />
                  <p className="font-bold text-foreground">Monthly Earning ₹35,000</p>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float hover:scale-105 transition-transform cursor-pointer border border-border/50" style={{
              animationDelay: '0.5s'
            }}>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <p className="font-bold text-foreground">Weekly Payments</p>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-8 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float hover:scale-105 transition-transform cursor-pointer border border-border/50" style={{
              animationDelay: '1s'
            }}>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <p className="font-bold text-foreground">Exciting Bonuses</p>
                </div>
              </div>
              
              <div className="absolute bottom-24 right-8 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float hover:scale-105 transition-transform cursor-pointer border border-border/50" style={{
              animationDelay: '1.5s'
            }}>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="font-bold text-foreground">Flexible Hours</p>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float hover:scale-105 transition-transform cursor-pointer border border-border/50" style={{
              animationDelay: '2s'
            }}>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <p className="font-bold text-foreground">Insurance Benefits</p>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 opacity-3">
                <div className="w-full h-full" style={{
                backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDE4YzMuODY2IDAgNy0zLjEzNCA3LTdzLTMuMTM0LTctNy03LTcgMy4xMzQtNyA3IDMuMTM0IDcgNyA3eiIgZmlsbD0iI2ZmNjYwMCIgZmlsbC1vcGFjaXR5PSIwLjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==")'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-orange-light/20">
        <div className="absolute inset-0 opacity-5">
          <img src={mobileApp} alt="Mobile App Background" className="w-full h-full object-cover" loading="lazy" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download the App to Register, <br />
              <span className="bg-gradient-to-r from-primary to-orange-dark bg-clip-text text-transparent">Deliver & Earn</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with our comprehensive mobile app designed for delivery partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {appFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in bg-card/90 backdrop-blur-sm border border-border/50" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <IconComponent className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* App Registration */}
          <div className="rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-orange-primary to-orange-dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
              <div className="text-center md:text-left order-2 md:order-1">
                <div className="relative inline-block">
                  <img src={mobileApp} alt="Mobile App" className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-2xl mx-auto animate-scale-in border-4 border-white/20" loading="lazy" />
                  <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-card rounded-full flex items-center justify-center animate-pulse shadow-lg">
                    <Download className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="text-primary-foreground order-1 md:order-2">
                <div className="bg-card/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Register with the Partner App</h3>
                  <p className="text-base md:text-xl mb-6 md:mb-8 leading-relaxed text-primary-foreground/90">
                    Install the partner app. Upload your PAN & AADHAR to get registered and start earning immediately.
                  </p>
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    <div className="flex items-center text-sm md:text-lg">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-card mr-3 flex-shrink-0" />
                      <span>Quick registration process</span>
                    </div>
                    <div className="flex items-center text-sm md:text-lg">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-card mr-3 flex-shrink-0" />
                      <span>Real-time order tracking</span>
                    </div>
                    <div className="flex items-center text-sm md:text-lg">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-card mr-3 flex-shrink-0" />
                      <span>Instant payment notifications</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-card text-primary hover:bg-card/90 hover:scale-105 font-bold flex-1 transition-all shadow-lg w-full sm:w-auto">
                      <Download className="w-5 h-5 mr-2" />
                      Download for Android
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Comparison Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-orange-dark to-accent bg-clip-text text-transparent mb-6">
              Compare Our 5 Franchise Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mini Bharat Logistics offers diverse franchise opportunities backed by Flipkart's guaranteed volumes
            </p>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-primary/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1200px]">
                <thead className="bg-gradient-to-r from-primary/10 to-orange-primary/10">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-primary border-b border-primary/20">
                      Feature / Model
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-primary border-b border-primary/20">
                      LMA (Last Mile Associate)
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-primary border-b border-primary/20">
                      ODH/MDH (Outsourced Hub)
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-primary border-b border-primary/20">
                      Grocery (HIH Model)
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-primary border-b border-primary/20">
                      Large HIH (Heavy Item Handling)
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-primary border-b border-primary/20">
                      APM (All Products Movement)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Business Type</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Deliver Flipkart shipments (forward + returns)</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Operate Flipkart delivery hubs for bulk shipments & returns</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Deliver daily essentials (Food, Veg, Chillers, Non-Food)</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Handle bulky shipments – Furniture, Appliances</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Seller pickups & returns (forward + reverse logistics)</td>
                  </tr>
                  <tr className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Assured Orders</td>
                    <td className="px-6 py-4 text-sm"><span className="text-green-600 font-semibold">✅</span> Daily shipments</td>
                    <td className="px-6 py-4 text-sm"><span className="text-green-600 font-semibold">✅</span> Hub-level allocation</td>
                    <td className="px-6 py-4 text-sm"><span className="text-green-600 font-semibold">✅</span> Daily grocery shipments</td>
                    <td className="px-6 py-4 text-sm"><span className="text-green-600 font-semibold">✅</span> Large-item prepaid & COD</td>
                    <td className="px-6 py-4 text-sm"><span className="text-green-600 font-semibold">✅</span> Seller pickups & returns daily</td>
                  </tr>
                  <tr className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Revenue Model</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Per-shipment rate card + SLA incentives</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Per-shipment rate card + incentives (₹1–₹1.5 per shipment for {'>'}93% conversion)</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Per-order payouts + festive premium rates</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Per-shipment + seasonal premium rates</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Slab-based per-shipment payout (Gold/Silver/Bronze)</td>
                  </tr>
                  <tr className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Extra Income</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Conversion incentives</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">State-level bonuses</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Open Box Delivery + COD handling</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Open Box Delivery + Reverse handling</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Volume-based higher margins</td>
                  </tr>
                  <tr className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Cash Flow</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">COD remitted same day</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">COD settled in 2 days</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">COD in 24–48 hrs + invoices in 30 days</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Invoices cleared in 30 days</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">COD same day + invoices in 30 days</td>
                  </tr>
                  <tr className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Scalability</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Expand by adding PIN codes gradually</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Scale hubs across Tier I–IV cities</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Expand clusters across Tier I–IV</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Operate hubs in metro & Tier I/II cities</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Pan-India expansion across multiple hubs</td>
                  </tr>
                  <tr className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Support Provided</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Flipkart MIS, tracking, training</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Flipkart SOP, MIS, Hub training</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Flipkart totes, consumables, app & training</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Flipkart SOP, MIS & operational training</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Flipkart MIS, EHS compliance & IT support</td>
                  </tr>
                  <tr className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Best Suited For</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Low/Medium investment entrepreneurs</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Medium/High investment operators</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Partners seeking daily demand & stability</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Entrepreneurs targeting premium profits</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Partners focusing on seller pickups & returns</td>
                  </tr>
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary bg-muted/5">Earning Potential (Illustrative)</td>
                    <td className="px-6 py-4 text-lg font-bold text-orange-primary">₹1–5 Lakhs/month</td>
                    <td className="px-6 py-4 text-lg font-bold text-orange-primary">₹4–10 Lakhs/month</td>
                    <td className="px-6 py-4 text-lg font-bold text-orange-primary">₹9–11 Lakhs/month</td>
                    <td className="px-6 py-4 text-lg font-bold text-orange-primary">₹12–15 Lakhs/month</td>
                    <td className="px-6 py-4 text-lg font-bold text-orange-primary">₹3–8 Lakhs/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden space-y-6">
            {[{
            name: "LMA (Last Mile Associate)",
            color: "from-blue-500 to-blue-600",
            business: "Deliver Flipkart shipments (forward + returns)",
            orders: "Daily shipments",
            revenue: "Per-shipment rate card + SLA incentives",
            extra: "Conversion incentives",
            cashflow: "COD remitted same day",
            scale: "Expand by adding PIN codes gradually",
            support: "Flipkart MIS, tracking, training",
            suited: "Low/Medium investment entrepreneurs",
            earning: "₹1–5 Lakhs/month"
          }, {
            name: "ODH/MDH (Outsourced Hub)",
            color: "from-green-500 to-green-600",
            business: "Operate Flipkart delivery hubs for bulk shipments & returns",
            orders: "Hub-level allocation",
            revenue: "Per-shipment rate card + incentives (₹1–₹1.5 per shipment for >93% conversion)",
            extra: "State-level bonuses",
            cashflow: "COD settled in 2 days",
            scale: "Scale hubs across Tier I–IV cities",
            support: "Flipkart SOP, MIS, Hub training",
            suited: "Medium/High investment operators",
            earning: "₹4–10 Lakhs/month"
          }, {
            name: "Grocery (HIH Model)",
            color: "from-orange-500 to-orange-600",
            business: "Deliver daily essentials (Food, Veg, Chillers, Non-Food)",
            orders: "Daily grocery shipments",
            revenue: "Per-order payouts + festive premium rates",
            extra: "Open Box Delivery + COD handling",
            cashflow: "COD in 24–48 hrs + invoices in 30 days",
            scale: "Expand clusters across Tier I–IV",
            support: "Flipkart totes, consumables, app & training",
            suited: "Partners seeking daily demand & stability",
            earning: "₹9–11 Lakhs/month"
          }, {
            name: "Large HIH (Heavy Item Handling)",
            color: "from-purple-500 to-purple-600",
            business: "Handle bulky shipments – Furniture, Appliances",
            orders: "Large-item prepaid & COD",
            revenue: "Per-shipment + seasonal premium rates",
            extra: "Open Box Delivery + Reverse handling",
            cashflow: "Invoices cleared in 30 days",
            scale: "Operate hubs in metro & Tier I/II cities",
            support: "Flipkart SOP, MIS & operational training",
            suited: "Entrepreneurs targeting premium profits",
            earning: "₹12–15 Lakhs/month"
          }, {
            name: "APM (All Products Movement)",
            color: "from-red-500 to-red-600",
            business: "Seller pickups & returns (forward + reverse logistics)",
            orders: "Seller pickups & returns daily",
            revenue: "Slab-based per-shipment payout (Gold/Silver/Bronze)",
            extra: "Volume-based higher margins",
            cashflow: "COD same day + invoices in 30 days",
            scale: "Pan-India expansion across multiple hubs",
            support: "Flipkart MIS, EHS compliance & IT support",
            suited: "Partners focusing on seller pickups & returns",
            earning: "₹3–8 Lakhs/month"
          }].map((model, index) => <Card key={index} className="bg-white/90 backdrop-blur-sm border-primary/20 overflow-hidden hover:shadow-xl transition-all">
                <div className={`bg-gradient-to-r ${model.color} p-4 text-white`}>
                  <h3 className="text-xl font-bold">{model.name}</h3>
                  <p className="text-2xl font-bold mt-2">{model.earning}</p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Business Type</p>
                    <p className="text-sm text-muted-foreground">{model.business}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Assured Orders</p>
                    <p className="text-sm"><span className="text-green-600 font-semibold">✅</span> {model.orders}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Revenue Model</p>
                    <p className="text-sm text-muted-foreground">{model.revenue}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Extra Income</p>
                    <p className="text-sm text-muted-foreground">{model.extra}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Cash Flow</p>
                    <p className="text-sm text-muted-foreground">{model.cashflow}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Scalability</p>
                    <p className="text-sm text-muted-foreground">{model.scale}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Support Provided</p>
                    <p className="text-sm text-muted-foreground">{model.support}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1">Best Suited For</p>
                    <p className="text-sm text-muted-foreground">{model.suited}</p>
                  </div>
                  
                </CardContent>
              </Card>)}
          </div>


          {/* Highlights Section */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Guaranteed Flipkart Volumes</h3>
                    <p className="text-sm text-muted-foreground">All models guarantee Flipkart volumes → no client hunting required</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Transparent Rate Cards</h3>
                    <p className="text-sm text-muted-foreground">Transparent rate cards & payouts → predictable monthly income</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Multiple Income Streams</h3>
                    <p className="text-sm text-muted-foreground">Forward, Returns, COD, Grocery, Large, Seller Pickups</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Network className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Scalable Nationwide</h3>
                    <p className="text-sm text-muted-foreground">Start with one model & expand into more across India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Fast ROI</h3>
                    <p className="text-sm text-muted-foreground">Assured shipments + strong COD cycle for quick returns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Button variant="cta" size="sm" className="flex-shrink-0">
                    Explore Models
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-sm text-muted-foreground">Choose the perfect franchise model for your business goals</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default WhyChooseUs;