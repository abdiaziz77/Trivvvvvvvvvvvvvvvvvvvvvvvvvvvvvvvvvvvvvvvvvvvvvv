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
  Mail as MailIcon,
  ArrowLeft,
  Crown,
  Trophy,
  BookOpen,
  Lightbulb,
  TrendingUp
} from "lucide-react";

// Import images - update paths as needed
import hassanImage from "../../assets/images/hassan.jpg";
import khalidImage from "../../assets/images/khalid.png";
import abdiazizImage from "../../assets/images/abdiaziz.jpg";
import mohammedImage from "../../assets/images/4.jpg";
import sarahImage from "../../assets/images/5.jpg";
import davidImage from "../../assets/images/6.jpg";
import leadershipHero from "../../assets/images/construction-hero.jpg";

const Leaders = () => {
  // Enhanced leadership team data with more details
  const leadershipTeam = [
    {
      name: "Hassan",
      position: "CEO & Founder",
      image: hassanImage,
      bio: "With over 20 years in construction management, Hassan leads our vision for innovative and sustainable building practices.",
      fullBio: "Hassan founded the company in 2009 with a vision to revolutionize the construction industry. With a Master's in Civil Engineering and two decades of experience, he has led over 200 successful projects. His leadership philosophy centers on innovation, sustainability, and empowering team members to achieve their full potential.",
      expertise: ["Strategic Planning", "Business Development", "Sustainable Construction", "Innovation Leadership"],
      education: "M.Sc. Civil Engineering, PhD Construction Management",
      yearsExperience: "20+ years",
      email: "hassan@company.com",
      linkedin: "https://linkedin.com/in/hassan",
      achievements: [
        "Construction Industry Innovator Award 2023",
        "Sustainable Building Leadership Award 2021",
        "Top 40 Under 40 Construction Leaders 2018"
      ]
    },
    {
      name: "Khalid",
      position: "Chief Operations Officer",
      image: khalidImage,
      bio: "Khalid oversees project execution and ensures operational excellence across all our construction sites.",
      fullBio: "Khalid brings 15 years of operational excellence to our team. His meticulous approach to project management and process optimization has been instrumental in delivering projects on time and within budget. He specializes in large-scale commercial and residential developments.",
      expertise: ["Operations Management", "Project Execution", "Quality Control", "Supply Chain Optimization"],
      education: "B.Sc. Construction Management, MBA",
      yearsExperience: "15+ years",
      email: "khalid@company.com",
      linkedin: "https://linkedin.com/in/khalid",
      achievements: [
        "Operational Excellence Award 2022",
        "Project Management Institute Fellow",
        "Six Sigma Black Belt Certified"
      ]
    },
    {
      name: "Abdiaziz",
      position: "Head of Innovation",
      image: abdiazizImage,
      bio: "Abdiaziz drives our technology adoption and research into new construction methodologies.",
      fullBio: "As our Head of Innovation, Abdiaziz is at the forefront of construction technology. With a background in both computer science and civil engineering, he has pioneered the integration of BIM, AI, and IoT technologies into our construction processes, improving efficiency and reducing environmental impact.",
      expertise: ["Construction Technology", "BIM Implementation", "Digital Transformation", "R&D Leadership"],
      education: "M.Sc. Computer Science, B.Sc. Civil Engineering",
      yearsExperience: "12+ years",
      email: "abdiaziz@company.com",
      linkedin: "https://linkedin.com/in/abdiaziz",
      achievements: [
        "Technology Innovation Award 2023",
        "BIM Implementation Pioneer 2021",
        "Construction Tech Speaker of the Year 2020"
      ]
    },
    {
      name: "Mohammed",
      position: "Sustainability Director",
      image: mohammedImage,
      bio: "Mohammed champions our environmental initiatives and green building certifications.",
      fullBio: "Mohammed leads our sustainability efforts with passion and expertise. A LEED Fellow with extensive experience in green building design, he ensures that every project meets the highest environmental standards while maintaining cost-effectiveness and architectural excellence.",
      expertise: ["Sustainable Design", "LEED Certification", "Environmental Compliance", "Green Materials"],
      education: "M.Arch Sustainable Design, LEED Fellow",
      yearsExperience: "14+ years",
      email: "mohammed@company.com",
      linkedin: "https://linkedin.com/in/mohammed",
      achievements: [
        "Green Building Council Leadership Award 2023",
        "Sustainability Champion 2022",
        "Environmental Excellence Award 2021"
      ]
    },
    {
      name: "Sarah Johnson",
      position: "Chief Financial Officer",
      image: sarahImage,
      bio: "Sarah manages our financial strategy and ensures sustainable growth across all operations.",
      fullBio: "With a CPA and extensive experience in construction finance, Sarah oversees all financial operations, risk management, and strategic investments. Her financial acumen has been crucial in navigating market fluctuations and ensuring the company's continued growth and stability.",
      expertise: ["Financial Strategy", "Risk Management", "Investment Analysis", "Corporate Finance"],
      education: "MBA Finance, CPA",
      yearsExperience: "18+ years",
      email: "sarah@company.com",
      linkedin: "https://linkedin.com/in/sarah",
      achievements: [
        "CFO of the Year Finalist 2023",
        "Financial Innovation Award 2022",
        "Top 25 Women in Construction Finance 2021"
      ]
    },
    {
      name: "David Chen",
      position: "Director of Projects",
      image: davidImage,
      bio: "David leads our project management team, ensuring exceptional delivery on all construction projects.",
      fullBio: "David brings exceptional project leadership to our team, with a track record of delivering complex projects ahead of schedule. His expertise in stakeholder management and construction methodology has been key to our reputation for reliability and excellence.",
      expertise: ["Project Management", "Stakeholder Relations", "Construction Methodology", "Team Leadership"],
      education: "M.Eng Civil Engineering, PMP Certified",
      yearsExperience: "16+ years",
      email: "david@company.com",
      linkedin: "https://linkedin.com/in/david",
      achievements: [
        "Project Management Excellence Award 2023",
        "Client Satisfaction Leader 2022",
        "Construction Leadership Award 2021"
      ]
    }
  ];

  // Leadership philosophy
  const leadershipPhilosophy = [
    {
      icon: Target,
      title: "Visionary Leadership",
      description: "We anticipate industry trends and position our company at the forefront of construction innovation."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We believe the best results come from empowering teams and fostering open communication."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We continuously invest in learning and development to stay ahead in a rapidly evolving industry."
    },
    {
      icon: Heart,
      title: "Servant Leadership",
      description: "We lead by serving our teams, clients, and communities with integrity and compassion."
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${leadershipHero})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back to About Button */}
          

            <div className="inline-flex items-center gap-2 bg-[#F4B942]/20 backdrop-blur-sm border border-[#F4B942]/30 rounded-full px-6 py-3 mb-8">
              <Crown className="w-5 h-5 text-[#F4B942]" />
              <span className="text-[#F4B942] font-semibold text-sm uppercase tracking-wide">
                Meet Our Leaders
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Leadership <span className="text-[#F4B942]">Team</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Guided by vision, driven by innovation, and committed to excellence. 
              Meet the exceptional leaders who shape our company's success story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CustomButton 
                size="lg" 
                className="font-semibold bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900"
                onClick={() => document.getElementById('leadership-team').scrollIntoView({ behavior: 'smooth' })}
              >
                Meet Our Team
                <ChevronRight className="w-5 h-5 ml-2" />
              </CustomButton>
              <CustomButton 
                variant="outline" 
                size="lg" 
                className="font-semibold border-white text-white hover:bg-white hover:text-gray-900"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                Contact Leadership
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our leadership team in driving innovation, 
              fostering growth, and building lasting relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipPhilosophy.map((principle, index) => (
              <CustomCard key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-yellow-200 group">
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

      {/* Leadership Team Grid */}
      <section id="leadership-team" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to excellence, innovation, and sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <CustomCard key={index} className="overflow-hidden group border-yellow-200 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                      >
                        <MailIcon className="w-4 h-4 text-gray-700" />
                      </a>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-yellow-600 font-semibold mb-3">{member.position}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {/* Quick Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{member.yearsExperience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      <span>{member.achievements.length} awards</span>
                    </div>
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Leadership Profiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Profiles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn more about the experience, expertise, and achievements of our leadership team.
            </p>
          </div>
          
          <div className="space-y-16">
            {leadershipTeam.map((member, index) => (
              <div key={index} className={`grid lg:grid-cols-3 gap-8 items-start ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                {/* Image Column */}
                <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                {/* Content Column */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-yellow-600 text-xl font-semibold mb-4">{member.position}</div>
                    <p className="text-lg text-gray-600 leading-relaxed">{member.fullBio}</p>
                  </div>
                  
                  {/* Expertise */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-600" />
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Education & Experience */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-yellow-600" />
                        Education
                      </h4>
                      <p className="text-gray-600">{member.education}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-yellow-600" />
                        Experience
                      </h4>
                      <p className="text-gray-600">{member.yearsExperience} in construction industry</p>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Contact */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <CustomButton size="sm" variant="outline" className="font-semibold">
                      <MailIcon className="w-4 h-4 mr-2" />
                      Email {member.name.split(' ')[0]}
                    </CustomButton>
                    <CustomButton size="sm" variant="outline" className="font-semibold">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </CustomButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Connect With Our Leaders</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-yellow-100">
            Our leadership team is always available to discuss new opportunities, 
            partnerships, and how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" variant="secondary" className="font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Meeting
            </CustomButton>
            <CustomButton size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white hover:text-yellow-600">
              <MailIcon className="w-5 h-5 mr-2" />
              Contact Executive Team
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaders;