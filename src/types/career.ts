export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  jobCode: string;
  responsibilities: string[];
  requiredQualifications: string[];
  preferredQualifications: string[];
  description: string;
}

export interface JobFilter {
  searchTerm: string;
  department: string;
  location: string;
}

export interface JobApplication {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  education: string;
  currentOrganization: string;
  currentLocation: string;
  totalExperience: string;
  noticePeriod: string;
  city: string;
  state: string;
  pincode: string;
  resume: File | null;
  jobId: string;
  position: string;
}