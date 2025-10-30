import { useState } from "react";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Job, JobApplication as JobApplicationType } from "@/types/career";
import { useToast } from "@/hooks/use-toast";

interface JobApplicationProps {
  job: Job;
  onBack: () => void;
}

export const JobApplication = ({ job, onBack }: JobApplicationProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string>("");

  const form = useForm<JobApplicationType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      gender: "",
      education: "",
      currentOrganization: "",
      currentLocation: "",
      totalExperience: "",
      noticePeriod: "",
      city: "",
      state: "",
      pincode: "",
      resume: null,
      jobId: job.id,
      position: job.title,
    },
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      setResumeError("Please upload a PDF or Word document");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File size must be less than 5MB");
      return;
    }

    setResumeError("");
    setResumeFile(file);
    form.setValue("resume", file);
  };

  const onSubmit = async (data: JobApplicationType) => {
    if (!resumeFile) {
      setResumeError("Please upload your resume");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      
      // Reset form
      form.reset();
      setResumeFile(null);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
            Back to Job Details
          </Button>
          
          <Card className="bg-card border-border">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Apply for {job.title}</h1>
              <p className="text-muted-foreground">
                {job.department} • {job.location} • Job Code: {job.jobCode}
              </p>
            </div>
          </Card>
        </div>

        {/* Application Form */}
        <Card className="bg-card border-border">
          <div className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your first name" 
                              {...field} 
                              className="bg-background border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your last name" 
                              {...field} 
                              className="bg-background border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email" 
                              {...field} 
                              className="bg-background border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your mobile number" 
                              {...field} 
                              className="bg-background border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Professional Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Highest Education *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border">
                                <SelectValue placeholder="Select education level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="high-school">High School</SelectItem>
                              <SelectItem value="diploma">Diploma</SelectItem>
                              <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                              <SelectItem value="master">Master's Degree</SelectItem>
                              <SelectItem value="phd">PhD</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="currentOrganization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Organization</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter current company name" 
                              {...field} 
                              className="bg-background border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="totalExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Experience *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border">
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="fresher">Fresher</SelectItem>
                              <SelectItem value="0-1">0-1 years</SelectItem>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="5-10">5-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="noticePeriod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notice Period *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border">
                                <SelectValue placeholder="Select notice period" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate</SelectItem>
                              <SelectItem value="15-days">15 days</SelectItem>
                              <SelectItem value="1-month">1 month</SelectItem>
                              <SelectItem value="2-months">2 months</SelectItem>
                              <SelectItem value="3-months">3 months</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Location Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Location Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your city" 
                              {...field} 
                              className="bg-background border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your state" 
                              {...field} 
                              className="bg-background border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="pincode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pincode *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your pincode" 
                              {...field} 
                              className="bg-background border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Resume Upload</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="resume">Upload Resume *</Label>
                      <div className="mt-2">
                        <input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('resume')?.click()}
                          className="w-full h-20 border-dashed border-2 border-border hover:border-primary transition-colors"
                        >
                          <div className="text-center">
                            <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              {resumeFile ? resumeFile.name : "Click to upload resume (PDF, DOC, DOCX)"}
                            </p>
                            <p className="text-xs text-muted-foreground">Max size: 5MB</p>
                          </div>
                        </Button>
                        {resumeError && (
                          <div className="flex items-center mt-2 text-red-600">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            <span className="text-sm">{resumeError}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-border">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    By submitting this application, you agree to our terms and conditions.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};