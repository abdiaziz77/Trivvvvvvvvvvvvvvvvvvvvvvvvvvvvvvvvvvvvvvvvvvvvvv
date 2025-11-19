import React, { useState } from 'react';

const RenovationProject = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    renovationType: '',
    selectedExpert: null,
    location: null
  });

  const renovationTypes = [
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Whole House Renovation',
    'Room Addition',
    'Exterior Renovation',
    'Basement Finishing',
    'Flooring Installation',
    'Painting Services',
    'Plumbing Updates',
    'Electrical Work'
  ];

  const experts = [
    {
      id: 1,
      name: 'Michael Rodriguez',
      specialty: 'Kitchen & Bath Specialist',
      experience: '12 years',
      rating: 4.9,
      projects: 240,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      specialty: 'Whole House Renovation',
      experience: '15 years',
      rating: 4.8,
      projects: 320,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'James Wilson',
      specialty: 'Exterior & Structural',
      experience: '18 years',
      rating: 5.0,
      projects: 410,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Emma Thompson',
      specialty: 'Design & Interior',
      experience: '10 years',
      rating: 4.7,
      projects: 180,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleLocationShare = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          updateFormData({ location });
          alert('Location shared successfully! Our experts will use this to visit your property.');
          nextStep();
        },
        (error) => {
          alert('Error sharing location. Please try again or enter your address manually.');
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Renovation request submitted:', formData);
    alert('Thank you! Your renovation request has been submitted. Our experts will contact you soon to schedule a visit.');
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      renovationType: '',
      selectedExpert: null,
      location: null
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Request Renovation Service</h1>
        <p className="text-gray-600 mt-2">
          Fill out the form below to request our expert renovation services
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 4 && (
                <div className={`w-20 h-1 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between max-w-2xl mx-auto mt-2 text-sm text-gray-600">
          <span>Basic Info</span>
          <span>Renovation Type</span>
          <span>Choose Expert</span>
          <span>Location</span>
        </div>
      </div>

      {/* Multi-step Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData({ name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData({ email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData({ phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={nextStep}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next: Renovation Type
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Renovation Type */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Renovation Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renovationTypes.map((type) => (
                <div
                  key={type}
                  onClick={() => updateFormData({ renovationType: type })}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition duration-300 ${
                    formData.renovationType === type
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 ${
                      formData.renovationType === type
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-400'
                    }`}></div>
                    <span className="font-medium">{type}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.renovationType}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next: Choose Expert
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Choose Expert */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Your Renovation Expert</h2>
            <p className="text-gray-600 mb-6">Choose from our team of certified renovation specialists</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experts.map((expert) => (
                <div
                  key={expert.id}
                  onClick={() => updateFormData({ selectedExpert: expert })}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition duration-300 ${
                    formData.selectedExpert?.id === expert.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800">{expert.name}</h3>
                      <p className="text-blue-600 font-medium">{expert.specialty}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <span className="mr-4">⭐ {expert.rating}</span>
                        <span className="mr-4">📅 {expert.experience}</span>
                        <span>🏠 {expert.projects} projects</span>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      formData.selectedExpert?.id === expert.id
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-400'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.selectedExpert}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next: Share Location
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Location Sharing */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Share Your Location</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Why we need your location?</h3>
                  <p className="text-blue-700">
                    We use your location to send our renovation experts directly to your property for assessment and work.
                    Your location data is secure and only used for service delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleLocationShare}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center mx-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Share My Current Location
              </button>
              
              <p className="text-gray-500 mt-4">or</p>
              
              <div className="mt-4">
                <label className="block text-gray-700 mb-2">Enter Address Manually</label>
                <input
                  type="text"
                  placeholder="Enter your full address"
                  className="w-full max-w-md mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => updateFormData({ location: { address: e.target.value } })}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.location}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Submit Request
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Summary Section */}
      {currentStep > 1 && (
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Request Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Name:</span>
              <span className="ml-2 font-medium">{formData.name || 'Not provided'}</span>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>
              <span className="ml-2 font-medium">{formData.email || 'Not provided'}</span>
            </div>
            <div>
              <span className="text-gray-600">Phone:</span>
              <span className="ml-2 font-medium">{formData.phone || 'Not provided'}</span>
            </div>
            <div>
              <span className="text-gray-600">Renovation Type:</span>
              <span className="ml-2 font-medium">{formData.renovationType || 'Not selected'}</span>
            </div>
            <div>
              <span className="text-gray-600">Selected Expert:</span>
              <span className="ml-2 font-medium">{formData.selectedExpert?.name || 'Not selected'}</span>
            </div>
            <div>
              <span className="text-gray-600">Location:</span>
              <span className="ml-2 font-medium">
                {formData.location ? 'Shared' : 'Not shared'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenovationProject;