import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Truck,
  Building,
  FileText,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Download
} from 'lucide-react';

// Mock rental data with same images as OurMachinery
const rentalData = [
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
    status: 'active',
    totalCost: 31500,
    paid: 15750,
    balance: 15750,
    location: 'Downtown Construction Site',
    supplier: 'CAT Heavy Equipment',
    operatorIncluded: true,
    deliveryStatus: 'delivered',
    nextPayment: '2024-01-20',
    documents: ['rental-agreement.pdf', 'safety-checklist.pdf']
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
    paid: 8400,
    balance: 0,
    location: 'Northside Residential Project',
    supplier: 'CAT Heavy Equipment',
    operatorIncluded: false,
    deliveryStatus: 'returned',
    nextPayment: null,
    documents: ['invoice-002.pdf', 'inspection-report.pdf']
  },
  {
    id: 'JN-2024-003',
    equipment: {
      name: 'Tower Crane L200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeDGf3S-eHR650Kjunicv6idISTgyYhAlVg&s',
      category: 'Lifting Equipment'
    },
    rentalPeriod: {
      start: '2024-01-25',
      end: '2024-02-01',
      duration: '7 days'
    },
    status: 'upcoming',
    totalCost: 5950,
    paid: 2975,
    balance: 2975,
    location: 'Commercial High-rise',
    supplier: 'Liebherr Cranes',
    operatorIncluded: true,
    deliveryStatus: 'scheduled',
    nextPayment: '2024-01-30',
    documents: ['rental-agreement-003.pdf']
  },
  {
    id: 'JN-2024-004',
    equipment: {
      name: 'Telehandler 12M',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyjkcBv06Mh0Lb-JQRL0tnNBT5dBtw6GzEQ&s',
      category: 'Lifting Equipment'
    },
    rentalPeriod: {
      start: '2024-01-05',
      end: '2024-01-08',
      duration: '3 days'
    },
    status: 'cancelled',
    totalCost: 1950,
    paid: 0,
    balance: 1950,
    location: 'Parking Lot Project',
    supplier: 'JCB Equipment',
    operatorIncluded: false,
    deliveryStatus: 'cancelled',
    nextPayment: null,
    documents: ['cancellation-notice.pdf']
  },
  {
    id: 'JN-2024-005',
    equipment: {
      name: 'Concrete Mixer Truck 10yd',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbE52EH1cjCnH_kKnoiYAqt8bI_p29b2pe2Q&s',
      category: 'Concrete Equipment'
    },
    rentalPeriod: {
      start: '2024-01-18',
      end: '2024-01-25',
      duration: '7 days'
    },
    status: 'active',
    totalCost: 18900,
    paid: 9450,
    balance: 9450,
    location: 'Bridge Construction Site',
    supplier: 'Volvo Trucks',
    operatorIncluded: true,
    deliveryStatus: 'delivered',
    nextPayment: '2024-01-23',
    documents: ['rental-agreement-005.pdf', 'delivery-receipt.pdf']
  },
  {
    id: 'JN-2024-006',
    equipment: {
      name: 'Articulated Dump Truck 40T',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIkvZteIQp4Mu2aYGc99AROsPnikkDQh4Jg&s',
      category: 'Hauling Equipment'
    },
    rentalPeriod: {
      start: '2024-01-12',
      end: '2024-01-19',
      duration: '7 days'
    },
    status: 'completed',
    totalCost: 28560,
    paid: 28560,
    balance: 0,
    location: 'Quarry Operations',
    supplier: 'Volvo Construction',
    operatorIncluded: true,
    deliveryStatus: 'returned',
    nextPayment: null,
    documents: ['invoice-006.pdf', 'inspection-report.pdf']
  },
  {
    id: 'JN-2024-007',
    equipment: {
      name: 'Backhoe Loader 4x4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmkM8eUn1hXMFw_vhTnXVBv6xCUf3lpXsBQ&s',
      category: 'Multi-Purpose'
    },
    rentalPeriod: {
      start: '2024-02-01',
      end: '2024-02-08',
      duration: '7 days'
    },
    status: 'upcoming',
    totalCost: 13440,
    paid: 6720,
    balance: 6720,
    location: 'Residential Development',
    supplier: 'CAT Equipment',
    operatorIncluded: false,
    deliveryStatus: 'scheduled',
    nextPayment: '2024-02-05',
    documents: ['rental-agreement-007.pdf']
  },
  {
    id: 'JN-2024-008',
    equipment: {
      name: 'Cement Mixer 5 Bag',
      image: 'https://3.imimg.com/data3/PI/WA/MY-11803156/5-bag-movable-concrete-mixer-plant.jpg',
      category: 'Construction Materials'
    },
    rentalPeriod: {
      start: '2024-01-20',
      end: '2024-01-27',
      duration: '7 days'
    },
    status: 'active',
    totalCost: 3150,
    paid: 1575,
    balance: 1575,
    location: 'Small Construction Site',
    supplier: 'Portable Mixers Inc',
    operatorIncluded: false,
    deliveryStatus: 'delivered',
    nextPayment: '2024-01-25',
    documents: ['rental-agreement-008.pdf']
  }
];

