import React, { useState } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Users, 
  Building, 
  Zap, 
  ArrowRight, 
  X,
  Clock,
  DollarSign,
  Target,
  Shield,
  Leaf,
  Factory,
  Home,
  BookOpen,
  Download,
  Share2,
  Eye,
  Play,
  MessageCircle,
  Star,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Globe,
  BarChart3,
  Newspaper,
  FileText
} from 'lucide-react';

const IndustryUpdates = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [modalData, setModalData] = useState(null);

  // Open modal with data
  const openModal = (modalId, data = null) => {
    setActiveModal(modalId);
    setModalData(data);
  };

  // Close modal
  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  // Latest News Data
  const latestNews = [
    {
      id: 'news1',
      category: 'Market Trends',
      title: 'Global Construction Market to Reach $15.2 Trillion by 2030',
      preview: 'Rapid urbanization and infrastructure development driving unprecedented growth worldwide',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      date: '2024-01-25',
      author: 'Global Construction Perspectives',
      readTime: '4 min read',
      fullContent: {
        description: 'The global construction market is projected to grow at a CAGR of 4.2% from 2024 to 2030, reaching $15.2 trillion. Asia-Pacific leads the growth with China and India accounting for over 40% of global construction spending.',
        keyPoints: [
          'Asia-Pacific region driving 60% of global growth',
          'Residential construction leading sector expansion',
          'Government infrastructure initiatives accelerating',
          'Sustainable building practices becoming mainstream',
          'Technology adoption improving efficiency'
        ],
        statistics: [
          '4.2% CAGR growth projection',
          '$15.2 trillion market value by 2030',
          '40% spending in China and India',
          '25% increase in green building projects'
        ]
      }
    },
    {
      id: 'news2',
      category: 'Technology',
      title: 'AI and IoT Integration Transforms Construction Sites',
      preview: 'Smart construction sites improve safety and efficiency through real-time monitoring',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
      date: '2024-01-22',
      author: 'Construction Tech Review',
      readTime: '5 min read',
      fullContent: {
        description: 'Artificial Intelligence and Internet of Things are creating smart construction sites that enhance safety, efficiency, and project management through real-time data monitoring and predictive analytics.',
        keyPoints: [
          'AI-powered safety monitoring systems',
          'IoT sensors for equipment tracking',
          'Real-time progress monitoring',
          'Predictive maintenance algorithms',
          'Automated quality control'
        ],
        statistics: [
          '25% reduction in workplace accidents',
          '15% improvement in project timelines',
          '30% decrease in equipment downtime',
          '20% cost savings through efficiency'
        ]
      }
    },
    {
      id: 'news3',
      category: 'Sustainability',
      title: 'Green Building Materials Gain Mainstream Adoption',
      preview: 'Cross-laminated timber and recycled materials becoming industry standards',
      image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&h=400&fit=crop',
      date: '2024-01-20',
      author: 'Green Building Council',
      readTime: '3 min read',
      fullContent: {
        description: 'Sustainable building materials are no longer niche products but are becoming standard in construction projects worldwide, driven by environmental concerns and regulatory requirements.',
        keyPoints: [
          'Cross-laminated timber usage up 300%',
          'Recycled steel and concrete mixtures',
          'Low-carbon cement alternatives',
          'Bio-based insulation materials',
          'Sustainable certification growth'
        ],
        statistics: [
          '300% growth in CLT construction',
          '40% reduction in carbon footprint',
          '95% construction waste recyclable',
          'LEED certification projects up 45%'
        ]
      }
    },
    {
      id: 'news4',
      category: 'Labor Market',
      title: 'Construction Labor Shortage Reaches Critical Levels',
      preview: 'Industry faces shortage of 1.5 million workers in developed economies',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop',
      date: '2024-01-18',
      author: 'Global Construction Workforce Study',
      readTime: '4 min read',
      fullContent: {
        description: 'The construction industry is experiencing its worst labor shortage in decades, with North America and Europe needing over 1.5 million additional workers to meet current project demands.',
        keyPoints: [
          'Aging workforce and retirement wave',
          'Skills gap in new technologies',
          'Competition from other industries',
          'Need for training and apprenticeship programs',
          'Immigration policy impacts'
        ],
        statistics: [
          '1.5 million worker shortage',
          'Average age of workers: 42 years',
          '25% workforce retiring in 10 years',
          '15% wage increase in high-demand trades'
        ]
      }
    }
  ];

  // Market Trends Data
  const marketTrends = [
    {
      id: 'trend1',
      icon: TrendingUp,
      title: 'Digital Transformation',
      value: '+35%',
      description: 'BIM, drones, and AI adoption in construction projects',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      details: {
        description: 'Digital technologies are revolutionizing construction processes, from design to project management and maintenance.',
        technologies: [
          'Building Information Modeling (BIM)',
          'Drone surveying and monitoring',
          'Artificial Intelligence for project planning',
          'Augmented Reality for design visualization',
          'Cloud-based collaboration platforms'
        ],
        benefits: [
          '30% reduction in design errors',
          '20% faster project completion',
          '15% cost savings through optimization',
          'Improved stakeholder collaboration'
        ]
      }
    },
    {
      id: 'trend2',
      icon: Leaf,
      title: 'Sustainable Construction',
      value: '+42%',
      description: 'LEED and BREEAM certifications driving green practices',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop',
      details: {
        description: 'Sustainable construction practices are becoming standard, driven by environmental regulations and market demand for green buildings.',
        practices: [
          'Energy-efficient building designs',
          'Water conservation systems',
          'Sustainable material sourcing',
          'Waste reduction and recycling',
          'Carbon footprint monitoring'
        ],
        benefits: [
          '40% energy consumption reduction',
          '30% water usage savings',
          'Higher property values',
          'Improved occupant health'
        ]
      }
    },
    {
      id: 'trend3',
      icon: Factory,
      title: 'Prefabrication',
      value: '+28%',
      description: 'Off-site manufacturing reducing timelines and costs',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      details: {
        description: 'Modular and prefabricated construction methods are gaining popularity for their efficiency, quality control, and cost-effectiveness.',
        methods: [
          'Volumetric modular construction',
          'Panelized systems',
          'Prefabricated bathroom units',
          'Modular mechanical systems',
          'Factory-built components'
        ],
        benefits: [
          '50% faster project completion',
          '90% less construction waste',
          'Consistent quality control',
          'Weather-independent manufacturing'
        ]
      }
    },
    {
      id: 'trend4',
      icon: Zap,
      title: 'Smart Buildings',
      value: '+55%',
      description: 'IoT integration creating intelligent, efficient structures',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      details: {
        description: 'Smart building technologies are transforming how buildings operate, providing enhanced efficiency, comfort, and maintenance capabilities.',
        technologies: [
          'Building Management Systems (BMS)',
          'IoT sensors for environmental monitoring',
          'Smart lighting and HVAC controls',
          'Predictive maintenance systems',
          'Occupancy and space utilization tracking'
        ],
        benefits: [
          '25% energy cost reduction',
          '30% lower maintenance costs',
          'Enhanced occupant comfort',
          'Real-time performance monitoring'
        ]
      }
    }
  ];

  // Upcoming Projects Data
  const upcomingProjects = [
    {
      id: 'project1',
      name: 'The Line - NEOM',
      location: 'Saudi Arabia',
      value: '$500B',
      timeline: '2024-2030',
      type: 'Smart City',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      description: 'A 170-kilometer-long linear smart city that will have no cars, no streets, and will run on 100% renewable energy.',
      features: [
        'Zero-carbon city',
        'AI-powered infrastructure',
        'High-speed transportation',
        'Sustainable water systems'
      ]
    },
    {
      id: 'project2',
      name: 'California High-Speed Rail',
      location: 'USA',
      value: '$128B',
      timeline: '2024-2033',
      type: 'Transportation',
      image: 'https://images.unsplash.com/photo-1471289549423-04adaecfa1b6?w=600&h=400&fit=crop',
      description: 'The nations first high-speed rail system connecting San Francisco to Los Angeles in under 3 hours.',
      features: [
        '220 mph operating speed',
        'Electric-powered trains',
        'Reduced carbon emissions',
        'Economic development catalyst'
      ]
    },
    {
      id: 'project3',
      name: 'Bangalore-Mumbai Industrial Corridor',
      location: 'India',
      value: '$100B',
      timeline: '2024-2035',
      type: 'Industrial',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      description: 'A major infrastructure project creating industrial zones and improving connectivity between two economic hubs.',
      features: [
        '24 smart cities',
        'Industrial manufacturing zones',
        'Logistics infrastructure',
        'Renewable energy integration'
      ]
    }
  ];

  // Regulatory Updates Data
  const regulatoryUpdates = [
    {
      id: 'regulation1',
      title: 'New Building Safety Act 2024',
      jurisdiction: 'International',
      effectiveDate: '2024-06-01',
      impact: 'High',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
      summary: 'Enhanced safety requirements for high-rise buildings and construction sites',
      details: {
        description: 'The new Building Safety Act introduces stricter regulations for construction safety, particularly for high-rise residential buildings and complex construction projects.',
        keyChanges: [
          'Mandatory safety case reports for high-risk buildings',
          'Enhanced fire safety requirements',
          'Stricter material certification processes',
          'Digital safety management systems requirement',
          'Increased accountability for project managers'
        ],
        compliance: [
          'Implementation deadline: June 2024',
          'Required training for safety managers',
          'Digital documentation systems',
          'Third-party certification for materials'
        ]
      }
    },
    {
      id: 'regulation2',
      title: 'Carbon Emission Standards',
      jurisdiction: 'European Union',
      effectiveDate: '2024-09-01',
      impact: 'Medium',
      image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&h=400&fit=crop',
      summary: 'New carbon footprint requirements for construction materials and processes',
      details: {
        description: 'Updated carbon emission standards mandate reduced carbon footprint in construction materials and require lifecycle assessment for major projects.',
        keyChanges: [
          'Carbon intensity limits for cement and steel',
          'Lifecycle assessment requirements',
          'Embodied carbon reporting',
          'Sustainable material incentives',
          'Carbon offset requirements for large projects'
        ],
        compliance: [
          'Gradual implementation through 2025',
          'Carbon accounting training required',
          'Material certification updates',
          'Reporting software integration'
        ]
      }
    }
  ];

  // Industry Events Data
  const industryEvents = [
    {
      id: 'event1',
      name: 'World Construction Summit 2024',
      date: '2024-03-15',
      location: 'Berlin, Germany',
      type: 'Conference',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      description: 'Global gathering of construction industry leaders, innovators, and policymakers to discuss future trends and challenges.',
      highlights: [
        'Keynote speeches from industry leaders',
        'Technology innovation showcase',
        'Networking with 5000+ professionals',
        'Sustainable construction workshops'
      ]
    },
    {
      id: 'event2',
      name: 'International Building Expo',
      date: '2024-05-20',
      location: 'Dubai, UAE',
      type: 'Exhibition',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      description: 'Largest building materials and construction technology exhibition in the Middle East.',
      highlights: [
        '1000+ exhibitors from 50 countries',
        'New product launches',
        'Live construction demonstrations',
        'Business matchmaking sessions'
      ]
    }
  ];

  // Modal Components
  const NewsModal = ({ data, onClose }) => (
    <Modal onClose={onClose}>
      <div className="relative">
        <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-t-xl" />
        <div className="absolute top-4 left-4 bg-[#F4B942] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          {data.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(data.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{data.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4" />
            <span>{data.author}</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{data.fullContent.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Key Developments:</h4>
            <ul className="space-y-2">
              {data.fullContent.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Market Statistics:</h4>
            <ul className="space-y-2">
              {data.fullContent.statistics.map((stat, index) => (
                <li key={index} className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#F4B942]" />
                  <span className="text-gray-700">{stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );

  const TrendModal = ({ data, onClose }) => (
    <Modal onClose={onClose}>
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <data.icon className="w-8 h-8 text-[#F4B942]" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{data.title}</h3>
            <div className="text-2xl font-bold text-[#F4B942]">{data.value}</div>
          </div>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">{data.details.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Key Technologies:</h4>
            <ul className="space-y-2">
              {data.details.technologies.map((tech, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Business Benefits:</h4>
            <ul className="space-y-2">
              {data.details.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );

  const ProjectModal = ({ data, onClose }) => (
    <Modal onClose={onClose}>
      <div className="relative">
        <img src={data.image} alt={data.name} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Mega Project
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.name}</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{data.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{data.value}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{data.timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{data.type}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>
        
        <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {data.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Star className="w-4 h-4 text-[#F4B942]" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );

  const RegulationModal = ({ data, onClose }) => (
    <Modal onClose={onClose}>
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{data.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            data.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {data.impact} Impact
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{data.jurisdiction}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">Effective: {new Date(data.effectiveDate).toLocaleDateString()}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{data.details.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Key Changes:</h4>
            <ul className="space-y-2">
              {data.details.keyChanges.map((change, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{change}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Compliance Requirements:</h4>
            <ul className="space-y-2">
              {data.details.compliance.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );

  // Base Modal Component
  const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 animate-in fade-in-0 zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container max-w-7xl mx-auto px-8 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-[#F4B942] text-gray-900 px-6 py-3 rounded-full text-lg font-semibold mb-8">
              <BarChart3 className="w-6 h-6" />
              Industry Intelligence
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Construction Industry Updates
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Stay informed with the latest market trends, regulatory changes, and major projects shaping the global construction industry.
            </p>
            <button 
              onClick={() => document.getElementById('latest-news').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F4B942] text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a932] transition-colors flex items-center gap-2 mx-auto"
            >
              Explore Updates <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <Newspaper className="w-5 h-5" />
              Breaking News
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Latest Industry News
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the most recent developments and breakthroughs in construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news) => (
              <div
                key={news.id}
                onClick={() => openModal(news.id, news)}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group border border-gray-200"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {news.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(news.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{news.preview}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{news.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Newspaper className="w-4 h-4" />
                        <span>{news.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#F4B942] font-semibold text-sm">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-5 h-5" />
              Market Analysis
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Emerging Market Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key developments and growth areas shaping the future of construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketTrends.map((trend) => (
              <div
                key={trend.id}
                onClick={() => openModal(trend.id, trend)}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 cursor-pointer group"
              >
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={trend.image} 
                    alt={trend.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#F4B942] rounded-lg w-10 h-10 flex items-center justify-center">
                    <trend.icon className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{trend.title}</h3>
                    <div className="text-2xl font-bold text-[#F4B942]">{trend.value}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{trend.description}</p>
                <div className="flex items-center gap-2 text-[#F4B942] font-semibold text-sm">
                  <span>Explore Trend</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <Target className="w-5 h-5" />
              Major Projects
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Mega Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              World's largest construction initiatives currently in planning or early stages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project.id, project)}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group border border-gray-200"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span>{project.value}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
                    <span>Project Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-red-100 text-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-5 h-5" />
              Compliance
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Regulatory Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest regulations and compliance requirements affecting the construction industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regulatoryUpdates.map((regulation) => (
              <div
                key={regulation.id}
                onClick={() => openModal(regulation.id, regulation)}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group border border-gray-200"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={regulation.image} 
                    alt={regulation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{regulation.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      regulation.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {regulation.impact}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>{regulation.jurisdiction}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Effective {new Date(regulation.effectiveDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{regulation.summary}</p>
                  <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                    <span>View Requirements</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Events Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-indigo-100 text-indigo-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="w-5 h-5" />
              Events & Conferences
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Industry Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Major conferences, exhibitions, and networking opportunities in the construction sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group border border-gray-200"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key metrics and data points driving construction industry decisions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F4B942] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-gray-900" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$15.2T</div>
              <div className="text-gray-600">2030 Market Projection</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.2%</div>
              <div className="text-gray-600">Annual Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1.5M</div>
              <div className="text-gray-600">Worker Shortage</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">42%</div>
              <div className="text-gray-600">Green Projects Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container max-w-7xl mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Subscribe to our newsletter and never miss important construction industry updates, 
              regulatory changes, or market opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#F4B942] text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a932] transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Industry Report
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Subscribe to Updates
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-[#F4B942] mb-2">500+</div>
                <div className="text-gray-300">Industry Reports</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F4B942] mb-2">50+</div>
                <div className="text-gray-300">Countries Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F4B942] mb-2">10K+</div>
                <div className="text-gray-300">Subscribers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {activeModal && modalData && (
        <>
          {latestNews.find(n => n.id === activeModal) && (
            <NewsModal data={modalData} onClose={closeModal} />
          )}
          {marketTrends.find(t => t.id === activeModal) && (
            <TrendModal data={modalData} onClose={closeModal} />
          )}
          {upcomingProjects.find(p => p.id === activeModal) && (
            <ProjectModal data={modalData} onClose={closeModal} />
          )}
          {regulatoryUpdates.find(r => r.id === activeModal) && (
            <RegulationModal data={modalData} onClose={closeModal} />
          )}
        </>
      )}
    </div>
  );
};

export default IndustryUpdates;