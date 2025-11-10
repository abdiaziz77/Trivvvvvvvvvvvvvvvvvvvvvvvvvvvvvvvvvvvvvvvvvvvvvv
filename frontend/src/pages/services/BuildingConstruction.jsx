import React from 'react';
import { 
  Hammer, 
  Home, 
  Users, 
  Award, 
  Clock,
  Check, 
  Star, 
  MapPin, 
  Calendar,
  Eye,
  ArrowRight,
  BookOpen,
  Phone,
  ChevronRight,
  Shield,
  Truck,
  Building,
  Zap,
  Target,
  Layers,
  Wrench,
  PaintBucket,
  HardHat,
  Ruler
} from "lucide-react";

// Import your images - corrected paths based on your file structure
import RB56 from "../../assets/images/RB56.png";
import RB2 from "../../assets/images/RB2.png";
import RB3 from "../../assets/images/RB3.png";
import RB55 from "../../assets/images/RB55.png";
import RB57 from "../../assets/images/RB57.png";

const BuildingConstruction = () => {
  // Custom Button Component (same as homepage)
  const CustomButton = ({ children, variant = "default", size = "default", className = "", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background rounded-md transition-all duration-300 transform hover:scale-105";
    
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
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
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
        className={`rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };

  const CustomCardHeader = ({ children, className = "" }) => {
    return (
      <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
        {children}
      </div>
    );
  };

  const CustomCardTitle = ({ children, className = "" }) => {
    return (
      <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
        {children}
      </h3>
    );
  };

  const CustomCardContent = ({ children, className = "" }) => {
    return (
      <div className={`p-6 pt-0 ${className}`}>
        {children}
      </div>
    );
  };

  // Renovation Services
  const renovationServices = [
    {
      icon: Hammer,
      title: "Structural Upgrades",
      description: "Reinforce and modernize building structures with advanced materials and techniques for enhanced safety and longevity.",
      features: ["Beam Reinforcement", "Foundation Strengthening", "Load-Bearing Wall Updates"]
    },
    {
      icon: Home,
      title: "Interior Modernization",
      description: "Transform interior spaces with contemporary designs, smart home integration, and energy-efficient solutions.",
      features: ["Open Concept Layouts", "Smart Home Systems", "Energy-Efficient Lighting"]
    },
    {
      icon: PaintBucket,
      title: "Exterior Facelifts",
      description: "Refresh building exteriors with modern materials, improved insulation, and contemporary architectural elements.",
      features: ["Modern Cladding", "Window Replacements", "Roof Upgrades"]
    },
    {
      icon: Zap,
      title: "Electrical & Plumbing",
      description: "Upgrade outdated electrical and plumbing systems to meet current codes and improve efficiency.",
      features: ["Panel Upgrades", "LED Lighting", "Water-Efficient Plumbing"]
    },
    {
      icon: Wrench,
      title: "HVAC Modernization",
      description: "Install energy-efficient heating, ventilation, and air conditioning systems for optimal comfort.",
      features: ["High-Efficiency Units", "Smart Thermostats", "Zoned Climate Control"]
    },
    {
      icon: Shield,
      title: "Safety Compliance",
      description: "Ensure buildings meet current safety codes with updated fire protection and accessibility features.",
      features: ["Fire Suppression Systems", "ADA Compliance", "Emergency Lighting"]
    }
  ];

  // Renovation Projects
  const renovationProjects = [
    {
      image: RB56,
      title: "Heritage Building Modernization",
      description: "Complete modernization of a historic downtown building while preserving architectural integrity and adding contemporary amenities.",
      location: "123 Historic District, Boston, MA 02108",
      date: "15/03/2023 - 30/11/2023",
      status: "Completed",
      upgrades: ["Structural Reinforcement", "Energy Efficiency", "Interior Redesign"]
    },
    {
      image: RB2,
      title: "Office Complex Upgrade",
      description: "Transformation of outdated office spaces into modern, collaborative work environments with advanced technology integration.",
      location: "456 Business Avenue, New York, NY 10001",
      date: "01/06/2023 - 15/02/2024",
      status: "In Progress",
      upgrades: ["Open Plan Layout", "Smart Office Systems", "Sustainable Materials"]
    },
    {
      image: RB3,
      title: "Residential Complex Renovation",
      description: "Comprehensive upgrade of multi-family residential building with focus on modern amenities and energy efficiency.",
      location: "789 Urban Living, San Francisco, CA 94105",
      date: "10/01/2023 - 20/10/2024",
      status: "Planning Phase",
      upgrades: ["Facade Restoration", "Common Area Updates", "Utility Upgrades"]
    }
  ];

  // Renovation Process
  const renovationProcess = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive evaluation of existing conditions, structural analysis, and development of renovation strategy.",
      icon: Target
    },
    {
      step: "02",
      title: "Design Development",
      description: "Architectural planning, 3D modeling, and material selection to visualize the transformation.",
      icon: Layers
    },
    {
      step: "03",
      title: "Permitting & Approvals",
      description: "Navigating building codes, securing permits, and obtaining necessary approvals for renovation work.",
      icon: Shield
    },
    {
      step: "04",
      title: "Phased Construction",
      description: "Systematic implementation with minimal disruption, ensuring safety and quality at every phase.",
      icon: Hammer
    },
    {
      step: "05",
      title: "Systems Integration",
      description: "Installation of modern electrical, plumbing, HVAC, and smart building systems.",
      icon: Zap
    },
    {
      step: "06",
      title: "Final Inspection & Handover",
      description: "Comprehensive quality checks, final inspections, and project delivery with documentation.",
      icon: Award
    }
  ];

  // Renovation Benefits
  const renovationBenefits = [
    "Increased Property Value up to 35%",
    "Enhanced Energy Efficiency & Lower Utility Costs",
    "Improved Safety & Building Code Compliance",
    "Modern Aesthetics & Functional Layouts",
    "Extended Building Lifespan by 20+ Years",
    "Reduced Maintenance & Repair Costs",
    "Better Indoor Air Quality & Comfort",
    "Increased Occupant Satisfaction & Productivity",
    "Sustainable Material Usage",
    "Future-Proof Technology Integration"
  ];

  // Stats specific to renovation
  const renovationStats = [
    { number: "150+", label: "Buildings Renovated", icon: Building },
    { number: "40%", label: "Average Energy Savings", icon: Zap },
    { number: "35%", label: "Value Increase", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "12-24", label: "Weeks Project Timeline", icon: Clock },
    { number: "24/7", label: "Project Support", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Improved for full image display */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${RB55})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-2xl">
              Building Renovation & Modernization
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100 font-light max-w-3xl mx-auto drop-shadow-lg">
              Transform existing structures into modern, efficient, and valuable assets through expert renovation and strategic upgrades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CustomButton size="xl" className="font-semibold min-w-[200px]">
                <BookOpen className="w-5 h-5 mr-2" />
                Free Renovation Assessment
              </CustomButton>
              <CustomButton variant="outline" size="xl" className="font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 min-w-[200px]">
                <Phone className="w-5 h-5 mr-2" />
                Consultation Call
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced color usage */}
      <section className="py-20 bg-gradient-to-br from-[#F4B942]/15 to-[#F4B942]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {renovationStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F4B942] to-[#e6a932] flex items-center justify-center shadow-lg">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-gray-900 bg-gradient-to-r from-[#F4B942] to-[#e6a932] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-base font-medium text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Improved card design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#F4B942] to-[#e6a932] bg-clip-text text-transparent">
              Comprehensive Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From structural upgrades to modern amenities, we transform existing buildings into contemporary, efficient spaces that stand the test of time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renovationServices.map((service, index) => (
              <CustomCard key={index} className="hover:shadow-2xl transition-all duration-500 h-full group border-2 border-[#F4B942]/20 hover:border-[#F4B942]/40 bg-gradient-to-b from-white to-gray-50/50">
                <CustomCardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4B942] to-[#e6a932] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#F4B942] transition-colors duration-300">
                    {service.title}
                  </h3>
                </CustomCardHeader>
                <CustomCardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-[#F4B942]/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#F4B942]" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Full image display */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={RB57}
                  alt="Renovation team planning building upgrades"
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F4B942] rounded-2xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#F4B942] to-[#e6a932] bg-clip-text text-transparent">
                Why Choose Building Renovation?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Renovation offers significant advantages over new construction, including substantial cost savings, reduced environmental impact, and preservation of unique architectural character that tells your building's story.
              </p>
              <div className="space-y-4">
                {renovationBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F4B942] to-[#e6a932] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
              <CustomButton size="lg" className="font-semibold text-lg px-8 py-4">
                <BookOpen className="w-6 h-6 mr-3" />
                Calculate Your ROI
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced design */}
      <section className="py-20 bg-gradient-to-br from-[#F4B942]/10 to-[#F4B942]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#F4B942] to-[#e6a932] bg-clip-text text-transparent">
              Our Renovation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach that ensures minimal disruption, maximum efficiency, and exceptional results for your building renovation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renovationProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#F4B942] to-[#e6a932] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-2xl border-4 border-[#F4B942] flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-[#F4B942]">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#F4B942] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Full image display */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#F4B942] to-[#e6a932] bg-clip-text text-transparent">
                Recent Renovation Projects
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                See how we've transformed outdated buildings into modern, functional spaces that exceed expectations and deliver exceptional long-term value.
              </p>
            </div>
            <CustomButton size="lg" className="hidden lg:flex font-semibold text-lg px-8">
              View All Projects <ChevronRight className="w-5 h-5 ml-2" />
            </CustomButton>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renovationProjects.map((project, index) => (
              <CustomCard key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-[#F4B942]/20 hover:border-[#F4B942]/40">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      project.status === 'Completed' ? 'bg-green-500 text-white shadow-lg' :
                      project.status === 'In Progress' ? 'bg-[#F4B942] text-white shadow-lg' :
                      'bg-blue-500 text-white shadow-lg'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#F4B942] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-[#F4B942]" />
                      <span className="font-semibold">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-[#F4B942]" />
                      <span className="font-semibold">{project.date}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg text-gray-900">Key Upgrades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.upgrades.map((upgrade, idx) => (
                        <span key={idx} className="px-3 py-2 bg-gradient-to-r from-[#F4B942]/20 to-[#F4B942]/10 text-[#F4B942] font-semibold text-sm rounded-lg border border-[#F4B942]/30">
                          {upgrade}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CustomButton variant="secondary" className="w-full font-semibold text-lg py-3">
                    <Eye className="w-6 h-6 mr-2" />
                    View Case Study
                  </CustomButton>
                </div>
              </CustomCard>
            ))}
          </div>
          
          <div className="text-center mt-12 lg:hidden">
            <CustomButton size="lg" className="font-semibold text-lg px-8">
              View All Projects <ChevronRight className="w-5 h-5 ml-2" />
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced with gradient */}
      <section className="py-20 bg-gradient-to-br from-[#F4B942] to-[#e6a932] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Ready to Transform Your Building?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Get a comprehensive renovation assessment and discover how we can enhance your property's value, efficiency, and functionality for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CustomButton size="xl" variant="secondary" className="font-semibold text-lg px-10 py-5 min-w-[250px] bg-white text-[#F4B942] hover:bg-gray-50 shadow-2xl">
              <Phone className="w-6 h-6 mr-3" />
              Schedule Free Assessment
            </CustomButton>
            <CustomButton size="xl" variant="outline" className="font-semibold text-lg px-10 py-5 min-w-[250px] border-2 border-white text-white hover:bg-white hover:text-[#F4B942] shadow-2xl">
              <Eye className="w-6 h-6 mr-3" />
              Download Renovation Guide
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingConstruction;