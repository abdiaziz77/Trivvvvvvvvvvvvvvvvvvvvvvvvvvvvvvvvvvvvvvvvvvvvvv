import React from 'react';
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
  Facebook
} from "lucide-react";

// Import leadership images
import hassanImage from "../../assets/images/hassan.jpg";
import khalidImage from "../../assets/images/khalid.png";
import abdiazizImage from "../../assets/images/abdiaziz.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

const Leaders = () => {
  const executiveTeam = [
    {
      name: "Hassan Mohamed",
      position: "Chief Executive Officer",
      image: hassanImage,
      bio: "With over 20 years of experience in construction management, Hassan leads our company's strategic vision and growth initiatives. His innovative approach has transformed how we deliver construction projects.",
      expertise: ["Strategic Planning", "Business Development", "Innovation"],
      experience: "25 years",
      email: "hassan@constructionco.com",
      phone: "+1 (555) 123-4567",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Khalid Ahmed",
      position: "Chief Operations Officer",
      image: khalidImage,
      bio: "Khalid oversees all operational aspects of our projects, ensuring excellence in execution and client satisfaction. His meticulous attention to detail guarantees project success.",
      expertise: ["Operations Management", "Quality Control", "Project Execution"],
      experience: "18 years",
      email: "khalid@constructionco.com",
      phone: "+1 (555) 123-4568",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Abdiaziz Hassan",
      position: "Chief Technology Officer",
      image: abdiazizImage,
      bio: "Abdiaziz drives our technological innovation, implementing cutting-edge solutions that revolutionize construction processes and enhance project efficiency.",
      expertise: ["Technology Integration", "Digital Transformation", "BIM"],
      experience: "15 years",
      email: "abdiaziz@constructionco.com",
      phone: "+1 (555) 123-4569",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const departmentHeads = [
    {
      name: "Sarah Johnson",
      position: "Director of Construction",
      image: image3,
      bio: "Sarah leads our construction teams with precision and expertise, ensuring every project meets the highest standards of quality and safety.",
      department: "Construction",
      teamSize: "85+ professionals",
      projects: "150+ completed"
    },
    {
      name: "Michael Chen",
      position: "Head of Engineering",
      image: image4,
      bio: "Michael's engineering expertise ensures structural integrity and innovative design solutions across all our construction projects.",
      department: "Engineering",
      teamSize: "45+ engineers",
      projects: "200+ designs"
    },
    {
      name: "Emily Rodriguez",
      position: "Sustainability Director",
      image: image5,
      bio: "Emily champions our green building initiatives, implementing sustainable practices that reduce environmental impact while maintaining project excellence.",
      department: "Sustainability",
      teamSize: "25+ specialists",
      projects: "75+ green projects"
    },
    {
      name: "David Thompson",
      position: "Safety & Compliance Director",
      image: image6,
      bio: "David ensures all our projects adhere to the highest safety standards and regulatory requirements, protecting our team and clients.",
      department: "Safety",
      teamSize: "30+ officers",
      projects: "Zero major incidents"
    }
  ];

  const leadershipStats = [
    { number: "500+", label: "Combined Years of Experience" },
    { number: "15+", label: "Professional Certifications" },
    { number: "98%", label: "Project Success Rate" },
    { number: "50+", label: "Industry Awards" }
  ];

  const leadershipPrinciples = [
    {
      icon: Target,
      title: "Visionary Leadership",
      description: "Setting clear direction and inspiring teams to achieve extraordinary results through innovative thinking and strategic planning."
    },
    {
      icon: Users,
      title: "Team Empowerment",
      description: "Fostering a culture of collaboration and continuous learning, empowering every team member to reach their full potential."
    },
    {
      icon: Shield,
      title: "Integrity First",
      description: "Maintaining the highest ethical standards in all decisions and actions, building trust with clients and stakeholders."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Embracing new technologies and methodologies to stay at the forefront of the construction industry."
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Meet Our Leadership Team
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Guided by vision, driven by excellence. Our leadership team brings decades of experience 
              and innovation to every project, ensuring exceptional results and lasting relationships.
            </p>
            <div className="flex gap-4">
              <CustomButton size="lg" className="font-semibold">
                Contact Leadership
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="font-semibold">
                View Open Positions
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Stats */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-3">{stat.number}</div>
                <div className="text-lg text-yellow-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our executive team sets the strategic direction and drives innovation across all aspects of our organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {executiveTeam.map((leader, index) => (
              <CustomCard key={index} className="overflow-hidden group border-yellow-200">
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <div className="text-yellow-600 font-semibold text-lg mb-4">{leader.position}</div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{leader.experience} Experience</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span>{leader.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{leader.phone}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a href={leader.social.linkedin} className="p-2 text-gray-400 hover:text-yellow-600 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={leader.social.twitter} className="p-2 text-gray-400 hover:text-yellow-600 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our leadership approach and decision-making process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPrinciples.map((principle, index) => (
              <CustomCard key={index} className="p-6 text-center group border-yellow-200">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors mx-auto">
                  <principle.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized leaders driving excellence in every aspect of our construction operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departmentHeads.map((leader, index) => (
              <CustomCard key={index} className="p-6 group border-yellow-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <div className="text-yellow-600 font-semibold text-lg mb-3">{leader.position}</div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{leader.bio}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-gray-900">Department</div>
                        <div className="text-gray-600">{leader.department}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Team Size</div>
                        <div className="text-gray-600">{leader.teamSize}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Projects</div>
                        <div className="text-gray-600">{leader.projects}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Journey */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From groundbreaking innovations to industry-leading projects, our leadership team has 
                consistently pushed the boundaries of what's possible in construction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Industry Recognition</h4>
                    <p className="text-gray-600">Multiple awards for innovation and excellence in construction leadership</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Team Development</h4>
                    <p className="text-gray-600">Mentored and developed over 200 construction professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Project Excellence</h4>
                    <p className="text-gray-600">Delivered 500+ successful projects with 98% client satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">Innovation Implementation</span>
                    <span className="font-bold text-yellow-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">Team Satisfaction</span>
                    <span className="font-bold text-yellow-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">Client Retention</span>
                    <span className="font-bold text-yellow-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">Project Success Rate</span>
                    <span className="font-bold text-yellow-600">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '99%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Join Our Leadership Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-yellow-100">
            Ready to lead with innovation and make a lasting impact in the construction industry? 
            Explore leadership opportunities with our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" variant="secondary" className="font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              Contact Our Leaders
            </CustomButton>
            <CustomButton size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white hover:text-yellow-600">
              <Users className="w-5 h-5 mr-2" />
              View Career Opportunities
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leaders;