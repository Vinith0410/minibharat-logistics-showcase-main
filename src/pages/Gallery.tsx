import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Package, Truck, ShoppingCart, Warehouse, Grid3x3, Image as ImageIcon } from "lucide-react";

// Import images
import courierImg from "@/assets/services/courier-services.jpg";
import ecommerceImg from "@/assets/services/ecommerce-logistics.jpg";
import warehouseImg from "@/assets/services/logistics-warehouse.jpg";
import fleetImg from "@/assets/services/fleet-management.jpg";
import returnImg from "@/assets/services/return-logistics.jpg";
import trackingImg from "@/assets/services/tracking-management.jpg";
import heroImg from "@/assets/hero-logistics.jpg";
import teamImg from "@/assets/logistics-team.jpg";
import groceryImg from "@/assets/grocery-delivery.jpg";
import truckImg from "@/assets/heavy-delivery-truck.jpg";
import warehouseInteriorImg from "@/assets/warehouse-interior.jpg";
import groceryWarehouseImg from "@/assets/grocery-warehouse.jpg";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: courierImg, title: "Courier Services", category: "Services", description: "Fast and reliable courier delivery" },
  { id: 2, image: ecommerceImg, title: "E-commerce Logistics", category: "Services", description: "Complete e-commerce fulfillment solutions" },
  { id: 3, image: warehouseImg, title: "Warehouse Management", category: "Warehouse", description: "Modern warehouse facilities" },
  { id: 4, image: fleetImg, title: "Fleet Management", category: "Fleet", description: "Advanced fleet tracking systems" },
  { id: 5, image: returnImg, title: "Return Logistics", category: "Services", description: "Hassle-free return management" },
  { id: 6, image: trackingImg, title: "Tracking & Management", category: "Technology", description: "Real-time tracking solutions" },
  { id: 7, image: heroImg, title: "Logistics Operations", category: "Operations", description: "Efficient logistics operations" },
  { id: 8, image: teamImg, title: "Professional Team", category: "Team", description: "Dedicated logistics professionals" },
  { id: 9, image: groceryImg, title: "Grocery Delivery", category: "Services", description: "Fresh grocery delivery service" },
  { id: 10, image: truckImg, title: "Heavy Item Transport", category: "Fleet", description: "Specialized heavy item delivery" },
  { id: 11, image: warehouseInteriorImg, title: "Warehouse Interior", category: "Warehouse", description: "State-of-the-art storage facilities" },
  { id: 12, image: groceryWarehouseImg, title: "Grocery Warehouse", category: "Warehouse", description: "Temperature-controlled storage" },
];

const categories = ["All", "Services", "Warehouse", "Fleet", "Technology", "Team", "Operations"];

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
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
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
                
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
                
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
