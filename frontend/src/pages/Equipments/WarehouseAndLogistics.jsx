import React, { useState } from 'react';

const PublicWarehouse = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeFeature, setActiveFeature] = useState('storage');

  // Warehouse features data
  const features = [
    {
      id: 'storage',
      title: 'Smart Storage Solutions',
      description: 'Advanced storage systems with real-time inventory tracking and climate control',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: [
        'Automated racking systems',
        'Climate-controlled units',
        'Real-time inventory tracking',
        'Secure access control'
      ]
    },
    {
      id: 'logistics',
      title: 'Efficient Logistics',
      description: 'Streamlined material handling and distribution with advanced tracking',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      details: [
        'Cross-docking facilities',
        'Just-in-time delivery',
        'Fleet management',
        'Route optimization'
      ]
    },
    {
      id: 'technology',
      title: 'Cutting-Edge Technology',
      description: 'State-of-the-art warehouse management systems and automation',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      details: [
        'WMS integration',
        'Barcode/RFID systems',
        'Automated sorting',
        'Data analytics dashboard'
      ]
    },
    {
      id: 'safety',
      title: 'Safety & Security',
      description: 'Comprehensive safety protocols and 24/7 security monitoring',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      details: [
        '24/7 surveillance',
        'Fire suppression systems',
        'Safety training programs',
        'Emergency response plans'
      ]
    }
  ];

  // Services offered
  const services = [
    {
      id: 1,
      title: 'Pallet Storage',
      icon: '📦',
      description: 'Secure pallet storage with advanced racking systems',
      capacity: 'Up to 10,000 pallets',
      rate: '$15/pallet/month'
    },
    {
      id: 2,
      title: 'Bulk Storage',
      icon: '🏗️',
      description: 'Large-scale bulk storage for construction materials',
      capacity: '50,000+ sq ft available',
      rate: '$25/sq ft/month'
    },
    {
      id: 3,
      title: 'Cross-Docking',
      icon: '🚚',
      description: 'Efficient transfer and distribution services',
      capacity: '24/7 operation',
      rate: 'From $20/pallet'
    },
    {
      id: 4,
      title: 'Inventory Management',
      icon: '📊',
      description: 'Complete inventory control and tracking',
      capacity: 'Real-time updates',
      rate: 'Custom pricing'
    }
  ];

  // Equipment available
  const equipment = [
    {
      name: 'Forklifts',
      count: '25+',
      types: ['Electric', 'Diesel', 'Reach Trucks']
    },
    {
      name: 'Pallet Racks',
      count: '10,000+',
      types: ['Selective', 'Drive-in', 'Push-back']
    },
    {
      name: 'Conveyor Systems',
      count: '5 systems',
      types: ['Belt', 'Roller', 'Sortation']
    },
    {
      name: 'Loading Docks',
      count: '15 docks',
      types: ['Levelers', 'Shelters', 'Restraints']
    }
  ];

  const activeFeatureData = features.find(feature => feature.id === activeFeature);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-24 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Modern Warehouse
              <span className="text-yellow-400"> Facilities</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              State-of-the-art storage and logistics solutions for construction materials, 
              equipment, and industrial supplies. Your trusted partner in material management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowContactModal(true)}
                className="px-8 py-4 bg-yellow-500 text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request Storage Quote
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-600 mb-2">50,000+</div>
              <div className="text-gray-600 font-semibold">Square Feet</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Security & Access</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-semibold">Inventory Accuracy</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-gray-600 font-semibold">Loading Docks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Advanced Warehouse Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our facility is equipped with the latest technology and systems to ensure 
              efficient and secure storage of your valuable materials and equipment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Navigation */}
            <div className="space-y-6">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeFeature === feature.id
                      ? 'bg-white shadow-2xl border-2 border-yellow-500 transform -translate-y-1'
                      : 'bg-white shadow-lg hover:shadow-xl hover:border-yellow-200 border-2 border-transparent'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Feature Display */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={activeFeatureData.image} 
                alt={activeFeatureData.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {activeFeatureData.title}
                </h3>
                <div className="space-y-3">
                  {activeFeatureData.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Storage & Logistics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the unique needs of construction 
              companies, suppliers, and industrial clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-semibold">{service.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold text-yellow-600">{service.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Warehouse Equipment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern material handling equipment to ensure efficient operations 
              and safe handling of your materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-yellow-900/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-yellow-800/80 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{item.count}</div>
                <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                <div className="space-y-2">
                  {item.types.map((type, typeIndex) => (
                    <div key={typeIndex} className="text-yellow-200 text-sm">
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(180, 83, 9, 0.9), rgba(180, 83, 9, 0.9)), url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Storage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your storage needs and discover how our 
            modern warehouse facilities can support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowContactModal(true)}
              className="px-8 py-4 bg-yellow-500 text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Storage Quote
            </button>
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
              Call: (555) 123-STORAGE
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-4xl mb-2">{selectedService.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">{selectedService.description}</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="text-gray-700">Capacity:</span>
                <span className="font-semibold">{selectedService.capacity}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="text-gray-700">Standard Rate:</span>
                <span className="font-semibold text-yellow-600">{selectedService.rate}</span>
              </div>
            </div>
            
            <button
              onClick={() => {
                setSelectedService(null);
                setShowContactModal(true);
              }}
              className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Request Storage Quote</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
              <input
                type="text"
                placeholder="Contact Person"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                <option>Select Service Needed</option>
                <option>Pallet Storage</option>
                <option>Bulk Storage</option>
                <option>Cross-Docking</option>
                <option>Inventory Management</option>
                <option>Multiple Services</option>
              </select>
              <textarea
                placeholder="Tell us about your storage requirements..."
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 font-semibold"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicWarehouse;