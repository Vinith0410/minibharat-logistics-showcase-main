import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import image from "@/assets/services/Start-Logistics.jpg";
import blog1 from "@/assets/blog/blog1.png";
import blog2 from "@/assets/blog/blog2.png";
import blog3 from "@/assets/blog/blog3.png";

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Blog | Latest Logistics Insights - Minibharat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Stay updated with latest logistics industry trends, insights, and news from Minibharat. Expert articles on supply chain, delivery solutions, and business growth.'
      );
    }
  }, []);

  const featuredPost = {
    id: 1,
    title: "How to Start a Logistics Franchise: A Step-by-Step Guide",
    excerpt: "India's logistics boom has been growing at a rapid pace, and franchisees are poised to be one of the top logistics companies in India.",
    image: image,
    author: "Prashant K",
    date: "Dec 15, 2024",
    category: "Franchise Partner",
    readTime: "5 min read",
      link:"/blog-how-to-start-logistics-franchise"// route for featured post
  };

  const blogPosts = [
    {
      id: 1,
      title: "Unleashing Opportunities: Starting a Delivery Point Franchise Business with Mini Bharat",
      image: blog1,
      author: "By Admin",
      date: "Dec 22, 2023",
      category: "Company Updates",
      readTime: "3 min read",
      link: "/blog1"
    },
    {
      id: 2,
      title: "Mini Bharat: Unlocking the Profit Potential of Courier Delivery Point Businesses",
      image: blog2,
      author: "By Admin",
      date: "Dec 22, 2023",
      category: "Company Updates",
      readTime: "5 min read",
      link: "/blog2"
    },
    {
      id: 3,
      title: "Unlocking Prosperity: Mini Bharat's Journey through Delivery Point Investment and Profit",
      image: blog3,
      author: "By Admin",
      date: "Dec 22, 2023",
      category: "Company Updates",
      readTime: "7 min read",
      link: "/blog3"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          

            <div className="text-center mb-12 mt-12 animate-fade-in overflow-visible">
 <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6A3D] to-[#FF6A3D] bg-clip-text text-transparent leading-normal inline-block pb-1">
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
                    <Button className="self-start" onClick={() => navigate(featuredPost.link)}>
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
                      <Button variant="ghost" size="sm" onClick={() => navigate(post.link)}>
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
