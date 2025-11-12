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
  X,
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
  GraduationCap,
  Briefcase,
  FileText
} from "lucide-react";

// Import images - update paths as needed
import expert1 from "../../assets/images/hassan.jpg";
import expert2 from "../../assets/images/khalid.png";
import expert3 from "../../assets/images/abdiaziz.jpg";
import expert4 from "../../assets/images/4.jpg";
import expert5 from "../../assets/images/5.jpg";
import expert6 from "../../assets/images/6.jpg";
import expert7 from "../../assets/images/3.jpg";
import expert8 from "../../assets/images/construction-hero.jpg";
import expertsHero from "../../assets/images/construction-hero.jpg";
import { useState } from "react";

const Management = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Expert categories
  const expertCategories = [
    {
      icon: HardHat,
      title: "Construction Management",
      description: "Project managers, site supervisors, and construction executives",
      count: "15 Experts",
      color: "bg-orange-500"
    },
    {
      icon: Ruler,
      title: "Design & Architecture",
      description: "Architects, designers, and planning specialists",
      count: "12 Experts",
      color: "bg-blue-500"
    },
    {
      icon: Calculator,
      title: "Engineering",
      description: "Structural, civil, and mechanical engineers",
      count: "18 Experts",
      color: "bg-green-500"
    },
    {
      icon: SafetyShield,
      title: "Safety & Compliance",
      description: "Safety officers and regulatory compliance experts",
      count: "8 Experts",
      color: "bg-red-500"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Green building and environmental specialists",
      count: "6 Experts",
      color: "bg-emerald-500"
    },
    {
      icon: Cog,
      title: "Technology & Innovation",
      description: "BIM specialists and construction technologists",
      count: "10 Experts",
      color: "bg-purple-500"
    }
  ];

  // Expert team data
  const expertTeam = [
    // Construction Management
    {
      id: 1,
      name: "Michael Rodriguez",
      position: "Senior Project Manager",
      category: "Construction Management",
      image: expert1,
      bio: "Specializing in large-scale commercial projects with a track record of delivering on time and under budget. Michael has managed projects worth over $500M across various sectors including healthcare, education, and commercial real estate.",
      expertise: ["Project Planning", "Budget Management", "Stakeholder Coordination", "Risk Assessment", "Contract Negotiation", "Team Leadership"],
      experience: "15 years",
      projectsCompleted: "45+",
      certifications: ["PMP", "CM-Lean", "OSHA 30", "LEED AP"],
      education: "M.Sc. Construction Management - Stanford University",
      skills: [
        { name: "Project Management", level: 95 },
        { name: "Budget Control", level: 92 },
        { name: "Team Leadership", level: 90 },
        { name: "Risk Management", level: 88 }
      ],
      achievements: [
        "Delivered $200M hospital project 3 months ahead of schedule",
        "Reduced project costs by 15% through innovative value engineering",
        "Maintained 100% safety record across all projects"
      ],
      contact: {
        email: "m.rodriguez@construction.com",
        phone: "+1 (555) 123-4567",
        linkedin: "linkedin.com/in/michaelrodriguez"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Site Superintendent",
      category: "Construction Management",
      image: expert2,
      bio: "Expert in on-site operations and quality control with exceptional problem-solving skills. Sarah has overseen construction sites with up to 300 workers while maintaining impeccable safety and quality standards.",
      expertise: ["Site Operations", "Quality Control", "Safety Management", "Subcontractor Coordination", "Schedule Optimization", "Problem Resolution"],
      experience: "12 years",
      projectsCompleted: "38+",
      certifications: ["OSHA 500", "First Aid/CPR", "LEED GA", "Construction Quality Manager"],
      education: "B.Sc. Civil Engineering - MIT",
      skills: [
        { name: "Site Management", level: 94 },
        { name: "Quality Assurance", level: 91 },
        { name: "Safety Compliance", level: 96 },
        { name: "Problem Solving", level: 89 }
      ],
      achievements: [
        "Achieved zero safety incidents for 5 consecutive years",
        "Improved site efficiency by 25% through process optimization",
        "Recognized as 'Superintendent of the Year' 2022"
      ],
      contact: {
        email: "s.chen@construction.com",
        phone: "+1 (555) 123-4568",
        linkedin: "linkedin.com/in/sarahchen"
      }
    },

    // Design & Architecture
    {
      id: 3,
      name: "Elena Martinez",
      position: "Lead Architect",
      category: "Design & Architecture",
      image: expert3,
      bio: "Award-winning architect with expertise in sustainable and innovative building designs. Elena's designs have won multiple international awards for their innovative approach to sustainable architecture.",
      expertise: ["Architectural Design", "Sustainable Design", "3D Modeling", "Client Consultation", "Building Codes", "Space Planning"],
      experience: "14 years",
      projectsCompleted: "60+",
      certifications: ["AIA", "LEED AP", "NCARB", "WELL AP"],
      education: "M.Arch Architecture - Harvard University",
      skills: [
        { name: "Architectural Design", level: 96 },
        { name: "Sustainable Design", level: 93 },
        { name: "3D Modeling", level: 90 },
        { name: "Client Relations", level: 92 }
      ],
      achievements: [
        "International Design Award 2021 - Sustainable Architecture",
        "LEED Platinum certification on 8 major projects",
        "Featured in Architectural Digest 'Top 50 Architects Under 40'"
      ],
      contact: {
        email: "e.martinez@construction.com",
        phone: "+1 (555) 123-4569",
        linkedin: "linkedin.com/in/elenamartinez"
      }
    },
    {
      id: 4,
      name: "David Kim",
      position: "BIM Specialist",
      category: "Design & Architecture",
      image: expert4,
      bio: "Pioneer in Building Information Modeling with expertise in digital construction workflows. David has implemented BIM processes that have reduced construction errors by 40% and improved collaboration across all project stakeholders.",
      expertise: ["BIM Management", "3D Coordination", "VDC", "Digital Twins", "Clash Detection", "4D/5D Modeling"],
      experience: "10 years",
      projectsCompleted: "35+",
      certifications: ["Autodesk Certified", "BIM Management", "VDC Professional", "Revit Specialist"],
      education: "B.Sc. Architectural Engineering - UC Berkeley",
      skills: [
        { name: "BIM Management", level: 98 },
        { name: "3D Coordination", level: 95 },
        { name: "Revit", level: 97 },
        { name: "Clash Detection", level: 94 }
      ],
      achievements: [
        "Developed proprietary BIM workflow adopted company-wide",
        "Reduced construction rework by 40% through advanced clash detection",
        "Speaker at International BIM Conference 2023"
      ],
      contact: {
        email: "d.kim@construction.com",
        phone: "+1 (555) 123-4570",
        linkedin: "linkedin.com/in/davidkim"
      }
    },

    // Engineering
    {
      id: 5,
      name: "Dr. James Wilson",
      position: "Structural Engineer",
      category: "Engineering",
      image: expert5,
      bio: "PhD in Structural Engineering with expertise in seismic design and complex structural systems. Dr. Wilson's research in seismic resilience has been implemented in high-risk earthquake zones worldwide.",
      expertise: ["Structural Analysis", "Seismic Design", "Foundation Engineering", "Steel Structures", "Concrete Design", "Finite Element Analysis"],
      experience: "18 years",
      projectsCompleted: "75+",
      certifications: ["PE License", "SE License", "SAC Licensed", "Structural Engineering Certification"],
      education: "Ph.D. Structural Engineering - California Institute of Technology",
      skills: [
        { name: "Structural Analysis", level: 98 },
        { name: "Seismic Design", level: 96 },
        { name: "Engineering Software", level: 94 },
        { name: "Code Compliance", level: 97 }
      ],
      achievements: [
        "Pioneered new seismic design methodology for high-rise buildings",
        "Authored 3 textbooks on structural engineering principles",
        "Lead engineer on 15+ award-winning structural projects"
      ],
      contact: {
        email: "j.wilson@construction.com",
        phone: "+1 (555) 123-4571",
        linkedin: "linkedin.com/in/drjameswilson"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      position: "Civil Engineer",
      category: "Engineering",
      image: expert6,
      bio: "Specialized in infrastructure projects and site development with environmental focus. Lisa has managed civil works for major infrastructure projects including highways, bridges, and water treatment facilities.",
      expertise: ["Site Development", "Infrastructure", "Grading", "Drainage Systems", "Environmental Compliance", "Utility Coordination"],
      experience: "13 years",
      projectsCompleted: "42+",
      certifications: ["PE License", "Envision SP", "CPESC", "Water Resources Engineering"],
      education: "M.Sc. Civil Engineering - University of Texas",
      skills: [
        { name: "Site Development", level: 93 },
        { name: "Infrastructure Design", level: 91 },
        { name: "Environmental Compliance", level: 94 },
        { name: "Project Coordination", level: 90 }
      ],
      achievements: [
        "Managed $150M highway expansion project",
        "Implemented sustainable drainage reducing runoff by 60%",
        "Awarded 'Civil Engineer of the Year' 2021"
      ],
      contact: {
        email: "l.thompson@construction.com",
        phone: "+1 (555) 123-4572",
        linkedin: "linkedin.com/in/lisathompson"
      }
    },

    // Safety & Compliance
    {
      id: 7,
      name: "Robert Johnson",
      position: "Safety Director",
      category: "Safety & Compliance",
      image: expert7,
      bio: "Dedicated to creating zero-incident work environments through proactive safety measures. Robert has developed safety programs that have been adopted industry-wide and reduced workplace injuries by over 70%.",
      expertise: ["Safety Management", "OSHA Compliance", "Incident Investigation", "Training", "Risk Assessment", "Emergency Response"],
      experience: "16 years",
      projectsCompleted: "50+",
      certifications: ["CSP", "CHST", "OSHA 500", "Safety Management Specialist"],
      education: "B.Sc. Occupational Safety - University of Washington",
      skills: [
        { name: "Safety Management", level: 97 },
        { name: "Regulatory Compliance", level: 95 },
        { name: "Risk Assessment", level: 93 },
        { name: "Training & Development", level: 92 }
      ],
      achievements: [
        "Zero lost-time incidents for 8 consecutive years",
        "Developed industry-leading safety training program",
        "OSHA VPP Star Site certification achiever"
      ],
      contact: {
        email: "r.johnson@construction.com",
        phone: "+1 (555) 123-4573",
        linkedin: "linkedin.com/in/robertjohnson"
      }
    },

    // Sustainability
    {
      id: 8,
      name: "Maria Garcia",
      position: "Sustainability Consultant",
      category: "Sustainability",
      image: expert8,
      bio: "Passionate about green building and sustainable construction practices. Maria has helped projects achieve over 25 LEED certifications and reduced carbon footprints by an average of 40%.",
      expertise: ["LEED Certification", "Energy Modeling", "Green Materials", "Carbon Footprint", "Life Cycle Assessment", "Sustainable Sourcing"],
      experience: "11 years",
      projectsCompleted: "28+",
      certifications: ["LEED Fellow", "WELL AP", "BREEAM Assessor", "Green Globes Professional"],
      education: "M.Sc. Environmental Science - Yale University",
      skills: [
        { name: "LEED Certification", level: 96 },
        { name: "Energy Modeling", level: 89 },
        { name: "Sustainable Materials", level: 93 },
        { name: "Environmental Analysis", level: 91 }
      ],
      achievements: [
        "25+ LEED Platinum certifications achieved",
        "Reduced project carbon footprints by 40% on average",
        "Keynote speaker at International Green Building Conference"
      ],
      contact: {
        email: "m.garcia@construction.com",
        phone: "+1 (555) 123-4574",
        linkedin: "linkedin.com/in/mariagarcia"
      }
    }
  ];

  // Specialized services
  const specializedServices = [
    {
      icon: Eye,
      title: "Expert Consultation",
      description: "Get specialized advice from our industry experts for your specific project needs."
    },
    {
      icon: Calculator,
      title: "Technical Analysis",
      description: "Comprehensive technical analysis and feasibility studies for complex projects."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and assurance services throughout project lifecycle."
    },
    {
      icon: CloudRain,
      title: "Risk Assessment",
      description: "Identify and mitigate potential risks with our expert risk assessment services."
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

  // Skill Bar Component
  const SkillBar = ({ skill, level }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{skill}</span>
          <span className="text-sm text-gray-500">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-[#F4B942] h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // Handle expert selection
  const handleExpertClick = (expert) => {
    setSelectedExpert(expert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExpert(null);
    document.body.style.overflow = 'unset';
  };

  // Get related experts
  const getRelatedExperts = (currentExpert) => {
    return expertTeam.filter(expert => 
      expert.category === currentExpert.category && expert.id !== currentExpert.id
    ).slice(0, 3);
  };

  // Expert Modal Component
  const ExpertModal = ({ expert, onClose }) => {
    const relatedExperts = getRelatedExperts(expert);
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto w-full">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{expert.name}</h2>
              <p className="text-[#F4B942] font-semibold text-lg">{expert.position}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Left Column - Image & Basic Info */}
              <div className="lg:col-span-1 space-y-6">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                
                <div className="space-y-4">
                  <div className="bg-[#F4B942]/10 rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#F4B942]" />
                      Quick Stats
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience</span>
                        <span className="font-semibold">{expert.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Projects</span>
                        <span className="font-semibold">{expert.projectsCompleted}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certifications</span>
                        <span className="font-semibold">{expert.certifications.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#F4B942]" />
                      Contact
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span>{expert.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>{expert.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4 text-gray-500" />
                        <span className="text-blue-600 hover:underline cursor-pointer">View Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Detailed Information */}
              <div className="lg:col-span-3 space-y-8">
                {/* Bio */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#F4B942]" />
                    Professional Profile
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{expert.bio}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Expertise */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#F4B942]" />
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {expert.expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-2 bg-[#F4B942]/10 text-[#F4B942] rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-[#F4B942]" />
                      Certifications
                    </h3>
                    <div className="space-y-2">
                      {expert.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#F4B942]" />
                    Key Skills
                  </h3>
                  <div className="space-y-4">
                    {expert.skills.map((skill, index) => (
                      <SkillBar 
                        key={index}
                        skill={skill.name}
                        level={skill.level}
                      />
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#F4B942]" />
                    Notable Achievements
                  </h3>
                  <ul className="space-y-2">
                    {expert.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#F4B942]" />
                    Education
                  </h3>
                  <p className="text-gray-700">{expert.education}</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <CustomButton size="lg" className="font-semibold">
                    <MailIcon className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </CustomButton>
                  <CustomButton variant="outline" size="lg" className="font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Direct Call
                  </CustomButton>
                </div>
              </div>
            </div>

            {/* Related Experts */}
            {relatedExperts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Experts</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedExperts.map((relatedExpert) => (
                    <CustomCard 
                      key={relatedExpert.id}
                      className="p-4 cursor-pointer hover:border-[#F4B942] transition-all duration-300"
                      onClick={() => handleExpertClick(relatedExpert)}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={relatedExpert.image}
                          alt={relatedExpert.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{relatedExpert.name}</h4>
                          <p className="text-[#F4B942] text-sm font-medium">{relatedExpert.position}</p>
                          <p className="text-gray-500 text-xs">{relatedExpert.experience} experience</p>
                        </div>
                      </div>
                    </CustomCard>
                  ))}
                </div>
              </div>
            )}
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
            backgroundImage: `url(${expertsHero})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F4B942]/20 backdrop-blur-sm border border-[#F4B942]/30 rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-[#F4B942]" />
              <span className="text-[#F4B942] font-semibold text-sm uppercase tracking-wide">
                Meet Our Specialists
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Our <span className="text-[#F4B942]">Experts</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              50+ specialized professionals dedicated to excellence in every aspect of construction. 
              From design to delivery, our experts ensure your project's success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CustomButton 
                size="lg" 
                className="font-semibold bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900"
                onClick={() => document.getElementById('expert-categories').scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Experts
                <ChevronRight className="w-5 h-5 ml-2" />
              </CustomButton>
              <CustomButton 
                variant="outline" 
                size="lg" 
                className="font-semibold border-white text-white hover:bg-white hover:text-gray-900"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                Consult an Expert
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Categories */}
      <section id="expert-categories" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expertise Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our specialized teams across all construction disciplines, 
              each bringing unique skills and deep industry knowledge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertCategories.map((category, index) => (
              <CustomCard key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-gray-200 group cursor-pointer">
                <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-[#F4B942]">{category.count}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#F4B942] transition-colors" />
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Highly skilled professionals with proven track records in delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {expertTeam.map((expert, index) => (
              <CustomCard 
                key={expert.id}
                className="overflow-hidden group border-gray-200 hover:border-[#F4B942] transition-all duration-300 cursor-pointer"
                onClick={() => handleExpertClick(expert)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-[#F4B942] text-white text-xs font-semibold rounded">
                      {expert.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{expert.name}</h3>
                  <div className="text-[#F4B942] font-semibold text-sm mb-3">{expert.position}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{expert.bio}</p>
                  
                  {/* Quick Stats */}
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span>Experience</span>
                      <span className="font-semibold">{expert.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projects</span>
                      <span className="font-semibold">{expert.projectsCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certifications</span>
                      <span className="font-semibold">{expert.certifications.length}</span>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {expert.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {expert.expertise.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{expert.expertise.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leverage our specialized expertise through these tailored services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <CustomCard key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-[#F4B942]/20">
                <div className="w-12 h-12 rounded-full bg-[#F4B942] flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Specific Expert?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Connect with the right specialist for your project. Our team matching service 
            ensures you get the exact expertise you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" className="font-semibold bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900">
              <Users className="w-5 h-5 mr-2" />
              Find Your Expert
            </CustomButton>
            <CustomButton variant="outline" size="lg" className="font-semibold border-white text-white hover:bg-white hover:text-gray-900">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Expert Modal */}
      {isModalOpen && selectedExpert && (
        <ExpertModal 
          expert={selectedExpert} 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Management;