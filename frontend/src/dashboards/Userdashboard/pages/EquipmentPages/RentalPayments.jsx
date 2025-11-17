import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Download,
  FileText,
  Building,
  Truck,
  MapPin,
  Shield,
  Eye,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Receipt,
  Banknote,
  Wallet,
  QrCode
} from 'lucide-react';

// Mock payment data
const paymentData = [
  {
    id: 'PAY-2024-001',
    rentalId: 'JN-2024-001',
    equipment: {
      name: 'Hydraulic Excavator CAT 320',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWnwyFlXs6OKqfJiDJ5fcHKFKV-eMCJkTqA&s'
    },
    amount: 15750,
    dueDate: '2024-01-20',
    status: 'pending',
    paymentMethod: 'credit_card',
    type: 'installment',
    installmentNumber: 2,
    totalInstallments: 2,
    createdAt: '2024-01-15',
    scheduledDate: null,
    paidDate: null,
    lateFee: 0,
    documents: ['invoice-001.pdf', 'payment-receipt-001.pdf']
  },
  {
    id: 'PAY-2024-002',
    rentalId: 'JN-2024-005',
    equipment: {
      name: 'Concrete Mixer Truck 10yd',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbE52EH1cjCnH_kKnoiYAqt8bI_p29b2pe2Q&s'
    },
    amount: 9450,
    dueDate: '2024-01-23',
    status: 'scheduled',
    paymentMethod: 'bank_transfer',
    type: 'installment',
    installmentNumber: 2,
    totalInstallments: 2,
    createdAt: '2024-01-18',
    scheduledDate: '2024-01-22',
    paidDate: null,
    lateFee: 0,
    documents: ['invoice-005.pdf']
  },
  {
    id: 'PAY-2024-003',
    rentalId: 'JN-2024-008',
    equipment: {
      name: 'Cement Mixer 5 Bag',
      image: 'https://3.imimg.com/data3/PI/WA/MY-11803156/5-bag-movable-concrete-mixer-plant.jpg'
    },
    amount: 1575,
    dueDate: '2024-01-25',
    status: 'pending',
    paymentMethod: null,
    type: 'final_payment',
    installmentNumber: 2,
    totalInstallments: 2,
    createdAt: '2024-01-20',
    scheduledDate: null,
    paidDate: null,
    lateFee: 0,
    documents: ['invoice-008.pdf']
  },
  {
    id: 'PAY-2024-004',
    rentalId: 'JN-2024-002',
    equipment: {
      name: 'Crawler Dozer CAT D6',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehArG3XSG_pxG8orKMFXjiWXhOY6fVo4O_g&s'
    },
    amount: 8400,
    dueDate: '2024-01-17',
    status: 'completed',
    paymentMethod: 'credit_card',
    type: 'final_payment',
    installmentNumber: 2,
    totalInstallments: 2,
    createdAt: '2024-01-10',
    scheduledDate: null,
    paidDate: '2024-01-16',
    lateFee: 0,
    documents: ['invoice-002.pdf', 'receipt-002.pdf']
  },
  {
    id: 'PAY-2024-005',
    rentalId: 'JN-2024-006',
    equipment: {
      name: 'Articulated Dump Truck 40T',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIkvZteIQp4Mu2aYGc99AROsPnikkDQh4Jg&s'
    },
    amount: 14280,
    dueDate: '2024-01-19',
    status: 'completed',
    paymentMethod: 'bank_transfer',
    type: 'installment',
    installmentNumber: 2,
    totalInstallments: 2,
    createdAt: '2024-01-12',
    scheduledDate: null,
    paidDate: '2024-01-18',
    lateFee: 0,
    documents: ['invoice-006.pdf', 'receipt-006.pdf']
  },
  {
    id: 'PAY-2024-006',
    rentalId: 'JN-2024-003',
    equipment: {
      name: 'Tower Crane L200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeDGf3S-eHR650Kjunicv6idISTgyYhAlVg&s'
    },
    amount: 2975,
    dueDate: '2024-01-30',
    status: 'upcoming',
    paymentMethod: null,
    type: 'deposit',
    installmentNumber: 1,
    totalInstallments: 2,
    createdAt: '2024-01-25',
    scheduledDate: null,
    paidDate: null,
    lateFee: 0,
    documents: ['invoice-003.pdf']
  },
  {
    id: 'PAY-2024-007',
    rentalId: 'JN-2024-007',
    equipment: {
      name: 'Backhoe Loader 4x4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmkM8eUn1hXMFw_vhTnXVBv6xCUf3lpXsBQ&s'
    },
    amount: 6720,
    dueDate: '2024-02-05',
    status: 'upcoming',
    paymentMethod: null,
    type: 'deposit',
    installmentNumber: 1,
    totalInstallments: 2,
    createdAt: '2024-02-01',
    scheduledDate: null,
    paidDate: null,
    lateFee: 0,
    documents: ['invoice-007.pdf']
  },
  {
    id: 'PAY-2024-008',
    rentalId: 'JN-2024-004',
    equipment: {
      name: 'Telehandler 12M',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyjkcBv06Mh0Lb-JQRL0tnNBT5dBtw6GzEQ&s'
    },
    amount: 1950,
    dueDate: '2024-01-08',
    status: 'cancelled',
    paymentMethod: null,
    type: 'deposit',
    installmentNumber: 1,
    totalInstallments: 1,
    createdAt: '2024-01-05',
    scheduledDate: null,
    paidDate: null,
    lateFee: 0,
    documents: ['cancellation-notice.pdf']
  }
];

