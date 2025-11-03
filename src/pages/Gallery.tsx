import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Package, Truck, ShoppingCart, Warehouse, Grid3x3, Image as ImageIcon } from "lucide-react";

// Import images
import office from "@/assets/gallery/Office/office1.jpg";
import office1 from "@/assets/gallery/Office/office2.jpg";
import office2 from "@/assets/gallery/Office/office3.jpg";
import cel1 from "@/assets/gallery/Celebrations/img2.jpg";
import cel2 from "@/assets/gallery/Celebrations/img1.jpg";
import cel3 from "@/assets/gallery/Celebrations/img3.jpg";
import cel4 from "@/assets/gallery/Celebrations/img4.jpg";
import cel5 from "@/assets/gallery/Celebrations/img5.jpg";
import cel6 from "@/assets/gallery/Celebrations/img6.jpg";
import cel7 from "@/assets/gallery/Celebrations/img7.jpg";
import cel8 from "@/assets/gallery/Celebrations/img8.jpg";
import trip1 from "@/assets/gallery/Trips/trip1.jpg";
import trip2 from "@/assets/gallery/Trips/trip2.jpg";
import trip3 from "@/assets/gallery/Trips/trip3.jpg";
import trip4 from "@/assets/gallery/Trips/trip4.jpg";
import trip5 from "@/assets/gallery/Trips/trip5.jpg";
import trip6 from "@/assets/gallery/Trips/trip6.jpg";
import meet1 from "@/assets/gallery/Meetings/meeting1.jpg";
import meet2 from "@/assets/gallery/Meetings/mee.jpg";
import amazon from "@/assets/partners/amazon.png";
import flipkart from "@/assets/partners/smflip.jpg";
import myntra from "@/assets/partners/newmyntra.jpg";
import swiggy from "@/assets/partners/swiggy.png";
import zomato from "@/assets/partners/newzomato.jpg"; 
import paytm from "@/assets/partners/paytm.png";
import phonepe from "@/assets/partners/phonepe.png";
import samsung from "@/assets/partners/samsung.png";
import bigbasket from "@/assets/partners/bigbasket.png";
import ecom from "@/assets/partners/ecom.png";
import shadow from "@/assets/partners/shadow.png";
import zepto from "@/assets/partners/zepto.png";
import delhi from "@/assets/partners/delhi.png";

import video1 from "@/assets/gallery/video/video1.mp4";
import video2 from "@/assets/gallery/video/video2.mp4";
import video3 from "@/assets/gallery/video/video3.mp4";
import video4 from "@/assets/gallery/video/video4.mp4";
import video5 from "@/assets/gallery/video/video5.mp4";
import video6 from "@/assets/gallery/video/video6.mp4";
import video7 from "@/assets/gallery/video/video7.mp4";
import video8 from "@/assets/gallery/video/video8.mp4";

interface GalleryItem {
  id: number;
  image?: string;
  video?: string; 
  title: string;
  category: string;
  description?: string;
}

// Define gallery items
const galleryItems: GalleryItem[] = [
  // Office
  { id: 1, image: office , title: "Office Staff", category: "Office", description: "Handles day-to-day office operations, administration, and coordination." },
  { id: 2, image: office1 , title: "Office Staff", category: "Office", description: "Ensures smooth workflow, document management, and office support." },
  { id: 3, image: office2 , title: "Office Staff", category: "Office", description: "Manages office resources, scheduling, and internal communications." },

  // Celebrations
  { id: 4, image: cel1 , title: "Event Coordinator", category: "Celebrations", description: "Plans and organizes company events, celebrations, and team activities." },
  { id: 5, image: cel2 , title: "Creative Team", category: "Celebrations", description: "Designs decoration, themes, and visual setups for celebrations." },
  { id: 6, image: cel3 , title: "Event Support Staff", category: "Celebrations", description: "Assists in event execution, logistics, and coordination." },
  { id: 7, image: cel4 , title: "Event Support Staff", category: "Celebrations", description: "Helps ensure smooth celebration activities and participation." },
  { id: 8, image: cel5 , title: "Event Photographer", category: "Celebrations", description: "Captures important moments and memories during events." },
  { id: 9, image: cel6 , title: "vinaykar shakurthi", category: "Celebrations", description: "Organizes with praying and blessing." },
  { id: 10, image: cel7 , title: "Decoration Team", category: "Celebrations", description: "Manages decorations and setup for company events." },
  { id: 11, image: cel8 , title: "Logistics Team", category: "Celebrations", description: "Coordinates transportation and delivery of event materials." },

  // Trips
  { id: 12, image: trip1 , title: "Travel Coordinator", category: "Trips", description: "Plans and manages company trips and travel schedules." },
  { id: 13, image: trip2 , title: "Travel Assistant", category: "Trips", description: "Supports team members during travel and outings." },
  { id: 14, image: trip3, title: "Trip Logistics Team", category: "Trips", description: "Handles transportation, accommodation, and itinerary management." },
  { id: 15, image: trip4, title: "Safety & nightout", category: "Trips", description: "Ensures team safety and smooth execution of trips." },
  { id: 16, image: trip5 , title: "Trip Photographer", category: "Trips", description: "Captures moments and creates travel memories for the team." },
  { id: 17, image: trip6 , title: "Trip Coordinator Assistant", category: "Trips", description: "Assists in organizing travel logistics and team activities." },

  // Meetings
  { id: 18, image: meet1 , title: "Meeting Coordinator", category: "Meetings", description: "Schedules and organizes internal and client meetings." },
  { id: 19, image: meet2 , title: "Meeting Support Staff", category: "Meetings", description: "Prepares meeting rooms, documents, and manages follow-ups." },

  // Videos
  { id: 20, video: video1, title: "Project Highlights", category: "video", description: "Showcasing our team working on projects and achievements." },  
  { id: 21, video: video2, title: "Behind the Scenes", category: "video", description: "Fun moments, teamwork, and office life behind the scenes." },  
  { id: 22, video: video3, title: "Team Training", category: "video", description: "Highlights of team training and skill development sessions." },  
  { id: 23, video: video4, title: "Corporate Events", category: "video", description: "Videos capturing corporate events, celebrations, and activities." },  
  { id: 24, video: video5, title: "Trip Memories", category: "video", description: "Videos of company trips and outdoor activities." },  
  { id: 25, video: video6, title: "Client Interactions", category: "video", description: "Showcases professional interactions with clients and partners." },  
  { id: 26, video: video7, title: "Product Launches", category: "video", description: "Videos covering new product launches and campaigns." },  
  { id: 27, video: video8, title: "Team Testimonials", category: "video", description: "Team members sharing experiences and feedback on projects." },  

  // Franchise Partners
  { id: 28, image: amazon, title: "Amazon Team", category: "Franchise Partners", description: "Responsible for operations and coordination with Amazon." },  
  { id: 29, image: flipkart, title: "Flipkart Team", category: "Franchise Partners", description: "Handles Flipkart partnership activities and deliveries." },  
  { id: 30, image: myntra, title: "Myntra Team", category: "Franchise Partners", description: "Manages Myntra shipments and operational collaborations." },  
  { id: 31, image: swiggy, title: "Swiggy Team", category: "Franchise Partners", description: "Ensures efficient handling of Swiggy orders and services." },  
  { id: 32, image: paytm, title: "Paytm Team", category: "Franchise Partners", description: "Manages Paytm operations and parcel coordination." },  
  { id: 33, image: phonepe, title: "PhonePe Team", category: "Franchise Partners", description: "Responsible for PhonePe shipments and partnership operations." },  
  { id: 34, image: zomato, title: "Zomato Team", category: "Franchise Partners", description: "Handles timely and safe delivery of Zomato orders." },  
  { id: 35, image: samsung, title: "Samsung Team", category: "Franchise Partners", description: "Manages Samsung product handling and deliveries." },  
  { id: 36, image: bigbasket, title: "BigBasket Team", category: "Franchise Partners", description: "Responsible for BigBasket shipments and coordination." },  
  { id: 37, image: ecom, title: "Ecom Team", category: "Franchise Partners", description: "Efficient e-commerce shipments and operations." },  
  { id: 38, image: shadow, title: "Shadow Team", category: "Franchise Partners", description: "Responsible for Shadow shipments and coordination." },  
  { id: 39, image: zepto, title: "Zepto Team", category: "Franchise Partners", description: "Fast and accurate order processing." },  
  { id: 40, image: delhi, title: "Delhi Team", category: "Franchise Partners", description: "Reliable end-to-end logistics services." },  
];

const categories = ["All", "Office", "Franchise Partners", "Celebrations","Trips", "Meetings", "video"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.title = "Gallery - Mini Bharat Logistics";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our gallery showcasing Mini Bharat Logistics services, facilities, and operations. View our modern warehouses, fleet, and professional team.');
    }
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Services": return <Package className="w-4 h-4" />;
      case "Warehouse": return <Warehouse className="w-4 h-4" />;
      case "Fleet": return <Truck className="w-4 h-4" />;
      case "Technology": return <Grid3x3 className="w-4 h-4" />;
      case "Team": return <ImageIcon className="w-4 h-4" />;
      case "Operations": return <ShoppingCart className="w-4 h-4" />;
      default: return <Grid3x3 className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 px-6 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20">
              OUR GALLERY
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
              Explore Our
              <span className="block text-primary">Logistics Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our modern facilities, advanced fleet, and dedicated team through our visual showcase
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <motion.div 
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? "shadow-lg scale-105" 
                    : "hover:scale-105"
                }`}
                size="sm"
              >
                <span className="flex items-center gap-2">
                  {category !== "All" && getCategoryIcon(category)}
                  {category}
                </span>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-card"
                  onClick={() => setLightboxImage(item)}
                >
                  {/* Image/Video Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                    {item.video && (
                      <video
                        src={item.video}
                        className="w-full h-full object-cover object-center rounded-2xl"
                        controls
                        preload="metadata"
                      />
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        {item.description && (
                          <p className="text-sm text-white/90">{item.description}</p>
                        )}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/95 text-foreground border-0 shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                        {getCategoryIcon(item.category)}
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Title (always visible on mobile) */}
                  <div className="p-4 lg:hidden">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">No items found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-5xl p-0 border-0 bg-transparent overflow-hidden">
          <AnimatePresence>
            {lightboxImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full"
                  onClick={() => setLightboxImage(null)}
                >
                  <X className="w-6 h-6" />
                </Button>
                
                {lightboxImage.image && (
                  <img
                    src={lightboxImage.image}
                    alt={lightboxImage.title}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                  />
                )}
                {lightboxImage.video && (
                  <video
                    src={lightboxImage.video}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                    controls
                    autoPlay
                  />
                )}
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm flex items-center gap-1.5">
                      {getCategoryIcon(lightboxImage.category)}
                      {lightboxImage.category}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">{lightboxImage.title}</h2>
                  {lightboxImage.description && (
                    <p className="text-white/90">{lightboxImage.description}</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
