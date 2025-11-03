import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  useEffect(() => {
    document.title = "Customer Testimonials - Success Stories | Minibharat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read success stories and testimonials from Minibharat customers and franchise partners. Discover how we help businesses grow with reliable logistics solutions.');
    }
  }, []);
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      company: "Kumar Electronics",
      rating: 5,
      text: "Minibharat has transformed our logistics operations. Their reliability and efficiency have helped us expand our business across multiple cities.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Franchise Partner",
      company: "Delhi Region",
      rating: 5,
      text: "The training and support provided by Minibharat is exceptional. I started with no logistics experience and now run a successful franchise.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2fd?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Supply Chain Manager",
      company: "Patel Industries",
      rating: 5,
      text: "Their technology platform is user-friendly and provides real-time tracking. Our customers love the transparency.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "E-commerce Owner",
      company: "Fashion Hub",
      rating: 5,
      text: "Fast delivery and excellent customer service. Minibharat has helped us maintain a 99% customer satisfaction rate.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Franchise Partner",
      company: "Mumbai Region",
      rating: 5,
      text: "The franchise model is well-structured with clear guidelines. The ongoing support ensures continuous growth.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Anita Gupta",
      role: "Retail Manager",
      company: "Gupta Stores",
      rating: 5,
      text: "Their warehousing solutions have optimized our inventory management. We've reduced costs by 30%.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Rohit Jain",
      role: "Manufacturing Head",
      company: "Jain Motors",
      rating: 5,
      text: "Reliable transportation of heavy machinery. Their specialized handling ensures our equipment reaches safely.",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Meera Iyer",
      role: "Startup Founder",
      company: "Tech Solutions",
      rating: 5,
      text: "As a startup, we needed affordable yet reliable logistics. Minibharat provided exactly what we needed to scale.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
    ,
    {
      id: 6,
      name: "Anita Gupta",
      role: "Retail Manager",
      company: "Gupta Stores",
      rating: 5,
      text: "Their warehousing solutions have optimized our inventory management. We've reduced costs by 30%.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Our Wall of Love
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Hear what our customers and franchise partners have to say about their experience with Minibharat
            </p>
            <p className="text-sm text-muted-foreground">
              Join thousands of satisfied customers who trust us with their logistics needs
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in border border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* User Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-muted-foreground mb-8">
              Start your journey with Minibharat and become part of our growing family of satisfied customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="px-8 py-3 font-medium transform hover:scale-105 transition-all duration-300">
                Become a Partner
              </Button>
              <Button variant="outline" className="px-8 py-3 font-medium transform hover:scale-105 transition-all duration-300">
                Get a Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;