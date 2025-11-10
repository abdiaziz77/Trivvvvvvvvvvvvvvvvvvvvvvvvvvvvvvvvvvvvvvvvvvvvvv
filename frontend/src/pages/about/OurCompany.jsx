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
  Play
} from "lucide-react";

// Correct import paths - go up two levels to reach src/assets
import hassanImage from "../../assets/images/hassan.jpg";
import khalidImage from "../../assets/images/khalid.png";
import abdiazizImage from "../../assets/images/abdiaziz.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

const OurCompany = () => {
  const companyStats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "250+", label: "Successful Projects", icon: Building },
    { number: "50+", label: "Expert Professionals", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Star },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards are met."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication and ethical practices form the foundation of all our relationships."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing cutting-edge technologies to deliver smarter, more efficient construction solutions."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to environmentally responsible practices that protect our planet for future generations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients, partners, and communities to achieve shared success."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Prioritizing the well-being of our team and stakeholders in every aspect of our work."
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Company Foundation",
      description: "Started with a vision to revolutionize construction through innovation and quality."
    },
    {
      year: "2012",
      title: "First Major Project",
      description: "Completed our first commercial complex, setting new standards in the industry."
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Integrated BIM and 3D modeling technologies into our construction processes."
    },
    {
      year: "2018",
      title: "Sustainability Focus",
      description: "Launched our green building initiative and sustainable construction practices."
    },
    {
      year: "2021",
      title: "National Expansion",
      description: "Expanded operations to serve clients across multiple states and regions."
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Recognized as industry leaders in smart construction and innovative building solutions."
    }
  ];

  const leadershipTeam = [
    {
      name: "Hassan",
      position: "CEO & Founder",
      image: hassanImage,
      bio: "With over 20 years in construction management, Hassan leads our vision for innovative and sustainable building practices."
    },
    {
      name: "Khalid",
      position: "Chief Operations Officer",
      image: khalidImage,
      bio: "Khalid oversees project execution and ensures operational excellence across all our construction sites."
    },
    {
      name: "Abdiaziz",
      position: "Head of Innovation",
      image: abdiazizImage,
      bio: "Abdiaziz drives our technology adoption and research into new construction methodologies."
    },
    {
      name: "Mohammed",
      position: "Sustainability Director",
      image: image4,
      bio: "Mohammed champions our environmental initiatives and green building certifications."
    }
  ];

  const certifications = [
    "LEED Certified Professionals",
    "OSHA Safety Certified",
    "Building Information Modeling (BIM)",
    "Green Building Council Member",
    "ISO 9001:2015 Certified",
    "National Construction Association"
  ];

  const communityInitiatives = [
    {
      title: "Youth Construction Training",
      description: "Providing vocational training and mentorship programs for young aspiring builders."
    },
    {
      title: "Green Space Development",
      description: "Creating and maintaining public parks and community green spaces in urban areas."
    },
    {
      title: "Disaster Relief Construction",
      description: "Volunteer efforts to rebuild communities affected by natural disasters."
    },
    {
      title: "Affordable Housing Projects",
      description: "Dedicated teams working on affordable housing solutions for underserved communities."
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
      {/* Hero Section - Company Focus */}
      <section className="relative min-h-[600px] flex items-center pb-35 bg-gray-50 text-black">
        <div className="absolute inset-0  z-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building Excellence Since 2009
            </h1>
            <p className="text-xl text-black mb-8 leading-relaxed">
              For over 15 years, we've been at the forefront of construction innovation, 
              combining traditional craftsmanship with cutting-edge technology to create 
              spaces that inspire and endure.
            </p>
            <div className="flex gap-4">
              <CustomButton size="lg" className="font-semibold bg-[#F4B942] hover:bg-[#F4B942]/90">
                Our Story
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="font-semibold border-white text-[#F4B942] hover:bg-white hover:text-gray-900">
                Meet Our Team
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F4B942] flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-gray-900">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={image5}
                alt="Our company office and team"
                className="rounded-3xl w-full h-96 object-cover shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2009, our company began with a simple vision: to transform the construction 
                industry through innovation, quality, and unwavering commitment to our clients' success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small team of passionate builders has grown into a nationally 
                recognized construction firm, known for pushing boundaries and setting new standards 
                in sustainable and intelligent building practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to honor our founding principles while embracing the technologies 
                of tomorrow, ensuring that every project we undertake not only meets but exceeds 
                expectations.
              </p>
              <CustomButton size="lg" className="font-semibold">
                Read Our Full Story
                <ChevronRight className="w-5 h-5 ml-2" />
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <CustomCard key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-[#F4B942]/20 group">
                <div className="w-16 h-16 rounded-full bg-[#F4B942]/10 flex items-center justify-center mb-6 group-hover:bg-[#F4B942]/20 transition-colors mx-auto">
                  <value.icon className="w-8 h-8 text-[#F4B942]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our growth and commitment to construction excellence.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#F4B942] h-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <CustomCard className="p-6 border-[#F4B942]/20">
                      <div className="text-2xl font-bold text-[#F4B942] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CustomCard>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#F4B942] border-4 border-white shadow-lg"></div>
                  
                  {/* Spacer for the other side */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who drive our company's success and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <CustomCard key={index} className="text-center overflow-hidden group border-[#F4B942]/20">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CustomCardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-[#F4B942] font-semibold mb-4">{member.position}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CustomCardContent>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Certifications & Standards</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to quality and professionalism is demonstrated through our 
                extensive certifications and adherence to the highest industry standards.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#F4B942]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F4B942]" />
                    </div>
                    <span className="font-medium text-gray-900">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={image6}
                alt="Our certifications and awards"
                className="rounded-3xl w-full h-96 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Commitment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building stronger communities through outreach, education, and sustainable development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityInitiatives.map((initiative, index) => (
              <CustomCard key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-[#F4B942]/20">
                <div className="w-12 h-12 rounded-full bg-[#F4B942] flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{initiative.title}</h3>
                <p className="text-gray-600 text-sm">{initiative.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={image3}
                alt="Our team culture and collaboration"
                className="rounded-3xl w-full h-96 object-cover shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Culture</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At the heart of our company is a culture of collaboration, innovation, and 
                continuous learning. We believe that our greatest asset is our people, and 
                we invest in their growth and development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team members are encouraged to think creatively, take initiative, and 
                push the boundaries of what's possible in construction. We celebrate diversity, 
                foster inclusion, and believe that the best ideas come from working together.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4B942]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#F4B942]" />
                  </div>
                  <span className="font-medium text-gray-900">Continuous Learning & Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4B942]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#F4B942]" />
                  </div>
                  <span className="font-medium text-gray-900">Collaborative Team Environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4B942]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#F4B942]" />
                  </div>
                  <span className="font-medium text-gray-900">Work-Life Balance Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to build with us, partner with us, or join our team, 
            we'd love to hear from you and explore how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" variant="secondary" className="font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </CustomButton>
            <CustomButton size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white hover:text-gray-900">
              <Mail className="w-5 h-5 mr-2" />
              Career Opportunities
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCompany;