import React, { useState } from 'react';
import { 
  Building,
  Calendar,
  MapPin,
  Users,
  Award,
  Star,
  ChevronRight,
  X,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Quote,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  Leaf,
  Zap,
  BarChart3,
  Search,
  Filter
} from "lucide-react";

// Company images from Unsplash
const companyImages = {
  apex: "https://www.sto.com/media/images/references/office_building_sto_se___co__kgaa/41141-2400-1600_1200.webp",
  cornerstone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ODnbTEJtlrLN6IF5OaudcThQRYpMVaWh0A&s",
  summit: "https://www.ahmm.co.uk/assets/galleries/142/3473_A624_N557.jpg",
  pinnacle: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60",
  bedrock: "https://images.freeimages.com/images/premium/previews/1037/10376988-yellow-building-against-blue-sky.jpg",
  horizon: "https://images.unsplash.com/photo-1541976590-713941681591?w=600&auto=format&fit=crop&q=60",
  metro: "https://c8.alamy.com/comp/2KF7AGN/yellow-and-white-building-with-beautiful-balconies-in-the-historic-center-of-seville-andalusia-spain-2KF7AGN.jpg",
  terra: "https://www.shutterstock.com/image-photo/vibrant-yellow-orange-building-stands-260nw-2504593093.jpg"
};

const CompanyNews = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialization, setFilterSpecialization] = useState('all');

  // Construction Companies Data with Enhanced Information
  const constructionCompanies = [
    {
      id: 1,
      name: "Apex Construction Group",
      image: companyImages.apex,
      location: "New York, NY",
      founded: 1995,
      employees: "250+",
      annualRevenue: "$150M",
      specialization: "Commercial & Residential",
      recentNews: "Awarded $50M Government Contract for Public Infrastructure",
      newsDate: "2024-01-15",
      description: "Leading commercial construction firm with 25+ years of excellence in high-rise and infrastructure projects. Specializing in sustainable urban development and innovative building technologies.",
      projects: ["Manhattan Tower", "Central Park Residences", "Financial District Complex", "Hudson Yards Expansion"],
      awards: ["Best Commercial Builder 2023", "Safety Excellence Award", "Green Building Certified", "Innovation in Construction"],
      contact: {
        phone: "+1 (555) 123-4567",
        email: "info@apexconstruction.com",
        website: "www.apexconstruction.com"
      },
      metrics: {
        projectsCompleted: 150,
        clientSatisfaction: 98,
        safetyRating: 99.8,
        yearsInBusiness: 28
      },
      services: ["High-Rise Construction", "Infrastructure Development", "Sustainable Building", "Project Management"]
    },
    {
      id: 2,
      name: "Cornerstone Builders Inc.",
      image: companyImages.cornerstone,
      location: "Chicago, IL",
      founded: 1988,
      employees: "180+",
      annualRevenue: "$85M",
      specialization: "Residential & Renovation",
      recentNews: "Launched Sustainable Housing Initiative in Suburban Communities",
      newsDate: "2024-01-12",
      description: "Family-owned construction company specializing in custom homes and sustainable building practices. Three generations of craftsmanship and community-focused development.",
      projects: ["Lakeview Estates", "Suburban Renewal Project", "Eco-Home Development", "Historic Preservation"],
      awards: ["Residential Builder of the Year", "Sustainable Construction Award", "Community Impact Recognition", "Family Business Excellence"],
      contact: {
        phone: "+1 (555) 234-5678",
        email: "contact@cornerstonebuilders.com",
        website: "www.cornerstonebuilders.com"
      },
      metrics: {
        projectsCompleted: 95,
        clientSatisfaction: 97,
        safetyRating: 99.5,
        yearsInBusiness: 35
      },
      services: ["Custom Home Building", "Renovation & Remodeling", "Sustainable Design", "Community Development"]
    },
    {
      id: 3,
      name: "Summit Construction Ltd.",
      image: companyImages.summit,
      location: "Denver, CO",
      founded: 2005,
      employees: "120+",
      annualRevenue: "$65M",
      specialization: "Mountain & Resort Construction",
      recentNews: "Completed Luxury Ski Resort Expansion Project",
      newsDate: "2024-01-10",
      description: "Specialists in mountain terrain construction and luxury resort developments across the Rocky Mountains. Experts in challenging topography and alpine architecture.",
      projects: ["Aspen Peak Resort", "Mountain View Estates", "Wilderness Lodge Complex", "Alpine Retreat Center"],
      awards: ["Mountain Construction Excellence", "Luxury Development Award", "Environmental Stewardship", "Design Innovation"],
      contact: {
        phone: "+1 (555) 345-6789",
        email: "hello@summitconstruction.com",
        website: "www.summitconstruction.com"
      },
      metrics: {
        projectsCompleted: 78,
        clientSatisfaction: 96,
        safetyRating: 99.2,
        yearsInBusiness: 18
      },
      services: ["Resort Development", "Mountain Architecture", "Terrain Engineering", "Luxury Construction"]
    },
    {
      id: 4,
      name: "Pinnacle Development Corp",
      image: companyImages.pinnacle,
      location: "Miami, FL",
      founded: 2010,
      employees: "95+",
      annualRevenue: "$120M",
      specialization: "Coastal & Luxury Properties",
      recentNews: "Breaking Ground on Oceanfront Condominium Tower",
      newsDate: "2024-01-08",
      description: "Premium coastal construction company focusing on luxury properties and hurricane-resistant designs. Pioneers in sustainable coastal development and resilient architecture.",
      projects: ["Ocean Drive Towers", "Beachfront Villas", "Marina Bay Development", "Coastal Preservation Project"],
      awards: ["Coastal Construction Innovation", "Luxury Design Award", "Storm Safety Certified", "Sustainable Coastal Development"],
      contact: {
        phone: "+1 (555) 456-7890",
        email: "develop@pinnaclecorp.com",
        website: "www.pinnaclecorp.com"
      },
      metrics: {
        projectsCompleted: 62,
        clientSatisfaction: 99,
        safetyRating: 99.9,
        yearsInBusiness: 13
      },
      services: ["Luxury Condominiums", "Coastal Engineering", "Hurricane-Resistant Design", "Waterfront Development"]
    },
    {
      id: 5,
      name: "Bedrock Foundations LLC",
      image: companyImages.bedrock,
      location: "Dallas, TX",
      founded: 2000,
      employees: "200+",
      annualRevenue: "$180M",
      specialization: "Industrial & Infrastructure",
      recentNews: "Partnered with State for Highway Infrastructure Upgrade",
      newsDate: "2024-01-05",
      description: "Industrial construction experts specializing in large-scale infrastructure and commercial projects. Leaders in heavy civil construction and industrial facility development.",
      projects: ["Texas Highway Expansion", "Industrial Park Development", "Commercial Complex", "Logistics Center"],
      awards: ["Infrastructure Excellence", "Industrial Builder of the Year", "Safety First Award", "Large Project Delivery"],
      contact: {
        phone: "+1 (555) 567-8901",
        email: "foundations@bedrockllc.com",
        website: "www.bedrockllc.com"
      },
      metrics: {
        projectsCompleted: 210,
        clientSatisfaction: 95,
        safetyRating: 99.7,
        yearsInBusiness: 23
      },
      services: ["Industrial Construction", "Infrastructure Development", "Heavy Civil Engineering", "Commercial Facilities"]
    },
    {
      id: 6,
      name: "Horizon Construction Partners",
      image: companyImages.horizon,
      location: "Seattle, WA",
      founded: 2015,
      employees: "80+",
      annualRevenue: "$45M",
      specialization: "Sustainable & Tech-Integrated",
      recentNews: "Pioneering AI-Integrated Building Management Systems",
      newsDate: "2024-01-03",
      description: "Innovative construction firm combining sustainable practices with cutting-edge technology integration. Focus on smart buildings and eco-friendly construction methods.",
      projects: ["Smart Office Complex", "Eco-Tech Campus", "Sustainable Housing Community", "Green Innovation Center"],
      awards: ["Technology Innovation Award", "Green Building Leader", "Future Construction Award", "Smart Building Excellence"],
      contact: {
        phone: "+1 (555) 678-9012",
        email: "partners@horizonconstruction.com",
        website: "www.horizonconstruction.com"
      },
      metrics: {
        projectsCompleted: 45,
        clientSatisfaction: 98,
        safetyRating: 99.6,
        yearsInBusiness: 8
      },
      services: ["Smart Building Integration", "Sustainable Construction", "Technology Implementation", "Green Certification"]
    },
    {
      id: 7,
      name: "Metro Urban Developers",
      image: companyImages.metro,
      location: "Los Angeles, CA",
      founded: 1998,
      employees: "160+",
      annualRevenue: "$110M",
      specialization: "Urban & Mixed-Use",
      recentNews: "Transit-Oriented Development Project Breaks Ground",
      newsDate: "2024-01-18",
      description: "Specialists in urban infill and mixed-use developments. Creating vibrant, walkable communities with integrated residential, commercial, and public spaces.",
      projects: ["Downtown Revitalization", "Transit Hub Development", "Mixed-Use Complex", "Urban Renewal District"],
      awards: ["Urban Development Excellence", "Community Impact Award", "Mixed-Use Innovation", "Transit-Oriented Design"],
      contact: {
        phone: "+1 (555) 789-0123",
        email: "develop@metrourban.com",
        website: "www.metrourban.com"
      },
      metrics: {
        projectsCompleted: 88,
        clientSatisfaction: 96,
        safetyRating: 99.4,
        yearsInBusiness: 25
      },
      services: ["Mixed-Use Development", "Urban Planning", "Transit-Oriented Design", "Community Integration"]
    },
    {
      id: 8,
      name: "Terra Firma Construction",
      image: companyImages.terra,
      location: "Phoenix, AZ",
      founded: 2012,
      employees: "110+",
      annualRevenue: "$75M",
      specialization: "Desert & Sustainable",
      recentNews: "Awarded LEED Platinum Certification for Desert Eco-Campus",
      newsDate: "2024-01-20",
      description: "Experts in desert construction and sustainable building practices. Specializing in water conservation, passive cooling, and native material utilization.",
      projects: ["Desert Eco-Campus", "Arid Climate Research Center", "Sustainable Resort", "Water Conservation Facility"],
      awards: ["Desert Construction Excellence", "LEED Platinum Certified", "Water Conservation Award", "Sustainable Design"],
      contact: {
        phone: "+1 (555) 890-1234",
        email: "build@terrafirma.com",
        website: "www.terrafirma.com"
      },
      metrics: {
        projectsCompleted: 52,
        clientSatisfaction: 97,
        safetyRating: 99.3,
        yearsInBusiness: 11
      },
      services: ["Desert Architecture", "Sustainable Design", "Water Management", "Passive Cooling Systems"]
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      companyId: 1,
      author: "Sarah Johnson",
      position: "Project Manager, Commercial Real Estate",
      content: "Apex Construction delivered our corporate headquarters ahead of schedule and under budget. Their attention to detail and commitment to quality is unmatched in the industry.",
      rating: 5,
      project: "Manhattan Tower"
    },
    {
      id: 2,
      companyId: 2,
      author: "Michael Chen",
      position: "Homeowner",
      content: "Cornerstone Builders transformed our vision into reality. Their team was professional, communicative, and delivered exceptional craftsmanship throughout our home renovation.",
      rating: 5,
      project: "Custom Home Renovation"
    },
    {
      id: 3,
      companyId: 3,
      author: "Emily Rodriguez",
      position: "Resort Development Director",
      content: "Summit Construction's expertise in mountain terrain construction is phenomenal. They navigated complex challenges while maintaining the highest safety standards.",
      rating: 4,
      project: "Aspen Peak Resort"
    },
    {
      id: 4,
      companyId: 4,
      author: "David Thompson",
      position: "Real Estate Investor",
      content: "Pinnacle Development's coastal properties combine luxury with durability. Their hurricane-resistant designs give us complete confidence in our investments.",
      rating: 5,
      project: "Ocean Drive Towers"
    }
  ];

  // Filter companies based on search and specialization
  const filteredCompanies = constructionCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = filterSpecialization === 'all' || company.specialization.includes(filterSpecialization);
    return matchesSearch && matchesSpecialization;
  });

  // Specializations for filter
  const specializations = ['all', 'Commercial & Residential', 'Residential & Renovation', 'Mountain & Resort Construction', 'Coastal & Luxury Properties', 'Industrial & Infrastructure', 'Sustainable & Tech-Integrated', 'Urban & Mixed-Use', 'Desert & Sustainable'];

  // Modal Components
  const CompanyModal = ({ company, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">{company.name}</h2>
              <div className="flex items-center gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{company.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="text-lg">{company.employees} Employees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">Est. {company.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  <span className="text-lg">{company.annualRevenue} Revenue</span>
                </div>
              </div>
            </div>
            <div className="bg-[#F4B942] text-white px-6 py-3 rounded-xl font-semibold text-lg">
              {company.specialization}
            </div>
          </div>

          {/* Company Metrics Dashboard */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-[#F4B942] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{company.metrics.projectsCompleted}+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Star className="w-8 h-8 text-[#F4B942] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{company.metrics.clientSatisfaction}%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Shield className="w-8 h-8 text-[#F4B942] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{company.metrics.safetyRating}%</div>
              <div className="text-gray-600">Safety Rating</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Building className="w-8 h-8 text-[#F4B942] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{company.metrics.yearsInBusiness}</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Company Overview</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{company.description}</p>
              
              <h4 className="text-xl font-bold mb-3 text-gray-900">Recent News</h4>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <p className="text-gray-800 font-semibold text-lg">{company.recentNews}</p>
                <div className="flex items-center gap-2 mt-3 text-gray-500">
                  <Clock className="w-5 h-5" />
                  <span>{new Date(company.newsDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4 text-gray-900">Services Offered</h4>
              <div className="grid grid-cols-2 gap-3">
                {company.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[#F4B942]/10 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#F4B942]" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Notable Projects</h3>
              <div className="space-y-4 mb-6">
                {company.projects.map((project, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Target className="w-5 h-5 text-[#F4B942]" />
                    <span className="text-gray-700 font-medium">{project}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Awards & Recognition</h3>
              <div className="space-y-3">
                {company.awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[#F4B942]/10 p-4 rounded-lg">
                    <Award className="w-5 h-5 text-[#F4B942]" />
                    <span className="text-gray-700 font-medium">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#F4B942]" />
                <span className="text-gray-700 text-lg">{company.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#F4B942]" />
                <span className="text-gray-700 text-lg">{company.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-6 h-6 text-[#F4B942]" />
                <span className="text-gray-700 text-lg">{company.contact.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TestimonialModal = ({ testimonial, onClose }) => {
    const company = constructionCompanies.find(c => c.id === testimonial.companyId);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-2xl w-full p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Client Testimonial</h3>
              <p className="text-gray-600 mb-4">From {company.name}</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonial.rating ? "text-[#F4B942] fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-6">
            <Quote className="w-10 h-10 text-[#F4B942] mb-6" />
            <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
            <div className="border-t pt-6">
              <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.position}</p>
              <p className="text-[#F4B942] font-medium mt-3 text-lg">Project: {testimonial.project}</p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#F4B942] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-[#e6a932] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://cdn.prod.website-files.com/642cb37b4e83d0459b126169/649ace17248ee237b3225eec_6%20Tips%20to%20Find%20a%20Top-notch%20Construction%20Company.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-[#F4B942] text-white px-6 py-3 rounded-full text-lg font-semibold mb-8">
              <BarChart3 className="w-6 h-6" />
              Industry Insights & News
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Construction Industry Leaders
            </h1>
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover the nation's top construction companies, their latest projects, and industry innovations. 
              Stay informed about the companies shaping our built environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-gray-300">Featured Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-gray-300">Years Average Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">$800M+</div>
                <div className="text-gray-300">Combined Annual Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Controls */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search companies by name, location, or specialization..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                className="border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#F4B942] focus:border-transparent"
                value={filterSpecialization}
                onChange={(e) => setFilterSpecialization(e.target.value)}
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>
                    {spec === 'all' ? 'All Specializations' : spec}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Construction Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore leading construction firms across different specializations and regions
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
                onClick={() => setSelectedCompany(company)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#F4B942] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {company.location}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#F4B942] transition-colors">
                    {company.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Building className="w-4 h-4" />
                    <span className="text-sm font-medium">{company.specialization}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {company.recentNews}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{company.employees}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <DollarSign className="w-4 h-4" />
                      <span>{company.annualRevenue}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(company.newsDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#F4B942] font-semibold">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Statistics */}
          <div className="bg-gradient-to-r from-[#F4B942] to-[#e6a932] rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Industry Overview</h3>
              <p className="text-white/90 text-lg">Combined achievements of featured construction companies</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">880+</div>
                <div className="text-sm opacity-90">Total Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">97%</div>
                <div className="text-sm opacity-90">Average Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.6%</div>
                <div className="text-sm opacity-90">Average Safety Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">161</div>
                <div className="text-sm opacity-90">Combined Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what clients are saying about their experiences with our featured construction companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => {
              const company = constructionCompanies.find(c => c.id === testimonial.companyId);
              return (
                <div
                  key={testimonial.id}
                  className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer bg-gray-50"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#F4B942] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">{company.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "text-[#F4B942] fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[#F4B942] font-semibold">{testimonial.project}</span>
                    <span className="text-gray-500 text-sm">Click to read full testimonial</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}

      {selectedTestimonial && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </div>
  );
};

export default CompanyNews;