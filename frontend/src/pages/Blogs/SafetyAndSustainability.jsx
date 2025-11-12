import React from 'react';
import { 
  Shield,
  Leaf,
  Award,
  Users,
  Clock,
  Check,
  Star,
  Target,
  Eye,
  BookOpen,
  Phone,
  ChevronRight,
  Zap,
  Recycle,
  Sun,
  CloudRain,
  Heart,
  Building,
  Truck,
  Wrench,
  ClipboardCheck,
  ThumbsUp,
  Globe,
  Battery,
  Trees
} from "lucide-react";

// Internet URL images for Safety & Sustainability
const safetyHero = "https://www.nairobisafetyshop.org/wp-content/uploads/2017/11/Construction-Safety-1.jpg";
const sustainabilityImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80";
const safetyTraining = "https://images.unsplash.com/photo-1581092580497-e151a5f7d40b?w=800&auto=format&fit=crop&q=80";
const greenBuilding = "https://advancedct.com/wp-content/uploads/2021/09/shutterstock_140317507.jpg";
const safetyEquipment = "https://images.unsplash.com/photo-1581093458791-8a6a6be5ab6e?w=800&auto=format&fit=crop&q=80";
const ecoMaterials = "https://images.unsplash.com/photo-1541976590-713941681591?w=800&auto=format&fit=crop&q=80";

const SafetyAndSustainability = () => {
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

  // Safety Features
  const safetyFeatures = [
    {
      icon: Shield,
      title: "OSHA Compliance",
      description: "Full compliance with OSHA standards and regulations",
      features: ["Regular Safety Audits", "PPE Requirements", "Safety Training", "Incident Reporting"]
    },
    {
      icon: Users,
      title: "Certified Team",
      description: "All team members are safety-certified and regularly trained",
      features: ["OSHA 30 Certified", "First Aid/CPR", "Equipment Training", "Emergency Response"]
    },
    {
      icon: ClipboardCheck,
      title: "Safety Protocols",
      description: "Comprehensive safety protocols for every project phase",
      features: ["Daily Safety Meetings", "Site Inspections", "Risk Assessment", "Emergency Plans"]
    },
    {
      icon: Award,
      title: "Zero Accident Goal",
      description: "Commitment to maintaining zero recordable incidents",
      features: ["Safety Incentives", "Near-Miss Reporting", "Continuous Improvement", "Safety Culture"]
    }
  ];

  // Sustainability Initiatives
  const sustainabilityInitiatives = [
    {
      icon: Leaf,
      title: "Green Building Materials",
      description: "Using sustainable and eco-friendly construction materials",
      features: ["Recycled Content", "Low VOC Materials", "Sustainable Sourcing", "Local Materials"]
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Comprehensive recycling and waste reduction programs",
      features: ["Construction Recycling", "Waste Diversion", "Material Reuse", "Proper Disposal"]
    },
    {
      icon: Sun,
      title: "Energy Efficiency",
      description: "Implementing energy-efficient designs and systems",
      features: ["High-Efficiency Systems", "Solar Ready", "Insulation", "Energy Monitoring"]
    },
    {
      icon: Trees,
      title: "Environmental Protection",
      description: "Minimizing environmental impact during construction",
      features: ["Erosion Control", "Habitat Protection", "Water Management", "Air Quality"]
    }
  ];

  // Safety Statistics
  const safetyStats = [
    { number: "0", label: "Recordable Incidents", icon: Shield },
    { number: "500+", label: "Safety Certifications", icon: Award },
    { number: "100%", label: "OSHA Compliant", icon: Check },
    { number: "99.8%", label: "Safety Score", icon: Star }
  ];

  // Sustainability Statistics
  const sustainabilityStats = [
    { number: "85%", label: "Waste Recycled", icon: Recycle },
    { number: "50+", label: "LEED Projects", icon: Leaf },
    { number: "40%", label: "Energy Savings", icon: Zap },
    { number: "100%", label: "Sustainable Sourcing", icon: Globe }
  ];

  // Certifications & Awards
  const certifications = [
    {
      name: "OSHA Safety Recognition",
      description: "Awarded for outstanding safety performance",
      icon: Award
    },
    {
      name: "LEED Accredited",
      description: "Certified in Leadership in Energy and Environmental Design",
      icon: Leaf
    },
    {
      name: "Green Building Certified",
      description: "Recognized for sustainable construction practices",
      icon: Building
    },
    {
      name: "Safety Excellence Award",
      description: "Industry recognition for safety innovation",
      icon: Shield
    }
  ];

  // Safety Training Programs
  const trainingPrograms = [
    {
      title: "OSHA 30-Hour Training",
      duration: "30 Hours",
      participants: "All Site Supervisors",
      features: ["Fall Protection", "Hazard Recognition", "Equipment Safety", "Emergency Procedures"]
    },
    {
      title: "First Aid & CPR",
      duration: "8 Hours",
      participants: "All Team Members",
      features: ["Emergency Response", "CPR Techniques", "First Aid Basics", "AED Training"]
    },
    {
      title: "Equipment Safety",
      duration: "16 Hours",
      participants: "Equipment Operators",
      features: ["Proper Operation", "Maintenance", "Safety Checks", "Emergency Stops"]
    },
    {
      title: "Environmental Safety",
      duration: "12 Hours",
      participants: "Project Managers",
      features: ["EPA Regulations", "Spill Prevention", "Waste Management", "Compliance"]
    }
  ];

  // Green Building Practices
  const greenPractices = [
    {
      icon: Battery,
      title: "Energy Efficient Systems",
      description: "Implementing high-efficiency HVAC, lighting, and building systems"
    },
    {
      icon: CloudRain,
      title: "Water Conservation",
      description: "Low-flow fixtures, rainwater harvesting, and efficient irrigation systems"
    },
    {
      icon: Heart,
      title: "Indoor Air Quality",
      description: "Using low-VOC materials and ensuring proper ventilation systems"
    },
    {
      icon: Target,
      title: "Sustainable Sites",
      description: "Minimizing site disturbance and preserving natural habitats"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${safetyHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F4B942] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Safety & Sustainability
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building Safely, Building Green
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Committed to the highest standards of workplace safety and environmental stewardship. 
              We protect our team, our clients, and our planet through innovative practices and sustainable construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton size="lg" className="font-semibold">
                <BookOpen className="w-5 h-5 mr-2" />
                Safety Manual
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="font-semibold">
                <Leaf className="w-5 h-5 mr-2" />
                Sustainability Report
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Safety Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to safety is reflected in our outstanding track record and continuous improvement
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStats.map((stat, index) => (
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

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Comprehensive Safety Program
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our multi-layered safety approach ensures protection for everyone on our job sites
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Stats */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Environmental Stewardship
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our sustainable practices demonstrate our commitment to protecting the environment
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, index) => (
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

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Sustainable Construction Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a greener future through innovative and responsible construction methods
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                    <initiative.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{initiative.title}</h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <div className="space-y-2">
                    {initiative.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Safety Training & Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Continuous education and training ensure our team maintains the highest safety standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{program.title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{program.participants}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
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

      {/* Green Building Practices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Green Building Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We integrate sustainable practices into every project, creating buildings that are 
                environmentally responsible, resource-efficient, and healthy for occupants.
              </p>
              <div className="space-y-6">
                {greenPractices.map((practice, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#F4B942] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <practice.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{practice.title}</h3>
                      <p className="text-gray-600">{practice.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={greenBuilding}
                alt="Green building sustainable construction"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B942] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">LEED</div>
                <div className="text-sm">Certified Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Certifications & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognized for our commitment to safety excellence and environmental responsibility
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#F4B942] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F4B942]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Committed to Safety & Sustainability
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Learn more about our safety protocols and sustainable building practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="secondary" size="lg" className="font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Request Safety Report
              </CustomButton>
              <CustomButton size="lg" className="font-semibold bg-white text-[#F4B942] hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                Download Sustainability Guide
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyAndSustainability;