import { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  Target, 
  Award, 
  Clock,
  BarChart3,
  Play,
  Zap,
  Star,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Shield,
  Building,
  Eye,
  Settings,
  TestTube,
  ExternalLink,
  GraduationCap,
  Lightbulb,
  Rocket,
  Brain,
  Video,
  Download,
  Calendar,
  MapPin,
  UserCheck,
  ThumbsUp,
  HardHat,
  Hammer,
  Wrench,
  Construction
} from 'lucide-react';

const TrainingAndDevelopment = () => {
  const [activeProgram, setActiveProgram] = useState('safety');
  const [activeCategory, setActiveCategory] = useState('all');

  // Training Program Images - Updated with construction-specific professional images
  const trainingImages = {
    hero: {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/training/overview",
      alt: "Construction Team Training Session at JengaNow"
    },
    safety: {
      url: "https://images.unsplash.com/photo-1581094794329-8113a8a7f6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/training/safety",
      alt: "Construction Safety Training at JengaNow"
    },
    technical: {
      url: "https://images.unsplash.com/photo-1581094794358-4412b6d2e5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/training/technical",
      alt: "Technical Construction Skills Training"
    },
    leadership: {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/training/leadership",
      alt: "JengaNow Leadership Development Program"
    },
    certification: {
      url: "https://images.unsplash.com/photo-1581094794358-4412b6d2e5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/training/certification",
      alt: "Professional Construction Certification"
    }
  };

  // Training Programs - Updated for construction company
  const trainingPrograms = [
    {
      id: 'safety',
      title: 'Safety & Compliance',
      icon: Shield,
      description: 'Comprehensive safety training programs to ensure zero accidents and full regulatory compliance on JengaNow construction sites.',
      duration: '40-120 Hours',
      level: 'All Levels',
      certification: 'OSHA, First Aid, CPR',
      features: [
        'OSHA 30-Hour Certification',
        'Fall Protection Systems',
        'Emergency Response Training',
        'Hazard Recognition',
        'Equipment Safety Protocols'
      ],
      benefits: [
        'Zero Accident Worksites',
        'Regulatory Compliance',
        'Reduced Insurance Costs',
        'Enhanced Safety Culture'
      ],
      imageLink: trainingImages.safety
    },
    {
      id: 'technical',
      title: 'Technical Construction Skills',
      icon: Wrench,
      description: 'Advanced technical training in construction methods, equipment operation, and specialized trades for JengaNow projects.',
      duration: '80-200 Hours',
      level: 'Intermediate to Advanced',
      certification: 'NCCER, Equipment Operator',
      features: [
        'Advanced Equipment Operation',
        'Blueprint Reading & BIM',
        'Concrete & Formwork Techniques',
        'MEP Systems Installation',
        'Quality Control Methods'
      ],
      benefits: [
        'Increased Productivity',
        'Higher Quality Workmanship',
        'Reduced Rework',
        'Career Advancement'
      ],
      imageLink: trainingImages.technical
    },
    {
      id: 'leadership',
      title: 'Construction Leadership',
      icon: HardHat,
      description: 'Developing the next generation of construction leaders through comprehensive management training at JengaNow.',
      duration: '60-150 Hours',
      level: 'Supervisory to Executive',
      certification: 'Leadership in Construction',
      features: [
        'Project Management',
        'Team Leadership Skills',
        'Conflict Resolution',
        'Budget & Cost Control',
        'Client Relationship Management'
      ],
      benefits: [
        'Stronger Project Teams',
        'Improved Client Satisfaction',
        'Better Risk Management',
        'Succession Planning'
      ],
      imageLink: trainingImages.leadership
    },
    {
      id: 'certification',
      title: 'Professional Certification',
      icon: Award,
      description: 'Industry-recognized certification programs to validate skills and enhance career opportunities at JengaNow.',
      duration: 'Varies by Program',
      level: 'All Levels',
      certification: 'Multiple Industry Certs',
      features: [
        'LEED Accreditation',
        'Project Management (PMP)',
        'Quality Control Certification',
        'Safety Professional (CSP)',
        'Construction Manager (CCM)'
      ],
      benefits: [
        'Industry Recognition',
        'Higher Earning Potential',
        'Career Mobility',
        'Professional Credibility'
      ],
      imageLink: trainingImages.certification
    }
  ];

  // Training Stats - Updated for construction context
  const trainingStats = [
    { number: '2,500+', label: 'Trained Professionals', icon: Users, link: '/metrics/trained' },
    { number: '98%', label: 'Certification Rate', icon: Award, link: '/metrics/certification' },
    { number: '95%', label: 'Satisfaction Score', icon: Star, link: '/metrics/satisfaction' },
    { number: '300+', label: 'Annual Training Sessions', icon: Calendar, link: '/metrics/sessions' }
  ];

  // Upcoming Training Sessions - Construction focused
  const upcomingSessions = [
    {
      title: 'OSHA 30-Hour Safety Training',
      date: '2024-01-15',
      duration: '4 Days',
      location: 'JengaNow Training Center',
      instructor: 'John Safety',
      seats: '12/25 Available',
      level: 'All Levels',
      category: 'safety',
      link: '/sessions/osha-30'
    },
    {
      title: 'Advanced Crane Operation',
      date: '2024-01-20',
      duration: '3 Days',
      location: 'JengaNow Equipment Yard',
      instructor: 'Mike Operator',
      seats: '8/15 Available',
      level: 'Advanced',
      category: 'technical',
      link: '/sessions/crane-advanced'
    },
    {
      title: 'Project Leadership Workshop',
      date: '2024-01-25',
      duration: '2 Days',
      location: 'JengaNow Corporate Office',
      instructor: 'Sarah Manager',
      seats: '15/20 Available',
      level: 'Supervisory',
      category: 'leadership',
      link: '/sessions/leadership-workshop'
    },
    {
      title: 'LEED Green Associate Prep',
      date: '2024-02-01',
      duration: '2 Days',
      location: 'Online',
      instructor: 'Emily Green',
      seats: '20/30 Available',
      level: 'Intermediate',
      category: 'certification',
      link: '/sessions/leed-prep'
    }
  ];

  // Training Categories for Filter
  const categories = [
    { id: 'all', name: 'All Programs', icon: BookOpen },
    { id: 'safety', name: 'Safety', icon: Shield },
    { id: 'technical', name: 'Technical', icon: Wrench },
    { id: 'leadership', name: 'Leadership', icon: HardHat },
    { id: 'certification', name: 'Certification', icon: Award }
  ];

  // Learning Methods - Construction context
  const learningMethods = [
    {
      icon: Video,
      title: 'Virtual Learning',
      description: 'Live online sessions and on-demand courses for flexible learning around construction schedules.',
      features: ['Live Virtual Classes', 'Recorded Sessions', 'Interactive Q&A', 'Mobile Access']
    },
    {
      icon: Users,
      title: 'In-Person Workshops',
      description: 'Hands-on training sessions at our state-of-the-art JengaNow training facilities.',
      features: ['Expert Instructors', 'Hands-on Practice', 'Networking', 'Immediate Feedback']
    },
    {
      icon: Building,
      title: 'On-Site Training',
      description: 'Customized training delivered directly at your JengaNow project sites.',
      features: ['Site-Specific Content', 'Real Project Context', 'Team Training', 'Minimal Disruption']
    },
    {
      icon: Download,
      title: 'Self-Paced Learning',
      description: 'Comprehensive digital resources for learning at your own pace.',
      features: ['24/7 Access', 'Progress Tracking', 'Digital Resources', 'Flexible Scheduling']
    }
  ];

  // Success Stories - Construction professionals
  const successStories = [
    {
      name: 'Mike Rodriguez',
      role: 'Site Supervisor',
      before: 'Crew Member',
      after: 'Promoted to Supervisor',
      training: 'JengaNow Leadership Development Program',
      achievement: 'Reduced project delays by 25% through improved team coordination',
      image: trainingImages.leadership,
      link: '/stories/mike-rodriguez'
    },
    {
      name: 'Sarah Chen',
      role: 'Quality Control Manager',
      before: 'Quality Inspector',
      after: 'QC Manager',
      training: 'Advanced Quality Certification',
      achievement: 'Implemented new inspection protocols reducing rework by 40%',
      image: trainingImages.technical,
      link: '/stories/sarah-chen'
    }
  ];

  // Training Resources - Construction focused
  const trainingResources = [
    {
      title: 'JengaNow Training Catalog 2024',
      description: 'Complete listing of all available training programs and schedules',
      type: 'PDF Catalog',
      size: '2.4 MB',
      icon: Download,
      link: '/resources/catalog'
    },
    {
      title: 'JengaNow Safety Manual',
      description: 'Comprehensive safety procedures and best practices guide',
      type: 'Digital Book',
      size: '5.1 MB',
      icon: BookOpen,
      link: '/resources/safety-manual'
    },
    {
      title: 'Technical Standards',
      description: 'Industry standards and technical specifications library',
      type: 'Digital Library',
      size: '15.2 MB',
      icon: Settings,
      link: '/resources/standards'
    },
    {
      title: 'Leadership Playbook',
      description: 'Essential guides for construction leadership and management',
      type: 'Interactive Guide',
      size: '3.7 MB',
      icon: Users,
      link: '/resources/leadership'
    }
  ];

  const currentProgram = trainingPrograms.find(program => program.id === activeProgram);
  const filteredSessions = activeCategory === 'all' 
    ? upcomingSessions 
    : upcomingSessions.filter(session => session.category === activeCategory);

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-600 to-yellow-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <a 
          href={trainingImages.hero.link}
          onClick={(e) => {
            e.preventDefault();
            handleImageClick(trainingImages.hero.link);
          }}
          className="absolute inset-0 bg-cover bg-center z-0 cursor-pointer block"
          style={{ backgroundImage: `url(${trainingImages.hero.url})` }}
        ></a>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
              <Construction className="w-5 h-5 text-yellow-300" />
              <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">
                JengaNow Professional Development
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Build Your
              <span className="block text-yellow-300">Future With JengaNow</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive construction training and development programs designed to advance careers 
              and elevate construction excellence across the JengaNow organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Explore Programs
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                View Training Calendar
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Stats */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">JengaNow Training Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable results from our commitment to professional development in construction.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingStats.map((stat, index) => (
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
                  <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
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

      {/* Training Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">JengaNow Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized construction programs designed to build skills at every career level.
            </p>
          </div>

          {/* Program Tabs */}
          <div className="max-w-6xl mx-auto">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {trainingPrograms.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setActiveProgram(program.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeProgram === program.id
                      ? 'bg-yellow-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <program.icon className="w-5 h-5" />
                  {program.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {currentProgram && (
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{currentProgram.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{currentProgram.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-sm text-yellow-600 font-semibold">Duration</div>
                      <div className="text-lg font-bold text-gray-900">{currentProgram.duration}</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-sm text-yellow-600 font-semibold">Skill Level</div>
                      <div className="text-lg font-bold text-gray-900">{currentProgram.level}</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg col-span-2">
                      <div className="text-sm text-yellow-600 font-semibold">Certification</div>
                      <div className="text-lg font-bold text-gray-900">{currentProgram.certification}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Program Features</h4>
                    <div className="space-y-3">
                      {currentProgram.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Career Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentProgram.benefits.map((benefit, index) => (
                        <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                          <div className="text-sm text-gray-700 font-medium">{benefit}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule Training
                    </button>
                    <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                      Download Brochure
                    </button>
                  </div>
                </div>

                <a
                  href={currentProgram.imageLink.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(currentProgram.imageLink.link);
                  }}
                  className="relative cursor-pointer group block"
                >
                  <img
                    src={currentProgram.imageLink.url}
                    alt={currentProgram.imageLink.alt}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl group-hover:from-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-yellow-500" />
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Learning Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple delivery methods to accommodate construction schedules and learning styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningMethods.map((method, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors mx-auto">
                  <method.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {method.description}
                </p>
                <div className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4 text-yellow-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming JengaNow Training</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book your spot in our upcoming construction training programs.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Sessions Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredSessions.map((session, index) => (
              <a
                key={index}
                href={session.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(session.link);
                }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors mb-2">
                      {session.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {session.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {session.duration}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    session.level === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                    session.level === 'Supervisory' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {session.level}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {session.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <UserCheck className="w-4 h-4" />
                    Instructor: {session.instructor}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    {session.seats}
                  </div>
                </div>

                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 group-hover:scale-105 transform">
                  Register Now
                </button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">JengaNow Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real career transformations through our construction training programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <a
                key={index}
                href={story.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(story.link);
                }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image.url}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-2xl font-bold">{story.name}</h3>
                    <p className="text-yellow-200">{story.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Before</div>
                      <div className="font-semibold text-gray-900">{story.before}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-yellow-500" />
                    <div className="text-center">
                      <div className="text-sm text-gray-500">After</div>
                      <div className="font-semibold text-yellow-600">{story.after}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Training Completed</div>
                    <div className="font-semibold text-gray-900">{story.training}</div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsUp className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-800">Key Achievement</span>
                    </div>
                    <p className="text-green-700 text-sm">{story.achievement}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Training Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">JengaNow Training Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive library of construction training materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trainingResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(resource.link);
                }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                  <resource.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Construction Development Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Invest in your construction career growth with JengaNow industry-leading training programs 
            designed for professionals at every level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-yellow-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Training Advisor
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Full Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Training Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">JengaNow Training Partners</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading construction industry organizations for recognized certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              { name: 'OSHA', link: '/partners/osha' },
              { name: 'NCCER', link: '/partners/nccer' },
              { name: 'LEED', link: '/partners/leed' },
              { name: 'PMI', link: '/partners/pmi' },
              { name: 'ASSP', link: '/partners/assp' },
              { name: 'CMAA', link: '/partners/cmaa' }
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
                <div className="text-gray-400 font-semibold text-sm hover:text-yellow-600 transition-colors">
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

export default TrainingAndDevelopment;