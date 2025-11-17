import React, { useState, useCallback } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Search,
  FileText,
  Video,
  Users,
  Star,
  ChevronRight,
  HelpCircle,
  Shield,
  Truck,
  CreditCard,
  Calendar,
  Building,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  HeadphonesIcon
} from 'lucide-react';

const HelpContactTeam = () => {
  const [activeTab, setActiveTab] = useState('help');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: '',
    rentalId: ''
  });

  // FAQ categories and questions
  const faqCategories = [
    {
      id: 'general',
      name: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: 'How do I rent equipment?',
          answer: 'To rent equipment, browse our catalog, select the equipment you need, choose your rental dates, and complete the checkout process. You can also contact our team for assistance with large or complex rentals.'
        },
        {
          question: 'What are your business hours?',
          answer: 'Our customer service team is available Monday to Friday from 7:00 AM to 7:00 PM, and Saturdays from 8:00 AM to 4:00 PM. Emergency support is available 24/7 for active rentals.'
        },
        {
          question: 'Do you offer operator services?',
          answer: 'Yes, we provide certified operators for most equipment. You can select this option during the rental process or contact us to arrange operator services.'
        }
      ]
    },
    {
      id: 'payments',
      name: 'Payments & Billing',
      icon: CreditCard,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, and corporate accounts. Payment plans are available for long-term rentals.'
        },
        {
          question: 'When is payment due?',
          answer: 'A deposit is required to confirm your rental. The remaining balance is due before equipment delivery. For long-term rentals, we offer installment payment options.'
        },
        {
          question: 'Can I get an invoice for my rental?',
          answer: 'Yes, invoices are automatically generated and available for download from your rental dashboard. You can also request copies by contacting our billing department.'
        }
      ]
    },
    {
      id: 'delivery',
      name: 'Delivery & Pickup',
      icon: Truck,
      questions: [
        {
          question: 'Do you deliver equipment?',
          answer: 'Yes, we offer delivery and pickup services to most locations. Delivery fees vary based on distance and equipment size. Contact us for specific delivery quotes.'
        },
        {
          question: 'What are your delivery hours?',
          answer: 'Standard deliveries occur between 7:00 AM and 5:00 PM, Monday to Friday. After-hours and weekend deliveries are available for an additional fee.'
        },
        {
          question: 'What do I need for equipment delivery?',
          answer: 'Please ensure the delivery site is accessible, level, and clear of obstacles. Have your rental agreement and identification ready for the delivery team.'
        }
      ]
    },
    {
      id: 'safety',
      name: 'Safety & Training',
      icon: Shield,
      questions: [
        {
          question: 'Do you provide equipment training?',
          answer: 'Yes, we offer comprehensive equipment orientation and safety training. Training is mandatory for certain equipment types and is included with operator services.'
        },
        {
          question: 'What safety certifications do your operators have?',
          answer: 'All our operators are certified and undergo regular safety training. They hold current licenses and certifications specific to the equipment they operate.'
        },
        {
          question: 'What safety equipment is included?',
          answer: 'Basic safety equipment is included with all rentals. Additional safety gear can be rented separately. Please review the safety checklist with our team.'
        }
      ]
    }
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our rental specialists',
      details: '+1 (555) 123-4567',
      availability: 'Mon-Fri: 7:00 AM - 7:00 PM',
      action: 'Call Now',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us detailed inquiries and get written responses',
      details: 'support@jenganow.com',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant messaging with our support team',
      details: 'Available during business hours',
      availability: 'Mon-Fri: 7:00 AM - 7:00 PM',
      action: 'Start Chat',
      color: 'bg-purple-500'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Face-to-face consultation for complex projects',
      details: 'Schedule a meeting',
      availability: 'By appointment',
      action: 'Schedule Call',
      color: 'bg-orange-500'
    }
  ];

  // Support team members
  // Support team members
  const supportTeam = [
    {
      name: 'Hassan Abdi',
      role: 'Rental Specialist',
      expertise: 'Excavators & Heavy Equipment',
      experience: '8 years',
      image: '/src/assets/images/hassan.jpg',
      available: true
    },
    {
      name: 'Khalid Abdikariim',
      role: 'Operations Manager',
      expertise: 'Logistics & Delivery',
      experience: '12 years',
      image: '/src/assets/images/khalid.png',
      available: true
    },
    {
      name: 'Abdiaziz Noor',
      role: 'Safety Coordinator',
      expertise: 'Training & Compliance',
      experience: '6 years',
      image: '/src/assets/images/abdiaziz.jpg',
      available: false
    },
    {
      name: 'Mohamed Farah',
      role: 'Technical Support',
      expertise: 'Equipment Maintenance',
      experience: '10 years',
      image: '/src/assets/images/3.jpg', // Using one of your numbered images
      available: true
    }
  ];

  // Handle contact form changes
  const handleFormChange = useCallback((field, value) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! Our team will contact you within 2 hours.');
    setShowContactForm(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: 'general',
      message: '',
      rentalId: ''
    });
  }, [contactForm]);

  // Filter FAQs based on search query
  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const selectedCategoryData = faqCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
            <p className="text-gray-600 mt-1">Get assistance with your equipment rentals and projects</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Response Time</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">15 min</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Clock className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Support Rating</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">4.9/5</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Support</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">24/7</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <HeadphonesIcon className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Issues Resolved</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">98%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <CheckCircle className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {[
                { id: 'help', name: 'Help Center', icon: HelpCircle },
                { id: 'contact', name: 'Contact Team', icon: Users },
                { id: 'resources', name: 'Resources', icon: FileText }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-4 px-6 border-b-2 font-medium text-sm ${activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    <IconComponent size={20} />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Help Center Tab */}
            {activeTab === 'help' && (
              <div className="space-y-8">
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search for help articles, FAQs, or guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {faqCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center gap-3 p-4 border rounded-lg text-left transition-colors ${selectedCategory === category.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                          <div className="p-2 bg-orange-100 rounded-lg">
                            <IconComponent className="text-orange-600" size={20} />
                          </div>
                          <span className="font-medium text-gray-900">{category.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* FAQs */}
                {selectedCategoryData && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                      {selectedCategoryData.name} - Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      {selectedCategoryData.questions.map((faq, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                          <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-4">Need More Help?</h3>
                  <p className="text-orange-800 mb-4">
                    Can't find what you're looking for? Our support team is ready to assist you.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setActiveTab('contact')}
                      className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      <MessageSquare size={16} />
                      Contact Support
                    </button>
                    <button className="flex items-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg font-semibold transition-colors">
                      <FileText size={16} />
                      View Documentation
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Team Tab */}
            {activeTab === 'contact' && (
              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                  <p className="text-gray-600">
                    Our dedicated support team is here to help you with any questions about equipment rentals,
                    project planning, or technical support.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-full ${method.color} text-white`}>
                            <IconComponent size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                            <div className="space-y-1 text-sm">
                              <p className="font-medium text-gray-900">{method.details}</p>
                              <p className="text-gray-500 flex items-center gap-1">
                                <Clock size={14} />
                                {method.availability}
                              </p>
                            </div>
                            <button className="mt-4 flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold">
                              {method.action}
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Support Team */}
                {/* Support Team */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Meet Our Support Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {supportTeam.map((member, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-gray-900">{member.name}</h4>
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${member.available
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                                }`}>
                                <div className={`w-2 h-2 rounded-full ${member.available ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                                {member.available ? 'Available' : 'Away'}
                              </span>
                            </div>
                            <p className="text-orange-600 font-medium mb-1">{member.role}</p>
                            <p className="text-gray-600 text-sm mb-2">{member.expertise}</p>
                            <p className="text-gray-500 text-sm flex items-center gap-1">
                              <Clock size={14} />
                              Experience: {member.experience}
                            </p>
                            {member.available && (
                              <button className="mt-3 flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-semibold transition-colors">
                                <MessageCircle size={14} />
                                Send Message
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => handleFormChange('name', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => handleFormChange('email', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => handleFormChange('phone', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Rental ID (if applicable)
                        </label>
                        <input
                          type="text"
                          value={contactForm.rentalId}
                          onChange={(e) => handleFormChange('rentalId', e.target.value)}
                          placeholder="e.g., JN-2024-001"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          value={contactForm.subject}
                          onChange={(e) => handleFormChange('subject', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category *
                        </label>
                        <select
                          value={contactForm.category}
                          onChange={(e) => handleFormChange('category', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="technical">Technical Support</option>
                          <option value="billing">Billing Question</option>
                          <option value="delivery">Delivery Issue</option>
                          <option value="safety">Safety Concern</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        value={contactForm.message}
                        onChange={(e) => handleFormChange('message', e.target.value)}
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Please describe your issue or question in detail..."
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Mail size={16} />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
                  <p className="text-gray-600">
                    Access documentation, guides, and resources to help you get the most out of your equipment rentals.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Equipment Manuals',
                      description: 'Download operation manuals and technical specifications',
                      icon: FileText,
                      count: '45+ manuals'
                    },
                    {
                      title: 'Safety Guides',
                      description: 'Comprehensive safety procedures and best practices',
                      icon: Shield,
                      count: '12 guides'
                    },
                    {
                      title: 'Training Videos',
                      description: 'Video tutorials for equipment operation and maintenance',
                      icon: Video,
                      count: '28 videos'
                    },
                    {
                      title: 'Project Planning',
                      description: 'Templates and guides for construction project planning',
                      icon: Building,
                      count: '15 templates'
                    },
                    {
                      title: 'Rental Process',
                      description: 'Step-by-step guides for the rental process',
                      icon: Calendar,
                      count: '8 guides'
                    },
                    {
                      title: 'Maintenance Tips',
                      description: 'Equipment maintenance and care instructions',
                      icon: Truck,
                      count: '22 articles'
                    }
                  ].map((resource, index) => {
                    const IconComponent = resource.icon;
                    return (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-orange-100 rounded-lg">
                            <IconComponent className="text-orange-600" size={20} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                            <p className="text-gray-500 text-sm">{resource.count}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                        <button className="flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm font-semibold">
                          Explore Resources
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Emergency Support Banner */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-full">
                <Phone className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-red-900">24/7 Emergency Support</h3>
                <p className="text-red-700 text-sm">
                  For urgent equipment issues or safety concerns during active rentals
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-red-900 text-lg">+1 (555) 911-RENT</p>
              <p className="text-red-700 text-sm">Available 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpContactTeam;