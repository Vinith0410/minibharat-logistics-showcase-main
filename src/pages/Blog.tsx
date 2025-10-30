import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Latest Logistics Insights - Minibharat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stay updated with latest logistics industry trends, insights, and news from Minibharat. Expert articles on supply chain, delivery solutions, and business growth.');
    }
  }, []);
  const featuredPost = {
    id: 1,
    title: "How to Start a Logistics Franchise: A Step-by-Step Guide",
    excerpt: "India's logistics boom has been growing at a rapid pace, and franchisees are poised to be one of the top logistics companies in India.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=400&fit=crop",
    author: "Prashant K",
    date: "Dec 15, 2024",
    category: "Franchise Partner",
    readTime: "5 min read"
  };

  const blogPosts = [
    {
      id: 2,
      title: "How Franchising Is Prioritizing The Mental Well-Being Of Employees",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      author: "Prashant K",
      date: "Dec 10, 2024",
      category: "Business in Franchising",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Crowdsourcing: The Future Of Last-Mile Delivery",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      author: "Prashant K",
      date: "Dec 8, 2024",
      category: "Last Mile Delivery",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Shadowfax Turns 10: Celebrating In Style, Shaping The Future",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
      author: "Prashant K",
      date: "Dec 5, 2024",
      category: "Company Updates",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "How Logistics Uses AI-Powered Selfie Validation To Prevent Fraud",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      author: "Prashant K",
      date: "Dec 3, 2024",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Network Challenges During QOP Festival: Lessons Learned And Optimizations Achieved",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      author: "Prashant K",
      date: "Nov 30, 2024",
      category: "Technology",
      readTime: "7 min read"
    },
    {
      id: 7,
      title: "Minibharat's Solutions To Common Last Mile Delivery Challenges",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
      author: "Prashant K",
      date: "Nov 28, 2024",
      category: "Logistics Solutions",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Latest Insights & Updates
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest trends, insights, and news from the logistics industry
              </p>
            </div>

            {/* Featured Post */}
            <div className="mb-16 animate-fade-in">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="self-start">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-foreground leading-tight">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to get the latest insights and updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;