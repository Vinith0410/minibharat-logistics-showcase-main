const PartnersSection = () => {
  // Partner companies with logo-like styling
  const partners = [
    "Amazon", "Flipkart", "Myntra", "Nykaa", "BigBasket", 
    "Zomato", "Swiggy", "Paytm", "PhonePe", "Samsung", 
    "HDFC", "ICICI", "Tata", "Reliance", "Airtel", 
    "Vodafone", "Firstcry", "Lenskart", "Urbanic", "More",
    "Microsoft", "Google", "Meta", "Apple", "Netflix", 
    "Spotify", "Adobe"
  ];
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground text-lg">
            Partnering with India's most innovative companies
          </p>
        </div>

        {/* Unified Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-center w-full aspect-[3/2] bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-foreground font-semibold text-xs sm:text-sm md:text-base group-hover:text-primary transition-colors px-2 text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PartnersSection;