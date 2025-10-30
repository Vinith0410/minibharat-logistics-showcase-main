import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JobBoard } from "@/components/careers/JobBoard";
import { JobDetail } from "@/components/careers/JobDetail";
import { JobApplication } from "@/components/careers/JobApplication";
import { Job } from "@/types/career";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplication, setShowApplication] = useState(false);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
    setShowApplication(false);
  };

  const handleApplyClick = () => {
    setShowApplication(true);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
    setShowApplication(false);
  };

  const handleBackToDetail = () => {
    setShowApplication(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        {!selectedJob && !showApplication && (
          <section className="py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">
                Join Our Team
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Build your career with India's leading logistics company. We offer exciting opportunities 
                to grow professionally while making a real impact in the logistics industry.
              </p>
              <div className="flex justify-center gap-4 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Growth</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {showApplication && selectedJob ? (
          <JobApplication 
            job={selectedJob} 
            onBack={handleBackToDetail}
          />
        ) : selectedJob ? (
          <JobDetail 
            job={selectedJob}
            onBack={handleBackToJobs}
            onApply={handleApplyClick}
          />
        ) : (
          <JobBoard onJobSelect={handleJobSelect} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Careers;