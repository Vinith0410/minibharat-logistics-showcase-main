import { useEffect } from "react";
import BusinessModelTemplate from "@/components/BusinessModelTemplate";
import odhmdhTruckImage from "@/assets/services/sas-transport-min.jpg";
import {
  Package,
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  MapPin,
  Users,
  Truck,
} from "lucide-react";

const ODHMDHBusinessModel = () => {
  useEffect(() => {
    document.title = "ODH/MDH Business Model | Mini Bharat Logistics";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join Mini Bharat Logistics ODH/MDH Business Model — own a Flipkart-backed delivery hub franchise with assured business, transparent payouts, and high monthly income potential."
      );
    }
  }, []);

  const benefits = [
    {
      icon: Package,
      title: "Assured Business Flow",
      description:
        "Daily shipments directly allocated by Mini Bharat Logistics (no marketing needed).",
    },
    {
      icon: DollarSign,
      title: "Multiple Income Streams",
      description:
        "Earn from forward deliveries, RTO, grocery, COD handling & reverse pickups.",
    },
    {
      icon: TrendingUp,
      title: "Transparent Rate Structure",
      description:
        "Volume-based slabs ensure predictable monthly income with performance bonuses.",
    },
    {
      icon: Zap,
      title: "Quick ROI & Fast Payments",
      description:
        "COD remittance within 48 hours and payouts cleared every 30 days.",
    },
    {
      icon: Shield,
      title: "Performance Incentives",
      description:
        "Earn extra ₹1–₹1.5 per shipment for top-performing hubs with high SLA compliance.",
    },
    {
      icon: MapPin,
      title: "Nationwide Scalability",
      description:
        "Operate in Tier I–IV cities and special zones with official Flipkart partnership.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Shipment Assignment",
      description:
        "MBL allocates daily shipments to your ODH/MDH hub based on your zone capacity.",
    },
    {
      step: "2",
      title: "Operations Management",
      description:
        "Manage local deliveries, reverse pickups, and COD remittance efficiently.",
    },
    {
      step: "3",
      title: "Earnings & Incentives",
      description:
        "Receive transparent payouts plus performance-based bonuses every cycle.",
    },
    {
      step: "4",
      title: "Scale & Expand",
      description:
        "Grow your hub network across cities with more volumes and higher profits.",
    },
  ];

  const franchiseBenefits = [
    "Guaranteed MBL-Backed Business – steady shipment inflow.",
    "Transparent rate slabs with high payout visibility.",
    "Fast ROI – recover setup cost within a few months.",
    "Dual Earning – combine with LMA/HIH models for higher margins.",
    "Nationwide growth opportunity with strong backend support.",
    "Tech-powered dashboard for tracking and reports.",
  ];

  const earningData = {
    title: "Tier II City – ODH Hub Example",
    basic: {
      label: "Standard Volume",
      detail: "10,000 shipments / 15 days × ₹31 per shipment",
      amount: "Monthly Income ≈ ₹9.3 Lakhs",
    },
    scaled: {
      label: "With Incentives",
      detail: "Extra ₹1.5 per shipment for 93%+ performance",
      amount: "₹9.75–₹14 Lakhs/month",
    },
    note: "High-performing hubs can scale ₹14–16 Lakhs+ monthly",
  };

  return (
    <BusinessModelTemplate
      badge="Flipkart-Backed Model"
      title="ODH/MDH Business Model"
      subtitle="Franchise with Mini Bharat Logistics"
      tagline="Own a Delivery Hub with Assured Business and High ROI"
      description="The ODH/MDH Business Model empowers entrepreneurs to run a Flipkart-supported delivery hub under Mini Bharat Logistics. Enjoy daily shipment flow, transparent payouts, and strong tech-backed operations."
      heroImage={odhmdhTruckImage}
      heroImageAlt="Mini Bharat Logistics ODH/MDH Delivery Truck"
      benefits={benefits}
      howItWorks={howItWorks}
      franchiseBenefits={franchiseBenefits}
      earningData={earningData}
      ctaBadges={[
        "Assured Orders",
        "High ROI",
        "Scalable Franchise",
      ]}
      ctaButtonText="Apply Now – Become an ODH/MDH Partner"
    />
  );
};

export default ODHMDHBusinessModel;
