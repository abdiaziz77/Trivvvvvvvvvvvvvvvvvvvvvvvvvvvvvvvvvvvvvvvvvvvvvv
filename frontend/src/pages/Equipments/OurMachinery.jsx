import React, { useState } from 'react';

const OurMachinery = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [filter, setFilter] = useState('all');
  const [rentalPeriod, setRentalPeriod] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [rentalDetails, setRentalDetails] = useState(null);
  const [paymentStep, setPaymentStep] = useState(1); // 1: Rental details, 2: Customer info, 3: Payment
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    company: ''
  });

  const machineryData = [
    // Earth Moving Equipment
    {
      id: 1,
      name: "Hydraulic Excavator CAT 320",
      category: "earth-moving",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWnwyFlXs6OKqfJiDJ5fcHKFKV-eMCJkTqA&s",
      dailyRate: 850,
      weeklyRate: 5100,
      monthlyRate: 18000,
      specifications: {
        capacity: "2.5 cubic yards",
        power: "350 HP",
        weight: "45 tons",
        maxDepth: "25 feet",
        fuelConsumption: "8-12 gal/hr",
        operatingWeight: "45,200 lbs"
      },
      features: ["Advanced hydraulics", "Climate controlled cabin", "GPS guidance", "Quick coupler system", "Backup camera"],
      status: "available",
      deposit: 5000
    },
    {
      id: 2,
      name: "Crawler Dozer CAT D6",
      category: "earth-moving",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehArG3XSG_pxG8orKMFXjiWXhOY6fVo4O_g&s",
      dailyRate: 720,
      weeklyRate: 4320,
      monthlyRate: 15000,
      specifications: {
        capacity: "12-foot blade",
        power: "410 HP",
        weight: "65 tons",
        bladeType: "Semi-U",
        trackLength: "12.5 ft"
      },
      features: ["Ripper attachment", "Laser grading system", "Enhanced visibility", "Noise reduction"],
      status: "available",
      deposit: 4500
    },

    // Lifting Equipment
    {
      id: 3,
      name: "Tower Crane L200",
      category: "lifting",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeDGf3S-eHR650Kjunicv6idISTgyYhAlVg&s",
      dailyRate: 1200,
      weeklyRate: 7200,
      monthlyRate: 25000,
      specifications: {
        capacity: "20 tons",
        maxHeight: "265 feet",
        jibLength: "230 feet",
        power: "Electric",
        hoistingSpeed: "400 ft/min"
      },
      features: ["Remote control", "Load moment indicator", "Anti-collision system", "Weather monitoring"],
      status: "available",
      deposit: 15000
    },
    {
      id: 8,
      name: "Telehandler 12M",
      category: "lifting",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyjkcBv06Mh0Lb-JQRL0tnNBT5dBtw6GzEQ&s",
      dailyRate: 380,
      weeklyRate: 2280,
      monthlyRate: 8000,
      specifications: {
        liftCapacity: "6,000 lbs",
        maxHeight: "56 feet",
        power: "130 HP",
        reach: "42 feet"
      },
      features: ["4WD capability", "Stabilizer legs", "Multiple attachments", "Safety sensors"],
      status: "available",
      deposit: 3000
    },

    // Concrete Equipment
    {
      id: 4,
      name: "Concrete Mixer Truck 10yd",
      category: "concrete",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbE52EH1cjCnH_kKnoiYAqt8bI_p29b2pe2Q&s",
      dailyRate: 450,
      weeklyRate: 2700,
      monthlyRate: 9500,
      specifications: {
        capacity: "10 cubic yards",
        drumSpeed: "0-14 RPM",
        engine: "300 HP Diesel",
        waterTank: "200 gallons"
      },
      features: ["Auto lubrication", "Drum rotation control", "Water metering system", "Rear camera"],
      status: "available",
      deposit: 4000
    },

    // Hauling Equipment
    {
      id: 5,
      name: "Articulated Dump Truck 40T",
      category: "hauling",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIkvZteIQp4Mu2aYGc99AROsPnikkDQh4Jg&s",
      dailyRate: 680,
      weeklyRate: 4080,
      monthlyRate: 14000,
      specifications: {
        capacity: "40 tons",
        engine: "550 HP",
        transmission: "Automatic",
        topSpeed: "35 mph"
      },
      features: ["All-wheel drive", "Load weighing system", "Traction control", "Comfort cabin"],
      status: "available",
      deposit: 6000
    },

    // Multi-Purpose
    {
      id: 6,
      name: "Backhoe Loader 4x4",
      category: "multi-purpose",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmkM8eUn1hXMFw_vhTnXVBv6xCUf3lpXsBQ&s",
      dailyRate: 320,
      weeklyRate: 1920,
      monthlyRate: 6800,
      specifications: {
        digDepth: "18 feet",
        loaderCapacity: "3.5 cubic yards",
        power: "110 HP",
        breakoutForce: "12,000 lbs"
      },
      features: ["4-in-1 bucket", "Extendable dipper", "Quick attach system", "Enhanced stability"],
      status: "available",
      deposit: 2500
    },

    // Construction Materials (Only Cement Mixer remains)
    {
      id: 9,
      name: "Cement Mixer 5 Bag",
      category: "materials",
      image: "https://3.imimg.com/data3/PI/WA/MY-11803156/5-bag-movable-concrete-mixer-plant.jpg",
      dailyRate: 85,
      weeklyRate: 450,
      monthlyRate: 1500,
      specifications: {
        capacity: "5 bags",
        engine: "6.5 HP",
        drumSize: "9 cubic ft",
        weight: "180 lbs"
      },
      features: ["Portable", "Easy to operate", "Durable construction", "Low maintenance"],
      status: "available",
      deposit: 500
    }
  ];

  const categories = [
    { id: 'all', name: 'All Equipment', count: machineryData.length },
    { id: 'earth-moving', name: 'Earth Moving', count: machineryData.filter(m => m.category === 'earth-moving').length },
    { id: 'lifting', name: 'Lifting Equipment', count: machineryData.filter(m => m.category === 'lifting').length },
    { id: 'concrete', name: 'Concrete Equipment', count: machineryData.filter(m => m.category === 'concrete').length },
    { id: 'hauling', name: 'Hauling Equipment', count: machineryData.filter(m => m.category === 'hauling').length },
    { id: 'multi-purpose', name: 'Multi-Purpose', count: machineryData.filter(m => m.category === 'multi-purpose').length },
    { id: 'materials', name: 'Construction Materials', count: machineryData.filter(m => m.category === 'materials').length }
  ];

  const filteredMachinery = filter === 'all'
    ? machineryData
    : machineryData.filter(machine => machine.category === filter);

  const calculateRentalCost = (machine, period) => {
    if (period >= 30) return machine.monthlyRate;
    if (period >= 7) return machine.weeklyRate;
    return machine.dailyRate * period;
  };

  const openRentalModal = (machine) => {
    setSelectedMachine(machine);
    setRentalPeriod(1);
    setShowPayment(true);
    setPaymentStep(1);
    setCustomerInfo({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      company: ''
    });
    
    // Calculate initial rental details
    const totalCost = calculateRentalCost(machine, 1);
    setRentalDetails({
      machine: machine.name,
      period: 1,
      dailyRate: machine.dailyRate,
      totalCost: totalCost,
      deposit: machine.deposit,
      totalWithDeposit: totalCost + machine.deposit
    });
  };

  const closeModal = () => {
    setSelectedMachine(null);
    setShowPayment(false);
    setRentalDetails(null);
    setPaymentStep(1);
  };

  const handleRentalPeriodChange = (period) => {
    setRentalPeriod(period);
    if (selectedMachine) {
      const totalCost = calculateRentalCost(selectedMachine, period);
      setRentalDetails({
        machine: selectedMachine.name,
        period: period,
        dailyRate: selectedMachine.dailyRate,
        totalCost: totalCost,
        deposit: selectedMachine.deposit,
        totalWithDeposit: totalCost + selectedMachine.deposit
      });
    }
  };

  const handleCustomerInfoChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setPaymentStep(paymentStep + 1);
  };

  const prevStep = () => {
    setPaymentStep(paymentStep - 1);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    alert(`Payment processed successfully!\n\nRental Confirmation:\nEquipment: ${rentalDetails.machine}\nPeriod: ${rentalDetails.period} days\nTotal: $${rentalDetails.totalWithDeposit}\n\nThank you ${customerInfo.fullName}!`);
    closeModal();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'rented': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'available': return 'Available';
      case 'maintenance': return 'Under Maintenance';
      case 'rented': return 'Currently Rented';
      default: return 'Unknown';
    }
  };

  const renderPaymentStep = () => {
    switch (paymentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Rental Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img src={selectedMachine.image} alt={selectedMachine.name} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                <h4 className="text-xl font-semibold mt-4 text-gray-800">{selectedMachine.name}</h4>
                <div className="flex items-center space-x-2 mt-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(selectedMachine.status)}`}></div>
                  <span className="text-sm text-gray-600">{getStatusText(selectedMachine.status)}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rental Period</label>
                  <select 
                    value={rentalPeriod} 
                    onChange={(e) => handleRentalPeriodChange(Number(e.target.value))} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value={1}>1 Day - ${selectedMachine.dailyRate}</option>
                    <option value={7}>1 Week - ${selectedMachine.weeklyRate}</option>
                    <option value={30}>1 Month - ${selectedMachine.monthlyRate}</option>
                  </select>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800 mb-2">Rental Summary</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Equipment:</span>
                      <span className="font-semibold">{selectedMachine.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rental Period:</span>
                      <span className="font-semibold">{rentalPeriod} day(s)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Daily Rate:</span>
                      <span className="font-semibold">${selectedMachine.dailyRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Refundable Deposit:</span>
                      <span className="font-semibold">${selectedMachine.deposit}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold text-yellow-800">
                        <span>Total Amount:</span>
                        <span>${rentalDetails?.totalWithDeposit}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-700">Specifications</h5>
                  {Object.entries(selectedMachine.specifications).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button onClick={closeModal} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={nextStep} className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                Continue to Customer Info
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Customer Information</h3>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={customerInfo.fullName}
                    onChange={handleCustomerInfoChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={customerInfo.company}
                    onChange={handleCustomerInfoChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleCustomerInfoChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address *</label>
                <textarea
                  name="address"
                  value={customerInfo.address}
                  onChange={handleCustomerInfoChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
            </form>

            <div className="flex justify-between">
              <button onClick={prevStep} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Back
              </button>
              <button 
                onClick={nextStep}
                disabled={!customerInfo.fullName || !customerInfo.email || !customerInfo.phone || !customerInfo.address}
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Payment Information</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <h4 className="text-xl font-semibold text-yellow-800 mb-4">Order Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Equipment:</span>
                    <span className="font-semibold">{rentalDetails.machine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rental Period:</span>
                    <span className="font-semibold">{rentalDetails.period} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Daily Rate:</span>
                    <span className="font-semibold">${rentalDetails.dailyRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rental Cost:</span>
                    <span className="font-semibold">${rentalDetails.totalCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Refundable Deposit:</span>
                    <span className="font-semibold">${rentalDetails.deposit}</span>
                  </div>
                  <div className="border-t border-yellow-300 pt-3">
                    <div className="flex justify-between text-lg font-bold text-yellow-800">
                      <span>Total Amount:</span>
                      <span>${rentalDetails.totalWithDeposit}</span>
                    </div>
                  </div>
                </div>

                {/* Customer Info Summary */}
                <div className="mt-6 pt-4 border-t border-yellow-300">
                  <h5 className="font-semibold text-yellow-800 mb-2">Delivery To:</h5>
                  <div className="text-sm text-gray-600">
                    <p>{customerInfo.fullName}</p>
                    <p>{customerInfo.company}</p>
                    <p>{customerInfo.phone}</p>
                    <p>{customerInfo.email}</p>
                    <p className="mt-2">{customerInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div>
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input 
                      type="text" 
                      placeholder="1234 5678 9012 3456" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input 
                        type="text" 
                        placeholder="123" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      required 
                    />
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button onClick={prevStep} type="button" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Back
                    </button>
                    <button type="submit" className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                      Pay ${rentalDetails.totalWithDeposit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-fixed py-32" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop)'
      }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Heavy Equipment Rental
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            Rent premium construction machinery and materials. Competitive rates, flexible terms, and professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 text-white rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
              Get Instant Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300">
              Call Now: +1 (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{machineryData.length}+</div>
              <div className="text-gray-600 font-semibold">Equipment Types</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Support & Delivery</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Availability Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Browse Equipment Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-yellow-500 text-white shadow-lg transform scale-105' 
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-yellow-50'
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.name} <span className="text-sm opacity-80">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Machinery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMachinery.map(machine => (
              <div key={machine.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img src={machine.image} alt={machine.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getStatusColor(machine.status)}`}>
                    {getStatusText(machine.status)}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-lg font-bold">
                    ${machine.dailyRate}/day
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                    {machine.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Daily Rate:</span>
                      <span className="font-semibold text-yellow-600">${machine.dailyRate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Weekly Rate:</span>
                      <span className="font-semibold text-gray-800">${machine.weeklyRate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {machine.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                    {machine.features.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        +{machine.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={() => openRentalModal(machine)} 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && selectedMachine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative p-6">
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                ×
              </button>
              
              {/* Progress Steps */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        paymentStep >= step ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-12 h-1 ${paymentStep > step ? 'bg-yellow-500' : 'bg-gray-300'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {renderPaymentStep()}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Get the right equipment delivered to your site. Competitive rates, professional support, and flexible rental terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-yellow-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Instant Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300">
              Call: +1 (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMachinery;