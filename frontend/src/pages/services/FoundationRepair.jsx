import React from 'react';
import { 
  Shield,
  Home, 
  Users, 
  Award, 
  Clock,
  Check, 
  Star, 
  MapPin, 
  Calendar,
  Eye,
  BookOpen,
  Phone,
  ChevronRight,
  Zap,
  Target,
  Wrench,
  Hammer,
  Settings,
  ClipboardCheck,
  ThumbsUp,
  Truck,
  Anchor,
  Building,
  HardHat,
  Ruler,
  Scan
} from "lucide-react";

// Temporary placeholder URLs for foundation repair images
const foundationHero = "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800";
const foundationInspection = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600";
const foundationRepair = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600";
const structuralProject1 = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600";
const structuralProject2 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600";
const foundationProcess = "https://images.unsplash.com/photo-1586023492120-925d7e6e5c0f?w=600";

const FoundationRepair = () => {
  // Custom Button Component
  const CustomButton = ({ children, variant = "default", size = "default", className = "", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg";
    
    const variants = {
      default: "bg-[#F4B942] text-white hover:bg-[#F4B942]/90 shadow-lg hover:shadow-xl hover:scale-105",
      secondary: "bg-white text-[#F4B942] hover:bg-gray-50 border-2 border-[#F4B942] hover:shadow-lg",
      outline: "border-2 border-[#F4B942] text-[#F4B942] hover:bg-[#F4B942] hover:text-white",
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

  // Foundation Services
  const foundationServices = [
    {
      icon: Anchor,
      title: "Structural Assessment",
      description: "Comprehensive foundation inspection and structural integrity analysis",
      features: ["Crack Evaluation", "Settlement Analysis", "Moisture Testing", "Load Assessment"],
      warranty: "Lifetime Support"
    },
    {
      icon: Building,
      title: "Foundation Leveling",
      description: "Professional foundation lifting and leveling to restore structural stability",
      features: ["Hydraulic Jacking", "Pier Installation", "Soil Stabilization", "Precision Leveling"],
      warranty: "25 Years"
    },
    {
      icon: Shield,
      title: "Crack Repair",
      description: "Expert concrete crack repair and structural reinforcement solutions",
      features: ["Epoxy Injection", "Carbon Fiber", "Steel Reinforcement", "Waterproofing"],
      warranty: "15 Years"
    },
    {
      icon: HardHat,
      title: "Waterproofing",
      description: "Complete foundation waterproofing and drainage system installation",
      features: ["Membrane Systems", "French Drains", "Sump Pumps", "Grading Correction"],
      warranty: "20 Years"
    }
  ];

  // Foundation Process
  const foundationProcess = [
    {
      step: "01",
      title: "Structural Inspection",
      description: "Thorough assessment of foundation conditions and structural integrity",
      icon: Scan
    },
    {
      step: "02",
      title: "Engineering Analysis",
      description: "Professional engineering evaluation and repair recommendations",
      icon: ClipboardCheck
    },
    {
      step: "03",
      title: "Precision Repair",
      description: "Expert foundation repair using specialized equipment and techniques",
      icon: Wrench
    },
    {
      step: "04",
      title: "Quality Verification",
      description: "Post-repair inspection and structural integrity confirmation",
      icon: Shield
    }
  ];

  // Structural Benefits
  const structuralBenefits = [
    {
      icon: Shield,
      title: "Structural Safety",
      description: "Ensure building stability and protect against structural failure"
    },
    {
      icon: Building,
      title: "Property Value",
      description: "Maintain and increase your property's market value"
    },
    {
      icon: ThumbsUp,
      title: "Peace of Mind",
      description: "Confidence in your building's structural integrity"
    },
    {
      icon: Truck,
      title: "Expert Solutions",
      description: "Professional repair techniques backed by engineering"
    }
  ];

  // Warning Signs
  const warningSigns = [
    {
      icon: Ruler,
      title: "Uneven Floors",
      description: "Sloping or sagging floor surfaces"
    },
    {
      icon: Scan,
      title: "Wall Cracks",
      description: "Diagonal cracks in walls or ceilings"
    },
    {
      icon: Building,
      title: "Sticking Doors",
      description: "Doors and windows that won't open properly"
    },
    {
      icon: Anchor,
      title: "Foundation Gaps",
      description: "Gaps between walls, floors, or ceilings"
    }
  ];

  // Project Showcase
  const featuredProjects = [
    {
      image: structuralProject1,
      title: "Residential Foundation Stabilization",
      location: "Family Home, Dallas TX",
      duration: "3 Weeks",
      features: ["Helical Piers", "Crack Repair", "Waterproofing", "Soil Stabilization"]
    },
    {
      image: structuralProject2,
      title: "Commercial Building Foundation",
      location: "Office Complex, Houston TX",
      duration: "6 Weeks",
      features: ["Concrete Piers", "Structural Beams", "Drainage System", "Load Testing"]
    },
    {
      image: foundationRepair,
      title: "Historic Property Restoration",
      location: "Heritage Building, San Antonio TX",
      duration: "8 Weeks",
      features: ["Preservation Techniques", "Custom Solutions", "Minimal Disruption", "Code Compliance"]
    }
  ];

  // Stats
  const foundationStats = [
    { number: "500+", label: "Foundations Repaired", icon: Home },
    { number: "20+", label: "Years Experience", icon: Clock },
    { number: "25yr", label: "Max Warranty", icon: Shield },
    { number: "98%", label: "Success Rate", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${foundationHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4B942] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Structural Integrity Experts
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Foundation Repair & Structural Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Expert foundation repair services ensuring structural integrity and long-term stability for your property. Professional assessment and precision repairs you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton size="lg" className="font-semibold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Free Foundation Inspection
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="font-semibold border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Assessment
                </CustomButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Structural Safety</h3>
                <p className="text-sm text-gray-200">Ensure building stability and safety</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Expert Engineering</h3>
                <p className="text-sm text-gray-200">Professional structural analysis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Long Warranties</h3>
                <p className="text-sm text-gray-200">Up to 25-year protection</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Certified Team</h3>
                <p className="text-sm text-gray-200">Licensed professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {foundationStats.map((stat, index) => (
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

      {/* Warning Signs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Signs of Foundation Problems
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Early detection of these warning signs can prevent major structural damage and costly repairs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warningSigns.map((sign, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#F4B942] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <sign.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{sign.title}</h3>
                <p className="text-gray-600">{sign.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CustomButton size="lg" className="font-semibold">
              <Scan className="w-5 h-5 mr-2" />
              Schedule Inspection
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Foundation Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Foundation Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive foundation solutions designed to restore structural integrity and ensure long-term stability
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {foundationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <div className="bg-[#F4B942]/10 text-[#F4B942] font-bold text-sm px-3 py-1 rounded-full mt-1">
                        {service.warranty} Warranty
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={foundationProcess}
                alt="Foundation repair process"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B942] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">20+ Years</div>
                <div className="text-sm">Structural Expertise</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Foundation Repair Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Systematic approach to foundation repair ensuring structural integrity and long-term stability through professional assessment and precision execution
              </p>
              <div className="space-y-6">
                {foundationProcess.map((step, index) => (
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

      {/* Project Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Structural Repair Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've restored structural integrity and foundation stability in various projects
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#F4B942]" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Professional Foundation Repair?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional foundation repair ensures structural integrity, protects your investment, and provides long-term peace of mind through expert engineering and quality workmanship
              </p>
              <div className="space-y-6">
                {structuralBenefits.map((benefit, index) => (
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
              <h3 className="text-2xl font-bold mb-6">Free Structural Assessment</h3>
              <p className="mb-6">Schedule a professional foundation inspection and receive expert recommendations for your property.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Comprehensive Inspection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Engineering Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Detailed Repair Plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>No Obligation Quote</span>
                </div>
              </div>
              <CustomButton variant="secondary" className="w-full mt-8 font-semibold">
                Schedule Free Assessment
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
              Protect Your Structural Integrity
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait for foundation problems to worsen. Get professional assessment and repair solutions to ensure your property's long-term stability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="secondary" size="lg" className="font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Inspection
              </CustomButton>
              <CustomButton size="lg" className="font-semibold bg-white text-[#F4B942] hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                Download Guide
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundationRepair;