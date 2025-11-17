import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart,
  MapPin,
  Clock,
  CheckCircle,
  X,
  Calendar,
  User,
  FileText,
  Building,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Shield,
  CheckCircle2
} from 'lucide-react';

// Construction equipment data for JengaNow
const constructionEquipment = [
  // Earth Moving Equipment
  {
    id: 1,
    name: "Hydraulic Excavator CAT 320",
    category: "Earth Moving",
    brand: "Caterpillar",
    price: 5100,
    priceUnit: "week",
    dailyRate: 850,
    weeklyRate: 5100,
    monthlyRate: 18000,
    rating: 4.8,
    reviews: 89,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWnwyFlXs6OKqfJiDJ5fcHKFKV-eMCJkTqA&s",
    location: "Main Depot",
    availability: "Available Now",
    specifications: {
      capacity: "2.5 cubic yards",
      power: "350 HP",
      weight: "45 tons",
      maxDepth: "25 feet",
      fuelConsumption: "8-12 gal/hr",
      operatingWeight: "45,200 lbs",
      year: "2023",
      fuelType: "Diesel"
    },
    description: "The Caterpillar 320 Excavator is a versatile and powerful machine designed for heavy-duty construction work. With advanced hydraulics and excellent digging depth, it's perfect for foundation work, trenching, and material handling.",
    features: [
      "Advanced hydraulics",
      "Climate controlled cabin",
      "GPS guidance",
      "Quick coupler system",
      "Backup camera",
      "Low fuel consumption",
      "Easy maintenance access"
    ],
    featured: true,
    operatorIncluded: true,
    deposit: 5000,
    minimumRental: "3 days"
  },
  {
    id: 2,
    name: "Crawler Dozer CAT D6",
    category: "Earth Moving",
    brand: "Caterpillar",
    price: 4320,
    priceUnit: "week",
    dailyRate: 720,
    weeklyRate: 4320,
    monthlyRate: 15000,
    rating: 4.7,
    reviews: 67,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehArG3XSG_pxG8orKMFXjiWXhOY6fVo4O_g&s",
    location: "North Yard",
    availability: "Available Now",
    specifications: {
      capacity: "12-foot blade",
      power: "410 HP",
      weight: "65 tons",
      bladeType: "Semi-U",
      trackLength: "12.5 ft",
      year: "2023",
      fuelType: "Diesel"
    },
    description: "The CAT D6 Crawler Dozer offers exceptional power and precision for earthmoving operations. With advanced grading technology and robust construction.",
    features: [
      "Ripper attachment",
      "Laser grading system",
      "Enhanced visibility",
      "Noise reduction",
      "Advanced hydraulics",
      "Comfortable cabin"
    ],
    featured: true,
    operatorIncluded: true,
    deposit: 4500,
    minimumRental: "3 days"
  },
  {
    id: 3,
    name: "Tower Crane L200",
    category: "Lifting Equipment",
    brand: "Liebherr",
    price: 7200,
    priceUnit: "week",
    dailyRate: 1200,
    weeklyRate: 7200,
    monthlyRate: 25000,
    rating: 4.9,
    reviews: 45,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeDGf3S-eHR650Kjunicv6idISTgyYhAlVg&s",
    location: "Downtown Depot",
    availability: "Available Tomorrow",
    specifications: {
      capacity: "20 tons",
      maxHeight: "265 feet",
      jibLength: "230 feet",
      power: "Electric",
      hoistingSpeed: "400 ft/min",
      year: "2023"
    },
    description: "High-capacity tower crane designed for large construction projects with exceptional lifting capabilities and advanced safety features.",
    features: [
      "Remote control",
      "Load moment indicator",
      "Anti-collision system",
      "Weather monitoring",
      "Advanced safety systems"
    ],
    featured: false,
    operatorIncluded: true,
    deposit: 15000,
    minimumRental: "1 week"
  },
  {
    id: 4,
    name: "Telehandler 12M",
    category: "Lifting Equipment",
    brand: "JCB",
    price: 2280,
    priceUnit: "week",
    dailyRate: 380,
    weeklyRate: 2280,
    monthlyRate: 8000,
    rating: 4.5,
    reviews: 92,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyjkcBv06Mh0Lb-JQRL0tnNBT5dBtw6GzEQ&s",
    location: "Westside Yard",
    availability: "Available Now",
    specifications: {
      liftCapacity: "6,000 lbs",
      maxHeight: "56 feet",
      power: "130 HP",
      reach: "42 feet",
      year: "2023",
      fuelType: "Diesel"
    },
    description: "Versatile telehandler with excellent reach and lifting capacity, perfect for material handling in construction and industrial applications.",
    features: [
      "4WD capability",
      "Stabilizer legs",
      "Multiple attachments",
      "Safety sensors",
      "Comfortable cabin"
    ],
    featured: false,
    operatorIncluded: false,
    deposit: 3000,
    minimumRental: "2 days"
  },
  {
    id: 5,
    name: "Concrete Mixer Truck 10yd",
    category: "Concrete Equipment",
    brand: "Volvo",
    price: 2700,
    priceUnit: "week",
    dailyRate: 450,
    weeklyRate: 2700,
    monthlyRate: 9500,
    rating: 4.4,
    reviews: 78,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbE52EH1cjCnH_kKnoiYAqt8bI_p29b2pe2Q&s",
    location: "Central Mixing Plant",
    availability: "Available Now",
    specifications: {
      capacity: "10 cubic yards",
      drumSpeed: "0-14 RPM",
      engine: "300 HP Diesel",
      waterTank: "200 gallons",
      year: "2023"
    },
    description: "Reliable concrete mixer truck with large capacity and efficient mixing system for construction projects of all sizes.",
    features: [
      "Auto lubrication",
      "Drum rotation control",
      "Water metering system",
      "Rear camera",
      "Comfortable cabin"
    ],
    featured: false,
    operatorIncluded: true,
    deposit: 4000,
    minimumRental: "3 days"
  },
  {
    id: 6,
    name: "Articulated Dump Truck 40T",
    category: "Hauling Equipment",
    brand: "Volvo",
    price: 4080,
    priceUnit: "week",
    dailyRate: 680,
    weeklyRate: 4080,
    monthlyRate: 14000,
    rating: 4.6,
    reviews: 124,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIkvZteIQp4Mu2aYGc99AROsPnikkDQh4Jg&s",
    location: "Quarry Site",
    availability: "Available Now",
    specifications: {
      capacity: "40 tons",
      engine: "550 HP",
      transmission: "Automatic",
      topSpeed: "35 mph",
      year: "2023",
      fuelType: "Diesel"
    },
    description: "Heavy-duty articulated dump truck designed for rough terrain and large payload capacity with excellent maneuverability.",
    features: [
      "All-wheel drive",
      "Load weighing system",
      "Traction control",
      "Comfort cabin",
      "Advanced suspension"
    ],
    featured: true,
    operatorIncluded: true,
    deposit: 6000,
    minimumRental: "3 days"
  },
  {
    id: 7,
    name: "Backhoe Loader 4x4",
    category: "Multi-Purpose",
    brand: "Caterpillar",
    price: 1920,
    priceUnit: "week",
    dailyRate: 320,
    weeklyRate: 1920,
    monthlyRate: 6800,
    rating: 4.3,
    reviews: 156,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmkM8eUn1hXMFw_vhTnXVBv6xCUf3lpXsBQ&s",
    location: "Main Depot",
    availability: "Available Now",
    specifications: {
      digDepth: "18 feet",
      loaderCapacity: "3.5 cubic yards",
      power: "110 HP",
      breakoutForce: "12,000 lbs",
      year: "2023",
      fuelType: "Diesel"
    },
    description: "Versatile backhoe loader perfect for multiple construction tasks including digging, loading, and material handling.",
    features: [
      "4-in-1 bucket",
      "Extendable dipper",
      "Quick attach system",
      "Enhanced stability",
      "Comfortable controls"
    ],
    featured: false,
    operatorIncluded: false,
    deposit: 2500,
    minimumRental: "2 days"
  },
  {
    id: 8,
    name: "Cement Mixer 5 Bag",
    category: "Construction Materials",
    brand: "Portable Mixers",
    price: 450,
    priceUnit: "week",
    dailyRate: 85,
    weeklyRate: 450,
    monthlyRate: 1500,
    rating: 4.2,
    reviews: 203,
    image: "https://3.imimg.com/data3/PI/WA/MY-11803156/5-bag-movable-concrete-mixer-plant.jpg",
    location: "Tool Rental Center",
    availability: "Available Now",
    specifications: {
      capacity: "5 bags",
      engine: "6.5 HP",
      drumSize: "9 cubic ft",
      weight: "180 lbs",
      year: "2023"
    },
    description: "Portable cement mixer ideal for small to medium concrete mixing jobs on construction sites and DIY projects.",
    features: [
      "Portable",
      "Easy to operate",
      "Durable construction",
      "Low maintenance",
      "Affordable rental"
    ],
    featured: false,
    operatorIncluded: false,
    deposit: 500,
    minimumRental: "1 day"
  }
];

