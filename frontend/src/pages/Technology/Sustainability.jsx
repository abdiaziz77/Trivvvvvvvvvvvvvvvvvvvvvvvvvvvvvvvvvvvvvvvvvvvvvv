import { useState } from 'react';
import { 
  Leaf, 
  Recycle, 
  Sun, 
  Droplets, 
  Shield, 
  CheckCircle, 
  Award,
  Target,
  Users,
  BarChart3,
  Clock,
  DollarSign,
  Heart,
  Globe,
  ArrowRight,
  Play,
  Building,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const Sustainability = () => {
  const [activePractice, setActivePractice] = useState('materials');

  // Image URLs with links - updated to yellow/gold themed images
  const imageLinks = {
    sustainabilityHero: {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/projects/green-buildings",
      alt: "Sustainable Building with Solar Panels"
    },
    greenBuilding: {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/certifications/leed",
      alt: "LEED Certified Green Building"
    },
    solarInstallation: {
      url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/services/energy-solutions",
      alt: "Solar Panel Installation"
    },
    waterManagement: {
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/solutions/water-conservation",
      alt: "Water Management System"
    },
    wasteRecycling: {
      url: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/practices/waste-management",
      alt: "Construction Waste Recycling"
    },
    ecoMaterials: {
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/materials/sustainable",
      alt: "Eco-Friendly Building Materials"
    },
    // New yellow-themed hero background
    yellowHero: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/sustainability",
      alt: "Modern sustainable building with golden hour lighting"
    }
  };

  const sustainablePractices = [
    {
      id: 'materials',
      title: 'Eco-Friendly Materials',
      icon: Recycle,
      description: 'Using sustainable, recycled, and locally sourced materials to reduce environmental impact.',
      features: [
        'Recycled Steel & Concrete',
        'Bamboo & Sustainable Timber',
        'Low-VOC Paints & Finishes',
        'Locally Sourced Materials'
      ],
      benefits: [
        '50% Reduction in Carbon Footprint',
        'Support Local Economies',
        'Healthier Indoor Environments',
        'LEED Certification Points'
      ],
      imageLink: imageLinks.ecoMaterials
    },
    {
      id: 'energy',
      title: 'Energy Efficiency',
      icon: Sun,
      description: 'Implementing renewable energy solutions and high-efficiency systems for optimal performance.',
      features: [
        'Solar Panel Integration',
        'High-Efficiency HVAC Systems',
        'LED Lighting Solutions',
        'Smart Energy Management'
      ],
      benefits: [
        '40% Energy Savings',
        'Reduced Operating Costs',
        'Lower Carbon Emissions',
        'Energy Independence'
      ],
      imageLink: imageLinks.solarInstallation
    },
    {
      id: 'water',
      title: 'Water Conservation',
      icon: Droplets,
      description: 'Advanced water management systems to reduce consumption and promote recycling.',
      features: [
        'Rainwater Harvesting',
        'Greywater Recycling',
        'Low-Flow Fixtures',
        'Smart Irrigation Systems'
      ],
      benefits: [
        '60% Water Reduction',
        'Lower Utility Costs',
        'Sustainable Resource Use',
        'Drought Resilience'
      ],
      imageLink: imageLinks.waterManagement
    },
    {
      id: 'waste',
      title: 'Waste Management',
      icon: Shield,
      description: 'Comprehensive waste reduction and recycling programs throughout construction lifecycle.',
      features: [
        'Construction Waste Recycling',
        'Material Reuse Programs',
        'Digital Documentation',
        'Waste Tracking Systems'
      ],
      benefits: [
        '85% Waste Diversion Rate',
        'Reduced Landfill Impact',
        'Cost Savings on Materials',
        'Environmental Compliance'
      ],
      imageLink: imageLinks.wasteRecycling
    }
  ];

  const sustainabilityStats = [
    { number: '65%', label: 'Reduced Carbon Footprint', icon: Leaf, link: '/impact/carbon-reduction' },
    { number: '85%', label: 'Waste Diverted from Landfills', icon: Recycle, link: '/impact/waste-reduction' },
    { number: '40%', label: 'Energy Savings', icon: Sun, link: '/impact/energy-efficiency' },
    { number: '60%', label: 'Water Conservation', icon: Droplets, link: '/impact/water-conservation' }
  ];

  const greenCertifications = [
    {
      name: 'LEED Certification',
      icon: Award,
      description: 'Leadership in Energy and Environmental Design - Platinum, Gold, and Silver levels',
      projects: '25+ Certified Projects',
      link: '/certifications/leed',
      image: imageLinks.greenBuilding
    },
    {
      name: 'BREEAM',
      icon: Globe,
      description: 'Building Research Establishment Environmental Assessment Method',
      projects: '15+ Rated Projects',
      link: '/certifications/breeam'
    },
    {
      name: 'WELL Building Standard',
      icon: Heart,
      description: 'Focus on human health and wellness in building environments',
      projects: '12+ Certified Projects',
      link: '/certifications/well'
    },
    {
      name: 'Green Globes',
      icon: Target,
      description: 'Comprehensive environmental assessment and rating system',
      projects: '18+ Certified Projects',
      link: '/certifications/green-globes'
    }
  ];

  const ecoInitiatives = [
    {
      icon: Users,
      title: 'Green Training Programs',
      description: 'Comprehensive sustainability training for all employees and subcontractors.',
      link: '/training/green-programs'
    },
    {
      icon: Building,
      title: 'Sustainable Site Development',
      description: 'Preserving natural habitats and implementing erosion control measures.',
      link: '/practices/site-development'
    },
    {
      icon: Sparkles,
      title: 'Indoor Environmental Quality',
      description: 'Ensuring optimal air quality, natural lighting, and thermal comfort.',
      link: '/solutions/indoor-quality'
    },
    {
      icon: BarChart3,
      title: 'Environmental Reporting',
      description: 'Transparent tracking and reporting of sustainability metrics.',
      link: '/reports/environmental'
    }
  ];

  const caseStudies = [
    {
      project: 'Eco-Tower Commercial Complex',
      location: 'Downtown District',
      achievements: [
        'LEED Platinum Certified',
        'Net-Zero Energy Building',
        '95% Construction Waste Recycled',
        '50% Reduced Water Consumption'
      ],
      results: {
        energy: '65% Reduction',
        water: '50% Savings',
        waste: '95% Diverted',
        cost: '20% Lower Operating Costs'
      },
      link: '/case-studies/eco-tower',
      image: imageLinks.greenBuilding
    },
    {
      project: 'Green Valley Residential',
      location: 'Suburban Community',
      achievements: [
        'LEED Gold Certified',
        'Solar-Ready Infrastructure',
        'Native Landscaping',
        'Electric Vehicle Charging'
      ],
      results: {
        energy: '45% Reduction',
        water: '60% Savings',
        waste: '85% Diverted',
        cost: '15% Lower Utility Costs'
      },
      link: '/case-studies/green-valley',
      image: imageLinks.solarInstallation
    }
  ];

  const currentPractice = sustainablePractices.find(practice => practice.id === activePractice);

  const handleImageClick = (link) => {
    // In a real application, you would use React Router or similar
    // For now, we'll use window.location or a simple alert
    window.open(link, '_blank');
    // Alternatively: window.location.href = link;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Updated with Yellow Theme */}
      <section className="relative bg-gradient-to-br from-amber-900 to-yellow-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <a 
          href={imageLinks.yellowHero.link}
          onClick={(e) => {
            e.preventDefault();
            handleImageClick(imageLinks.yellowHero.link);
          }}
          className="absolute inset-0 bg-cover bg-center z-0 cursor-pointer block"
          style={{ backgroundImage: `url(${imageLinks.yellowHero.url})` }}
        ></a>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F4B942]/20 backdrop-blur-sm border border-[#F4B942]/30 rounded-full px-6 py-3 mb-6">
              <Leaf className="w-5 h-5 text-[#F4B942]" />
              <span className="text-[#F4B942] font-semibold text-sm uppercase tracking-wide">
                Sustainable Construction
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Building a Sustainable
              <span className="block text-[#F4B942]">Future Together</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Committed to sustainable construction practices that protect our planet, 
              enhance communities, and create healthier living environments for generations to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Our Sustainability Approach
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                View Green Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Stats - Updated with Yellow */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Environmental Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable results demonstrating our commitment to sustainable construction practices.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, index) => (
              <a
                key={index}
                href={stat.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(stat.link);
                }}
                className="text-center cursor-pointer group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F4B942] flex items-center justify-center group-hover:bg-[#F4B942]/90 transition-colors">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-[#F4B942] transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices - Updated with Yellow */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sustainable Practices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive approaches to environmentally responsible construction across all project phases.
            </p>
          </div>

          {/* Practice Tabs */}
          <div className="max-w-6xl mx-auto">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {sustainablePractices.map((practice) => (
                <button
                  key={practice.id}
                  onClick={() => setActivePractice(practice.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activePractice === practice.id
                      ? 'bg-[#F4B942] text-gray-900 shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <practice.icon className="w-5 h-5" />
                  {practice.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {currentPractice && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{currentPractice.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{currentPractice.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Key Features</h4>
                    <div className="space-y-3">
                      {currentPractice.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#F4B942] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Environmental Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentPractice.benefits.map((benefit, index) => (
                        <div key={index} className="bg-[#F4B942]/10 p-4 rounded-lg border border-[#F4B942]/20">
                          <div className="text-sm text-gray-700">{benefit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={currentPractice.imageLink.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(currentPractice.imageLink.link);
                  }}
                  className="relative cursor-pointer group block"
                >
                  <img
                    src={currentPractice.imageLink.url}
                    alt={currentPractice.imageLink.alt}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl group-hover:from-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-[#F4B942]" />
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Green Certifications - Updated with Yellow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Green Certifications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognized for excellence in sustainable building practices through industry-leading certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {greenCertifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(cert.link);
                }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer block"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4B942]/10 flex items-center justify-center mb-6 group-hover:bg-[#F4B942]/20 transition-colors mx-auto">
                  <cert.icon className="w-8 h-8 text-[#F4B942]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F4B942] transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                <div className="text-[#F4B942] font-semibold text-sm group-hover:text-[#F4B942]/80 transition-colors">
                  {cert.projects}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Initiatives - Updated with Yellow */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Environmental Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beyond construction - our commitment to environmental stewardship extends across all operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecoInitiatives.map((initiative, index) => (
              <a
                key={index}
                href={initiative.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(initiative.link);
                }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer block"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4B942]/10 flex items-center justify-center mb-6 group-hover:bg-[#F4B942]/20 transition-colors mx-auto">
                  <initiative.icon className="w-8 h-8 text-[#F4B942]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F4B942] transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {initiative.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - Updated with Yellow */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainable Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real projects demonstrating our commitment to environmental excellence and sustainable outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <a
                key={index}
                href={study.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(study.link);
                }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image.url}
                    alt={study.project}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-[#F4B942]" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-[#F4B942]" />
                    <span className="text-[#F4B942] font-semibold">Green Project</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#F4B942] transition-colors">
                    {study.project}
                  </h3>
                  <p className="text-gray-600 mb-6">{study.location}</p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Achievements</h4>
                    <ul className="space-y-2">
                      {study.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#F4B942]/10 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F4B942]">{study.results.energy}</div>
                      <div className="text-xs text-gray-600">Energy Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F4B942]">{study.results.water}</div>
                      <div className="text-xs text-gray-600">Water Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F4B942]">{study.results.waste}</div>
                      <div className="text-xs text-gray-600">Waste Diverted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F4B942]">{study.results.cost}</div>
                      <div className="text-xs text-gray-600">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with Yellow */}
      <section className="py-16 bg-[#F4B942] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Build Sustainable with JengaNow</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to create sustainable, environmentally responsible buildings that benefit both your 
            bottom line and the planet? Let's build a better future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Sustainable Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Sustainability Report
            </button>
          </div>
        </div>
      </section>

      {/* Environmental Partners - Updated with Yellow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Partners</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading environmental organizations and sustainable material suppliers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              { name: 'USGBC', link: '/partners/usgbc' },
              { name: 'Green Building Council', link: '/partners/gbc' },
              { name: 'EPA', link: '/partners/epa' },
              { name: 'Energy Star', link: '/partners/energy-star' },
              { name: 'Forest Stewardship', link: '/partners/fsc' },
              { name: 'WaterSense', link: '/partners/watersense' }
            ].map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(partner.link);
                }}
                className="text-center p-4 cursor-pointer hover:opacity-100 transition-opacity"
              >
                <div className="text-gray-400 font-semibold text-sm hover:text-[#F4B942] transition-colors">
                  {partner.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;