const RentalPayments = () => {
  const [payments] = useState(paymentData);
  const [filteredPayments, setFilteredPayments] = useState(paymentData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paymentMethodFilter, setPaymentMethodFilter] = useState('all');
  const [expandedPayment, setExpandedPayment] = useState(null);
  const [sortBy, setSortBy] = useState('dueDate');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentForm, setPaymentForm] = useState({
    method: 'credit_card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    saveCard: false
  });

  // Memoized stats calculation
  const stats = useMemo(() => {
    const totalPending = payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0);
    const totalUpcoming = payments.filter(p => p.status === 'upcoming').reduce((sum, p) => sum + p.amount, 0);
    const totalCompleted = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0);
    const overduePayments = payments.filter(p => 
      p.status === 'pending' && new Date(p.dueDate) < new Date()
    ).length;

    return { totalPending, totalUpcoming, totalCompleted, overduePayments };
  }, [payments]);

  // Filter and sort payments
  useEffect(() => {
    const filterAndSortPayments = () => {
      let results = payments.filter(payment => {
        const matchesSearch = payment.equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            payment.rentalId.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
        const matchesMethod = paymentMethodFilter === 'all' || payment.paymentMethod === paymentMethodFilter;
        
        return matchesSearch && matchesStatus && matchesMethod;
      });

      // Sort results
      results.sort((a, b) => {
        switch (sortBy) {
          case 'dueDate':
            return new Date(a.dueDate) - new Date(b.dueDate);
          case 'amount':
            return b.amount - a.amount;
          case 'created':
            return new Date(b.createdAt) - new Date(a.createdAt);
          default:
            return 0;
        }
      });

      return results;
    };

    setFilteredPayments(filterAndSortPayments());
  }, [searchTerm, statusFilter, paymentMethodFilter, sortBy, payments]);

  // Stable handlers
  const togglePaymentExpand = useCallback((paymentId) => {
    setExpandedPayment(prev => prev === paymentId ? null : paymentId);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleStatusFilterChange = useCallback((e) => {
    setStatusFilter(e.target.value);
  }, []);

  const handlePaymentMethodFilterChange = useCallback((e) => {
    setPaymentMethodFilter(e.target.value);
  }, []);

  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  const handleMakePayment = useCallback((payment) => {
    setSelectedPayment(payment);
    setShowPaymentModal(true);
  }, []);

  const handleSchedulePayment = useCallback((payment) => {
    console.log('Schedule payment:', payment.id);
    // Implement schedule payment logic
    alert(`Payment ${payment.id} scheduled for ${payment.dueDate}`);
  }, []);

  const handleDownloadInvoice = useCallback((documentName) => {
    console.log('Download invoice:', documentName);
    // Implement download logic
  }, []);

  const handlePaymentFormSubmit = useCallback((e) => {
    e.preventDefault();
    if (!selectedPayment) return;

    console.log('Processing payment:', {
      payment: selectedPayment,
      formData: paymentForm
    });

    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment of $${selectedPayment.amount} processed successfully!`);
      setShowPaymentModal(false);
      setSelectedPayment(null);
      setPaymentForm({
        method: 'credit_card',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: '',
        saveCard: false
      });
    }, 2000);
  }, [selectedPayment, paymentForm]);

  const handleFieldChange = useCallback((field, value) => {
    setPaymentForm(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Memoized status badge component
  const StatusBadge = React.memo(({ status, dueDate }) => {
    const isOverdue = status === 'pending' && new Date(dueDate) < new Date();
    
    const statusConfig = {
      pending: { 
        color: isOverdue ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800', 
        icon: isOverdue ? AlertTriangle : Clock,
        text: isOverdue ? 'Overdue' : 'Pending'
      },
      scheduled: { color: 'bg-blue-100 text-blue-800', icon: Calendar, text: 'Scheduled' },
      completed: { color: 'bg-green-100 text-green-800', icon: CheckCircle, text: 'Completed' },
      upcoming: { color: 'bg-purple-100 text-purple-800', icon: Clock, text: 'Upcoming' },
      cancelled: { color: 'bg-gray-100 text-gray-800', icon: AlertTriangle, text: 'Cancelled' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    const IconComponent = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
        <IconComponent size={16} />
        {config.text}
      </span>
    );
  });

  // Memoized payment type badge
  const PaymentTypeBadge = React.memo(({ type }) => {
    const typeConfig = {
      deposit: { color: 'bg-blue-100 text-blue-800', text: 'Deposit' },
      installment: { color: 'bg-orange-100 text-orange-800', text: 'Installment' },
      final_payment: { color: 'bg-green-100 text-green-800', text: 'Final Payment' },
      late_fee: { color: 'bg-red-100 text-red-800', text: 'Late Fee' }
    };
    
    const config = typeConfig[type] || typeConfig.installment;
    
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  });

  // Memoized payment card component
  const PaymentCard = React.memo(({ payment, isExpanded, onToggle, onPay, onSchedule, onDownload }) => {
    const isOverdue = payment.status === 'pending' && new Date(payment.dueDate) < new Date();
    const daysUntilDue = Math.ceil((new Date(payment.dueDate) - new Date()) / (1000 * 60 * 60 * 24));

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        {/* Header */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4">
              <img 
                src={payment.equipment.image} 
                alt={payment.equipment.name}
                className="w-16 h-12 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{payment.equipment.name}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-gray-500">Payment ID: {payment.id}</span>
                  <span className="text-sm text-gray-500">Rental: {payment.rentalId}</span>
                  <StatusBadge status={payment.status} dueDate={payment.dueDate} />
                </div>
              </div>
            </div>
            <button
              onClick={() => onToggle(payment.id)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-gray-200">
            <div className="flex items-center gap-2">
              <DollarSign size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Amount Due</p>
                <p className="font-semibold text-gray-900">${payment.amount.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Due Date</p>
                <p className="font-semibold text-gray-900">
                  {new Date(payment.dueDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Payment Type</p>
                <PaymentTypeBadge type={payment.type} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Installment</p>
                <p className="font-semibold text-gray-900">
                  {payment.installmentNumber}/{payment.totalInstallments}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            {(payment.status === 'pending' || payment.status === 'upcoming') && (
              <>
                <button 
                  onClick={() => onPay(payment)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
                >
                  <CreditCard size={16} />
                  Pay Now
                </button>
                <button 
                  onClick={() => onSchedule(payment)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg font-semibold transition-colors"
                >
                  <Calendar size={16} />
                  Schedule Payment
                </button>
              </>
            )}
            {payment.documents.length > 0 && (
              <button 
                onClick={() => onDownload(payment.documents[0])}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg font-semibold transition-colors"
              >
                <Download size={16} />
                Download Invoice
              </button>
            )}
            {payment.status === 'completed' && (
              <button 
                onClick={() => onDownload(payment.documents[0])}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                <Receipt size={16} />
                View Receipt
              </button>
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="bg-gray-50 border-t border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Payment Details */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Payment Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment ID:</span>
                    <span className="font-semibold">{payment.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rental ID:</span>
                    <span className="font-semibold">{payment.rentalId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Created Date:</span>
                    <span className="font-semibold">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-semibold capitalize">
                      {payment.paymentMethod ? payment.paymentMethod.replace('_', ' ') : 'Not Selected'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Amount Breakdown */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Amount Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Principal Amount:</span>
                    <span className="font-semibold">${payment.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Late Fee:</span>
                    <span className="font-semibold">${payment.lateFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2">
                    <span className="text-gray-600 font-semibold">Total Due:</span>
                    <span className="font-semibold text-orange-600">
                      ${(payment.amount + payment.lateFee).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Information */}
              <div className="md:col-span-2">
                <h4 className="font-semibold text-gray-900 mb-4">Status Information</h4>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  {isOverdue && (
                    <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg mb-3">
                      <AlertTriangle className="text-red-600" size={20} />
                      <div>
                        <p className="font-semibold text-red-800">Payment Overdue</p>
                        <p className="text-red-700 text-sm">
                          This payment was due on {new Date(payment.dueDate).toLocaleDateString()}. 
                          Please make payment immediately to avoid service interruption.
                        </p>
                      </div>
                    </div>
                  )}
                  {payment.status === 'pending' && daysUntilDue > 0 && (
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <Clock className="text-yellow-600" size={20} />
                      <div>
                        <p className="font-semibold text-yellow-800">Payment Due Soon</p>
                        <p className="text-yellow-700 text-sm">
                          This payment is due in {daysUntilDue} day{daysUntilDue !== 1 ? 's' : ''}.
                        </p>
                      </div>
                    </div>
                  )}
                  {payment.status === 'completed' && (
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="text-green-600" size={20} />
                      <div>
                        <p className="font-semibold text-green-800">Payment Completed</p>
                        <p className="text-green-700 text-sm">
                          Payment processed on {new Date(payment.paidDate).toLocaleDateString()}.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Documents */}
              {payment.documents.length > 0 && (
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4">Documents</h4>
                  <div className="flex flex-wrap gap-2">
                    {payment.documents.map((doc, index) => (
                      <button
                        key={index}
                        onClick={() => onDownload(doc)}
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

  // Payment Modal Component
  const PaymentModal = () => {
    if (!selectedPayment || !showPaymentModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Make Payment</h2>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronDown size={24} />
              </button>
            </div>
          </div>

          <form onSubmit={handlePaymentFormSubmit} className="p-6">
            {/* Payment Summary */}
            <div className="bg-orange-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Equipment:</span>
                  <span className="font-semibold">{selectedPayment.equipment.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment ID:</span>
                  <span className="font-semibold">{selectedPayment.id}</span>
                </div>
                <div className="flex justify-between">
                  <span>Due Date:</span>
                  <span className="font-semibold">
                    {new Date(selectedPayment.dueDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between border-t border-orange-200 pt-2">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="font-semibold text-orange-600 text-lg">
                    ${selectedPayment.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Select Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: 'credit_card', label: 'Credit Card', icon: CreditCard },
                  { value: 'debit_card', label: 'Debit Card', icon: CreditCard },
                  { value: 'bank_transfer', label: 'Bank Transfer', icon: Banknote },
                  { value: 'digital_wallet', label: 'Digital Wallet', icon: Wallet },
                  { value: 'qr_code', label: 'QR Code', icon: QrCode }
                ].map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <label key={method.value} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={paymentForm.method === method.value}
                        onChange={(e) => handleFieldChange('method', e.target.value)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <IconComponent size={24} className="text-gray-400 mt-2 mb-2" />
                      <span className="font-semibold text-sm">{method.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Credit Card Form */}
            {['credit_card', 'debit_card'].includes(paymentForm.method) && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={paymentForm.cardNumber}
                    onChange={(e) => handleFieldChange('cardNumber', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={paymentForm.expiryDate}
                      onChange={(e) => handleFieldChange('expiryDate', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      value={paymentForm.cvv}
                      onChange={(e) => handleFieldChange('cvv', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={paymentForm.nameOnCard}
                    onChange={(e) => handleFieldChange('nameOnCard', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={paymentForm.saveCard}
                    onChange={(e) => handleFieldChange('saveCard', e.target.checked)}
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Save card for future payments</span>
                </label>
              </div>
            )}

            {/* Security Notice */}
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
              <Shield className="text-green-600" size={20} />
              <div>
                <p className="font-semibold text-green-800">Secure Payment</p>
                <p className="text-green-700 text-sm">
                  Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowPaymentModal(false)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
              >
                <CreditCard size={20} />
                Pay ${selectedPayment.amount.toLocaleString()}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Rental Payments</h1>
            <p className="text-gray-600 mt-1">Manage your equipment rental payments and invoices</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">${stats.totalPending.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming Payments</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">${stats.totalUpcoming.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Calendar className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">${stats.totalCompleted.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overdue</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.overduePayments}</p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <AlertTriangle className="text-red-600" size={24} />
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
                placeholder="Search payments by equipment, ID, or rental ID..."
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
                <option value="pending">Pending</option>
                <option value="upcoming">Upcoming</option>
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select
                value={paymentMethodFilter}
                onChange={handlePaymentMethodFilterChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">All Methods</option>
                <option value="credit_card">Credit Card</option>
                <option value="debit_card">Debit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>

              <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="dueDate">Sort by Due Date</option>
                <option value="amount">Sort by Amount</option>
                <option value="created">Sort by Created</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payments List */}
        <div className="space-y-6">
          {filteredPayments.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-gray-400 mb-4">
                <CreditCard size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No payments found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredPayments.map(payment => (
              <PaymentCard 
                key={payment.id} 
                payment={payment}
                isExpanded={expandedPayment === payment.id}
                onToggle={togglePaymentExpand}
                onPay={handleMakePayment}
                onSchedule={handleSchedulePayment}
                onDownload={handleDownloadInvoice}
              />
            ))
          )}
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal />
    </div>
  );
};

export default RentalPayments;