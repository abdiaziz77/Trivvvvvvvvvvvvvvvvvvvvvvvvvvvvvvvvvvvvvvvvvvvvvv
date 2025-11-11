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
  BarChart3,
  Settings,
  Briefcase,
  FileText,
  TrendingUp,
  PieChart
} from "lucide-react";

// Import management images
import hassanImage from "../../assets/images/hassan.jpg";
import khalidImage from "../../assets/images/khalid.png";
import abdiazizImage from "../../assets/images/abdiaziz.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

const Management = () => {
  const managementTeam = [
    {
      name: "Hassan Mohamed",
      position: "Chief Executive Officer",
      department: "Executive Leadership",
      image: hassanImage,
      bio: "Provides strategic direction and oversees all company operations, driving growth and innovation across the organization.",
      responsibilities: [
        "Corporate Strategy & Vision",
        "Business Development",
        "Investor Relations",
        "Executive Decision Making"
      ],
      experience: "25 years",
      email: "hassan@constructionco.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Khalid Ahmed",
      position: "Chief Operations Officer",
      department: "Operations",
      image: khalidImage,
      bio: "Manages day-to-day operations, ensuring project excellence, operational efficiency, and client satisfaction.",
      responsibilities: [
        "Project Management Oversight",
        "Quality Control",
        "Resource Allocation",
        "Process Optimization"
      ],
      experience: "18 years",
      email: "khalid@constructionco.com",
      phone: "+1 (555) 123-4568"
    },
    {
      name: "Abdiaziz Hassan",
      position: "Chief Financial Officer",
      department: "Finance",
      image: abdiazizImage,
      bio: "Oversees financial strategy, budgeting, and financial reporting to ensure sustainable growth and profitability.",
      responsibilities: [
        "Financial Planning & Analysis",
        "Budget Management",
        "Risk Assessment",
        "Financial Reporting"
      ],
      experience: "15 years",
      email: "abdiaziz@constructionco.com",
      phone: "+1 (555) 123-4569"
    }
  ];

  const departmentManagers = [
    {
      name: "Sarah Johnson",
      position: "Construction Director",
      department: "Construction Management",
      image: image3,
      team: "85+ Professionals",
      projects: "45 Active Projects",
      bio: "Leads construction operations with focus on quality, safety, and timely project delivery.",
      achievements: ["98% On-Time Delivery", "Zero Safety Incidents", "95% Client Satisfaction"]
    },
    {
      name: "Michael Chen",
      position: "Engineering Manager",
      department: "Engineering",
      image: image4,
      team: "45+ Engineers",
      projects: "200+ Designs",
      bio: "Manages engineering teams to ensure structural integrity and innovative design solutions.",
      achievements: ["150+ Certified Designs", "Innovation Awards", "100% Compliance"]
    },
    {
      name: "Emily Rodriguez",
      position: "HR Director",
      department: "Human Resources",
      image: image5,
      team: "12+ HR Professionals",
      projects: "Company Culture",
      bio: "Develops talent strategies and fosters a positive work environment for all employees.",
      achievements: ["92% Employee Satisfaction", "Low Turnover Rate", "Best Workplace Award"]
    },
    {
      name: "David Thompson",
      position: "IT Director",
      department: "Information Technology",
      image: image6,
      team: "25+ IT Specialists",
      projects: "Digital Transformation",
      bio: "Leads technology implementation and digital innovation across all company operations.",
      achievements: ["99.9% Uptime", "Digital Innovation Award", "Cybersecurity Excellence"]
    }
  ];

  const managementStats = [
    { number: "15+", label: "Management Team Members", icon: Users },
    { number: "250+", label: "Years Combined Experience", icon: Award },
    { number: "98%", label: "Project Success Rate", icon: Target },
    { number: "50M+", label: "Annual Revenue Managed", icon: TrendingUp }
  ];

  const managementSystems = [
    {
      icon: BarChart3,
      title: "Performance Management",
      description: "Comprehensive KPI tracking and performance evaluation systems to ensure operational excellence.",
      features: ["Real-time Analytics", "Performance Dashboards", "Goal Tracking"]
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Streamlined operational processes and continuous improvement initiatives for maximum efficiency.",
      features: ["Lean Methodology", "Automated Workflows", "Quality Assurance"]
    },
    {
      icon: Briefcase,
      title: "Strategic Planning",
      description: "Long-term business strategy development and execution planning for sustainable growth.",
      features: ["Market Analysis", "Risk Management", "Strategic Roadmaps"]
    },
    {
      icon: FileText,
      title: "Compliance & Governance",
      description: "Robust compliance frameworks and governance structures to ensure regulatory adherence.",
      features: ["Policy Development", "Audit Systems", "Regulatory Compliance"]
    }
  ];

  const operationalMetrics = [
    {
      category: "Project Management",
      metrics: [
        { name: "On-Time Delivery", value: 98, target: 95 },
        { name: "Budget Adherence", value: 96, target: 92 },
        { name: "Quality Standards", value: 99, target: 95 }
      ]
    },
    {
      category: "Team Performance",
      metrics: [
        { name: "Employee Satisfaction", value: 92, target: 85 },
        { name: "Training Completion", value: 95, target: 90 },
        { name: "Safety Compliance", value: 100, target: 98 }
      ]
    },
    {
      category: "Client Relations",
      metrics: [
        { name: "Client Satisfaction", value: 97, target: 90 },
        { name: "Repeat Business", value: 85, target: 75 },
        { name: "Referral Rate", value: 78, target: 70 }
      ]
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
              Expert Management Team
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our experienced management team combines strategic vision with operational excellence 
              to deliver outstanding results and drive sustainable growth across all construction projects.
            </p>
            <div className="flex gap-4">
              <CustomButton size="lg" className="font-semibold">
                Meet Our Team
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="font-semibold">
                Management Approach
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Management Stats */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {managementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-yellow-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Management</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our executive leadership team sets the strategic direction and ensures operational excellence across all business units.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {managementTeam.map((manager, index) => (
              <CustomCard key={index} className="overflow-hidden group border-yellow-200">
                <div className="relative overflow-hidden">
                  <img
                    src={manager.image}
                    alt={manager.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-medium">
                      {manager.department}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{manager.name}</h3>
                  <div className="text-yellow-600 font-semibold text-lg mb-4">{manager.position}</div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{manager.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {manager.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-center gap-2 text-gray-600">
                          <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{manager.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span>{manager.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{manager.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Management Systems */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Management Systems</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced management frameworks and systems that drive efficiency and excellence across our operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementSystems.map((system, index) => (
              <CustomCard key={index} className="p-6 group border-yellow-200">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                  <system.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{system.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{system.description}</p>
                <ul className="space-y-2">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Department Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Management</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized managers leading key operational departments with expertise and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departmentManagers.map((manager, index) => (
              <CustomCard key={index} className="p-6 group border-yellow-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={manager.image}
                      alt={manager.name}
                      className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{manager.name}</h3>
                    <div className="text-yellow-600 font-semibold text-lg mb-1">{manager.position}</div>
                    <div className="text-gray-500 text-sm mb-4">{manager.department}</div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{manager.bio}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <div className="font-bold text-gray-900 text-lg">{manager.team}</div>
                        <div className="text-sm text-gray-600">Team Size</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <div className="font-bold text-gray-900 text-lg">{manager.projects}</div>
                        <div className="text-sm text-gray-600">Current Scope</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {manager.achievements.map((achievement, achievementIndex) => (
                          <span 
                            key={achievementIndex}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Management Performance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tracking key performance indicators to ensure continuous improvement and operational excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {operationalMetrics.map((category, index) => (
              <CustomCard key={index} className="p-6 border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                <div className="space-y-6">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">{metric.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-yellow-600">{metric.value}%</span>
                          <span className="text-sm text-gray-500">Target: {metric.target}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${
                            metric.value >= metric.target ? 'bg-green-500' : 'bg-yellow-500'
                          }`}
                          style={{width: `${metric.value}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Management Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in leadership that empowers, processes that optimize, and strategies that 
                drive sustainable growth. Our management approach combines data-driven decision making 
                with human-centric leadership.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Empowerment & Development</h4>
                    <p className="text-gray-600">Investing in team growth and providing autonomy for innovation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <PieChart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Data-Driven Decisions</h4>
                    <p className="text-gray-600">Leveraging analytics and metrics for informed strategic choices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Continuous Improvement</h4>
                    <p className="text-gray-600">Constantly refining processes and strategies for better outcomes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Management Impact</h3>
              <div className="space-y-6">
                <div className="text-center p-6 bg-white rounded-lg border border-yellow-200">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">45%</div>
                  <div className="text-gray-700">Increase in Operational Efficiency</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-yellow-200">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">30%</div>
                  <div className="text-gray-700">Reduction in Project Delays</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-yellow-200">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">25%</div>
                  <div className="text-gray-700">Growth in Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Connect With Our Management Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-yellow-100">
            Interested in learning more about our management approach or exploring partnership opportunities? 
            Reach out to our leadership team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" variant="secondary" className="font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              Contact Management
            </CustomButton>
            <CustomButton size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white hover:text-yellow-600">
              <FileText className="w-5 h-5 mr-2" />
              Download Management Overview
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Management;