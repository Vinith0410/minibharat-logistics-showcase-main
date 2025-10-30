const MarqueeSection = () => {
  const marqueeText = "🚚 Fast Delivery • 📦 Secure Storage • 🌟 Trusted Partner • 💼 Business Solutions • 🚛 Nationwide Coverage • ⚡ Express Service • 🎯 On-Time Delivery • 📈 Growing Network";

  return (
    <div className="bg-orange-primary text-white py-2 overflow-hidden relative z-10 mt-16">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium tracking-wide inline-block">
          {marqueeText} • {marqueeText} • {marqueeText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeSection;