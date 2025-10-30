import { useState, useMemo } from "react";
import { Search, MapPin, Building2, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Job, JobFilter } from "@/types/career";

// Mock job data
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Assistant Manager – Human Resources",
    department: "Human Resource",
    location: "Mumbai",
    jobCode: "HR001",
    responsibilities: [
      "Manage recruitment and selection processes",
      "Handle employee relations and grievances",
      "Implement HR policies and procedures",
      "Conduct performance management activities"
    ],
    requiredQualifications: [
      "Bachelor's degree in HR or related field",
      "2-3 years of HR experience",
      "Strong communication skills",
      "Knowledge of labor laws"
    ],
    preferredQualifications: [
      "MBA in Human Resources",
      "Experience in logistics industry",
      "HRIS software knowledge"
    ],
    description: "Join our HR team to drive people initiatives and create a positive work environment."
  },
  {
    id: "2",
    title: "Senior Finance Executive",
    department: "Finance",
    location: "Delhi",
    jobCode: "FIN002",
    responsibilities: [
      "Prepare financial statements and reports",
      "Manage accounts payable and receivable",
      "Support budgeting and forecasting",
      "Ensure compliance with financial regulations"
    ],
    requiredQualifications: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "3-5 years of finance experience",
      "Proficiency in Excel and financial software",
      "Strong analytical skills"
    ],
    preferredQualifications: [
      "CA or CMA qualification",
      "ERP software experience",
      "Knowledge of logistics industry"
    ],
    description: "Contribute to financial excellence and support business growth through accurate financial management."
  },
  {
    id: "3",
    title: "Operations Manager",
    department: "Operations",
    location: "Bangalore",
    jobCode: "OPS003",
    responsibilities: [
      "Oversee daily logistics operations",
      "Coordinate with delivery teams",
      "Monitor performance metrics",
      "Implement process improvements"
    ],
    requiredQualifications: [
      "Bachelor's degree in Operations or related field",
      "5+ years of operations experience",
      "Leadership and team management skills",
      "Problem-solving abilities"
    ],
    preferredQualifications: [
      "MBA in Operations",
      "Logistics industry experience",
      "Lean Six Sigma certification"
    ],
    description: "Lead operational excellence and drive efficiency in our logistics operations."
  },
  {
    id: "4",
    title: "Customer Success Executive",
    department: "Customer Support",
    location: "Chennai",
    jobCode: "CS004",
    responsibilities: [
      "Handle customer inquiries and complaints",
      "Provide product information and support",
      "Track and resolve customer issues",
      "Maintain customer relationship records"
    ],
    requiredQualifications: [
      "Bachelor's degree in any field",
      "1-2 years of customer service experience",
      "Excellent communication skills",
      "Patience and empathy"
    ],
    preferredQualifications: [
      "Experience with CRM software",
      "Multiple language proficiency",
      "Previous logistics industry experience"
    ],
    description: "Be the voice of our company and ensure exceptional customer experiences."
  },
  {
    id: "5",
    title: "Business Development Executive",
    department: "Sales",
    location: "Pune",
    jobCode: "BD005",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build relationships with potential clients",
      "Prepare and present business proposals",
      "Achieve sales targets and KPIs"
    ],
    requiredQualifications: [
      "Bachelor's degree in Business or related field",
      "2-4 years of sales experience",
      "Strong negotiation skills",
      "Market analysis abilities"
    ],
    preferredQualifications: [
      "MBA in Marketing or Sales",
      "B2B sales experience",
      "Logistics or supply chain knowledge"
    ],
    description: "Drive business growth by identifying and securing new partnerships and clients."
  },
  {
    id: "6",
    title: "Software Developer",
    department: "Technology",
    location: "Hyderabad",
    jobCode: "TECH006",
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, efficient code",
      "Participate in code reviews",
      "Collaborate with cross-functional teams"
    ],
    requiredQualifications: [
      "Bachelor's degree in Computer Science or related field",
      "2-3 years of development experience",
      "Proficiency in JavaScript, React, Node.js",
      "Understanding of databases"
    ],
    preferredQualifications: [
      "Experience with cloud platforms",
      "Knowledge of logistics systems",
      "Agile development experience"
    ],
    description: "Build innovative technology solutions that power our logistics platform."
  }
];

interface JobBoardProps {
  onJobSelect: (job: Job) => void;
}

export const JobBoard = ({ onJobSelect }: JobBoardProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<JobFilter>({
    searchTerm: "",
    department: "all-departments",
    location: "all-locations"
  });
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);

  const departments = useMemo(() => {
    const deptSet = new Set(mockJobs.map(job => job.department));
    return Array.from(deptSet).map(name => ({ name }));
  }, []);

  const locations = useMemo(() => {
    const locationSet = new Set(mockJobs.map(job => job.location));
    return Array.from(locationSet);
  }, []);

  const jobsByDepartment = useMemo(() => {
    return mockJobs.reduce((acc, job) => {
      if (!acc[job.department]) {
        acc[job.department] = [];
      }
      acc[job.department].push(job);
      return acc;
    }, {} as Record<string, Job[]>);
  }, []);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment = filters.department === "all-departments" || 
                              job.department === filters.department;
      
      const matchesLocation = filters.location === "all-locations" || 
                            job.location === filters.location;

      return matchesSearch && matchesDepartment && matchesLocation;
    });
  }, [searchTerm, filters]);

  const handleSearch = () => {
    // Search is already handled by the filteredJobs useMemo
  };

  const toggleDepartment = (department: string) => {
    setOpenDepartments(prev => 
      prev.includes(department) 
        ? prev.filter(d => d !== department)
        : [...prev, department]
    );
  };

  return (
    <div className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Section */}
        <Card className="mb-8 animate-fade-in bg-card border-border">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Find Your Perfect Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
              </div>

              <Select value={filters.department} onValueChange={(value) => setFilters(prev => ({ ...prev, department: value }))}>
                <SelectTrigger className="bg-background border-border">
                  <Building2 className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-departments">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept.name} value={dept.name}>
                      {dept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
                <SelectTrigger className="bg-background border-border">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                onClick={handleSearch}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Search
              </Button>
            </div>
          </div>
        </Card>

        {/* Results Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Department Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border animate-fade-in">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Departments</h3>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <Collapsible 
                      key={dept.name}
                      open={openDepartments.includes(dept.name)}
                      onOpenChange={() => toggleDepartment(dept.name)}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-center space-x-2">
                          {openDepartments.includes(dept.name) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <span className="text-sm text-foreground">{dept.name}</span>
                        </div>
                        <Badge variant="secondary">
                          {jobsByDepartment[dept.name]?.length || 0}
                        </Badge>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 mt-2 ml-6">
                        {jobsByDepartment[dept.name]?.map((job) => (
                          <div
                            key={job.id}
                            onClick={() => onJobSelect(job)}
                            className="p-2 rounded cursor-pointer hover:bg-muted transition-colors"
                          >
                            <p className="text-sm text-foreground">{job.title}</p>
                            <p className="text-xs text-muted-foreground">{job.location}</p>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <Card 
                    key={job.id}
                    className="bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => onJobSelect(job)}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building2 className="h-4 w-4" />
                              {job.department}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <span>Job Code: {job.jobCode}</span>
                          </div>
                        </div>
                        <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                          Apply Now
                        </Badge>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">{job.description}</p>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="bg-card border-border">
                  <div className="p-12 text-center">
                    <p className="text-muted-foreground text-lg">No jobs found matching your criteria.</p>
                    <p className="text-sm text-muted-foreground mt-2">Try adjusting your search filters.</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};