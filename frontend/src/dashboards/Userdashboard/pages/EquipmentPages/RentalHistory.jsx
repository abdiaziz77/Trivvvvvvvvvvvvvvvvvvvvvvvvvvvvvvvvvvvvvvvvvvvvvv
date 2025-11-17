import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  FileText,
  Download,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  BarChart3,
  TrendingUp,
  Repeat,
  Shield,
  Star,
  Building,
  Truck
} from 'lucide-react';

// Mock rental history data
const rentalHistoryData = [
  {
    id: 'JN-2024-001',
    equipment: {
      name: 'Hydraulic Excavator CAT 320',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWnwyFlXs6OKqfJiDJ5fcHKFKV-eMCJkTqA&s',
      category: 'Excavators'
    },
    rentalPeriod: {
      start: '2024-01-15',
      end: '2024-01-22',
      duration: '7 days'
    },
    status: 'completed',
    totalCost: 31500,
    supplier: 'CAT Heavy Equipment',
    location: 'Downtown Construction Site',
    operatorIncluded: true,
    rating: 5,
    review: 'Excellent equipment condition and professional service. Will rent again!',
    documents: ['rental-agreement.pdf', 'invoice-001.pdf', 'inspection-report.pdf']
  },
  {
    id: 'JN-2024-002',
    equipment: {
      name: 'Crawler Dozer CAT D6',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehArG3XSG_pxG8orKMFXjiWXhOY6fVo4O_g&s',
      category: 'Earth Moving'
    },
    rentalPeriod: {
      start: '2024-01-10',
      end: '2024-01-17',
      duration: '7 days'
    },
    status: 'completed',
    totalCost: 8400,
    supplier: 'CAT Heavy Equipment',
    location: 'Northside Residential Project',
    operatorIncluded: false,
    rating: 4,
    review: 'Good equipment but delivery was slightly delayed.',
    documents: ['invoice-002.pdf', 'inspection-report.pdf']
  },
  {
    id: 'JN-2023-045',
    equipment: {
      name: 'Tower Crane L200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeDGf3S-eHR650Kjunicv6idISTgyYhAlVg&s',
      category: 'Lifting Equipment'
    },
    rentalPeriod: {
      start: '2023-12-01',
      end: '2023-12-15',
      duration: '14 days'
    },
    status: 'completed',
    totalCost: 28500,
    supplier: 'Liebherr Cranes',
    location: 'Commercial High-rise',
    operatorIncluded: true,
    rating: 5,
    review: 'Outstanding crane performance and excellent operator support.',
    documents: ['rental-agreement-045.pdf', 'invoice-045.pdf']
  },
  {
    id: 'JN-2023-038',
    equipment: {
      name: 'Concrete Mixer Truck 10yd',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbE52EH1cjCnH_kKnoiYAqt8bI_p29b2pe2Q&s',
      category: 'Concrete Equipment'
    },
    rentalPeriod: {
      start: '2023-11-20',
      end: '2023-11-25',
      duration: '5 days'
    },
    status: 'completed',
    totalCost: 13500,
    supplier: 'Volvo Trucks',
    location: 'Bridge Construction Site',
    operatorIncluded: true,
    rating: 4,
    review: 'Reliable equipment, helped us meet tight deadlines.',
    documents: ['rental-agreement-038.pdf', 'invoice-038.pdf']
  },
  {
    id: 'JN-2023-029',
    equipment: {
      name: 'Articulated Dump Truck 40T',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIkvZteIQp4Mu2aYGc99AROsPnikkDQh4Jg&s',
      category: 'Hauling Equipment'
    },
    rentalPeriod: {
      start: '2023-10-15',
      end: '2023-10-22',
      duration: '7 days'
    },
    status: 'completed',
    totalCost: 18900,
    supplier: 'Volvo Construction',
    location: 'Quarry Operations',
    operatorIncluded: true,
    rating: 5,
    review: 'Perfect for our quarry operations. Highly recommended!',
    documents: ['invoice-029.pdf', 'inspection-report.pdf']
  },
  {
    id: 'JN-2023-022',
    equipment: {
      name: 'Backhoe Loader 4x4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmkM8eUn1hXMFw_vhTnXVBv6xCUf3lpXsBQ&s',
      category: 'Multi-Purpose'
    },
    rentalPeriod: {
      start: '2023-09-08',
      end: '2023-09-15',
      duration: '7 days'
    },
    status: 'completed',
    totalCost: 9600,
    supplier: 'CAT Equipment',
    location: 'Residential Development',
    operatorIncluded: false,
    rating: 3,
    review: 'Equipment had some minor issues but was functional.',
    documents: ['rental-agreement-022.pdf', 'invoice-022.pdf']
  }
];

