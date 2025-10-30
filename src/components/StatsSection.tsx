import { Package, MapPin, Building, Users, Warehouse } from "lucide-react";
import statsImage from "@/assets/stats-sunset-truck.jpg";

const StatsSection = () => {
  const stats = [
    {
      icon: Package,
      value: "2+ billion",
      label: "parcels since inception"
    },
    {
      icon: MapPin,
      value: "97%",
      label: "Indian population covered"
    },
    {
      icon: Warehouse,
      value: "3,420+",
      label: "delivery centers"
    },
    {
      icon: Users,
      value: "15,616",
      label: "employees and associates"
    },
    {
      icon: Building,
      value: "9.3 million",
      label: "sq. ft. real estate"
    }
  ];

  return (
    <>
      <section 
        className="relative py-5 bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-primary to-orange-dark"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className=" rounded-2xl p-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                India's Fastest-Growing Logistics Partner
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-white/90 font-bold text-sm">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Scrolling Gallery */}
      <section className="py-8 bg-gray-50 overflow-hidden">
        <div className="flex animate-[scroll-right_15s_linear_infinite] space-x-6">
          {[
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=400&h=250&fit=crop"
          ].concat([
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=400&h=250&fit=crop"
          ]).map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`}
                className="w-80 h-48 object-cover rounded-lg shadow-md hover-scale"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Left Scrolling Gallery */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="flex animate-[scroll-left_15s_linear_infinite] space-x-6">
          {[
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop"
          ].concat([
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=250&fit=crop",
            "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop"
          ]).map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`}
                className="w-80 h-48 object-cover rounded-lg shadow-md hover-scale"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StatsSection;