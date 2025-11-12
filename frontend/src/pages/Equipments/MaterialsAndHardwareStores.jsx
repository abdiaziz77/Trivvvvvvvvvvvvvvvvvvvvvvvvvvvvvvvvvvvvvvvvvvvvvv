import React, { useState } from 'react';

const MaterialsAndHardwareStores = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const categories = [
    { id: 'all', name: 'All Products', count: 0 },
    { id: 'cement', name: 'Cement & Concrete', count: 8 },
    { id: 'steel', name: 'Steel & Rebar', count: 6 },
    { id: 'lumber', name: 'Lumber & Timber', count: 10 },
    { id: 'hardware', name: 'Hardware & Tools', count: 12 },
    { id: 'electrical', name: 'Electrical', count: 7 },
    { id: 'plumbing', name: 'Plumbing', count: 5 },
    { id: 'safety', name: 'Safety Equipment', count: 9 }
  ];

  const products = [
    // Cement & Concrete
    {
      id: 1,
      name: "Portland Cement 50kg",
      category: "cement",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN73TMe85_ZQJ7POb3w26TjY66efwVA4QAXA&s",
      price: 8.50,
      unit: "bag",
      description: "High-quality Portland cement for general construction purposes",
      specifications: {
        "Type": "Type I/II",
        "Strength": "42.5 MPa",
        "Setting Time": "45-90 minutes",
        "Packaging": "50kg waterproof bags"
      },
      features: ["High early strength", "Weather resistant", "Consistent quality", "Easy to work with"],
      inStock: true,
      minOrder: 10,
      bulkDiscount: true
    },
    {
      id: 2,
      name: "Ready-Mix Concrete",
      category: "cement",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOewzPHp2JAmr7JPm2rfprHwQWGtleRsArw&s",
      price: 125.00,
      unit: "cubic yard",
      description: "Pre-mixed concrete delivered to your construction site",
      specifications: {
        "Mix Design": "3000 PSI",
        "Slump": "4-6 inches",
        "Aggregate Size": "3/4 inch",
        "Delivery": "Within 24 hours"
      },
      features: ["Ready to use", "Consistent quality", "Time saving", "Professional grade"],
      inStock: true,
      minOrder: 1
    },
    {
      id: 3,
      name: "Concrete Blocks (Standard)",
      category: "cement",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAt3dHA09osh3Zi80UPK7Fhsh_zWdqQh-8g&s",
      price: 2.25,
      unit: "block",
      description: "Standard concrete blocks for construction and masonry work",
      specifications: {
        "Size": "8x8x16 inches",
        "Weight": "35 lbs",
        "Strength": "1900 PSI",
        "Coverage": "65 sq ft per 100 blocks"
      },
      features: ["High compressive strength", "Uniform size", "Weather resistant", "Easy installation"],
      inStock: true,
      minOrder: 50,
      bulkDiscount: true
    },

    // Steel & Rebar
    {
      id: 4,
      name: "Steel Rebar #4",
      category: "steel",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvQUFe03kRTV4TS8l0E15HbM5PYkSfvZ8bw&s",
      price: 0.85,
      unit: "foot",
      description: "Grade 60 steel rebar for reinforced concrete structures",
      specifications: {
        "Diameter": "1/2 inch",
        "Grade": "60 (420 MPa)",
        "Length": "20 feet standard",
        "Surface": "Deformed"
      },
      features: ["High tensile strength", "Corrosion resistant", "ASTM compliant", "Easy to bend"],
      inStock: true,
      minOrder: 100
    },
    {
      id: 5,
      name: "Structural Steel Beam",
      category: "steel",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc6Do_tIb4nnmwTu-AuO8z1jV7Hrg9Ji0AA&s",
      price: 4.50,
      unit: "foot",
      description: "W8x31 structural steel beams for heavy construction",
      specifications: {
        "Size": "W8x31",
        "Weight": "31 lbs/ft",
        "Material": "A36 Steel",
        "Max Length": "40 feet"
      },
      features: ["High load capacity", "Durable construction", "Weldable", "ASTM A36 certified"],
      inStock: true,
      minOrder: 20
    },

    // Lumber & Timber
    {
      id: 6,
      name: "Pressure Treated 2x4",
      category: "lumber",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XkaistWKZJkviJRrlQfF7rfDYXCbyyzqFw&s",
      price: 3.25,
      unit: "8ft length",
      description: "Pressure treated lumber for outdoor and structural applications",
      specifications: {
        "Dimensions": "2x4 inches",
        "Length": "8 feet",
        "Treatment": "ACQ",
        "Moisture Content": "19% max"
      },
      features: ["Rot resistant", "Insect resistant", "Weather proof", "Long lasting"],
      inStock: true,
      minOrder: 10,
      bulkDiscount: true
    },
    {
      id: 7,
      name: "Plywood Sheets 4x8",
      category: "lumber",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuvsO-OTv3ZqidLxohMleCcZZJHcJD6yWFw&s",
      price: 45.00,
      unit: "sheet",
      description: "3/4 inch CDX plywood for sheathing and structural applications",
      specifications: {
        "Thickness": "3/4 inch",
        "Size": "4x8 feet",
        "Grade": "CDX",
        "Plywood Type": "Exterior"
      },
      features: ["Structural grade", "Weather resistant", "Smooth surface", "Easy to cut"],
      inStock: true,
      minOrder: 5
    },

    // Hardware & Tools
    {
      id: 8,
      name: "Heavy Duty Hammer Drill",
      category: "hardware",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ktI-n8kc2Zr3yc9u8VKw3RFsamk6Vrtd3w&s",
      price: 189.99,
      unit: "unit",
      description: "Professional hammer drill for concrete and masonry work",
      specifications: {
        "Power": "7.5 Amp",
        "Impact Rate": "0-48,000 BPM",
        "Chuck Size": "1/2 inch",
        "Weight": "5.8 lbs"
      },
      features: ["Variable speed", "Hammer function", "Comfort grip", "Includes case"],
      inStock: true,
      minOrder: 1
    },
    {
      id: 9,
      name: "Construction Nails (50lb)",
      category: "hardware",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVHJmJCWn5d9J-MDu1jUavlrIbuwxAtnwVw&s",
      price: 65.00,
      unit: "box",
      description: "Common nails for framing and general construction",
      specifications: {
        "Size": "16d (3-1/2 inch)",
        "Type": "Common nail",
        "Finish": "Bright",
        "Quantity": "Approx 180 nails/lb"
      },
      features: ["High quality steel", "Sharp points", "Strong holding power", "Consistent size"],
      inStock: true,
      minOrder: 1,
      bulkDiscount: true
    },

    // Electrical
    {
      id: 10,
      name: "Electrical Conduit PVC",
      category: "electrical",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yYxf4GChvvVZoGWlmZPhP9k0kAhD58AFbQ&s",
      price: 1.25,
      unit: "10ft length",
      description: "Schedule 40 PVC electrical conduit for wiring protection",
      specifications: {
        "Diameter": "1/2 inch",
        "Schedule": "40",
        "Material": "PVC",
        "Color": "Gray"
      },
      features: ["Weather resistant", "Easy to cut", "UL listed", "Corrosion proof"],
      inStock: true,
      minOrder: 10
    },

    // Plumbing
    {
      id: 11,
      name: "PVC Pipes Schedule 40",
      category: "plumbing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GxGkATeecDYN-xfHRTp14iHvr3rOqd-b9g&s",
      price: 8.75,
      unit: "10ft length",
      description: "Schedule 40 PVC pipes for plumbing and drainage systems",
      specifications: {
        "Diameter": "2 inches",
        "Schedule": "40",
        "Pressure Rating": "280 PSI",
        "Material": "PVC"
      },
      features: ["Corrosion resistant", "Easy installation", "Durable", "NSF certified"],
      inStock: true,
      minOrder: 5
    },

    // Safety Equipment
    {
      id: 12,
      name: "Hard Hat with Visor",
      category: "safety",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMuC2Mm1yihIOaPqJ8S9uOfALna6xfJzZanQ&s",
      price: 24.99,
      unit: "each",
      description: "ANSI certified hard hat with attached face shield",
      specifications: {
        "Standard": "ANSI Z89.1",
        "Suspension": "6-point",
        "Material": "HDPE",
        "Color Options": "Yellow, White, Blue"
      },
      features: ["Impact resistant", "Adjustable fit", "UV protection", "Comfortable"],
      inStock: true,
      minOrder: 1
    },
    {
      id: 13,
      name: "Safety Harness Kit",
      category: "safety",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-UqO-d_Es84G_kr85ZwFqWf5V2ONmOrpDw&s",
      price: 89.99,
      unit: "kit",
      description: "Complete fall protection harness system",
      specifications: {
        "Capacity": "310 lbs",
        "Standard": "OSHA 1926.502",
        "Material": "Nylon webbing",
        "Includes": "Harness, lanyard, carabiner"
      },
      features: ["Full body harness", "Quick-connect buckles", "Padded straps", "D-ring back"],
      inStock: true,
      minOrder: 1
    }
  ];

  // Calculate category counts
  categories[0].count = products.length;

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    
    setShowCart(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    // Simulate order processing
    const orderNumber = `ORD-${Date.now()}`;
    alert(`Order placed successfully!\n\nOrder Number: ${orderNumber}\nTotal: $${getCartTotal().toFixed(2)}\n\nThank you for your purchase!`);
    
    // Reset everything
    setCartItems([]);
    setShowCheckout(false);
    setCheckoutStep(1);
    setCustomerInfo({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: ''
    });
  };

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setCheckoutStep(checkoutStep + 1);
  };

  const prevStep = () => {
    setCheckoutStep(checkoutStep - 1);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const renderCheckoutStep = () => {
    switch (checkoutStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Shipping Information</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={customerInfo.fullName}
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
                    value={customerInfo.phone}
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
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                <input
                  type="text"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={customerInfo.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>
            </form>

            <div className="flex justify-between">
              <button onClick={() => setShowCheckout(false)} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
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

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Payment Information</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <h4 className="text-xl font-semibold text-yellow-800 mb-4">Order Summary</h4>
                <div className="space-y-3">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} (x{item.quantity})</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-yellow-300 pt-3">
                    <div className="flex justify-between text-lg font-bold text-yellow-800">
                      <span>Total:</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mt-6 pt-4 border-t border-yellow-300">
                  <h5 className="font-semibold text-yellow-800 mb-2">Shipping To:</h5>
                  <div className="text-sm text-gray-600">
                    <p>{customerInfo.fullName}</p>
                    <p>{customerInfo.address}</p>
                    <p>{customerInfo.city}, {customerInfo.zipCode}</p>
                    <p>{customerInfo.phone}</p>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div>
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
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
                      Pay ${getCartTotal().toFixed(2)}
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
      {/* Hero Section with Construction Background */}
      <section className="relative bg-cover bg-center py-32" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiKz-uRKzYfhfhHgRTSnbGq6TBucC-s8-XA&s)'
      }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Materials & Hardware Store
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            Your one-stop shop for quality construction materials, tools, and hardware supplies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setSelectedCategory('all')}
              className="px-8 py-4 bg-yellow-500 text-white rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop All Products
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
              Bulk Order Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{products.length}+</div>
              <div className="text-gray-600 font-semibold">Products Available</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Online Ordering</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-yellow-600 mb-2">Next Day</div>
              <div className="text-gray-600 font-semibold">Delivery Available</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-yellow-600 mb-2">Bulk</div>
              <div className="text-gray-600 font-semibold">Discounts Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-1 py-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 font-semibold whitespace-nowrap rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700'
                }`}
              >
                {category.name} <span className="text-sm opacity-80">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.bulkDiscount && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Bulk Discount
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    In Stock
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-yellow-600">${product.price}</div>
                    <div className="text-sm text-gray-500">per {product.unit}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => openProductDetails(product)}
                      className="flex-1 border border-yellow-500 text-yellow-600 py-2 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Shopping Cart</h3>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-yellow-600 font-bold">${item.price} / {item.unit}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-xl font-bold text-gray-800">
                      <span>Total:</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowCart(false);
                      setShowCheckout(true);
                    }}
                    className="w-full bg-yellow-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
                <button 
                  onClick={closeProductDetails}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-yellow-600">${selectedProduct.price}</span>
                      <span className="text-gray-600">per {selectedProduct.unit}</span>
                    </div>
                    {selectedProduct.minOrder > 1 && (
                      <p className="text-sm text-gray-600">Minimum order: {selectedProduct.minOrder} {selectedProduct.unit}s</p>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h4>
                    <div className="space-y-2">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      closeProductDetails();
                    }}
                    className="w-full bg-yellow-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors"
                  >
                    Add to Cart - ${selectedProduct.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Checkout</h3>
                <button 
                  onClick={() => setShowCheckout(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        checkoutStep >= step ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {step}
                      </div>
                      {step < 2 && (
                        <div className={`w-12 h-1 ${checkoutStep > step ? 'bg-yellow-500' : 'bg-gray-300'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {renderCheckoutStep()}
            </div>
          </div>
        </div>
      )}

      {/* Cart Floating Button */}
      {cartItems.length > 0 && !showCart && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors z-40"
        >
          <div className="relative">
            <span className="text-2xl">🛒</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {getCartItemCount()}
            </span>
          </div>
        </button>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Bulk Materials?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Get special pricing for large orders. Our team will help you get the best deals on construction materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-yellow-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request Bulk Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105">
              Call: +1 (555) 123-MATERIAL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialsAndHardwareStores;