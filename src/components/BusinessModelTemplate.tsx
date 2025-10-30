import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Step {
  step: string;
  title: string;
  description: string;
}

interface EarningData {
  title: string;
  basic: {
    label: string;
    detail: string;
    amount: string;
  };
  scaled: {
    label: string;
    detail: string;
    amount: string;
  };
  note: string;
}

interface BusinessModelTemplateProps {
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  benefits: Benefit[];
  howItWorks: Step[];
  franchiseBenefits: string[];
  earningData: EarningData;
  ctaBadges: string[];
  ctaButtonText: string;
}

const BusinessModelTemplate = ({
  badge,
  title,
  subtitle,
  tagline,
  description,
  heroImage,
  heroImageAlt,
  benefits,
  howItWorks,
  franchiseBenefits,
  earningData,
  ctaBadges,
  ctaButtonText,
}: BusinessModelTemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--blue-primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge className="mb-4 px-8 py-3 text-base font-bold bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))] text-white border-0 hover:shadow-glow transition-all hover:scale-105 shadow-lg">
              {badge}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
              {title}
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-800 font-bold tracking-tight">
              {subtitle}
            </p>
            
            <p className="text-xl md:text-2xl text-[hsl(var(--orange-primary))] max-w-3xl mx-auto font-bold">
              {tagline}
            </p>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              {description}
            </p>
          </div>
          
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10 group-hover:from-slate-900/40 transition-all duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl z-20" />
              <img 
                src={heroImage} 
                alt={heroImageAlt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-transparent via-slate-50/50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--blue-primary)) 0px, hsl(var(--blue-primary)) 1px, transparent 1px, transparent 20px)`,
        }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 space-y-5">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))]">{title}</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Experience industry-leading benefits designed for your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group hover-lift bg-white backdrop-blur-sm border-slate-200/60 hover:border-[hsl(var(--orange-primary))]/40 transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="pb-4 space-y-5 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-[hsl(var(--orange-primary))] transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 leading-relaxed text-base">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-blue-50/40 via-white to-orange-50/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/10 to-transparent" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 space-y-5">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))]">Works</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Our streamlined process ensures consistent revenue and scalable growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {howItWorks.map((step, index) => (
              <Card 
                key={index} 
                className="text-center hover-lift bg-white backdrop-blur-sm border-2 border-slate-200/80 hover:border-[hsl(var(--orange-primary))]/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--orange-primary))]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-5 relative z-10 pt-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))] text-white flex items-center justify-center text-4xl font-extrabold mx-auto shadow-2xl group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-[hsl(var(--orange-primary))] transition-colors px-2">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pb-8">
                  <p className="text-slate-600 text-base leading-relaxed px-2">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Benefits Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-transparent to-slate-50/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-5">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Franchise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))]">Benefits</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Comprehensive advantages that set our franchise apart
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm border-2 border-slate-200/80 hover-lift overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[hsl(var(--orange-primary))]/10 to-transparent rounded-full blur-3xl" />
            <CardContent className="p-10 md:p-16 relative z-10">
              <div className="space-y-8">
                {franchiseBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-5 group hover:bg-white/60 p-5 rounded-2xl transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-800 text-xl leading-relaxed font-medium pt-2">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Earning Potential Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-blue-50/40 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--orange-primary)) 2px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 space-y-5">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Earning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))]">Potential</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Real earning scenarios from our successful franchise partners
            </p>
          </div>
          
          <Card className="max-w-5xl mx-auto bg-white backdrop-blur-sm border-2 border-slate-200/80 overflow-hidden shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-[hsl(var(--orange-primary))] via-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))] text-white p-10 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `radial-gradient(circle at 3px 3px, white 2px, transparent 0)`,
                backgroundSize: '50px 50px'
              }} />
              <CardTitle className="text-3xl md:text-4xl font-extrabold text-center relative z-10">
                {earningData.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 md:p-16">
              <div className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-10 rounded-3xl hover-lift border-2 border-orange-200/60 shadow-lg group">
                    <h4 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-[hsl(var(--orange-primary))] transition-colors">{earningData.basic.label}</h4>
                    <p className="text-base text-slate-600 mb-5 leading-relaxed">{earningData.basic.detail}</p>
                    <p className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))]">
                      {earningData.basic.amount}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-10 rounded-3xl hover-lift border-2 border-orange-200/60 shadow-lg group">
                    <h4 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-[hsl(var(--orange-primary))] transition-colors">{earningData.scaled.label}</h4>
                    <p className="text-base text-slate-600 mb-5 leading-relaxed">{earningData.scaled.detail}</p>
                    <p className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))]">
                      {earningData.scaled.amount}
                    </p>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Badge className="px-8 py-4 text-base font-bold bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 text-white border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                    {earningData.note}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-transparent to-slate-50">
        <div className="container mx-auto max-w-7xl">
          <Card className="bg-gradient-to-br from-[hsl(var(--orange-primary))] via-[hsl(var(--orange-primary))] to-[hsl(var(--orange-dark))] text-white border-0 overflow-hidden relative shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 3px 3px, white 2px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            
            <CardContent className="p-12 md:p-20 text-center relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white drop-shadow-lg">
                Start Your Franchise Today
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/95 leading-relaxed font-medium">
                Join our network of successful partners and unlock your business potential with guaranteed growth
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {ctaBadges.map((badgeText, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="px-7 py-4 border-2 border-white/50 text-white hover:bg-white/20 backdrop-blur-sm transition-all text-lg font-bold hover:scale-105 shadow-lg"
                  >
                    {badgeText}
                  </Badge>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-white text-[hsl(var(--orange-primary))] hover:bg-slate-50 shadow-2xl hover:shadow-[0_20px_100px_-20px_rgba(255,255,255,0.8)] transform hover:scale-110 transition-all duration-500 font-extrabold rounded-2xl"
              >
                {ctaButtonText}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessModelTemplate;