const MyRentals = () => {
  const [rentals] = useState(rentalData);
  const [filteredRentals, setFilteredRentals] = useState(rentalData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [expandedRental, setExpandedRental] = useState(null);
  const [sortBy, setSortBy] = useState('startDate');

  // Memoized stats calculation
  const stats = useMemo(() => {
    const activeRentals = rentals.filter(r => r.status === 'active').length;
    const upcomingRentals = rentals.filter(r => r.status === 'upcoming').length;
    const balanceDue = rentals.reduce((sum, rental) => sum + rental.balance, 0);
    const totalRentals = rentals.length;

    return { activeRentals, upcomingRentals, balanceDue, totalRentals };
  }, [rentals]);

  // Filter and sort rentals
  useEffect(() => {
    const filterAndSortRentals = () => {
      let results = rentals.filter(rental => {
        const matchesSearch = rental.equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            rental.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || rental.status === statusFilter;
        return matchesSearch && matchesStatus;
      });

      // Sort results
      results.sort((a, b) => {
        switch (sortBy) {
          case 'startDate':
            return new Date(b.rentalPeriod.start) - new Date(a.rentalPeriod.start);
          case 'cost':
            return b.totalCost - a.totalCost;
          case 'equipment':
            return a.equipment.name.localeCompare(b.equipment.name);
          default:
            return 0;
        }
      });

      return results;
    };

    setFilteredRentals(filterAndSortRentals());
  }, [searchTerm, statusFilter, sortBy, rentals]);

  // Stable handlers
  const toggleRentalExpand = useCallback((rentalId) => {
    setExpandedRental(prev => prev === rentalId ? null : rentalId);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleStatusFilterChange = useCallback((e) => {
    setStatusFilter(e.target.value);
  }, []);

  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  // Memoized status badge component
  const StatusBadge = React.memo(({ status }) => {
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      completed: { color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
      upcoming: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      cancelled: { color: 'bg-red-100 text-red-800', icon: XCircle }
    };
    
    const config = statusConfig[status] || statusConfig.active;
    const IconComponent = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
        <IconComponent size={16} />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  });

  // Memoized delivery status badge component
  const DeliveryStatusBadge = React.memo(({ status }) => {
    const statusConfig = {
      delivered: { color: 'bg-green-100 text-green-800', text: 'Delivered' },
      scheduled: { color: 'bg-blue-100 text-blue-800', text: 'Scheduled' },
      returned: { color: 'bg-gray-100 text-gray-800', text: 'Returned' },
      cancelled: { color: 'bg-red-100 text-red-800', text: 'Cancelled' }
    };
    
    const config = statusConfig[status] || statusConfig.scheduled;
    
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  });

  // Memoized rental card component
  const RentalCard = React.memo(({ rental, isExpanded, onToggle }) => {
    const daysUntilStart = Math.ceil((new Date(rental.rentalPeriod.start) - new Date()) / (1000 * 60 * 60 * 24));
    
    const handleViewDetails = useCallback(() => {
      console.log('View details for:', rental.id);
      // Navigate to rental details page or show modal
    }, [rental.id]);

    const handleMakePayment = useCallback(() => {
      console.log('Make payment for:', rental.id);
      // Open payment modal
    }, [rental.id]);

    const handleDownloadDocument = useCallback((documentName) => {
      console.log('Download document:', documentName);
      // Implement document download logic
    }, []);

    const handleDownloadAllDocuments = useCallback(() => {
      console.log('Download all documents for:', rental.id);
      // Implement bulk download logic
    }, [rental.id]);

    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <img 
                src={rental.equipment.image} 
                alt={rental.equipment.name}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{rental.equipment.name}</h3>
                <p className="text-gray-600 text-sm">{rental.equipment.category}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-gray-500">Rental ID: {rental.id}</span>
                  <StatusBadge status={rental.status} />
                </div>
              </div>
            </div>
            <button
              onClick={() => onToggle(rental.id)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Rental Period</p>
                <p className="font-semibold text-gray-900">{rental.rentalPeriod.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Total Cost</p>
                <p className="font-semibold text-gray-900">${rental.totalCost.toLocaleString()}</p>
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
              <Truck size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Delivery</p>
                <DeliveryStatusBadge status={rental.deliveryStatus} />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button 
              onClick={handleViewDetails}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
            >
              <FileText size={16} />
              View Details
            </button>
            {rental.status === 'active' && rental.balance > 0 && (
              <button 
                onClick={handleMakePayment}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                <DollarSign size={16} />
                Make Payment
              </button>
            )}
            {rental.documents.length > 0 && (
              <button 
                onClick={handleDownloadAllDocuments}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg font-semibold transition-colors"
              >
                <Download size={16} />
                Documents ({rental.documents.length})
              </button>
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="bg-gray-50 border-t border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rental Details */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Rental Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Supplier:</span>
                    <span className="font-semibold">{rental.supplier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Start Date:</span>
                    <span className="font-semibold">
                      {new Date(rental.rentalPeriod.start).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">End Date:</span>
                    <span className="font-semibold">
                      {new Date(rental.rentalPeriod.end).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Operator Included:</span>
                    <span className={rental.operatorIncluded ? "text-green-600 font-semibold" : "text-gray-600"}>
                      {rental.operatorIncluded ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Payment Information</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Cost:</span>
                    <span className="font-semibold">${rental.totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="text-green-600 font-semibold">${rental.paid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Balance Due:</span>
                    <span className={rental.balance > 0 ? "text-red-600 font-semibold" : "text-green-600 font-semibold"}>
                      ${rental.balance.toLocaleString()}
                    </span>
                  </div>
                  {rental.nextPayment && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Next Payment Due:</span>
                      <span className="font-semibold">
                        {new Date(rental.nextPayment).toLocaleDateString()}
                      </span>
                    </div>
                  )}
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
                        onClick={() => handleDownloadDocument(doc)}
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

              {/* Status Alerts */}
              {rental.status === 'upcoming' && daysUntilStart <= 3 && (
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertTriangle className="text-yellow-600" size={20} />
                    <div>
                      <p className="font-semibold text-yellow-800">Rental Starting Soon</p>
                      <p className="text-yellow-700 text-sm">
                        Your rental starts in {daysUntilStart} day{daysUntilStart !== 1 ? 's' : ''}. 
                        Please ensure the site is prepared for delivery.
                      </p>
                    </div>
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
            <h1 className="text-3xl font-bold text-gray-900">My Rentals</h1>
            <p className="text-gray-600 mt-1">Manage your construction equipment rentals</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Rentals</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.activeRentals}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.upcomingRentals}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Clock className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Balance Due</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">${stats.balanceDue.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <DollarSign className="text-orange-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Rentals</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalRentals}</p>
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
                placeholder="Search rentals by equipment or ID..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={statusFilter}
                onChange={handleStatusFilterChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="startDate">Sort by Date</option>
                <option value="cost">Sort by Cost</option>
                <option value="equipment">Sort by Equipment</option>
              </select>
            </div>
          </div>
        </div>

        {/* Rentals List */}
        <div className="space-y-6">
          {filteredRentals.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-gray-400 mb-4">
                <Building size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No rentals found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredRentals.map(rental => (
              <RentalCard 
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

export default MyRentals;