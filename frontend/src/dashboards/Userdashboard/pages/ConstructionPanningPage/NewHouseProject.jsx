import React, { useState } from 'react';

const NewHouseProject = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    plotLocation: '',
    plotSize: '',
    landArea: '',
    surveyNumber: '',
    zoningType: '',
    bedrooms: '',
    bathrooms: '',
    floors: '',
    preferredStyle: '',
    specialRequirements: '',
    ownershipProof: null,
    buildingPermit: null,
    sitePlan: null,
    taxReceipts: null,
    agreedToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const nextStep = () => setActiveStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setActiveStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your new house request has been submitted successfully!');
    setShowForm(false);
    setActiveStep(1);
  };

  const constructionSteps = [
    { 
      number: 1, 
      title: 'Planning & Design', 
      description: 'Architectural drawings and technical planning',
      icon: '📐',
      duration: '2-4 weeks',
      details: 'We transform your vision into detailed architectural plans with 3D visualizations'
    },
    { 
      number: 2, 
      title: 'Foundation', 
      description: 'Site preparation and structural foundation',
      icon: '🏗️',
      duration: '3-5 weeks',
      details: 'Solid foundation work ensuring structural integrity for generations to come'
    },
    { 
      number: 3, 
      title: 'Framing', 
      description: 'Structural framework construction',
      icon: '🔨',
      duration: '4-6 weeks',
      details: 'Building the structural skeleton with precision engineering and quality materials'
    },
    { 
      number: 4, 
      title: 'Mechanical', 
      description: 'Electrical, plumbing, and HVAC systems',
      icon: '⚡',
      duration: '3-4 weeks',
      details: 'Installing essential modern systems for comfort and functionality'
    },
    { 
      number: 5, 
      title: 'Finishes', 
      description: 'Interior and exterior finishing',
      icon: '🎨',
      duration: '6-8 weeks',
      details: 'Premium finishes and craftsmanship that bring your dream home to life'
    },
    { 
      number: 6, 
      title: 'Final', 
      description: 'Quality checks and handover',
      icon: '✅',
      duration: '2-3 weeks',
      details: 'Comprehensive quality assurance and smooth project handover process'
    }
  ];

  const stats = [
    { number: '250+', label: 'Projects Completed', icon: '🏠' },
    { number: '15+', label: 'Years Experience', icon: '⭐' },
    { number: '98%', label: 'Client Satisfaction', icon: '😊' },
    { number: '50+', label: 'Awards Won', icon: '🏆' }
  ];

  const features = [
    { title: 'Quality Materials', description: 'Premium construction materials with lifetime warranty', icon: '🛡️' },
    { title: 'Expert Team', description: 'Licensed architects and skilled craftsmen', icon: '👨‍💼' },
    { title: 'Timely Delivery', description: 'Strict adherence to project timelines', icon: '⏱️' },
    { title: 'Transparent Pricing', description: 'No hidden costs, detailed breakdowns', icon: '💰' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Stats Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build Your Dream Home with 
            <span className="text-yellow-600"> Precision</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional construction services that transform your vision into reality. 
            From concept to completion, we deliver exceptional quality and craftsmanship.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-8 bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </div>

        {/* Construction Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-lg text-gray-600">A streamlined approach to building your perfect home</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200 hidden lg:block"></div>
            
            <div className="space-y-12 lg:space-y-24">
              {constructionSteps.map((step, index) => (
                <div key={step.number} className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 bg-yellow-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold mr-4">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <p className="text-yellow-600 font-semibold">{step.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg mb-4">{step.description}</p>
                      <p className="text-gray-600">{step.details}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-center relative z-10">
                    <div className="w-20 h-20 bg-yellow-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Excellence in every aspect of construction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Let's build something extraordinary together. Your dream home is just a conversation away.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-yellow-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Start Your Project</h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setActiveStep(1);
                  }}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-yellow-100 mt-2">Complete the form below to get started</p>
              
              {/* Progress Steps */}
              <div className="flex justify-between mt-6 relative">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold border-2 ${
                      activeStep >= step 
                        ? 'bg-white text-yellow-600 border-white' 
                        : 'bg-transparent text-yellow-200 border-yellow-200'
                    } transition-all duration-300`}>
                      {step}
                    </div>
                    <span className="text-xs mt-2 text-yellow-100">
                      {step === 1 && 'Personal'}
                      {step === 2 && 'Plot'}
                      {step === 3 && 'House'}
                      {step === 4 && 'Final'}
                    </span>
                  </div>
                ))}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-yellow-200 -z-10">
                  <div 
                    className="h-0.5 bg-white transition-all duration-500"
                    style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8">
              {/* Step 1: Personal Details */}
              {activeStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h3>
                  <p className="text-gray-600 mb-6">Tell us about yourself so we can better serve you</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Current Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Plot Details */}
              {activeStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plot Information</h3>
                  <p className="text-gray-600 mb-6">Details about your construction site</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Plot Location *</label>
                      <input
                        type="text"
                        name="plotLocation"
                        value={formData.plotLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter plot location"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Plot Size (sq ft) *</label>
                      <input
                        type="number"
                        name="plotSize"
                        value={formData.plotSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter plot size"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Land Area (acres)</label>
                      <input
                        type="number"
                        step="0.01"
                        name="landArea"
                        value={formData.landArea}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter land area"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Survey Number</label>
                      <input
                        type="text"
                        name="surveyNumber"
                        value={formData.surveyNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter survey number"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Zoning Type *</label>
                      <select
                        name="zoningType"
                        value={formData.zoningType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Zoning Type</option>
                        <option value="residential">Residential</option>
                        <option value="agricultural">Agricultural</option>
                        <option value="commercial">Commercial</option>
                        <option value="mixed-use">Mixed Use</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: House Requirements */}
              {activeStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">House Requirements</h3>
                  <p className="text-gray-600 mb-6">Tell us about your dream home specifications</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bedrooms</label>
                      <select
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedrooms</option>
                        <option value="3">3 Bedrooms</option>
                        <option value="4">4 Bedrooms</option>
                        <option value="5+">5+ Bedrooms</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bathrooms</label>
                      <select
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="1">1 Bathroom</option>
                        <option value="2">2 Bathrooms</option>
                        <option value="3">3 Bathrooms</option>
                        <option value="4">4 Bathrooms</option>
                        <option value="5+">5+ Bathrooms</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Floors</label>
                      <select
                        name="floors"
                        value={formData.floors}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="1">Single Story</option>
                        <option value="2">Two Story</option>
                        <option value="3">Three Story</option>
                      </select>
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Style</label>
                      <select
                        name="preferredStyle"
                        value={formData.preferredStyle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Select Style</option>
                        <option value="modern">Modern</option>
                        <option value="contemporary">Contemporary</option>
                        <option value="traditional">Traditional</option>
                        <option value="colonial">Colonial</option>
                        <option value="mediterranean">Mediterranean</option>
                        <option value="custom">Custom Design</option>
                      </select>
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requirements</label>
                      <textarea
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Any specific requirements like home office, pool, solar panels, etc."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Final Step */}
              {activeStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Almost There</h3>
                  <p className="text-gray-600 mb-6">Review and submit your project request</p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreedToTerms"
                        checked={formData.agreedToTerms}
                        onChange={handleInputChange}
                        className="mt-1 mr-4 w-5 h-5 text-yellow-600 bg-white border-gray-300 rounded focus:ring-yellow-500 focus:ring-2"
                        required
                      />
                      <div>
                        <p className="font-semibold text-yellow-800">Terms & Conditions Agreement *</p>
                        <p className="text-sm text-yellow-700 mt-2">
                          I confirm that all information provided is accurate and I own the plot mentioned. 
                          I understand that construction requires proper approvals and permits.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <p className="text-gray-600 text-sm">
                      Our team will contact you within 24 hours to discuss your project and provide a preliminary consultation.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={activeStep === 1}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeStep === 1 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-600 text-white hover:bg-gray-700 transform hover:scale-105'
                  }`}
                >
                  ← Previous
                </button>
                
                {activeStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-yellow-600 text-white rounded-xl font-semibold hover:bg-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Submit Project Request
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewHouseProject;