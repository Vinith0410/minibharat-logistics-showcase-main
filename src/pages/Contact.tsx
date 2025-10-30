import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Contact Us - Get in Touch | Minibharat Logistics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Minibharat for logistics partnerships, support, and inquiries. Get in touch with our team across India for comprehensive logistics solutions.');
    }
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const technologyCenters = [
    {
      id: 1,
      name: "Pune",
      description: "Corporate IT Park, Unit 7 & 8, 503 Building-B-1, Rajiv Gandhi – Worldmark Urban Infotech, Hinjawadi Phase I",
      active: true
    },
    {
      id: 2,
      name: "Mumbai",
      description: "Business Hub, Tower A, Level 12, Lower Parel, Mumbai - 400013",
      active: false
    },
    {
      id: 3,
      name: "Bangalore",
      description: "Tech Park, Block C, Whitefield Main Road, Bangalore - 560066",
      active: false
    },
    {
      id: 4,
      name: "Delhi",
      description: "Corporate Centre, Sector 44, Gurgaon, Haryana - 122003",
      active: false
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get in touch with us for partnerships, support, or any inquiries about our logistics services
              </p>
            </div>

            {/* Map Section */}
            <div className="mb-16 animate-fade-in">
              <Card className="overflow-hidden">
                <div className="h-96 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Add your Mapbox token to display an interactive map here
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form and Info */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Still have questions?</h2>
                  <p className="text-muted-foreground mb-6">
                    Can't find the answer you're looking for? Please chat to our friendly team.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Enter your company name"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="franchise">Franchise Opportunity</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                        className="mt-1"
                      />
                    </div>

                    <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="animate-fade-in animation-delay-200">
                <Card className="p-8 bg-primary/5 border-primary/20">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+91 9876543210</p>
                        <p className="text-muted-foreground">+91 9876543211</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">info@minibharat.com</p>
                        <p className="text-muted-foreground">support@minibharat.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground">
                          Corporate IT Park, Unit 7 & 8<br />
                          503 Building-B-1, Rajiv Gandhi<br />
                          Hinjawadi Phase I, Pune - 411057
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Centers */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Technology Centers</h2>
              <p className="text-muted-foreground">
                Our strategic locations across India to serve you better
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologyCenters.map((center, index) => (
                <Card
                  key={center.id}
                  className={`p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in ${
                    center.active 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-card border-border hover:border-primary'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className={`w-6 h-6 ${center.active ? 'text-white' : 'text-primary'}`} />
                    <h3 className={`text-xl font-bold ${center.active ? 'text-white' : 'text-foreground'}`}>
                      {center.name}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    center.active ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {center.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of businesses that trust Minibharat for their logistics needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="px-8">
                Start Your Journey
              </Button>
              <Button variant="outline" className="px-8">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;