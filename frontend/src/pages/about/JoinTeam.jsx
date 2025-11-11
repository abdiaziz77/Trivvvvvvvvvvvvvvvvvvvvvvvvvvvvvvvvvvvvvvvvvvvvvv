import React from 'react';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield,
  Building,
  Zap,
  Leaf,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ChevronRight,
  Check,
  Play,
  Linkedin,
  Twitter,
  Mail as MailIcon,
  ArrowLeft,
  Crown,
  Trophy,
  BookOpen,
  Lightbulb,
  TrendingUp,
  HardHat,
  Wrench,
  Ruler,
  Truck,
  Hammer,
  Cog,
  Eye,
  Calculator,
  Shield as SafetyShield,
  CloudRain,
  Sun,
  Briefcase,
  GraduationCap,
  DollarSign,
  Clock as ClockIcon,
  Heart as HeartIcon,
  Users as UsersIcon,
  ArrowRight,
  FileText,
  Upload,
  Search,
  Filter,
  Home,
  X,
  Send,
  Download
} from "lucide-react";

// Import images - replace with your actual professional images
import careerHero from "../../assets/images/careers-hero-professional.png";
import teamCulture from "../../assets/images/team-culture.png";
import officeEnvironment from "../../assets/images/office-environment.png";
import trainingSession from "../../assets/images/training-session.png";
import constructionSite from "../../assets/images/construction-site.png";

const JoinTeam = () => {
  // State for modals
  const [selectedJob, setSelectedJob] = React.useState(null);
  const [selectedCareerPath, setSelectedCareerPath] = React.useState(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = React.useState(false);

  // Job categories
  const jobCategories = [
    {
      icon: HardHat,
      title: "Construction & Field",
      description: "Site supervisors, foremen, skilled trades, and laborers",
      openPositions: 12,
      color: "bg-orange-500"
    },
    {
      icon: Ruler,
      title: "Design & Engineering",
      description: "Architects, engineers, designers, and CAD technicians",
      openPositions: 8,
      color: "bg-blue-500"
    },
    {
      icon: Calculator,
      title: "Project Management",
      description: "Project managers, coordinators, and planning specialists",
      openPositions: 6,
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Safety & Quality",
      description: "Safety officers, quality inspectors, and compliance experts",
      openPositions: 4,
      color: "bg-red-500"
    },
    {
      icon: Cog,
      title: "Operations & Support",
      description: "Administrative, HR, finance, and IT professionals",
      openPositions: 5,
      color: "bg-purple-500"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Environmental specialists and green building consultants",
      openPositions: 3,
      color: "bg-emerald-500"
    }
  ];

  // Current job openings
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Project Manager",
      department: "Project Management",
      type: "Full-time",
      location: "New York, NY",
      experience: "8+ years",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      urgent: true,
      description: "Lead complex construction projects from conception to completion, ensuring timely delivery and budget adherence.",
      requirements: [
        "Bachelor's in Construction Management or related field",
        "PMP certification preferred",
        "Experience with projects over $50M",
        "Strong leadership and communication skills"
      ],
      responsibilities: [
        "Oversee project planning, design, and construction processes",
        "Manage project budgets, schedules, and resources",
        "Coordinate with clients, architects, and subcontractors",
        "Ensure compliance with building codes and safety regulations"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health benefits",
        "401(k) with company matching",
        "Professional development opportunities"
      ]
    },
    {
      id: 2,
      title: "Site Supervisor",
      department: "Construction & Field",
      type: "Full-time",
      location: "Chicago, IL",
      experience: "5+ years",
      salary: "$85,000 - $110,000",
      posted: "1 week ago",
      urgent: false,
      description: "Oversee daily site operations, manage crews, and ensure safety compliance on construction sites.",
      requirements: [
        "5+ years construction supervision experience",
        "OSHA 30 certification required",
        "Strong knowledge of construction methods",
        "Excellent problem-solving skills"
      ],
      responsibilities: [
        "Supervise daily construction activities",
        "Manage and coordinate construction crews",
        "Ensure safety protocols are followed",
        "Maintain quality control standards"
      ],
      benefits: [
        "Competitive compensation package",
        "Vehicle allowance",
        "Health and dental insurance",
        "Paid time off and holidays"
      ]
    },
    // Add similar detailed objects for other jobs...
  ];

  // Benefits and perks
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses and profit sharing"
    },
    {
      icon: ClockIcon,
      title: "Flexible Work Arrangements",
      description: "Remote work options and flexible scheduling for better work-life balance"
    },
    {
      icon: GraduationCap,
      title: "Career Development",
      description: "Tuition reimbursement, certification support, and continuous learning opportunities"
    },
    {
      icon: HeartIcon,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, vision, and mental health benefits"
    },
    {
      icon: UsersIcon,
      title: "Team Culture",
      description: "Collaborative environment with regular team-building events and activities"
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "Employee recognition, awards, and career advancement opportunities"
    }
  ];

  // Career paths
  const careerPaths = [
    {
      level: "Entry Level",
      title: "Junior Positions",
      description: "Start your construction career with hands-on training and mentorship",
      positions: ["Assistant Project Manager", "Junior Engineer", "Field Technician", "CAD Drafter"],
      icon: GraduationCap,
      details: {
        overview: "Begin your journey in the construction industry with comprehensive training and mentorship programs designed to build your skills from the ground up.",
        training: ["90-day onboarding program", "Mentorship pairing", "Technical skills training", "Safety certification"],
        progression: "Typically 2-3 years to mid-level positions",
        averageSalary: "$55,000 - $75,000"
      }
    },
    {
      level: "Mid Level",
      title: "Experienced Professionals",
      description: "Take the next step in your career with increased responsibility",
      positions: ["Project Manager", "Site Supervisor", "Senior Engineer", "Safety Specialist"],
      icon: TrendingUp,
      details: {
        overview: "Leverage your experience to take on greater responsibilities while continuing to develop specialized expertise in your chosen field.",
        training: ["Leadership development", "Advanced technical training", "Project management certification", "Client relations"],
        progression: "Typically 3-5 years to senior positions",
        averageSalary: "$80,000 - $120,000"
      }
    },
    {
      level: "Senior Level",
      title: "Leadership Roles",
      description: "Lead teams and drive innovation in construction management",
      positions: ["Senior PM", "Department Head", "Principal Engineer", "Operations Director"],
      icon: Crown,
      details: {
        overview: "Take on strategic leadership roles where you'll mentor others, drive innovation, and shape the future of our projects and company.",
        training: ["Executive leadership programs", "Strategic planning", "Business development", "Industry thought leadership"],
        progression: "Pathway to executive positions",
        averageSalary: "$120,000 - $180,000"
      }
    },
    {
      level: "Executive",
      title: "Strategic Leadership",
      description: "Shape the future of our company and the construction industry",
      positions: ["Vice President", "Division Head", "C-Suite Executive", "Board Member"],
      icon: Target,
      details: {
        overview: "At the executive level, you'll set company strategy, drive growth initiatives, and represent our organization in the industry.",
        training: ["Board governance", "Mergers and acquisitions", "Industry advocacy", "Global business strategy"],
        progression: "Continual strategic leadership development",
        averageSalary: "$180,000 - $300,000+"
      }
    }
  ];

  // Application process
  const applicationSteps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Complete our online application and upload your resume",
      duration: "15 mins",
      icon: FileText
    },
    {
      step: "02",
      title: "Screening Call",
      description: "Initial phone screening with our recruitment team",
      duration: "30 mins",
      icon: Phone
    },
    {
      step: "03",
      title: "Technical Interview",
      description: "Meet with department leads and team members",
      duration: "60 mins",
      icon: Users
    },
    {
      step: "04",
      title: "Final Interview",
      description: "Meet with senior leadership and discuss offer details",
      duration: "45 mins",
      icon: Award
    }
  ];

  // Custom Button Component
  const CustomButton = ({ children, variant = "default", size = "default", className = "", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    
    const variants = {
      default: "bg-[#F4B942] text-white hover:bg-[#F4B942]/90 shadow-lg hover:shadow-xl",
      secondary: "bg-white text-[#F4B942] hover:bg-gray-50 border border-[#F4B942]",
      outline: "border border-[#F4B942] text-[#F4B942] hover:bg-[#F4B942] hover:text-white",
      ghost: "hover:bg-[#F4B942]/10 hover:text-[#F4B942]",
      link: "underline-offset-4 hover:underline text-[#F4B942]"
    };
    
    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md text-lg",
      xl: "h-14 px-10 rounded-lg text-xl",
      icon: "h-10 w-10"
    };
    
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} rounded-md transition-all duration-300 transform hover:scale-105`}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Custom Card Component
  const CustomCard = ({ children, className = "", ...props }) => {
    return (
      <div 
        className={`rounded-lg border bg-white text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };

  // Job Card Component
  const JobCard = ({ job, onClick }) => {
    return (
      <CustomCard className="p-6 border-gray-200 hover:border-[#F4B942] transition-all duration-300 cursor-pointer" onClick={onClick}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Briefcase className="w-4 h-4" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
          </div>
          {job.urgent && (
            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
              Urgent
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <TrendingUp className="w-4 h-4" />
            <span>{job.experience}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-[#F4B942]">{job.salary}</div>
          <div className="text-sm text-gray-500">{job.posted}</div>
        </div>
      </CustomCard>
    );
  };

  // Job Detail Modal
  const JobDetailModal = ({ job, onClose, onApply }) => {
    if (!job) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{job.title}</h2>
                  <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-2xl font-bold text-[#F4B942]">{job.salary}</div>
                {job.urgent && (
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                    Urgent Hiring
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-[#F4B942] mt-0.5 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-[#F4B942] mt-0.5 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Award className="w-5 h-5 text-[#F4B942]" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-sm text-gray-500">
                  Posted {job.posted} • {job.experience} experience
                </div>
                <div className="flex gap-4">
                  <CustomButton variant="outline" onClick={onClose}>
                    Save for Later
                  </CustomButton>
                  <CustomButton onClick={onApply}>
                    Apply Now
                    <Send className="w-4 h-4 ml-2" />
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Career Path Detail Modal
  const CareerPathDetailModal = ({ careerPath, onClose }) => {
    if (!careerPath) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4B942]/20 rounded-full mb-3">
                    <careerPath.icon className="w-4 h-4 text-[#F4B942]" />
                    <span className="text-sm font-semibold text-[#F4B942]">{careerPath.level}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{careerPath.title}</h2>
                  <p className="text-gray-600 mt-2">{careerPath.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Path Overview</h3>
                <p className="text-gray-700 leading-relaxed">{careerPath.details.overview}</p>
              </div>

              {/* Positions */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Example Positions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {careerPath.positions.map((position, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Target className="w-5 h-5 text-[#F4B942]" />
                      <span className="font-semibold text-gray-900">{position}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training & Development */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Training & Development</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {careerPath.details.training.map((training, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#F4B942] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Program {index + 1}</h4>
                        <p className="text-gray-700 text-sm mt-1">{training}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Progression */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Career Progression</h3>
                  <div className="p-4 bg-[#F4B942]/10 rounded-lg">
                    <p className="text-gray-700">{careerPath.details.progression}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Average Compensation</h3>
                  <div className="p-4 bg-[#F4B942]/10 rounded-lg">
                    <p className="text-2xl font-bold text-[#F4B942]">{careerPath.details.averageSalary}</p>
                    <p className="text-gray-600 text-sm mt-1">Base salary range</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  Ready to start your journey? Explore current openings below.
                </p>
                <CustomButton onClick={() => {
                  onClose();
                  document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' });
                }}>
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Application Form Modal
  const ApplicationFormModal = ({ job, onClose }) => {
    const [formData, setFormData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
      linkedin: '',
      portfolio: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log('Application submitted:', formData);
      // Close modal after submission
      onClose();
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, resume: file }));
    };

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Apply for {job?.title}</h2>
                  <p className="text-gray-600 mt-1">{job?.department} • {job?.location}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F4B942] transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    {formData.resume ? formData.resume.name : 'Drag and drop your resume, or click to browse'}
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                    id="resume-upload"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <CustomButton variant="outline" size="sm">
                      Choose File
                    </CustomButton>
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                  placeholder="Tell us why you're interested in this position..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Portfolio Website
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolio}
                    onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <CustomButton variant="outline" type="button" onClick={onClose} className="flex-1">
                  Cancel
                </CustomButton>
                <CustomButton type="submit" className="flex-1">
                  Submit Application
                  <Send className="w-4 h-4 ml-2" />
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${careerHero})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Professional Header */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Briefcase className="w-5 h-5 text-[#F4B942]" />
              <span className="text-[#F4B942] font-semibold text-sm uppercase tracking-wide">
                Building Careers, Shaping Futures
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Join Our <span className="text-[#F4B942]">Team</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Shape the skyline of tomorrow with industry leaders. Discover opportunities where 
              innovation meets construction excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CustomButton 
                size="lg" 
                className="font-semibold bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900"
                onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Opportunities
                <ChevronRight className="w-5 h-5 ml-2" />
              </CustomButton>
              <CustomButton 
                variant="outline" 
                size="lg" 
                className="font-semibold border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => setIsApplicationModalOpen(true)}
              >
                <MailIcon className="w-5 h-5 mr-2" />
                General Application
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Years Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Career Paths</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your perfect role across our diverse departments and specialties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobCategories.map((category, index) => (
              <CustomCard key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-gray-200 group cursor-pointer">
                <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-[#F4B942]">
                    {category.openPositions} Open Positions
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#F4B942] transition-colors" />
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our latest career opportunities and find your next role.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search positions, keywords, or departments..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent">
                <option>All Departments</option>
                <option>Construction & Field</option>
                <option>Design & Engineering</option>
                <option>Project Management</option>
                <option>Safety & Quality</option>
                <option>Operations & Support</option>
                <option>Sustainability</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4B942] focus:border-transparent">
                <option>All Locations</option>
                <option>New York, NY</option>
                <option>Chicago, IL</option>
                <option>Los Angeles, CA</option>
                <option>Houston, TX</option>
                <option>Miami, FL</option>
                <option>Remote</option>
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <JobCard 
                key={job.id} 
                job={job}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <CustomButton variant="outline" size="lg">
              Load More Positions
              <ChevronRight className="w-5 h-5 ml-2" />
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Our Team?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our team's success with comprehensive benefits and a supportive work environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <CustomCard key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-[#F4B942]/20">
                <div className="w-12 h-12 rounded-full bg-[#F4B942] flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Grow With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From entry-level to executive, we provide clear career paths and growth opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerPaths.map((path, index) => (
              <CustomCard 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 border-gray-200 cursor-pointer"
                onClick={() => setSelectedCareerPath(path)}
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 mx-auto">
                  <path.icon className="w-6 h-6 text-[#F4B942]" />
                </div>
                <div className="text-sm font-semibold text-[#F4B942] mb-2">{path.level}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{path.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                <div className="space-y-2">
                  {path.positions.map((position, posIndex) => (
                    <div key={posIndex} className="text-xs text-gray-500">• {position}</div>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="text-[#F4B942] text-sm font-semibold cursor-pointer hover:underline">
                    Learn More →
                  </span>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and designed to help you showcase your skills.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#F4B942] flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <div className="text-sm text-gray-500">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={teamCulture}
                alt="Our team culture and work environment"
                className="rounded-2xl w-full h-96 object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Culture</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great buildings start with great teams. Our culture is built on collaboration, 
                innovation, and mutual respect.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F4B942] flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaborative Environment</h4>
                    <p className="text-gray-600 text-sm">Work with talented professionals across all disciplines</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F4B942] flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation Focus</h4>
                    <p className="text-gray-600 text-sm">Access to latest technologies and construction methods</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F4B942] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Work-Life Balance</h4>
                    <p className="text-gray-600 text-sm">Flexible schedules and comprehensive wellness programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your Future With Us?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Don't see the perfect role? We're always looking for talented people. 
              Send us your resume and tell us how you can contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton 
                size="lg" 
                className="font-semibold bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900"
                onClick={() => setIsApplicationModalOpen(true)}
              >
                <Upload className="w-5 h-5 mr-2" />
                Submit General Application
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="font-semibold border-white text-white hover:bg-white hover:text-gray-900">
                <MailIcon className="w-5 h-5 mr-2" />
                Contact Recruitment
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedJob && (
        <JobDetailModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)}
          onApply={() => {
            setSelectedJob(null);
            setIsApplicationModalOpen(true);
          }}
        />
      )}

      {selectedCareerPath && (
        <CareerPathDetailModal 
          careerPath={selectedCareerPath}
          onClose={() => setSelectedCareerPath(null)}
        />
      )}

      {isApplicationModalOpen && (
        <ApplicationFormModal 
          job={selectedJob}
          onClose={() => setIsApplicationModalOpen(false)}
        />
      )}
    </div>
  );
};

export default JoinTeam;