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
  CloudRain,
  Sun,
  Snowflake,
  Wind,
  Settings,
  ClipboardCheck,
  ThumbsUp,
  Truck
} from "lucide-react";

// Import images from assets
import metalRoof from "../../assets/images/roof5.jpg";
import asphaltRoof from "../../assets/images/roof1.jpg";
import tileRoof from "../../assets/images/roof2.jpg";
import flatRoof from "../../assets/images/roof3.jpg";
import roofingTeam from "../../assets/images/rooofhero2.jpg";

// Unsplash image for roofing process only
const roofingProcessImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=60";

const RoofingSolutions = () => {
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

  // Roofing Systems
  const roofingSystems = [
    {
      image: metalRoof,
      icon: Shield,
      title: "Metal Roofing",
      description: "Durable, long-lasting metal roofing systems with 50+ year lifespan",
      features: ["Weather Resistant", "Energy Efficient", "Low Maintenance", "Fire Resistant"],
      warranty: "50 Years"
    },
    {
      image: asphaltRoof,
      icon: CloudRain,
      title: "Asphalt Shingles",
      description: "Cost-effective and reliable asphalt shingle roofing solutions",
      features: ["Cost Effective", "Easy Installation", "Wide Variety", "Proven Performance"],
      warranty: "30 Years"
    },
    {
      image: tileRoof,
      icon: Sun,
      title: "Tile Roofing",
      description: "Premium tile roofing for superior durability and aesthetic appeal",
      features: ["Extreme Durability", "Elegant Appearance", "Weather Proof", "Long Lifespan"],
      warranty: "50+ Years"
    },
    {
      image: flatRoof,
      icon: Snowflake,
      title: "Flat Roof Systems",
      description: "Specialized flat roofing solutions for commercial and modern homes",
      features: ["Waterproof Membrane", "UV Protection", "Easy Maintenance", "Modern Look"],
      warranty: "25 Years"
    }
  ];

  // Roofing Process
  const roofingProcess = [
    {
      step: "01",
      title: "Roof Assessment",
      description: "Comprehensive inspection and measurement of your existing roof structure",
      icon: ClipboardCheck
    },
    {
      step: "02",
      title: "Material Selection",
      description: "Choose from premium roofing materials tailored to your climate and needs",
      icon: Settings
    },
    {
      step: "03",
      title: "Professional Installation",
      description: "Expert installation by certified roofing professionals",
      icon: Hammer
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Final inspection and warranty registration for peace of mind",
      icon: Shield
    }
  ];

  // Roofing Benefits
  const roofingBenefits = [
    {
      icon: Shield,
      title: "Maximum Protection",
      description: "Complete weather protection against rain, snow, and extreme conditions"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Reduce energy costs with reflective and insulated roofing systems"
    },
    {
      icon: ThumbsUp,
      title: "Increased Value",
      description: "Boost your property value with a durable, high-quality roof"
    },
    {
      icon: Truck,
      title: "Quick Installation",
      description: "Efficient installation process with minimal disruption to your home"
    }
  ];

  // Weather Resistance
  const weatherFeatures = [
    {
      icon: CloudRain,
      title: "Waterproof",
      description: "Complete protection against heavy rainfall and moisture"
    },
    {
      icon: Wind,
      title: "Wind Resistant",
      description: "Engineered to withstand high winds and storms"
    },
    {
      icon: Sun,
      title: "UV Protection",
      description: "Reflective surfaces that protect against sun damage"
    },
    {
      icon: Snowflake,
      title: "Snow Load",
      description: "Strong structures designed for heavy snow accumulation"
    }
  ];

  // Project Showcase
  const featuredProjects = [
    {
      image: metalRoof,
      title: "Modern Residential Metal Roof",
      location: "Suburban Residence, Austin TX",
      duration: "2 Weeks",
      features: ["Standing Seam Metal", "Energy Star Rated", "50-Year Warranty"]
    },
    {
      image: tileRoof,
      title: "Luxury Villa Tile Roofing",
      location: "Hillside Property, California",
      duration: "4 Weeks",
      features: ["Clay Tile System", "Custom Color Finish", "Lifetime Warranty"]
    },
    {
      image: asphaltRoof,
      title: "Family Home Shingle Replacement",
      location: "Neighborhood Community, Florida",
      duration: "1 Week",
      features: ["Architectural Shingles", "Impact Resistant", "30-Year Warranty"]
    }
  ];

  // Stats
  const roofingStats = [
    { number: "1000+", label: "Roofs Installed", icon: Home },
    { number: "25+", label: "Years Experience", icon: Clock },
    { number: "50yr", label: "Max Warranty", icon: Shield },
    { number: "99%", label: "Client Satisfaction", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Roof Image */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${roofingTeam})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4B942] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Durable Roofing Systems
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Premium Roofing Solutions Built to Last
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Expert installation of durable roofing systems designed to withstand the elements and protect your property for decades. Quality craftsmanship meets superior materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton size="lg" className="font-semibold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Free Roof Inspection
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="font-semibold border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote
                </CustomButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Weather Proof</h3>
                <p className="text-sm text-gray-200">Built to withstand extreme conditions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Energy Smart</h3>
                <p className="text-sm text-gray-200">Reduce cooling costs significantly</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Long Warranty</h3>
                <p className="text-sm text-gray-200">Up to 50-year protection</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Expert Team</h3>
                <p className="text-sm text-gray-200">Certified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {roofingStats.map((stat, index) => (
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

      {/* Roofing Systems with Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Durable Roofing Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our premium roofing solutions, each designed for maximum durability and long-term performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {roofingSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={system.image}
                    alt={system.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#F4B942] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {system.warranty} Warranty
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center">
                      <system.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{system.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{system.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {system.features.map((feature, idx) => (
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

      {/* Project Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Recent Roofing Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See our quality workmanship in action with these recently completed roofing projects
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

      {/* Process Section with Unsplash Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={roofingProcessImage}
                alt="Professional roofing installation process"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B942] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">25+ Years</div>
                <div className="text-sm">Roofing Excellence</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Roofing Installation Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From initial assessment to final inspection, we follow a meticulous process to ensure your roof is installed to the highest standards
              </p>
              <div className="space-y-6">
                {roofingProcess.map((step, index) => (
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

      {/* Weather Resistance */}
      <section className="py-20 bg-gradient-to-br from-[#F4B942]/10 to-[#F4B942]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Built for All Weather Conditions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our roofing systems are engineered to provide superior protection against every element
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weatherFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#F4B942] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
                Why Choose Professional Roofing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional roofing installation provides long-term benefits that protect your investment and enhance your property's value
              </p>
              <div className="space-y-6">
                {roofingBenefits.map((benefit, index) => (
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
              <h3 className="text-2xl font-bold mb-6">Get Your Free Roof Assessment</h3>
              <p className="mb-6">Schedule a professional inspection and receive a detailed quote for your roofing project.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Comprehensive Inspection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Detailed Written Estimate</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>No Obligation Quote</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Expert Recommendations</span>
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
              Ready for a Durable Roof?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your investment with a roofing system built to last. Get your free inspection and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="secondary" size="lg" className="font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Inspection
              </CustomButton>
              <CustomButton size="lg" className="font-semibold bg-white text-[#F4B942] hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                Download Roofing Guide
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoofingSolutions;