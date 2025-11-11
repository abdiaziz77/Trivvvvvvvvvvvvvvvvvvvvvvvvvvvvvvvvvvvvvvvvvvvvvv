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
  Sun
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

const Management = () => {
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
      name: "Michael Rodriguez",
      position: "Senior Project Manager",
      category: "Construction Management",
      image: expert1,
      bio: "Specializing in large-scale commercial projects with a track record of delivering on time and under budget.",
      expertise: ["Project Planning", "Budget Management", "Stakeholder Coordination", "Risk Assessment"],
      experience: "15 years",
      projectsCompleted: "45+",
      certifications: ["PMP", "CM-Lean", "OSHA 30"],
      education: "M.Sc. Construction Management",
      skills: [
        { name: "Project Management", level: 95 },
        { name: "Budget Control", level: 92 },
        { name: "Team Leadership", level: 90 },
        { name: "Risk Management", level: 88 }
      ]
    },
    {
      name: "Sarah Chen",
      position: "Site Superintendent",
      category: "Construction Management",
      image: expert2,
      bio: "Expert in on-site operations and quality control with exceptional problem-solving skills.",
      expertise: ["Site Operations", "Quality Control", "Safety Management", "Subcontractor Coordination"],
      experience: "12 years",
      projectsCompleted: "38+",
      certifications: ["OSHA 500", "First Aid/CPR", "LEED GA"],
      education: "B.Sc. Civil Engineering",
      skills: [
        { name: "Site Management", level: 94 },
        { name: "Quality Assurance", level: 91 },
        { name: "Safety Compliance", level: 96 },
        { name: "Problem Solving", level: 89 }
      ]
    },

    // Design & Architecture
    {
      name: "Elena Martinez",
      position: "Lead Architect",
      category: "Design & Architecture",
      image: expert3,
      bio: "Award-winning architect with expertise in sustainable and innovative building designs.",
      expertise: ["Architectural Design", "Sustainable Design", "3D Modeling", "Client Consultation"],
      experience: "14 years",
      projectsCompleted: "60+",
      certifications: ["AIA", "LEED AP", "NCARB"],
      education: "M.Arch Architecture",
      skills: [
        { name: "Architectural Design", level: 96 },
        { name: "Sustainable Design", level: 93 },
        { name: "3D Modeling", level: 90 },
        { name: "Client Relations", level: 92 }
      ]
    },
    {
      name: "David Kim",
      position: "BIM Specialist",
      category: "Design & Architecture",
      image: expert4,
      bio: "Pioneer in Building Information Modeling with expertise in digital construction workflows.",
      expertise: ["BIM Management", "3D Coordination", "VDC", "Digital Twins"],
      experience: "10 years",
      projectsCompleted: "35+",
      certifications: ["Autodesk Certified", "BIM Management", "VDC Professional"],
      education: "B.Sc. Architectural Engineering",
      skills: [
        { name: "BIM Management", level: 98 },
        { name: "3D Coordination", level: 95 },
        { name: "Revit", level: 97 },
        { name: "Clash Detection", level: 94 }
      ]
    },

    // Engineering
    {
      name: "Dr. James Wilson",
      position: "Structural Engineer",
      category: "Engineering",
      image: expert5,
      bio: "PhD in Structural Engineering with expertise in seismic design and complex structural systems.",
      expertise: ["Structural Analysis", "Seismic Design", "Foundation Engineering", "Steel Structures"],
      experience: "18 years",
      projectsCompleted: "75+",
      certifications: ["PE License", "SE License", "SAC Licensed"],
      education: "Ph.D. Structural Engineering",
      skills: [
        { name: "Structural Analysis", level: 98 },
        { name: "Seismic Design", level: 96 },
        { name: "Engineering Software", level: 94 },
        { name: "Code Compliance", level: 97 }
      ]
    },
    {
      name: "Lisa Thompson",
      position: "Civil Engineer",
      category: "Engineering",
      image: expert6,
      bio: "Specialized in infrastructure projects and site development with environmental focus.",
      expertise: ["Site Development", "Infrastructure", "Grading", "Drainage Systems"],
      experience: "13 years",
      projectsCompleted: "42+",
      certifications: ["PE License", "Envision SP", "CPESC"],
      education: "M.Sc. Civil Engineering",
      skills: [
        { name: "Site Development", level: 93 },
        { name: "Infrastructure Design", level: 91 },
        { name: "Environmental Compliance", level: 94 },
        { name: "Project Coordination", level: 90 }
      ]
    },

    // Safety & Compliance
    {
      name: "Robert Johnson",
      position: "Safety Director",
      category: "Safety & Compliance",
      image: expert7,
      bio: "Dedicated to creating zero-incident work environments through proactive safety measures.",
      expertise: ["Safety Management", "OSHA Compliance", "Incident Investigation", "Training"],
      experience: "16 years",
      projectsCompleted: "50+",
      certifications: ["CSP", "CHST", "OSHA 500"],
      education: "B.Sc. Occupational Safety",
      skills: [
        { name: "Safety Management", level: 97 },
        { name: "Regulatory Compliance", level: 95 },
        { name: "Risk Assessment", level: 93 },
        { name: "Training & Development", level: 92 }
      ]
    },

    // Sustainability
    {
      name: "Maria Garcia",
      position: "Sustainability Consultant",
      category: "Sustainability",
      image: expert8,
      bio: "Passionate about green building and sustainable construction practices.",
      expertise: ["LEED Certification", "Energy Modeling", "Green Materials", "Carbon Footprint"],
      experience: "11 years",
      projectsCompleted: "28+",
      certifications: ["LEED Fellow", "WELL AP", "BREEAM Assessor"],
      education: "M.Sc. Environmental Science",
      skills: [
        { name: "LEED Certification", level: 96 },
        { name: "Energy Modeling", level: 89 },
        { name: "Sustainable Materials", level: 93 },
        { name: "Environmental Analysis", level: 91 }
      ]
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
            {/* Back to About Button */}
            <div className="flex justify-center mb-8">
              <CustomButton 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to About
              </CustomButton>
            </div>

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

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button className="px-4 py-2 bg-[#F4B942] text-white rounded-full font-semibold text-sm">
              All Experts
            </button>
            {expertCategories.map((category, index) => (
              <button 
                key={index}
                className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {expertTeam.map((expert, index) => (
              <CustomCard key={index} className="overflow-hidden group border-gray-200 hover:border-[#F4B942] transition-all duration-300">
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

      {/* Detailed Expert Profiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Profiles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed profiles showcasing the skills, experience, and achievements of our top experts.
            </p>
          </div>

          <div className="space-y-12">
            {expertTeam.slice(0, 4).map((expert, index) => (
              <CustomCard key={index} className="p-8 border-gray-200">
                <div className="grid lg:grid-cols-4 gap-8">
                  {/* Expert Image and Basic Info */}
                  <div className="lg:col-span-1">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-64 object-cover rounded-2xl mb-6"
                    />
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                      <div className="text-[#F4B942] font-semibold text-lg mb-4">{expert.position}</div>
                      <div className="bg-gray-100 rounded-lg px-3 py-2 mb-4">
                        <span className="text-sm font-medium text-gray-700">{expert.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expert Details */}
                  <div className="lg:col-span-3">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-[#F4B942]" />
                            Professional Bio
                          </h4>
                          <p className="text-gray-600 leading-relaxed">{expert.bio}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#F4B942]" />
                            Areas of Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {expert.expertise.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-[#F4B942]/10 text-[#F4B942] rounded-full text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-[#F4B942]" />
                            Certifications
                          </h4>
                          <div className="space-y-2">
                            {expert.certifications.map((cert, certIndex) => (
                              <div key={certIndex} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span className="text-gray-600 text-sm">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-[#F4B942]" />
                            Key Skills
                          </h4>
                          <div className="space-y-3">
                            {expert.skills.map((skill, skillIndex) => (
                              <SkillBar 
                                key={skillIndex}
                                skill={skill.name}
                                level={skill.level}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{expert.experience}</div>
                            <div className="text-sm text-gray-600">Experience</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{expert.projectsCompleted}</div>
                            <div className="text-sm text-gray-600">Projects</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-[#F4B942]" />
                            Education
                          </h4>
                          <p className="text-gray-600">{expert.education}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                      <CustomButton size="sm" className="font-semibold">
                        <MailIcon className="w-4 h-4 mr-2" />
                        Consult {expert.name.split(' ')[0]}
                      </CustomButton>
                      <CustomButton variant="outline" size="sm" className="font-semibold">
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule Call
                      </CustomButton>
                    </div>
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
    </div>
  );
};

export default Management;