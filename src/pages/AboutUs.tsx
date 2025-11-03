import   { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Eye, Users, Zap, Lightbulb, MapPin, Building2, Truck, Globe, Award, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndiaMap from "@/components/IndiaMap";
import warehouseInterior from "@/assets/warehouse-interior.jpg";
import modern from "@/assets/services/modern2.jpg";
import new1 from "@/assets/hero-logistics.jpg";
import office1 from "@/assets/gallery/Office/office2.jpg";
import office2 from "@/assets/gallery/Office/office3.jpg";
import cel2 from "@/assets/gallery/Celebrations/img1.jpg";
import cel3 from "@/assets/gallery/Celebrations/img3.jpg";
import trip1 from "@/assets/gallery/Trips/trip1.jpg";
import trip2 from "@/assets/gallery/Trips/trip2.jpg";
const AboutUs = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const coreValues = [{
    icon: Shield,
    title: "Integrity",
    description: "We commit to uphold the strength of honest and ethical values in all our interactions."
  }, {
    icon: Heart,
    title: "Commitment",
    description: "We are devoted to delivering on our promises every single time."
  }, {
    icon: Eye,
    title: "Openness",
    description: "We embrace transparency and inclusiveness in decision-making and partnerships."
  }, {
    icon: Users,
    title: "Respect",
    description: "We treat our team, partners, and clients with empathy and professionalism."
  }, {
    icon: Zap,
    title: "Passion",
    description: "We are deeply passionate about logistics and delivering customer delight."
  }, {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously learn, evolve, and upgrade our systems for smarter solutions."
  }];
  const milestones = [
  {
    year: "2015",
    event: "Founded with a vision",
    description: "Started to simplify and empower Indian logistics",
    details: [
      "Xpressbees starts delivering 90,000 shipments a day",
      "First in the nation to introduce next day delivery"
    ]
  },
  {
    year: "2017",
    event: "100+ cities expansion",
    description: "Tech-enabled last-mile delivery across India",
    details: [
      "Tech-enabled last-mile delivery across India",
      "Expanded to 100+ cities with advanced tracking"
    ]
  },
  {
    year: "2019",
    event: "500+ logistics centers",
    description: "Crossed nationwide coverage milestone",
    details: [
      "Crossed nationwide coverage milestone",
      "Established 500+ strategic logistics centers"
    ]
  },
  {
    year: "2021",
    event: "10,000+ pin codes",
    description: "Reached comprehensive serviceable locations",
    details: [
      "Reached comprehensive serviceable locations",
      "Coverage expanded to 10,000+ pin codes"
    ]
  },
  {
    year: "2022",
    event: "Automated distribution",
    description: "Major centers opened in key metros",
    details: [
      "Major automated centers opened in key metros",
      "Introduced AI-powered sorting and distribution"
    ]
  },
  {
    year: "2023",
    event: "Top logistics tech",
    description: "Recognized among India's leading companies",
    details: [
      "Recognized among India's leading logistics companies",
      "Advanced tech solutions and sustainable practices"
    ]
  },
  {
    year: "2025",
    event: "Nationwide leadership",
    description: "Achieved industry leadership in speed and reliability",
    details: [
      "Serving 15,000+ pin codes with consistent delivery excellence",
      "Expanded workforce to 15,000+ staff and delivery partners",
      "Implemented next-gen AI logistics for smarter deliveries"
    ]
  }
];

  const networkData = [{
    region: "NORTH",
    centers: "700+",
    color: "text-orange-500",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500",
    mapColor: "#f97316"
  }, {
    region: "WEST",
    centers: "750+",
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500",
    mapColor: "#3b82f6"
  }, {
    region: "EAST",
    centers: "600+",
    color: "text-red-500",
    bgColor: "bg-red-500/20",
    borderColor: "border-red-500",
    mapColor: "#ef4444"
  }, {
    region: "NORTH EAST",
    centers: "250+",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/20",
    borderColor: "border-cyan-500",
    mapColor: "#06b6d4"
  }, {
    region: "CENTRAL",
    centers: "800+",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500",
    mapColor: "#eab308"
  }, {
    region: "SOUTH",
    centers: "1000+",
    color: "text-green-500",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500",
    mapColor: "#22c55e"
  }];
  const leadership = [{
    name: "Rajesh Kumar",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Amit Singh",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Sneha Gupta",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Vikram Patel",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Meera Joshi",
    role: "Head of Human Resources",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Arjun Reddy",
    role: "Head of Finance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
  }, {
    name: "Kavya Nair",
    role: "Head of Customer Success",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Our Story Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-primary/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-br from-blue-500/5 to-orange-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                  <div className="w-2 h-2 bg-orange-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-orange-600">Since 2015</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Our
                  <span className="bg-gradient-to-r from-orange-primary to-orange-600 bg-clip-text text-transparent block">
                    Story
                  </span>
                </h1>
                
                
              </div>
{/*               
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-xl font-light">
                  Founded by <span className="font-semibold text-foreground">Anshuu Sahu</span> in Ghaziabad, UP, 
                  we began with a simple philosophy: <span className="text-orange-primary font-medium">Customer Delight</span>.
                </p>
                
                <p className="text-lg">
                  From a single outlet to a nationwide network, we've grown through strategic 
                  partnerships and unwavering commitment to excellence in logistics.
                </p>
                
                <p className="text-lg">
                  Today, we proudly serve with <span className="font-semibold text-foreground">10,000+ staff</span> and 
                  delivery partners, delivering speed, reliability, and excellence across all regions.
                </p>
              </div> */}

              {/* <div className="space-y-6 text-muted-foreground leading-relaxed">
  <p className="text-xl font-light">
    Founded with a vision of <span className="font-semibold text-foreground">reliable and fast logistics</span>, 
    Minibharat Logistics has always prioritized <span className="text-orange-primary font-medium">Customer Satisfaction</span> at its core.
  </p>
  
  <p className="text-lg">
    Starting from a small hub, we have expanded to a nationwide network, delivering goods efficiently through 
    strategic partnerships and a strong commitment to operational excellence.
  </p>
  
  <p className="text-lg">
    Today, Minibharat Logistics proudly operates with <span className="font-semibold text-foreground">10,000+ team members </span> 
    and delivery partners, ensuring timely, safe, and dependable logistics services across India.
  </p>
</div> */}
  
  <div className="space-y-6 text-muted-foreground leading-relaxed">
  <p className="text-xl font-light">
    <span className="font-semibold text-foreground">Mini Bharat Courier & Logistics Service</span>, was established in 2023 with the Corporate Identification Number (CIN) <span className="font-medium text-orange-primary">U53200TZ2024PTC030847</span>. Our PAN number is <span className="font-medium text-orange-primary">AARCM8668E</span>, TAN is <span className="font-medium text-orange-primary">CHEM29196G</span>, and GST number is <span className="font-medium text-orange-primary">33AARCM8668E1ZY</span>. As a proprietorship courier brand, we operate over 60 franchise stores nationwide and are recognized as India’s fastest-growing online e-commerce delivery network with zonal offices spanning the country, based in Tamil Nadu with hubs in Mumbai, Hyderabad, and Haryana.
  </p>

  <p className="text-lg">
    Mini Bharat Courier & Logistics Service is a reputable logistics partner dedicated to delivering reliable courier services across India. We have garnered trust and recognition for our exceptional service and commitment to our customers. Our integrated logistics solutions cater to businesses across India, providing comprehensive supply chain support. We are currently undergoing a digital transformation to enhance the speed, safety, and efficiency of our services, thereby opening up limitless opportunities for our clients.
  </p>

  <p className="text-lg">
    At Mini Bharat Courier & Logistics Service, we specialize in offering end-to-end logistics solutions, including warehousing and e-commerce logistics. Recognizing the unique needs of e-commerce businesses, we provide tailored services that streamline order fulfillment, inventory management, and ensure timely deliveries. Our experienced team is dedicated to efficiently managing and delivering your courier needs on time, every time. We understand the critical importance of secure and efficient courier services in today's dynamic environment. Whether it's important documents, packages, or delicate items, we have the expertise and resources to meet your requirements.
  </p>

  <p className="text-lg">
    With our extensive network and advanced tracking system, you can monitor your shipment in real-time, ensuring peace of mind throughout the delivery process. Customer satisfaction is our priority. We strive to build lasting relationships by offering personalized attention and responsive customer support. What sets us apart is our commitment to sustainability. We prioritize eco-friendly practices, such as using energy-efficient vehicles and optimizing delivery routes, to minimize our environmental impact. Whether you're a business seeking a reliable courier partner or an individual sending a package to loved ones, trust Mini Bharat Courier & Logistics Service to deliver your shipments safely and on time. We are dedicated to exceeding your expectations every step of the way.
  </p>
</div>

              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover-scale">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-sm">Nationwide Coverage</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover-scale">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-sm">Tech-Enabled Solutions</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-primary/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img src={modern} alt="Modern Warehouse Logistics Facility" className="w-full h-[500px] object-cover rounded-2xl" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-foreground">Modern Infrastructure</h3>
                      <p className="text-sm text-muted-foreground">State-of-the-art logistics facilities</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-2xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Our Mission */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100/50">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  Our Mission
                  <div className="ml-3 w-8 h-0.5 bg-gradient-to-r from-orange-primary to-transparent"></div>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our vision is to make domestic logistics the seamless choices for 
                  businesses and consumers by offering standardized solutions and 
                  an exceptional delivery experience.
                </p>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-primary/10 to-transparent rounded-full"></div>
            </div>
            
            {/* Our Vision */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100/50">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  Our Vision
                  <div className="ml-3 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our mission in providing logistics is to excel as the most cost-
                  effective last mile delivery and enable efficient company while 
                  simultaneously strengthening our position as the foremost logistics 
                  support in the country.
                </p>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The foundation of our company is built on values that guide our every decision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreValues.map((value, index) => <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-primary/5 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-primary/10 to-orange-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <value.icon className="w-8 h-8 text-orange-primary group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-orange-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{value.description}</p>
                </div>
                
                {/* Interactive border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-primary/0 via-orange-primary/5 to-orange-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Milestones Timeline Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Minibharat Milestones</h2>
            <p className="text-base md:text-xl text-muted-foreground">A timeline of our growth and key achievements</p>
          </div>
          
          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden relative max-w-md mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-primary/20 via-orange-primary to-orange-primary/20"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-4 group">
                  {/* Timeline Dot */}
                  <button 
                    onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)} 
                    className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-full border-4 border-background shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-primary/20"
                  >
                    <span className="text-xs font-bold text-white">{milestone.year.slice(-2)}</span>
                  </button>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <Badge 
                      variant="secondary" 
                      className={`mb-2 transition-all duration-300 cursor-pointer text-xs ${selectedMilestone === index ? 'bg-orange-primary text-white' : 'bg-orange-primary/10 text-orange-primary'}`}
                      onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
                    >
                      {milestone.year}
                    </Badge>
                    <h3 className="font-bold text-foreground mb-1 text-base leading-tight">{milestone.event}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                    
                    {/* Expandable Details on Mobile */}
                    {selectedMilestone === index && (
                      <div className="mt-3 space-y-2 animate-fade-in">
                        {milestone.details.map((detail, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-orange-primary to-orange-600 text-white p-3 rounded-xl shadow-md text-xs">
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-16 left-8 right-8 h-1 bg-gradient-to-r from-orange-primary/20 via-orange-primary to-orange-primary/20 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  {/* Timeline Dot */}
                  <button 
                    onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)} 
                    className="relative z-10 w-12 h-12 bg-gradient-to-br from-orange-primary to-orange-600 rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-primary/20"
                  >
                    <span className="text-xs font-bold text-white">{milestone.year.slice(-2)}</span>
                  </button>
                  
                  {/* Content */}
                  <Badge 
                    variant="secondary" 
                    className={`mb-3 transition-all duration-300 cursor-pointer text-xs ${selectedMilestone === index ? 'bg-orange-primary text-white' : 'bg-orange-primary/10 text-orange-primary hover:bg-orange-primary hover:text-white'}`}
                    onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
                  >
                    {milestone.year}
                  </Badge>
                  <h3 className="font-bold text-foreground mb-2 text-xs md:text-sm leading-tight px-2">{milestone.event}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed px-2">{milestone.description}</p>
                </div>
              ))}
            </div>
            
            {/* Expandable Detail Bars */}
            {selectedMilestone !== null && <div className="mt-12 space-y-3 animate-fade-in">
                {milestones[selectedMilestone].details.map((detail, index) => <div key={index} className="bg-gradient-to-r from-orange-primary to-orange-600 text-white p-4 rounded-2xl shadow-lg animate-scale-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{detail}</span>
                      <div className="text-xs opacity-75">
                        {index === 0 ? 'Sep' : 'Oct'}
                      </div>
                    </div>
                  </div>)}
              </div>}
            
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-primary/20 via-orange-primary to-orange-primary/20 rounded-full"></div>
          </div>
        </div>    
      </section>

      {/* Pan-India Network Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Pan-India Network</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our tech-empowered solutions offer customized logistics services ranging from collection 
              and storage of goods to transportation and door-step delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Interactive India Map */}
            <IndiaMap hoveredRegion={hoveredRegion} onRegionHover={setHoveredRegion} networkData={networkData} />
            
            {/* Network Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {networkData.map((region, index) => <div key={index} className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${hoveredRegion === region.region ? `${region.borderColor} ${region.bgColor} shadow-xl scale-105` : 'border-gray-200 bg-white hover:shadow-lg hover:border-gray-300'}`} onMouseEnter={() => setHoveredRegion(region.region)} onMouseLeave={() => setHoveredRegion(null)}>
                  {/* Color indicator */}
                  <div className={`w-3 h-3 rounded-full mb-4 transition-all duration-300 ${hoveredRegion === region.region ? 'scale-150' : ''}`} style={{
                backgroundColor: region.mapColor
              }}></div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${hoveredRegion === region.region ? region.color : 'text-gray-900'}`}>
                      {region.region}
                    </h3>
                    <div className={`text-3xl font-bold transition-colors duration-300 ${hoveredRegion === region.region ? region.color : 'text-orange-primary'}`}>
                      {region.centers}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">centers</p>
                  </div>
                  
                  {/* Hover effect background */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${hoveredRegion === region.region ? 'opacity-10' : ''}`} style={{
                backgroundColor: region.mapColor
              }}></div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure Section */}
      <section className="py-20 bg-muted/30">
        
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2015, Minibharat emerged from a simple vision: to revolutionize logistics 
                in India through technology and customer-centric solutions. What started as a small 
                team with big dreams has evolved into one of India's most trusted logistics partners.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To deliver logistics excellence through technology and customer-centric solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-orange-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To become India's most reliable and scalable logistics partner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img src={new1} alt="Logistics Warehouse" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Life at Company Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Life at Minibharat</h2>
            <p className="text-xl text-muted-foreground">
              Culture driven by passion, diversity, and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[office1, office2,cel2,cel3,trip1,trip2].map((image, index) => <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={image} alt={`Company Culture ${index + 1}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutUs;