import { 
  MapPin, 
  Calendar, 
  Check, 
  Play, 
  Hammer, 
  Home, 
  Waves, 
  Layers, 
  Star, 
  Users, 
  Award, 
  Clock,
  Phone,
  ArrowRight,
  Eye,
  BookOpen,
  ChevronRight,
  Shield,
  Truck,
  Building,
  Zap,
  Target,
  Globe,
  Leaf,
  Heart
} from "lucide-react";

// Hero assets
import heroImage from "../assets/images/2.jpg";

// Project assets
import projectResidential from "../assets/images/3.jpg";
import projectSunset from "../assets/images/4.jpg";
import projectCommercial from "../assets/images/3.jpg";
import projectIndustrial from "../assets/images/4.jpg";

// Quality assets
import teamImage from "../assets/images/6.jpg";

// Additional assets
import aboutImage from "../assets/images/1.jpg";
import testimonial1 from "../assets/images/1.jpg";
import testimonial2 from "../assets/images/2.jpg";
import testimonial3 from "../assets/images/3.jpg";

const HomePage = () => {
  const projects = [
    {
      image: projectResidential,
      title: "Harbor View Residences",
      description: "A luxury residential community designed for modern living with state-of-the-art amenities for an elevated living experience.",
      location: "123 Oceanview Drive, Boston, Hawaii 02215",
      date: "05/08/2023 - 15/08/2024",
      status: "Office Complex Development",
    },
    {
      image: projectSunset,
      title: "Sunset Ridge Development",
      description: "A premium residential community designed for modern living with world-class aesthetics and exceptional design.",
      location: "8502 Preston Rd, Inglewood, Maine 98380",
      date: "01/02/2023 - 12/01/2024",
      status: "Multi-Family Housing",
    },
    {
      image: projectCommercial,
      title: "Downtown Business Plaza",
      description: "Modern commercial space featuring innovative architecture and sustainable design principles for forward-thinking businesses.",
      location: "456 Business Ave, New York, NY 10001",
      date: "15/03/2023 - 30/09/2024",
      status: "Commercial Development",
    },
    {
      image: projectIndustrial,
      title: "Innovation Tech Park",
      description: "State-of-the-art industrial complex designed to support cutting-edge manufacturing and technology companies.",
      location: "789 Industry Blvd, San Francisco, CA 94105",
      date: "10/01/2023 - 20/12/2024",
      status: "Industrial Complex",
    },
  ];

  const services = [
    {
      icon: Hammer,
      title: "Building Renovation",
      description: "Transform your space with expert renovation services that breathe new life into your property.",
    },
    {
      icon: Home,
      title: "Interior Finishing",
      description: "Create stunning interiors with our professional finishing services and attention to detail.",
    },
    {
      icon: Waves,
      title: "Roofing Solutions",
      description: "Protect your investment with durable, high-quality roofing solutions built to last.",
    },
    {
      icon: Layers,
      title: "Foundation Repair",
      description: "Ensure structural integrity with our expert foundation repair and maintenance services.",
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Comprehensive project oversight ensuring timelines, budgets, and quality standards are met.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control processes guaranteeing exceptional results on every project.",
    },
  ];

  const additionalServices = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Complete commercial building solutions from ground-up construction to tenant improvements.",
    },
    {
      icon: Truck,
      title: "Site Preparation",
      description: "Professional land clearing, grading, and excavation services for any construction project.",
    },
    {
      icon: Shield,
      title: "Safety Compliance",
      description: "Comprehensive safety protocols and compliance management for all construction sites.",
    },
    {
      icon: Zap,
      title: "Smart Home Integration",
      description: "Modern technology integration for smart buildings and automated systems.",
    },
  ];

  const qualities = [
    "Excellence in Every Detail",
    "Trusted Expertise, Proven Results",
    "Innovative Solutions Tailored for You",
    "Your Vision, Our Commitment",
    "Sustainable Building Practices",
    "On-Time Project Delivery",
    "Quality Craftsmanship Guaranteed",
    "Transparent Communication",
    "Budget Management Excellence",
    "Lifetime Structural Warranty"
  ];

  const stats = [
    { number: "250+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Expert Team Members", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50M+", label: "Square Feet Built", icon: Building },
    { number: "24/7", label: "Support Available", icon: Shield },
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      position: "Property Developer",
      image: testimonial1,
      content: "Their attention to detail and commitment to quality transformed our vision into reality. The project was delivered on time and exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      position: "Architecture Firm Owner",
      image: testimonial2,
      content: "Working with this team was exceptional. Their innovative approach to construction challenges saved us time and budget while maintaining highest standards.",
      rating: 5,
    },
    {
      name: "James Thompson",
      position: "Commercial Real Estate",
      image: testimonial3,
      content: "Professional, reliable, and truly dedicated to excellence. They've become our go-to construction partner for all major projects.",
      rating: 5,
    },
  ];

  const additionalTestimonials = [
    {
      name: "Emily Watson",
      position: "Hospitality Director",
      image: testimonial1,
      content: "The team delivered our luxury hotel project under budget and two weeks ahead of schedule. Exceptional workmanship throughout.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      position: "Healthcare Administrator",
      image: testimonial2,
      content: "Their expertise in healthcare facility construction was impressive. They navigated complex regulations while maintaining quality.",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      position: "Educational Director",
      image: testimonial3,
      content: "Transformed our campus with innovative learning spaces. The students and faculty are thrilled with the results.",
      rating: 5,
    },
  ];

  const partners = [
    "ConstructionCo", "BuildPro", "ArchiBase", "HD Engineering", "ParkSide Construction",
    "UrbanBuild", "StructTech", "ModernConstruct", "EliteBuilders", "PrimeContractors",
    "SkylineDevelopers", "FoundationFirst", "QualityBuild", "InnovateConstruct", "MasterCraft"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We begin with comprehensive consultation to understand your vision, requirements, and budget constraints.",
      icon: Users
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our architects and engineers create detailed plans and 3D models to bring your vision to life.",
      icon: Target
    },
    {
      step: "03",
      title: "Material Selection",
      description: "Choose from premium materials and finishes that match your style and budget requirements.",
      icon: Layers
    },
    {
      step: "04",
      title: "Construction Phase",
      description: "Expert execution with daily progress updates and strict quality control at every stage.",
      icon: Hammer
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Rigorous inspections and testing to ensure every detail meets our high standards.",
      icon: Shield
    },
    {
      step: "06",
      title: "Project Delivery",
      description: "Final walkthrough and handover with comprehensive documentation and warranty information.",
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

  const CustomCardDescription = ({ children, className = "" }) => {
    return (
      <p className={`text-sm text-muted-foreground ${className}`}>
        {children}
      </p>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center pb-35">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80 z-10" />
       
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Innovative Technologies for Modern Construction
              </h1>
              <p className="text-lg text-muted-foreground">
                Embrace cutting-edge advancements like 3D printing, modular construction, and drones to revolutionize design, efficiency, and project delivery in the construction industry.
              </p>
              <div className="flex gap-4">
                <CustomButton size="lg" className="font-semibold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Book now
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call us
                </CustomButton>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Construction team reviewing blueprints at modern construction site"
                className="rounded-3xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F4B942]/10 text-grey-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F4B942] flex items-center justify-center">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutImage}
                alt="Construction professionals discussing project"
                className="rounded-3xl w-full h-auto shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Building the Future Together</h2>
              <p className="text-muted-foreground">
                With over 15 years of experience in the construction industry, we have established ourselves as leaders in innovative building solutions. Our team of dedicated professionals combines traditional craftsmanship with modern technology to deliver exceptional results.
              </p>
              <p className="text-muted-foreground">
                We believe in building not just structures, but relationships. Our client-focused approach ensures that every project receives the attention and care it deserves, from initial concept to final completion.
              </p>
              <div className="space-y-3">
                {qualities.slice(0, 4).map((quality, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F4B942]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F4B942]" />
                    </div>
                    <span className="font-medium">{quality}</span>
                  </div>
                ))}
              </div>
              <CustomButton size="lg" className="font-semibold">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn About Us
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Services Tailored to You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide specialized construction expertise designed to meet your unique needs, ensuring every project reflects your vision and exceeds expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <CustomCard key={index} className="hover:shadow-lg transition-shadow h-full group border-[#F4B942]/20">
                <CustomCardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#F4B942]/10 flex items-center justify-center mb-4 group-hover:bg-[#F4B942]/20 transition-colors">
                    <service.icon className="w-6 h-6 text-[#F4B942]" />
                  </div>
                  <CustomCardTitle className="text-xl">{service.title}</CustomCardTitle>
                </CustomCardHeader>
                <CustomCardContent>
                  <CustomCardDescription className="mb-4">{service.description}</CustomCardDescription>
                  <CustomButton variant="link" className="p-0 h-auto font-semibold group text-[#F4B942]">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </CustomButton>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Specialized Construction Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond standard construction services, we offer specialized solutions to meet the unique demands of modern building projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <CustomCard key={index} className="hover:shadow-lg transition-shadow h-full group border-[#F4B942]/20 text-center">
                <CustomCardHeader>
                  <div className="w-16 h-16 rounded-full bg-[#F4B942]/10 flex items-center justify-center mb-4 group-hover:bg-[#F4B942]/20 transition-colors mx-auto">
                    <service.icon className="w-8 h-8 text-[#F4B942]" />
                  </div>
                  <CustomCardTitle className="text-xl">{service.title}</CustomCardTitle>
                </CustomCardHeader>
                <CustomCardContent>
                  <CustomCardDescription>{service.description}</CustomCardDescription>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#F4B942]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Construction Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures quality, efficiency, and client satisfaction at every stage of your project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#F4B942] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-[#F4B942] flex items-center justify-center">
                    <span className="text-sm font-bold text-[#F4B942]">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Construction Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our portfolio of accomplishments, where innovative designs and meticulous execution come together to create exceptional spaces. Each project reflects our commitment to excellence in construction.
              </p>
            </div>
            <CustomButton className="hidden lg:flex font-semibold">
              Go Project Page <ChevronRight className="w-5 h-5 ml-2" />
            </CustomButton>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <CustomCard key={index} className="overflow-hidden hover:shadow-xl transition-shadow group border-[#F4B942]/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CustomCardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Location:</span>
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Date:</span>
                      <span className="font-medium">{project.date}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="font-medium ml-2">{project.status}</span>
                    </div>
                  </div>
                  <CustomButton variant="secondary" className="w-full font-semibold">
                    <Eye className="w-5 h-5 mr-2" />
                    View More
                  </CustomButton>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
          
          <div className="text-center mt-8 lg:hidden">
            <CustomButton className="font-semibold">
              Go Project Page <ChevronRight className="w-5 h-5 ml-2" />
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <CustomCard className="overflow-hidden relative group border-[#F4B942]/20">
              <img
                src={teamImage}
                alt="Construction team collaborating on project"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <CustomButton size="icon" className="w-16 h-16 rounded-full bg-[#F4B942] hover:bg-[#F4B942]/90">
                  <Play className="w-8 h-8 ml-1" />
                </CustomButton>
              </div>
            </CustomCard>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Quality That Speaks for Itself</h2>
              <p className="text-muted-foreground">
                Our unwavering dedication to quality and precision is evident in every project we undertake. We set the gold standard in building excellence, earning the trust and confidence of our clients.
              </p>
              <div className="space-y-3">
                {qualities.map((quality, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F4B942]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F4B942]" />
                    </div>
                    <span className="font-medium">{quality}</span>
                  </div>
                ))}
              </div>
              <CustomButton size="lg" className="font-semibold">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Sustainable Building Practices</h2>
              <p className="text-muted-foreground">
                We are committed to environmentally responsible construction practices that minimize our ecological footprint while maximizing energy efficiency and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-[#F4B942]/5 rounded-lg">
                  <Leaf className="w-8 h-8 text-[#F4B942]" />
                  <div>
                    <div className="font-bold">Green Materials</div>
                    <div className="text-sm text-muted-foreground">Eco-friendly sourcing</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#F4B942]/5 rounded-lg">
                  <Zap className="w-8 h-8 text-[#F4B942]" />
                  <div>
                    <div className="font-bold">Energy Efficient</div>
                    <div className="text-sm text-muted-foreground">Reduced consumption</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#F4B942]/5 rounded-lg">
                  <Globe className="w-8 h-8 text-[#F4B942]" />
                  <div>
                    <div className="font-bold">Carbon Neutral</div>
                    <div className="text-sm text-muted-foreground">Offset programs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#F4B942]/5 rounded-lg">
                  <Heart className="w-8 h-8 text-[#F4B942]" />
                  <div>
                    <div className="font-bold">Community Focus</div>
                    <div className="text-sm text-muted-foreground">Local engagement</div>
                  </div>
                </div>
              </div>
              <CustomButton size="lg" className="font-semibold">
                Our Sustainability Commitment
              </CustomButton>
            </div>
            <div className="bg-[#F4B942]/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Environmental Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Energy Savings</span>
                    <span className="font-bold text-[#F4B942]">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#F4B942] h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Water Conservation</span>
                    <span className="font-bold text-[#F4B942]">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#F4B942] h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Waste Reduction</span>
                    <span className="font-bold text-[#F4B942]">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#F4B942] h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Recycled Materials</span>
                    <span className="font-bold text-[#F4B942]">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#F4B942] h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <CustomCard key={index} className="p-6 hover:shadow-lg transition-shadow border-[#F4B942]/20">
                <CustomCardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F4B942] text-[#F4B942]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalTestimonials.map((testimonial, index) => (
              <CustomCard key={index} className="p-6 hover:shadow-lg transition-shadow border-[#F4B942]/20">
                <CustomCardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F4B942] text-[#F4B942]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-grey-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your construction needs and bring your vision to life with our expert team and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="xl" variant="secondary" className="font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </CustomButton>
            <CustomButton size="xl" variant="outline" className="font-semibold text-black border-bg-[#F4B942]/10 hover:bg-bg-[#F4B942]/10 hover:text-[#F4B942]">
              <Eye className="w-5 h-5 mr-2" />
              View Our Portfolio
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#F4B942]/10 text-grey-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
              <p className="text-lg mb-6">
                Whether you're planning a residential renovation, commercial development, or industrial project, we have the expertise and resources to make it happen.
              </p>
              <div className="flex gap-4">
                <CustomButton size="lg" className="font-semibold bg-#F4B942 text-[#F4B942] hover:bg-gray-100">
                  Start Your Project
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="font-semibold border-white text-#F4B942 hover:bg-white hover:text-[#F4B942]">
                  Download Brochure
                </CustomButton>
              </div>
            </div>
            <div className="bg-[#F4B942] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Get Instant Quote</h3>
              <p className="mb-6">Provide basic details and receive a preliminary estimate within 24 hours.</p>
              <CustomButton size="lg" variant="secondary" className="w-full font-semibold">
                Request Quote
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;