import React from 'react';
import { 
  Building,
  Shield,
  Award,
  Users,
  Clock,
  Check,
  Star,
  MapPin,
  Calendar,
  Eye,
  BookOpen,
  Phone,
  ChevronRight,
  Target,
  Wrench,
  ClipboardCheck,
  ThumbsUp,
  Truck,
  Landmark,
  FileText,
  Scale,
  Globe,
  Heart
} from "lucide-react";

// Local images from assets/images
import cons from "../../assets/images/cons.webp";
import teamprrocess from "../../assets/images/teamprrocess.jpg";
import teamproject1 from "../../assets/images/teamproject1.jpg";
import govProject2 from "../../assets/images/govproject2.jpg";
import govProject3 from "../../assets/images/govproject3.jpg";
import govProject4 from "../../assets/images/govproject4.jpg";
import govProject5 from "../../assets/images/govproject5.jpg";
import govProject6 from "../../assets/images/govproject6.jpg";

const Government = () => {
  // Custom Button Component
  const CustomButton = ({ children, variant = "default", size = "default", className = "", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg";
    
    const variants = {
      default: "bg-[#F4B942] text-white hover:bg-[#F4B942]/90 shadow-lg hover:shadow-xl hover:scale-105",
      secondary: "bg-white text-[#F4B942] hover:bg-gray-50 border-2 border-[#F4B942] hover:shadow-lg",
      outline: "border-2 border-white text-white hover:bg-white hover:text-gray-900",
    };
    
    const sizes = {
      default: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
      xl: "h-16 px-10 text-xl",
    };
    
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Government Services
  const govServices = [
    {
      icon: Building,
      title: "Public Infrastructure",
      description: "Construction and maintenance of government buildings and facilities",
      features: ["Municipal Buildings", "Courthouses", "Libraries", "Community Centers"],
      compliance: "ADA & Safety Standards"
    },
    {
      icon: Landmark,
      title: "Educational Facilities",
      description: "School construction, renovation, and educational infrastructure development",
      features: ["K-12 Schools", "Universities", "Vocational Centers", "Libraries"],
      compliance: "Educational Standards"
    },
    {
      icon: Shield,
      title: "Public Safety Buildings",
      description: "Police stations, fire departments, and emergency response facilities",
      features: ["Police Stations", "Fire Departments", "EMS Facilities", "911 Centers"],
      compliance: "Life Safety Codes"
    },
    {
      icon: Heart,
      title: "Healthcare Facilities",
      description: "Public hospitals, clinics, and healthcare infrastructure projects",
      features: ["Public Hospitals", "Community Clinics", "Health Centers", "Laboratories"],
      compliance: "Healthcare Regulations"
    },
    {
      icon: Globe,
      title: "Environmental Projects",
      description: "Sustainable infrastructure and environmental protection facilities",
      features: ["Water Treatment", "Waste Management", "Green Buildings", "Parks"],
      compliance: "Environmental Standards"
    },
    {
      icon: Scale,
      title: "Judicial Complexes",
      description: "Courthouses, legal centers, and judicial infrastructure development",
      features: ["Court Houses", "Legal Centers", "Detention Facilities", "Records"],
      compliance: "Judicial Requirements"
    }
  ];

  // Government Process
  const govProcess = [
    {
      step: "01",
      title: "RFP Response & Bidding",
      description: "Comprehensive proposal development and competitive bidding process",
      icon: FileText
    },
    {
      step: "02",
      title: "Compliance Review",
      description: "Thorough review of all government regulations and requirements",
      icon: ClipboardCheck
    },
    {
      step: "03",
      title: "Project Execution",
      description: "Strict adherence to timelines, budgets, and quality standards",
      icon: Wrench
    },
    {
      step: "04",
      title: "Final Inspection",
      description: "Government agency review and project certification",
      icon: Shield
    }
  ];

  // Government Projects
  const govProjects = [
    {
      image: teamproject1,
      title: "Central City Hall Complex",
      agency: "Municipal Government",
      year: "2023",
      duration: "18 Months",
      budget: "$25M",
      highlights: ["LEED Certified", "Public Access", "Security Systems", "Sustainable Design"]
    },
    {
      image: govProject2,
      title: "Regional Public Library",
      agency: "State Library System",
      year: "2022",
      duration: "12 Months",
      budget: "$8.5M",
      highlights: ["Digital Archive", "Community Space", "Accessibility", "Tech Integration"]
    },
    {
      image: govProject3,
      title: "Emergency Operations Center",
      agency: "State Emergency Management",
      year: "2024",
      duration: "24 Months",
      budget: "$35M",
      highlights: ["Disaster Resilient", "Backup Systems", "Command Center", "Training Facilities"]
    },
    {
      image: govProject4,
      title: "Public Health Clinic Network",
      agency: "Department of Health",
      year: "2023",
      duration: "20 Months",
      budget: "$18M",
      highlights: ["Medical Facilities", "Laboratory Space", "Patient Care", "Sanitation Systems"]
    },
    {
      image: govProject5,
      title: "Educational Campus Expansion",
      agency: "State University System",
      year: "2024",
      duration: "22 Months",
      budget: "$42M",
      highlights: ["Smart Classrooms", "Research Labs", "Student Housing", "Recreation Facilities"]
    },
    {
      image: govProject6,
      title: "Judicial Complex Renovation",
      agency: "State Court System",
      year: "2025",
      duration: "16 Months",
      budget: "$15M",
      highlights: ["Courtroom Tech", "Security Upgrades", "Public Access", "Historic Preservation"]
    }
  ];

  // Government Benefits
  const govBenefits = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Full compliance with all government regulations and standards"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Strict adherence to government project timelines and deadlines"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control meeting government specifications"
    },
    {
      icon: Users,
      title: "Transparent Reporting",
      description: "Comprehensive documentation and progress reporting"
    }
  ];

  // Stats
  const govStats = [
    { number: "75+", label: "Government Projects", icon: Building },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "100%", label: "Compliance Rate", icon: Shield },
    { number: "$500M+", label: "Project Value", icon: Award }
  ];

  // Certifications
  const certifications = [
    "GSA Schedule Holder",
    "DBE Certified",
    "SBA Certified",
    "ISO 9001:2015",
    "OSHA Compliance",
    "LEED Accredited"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${cons})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4B942] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Trusted Government Contractor
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building for Public Service Excellence
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Delivering quality construction and infrastructure solutions for government agencies with uncompromising compliance, transparency, and value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton size="lg" className="font-semibold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View GSA Schedule
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="font-semibold border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Procurement
                </CustomButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Fully Compliant</h3>
                <p className="text-sm text-gray-200">Meets all government regulations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Certified</h3>
                <p className="text-sm text-gray-200">Multiple government certifications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">On Schedule</h3>
                <p className="text-sm text-gray-200">Timely project completion</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Experienced</h3>
                <p className="text-sm text-gray-200">15+ years government work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {govStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F4B942] flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900">{stat.number}</div>
                <div className="text-base text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Government Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet the unique requirements of government agencies and public institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {govServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <div className="bg-[#F4B942]/10 text-[#F4B942] font-bold text-sm px-3 py-1 rounded-full mt-1">
                        {service.compliance}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Government Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fully certified and compliant with all government requirements for public projects
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#F4B942] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="font-semibold text-gray-900 text-sm">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={cons}
                alt="Government project process"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B942] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">15+ Years</div>
                <div className="text-sm">Government Experience</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Government Project Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Streamlined approach designed specifically for government projects, ensuring compliance, transparency, and successful delivery
              </p>
              <div className="space-y-6">
                {govProcess.map((step, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#F4B942] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#F4B942] mb-1">Step {step.step}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Recent Government Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Successfully delivered projects for various government agencies and public institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {govProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#F4B942] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{project.agency}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-semibold text-gray-900">{project.duration}</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-sm text-gray-600">Budget</div>
                      <div className="font-semibold text-gray-900">{project.budget}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#F4B942]" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Choose Us for Government Projects?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Proven track record of delivering successful government projects with uncompromising quality, compliance, and value
              </p>
              <div className="space-y-6">
                {govBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#F4B942] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F4B942] to-[#e6a932] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Government Procurement Ready</h3>
              <p className="mb-6">Fully prepared to respond to RFPs and participate in government bidding processes.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>GSA Schedule Holder</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Pre-qualified for State Bids</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Past Performance Documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Security Clearances Available</span>
                </div>
              </div>
              <CustomButton variant="secondary" className="w-full mt-8 font-semibold">
                Download Capability Statement
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F4B942]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Partner on Your Next Government Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our government services team to discuss your project requirements and procurement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="secondary" size="lg" className="font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Contact Government Team
              </CustomButton>
              <CustomButton size="lg" className="font-semibold bg-white text-[#F4B942] hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                View GSA Schedule
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Government;