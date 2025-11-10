import React from 'react';
import { 
  Zap,
  Droplets,
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
  Shield,
  Target,
  Wrench,
  Hammer,
  Settings,
  ClipboardCheck,
  ThumbsUp,
  Truck,
  Lightbulb,
  Gauge,
  Battery,
  Router,
  Fan,
  Thermometer,
  Bath // Replaced Showerhead with Bath
} from "lucide-react";

// Temporary placeholder URLs for electrical and plumbing images
const electricalHero = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800";
const electricalService = "https://images.unsplash.com/photo-1621905251189-08e45c6d63e0?w=600";
const plumbingService = "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600";
const smartHomeProject = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600";
const bathroomRemodel = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600";
const systemUpgrade = "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600";

const ElectricalAndPlumbing = () => {
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

  // Electrical Services
  const electricalServices = [
    {
      icon: Zap,
      title: "Electrical Panel Upgrades",
      description: "Modern electrical panel installation and upgrades for improved safety and capacity",
      features: ["200A Service", "Code Compliance", "Surge Protection", "Future Expansion"],
      warranty: "10 Years"
    },
    {
      icon: Lightbulb,
      title: "Lighting Installation",
      description: "Professional lighting solutions including LED upgrades and smart lighting systems",
      features: ["LED Conversion", "Smart Controls", "Energy Efficient", "Custom Design"],
      warranty: "5 Years"
    },
    {
      icon: Router,
      title: "Smart Home Integration",
      description: "Complete smart home electrical systems and automation solutions",
      features: ["Home Automation", "Voice Control", "Energy Monitoring", "Security Integration"],
      warranty: "3 Years"
    },
    {
      icon: Fan,
      title: "HVAC Electrical",
      description: "Professional electrical work for heating, ventilation, and air conditioning systems",
      features: ["HVAC Wiring", "Thermostat Installation", "Circuit Design", "Load Calculation"],
      warranty: "5 Years"
    }
  ];

  // Plumbing Services
  const plumbingServices = [
    {
      icon: Droplets,
      title: "Pipe Repair & Replacement",
      description: "Expert pipe repair and replacement using modern materials and techniques",
      features: ["PEX Installation", "Copper Work", "Leak Detection", "Water Pressure"],
      warranty: "15 Years"
    },
    {
      icon: Bath, // Replaced Showerhead with Bath
      title: "Fixture Installation",
      description: "Professional installation of sinks, toilets, showers, and other plumbing fixtures",
      features: ["Modern Fixtures", "Water Efficiency", "Proper Sealing", "Code Compliance"],
      warranty: "5 Years"
    },
    {
      icon: Gauge,
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of tank and tankless water heaters",
      features: ["Tankless Systems", "Energy Efficient", "Proper Venting", "Safety Checks"],
      warranty: "10 Years"
    },
    {
      icon: Thermometer,
      title: "Drain & Sewer Solutions",
      description: "Complete drain cleaning, sewer line repair, and drainage system installation",
      features: ["Camera Inspection", "Hydro Jetting", "Pipe Lining", "Root Removal"],
      warranty: "5 Years"
    }
  ];

  // Combined Process
  const systemProcess = [
    {
      step: "01",
      title: "System Assessment",
      description: "Comprehensive evaluation of electrical and plumbing systems and requirements",
      icon: ClipboardCheck
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Detailed system design and material selection for optimal performance",
      icon: Settings
    },
    {
      step: "03",
      title: "Professional Installation",
      description: "Expert installation by licensed electricians and plumbers",
      icon: Wrench
    },
    {
      step: "04",
      title: "Testing & Commissioning",
      description: "Thorough system testing and client demonstration",
      icon: Shield
    }
  ];

  // System Benefits
  const systemBenefits = [
    {
      icon: Zap,
      title: "Enhanced Safety",
      description: "Code-compliant installations ensuring electrical and plumbing safety"
    },
    {
      icon: Battery,
      title: "Energy Efficiency",
      description: "Modern systems designed to reduce energy and water consumption"
    },
    {
      icon: ThumbsUp,
      title: "Reliability",
      description: "Dependable systems with professional installation and warranties"
    },
    {
      icon: Truck,
      title: "Expert Service",
      description: "Licensed professionals ensuring quality workmanship"
    }
  ];

  // Project Showcase
  const featuredProjects = [
    {
      image: smartHomeProject,
      title: "Whole-House Electrical Upgrade",
      location: "Modern Residence, Austin TX",
      duration: "2 Weeks",
      systems: ["200A Panel Upgrade", "Smart Lighting", "EV Charger", "Whole-House Surge"],
      type: "Electrical"
    },
    {
      image: bathroomRemodel,
      title: "Luxury Bathroom Remodel",
      location: "Master Suite, Dallas TX",
      duration: "3 Weeks",
      systems: ["Custom Shower", "Smart Toilet", "Vanity Plumbing", "Heated Floors"],
      type: "Plumbing"
    },
    {
      image: systemUpgrade,
      title: "Complete System Modernization",
      location: "Historic Home, San Antonio TX",
      duration: "4 Weeks",
      systems: ["Electrical Rewire", "Pipe Replacement", "Panel Upgrade", "Fixture Update"],
      type: "Combined"
    }
  ];

  // Stats
  const systemStats = [
    { number: "1000+", label: "Systems Installed", icon: Home },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "24/7", label: "Emergency Service", icon: Shield },
    { number: "99%", label: "Client Satisfaction", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${electricalHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4B942] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                Licensed Electrical & Plumbing
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional Electrical & Plumbing Services
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Complete electrical and plumbing solutions for residential and commercial properties. Licensed professionals ensuring safety, efficiency, and reliability in every installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton size="lg" className="font-semibold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Schedule Service
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="font-semibold border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Call
                </CustomButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Licensed Electricians</h3>
                <p className="text-sm text-gray-200">Certified electrical professionals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Master Plumbers</h3>
                <p className="text-sm text-gray-200">Expert plumbing specialists</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Code Compliant</h3>
                <p className="text-sm text-gray-200">All work meets current codes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Warranty Protected</h3>
                <p className="text-sm text-gray-200">Comprehensive service warranties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {systemStats.map((stat, index) => (
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

      {/* Electrical Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F4B942] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              Electrical Services
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Professional Electrical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete electrical services from panel upgrades to smart home integration by licensed electricians
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {electricalServices.map((service, index) => (
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

      {/* Plumbing Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F4B942] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Droplets className="w-4 h-4" />
              Plumbing Services
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Expert Plumbing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive plumbing services including repairs, installations, and system upgrades by master plumbers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {plumbingServices.map((service, index) => (
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
                src={electricalService}
                alt="Professional electrical and plumbing work"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B942] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">15+ Years</div>
                <div className="text-sm">Licensed Experts</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Professional Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Systematic approach to electrical and plumbing projects ensuring safety, code compliance, and customer satisfaction
              </p>
              <div className="space-y-6">
                {systemProcess.map((step, index) => (
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
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See our quality work in electrical and plumbing installations and upgrades
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
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    project.type === 'Electrical' ? 'bg-blue-500 text-white' :
                    project.type === 'Plumbing' ? 'bg-green-500 text-white' :
                    'bg-[#F4B942] text-white'
                  }`}>
                    {project.type}
                  </div>
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
                    {project.systems.map((system, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#F4B942]" />
                        <span className="text-gray-700">{system}</span>
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
                Why Choose Professional Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional electrical and plumbing services ensure safety, reliability, and long-term performance for your property
              </p>
              <div className="space-y-6">
                {systemBenefits.map((benefit, index) => (
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
              <h3 className="text-2xl font-bold mb-6">Schedule Service Today</h3>
              <p className="mb-6">Get professional electrical or plumbing service with our licensed experts.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Same Day Service Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Warranty Protected</span>
                </div>
              </div>
              <CustomButton variant="secondary" className="w-full mt-8 font-semibold">
                Get Free Estimate
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
              Need Electrical or Plumbing Service?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our licensed professionals for reliable electrical and plumbing solutions you can trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="secondary" size="lg" className="font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Service
              </CustomButton>
              <CustomButton size="lg" className="font-semibold bg-white text-[#F4B942] hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                View Services
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricalAndPlumbing;