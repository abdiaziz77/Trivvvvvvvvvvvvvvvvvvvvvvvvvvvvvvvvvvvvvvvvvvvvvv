import React, { useState } from 'react';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('rent-equipment');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample data for different payment categories
  const paymentCategories = {
    'rent-equipment': {
      title: 'Rent Equipment',
      description: 'Pay for equipment rentals with flexible duration options',
      items: [
        { id: 1, name: 'Excavator', price: 250, duration: 'day', image: '🚜' },
        { id: 2, name: 'Concrete Mixer', price: 85, duration: 'day', image: '🧱' },
        { id: 3, name: 'Scaffolding Set', price: 120, duration: 'week', image: '🪜' },
        { id: 4, name: 'Power Tools Kit', price: 45, duration: 'day', image: '⚡' }
      ]
    },
    'buy-materials': {
      title: 'Buy Materials & Supplies',
      description: 'Purchase construction materials and supplies',
      items: [
        { id: 1, name: 'Cement Bags (50kg)', price: 8, unit: 'bag', image: '🏗️' },
        { id: 2, name: 'Steel Reinforcement', price: 650, unit: 'ton', image: '🔩' },
        { id: 3, name: 'Electrical Wiring', price: 120, unit: 'roll', image: '🔌' },
        { id: 4, name: 'Paint Gallons', price: 35, unit: 'gallon', image: '🎨' }
      ]
    },
    'contract-projects': {
      title: 'Contract Projects',
      description: 'Pay for large construction projects and contracts',
      items: [
        { id: 1, name: 'House Construction', price: 150000, type: 'full-project', image: '🏠' },
        { id: 2, name: 'Office Renovation', price: 75000, type: 'renovation', image: '🏢' },
        { id: 3, name: 'Swimming Pool', price: 45000, type: 'special-project', image: '🏊' },
        { id: 4, name: 'Landscaping Project', price: 28000, type: 'outdoor', image: '🌳' }
      ]
    },
    'renovation': {
      title: 'Renovation Services',
      description: 'Pay for home renovation and remodeling services',
      items: [
        { id: 1, name: 'Kitchen Remodel', price: 25000, scope: 'full-remodel', image: '👨‍🍳' },
        { id: 2, name: 'Bathroom Upgrade', price: 15000, scope: 'upgrade', image: '🚿' },
        { id: 3, name: 'Flooring Installation', price: 8000, scope: 'installation', image: '🪵' },
        { id: 4, name: 'Roof Repair', price: 12000, scope: 'repair', image: '🏠' }
      ]
    }
  };

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: '💳',
      description: 'Pay securely with your card'
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      icon: '🏦',
      description: 'Direct bank transfer'
    },
    {
      id: 'installments',
      name: 'Installment Plan',
      icon: '📅',
      description: 'Pay in monthly installments'
    },
    {
      id: 'escrow',
      name: 'Escrow Service',
      icon: '🤝',
      description: 'Secure payment held in escrow'
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      icon: '₿',
      description: 'Pay with Bitcoin or Ethereum'
    }
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    bankAccount: '',
    installmentMonths: 12,
    walletAddress: ''
  });

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Payment processed successfully!');
    setIsProcessing(false);
    setSelectedItem(null);
  };

  const calculateTotal = () => {
    if (!selectedItem) return 0;
    return selectedItem.price * quantity;
  };

  const getPaymentInstructions = () => {
    switch (paymentMethod) {
      case 'card':
        return 'Enter your card details for instant payment';
      case 'bank-transfer':
        return 'Transfer the amount to our bank account: IBAN XX XXXX XXXX XXXX';
      case 'installments':
        return `Pay in ${formData.installmentMonths} monthly installments of $${(calculateTotal() / formData.installmentMonths).toFixed(2)}`;
      case 'escrow':
        return 'Funds will be held in escrow until project completion';
      case 'crypto':
        return 'Send cryptocurrency to the wallet address provided';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Construction Payments</h1>
        <p className="text-gray-600 mt-2">
          Secure payment solutions for all your construction needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Categories and Items */}
        <div className="lg:col-span-2">
          {/* Category Tabs */}
          <div className="bg-white rounded-lg shadow-lg mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex flex-wrap -mb-px">
                {Object.entries(paymentCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 py-4 px-6 text-center font-medium text-sm ${
                      activeTab === key
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Category Description */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {paymentCategories[activeTab].title}
            </h2>
            <p className="text-gray-600">
              {paymentCategories[activeTab].description}
            </p>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentCategories[activeTab].items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500"
                onClick={() => setSelectedItem(item)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activeTab === 'rent-equipment' ? 'bg-blue-100 text-blue-800' :
                    activeTab === 'buy-materials' ? 'bg-green-100 text-green-800' :
                    activeTab === 'contract-projects' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {activeTab === 'rent-equipment' && `$${item.price}/${item.duration}`}
                    {activeTab === 'buy-materials' && `$${item.price}/${item.unit}`}
                    {(activeTab === 'contract-projects' || activeTab === 'renovation') && `$${item.price.toLocaleString()}`}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.scope || item.type || 'Standard service'}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Select & Pay
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Payment Section */}
        <div className="space-y-6">
          {/* Selected Item Summary */}
          {selectedItem && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{selectedItem.image}</span>
                  <div>
                    <p className="font-medium text-gray-800">{selectedItem.name}</p>
                    <p className="text-sm text-gray-600">
                      {activeTab === 'rent-equipment' && `Per ${selectedItem.duration}`}
                      {activeTab === 'buy-materials' && `Per ${selectedItem.unit}`}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  ${selectedItem.price}
                </p>
              </div>

              {/* Quantity Selector */}
              {(activeTab === 'rent-equipment' || activeTab === 'buy-materials') && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Total</span>
                  <span className="text-xl font-bold text-blue-600">
                    ${calculateTotal().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition duration-300 ${
                    paymentMethod === method.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{method.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{method.name}</p>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      paymentMethod === method.id
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-400'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Instructions */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">{getPaymentInstructions()}</p>
            </div>
          </div>

          {/* Payment Form */}
          {selectedItem && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h3>
              
              <form onSubmit={handlePayment} className="space-y-4">
                {/* Card Details */}
                {paymentMethod === 'card' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        maxLength={19}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
                          setFormData({ ...formData, cardNumber: value });
                        }}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </>
                )}

                {/* Installment Plan */}
                {paymentMethod === 'installments' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Months
                    </label>
                    <select
                      value={formData.installmentMonths}
                      onChange={(e) => setFormData({ ...formData, installmentMonths: parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value={6}>6 months</option>
                      <option value={12}>12 months</option>
                      <option value={24}>24 months</option>
                      <option value={36}>36 months</option>
                    </select>
                    <p className="text-sm text-gray-600 mt-2">
                      Monthly payment: ${(calculateTotal() / formData.installmentMonths).toFixed(2)}
                    </p>
                  </div>
                )}

                {/* Crypto Payment */}
                {paymentMethod === 'crypto' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your wallet address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing Payment...
                    </div>
                  ) : (
                    `Pay $${calculateTotal().toLocaleString()}`
                  )}
                </button>
              </form>

              {/* Security Badge */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <span>🔒</span>
                  <span>Secure SSL Encryption</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;