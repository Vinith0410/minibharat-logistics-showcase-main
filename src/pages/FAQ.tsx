import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import faqSupportImage from '@/assets/faq-support.jpg';
import faqLogisticsImage from '@/assets/faq-logistics.jpg';
import faqTeamImage from '@/assets/faq-team.jpg';

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - Frequently Asked Questions | Minibharat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find answers to frequently asked questions about Minibharat logistics services, franchise opportunities, training, support, and investment requirements.');
    }
  }, []);
  const faqItems = [
    {
      id: "item-1",
      question: "What are the initial investment requirements to become a franchise partner?",
      answer: "The initial investment varies based on the franchise type and location. Our team will provide detailed investment information during the consultation process, including franchise fees, equipment costs, and working capital requirements."
    },
    {
      id: "item-2", 
      question: "Do I need prior experience in logistics to become a franchisee?",
      answer: "While prior logistics experience is beneficial, it's not mandatory. We provide comprehensive training programs covering all aspects of logistics operations, business management, and our proprietary systems."
    },
    {
      id: "item-3",
      question: "What kind of support can I expect as a franchise partner?",
      answer: "We offer complete support including initial training, ongoing operational guidance, marketing support, technology systems, supply chain management, and dedicated account management to ensure your success."
    },
    {
      id: "item-4",
      question: "How long does the training program last?",
      answer: "Our comprehensive training program typically lasts 4-6 weeks, covering both theoretical knowledge and hands-on practical experience. This includes classroom sessions, field training, and system familiarization."
    },
    {
      id: "item-5",
      question: "Can I operate my franchise from home?",
      answer: "Depending on the franchise model you choose, some operations can be managed remotely. However, certain services may require a physical location for storage and operations. We'll help you determine the best setup for your specific franchise."
    },
    {
      id: "item-6",
      question: "Are there any ongoing fees or royalties?",
      answer: "Yes, there are ongoing royalty fees and marketing contributions. These fees help maintain our brand standards, provide continuous support, and fund marketing initiatives that benefit all franchise partners."
    },
    {
      id: "item-7",
      question: "How do I market my franchise locally?",
      answer: "We provide comprehensive marketing support including local advertising templates, digital marketing tools, lead generation systems, and co-op advertising programs to help you establish a strong local presence."
    },
    {
      id: "item-8",
      question: "Is there a minimum territory size for a franchise?",
      answer: "Territory size varies based on population density and market potential. We conduct thorough market analysis to define optimal territory boundaries that provide sufficient opportunity for growth and profitability."
    },
    {
      id: "item-9",
      question: "What happens if I need assistance after the initial training?",
      answer: "Our support doesn't end after training. You'll have access to ongoing support through dedicated account managers, regular check-ins, additional training modules, and 24/7 technical support for our systems."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  FAQ's
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Having inquiries? Here is a read through some of our FAQs or contact 
                  our supporters for help.
                </p>
                
                {/* Images */}
                <div className="space-y-6">
                  {/* Main Support Image */}
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img 
                      src={faqSupportImage} 
                      alt="Customer Support Team" 
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                        <p className="text-white/90">We're here to help you succeed</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Grid Images */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group overflow-hidden rounded-xl">
                      <img 
                        src={faqLogisticsImage} 
                        alt="Logistics Operations" 
                        className="w-full h-32 object-cover transform group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-secondary/70 flex items-center justify-center">
                        <h4 className="text-white font-medium text-center">Logistics Excellence</h4>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-xl">
                      <img 
                        src={faqTeamImage} 
                        alt="Professional Team" 
                        className="w-full h-32 object-cover transform group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-accent/70 flex items-center justify-center">
                        <h4 className="text-white font-medium text-center">Expert Team</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - FAQ */}
              <div className="animate-fade-in animation-delay-200">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem 
                      key={item.id} 
                      value={item.id}
                      className="bg-card border border-border rounded-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <AccordionTrigger className="px-6 py-4 text-foreground hover:text-primary text-left font-medium [&[data-state=open]]:text-primary">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Need More Help Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Need more help?</h2>
            <p className="text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our support team is here to assist you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="px-8 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Support
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;