const BrowseEquipment = () => {
  const [equipment] = useState(constructionEquipment);
  const [filteredEquipment, setFilteredEquipment] = useState(constructionEquipment);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [wishlist, setWishlist] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpecs, setSelectedSpecs] = useState({
    operatorIncluded: false,
    availableNow: false,
    featuredOnly: false
  });
  
  // Rental Process States
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [showEquipmentDetails, setShowEquipmentDetails] = useState(false);
  const [rentalStep, setRentalStep] = useState(1);
  
  // Stable form data initialization
  const initialFormData = useMemo(() => ({
    startDate: '',
    endDate: '',
    duration: '',
    projectName: '',
    siteAddress: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    specialRequirements: '',
    operatorRequired: false,
    paymentPlan: 'daily',
    insuranceOption: 'basic'
  }), []);

  const [rentalFormData, setRentalFormData] = useState(initialFormData);

  // Memoized categories
  const categories = useMemo(() => 
    ['All', ...new Set(constructionEquipment.map(item => item.category))],
    []
  );

  // Filter and sort equipment
  useEffect(() => {
    const results = equipment.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      const matchesOperator = !selectedSpecs.operatorIncluded || item.operatorIncluded;
      const matchesAvailability = !selectedSpecs.availableNow || item.availability === 'Available Now';
      const matchesFeatured = !selectedSpecs.featuredOnly || item.featured;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesOperator && 
             matchesAvailability && matchesFeatured;
    });

    const sortedResults = [...results].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredEquipment(sortedResults);
  }, [searchTerm, selectedCategory, priceRange, sortBy, selectedSpecs, equipment]);

  // Stable handlers
  const toggleWishlist = useCallback((equipmentId) => {
    setWishlist(prev => 
      prev.includes(equipmentId) 
        ? prev.filter(id => id !== equipmentId)
        : [...prev, equipmentId]
    );
  }, []);

  const initiateRental = useCallback((equipment) => {
    setSelectedEquipment(equipment);
    setShowEquipmentDetails(true);
    setRentalStep(1);
    setRentalFormData({
      ...initialFormData,
      operatorRequired: equipment.operatorIncluded,
      duration: equipment.minimumRental
    });
  }, [initialFormData]);

  const handleFieldChange = useCallback((field, value) => {
    setRentalFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const calculateRentalCost = useCallback(() => {
    if (!selectedEquipment || !rentalFormData.startDate || !rentalFormData.endDate) return 0;
    
    const start = new Date(rentalFormData.startDate);
    const end = new Date(rentalFormData.endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    if (days <= 0) return 0;

    switch (rentalFormData.paymentPlan) {
      case 'daily':
        return selectedEquipment.dailyRate * days;
      case 'weekly':
        const weeks = Math.ceil(days / 7);
        return selectedEquipment.weeklyRate * weeks;
      case 'monthly':
        const months = Math.ceil(days / 30);
        return selectedEquipment.monthlyRate * months;
      default:
        return selectedEquipment.dailyRate * days;
    }
  }, [selectedEquipment, rentalFormData.startDate, rentalFormData.endDate, rentalFormData.paymentPlan]);

  const calculateInsuranceCost = useCallback(() => {
    const baseCost = calculateRentalCost();
    switch (rentalFormData.insuranceOption) {
      case 'basic':
        return baseCost * 0.05;
      case 'premium':
        return baseCost * 0.1;
      default:
        return 0;
    }
  }, [calculateRentalCost, rentalFormData.insuranceOption]);

  const nextStep = useCallback(() => {
    setRentalStep(prev => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setRentalStep(prev => prev - 1);
  }, []);

  const submitRentalRequest = useCallback((e) => {
    e.preventDefault();
    
    if (!selectedEquipment) return;
    
    const rentalCost = calculateRentalCost();
    const insuranceCost = calculateInsuranceCost();
    const totalCost = rentalCost + insuranceCost + selectedEquipment.deposit;
    
    console.log('Rental Request:', {
      equipment: selectedEquipment,
      rentalDetails: rentalFormData,
      costs: {
        rental: rentalCost,
        insurance: insuranceCost,
        deposit: selectedEquipment.deposit,
        total: totalCost
      }
    });
    
    alert('Rental request submitted successfully! Our team will contact you within 24 hours.');
    setShowEquipmentDetails(false);
    setSelectedEquipment(null);
    setRentalStep(1);
    setRentalFormData(initialFormData);
  }, [selectedEquipment, calculateRentalCost, calculateInsuranceCost, rentalFormData, initialFormData]);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('All');
    setPriceRange([0, 8000]);
    setSelectedSpecs({
      operatorIncluded: false,
      availableNow: false,
      featuredOnly: false
    });
  }, []);

  // Memoized StarRating component
  const StarRating = React.memo(({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating.toFixed(1)})</span>
      </div>
    );
  });

  // Equipment Details Modal
  const EquipmentDetailsModal = () => {
    if (!selectedEquipment) return null;

    const rentalCost = calculateRentalCost();
    const insuranceCost = calculateInsuranceCost();
    const totalCost = rentalCost + insuranceCost + selectedEquipment.deposit;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Equipment Details</h2>
              <button
                onClick={() => setShowEquipmentDetails(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="px-6 pt-6">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${rentalStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  <CheckCircle2 size={20} />
                </div>
                <div className={`w-20 h-1 ${rentalStep >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${rentalStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  <User size={20} />
                </div>
                <div className={`w-20 h-1 ${rentalStep >= 3 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${rentalStep >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  <CreditCard size={20} />
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 max-w-md mx-auto">
              <span className={rentalStep >= 1 ? 'text-orange-500 font-semibold' : ''}>Equipment Details</span>
              <span className={rentalStep >= 2 ? 'text-orange-500 font-semibold' : ''}>Personal Info</span>
              <span className={rentalStep >= 3 ? 'text-orange-500 font-semibold' : ''}>Payment</span>
            </div>
          </div>

          <form onSubmit={submitRentalRequest} className="p-6">
            {rentalStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={selectedEquipment.image} 
                      alt={selectedEquipment.name}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedEquipment.name}</h3>
                      <p className="text-gray-600 mb-4">{selectedEquipment.brand} • {selectedEquipment.category}</p>
                      <StarRating rating={selectedEquipment.rating} />
                      <span className="text-sm text-gray-600 ml-2">{selectedEquipment.reviews} reviews</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Description</h4>
                      <p className="text-gray-600">{selectedEquipment.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {selectedEquipment.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle size={16} className="text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedEquipment.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Select Rental Period</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        value={rentalFormData.startDate}
                        onChange={(e) => handleFieldChange('startDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Date *
                      </label>
                      <input
                        type="date"
                        value={rentalFormData.endDate}
                        onChange={(e) => handleFieldChange('endDate', e.target.value)}
                        min={rentalFormData.startDate || new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Continue to Personal Info
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {rentalStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Name *
                    </label>
                    <input
                      type="text"
                      value={rentalFormData.projectName}
                      onChange={(e) => handleFieldChange('projectName', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={rentalFormData.companyName}
                      onChange={(e) => handleFieldChange('companyName', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Address *
                    </label>
                    <input
                      type="text"
                      value={rentalFormData.siteAddress}
                      onChange={(e) => handleFieldChange('siteAddress', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      value={rentalFormData.contactPerson}
                      onChange={(e) => handleFieldChange('contactPerson', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={rentalFormData.phoneNumber}
                      onChange={(e) => handleFieldChange('phoneNumber', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={rentalFormData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requirements
                    </label>
                    <textarea
                      value={rentalFormData.specialRequirements}
                      onChange={(e) => handleFieldChange('specialRequirements', e.target.value)}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Any special delivery requirements, site conditions, or additional needs..."
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Continue to Payment
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {rentalStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Options</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Select Payment Plan</h4>
                    <div className="space-y-3">
                      {['daily', 'weekly', 'monthly'].map((plan) => (
                        <label key={plan} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="paymentPlan"
                            value={plan}
                            checked={rentalFormData.paymentPlan === plan}
                            onChange={(e) => handleFieldChange('paymentPlan', e.target.value)}
                            className="text-orange-500 focus:ring-orange-500"
                          />
                          <div className="ml-3">
                            <span className="font-semibold capitalize">{plan}</span>
                            <p className="text-sm text-gray-600">
                              {plan === 'daily' && `$${selectedEquipment.dailyRate}/day - Most flexible`}
                              {plan === 'weekly' && `$${selectedEquipment.weeklyRate}/week - Save 15%`}
                              {plan === 'monthly' && `$${selectedEquipment.monthlyRate}/month - Save 30%`}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Insurance Options</h4>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="insuranceOption"
                          value="basic"
                          checked={rentalFormData.insuranceOption === 'basic'}
                          onChange={(e) => handleFieldChange('insuranceOption', e.target.value)}
                          className="text-orange-500 focus:ring-orange-500"
                        />
                        <div className="ml-3">
                          <span className="font-semibold">Basic Insurance</span>
                          <p className="text-sm text-gray-600">Covers basic damages and theft (5% of rental cost)</p>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="insuranceOption"
                          value="premium"
                          checked={rentalFormData.insuranceOption === 'premium'}
                          onChange={(e) => handleFieldChange('insuranceOption', e.target.value)}
                          className="text-orange-500 focus:ring-orange-500"
                        />
                        <div className="ml-3">
                          <span className="font-semibold">Premium Insurance</span>
                          <p className="text-sm text-gray-600">Full coverage including accidents and natural disasters (10% of rental cost)</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Rental Cost Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Rental Cost ({rentalFormData.paymentPlan}):</span>
                      <span className="font-semibold">${rentalCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance ({rentalFormData.insuranceOption}):</span>
                      <span className="font-semibold">${insuranceCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Refundable Deposit:</span>
                      <span className="font-semibold">${selectedEquipment.deposit}</span>
                    </div>
                    <div className="flex justify-between border-t border-orange-200 pt-3">
                      <span className="font-semibold text-lg">Total Due:</span>
                      <span className="font-semibold text-orange-600 text-lg">${totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold"
                  >
                    <ArrowLeft size={20} />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Shield size={20} />
                    Submit Rental Request
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  };

  // Memoized EquipmentCard component
  const EquipmentCard = React.memo(({ item, onRentalInit, onWishlistToggle, isWishlisted }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
              Featured
            </span>
          </div>
        )}
        <button 
          onClick={() => onWishlistToggle(item.id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          <Heart 
            size={20} 
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {item.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3">{item.brand}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin size={16} />
              {item.location}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Clock size={16} />
              {item.availability}
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Operator Included:</span>
            <span className={item.operatorIncluded ? "text-green-600 font-semibold" : "text-gray-400"}>
              {item.operatorIncluded ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Deposit:</span>
            <span className="font-semibold">${item.deposit}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Min. Rental:</span>
            <span className="font-semibold">{item.minimumRental}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <StarRating rating={item.rating} />
          <span className="text-sm text-gray-600">{item.reviews} reviews</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">${item.price}</span>
            <span className="text-gray-600">/{item.priceUnit}</span>
          </div>
          <button
            onClick={() => onRentalInit(item)}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            <FileText size={18} />
            Rent Now
          </button>
        </div>
      </div>
    </div>
  ));

  // Memoized EquipmentListItem component
  const EquipmentListItem = React.memo(({ item, onRentalInit, onWishlistToggle, isWishlisted }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-48 h-32 object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-1">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.brand} • {item.category}</p>
            </div>
            <div className="flex items-center gap-2">
              {item.featured && (
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  Featured
                </span>
              )}
              <button 
                onClick={() => onWishlistToggle(item.id)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <Heart 
                  size={20} 
                  className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} />
              {item.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={16} />
              {item.availability}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User size={16} />
              Operator: {item.operatorIncluded ? "Included" : "Not Included"}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle size={16} />
              Deposit: ${item.deposit}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <StarRating rating={item.rating} />
              <span className="text-sm text-gray-600">{item.reviews} reviews</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">${item.price}</div>
                <div className="text-gray-600">/{item.priceUnit}</div>
              </div>
              <button
                onClick={() => onRentalInit(item)}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <FileText size={18} />
                Request Rental
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">JengaNow Equipment</h1>
              <p className="text-gray-600 mt-1">Browse and rent construction equipment</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Professional equipment rental for construction projects
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search equipment by name, brand, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List size={20} />
                </button>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter size={20} />
                Filters
                {Object.values(selectedSpecs).some(Boolean) && (
                  <span className="bg-orange-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {Object.values(selectedSpecs).filter(Boolean).length}
                  </span>
                )}
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="8000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>

                {/* Checkbox Filters */}
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSpecs.operatorIncluded}
                      onChange={(e) => setSelectedSpecs(prev => ({
                        ...prev,
                        operatorIncluded: e.target.checked
                      }))}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Operator Included</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSpecs.availableNow}
                      onChange={(e) => setSelectedSpecs(prev => ({
                        ...prev,
                        availableNow: e.target.checked
                      }))}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Available Now</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSpecs.featuredOnly}
                      onChange={(e) => setSelectedSpecs(prev => ({
                        ...prev,
                        featuredOnly: e.target.checked
                      }))}
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Featured Only</span>
                  </label>
                </div>

                {/* Active Filters Display */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Active Filters</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== 'All' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Category: {selectedCategory}
                        <button
                          onClick={() => setSelectedCategory('All')}
                          className="ml-1 hover:bg-blue-200 rounded-full"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    )}
                    {selectedSpecs.operatorIncluded && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        With Operator
                        <button
                          onClick={() => setSelectedSpecs(prev => ({ ...prev, operatorIncluded: false }))}
                          className="ml-1 hover:bg-green-200 rounded-full"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    )}
                    {selectedSpecs.availableNow && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Available Now
                        <button
                          onClick={() => setSelectedSpecs(prev => ({ ...prev, availableNow: false }))}
                          className="ml-1 hover:bg-purple-200 rounded-full"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Construction Equipment ({filteredEquipment.length} items)
            </h2>
            <p className="text-gray-600 mt-1">
              {searchTerm && `Search results for "${searchTerm}"`}
            </p>
          </div>
          <div className="text-sm text-gray-600">
            Sorted by: {sortBy === 'name' ? 'Name' : 
                      sortBy === 'price-low' ? 'Price: Low to High' :
                      sortBy === 'price-high' ? 'Price: High to Low' : 'Rating'}
          </div>
        </div>

        {/* Equipment Grid/List */}
        {filteredEquipment.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No equipment found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map(item => (
              <EquipmentCard 
                key={item.id} 
                item={item}
                onRentalInit={initiateRental}
                onWishlistToggle={toggleWishlist}
                isWishlisted={wishlist.includes(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredEquipment.map(item => (
              <EquipmentListItem 
                key={item.id} 
                item={item}
                onRentalInit={initiateRental}
                onWishlistToggle={toggleWishlist}
                isWishlisted={wishlist.includes(item.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Equipment Details Modal */}
      {showEquipmentDetails && <EquipmentDetailsModal />}
    </div>
  );
};

export default BrowseEquipment;