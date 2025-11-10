import React from 'react';
import { 
  Calendar,
  Users,
  Award,
  Star,
  Check,
  Home,
  Building,
  Heart,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  BookOpen,
  Eye,
  Clock,
  Shield,
  Zap,
  Wrench,
  Palette,
  Ruler,
  Lightbulb,
  Droplets
} from "lucide-react";

// Placeholder images - replace with your actual images
const heroBackground = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200";
const teamImage = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600";
const processImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600";
const whyChooseImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600";
const ctaBackground = "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200";

// Project images
const project1 = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400";
const project2 = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400";
const project3 = "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400";
const project4 = "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400";
const project5 = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400";
const project6 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400";

const InteriorFinishing = () => {
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

  // Services Data
  const services = [
    {
      icon: Palette,
      title: "Wall & Ceiling Systems",
      description: "Drywall, decorative plaster, and advanced soundproofing solutions",
      testimonial: "Amazing detailing work! The walls are flawless."
    },
    {
      icon: Ruler,
      title: "Flooring Solutions",
      description: "Wood, marble, tiles, and eco-friendly vinyl installations",
      testimonial: "The flooring transformed our entire space beautifully."
    },
    {
      icon: Lightbulb,
      title: "Lighting & Electrical",
      description: "Custom illumination and smart lighting systems integration",
      testimonial: "The lighting design exceeded our expectations completely."
    },
    {
      icon: Wrench,
      title: "Trim & Woodwork",
      description: "Elegant moldings, custom cabinetry, and finish carpentry",
      testimonial: "Precision woodwork that adds so much character."
    },
    {
      icon: Droplets,
      title: "Painting & Coating",
      description: "High-end finishes, texture walls, and professional color design",
      testimonial: "The paint quality and colors are absolutely perfect."
    },
    {
      icon: Zap,
      title: "Bathroom & Kitchen",
      description: "Premium countertops, fixtures, and luxury finishes",
      testimonial: "Our kitchen feels like it's from a luxury magazine."
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Design",
      description: "Meeting clients, understanding needs, and planning perfect layouts"
    },
    {
      step: "02",
      title: "Material Selection",
      description: "Helping clients choose durable, aesthetic materials that last"
    },
    {
      step: "03",
      title: "Execution & Supervision",
      description: "Skilled craftsmanship with strict quality control standards"
    },
    {
      step: "04",
      title: "Final Handover",
      description: "Post-project walkthrough with satisfaction guarantee"
    }
  ];

  // Projects Data
  const projects = [
    {
      image: project1,
      title: "Al Noor Office Complex",
      type: "Commercial",
      year: "2021",
      duration: "3 Months",
      size: "12,000 sq ft",
      highlights: ["Smart Lighting", "Acoustic Ceilings", "Open Layout"]
    },
    {
      image: project2,
      title: "The Luxe Apartments",
      type: "Residential",
      year: "2022",
      duration: "8 Months",
      size: "30 Units",
      highlights: ["Custom Floors", "Premium Finishes", "Luxury Bathrooms"]
    },
    {
      image: project3,
      title: "Garissa City Hall",
      type: "Commercial",
      year: "2023",
      duration: "6 Months",
      size: "15,000 sq ft",
      highlights: ["Sustainable Materials", "Heritage Design", "Durable Finishes"]
    },
    {
      image: project4,
      title: "Modern Hospital",
      type: "Healthcare",
      year: "2024",
      duration: "10 Months",
      size: "25,000 sq ft",
      highlights: ["Hygiene Systems", "Patient Comfort", "Advanced Lighting"]
    },
    {
      image: project5,
      title: "Tech Hub Space",
      type: "Commercial",
      year: "2025",
      duration: "4 Months",
      size: "8,000 sq ft",
      highlights: ["Open Concept", "Digital Integration", "Collaborative Spaces"]
    },
    {
      image: project6,
      title: "Executive Residences",
      type: "Residential",
      year: "2025",
      duration: "12 Months",
      size: "20 Luxury Units",
      highlights: ["Smart Home", "Custom Millwork", "Premium Materials"]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      project: "Luxury Apartment Renovation",
      quote: "They transformed our empty space into a masterpiece. The detailing is unmatched!",
      rating: 5
    },
    {
      name: "Michael Chen",
      project: "Office Complex Build-out",
      quote: "Five years later, and the quality still feels brand new. Exceptional workmanship.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      project: "Restaurant Interior",
      quote: "From concept to completion, their team delivered beyond our expectations.",
      rating: 5
    }
  ];

  // Why Choose Us Points
  const whyChoosePoints = [
    "Over 15 years combined team experience",
    "Transparent pricing and project updates",
    "Eco-friendly materials and sustainable finishes",
    "On-time project delivery guarantee",
    "Certified professionals and safety compliance",
    "Five-year workmanship warranty"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Five Years of Excellence in Interior Craftsmanship
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Delivering precision, comfort, and beauty across hundreds of spaces since 2020.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <CustomButton size="lg" className="font-semibold">
                Start Your Project
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="font-semibold">
                <Eye className="w-5 h-5 mr-2" />
                View Our Journey
              </CustomButton>
            </div>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-300">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About Our Five-Year Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={teamImage}
                alt="Our professional team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Five-Year Journey of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Starting from small-scale renovations in 2020, we've grown into a trusted interior finishing expert, 
                delivering luxury, precision, and timeliness across major commercial and residential projects.
              </p>
              
              {/* Timeline */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4B942] rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">2020 - Foundation</h3>
                    <p className="text-gray-600">Started with residential renovations and built our reputation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4B942] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">2022 - Expansion</h3>
                    <p className="text-gray-600">Expanded to commercial projects and grew our team</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4B942] rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">2024 - Excellence</h3>
                    <p className="text-gray-600">Established as industry leaders with luxury projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4B942] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">2025 - Innovation</h3>
                    <p className="text-gray-600">Pioneering sustainable and smart interior solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Signature Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Signature Interior Finishing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized services refined over five years of excellence and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
                <div className="w-14 h-14 bg-[#F4B942] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-[#F4B942]/10 rounded-lg p-3 border-l-4 border-[#F4B942]">
                  <p className="text-sm text-gray-700 italic">"{service.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                From Vision to Reality: Our Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Refined and perfected over five years, our systematic approach ensures every project 
                meets the highest standards of quality and client satisfaction.
              </p>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#F4B942] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={processImage}
                alt="Our team working on-site"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B942] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">5 Years</div>
                <div className="text-sm">Perfected Process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Projects Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              The Past 5 Years in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our best projects and milestones since 2020
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#F4B942] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{project.type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      <span>{project.size}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#F4B942]" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#F4B942] to-[#e6a932] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Client Testimonials & Trust
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Hear what our clients say about our five years of exceptional service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-white" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-white/80">Repeat Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-white/80">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Choose Us After Five Years?
              </h2>
              <div className="space-y-4 mb-8">
                {whyChoosePoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#F4B942] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <img src="https://via.placeholder.com/80x40/fff/fff?text=ISO" alt="ISO Certified" className="h-10" />
                <img src="https://via.placeholder.com/80x40/fff/fff?text=Certified" alt="Certified" className="h-10" />
                <img src="https://via.placeholder.com/80x40/fff/fff?text=Member" alt="Industry Member" className="h-10" />
              </div>
            </div>
            <div className="relative">
              <img
                src={whyChooseImage}
                alt="Our professional team at work"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B942] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">5-Year</div>
                <div className="text-sm">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="relative py-20 bg-[#F4B942] text-white">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${ctaBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Begin Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch today to schedule a free consultation or request a custom quote for your dream interior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CustomButton variant="secondary" size="lg" className="font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </CustomButton>
              <CustomButton size="lg" className="font-semibold bg-white text-[#F4B942] hover:bg-gray-100">
                <BookOpen className="w-5 h-5 mr-2" />
                View Portfolio
              </CustomButton>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white/90">(555) 123-INTERIOR</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white/90">hello@interiorexcellence.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white/90">123 Design District</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorFinishing;