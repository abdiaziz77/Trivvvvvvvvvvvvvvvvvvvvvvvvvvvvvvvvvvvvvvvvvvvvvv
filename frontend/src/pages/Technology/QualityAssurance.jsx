import { useState } from 'react';
import { 
  CheckCircle, 
  Shield, 
  Target, 
  Award, 
  Users, 
  Clock,
  BarChart3,
  FileCheck,
  Search,
  Zap,
  Star,
  TrendingUp,
  ArrowRight,
  Play,
  Building,
  Eye,
  Settings,
  TestTube,
  ExternalLink
} from 'lucide-react';

const QualityAssurance = () => {
  const [activeProcess, setActiveProcess] = useState('planning');

  // Updated Image URLs with construction-specific images
  const imageLinks = {
    qualityHero: {
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/quality/overview",
      alt: "Construction Quality Inspection"
    },
    planning: {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/processes/planning",
      alt: "Construction Planning Meeting"
    },
    materials: {
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/materials/quality",
      alt: "Construction Materials Testing"
    },
    inspection: {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/inspections/process",
      alt: "Construction Site Inspection"
    },
    testing: {
      url: "https://images.unsplash.com/photo-1581094794281-1fddb0b06bea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/testing/laboratory",
      alt: "Construction Quality Testing"
    },
    certification: {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/certifications/quality",
      alt: "Quality Certification in Construction"
    }
  };

  const qualityProcesses = [
    {
      id: 'planning',
      title: 'Quality Planning',
      icon: Target,
      description: 'Comprehensive quality planning from project inception to ensure standards are met at every stage.',
      features: [
        'Quality Management Plans',
        'Risk Assessment & Mitigation',
        'Quality Objectives Setting',
        'Stakeholder Alignment'
      ],
      benefits: [
        'Proactive Issue Prevention',
        'Clear Quality Benchmarks',
        'Reduced Rework Costs',
        'Enhanced Project Predictability'
      ],
      imageLink: imageLinks.planning
    },
    {
      id: 'materials',
      title: 'Material Quality Control',
      icon: Shield,
      description: 'Rigorous testing and verification of all construction materials before they reach the site.',
      features: [
        'Supplier Quality Audits',
        'Material Testing & Certification',
        'Batch Quality Verification',
        'Traceability Systems'
      ],
      benefits: [
        '100% Material Compliance',
        'Zero Defect Materials',
        'Extended Structure Lifespan',
        'Reduced Maintenance Costs'
      ],
      imageLink: imageLinks.materials
    },
    {
      id: 'inspection',
      title: 'Site Inspections',
      icon: Eye,
      description: 'Continuous on-site inspections and monitoring to maintain quality standards throughout construction.',
      features: [
        'Daily Quality Walkthroughs',
        'Third-Party Inspections',
        'Digital Inspection Reports',
        'Real-time Issue Tracking'
      ],
      benefits: [
        'Immediate Issue Resolution',
        '99.8% Compliance Rate',
        'Enhanced Safety Standards',
        'Client Confidence Building'
      ],
      imageLink: imageLinks.inspection
    },
    {
      id: 'testing',
      title: 'Testing & Validation',
      icon: TestTube,
      description: 'Advanced testing methodologies to validate structural integrity and performance standards.',
      features: [
        'Non-Destructive Testing',
        'Structural Load Testing',
        'Environmental Testing',
        'Performance Validation'
      ],
      benefits: [
        'Verified Structural Integrity',
        'Performance Guarantees',
        'Long-term Reliability',
        'Code Compliance Assurance'
      ],
      imageLink: imageLinks.testing
    }
  ];

  const qualityStats = [
    { number: '99.8%', label: 'Quality Compliance Rate', icon: CheckCircle, link: '/metrics/compliance' },
    { number: '0.2%', label: 'Rework Rate', icon: TrendingUp, link: '/metrics/rework' },
    { number: '100%', label: 'Client Satisfaction', icon: Star, link: '/metrics/satisfaction' },
    { number: '50+', label: 'Quality Certifications', icon: Award, link: '/certifications' }
  ];

  const qualityStandards = [
    {
      name: 'ISO 9001:2015',
      icon: FileCheck,
      description: 'International Quality Management System Certification',
      projects: 'All Projects Certified',
      link: '/standards/iso9001'
    },
    {
      name: 'Six Sigma',
      icon: BarChart3,
      description: 'Data-driven approach to eliminate defects and improve processes',
      projects: '98% Process Efficiency',
      link: '/standards/six-sigma'
    },
    {
      name: 'Lean Construction',
      icon: Zap,
      description: 'Maximizing value while minimizing waste in construction processes',
      projects: '30% Waste Reduction',
      link: '/standards/lean'
    },
    {
      name: 'Total Quality Management',
      icon: Users,
      description: 'Organization-wide approach to continuous quality improvement',
      projects: 'Continuous Improvement',
      link: '/standards/tqm'
    }
  ];

  const qualityFeatures = [
    {
      icon: Shield,
      title: 'Zero Tolerance Policy',
      description: 'Strict adherence to quality standards with no compromises on safety or durability.',
      link: '/policies/zero-tolerance'
    },
    {
      icon: Search,
      title: 'Third-Party Audits',
      description: 'Regular independent audits to validate our quality processes and outcomes.',
      link: '/audits/third-party'
    },
    {
      icon: Settings,
      title: 'Continuous Improvement',
      description: 'Ongoing process optimization based on performance data and feedback.',
      link: '/improvement/continuous'
    },
    {
      icon: Building,
      title: 'Lifecycle Quality',
      description: 'Quality assurance that extends throughout the entire building lifecycle.',
      link: '/quality/lifecycle'
    }
  ];

  const caseStudies = [
    {
      project: 'Premium Office Tower',
      location: 'Business District',
      challenges: [
        'Complex structural requirements',
        'Tight quality tolerances',
        'Multiple subcontractor coordination'
      ],
      solutions: [
        'Implemented advanced QA software',
        'Daily quality coordination meetings',
        'Real-time defect tracking system'
      ],
      results: {
        compliance: '99.9% Quality Rate',
        timeline: 'Completed 2 Weeks Early',
        budget: '5% Under Budget',
        satisfaction: 'Exceptional Client Feedback'
      },
      link: '/case-studies/office-tower',
      image: imageLinks.inspection
    },
    {
      project: 'Healthcare Facility',
      location: 'Medical Complex',
      challenges: [
        'Stringent health and safety standards',
        'Specialized material requirements',
        'Regulatory compliance demands'
      ],
      solutions: [
        'Enhanced material testing protocols',
        'Dedicated quality control team',
        'Comprehensive documentation system'
      ],
      results: {
        compliance: '100% Regulatory Approval',
        timeline: 'On Schedule Delivery',
        budget: '3% Cost Savings',
        satisfaction: 'Perfect Safety Record'
      },
      link: '/case-studies/healthcare',
      image: imageLinks.testing
    }
  ];

  const currentProcess = qualityProcesses.find(process => process.id === activeProcess);

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 to-yellow-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <a 
          href={imageLinks.qualityHero.link}
          onClick={(e) => {
            e.preventDefault();
            handleImageClick(imageLinks.qualityHero.link);
          }}
          className="absolute inset-0 bg-cover bg-center z-0 cursor-pointer block"
          style={{ backgroundImage: `url(${imageLinks.qualityHero.url})` }}
        ></a>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F4B942]/20 backdrop-blur-sm border border-[#F4B942]/30 rounded-full px-6 py-3 mb-6">
              <Shield className="w-5 h-5 text-[#F4B942]" />
              <span className="text-[#F4B942] font-semibold text-sm uppercase tracking-wide">
                Quality Excellence
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Uncompromising
              <span className="block text-[#F4B942]">Quality Assurance</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Delivering construction excellence through rigorous quality standards, 
              comprehensive testing, and unwavering commitment to client satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Our Quality Process
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                Download Quality Standards
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Stats */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quality by Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Demonstrated excellence through measurable quality performance metrics.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStats.map((stat, index) => (
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

      {/* Quality Processes */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Quality Assurance Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive quality management throughout every phase of construction.
            </p>
          </div>

          {/* Process Tabs */}
          <div className="max-w-6xl mx-auto">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {qualityProcesses.map((process) => (
                <button
                  key={process.id}
                  onClick={() => setActiveProcess(process.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeProcess === process.id
                      ? 'bg-[#F4B942] text-gray-900 shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <process.icon className="w-5 h-5" />
                  {process.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {currentProcess && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{currentProcess.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{currentProcess.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Key Procedures</h4>
                    <div className="space-y-3">
                      {currentProcess.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#F4B942] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Quality Outcomes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentProcess.benefits.map((benefit, index) => (
                        <div key={index} className="bg-[#F4B942]/10 p-4 rounded-lg border border-[#F4B942]/20">
                          <div className="text-sm text-gray-700">{benefit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={currentProcess.imageLink.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(currentProcess.imageLink.link);
                  }}
                  className="relative cursor-pointer group block"
                >
                  <img
                    src={currentProcess.imageLink.url}
                    alt={currentProcess.imageLink.alt}
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

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Standards & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Adherence to international quality standards and industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <a
                key={index}
                href={standard.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(standard.link);
                }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer block"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4B942]/10 flex items-center justify-center mb-6 group-hover:bg-[#F4B942]/20 transition-colors mx-auto">
                  <standard.icon className="w-8 h-8 text-[#F4B942]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F4B942] transition-colors">
                  {standard.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{standard.description}</p>
                <div className="text-[#F4B942] font-semibold text-sm group-hover:text-[#F4B942]/80 transition-colors">
                  {standard.projects}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Quality Commitment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fundamental principles that guide our unwavering commitment to quality excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(feature.link);
                }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer block"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4B942]/10 flex items-center justify-center mb-6 group-hover:bg-[#F4B942]/20 transition-colors mx-auto">
                  <feature.icon className="w-8 h-8 text-[#F4B942]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F4B942] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-[#F4B942]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real projects demonstrating our commitment to quality excellence and client satisfaction.
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
                    <span className="text-[#F4B942] font-semibold">Quality Excellence</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#F4B942] transition-colors">
                    {study.project}
                  </h3>
                  <p className="text-gray-600 mb-6">{study.location}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quality Challenges</h4>
                      <ul className="space-y-1">
                        {study.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#F4B942] rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quality Solutions</h4>
                      <ul className="space-y-1">
                        {study.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#F4B942] flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#F4B942]/10 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F4B942]">{study.results.compliance}</div>
                      <div className="text-xs text-gray-600">Quality Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F4B942]">{study.results.timeline}</div>
                      <div className="text-xs text-gray-600">Schedule</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F4B942]">{study.results.budget}</div>
                      <div className="text-xs text-gray-600">Budget</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F4B942]">{study.results.satisfaction}</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Build with Confidence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with JengaNow for construction projects backed by uncompromising quality standards 
            and proven excellence in delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F4B942] hover:bg-[#F4B942]/90 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Quality Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Quality Manual
            </button>
          </div>
        </div>
      </section>

      {/* Quality Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance Partners</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading quality certification bodies and testing laboratories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              { name: 'ISO Certified', link: '/partners/iso' },
              { name: 'UL Solutions', link: '/partners/ul' },
              { name: 'Bureau Veritas', link: '/partners/bureau-veritas' },
              { name: 'DNV GL', link: '/partners/dnv' },
              { name: 'SGS', link: '/partners/sgs' },
              { name: 'Intertek', link: '/partners/intertek' }
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

export default QualityAssurance;