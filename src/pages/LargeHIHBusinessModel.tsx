import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import deliveryTruckImage from "@/assets/heavy-delivery-truck.jpg";
import { 
  Package,
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  MapPin
} from "lucide-react";

const LargeHIHBusinessModel = () => {
  useEffect(() => {
    document.title = "Large HIH Business Model - Heavy Item Handling | Mini Bharat Logistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join Mini Bharat Logistics Large HIH Business Model. Handle heavy deliveries, earn premium profits with assured volumes. Appliances, furniture & bulky items franchise opportunity.");
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Assured Daily Volumes",
      description: "Fixed orders from MBL (prepaid & COD)"
    },
    {
      icon: DollarSign,
      title: "Earn from Both Ways",
      description: "Forward deliveries + returns (RTO/PRTO)"
    },
    {
      icon: TrendingUp,
      title: "Premium Seasonal Payouts",
      description: "Extra income during BBD & festive peaks"
    },
    {
      icon: Zap,
      title: "Quick Cash Flow",
      description: "Invoices cleared within 30 days"
    },
    {
      icon: Shield,
      title: "Performance Incentives",
      description: "Higher income for SLA & CX compliance"
    },
    {
      icon: MapPin,
      title: "Scalable Pan-India Model",
      description: "Expand from one hub to multiple city clusters"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Assignment Allocation",
      description: "Mini Bharat assigns shipments for your hub/cluster"
    },
    {
      step: "2", 
      title: "Delivery Management",
      description: "Manage deliveries, installations, and returns with your team"
    },
    {
      step: "3",
      title: "Premium Payouts",
      description: "Payouts based on per-shipment + seasonal premium + incentives"
    },
    {
      step: "4",
      title: "Scale & Grow",
      description: "Your hub grows → more volumes → higher monthly income"
    }
  ];

  const franchiseBenefits = [
    "Stable Mini Bharat Logistics-Backed Business",
    "High Revenue Orders (bulky goods = better margins)",
    "Multiple Earning Streams (deliveries + returns + value-adds)",
    "Fast ROI & Scalable Growth across city clusters",
    "Brand Security – Official partnership agreement"
  ];

  const earningData = {
    title: "Tier I City – Large HIH Hub",
    basic: {
      label: "Basic Volume",
      detail: "100 shipments/day × Avg ₹80 to ₹300 per shipment",
      amount: "Monthly Income = ₹12 Lakhs+"
    },
    scaled: {
      label: "With Premiums",
      detail: "Festive premium & SLA incentives",
      amount: "₹16–20 Lakhs/month"
    },
    note: "Bigger shipments mean bigger profits"
  };

  return (
    <BusinessModelTemplate
      badge="Heavy Item Handling"
      title="Large HIH Business Model"
      subtitle="Franchise with Mini Bharat Logistics"
      tagline="Handle Mini Bharat's Heavy Deliveries, Earn Premium Profits"
      description="The Large HIH Model (Heavy Item Handling) is designed for big-ticket deliveries – appliances, furniture, and bulky items. As a Mini Bharat Logistics franchise partner, you'll get assured shipments from MBL, premium payouts, and stable growth."
      heroImage={deliveryTruckImage}
      heroImageAlt="Heavy delivery truck with appliances and furniture"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Assured Orders",
        "Premium Earnings",
        "High-Growth Model"
      ]}
      ctaButtonText="Apply Now – Become a Large HIH Partner"
    />
  );
};

export default LargeHIHBusinessModel;