const RentalHistory = () => {
  const [rentals] = useState(rentalHistoryData);
  const [filteredRentals, setFilteredRentals] = useState(rentalHistoryData);
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [expandedRental, setExpandedRental] = useState(null);
  const [sortBy, setSortBy] = useState('recent');

  // Memoized stats calculation
  const stats = useMemo(() => {
    const totalSpent = rentals.reduce((sum, rental) => sum + rental.totalCost, 0);
    const averageRating = rentals.reduce((sum, rental) => sum + rental.rating, 0) / rentals.length;
    const repeatSuppliers = [...new Set(rentals.map(r => r.supplier))].length;
    const totalRentalDays = rentals.reduce((sum, rental) => sum + parseInt(rental.rentalPeriod.duration), 0);

    return { totalSpent, averageRating, repeatSuppliers, totalRentalDays, totalRentals: rentals.length };
  }, [rentals]);

  // Filter and sort rentals
  useEffect(() => {
    const filterAndSortRentals = () => {
      let results = rentals.filter(rental => {
        const matchesSearch = rental.equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            rental.id.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesTime = timeFilter === 'all' || 
                          (timeFilter === 'last-month' && isLastMonth(rental.rentalPeriod.end)) ||
                          (timeFilter === 'last-3months' && isLast3Months(rental.rentalPeriod.end)) ||
                          (timeFilter === 'last-year' && isLastYear(rental.rentalPeriod.end));
        
        const matchesRating = ratingFilter === 'all' || rental.rating >= parseInt(ratingFilter);

        return matchesSearch && matchesTime && matchesRating;
      });

      // Sort results
      results.sort((a, b) => {
        switch (sortBy) {
          case 'recent':
            return new Date(b.rentalPeriod.end) - new Date(a.rentalPeriod.end);
          case 'cost-high':
            return b.totalCost - a.totalCost;
          case 'cost-low':
            return a.totalCost - b.totalCost;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });

      return results;
    };

    setFilteredRentals(filterAndSortRentals());
  }, [searchTerm, timeFilter, ratingFilter, sortBy, rentals]);

  // Date helper functions
  const isLastMonth = (date) => {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return new Date(date) >= lastMonth;
  };

  const isLast3Months = (date) => {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return new Date(date) >= threeMonthsAgo;
  };

  const isLastYear = (date) => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return new Date(date) >= oneYearAgo;
  };

  // Stable handlers
  const toggleRentalExpand = useCallback((rentalId) => {
    setExpandedRental(prev => prev === rentalId ? null : rentalId);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleTimeFilterChange = useCallback((e) => {
    setTimeFilter(e.target.value);
  }, []);

  const handleRatingFilterChange = useCallback((e) => {
    setRatingFilter(e.target.value);
  }, []);

  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  const handleRentAgain = useCallback((rentalId) => {
    console.log('Rent again:', rentalId);
    // Navigate to rental page or open rental modal
  }, []);

  const handleDownloadInvoice = useCallback((documentName) => {
    console.log('Download invoice:', documentName);
    // Implement download logic
  }, []);

  // Star rating component
  const StarRating = React.memo(({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  });

  // Memoized rental history card component
  const RentalHistoryCard = React.memo(({ rental, isExpanded, onToggle }) => {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        {/* Header */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <img 
                src={rental.equipment.image} 
                alt={rental.equipment.name}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{rental.equipment.name}</h3>
                    <p className="text-gray-600 text-sm">{rental.equipment.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-orange-600">${rental.totalCost.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Total Cost</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-sm text-gray-500">Rental ID: {rental.id}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Your Rating:</span>
                    <StarRating rating={rental.rating} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Rental Period</p>
                <p className="font-semibold text-gray-900">{rental.rentalPeriod.duration}</p>
                <p className="text-xs text-gray-500">
                  {new Date(rental.rentalPeriod.start).toLocaleDateString()} - {new Date(rental.rentalPeriod.end).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Building size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Supplier</p>
                <p className="font-semibold text-gray-900 text-sm">{rental.supplier}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold text-gray-900 text-sm">{rental.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Operator</p>
                <p className={rental.operatorIncluded ? "text-green-600 font-semibold" : "text-gray-600"}>
                  {rental.operatorIncluded ? "Included" : "Not Included"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button 
              onClick={() => onToggle(rental.id)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
            >
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {isExpanded ? 'Less Details' : 'More Details'}
            </button>
            <button 
              onClick={() => handleRentAgain(rental.id)}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
            >
              <Repeat size={16} />
              Rent Again
            </button>
            {rental.documents.length > 0 && (
              <button 
                onClick={() => handleDownloadInvoice(rental.documents[0])}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg font-semibold transition-colors"
              >
                <Download size={16} />
                Download Invoice
              </button>
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="bg-gray-50 border-t border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rental Review */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Your Review</h4>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <StarRating rating={rental.rating} />
                    <span className="text-sm text-gray-500">
                      {new Date(rental.rentalPeriod.end).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{rental.review}</p>
                </div>
              </div>

              {/* Equipment Details */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Equipment Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Equipment Type:</span>
                    <span className="font-semibold">{rental.equipment.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rental Duration:</span>
                    <span className="font-semibold">{rental.rentalPeriod.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Daily Rate:</span>
                    <span className="font-semibold">
                      ${(rental.totalCost / parseInt(rental.rentalPeriod.duration)).toFixed(0)}/day
                    </span>
                  </div>
                </div>
              </div>

              {/* Documents */}
              {rental.documents.length > 0 && (
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4">Documents</h4>
                  <div className="flex flex-wrap gap-2">
                    {rental.documents.map((doc, index) => (
                      <button
                        key={index}
                        onClick={() => handleDownloadInvoice(doc)}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <FileText size={16} className="text-gray-400" />
                        <span className="text-sm">{doc}</span>
                        <Download size={14} className="text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Rental History</h1>
            <p className="text-gray-600 mt-1">Track and manage your past equipment rentals</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Rentals</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalRentals}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <BarChart3 className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">${stats.totalSpent.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <DollarSign className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.averageRating.toFixed(1)}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Suppliers Used</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.repeatSuppliers}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Building className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search rental history by equipment or ID..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={timeFilter}
                onChange={handleTimeFilterChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">All Time</option>
                <option value="last-month">Last Month</option>
                <option value="last-3months">Last 3 Months</option>
                <option value="last-year">Last Year</option>
              </select>

              <select
                value={ratingFilter}
                onChange={handleRatingFilterChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
              </select>

              <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="recent">Most Recent</option>
                <option value="cost-high">Highest Cost</option>
                <option value="cost-low">Lowest Cost</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Rentals History List */}
        <div className="space-y-6">
          {filteredRentals.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-gray-400 mb-4">
                <FileText size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No rental history found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Browse Equipment
              </button>
            </div>
          ) : (
            filteredRentals.map(rental => (
              <RentalHistoryCard 
                key={rental.id} 
                rental={rental}
                isExpanded={expandedRental === rental.id}
                onToggle={toggleRentalExpand}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RentalHistory;