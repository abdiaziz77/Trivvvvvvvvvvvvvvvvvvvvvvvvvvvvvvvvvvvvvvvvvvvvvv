import React, { useState } from 'react';
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
  Briefcase,
  GraduationCap,
  DollarSign,
  HeartHandshake,
  ArrowRight,
  Upload,
  FileText,
  Search,
  Filter
} from "lucide-react";

// Import team images
import teamImage1 from "../../assets/images/1.jpg";
import teamImage2 from "../../assets/images/2.jpg";
import teamImage3 from "../../assets/images/3.jpg";
import teamImage4 from "../../assets/images/4.jpg";

const JoinTeam = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 15 },
    { id: 'construction', name: 'Construction', count: 8 },
    { id: 'engineering', name: 'Engineering', count: 4 },
    { id: 'management', name: 'Management', count: 3 },
    { id: 'support', name: 'Support', count: 5 }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Project Manager",
      department: "Construction Management",
      type: "Full-time",
      location: "New York, NY",
      experience: "8+ years",
      salary: "$120,000 - $150,000",
      description: "Lead complex construction projects from conception to completion, ensuring quality, safety, and timely delivery.",
      requirements: [
        "Bachelor's in Construction Management or related field",
        "PMP certification preferred",
        "Experience with large-scale commercial projects",
        "Strong leadership and communication skills"
      ],
      category: "management"
    },
    {
      id: 2,
      title: "Structural Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Chicago, IL",
      experience: "5+ years",
      salary: "$90,000 - $120,000",
      description: "Design and analyze structural systems for various construction projects, ensuring compliance with codes and standards.",
      requirements: [
        "Bachelor's in Civil/Structural Engineering",
        "Professional Engineer (PE) license",
        "Proficiency in structural analysis software",
        "Knowledge of building codes and regulations"
      ],
      category: "engineering"
    },
    {
      id: 3,
      title: "Construction Superintendent",
      department: "Construction",
      type: "Full-time",
      location: "Miami, FL",
      experience: "6+ years",
      salary: "$85,000 - $110,000",
      description: "Oversee daily construction operations, manage site personnel, and ensure project adherence to plans and specifications.",
      requirements: [
        "10+ years construction experience",
        "OSHA 30-hour certification",
        "Strong problem-solving skills",
        "Ability to read and interpret blueprints"
      ],
      category: "construction"
    },
    {
      id: 4,
      title: "Safety Officer",
      department: "Safety & Compliance",
      type: "Full-time",
      location: "Houston, TX",
      experience: "3+ years",
      salary: "$65,000 - $85,000",
      description: "Implement and monitor safety programs, conduct inspections, and ensure compliance with safety regulations.",
      requirements: [
        "OSHA 500 certification",
        "Construction safety experience",
        "Knowledge of safety regulations",
        "Excellent communication skills"
      ],
      category: "support"
    },
    {
      id: 5,
      title: "BIM Specialist",
      department: "Technology",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      salary: "$75,000 - $95,000",
      description: "Develop and manage Building Information Models, coordinate with design teams, and implement BIM processes.",
      requirements: [
        "Bachelor's in Architecture or Engineering",
        "Proficiency in Revit, Navisworks",
        "BIM coordination experience",
        "Strong technical skills"
      ],
      category: "engineering"
    },
    {
      id: 6,
      title: "Construction Laborer",
      department: "Construction",
      type: "Full-time",
      location: "Los Angeles, CA",
      experience: "1+ years",
      salary: "$40,000 - $55,000",
      description: "Perform various physical tasks on construction sites, assist skilled workers, and maintain site cleanliness.",
      requirements: [
        "High school diploma or equivalent",
        "Physical fitness and stamina",
        "Basic tool knowledge",
        "Reliable transportation"
      ],
      category: "construction"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses and comprehensive benefits packages."
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities, certification support, and career advancement programs."
    },
    {
      icon: HeartHandshake,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage with wellness programs and mental health support."
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "State-of-the-art offices and equipment with the latest construction technology and tools."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Inclusive work environment with team-building activities and strong community connections."
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "Employee recognition, awards, and incentives for outstanding performance and innovation."
    }
  ];

  const teamTestimonials = [
    {
      name: "Sarah Johnson",
      position: "Project Manager",
      image: teamImage1,
      quote: "Working here has been transformative. The support for professional growth and the collaborative environment make every day rewarding.",
      tenure: "3 years"
    },
    {
      name: "Michael Chen",
      position: "Structural Engineer",
      image: teamImage2,
      quote: "The opportunity to work on innovative projects with cutting-edge technology has accelerated my career development significantly.",
      tenure: "2 years"
    },
    {
      name: "Emily Rodriguez",
      position: "Safety Director",
      image: teamImage3,
      quote: "Our commitment to safety and employee well-being is genuine. I'm proud to be part of a company that truly cares about its people.",
      tenure: "4 years"
    }
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Application Review",
      description: "We carefully review each application to identify candidates whose skills and experience align with our needs.",
      duration: "1-3 days"
    },
    {
      step: "02",
      title: "Initial Screening",
      description: "A phone or video interview to discuss your background, experience, and interest in the position.",
      duration: "30-45 minutes"
    },
    {
      step: "03",
      title: "Technical Assessment",
      description: "For technical roles, we may include skills assessments or practical exercises relevant to the position.",
      duration: "1-2 hours"
    },
    {
      step: "04",
      title: "Team Interview",
      description: "Meet with the hiring team and potential colleagues to assess cultural fit and collaboration potential.",
      duration: "1-2 hours"
    },
    {
      step: "05",
      title: "Final Interview",
      description: "Discussion with senior leadership about your career goals and how you can contribute to our company's vision.",
      duration: "45-60 minutes"
    },
    {
      step: "06",
      title: "Offer & Onboarding",
      description: "Successful candidates receive a competitive offer and begin our comprehensive onboarding process.",
      duration: "1-2 weeks"
    }
  ];

  const filteredPositions = activeCategory === 'all' 
    ? openPositions 
    : openPositions.filter(job => job.category === activeCategory);

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

  const ApplicationForm = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">Apply for Position</h3>
            <button 
              onClick={() => setShowApplicationForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Drag and drop your resume, or <span className="text-yellow-600 cursor-pointer">browse</span></p>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 5MB</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div className="flex gap-4">
              <CustomButton type="button" variant="outline" className="flex-1" onClick={() => setShowApplicationForm(false)}>
                Cancel
              </CustomButton>
              <CustomButton type="submit" className="flex-1">
                Submit Application
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {showApplicationForm && <ApplicationForm />}
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Build Your Career With Us
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join a team of innovators and builders shaping the future of construction. 
              Discover opportunities where your skills meet purpose and growth knows no limits.
            </p>
            <div className="flex gap-4">
              <CustomButton size="lg" className="font-semibold" onClick={() => document.getElementById('positions').scrollIntoView({ behavior: 'smooth' })}>
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="font-semibold">
                Why Join Us?
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">200+</div>
              <div className="text-lg text-yellow-100">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg text-yellow-100">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg text-yellow-100">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">25%</div>
              <div className="text-lg text-yellow-100">Growth Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Build Your Career With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our team's success with comprehensive benefits and growth opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <CustomCard key={index} className="p-6 text-center group border-yellow-200">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors mx-auto">
                  <benefit.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities and find the perfect role to advance your career in construction.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-yellow-200 hover:bg-yellow-50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((job) => (
              <CustomCard key={job.id} className="p-6 border-yellow-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium"
                        >
                          {req.split(' ').slice(0, 3).join(' ')}...
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <CustomButton onClick={() => setShowApplicationForm(true)}>
                      Apply Now
                    </CustomButton>
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hear From Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes our workplace special through the experiences of our current team members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamTestimonials.map((testimonial, index) => (
              <CustomCard key={index} className="p-6 text-center border-yellow-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <div className="text-yellow-500 mb-2">
                  {'★'.repeat(5)}
                </div>
                <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-yellow-600 text-sm">{testimonial.position}</div>
                  <div className="text-gray-500 text-sm">With us for {testimonial.tenure}</div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've designed a straightforward and transparent process to help you join our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-sm text-yellow-600 font-semibold">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Build Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-yellow-100">
            Take the first step toward an exciting career in construction. 
            Join a team that values innovation, collaboration, and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" variant="secondary" className="font-semibold" onClick={() => setShowApplicationForm(true)}>
              <FileText className="w-5 h-5 mr-2" />
              Apply Now
            </CustomButton>
            <CustomButton size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white hover:text-yellow-600">
              <Mail className="w-5 h-5 mr-2" />
              Contact Recruitment
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinTeam;