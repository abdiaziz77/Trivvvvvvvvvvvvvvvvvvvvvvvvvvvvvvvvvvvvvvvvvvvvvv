import { useState } from 'react';
import { 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  Play,
  ArrowRight,
  Building,
  Users,
  Target,
  BarChart3,
  Smartphone,
  Cloud,
  Wifi,
  Camera,
  Clock,
  DollarSign,
  Leaf
} from 'lucide-react';

// Import your images - update these paths according to your project structure
import smartConstructionHero from '/src/assets/images/smart-construction.png';
import bimModeling from '../../assets/images/bim-modeling.png';
import droneSurvey from '../../assets/images/drone-survey.png';
import iotConstruction from '../../assets/images/iot-construction.png';
import arVisualization from '../../assets/images/ar-visualization.png';
import projectDashboard from '../../assets/images/project-dashboard.png';

const SmartConstruction = () => {
  const [activeTab, setActiveTab] = useState('bim');

  const technologies = [
    {
      id: 'bim',
      title: 'BIM Modeling',
      icon: Building,
      description: 'Building Information Modeling for comprehensive project visualization and coordination.',
      features: [
        '3D Modeling & Visualization',
        'Clash Detection & Resolution',
        'Quantity Takeoff Automation',
        '4D/5D Scheduling & Costing'
      ],
      benefits: [
        '30% Reduction in Rework',
        '20% Faster Project Delivery',
        '15% Cost Savings',
        'Enhanced Collaboration'
      ]
    },
    {
      id: 'iot',
      title: 'IoT & Sensors',
      icon: Wifi,
      description: 'Real-time monitoring of construction sites through advanced sensor networks.',
      features: [
        'Equipment Monitoring',
        'Environmental Sensors',
        'Safety Compliance Tracking',
        'Real-time Progress Updates'
      ],
      benefits: [
        '50% Faster Issue Resolution',
        '24/7 Site Monitoring',
        'Predictive Maintenance',
        'Enhanced Safety'
      ]
    },
    {
      id: 'drones',
      title: 'Drone Technology',
      icon: Camera,
      description: 'Aerial surveying and monitoring for accurate data collection and progress tracking.',
      features: [
        'Aerial Surveying & Mapping',
        'Progress Photography',
        'Volume Calculations',
        'Safety Inspections'
      ],
      benefits: [
        '90% Faster Surveying',
        'High-precision Data',
        'Reduced Safety Risks',
        'Comprehensive Documentation'
      ]
    },
    {
      id: 'ar',
      title: 'AR & VR',
      icon: Smartphone,
      description: 'Augmented and Virtual Reality for immersive project visualization and client presentations.',
      features: [
        'Virtual Site Walkthroughs',
        'Design Visualization',
        'Client Presentations',
        'Training Simulations'
      ],
      benefits: [
        'Better Design Understanding',
        'Early Error Detection',
        'Enhanced Client Engagement',
        'Improved Decision Making'
      ]
    }
  ];

  const smartFeatures = [
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Live tracking of project progress, resource allocation, and site conditions through IoT sensors.'
    },
    {
      icon: Shield,
      title: 'Predictive Analytics',
      description: 'AI-powered insights to anticipate potential issues and optimize construction processes.'
    },
    {
      icon: TrendingUp,
      title: 'Automated Workflows',
      description: 'Streamlined processes through automation, reducing manual errors and improving efficiency.'
    },
    {
      icon: Cloud,
      title: 'Cloud Collaboration',
      description: 'Seamless collaboration between teams, stakeholders, and clients through cloud-based platforms.'
    }
  ];

  const caseStudies = [
    {
      project: 'Skyline Tower Complex',
      challenge: 'Complex coordination between multiple contractors and tight deadlines',
      solution: 'Implemented BIM modeling and real-time collaboration platform',
      results: [
        'Completed 3 weeks ahead of schedule',
        '15% under budget',
        'Zero major rework incidents'
      ]
    },
    {
      project: 'Riverfront Mixed-Use',
      challenge: 'Limited site access and complex logistics',
      solution: 'Deployed drone surveying and IoT monitoring systems',
      results: [
        '45% faster progress tracking',
        'Real-time logistics optimization',
        '98% safety compliance rate'
      ]
    }
  ];

  const stats = [
    { number: '40%', label: 'Faster Project Completion', icon: Clock },
    { number: '25%', label: 'Cost Reduction', icon: DollarSign },
    { number: '60%', label: 'Fewer Rework Instances', icon: CheckCircle },
    { number: '95%', label: 'Client Satisfaction', icon: Users }
  ];

  const currentTech = technologies.find(tech => tech.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${smartConstructionHero})` }}
        ></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F4B942]/20 backdrop-blur-sm border border-[#F4B942]/30 rounded-full px-6 py-3 mb-6">
              <Cpu className="w-5 h-5 text-[#F4B942]" />
              <span className="text-[#F4B942] font-semibold text-sm uppercase tracking-wide">
                Smart Construction Solutions
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Building Smarter,
              <span className="block text-[#F4B942]">Building Better</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Harnessing cutting-edge technology to revolutionize construction processes, 
              enhance efficiency, and deliver exceptional results for our clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Explore Technology
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#F4B942] flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Construction Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrating advanced technologies to transform traditional construction into intelligent, data-driven processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smartFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-[#F4B942]/10 flex items-center justify-center mb-6 group-hover:bg-[#F4B942]/20 transition-colors mx-auto">
                  <feature.icon className="w-8 h-8 text-[#F4B942]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the cutting-edge technologies that power our smart construction approach.
            </p>
          </div>

          {/* Technology Tabs */}
          <div className="max-w-6xl mx-auto">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === tech.id
                      ? 'bg-[#F4B942] text-gray-900 shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <tech.icon className="w-5 h-5" />
                  {tech.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {currentTech && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{currentTech.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{currentTech.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Key Features</h4>
                    <div className="space-y-3">
                      {currentTech.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#F4B942] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Benefits</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {currentTech.benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="text-sm text-gray-600">{benefit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={
                      currentTech.id === 'bim' ? bimModeling :
                      currentTech.id === 'iot' ? iotConstruction :
                      currentTech.id === 'drones' ? droneSurvey :
                      arVisualization
                    }
                    alt={currentTech.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how smart construction technology delivers exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.project}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F4B942]/20 text-grey-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Smarter?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our smart construction solutions can transform your next project. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
            <button className="border-2 border-black text-[#F4B942]/90 hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Partners</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry-leading technology providers to deliver the best solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['Autodesk', 'Trimble', 'Procore', 'Oracle', 'Microsoft', 'IBM'].map((partner, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-gray-400 font-semibold text-lg">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartConstruction;