import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import deliveryTruckImage from "@/assets/heavy-delivery-truck.jpg";
import { 
  Package,
  DollarSign,
  Clock,
  Zap,
  TrendingUp,
  MapPin
} from "lucide-react";

const APMBusinessModel = () => {
  useEffect(() => {
    document.title = "APM Business Model - Franchise Opportunity | Mini Bharat Logistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join Mini Bharat Logistics APM Business Model. Assured daily volumes, transparent payouts, and scalable franchise opportunities. Start your logistics franchise today.");
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Assured Daily Volumes",
      description: "Seller pickups & returns directly from Mini Bharat"
    },
    {
      icon: DollarSign,
      title: "Transparent Rate Card",
      description: "Fixed per-shipment payouts (slab-based)"
    },
    {
      icon: Clock,
      title: "Fast Delivery Timelines",
      description: "Pickups within 7 hours, returns next day"
    },
    {
      icon: Zap,
      title: "Quick Cash Flow",
      description: "COD settled daily, invoices cleared in 30 days"
    },
    {
      icon: TrendingUp,
      title: "Performance Incentives",
      description: "High SLA = better margins & more volumes"
    },
    {
      icon: MapPin,
      title: "Pan-India Scalability",
      description: "Start small, expand to multiple hubs nationwide"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Request Assignment",
      description: "Mini Bharat raises pickup/return requests for your hub"
    },
    {
      step: "2", 
      title: "Manage Pickups",
      description: "Handle pickups within SLA (7 hrs for forward, 1 day for returns)"
    },
    {
      step: "3",
      title: "Earn Per Shipment",
      description: "Payments earned per shipment as per rate card"
    },
    {
      step: "4",
      title: "Scale & Grow",
      description: "Scale volumes → earn more via better slab margins"
    }
  ];

  const franchiseBenefits = [
    "Assured Seller Business – MBL contract = no client hunting",
    "Predictable Monthly Income – Transparent rate slabs",
    "Daily COD = Cash Security – Same-day settlement requirement",
    "Low Investment, High ROI – Lean infra model, manpower + vehicles",
    "Long-Term Security – Backed by Flipkart SOPs, EHS compliance & contracts"
  ];

  const earningData = {
    title: "Tier II APM Hub – Seller Pickups",
    basic: {
      label: "Basic Volume",
      detail: "1000 shipments/day × Avg ₹2.2 per shipment",
      amount: "Monthly Income = ~₹6.6 Lakhs"
    },
    scaled: {
      label: "Scaled Volume",
      detail: "2,000 shipments/day",
      amount: "₹12–14 Lakhs/month"
    },
    note: "Volume growth directly multiplies income"
  };

  return (
    <BusinessModelTemplate
      badge="Franchise Opportunity"
      title="APM Business Model"
      subtitle="Franchise with Mini Bharat Logistics"
      tagline="Drive Seller Pickups & Returns, Earn Assured Profits"
      description="The APM (All Products Movement) Model lets franchise partners manage seller pickups & returns for Mini Bharat Logistics. Every day, you'll get assured shipment allocations, transparent per-shipment earnings, and strong growth potential."
      heroImage={deliveryTruckImage}
      heroImageAlt="APM logistics franchise delivery operations"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Assured Orders",
        "Transparent Payouts",
        "Pan-India Growth",
        "Flipkart Partnership"
      ]}
      ctaButtonText="Apply Now – Become an APM Partner"
    />
  );
};

export default APMBusinessModel;
