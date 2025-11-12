import React, { useState } from 'react';
import { 
  HardHat, 
  Shield, 
  Hammer, 
  Ruler, 
  Home, 
  Zap, 
  Download, 
  Phone,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  FileText,
  BookOpen,
  Calendar,
  X,
  Wrench,
  Building,
  Leaf,
  Cpu,
  Eye,
  AlertTriangle,
  ThumbsUp,
  MessageCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';

const ConstructionTips = () => {
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

  // Safety Tips Data
  const safetyTips = [
    {
      id: 'safety1',
      icon: HardHat,
      title: 'Proper Protective Gear',
      preview: 'Essential PPE for construction sites including helmets, gloves, and safety glasses',
      image: 'https://media.smallbiztrends.com/2022/01/how-to-start-a-construction-company.png',
      description: 'Personal Protective Equipment (PPE) is your first line of defense against construction hazards.',
      checklist: [
        'ANSI-approved hard hats',
        'Safety glasses with side shields',
        'Steel-toed boots',
        'High-visibility vests',
        'Hearing protection',
        'Respirators when needed'
      ]
    },
    {
      id: 'safety2',
      icon: Shield,
      title: 'Scaffolding Safety',
      preview: 'Proper setup, inspection, and use of scaffolding systems',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      description: 'Scaffolding requires careful assembly and regular inspections to prevent accidents.',
      checklist: [
        'Inspect before each use',
        'Ensure stable foundation',
        'Install guardrails',
        'Use proper access ladders',
        'Never exceed load capacity'
      ]
    },
    {
      id: 'safety3',
      icon: AlertTriangle,
      title: 'Electrical Safety',
      preview: 'Preventing electrical hazards on construction sites',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
      description: 'Electrical safety protocols protect workers from shocks, burns, and electrocution.',
      checklist: [
        'Locate underground utilities',
        'Use GFCI protection',
        'Maintain safe distances from power lines',
        'Inspect cords and tools',
        'Lockout/tagout procedures'
      ]
    },
    {
      id: 'safety4',
      icon: Users,
      title: 'Team Communication',
      preview: 'Effective communication and coordination among crew members',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop',
      description: 'Clear communication prevents misunderstandings and enhances site safety.',
      checklist: [
        'Daily safety meetings',
        'Hand signals for equipment',
        'Radio communication',
        'Site-specific protocols',
        'Emergency procedures'
      ]
    }
  ];

  // Material Selection Data
  const materialTips = [
    {
      id: 'material1',
      title: 'Structural Steel',
      preview: 'High-strength material for frames and supports',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      description: 'Steel offers excellent strength-to-weight ratio and durability for structural applications.',
      pros: ['High strength', 'Durable', 'Recyclable', 'Fast construction'],
      cons: ['Corrosion risk', 'Fire protection needed', 'Higher cost']
    },
    {
      id: 'material2',
      title: 'Reinforced Concrete',
      preview: 'Versatile material for foundations and structures',
      image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&h=400&fit=crop',
      description: 'Concrete provides excellent compressive strength and fire resistance.',
      pros: ['Fire resistant', 'Durable', 'Low maintenance', 'Versatile forms'],
      cons: ['Cracking potential', 'Heavy weight', 'Curing time required']
    },
    {
      id: 'material3',
      title: 'Engineered Wood',
      preview: 'Sustainable alternative for framing and finishes',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      description: 'Modern wood products offer strength and sustainability benefits.',
      pros: ['Renewable resource', 'Lightweight', 'Good insulation', 'Cost-effective'],
      cons: ['Moisture sensitive', 'Insect vulnerability', 'Fire risk']
    },
    {
      id: 'material4',
      title: 'Eco-Friendly Materials',
      preview: 'Sustainable and recycled building options',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop',
      description: 'Green building materials reduce environmental impact and improve efficiency.',
      pros: ['Sustainable', 'Energy efficient', 'Healthy indoor air', 'Tax incentives'],
      cons: ['Higher upfront cost', 'Limited availability', 'Specialized installation']
    }
  ];

  // Planning Steps Data
  const planningSteps = [
    {
      id: 'plan1',
      step: '1',
      title: 'Site Analysis',
      preview: 'Evaluate soil, topography, and environmental factors',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      description: 'Thorough site analysis identifies potential challenges and opportunities.',
      details: [
        'Soil testing and geotechnical reports',
        'Topographical surveys',
        'Environmental impact assessment',
        'Utility location and access points'
      ]
    },
    {
      id: 'plan2',
      step: '2',
      title: 'Budget Planning',
      preview: 'Cost estimation and financial allocation',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
      description: 'Accurate budgeting ensures project feasibility and financial control.',
      details: [
        'Material cost estimation',
        'Labor and equipment costs',
        'Permit and inspection fees',
        'Contingency allocation (10-15%)'
      ]
    },
    {
      id: 'plan3',
      step: '3',
      title: 'Design Development',
      preview: 'Architectural and engineering planning',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'Detailed design development transforms concepts into buildable plans.',
      details: [
        'Architectural drawings',
        'Structural engineering',
        'MEP system design',
        'Building code compliance'
      ]
    },
    {
      id: 'plan4',
      step: '4',
      title: 'Timeline Creation',
      preview: 'Scheduling and milestone planning',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      description: 'Realistic scheduling coordinates all project phases efficiently.',
      details: [
        'Critical path method',
        'Resource allocation',
        'Milestone identification',
        'Buffer time inclusion'
      ]
    },
    {
      id: 'plan5',
      step: '5',
      title: 'Permit Acquisition',
      preview: 'Legal approvals and regulatory compliance',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
      description: 'Proper permitting ensures legal compliance and project authorization.',
      details: [
        'Building permit applications',
        'Zoning approvals',
        'Environmental permits',
        'Utility connection approvals'
      ]
    }
  ];

  // Modern Techniques Data
  const modernTechniques = [
    {
      id: 'tech1',
      icon: Cpu,
      title: '3D Printing',
      preview: 'Additive manufacturing for construction components',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      description: '3D printing revolutionizes construction with automated, precise component fabrication.',
      benefits: ['Reduced waste', 'Complex geometries', 'Faster production', 'Labor savings'],
      video: 'https://www.youtube.com/embed/construction-3d-printing'
    },
    {
      id: 'tech2',
      icon: Building,
      title: 'Modular Construction',
      preview: 'Factory-built modules assembled on-site',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop',
      description: 'Modular construction offers quality control and weather-independent manufacturing.',
      benefits: ['Quality control', 'Weather independent', 'Time efficiency', 'Cost predictable'],
      video: 'https://www.youtube.com/embed/modular-construction'
    },
    {
      id: 'tech3',
      icon: Leaf,
      title: 'Green Roofing',
      preview: 'Living vegetation layers for sustainable buildings',
      image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&h=400&fit=crop',
      description: 'Green roofs provide environmental benefits and improve building performance.',
      benefits: ['Stormwater management', 'Energy savings', 'Biodiversity', 'Aesthetic appeal'],
      video: 'https://www.youtube.com/embed/green-roofing'
    }
  ];

  // Modal Components
  const SafetyModal = ({ data, onClose }) => (
    <Modal onClose={onClose}>
      <div className="relative">
        <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-t-xl" />
        <div className="absolute top-4 left-4 bg-[#F4B942] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          Safety Protocol
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <data.icon className="w-8 h-8 text-[#F4B942]" />
          <h3 className="text-2xl font-bold text-gray-900">{data.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{data.description}</p>
        
        <h4 className="font-bold text-gray-900 mb-3">Safety Checklist:</h4>
        <ul className="space-y-2 mb-6">
          {data.checklist.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );

  const MaterialModal = ({ data, onClose }) => (
    <Modal onClose={onClose}>
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h3>
        <p className="text-gray-600 mb-6">{data.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-green-600 mb-3">Advantages</h4>
            <ul className="space-y-2">
              {data.pros.map((pro, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-red-600 mb-3">Considerations</h4>
            <ul className="space-y-2">
              {data.cons.map((con, index) => (
                <li key={index} className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-gray-700">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );

  const PlanningModal = ({ data, onClose }) => (
    <Modal onClose={onClose}>
      <div className="relative">
        <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="absolute top-4 left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
          {data.step}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h3>
        <p className="text-gray-600 mb-6">{data.description}</p>
        
        <h4 className="font-bold text-gray-900 mb-3">Key Activities:</h4>
        <ul className="space-y-3">
          {data.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );

  const TechniqueModal = ({ data, onClose }) => (
    <Modal onClose={onClose}>
      <div className="relative">
        <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Innovation
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <data.icon className="w-8 h-8 text-purple-600" />
          <h3 className="text-2xl font-bold text-gray-900">{data.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{data.description}</p>
        
        <h4 className="font-bold text-gray-900 mb-3">Key Benefits:</h4>
        <div className="grid gap-3 mb-6">
          {data.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 bg-purple-50 rounded-lg p-3">
              <Zap className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
            <Play className="w-5 h-5" />
            <span className="font-semibold">Video Demonstration Available</span>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Watch Demo
          </button>
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
            backgroundImage: `url(https://media.smallbiztrends.com/2022/01/how-to-start-a-construction-company.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container max-w-7xl mx-auto px-8 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-[#F4B942] text-gray-900 px-6 py-3 rounded-full text-lg font-semibold mb-8">
              <Hammer className="w-6 h-6" />
              Professional Guidance
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Construction Tips & Insights
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Master the art of construction with professional advice, safety protocols, 
              material selection guides, and modern building techniques from industry experts.
            </p>
            <button 
              onClick={() => document.getElementById('safety-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F4B942] text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-[#e6a932] transition-colors flex items-center gap-2 mx-auto"
            >
              Start Learning <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section id="safety-section" className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-red-100 text-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-5 h-5" />
              Priority #1
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Safety First, Always
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential safety protocols to protect your team and ensure compliance with industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((tip) => (
              <div
                key={tip.id}
                onClick={() => openModal(tip.id, tip)}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 cursor-pointer group"
              >
                <div className="bg-[#F4B942] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <tip.icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{tip.preview}</p>
                <div className="flex items-center gap-2 text-[#F4B942] font-semibold text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Selection Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Material Selection Guide
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Choosing the right materials is key to building structures that are strong, durable, and cost-effective.
              </p>
              <p className="text-gray-600">
                Each material has unique properties that make it suitable for specific applications. 
                Understanding these characteristics helps in making informed decisions for your project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materialTips.map((material) => (
                <div
                  key={material.id}
                  onClick={() => openModal(material.id, material)}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all cursor-pointer group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{material.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{material.preview}</p>
                  <div className="flex items-center gap-2 text-[#F4B942] font-semibold text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design & Planning Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Design & Planning
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master the planning phase to ensure project success from concept to completion
            </p>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory">
            {planningSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => openModal(step.id, step)}
                className="bg-gray-50 rounded-xl p-6 min-w-[300px] snap-start hover:shadow-lg transition-all cursor-pointer group flex-shrink-0"
              >
                <div className="bg-[#F4B942] text-gray-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{step.preview}</p>
                <div className="flex items-center gap-2 text-[#F4B942] font-semibold text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Techniques Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-5 h-5" />
              Innovation
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Modern Construction Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore cutting-edge technologies revolutionizing the construction industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modernTechniques.map((tech) => (
              <div
                key={tech.id}
                onClick={() => openModal(tech.id, tech)}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <tech.icon className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{tech.preview}</p>
                  <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
                    <span>Explore Technology</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {activeModal && modalData && (
        <>
          {safetyTips.find(t => t.id === activeModal) && (
            <SafetyModal data={modalData} onClose={closeModal} />
          )}
          {materialTips.find(m => m.id === activeModal) && (
            <MaterialModal data={modalData} onClose={closeModal} />
          )}
          {planningSteps.find(p => p.id === activeModal) && (
            <PlanningModal data={modalData} onClose={closeModal} />
          )}
          {modernTechniques.find(t => t.id === activeModal) && (
            <TechniqueModal data={modalData} onClose={closeModal} />
          )}
        </>
      )}
    </div>
  );
};

export default ConstructionTips;