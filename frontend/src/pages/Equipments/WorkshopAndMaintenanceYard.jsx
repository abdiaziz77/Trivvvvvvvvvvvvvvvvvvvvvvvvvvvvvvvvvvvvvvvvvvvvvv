import React, { useState, useEffect } from 'react';

const WorkshopAndMaintenanceYard = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    equipment: '',
    issue: '',
    urgency: 'medium'
  });

  const workshopImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KG4m92Ykmj3UOzIiTz20UsNUe_CTQJZQnQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBr9Q2_07Cl3J4c7amoHsAPttdZ_O2XbA6rg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTCY9n_7nfE7BnojkXYlRtsvkvhjbrFuETA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDmgqMq3iVcnHvMq7F4oqOWiYYeGp_zA9VA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_bmIiMOySGbHtvTZX_5uKkGI3ymPqK0QzQ&s"
  ];

  // Auto-scroll images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === workshopImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [workshopImages.length]);

  const maintenanceServices = [
    {
      id: 1,
      title: "Routine Maintenance",
      description: "Regular servicing to keep your equipment running smoothly and prevent breakdowns",
      icon: "🔧",
      features: ["Oil and filter changes", "Lubrication services", "Component inspection", "Preventive maintenance"],
      price: "Starting at $150",
      duration: "2-4 hours"
    },
    {
      id: 2,
      title: "Engine Overhaul",
      description: "Complete engine rebuild and restoration for optimal performance",
      icon: "⚙️",
      features: ["Complete disassembly", "Parts replacement", "Performance testing", "Warranty included"],
      price: "Starting at $2,500",
      duration: "3-5 days"
    },
    {
      id: 3,
      title: "Hydraulic System Repair",
      description: "Expert repair and maintenance of hydraulic systems and components",
      icon: "🛢️",
      features: ["Leak detection", "Seal replacement", "Pump repair", "System testing"],
      price: "Starting at $800",
      duration: "1-2 days"
    },
    {
      id: 4,
      title: "Electrical System Diagnostics",
      description: "Comprehensive electrical system troubleshooting and repair",
      icon: "🔌",
      features: ["Wiring inspection", "Sensor calibration", "ECU diagnostics", "Battery testing"],
      price: "Starting at $300",
      duration: "4-6 hours"
    },
    {
      id: 5,
      title: "Undercarriage Repair",
      description: "Specialized repair for tracks, rollers, and undercarriage components",
      icon: "🛞",
      features: ["Track adjustment", "Roller replacement", "Sprocket repair", "Alignment services"],
      price: "Starting at $1,200",
      duration: "2-3 days"
    },
    {
      id: 6,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services for unexpected breakdowns",
      icon: "🚨",
      features: ["24/7 availability", "On-site repairs", "Quick response", "Minimal downtime"],
      price: "Emergency rates apply",
      duration: "As needed"
    }
  ];

  const maintenancePackages = [
    {
      id: 1,
      name: "Basic Maintenance Plan",
      price: "$299/month",
      description: "Essential maintenance for small to medium equipment",
      features: [
        "2 routine services per year",
        "Basic diagnostics",
        "Oil and filter changes",
        "24/7 phone support",
        "10% discount on parts"
      ],
      bestFor: "Small contractors"
    },
    {
      id: 2,
      name: "Professional Maintenance Plan",
      price: "$699/month",
      description: "Comprehensive coverage for medium to large fleets",
      features: [
        "4 routine services per year",
        "Advanced diagnostics",
        "Priority scheduling",
        "Emergency response",
        "15% discount on parts",
        "Monthly equipment health reports"
      ],
      bestFor: "Medium businesses",
      popular: true
    },
    {
      id: 3,
      name: "Enterprise Maintenance Plan",
      price: "$1,299/month",
      description: "Complete maintenance solution for large operations",
      features: [
        "Unlimited routine services",
        "Full diagnostics suite",
        "24/7 on-call technicians",
        "Same-day emergency response",
        "20% discount on parts",
        "Weekly equipment monitoring",
        "Dedicated account manager"
      ],
      bestFor: "Large enterprises"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "John Anderson",
      position: "Lead Technician",
      experience: "15+ years",
      specialization: "Hydraulic Systems",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      position: "Electrical Specialist",
      experience: "12+ years",
      specialization: "ECU & Electronics",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "David Kim",
      position: "Engine Expert",
      experience: "18+ years",
      specialization: "Diesel Engines",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      position: "Service Manager",
      experience: "10+ years",
      specialization: "Fleet Maintenance",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const equipmentBrands = [
    "CAT", "Komatsu", "Volvo", "Hitachi", "Liebherr", "Doosan", "JCB", "Case", "John Deere", "Kobelco"
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Simulate booking submission
    alert(`Maintenance booking confirmed!\n\nService: ${selectedService.title}\nCustomer: ${bookingDetails.name}\nWe'll contact you at ${bookingDetails.phone} within 30 minutes.`);
    setShowBookingForm(false);
    setSelectedService(null);
    setBookingDetails({
      name: '',
      email: '',
      phone: '',
      equipment: '',
      issue: '',
      urgency: 'medium'
    });
  };

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  const openBookingForm = (service) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === workshopImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? workshopImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Scrolling Images */}
      <section className="relative bg-cover bg-center py-32 overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {workshopImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {workshopImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-yellow-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Workshop & Maintenance Yard
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up">
            Professional equipment maintenance and repair services to keep your machinery running at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button 
              onClick={() => setActiveTab('services')}
              className="px-8 py-4 bg-yellow-500 text-white rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
              Emergency Hotline: +1 (555) 911-REPAIR
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Emergency Service</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <div className="text-gray-600 font-semibold">First-Time Fix Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-yellow-600 mb-2">30min</div>
              <div className="text-gray-600 font-semibold">Average Response Time</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Machines Serviced Monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-1">
            {[
              { id: 'services', name: 'Our Services' },
              { id: 'packages', name: 'Maintenance Plans' },
              { id: 'team', name: 'Our Team' },
              { id: 'facilities', name: 'Facilities' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-yellow-600 border-b-2 border-yellow-600 bg-yellow-50'
                    : 'text-gray-600 hover:text-yellow-500 hover:bg-yellow-25'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Services Tab */}
      {activeTab === 'services' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Professional Maintenance Services
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive repair and maintenance services for all types of construction equipment
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {maintenanceServices.map(service => (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-yellow-600">{service.price}</span>
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>

                    <button
                      onClick={() => openBookingForm(service)}
                      className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors transform hover:scale-105"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Maintenance Packages Tab */}
      {activeTab === 'packages' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Maintenance Plans
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Choose the perfect maintenance plan for your equipment fleet
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {maintenancePackages.map(pkg => (
                <div key={pkg.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-yellow-500 relative' : ''
                }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-1 rounded-bl-lg font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-yellow-600 mb-4">{pkg.price}</div>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-green-500 mr-3">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <span className="text-sm text-gray-600">Best for:</span>
                      <div className="font-semibold text-gray-800">{pkg.bestFor}</div>
                    </div>

                    <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors transform hover:scale-105">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team Tab */}
      {activeTab === 'team' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Certified technicians with decades of combined experience in heavy equipment maintenance
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map(member => (
                <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">{member.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.experience} experience</p>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-600">Specialization:</span>
                      <div className="font-semibold text-gray-800">{member.specialization}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brands We Service */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Brands We Service
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {equipmentBrands.map(brand => (
                  <div key={brand} className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <span className="font-semibold text-gray-700">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Facilities Tab */}
      {activeTab === 'facilities' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              State-of-the-art workshop equipped with the latest technology
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-8a6a5d6658bb?w=600&h=400&fit=crop" 
                  alt="Workshop Facility"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Workshop Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "10,000 sq ft workspace",
                      "10-ton overhead cranes",
                      "Computerized diagnostics",
                      "Parts inventory",
                      "Clean room for electronics",
                      "Paint booth",
                      "Wheel alignment",
                      "Pressure testing"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
                  <div className="space-y-3">
                    {[
                      "ISO 9001 Certified",
                      "OEM-trained technicians",
                      "90-day warranty on all repairs",
                      "Quality control checks",
                      "Documented service history"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Equipment Repair?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Don't let equipment downtime slow your project. Our expert technicians are ready to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-yellow-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Service
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105">
              Emergency: +1 (555) 911-REPAIR
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingForm && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Book Maintenance Service</h3>
                <button 
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">{selectedService.title}</h4>
                <p className="text-yellow-700">{selectedService.description}</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={bookingDetails.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingDetails.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Equipment Type *</label>
                  <input
                    type="text"
                    name="equipment"
                    value={bookingDetails.equipment}
                    onChange={handleInputChange}
                    placeholder="e.g., CAT Excavator 320"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Issue Description *</label>
                  <textarea
                    name="issue"
                    value={bookingDetails.issue}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Please describe the issue you're experiencing..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                  <select
                    name="urgency"
                    value={bookingDetails.urgency}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="low">Low - Schedule when convenient</option>
                    <option value="medium">Medium - Within 48 hours</option>
                    <option value="high">High - Emergency (24/7 service)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors transform hover:scale-105"
                >
                  Book Service Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopAndMaintenanceYard;