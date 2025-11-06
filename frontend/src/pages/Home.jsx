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
  ChevronRight
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

  const qualities = [
    "Excellence in Every Detail",
    "Trusted Expertise, Proven Results",
    "Innovative Solutions Tailored for You",
    "Your Vision, Our Commitment",
    "Sustainable Building Practices",
    "On-Time Project Delivery",
  ];

  const stats = [
    { number: "250+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Expert Team Members", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Star },
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

  const partners = [
    "ConstructionCo", "BuildPro", "ArchiBase", "HD Engineering", "ParkSide Construction",
    "UrbanBuild", "StructTech", "ModernConstruct", "EliteBuilders", "PrimeContractors"
  ];

  // Custom Button Component
  const CustomButton = ({ children, variant = "default", size = "default", className = "", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "underline-offset-4 hover:underline text-primary"
    };
    
    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
      icon: "h-10 w-10"
    };
    
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} rounded-md`}
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
        className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
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
                <CustomButton size="lg" className="font-semibold ">
                  <BookOpen className="w-5 h-5 mr-2 " />
                  Book now
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="font-semibold ">
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
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
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
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
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
              <CustomCard key={index} className="hover:shadow-lg transition-shadow h-full group">
                <CustomCardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CustomCardTitle className="text-xl">{service.title}</CustomCardTitle>
                </CustomCardHeader>
                <CustomCardContent>
                  <CustomCardDescription className="mb-4">{service.description}</CustomCardDescription>
                  <CustomButton variant="link" className="p-0 h-auto font-semibold group">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </CustomButton>
                </CustomCardContent>
              </CustomCard>
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
              <CustomCard key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
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
            <CustomCard className="overflow-hidden relative group">
              <img
                src={teamImage}
                alt="Construction team collaborating on project"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <CustomButton size="icon" className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90">
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
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
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

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <CustomCard key={index} className="p-6 hover:shadow-lg transition-shadow">
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
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
      <section className="py-16 bg-muted/30">
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
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your construction needs and bring your vision to life with our expert team and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" variant="secondary" className="font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </CustomButton>
            <CustomButton size="lg" variant="outline" className="font-semibold text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Eye className="w-5 h-5 mr-2" />
              View Our Portfolio
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;