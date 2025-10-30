import { ArrowLeft, MapPin, Building2, Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Job } from "@/types/career";
import { useToast } from "@/hooks/use-toast";

interface JobDetailProps {
  job: Job;
  onBack: () => void;
  onApply: () => void;
}

export const JobDetail = ({ job, onBack, onApply }: JobDetailProps) => {
  const { toast } = useToast();

  const copyJobLink = () => {
    const jobUrl = `${window.location.origin}/careers?job=${job.id}`;
    navigator.clipboard.writeText(jobUrl);
    toast({
      title: "Link copied!",
      description: "Job link has been copied to clipboard.",
    });
  };

  const shareToSocial = (platform: string) => {
    const jobUrl = `${window.location.origin}/careers?job=${job.id}`;
    const text = `Check out this job opportunity: ${job.title} at ${job.location}`;
    
    let shareUrl = "";
    switch (platform) {
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + jobUrl)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(jobUrl)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            onClick={onBack}
            variant="ghost"
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Button>
          
          <Card className="bg-card border-border">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-4">{job.title}</h1>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>{job.location}</span>
                    </div>
                    <span>Job Code: {job.jobCode}</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-col sm:flex-row">
                  <Button 
                    onClick={copyJobLink}
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-muted"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                  <Button 
                    onClick={() => shareToSocial('linkedin')}
                    variant="outline"
                    size="sm"
                    className="border-border hover:bg-muted"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              <Button 
                onClick={onApply}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Apply for this position
              </Button>
            </div>
          </Card>
        </div>

        {/* Job Details */}
        <div className="space-y-8">
          {/* Description */}
          <Card className="bg-card border-border">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Job Description</h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>
          </Card>

          {/* Responsibilities */}
          <Card className="bg-card border-border">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Required Qualifications */}
            <Card className="bg-card border-border">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Required Qualifications</h2>
                <ul className="space-y-3">
                  {job.requiredQualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Preferred Qualifications */}
            <Card className="bg-card border-border">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Preferred Qualifications</h2>
                <ul className="space-y-3">
                  {job.preferredQualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="bg-muted/30 border-border">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Why Join Minibharat?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Growth Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Expand your career with our comprehensive training programs and clear advancement paths.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Work-Life Balance</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy flexible working arrangements and a supportive work environment.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Competitive Benefits</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive healthcare, performance bonuses, and employee perks.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Innovation Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Work with cutting-edge technology and contribute to industry-leading solutions.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Sharing */}
          <Card className="bg-card border-border">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Share this Job</h2>
              <p className="text-muted-foreground mb-4">
                Know someone who would be perfect for this role? Share it with them!
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => shareToSocial('linkedin')}
                  variant="outline"
                  size="sm"
                  className="border-blue-500 text-blue-500 hover:bg-blue-50"
                >
                  Share on LinkedIn
                </Button>
                <Button
                  onClick={() => shareToSocial('whatsapp')}
                  variant="outline"
                  size="sm"
                  className="border-green-500 text-green-500 hover:bg-green-50"
                >
                  Share on WhatsApp
                </Button>
                <Button
                  onClick={() => shareToSocial('facebook')}
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Share on Facebook
                </Button>
                <Button
                  onClick={() => shareToSocial('twitter')}
                  variant="outline"
                  size="sm"
                  className="border-sky-500 text-sky-500 hover:bg-sky-50"
                >
                  Share on Twitter
                </Button>
              </div>
            </div>
          </Card>

          {/* Apply CTA */}
          <div className="text-center py-8">
            <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-orange-800">Ready to Apply?</h2>
                <p className="text-orange-700 mb-6">
                  Take the next step in your career journey with Minibharat.
                </p>
                <Button 
                  onClick={onApply}
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};