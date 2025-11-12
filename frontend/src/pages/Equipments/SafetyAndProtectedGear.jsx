import React, { useState } from 'react';

const SafetyAndProtectedGear = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Safety gear categories
  const categories = [
    { id: 'all', name: 'All Safety Gear', count: 0 },
    { id: 'head', name: 'Head Protection', count: 8 },
    { id: 'eye', name: 'Eye & Face Protection', count: 6 },
    { id: 'respiratory', name: 'Respiratory Protection', count: 5 },
    { id: 'hand', name: 'Hand Protection', count: 12 },
    { id: 'body', name: 'Body Protection', count: 7 },
    { id: 'foot', name: 'Foot Protection', count: 9 },
    { id: 'fall', name: 'Fall Protection', count: 6 }
  ];

  // Safety products data
  const products = [
    // Head Protection
    {
      id: 1,
      name: "Hard Hat with Visor",
      category: "head",
      image: "https://maltadynamics.com/wp-content/uploads/2025/05/HHY2004-HH312B-HHE840ME-2.jpg",
      price: 24.99,
      description: "ANSI Z89.1 certified hard hat with attached face shield for maximum protection",
      features: ["Impact resistant", "UV protection", "Adjustable suspension", "6-point comfort"],
      specifications: {
        "Standard": "ANSI Z89.1 Type I",
        "Material": "High-density polyethylene",
        "Suspension": "6-point nylon",
        "Colors": "Yellow, White, Blue, Orange"
      },
      inStock: true,
      rating: 4.8
    },
    {
      id: 2,
      name: "Bump Cap",
      category: "head",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g2eKksTleMJrWPl4h7UBZhGUt87dyedrzw&s",
      price: 15.99,
      description: "Lightweight bump cap for protection against minor head injuries",
      features: ["Lightweight design", "Ventilated comfort", "Adjustable fit", "Low profile"],
      specifications: {
        "Standard": "ANSI/ISEA Z89.1",
        "Material": "ABS plastic",
        "Weight": "8.5 oz",
        "Vents": "8 ventilation ports"
      },
      inStock: true,
      rating: 4.5
    },

    // Eye & Face Protection
    {
      id: 3,
      name: "Safety Goggles",
      category: "eye",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_BpRU_wTwQE2kqnBjWAzYP4KBFmcp3RzDA&s",
      price: 12.99,
      description: "Anti-fog safety goggles with indirect ventilation",
      features: ["Anti-fog coating", "Indirect ventilation", "UV protection", "Comfort fit"],
      specifications: {
        "Standard": "ANSI Z87.1+",
        "Lens Material": "Polycarbonate",
        "Ventilation": "Indirect",
        "Fit": "Over prescription glasses"
      },
      inStock: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "Face Shield",
      category: "eye",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbax9r2UzvQQ0STLRyXbOHFOaKIX7D-6Ccmw&s",
      price: 18.50,
      description: "Full face protection shield with adjustable headgear",
      features: ["Crystal clear visor", "Adjustable headgear", "Replaceable visor", "Lightweight"],
      specifications: {
        "Standard": "ANSI Z87.1",
        "Visor Material": "Polycarbonate",
        "Thickness": "0.04 inch",
        "Lift Front": "Yes"
      },
      inStock: true,
      rating: 4.6
    },

    // Respiratory Protection
    {
      id: 5,
      name: "N95 Respirator Mask",
      category: "respiratory",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjHL9nGbaxfYpv2JTTSul5H1aEDixAfDlBQ&s",
      price: 1.25,
      description: "NIOSH-approved N95 particulate respirator mask",
      features: ["NIOSH approved", "95% filtration", "Comfortable nose bridge", "Latex-free"],
      specifications: {
        "Standard": "NIOSH N95",
        "Filtration": "95% of airborne particles",
        "Layers": "3-ply construction",
        "Packaging": "20 masks/box"
      },
      inStock: true,
      rating: 4.9
    },
    {
      id: 6,
      name: "Half Face Respirator",
      category: "respiratory",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPshZD4NASlC36OGoM9WFtjxbRbVvc2a9WsA&s",
      price: 35.99,
      description: "Reusable half face respirator with dual filters",
      features: ["Silicone facepiece", "Dual filter system", "Adjustable straps", "Wide view"],
      specifications: {
        "Standard": "NIOSH 42 CFR 84",
        "Material": "Medical-grade silicone",
        "Filters": "P100 particulate",
        "Compatibility": "Works with safety glasses"
      },
      inStock: true,
      rating: 4.8
    },

    // Hand Protection
    {
      id: 7,
      name: "Cut-Resistant Gloves",
      category: "hand",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNj60q5DWg3nNHLHsC00UYH-SE2690t7BDmg&s",
      price: 22.50,
      description: "ANSI Level A4 cut-resistant gloves for sharp material handling",
      features: ["ANSI A4 cut level", "Comfort fit", "Breathable", "Good dexterity"],
      specifications: {
        "Standard": "ANSI/ISEA 105-2016",
        "Cut Level": "A4",
        "Material": "HPPE and glass fiber",
        "Sizes": "S, M, L, XL"
      },
      inStock: true,
      rating: 4.7
    },
    {
      id: 8,
      name: "Chemical Resistant Gloves",
      category: "hand",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuo9Ka4KAjNgK57GN5epprdFreZPwMrGy6A&s",
      price: 18.75,
      description: "Nitrile chemical resistant gloves with textured grip",
      features: ["Chemical resistant", "Textured grip", "Puncture resistant", "Latex-free"],
      specifications: {
        "Material": "Nitrile",
        "Thickness": "0.1 inch",
        "Length": "12 inches",
        "Cuff": "Rolled for easy donning"
      },
      inStock: true,
      rating: 4.6
    },

    // Body Protection
    {
      id: 9,
      name: "High-Visibility Vest",
      category: "body",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBmVcDyogdm6v0ukrHSzgxQm_0Lvi4NgztbA&s",
      price: 8.99,
      description: "ANSI/ISEA 107 certified high-visibility safety vest",
      features: ["ANSI Class 2", "Reflective stripes", "Mesh material", "Multiple pockets"],
      specifications: {
        "Standard": "ANSI/ISEA 107-2020",
        "Class": "Class 2",
        "Material": "Polyester mesh",
        "Colors": "Lime yellow, Orange"
      },
      inStock: true,
      rating: 4.5
    },
    {
      id: 10,
      name: "FR Coveralls",
      category: "body",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEHm1rLQamdiWb9qgF_w1iwHsaLQoRGzMXw&s",
      price: 89.99,
      description: "Flame-resistant coveralls for hazardous environments",
      features: ["NFPA 2112 certified", "Arc flash protection", "Comfort fit", "Multiple pockets"],
      specifications: {
        "Standard": "NFPA 2112",
        "Material": "FR cotton blend",
        "ATPV": "8 cal/cm²",
        "Sizes": "S-4XL"
      },
      inStock: true,
      rating: 4.8
    },

    // Foot Protection
    {
      id: 11,
      name: "Steel Toe Boots",
      category: "foot",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZw-a2aBA6GJoCGOjdgLBERd-pDpZoVvHCgw&s",
      price: 129.99,
      description: "ASTM F2413 certified steel toe work boots with electrical hazard protection",
      features: ["Steel toe", "Electrical hazard", "Oil resistant", "Comfort insole"],
      specifications: {
        "Standard": "ASTM F2413-18",
        "Toe Protection": "Steel, 75 ft-lbs",
        "EH Rating": "Yes",
        "Sole": "Oil and slip resistant"
      },
      inStock: true,
      rating: 4.9
    },
    {
      id: 12,
      name: "Composite Toe Shoes",
      category: "foot",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc4JsRYXUbwmp0fmYvSppWYe_uhTmUK-vDA&s",
      price: 99.99,
      description: "Lightweight composite toe athletic work shoes",
      features: ["Composite toe", "Lightweight", "Athletic style", "Memory foam"],
      specifications: {
        "Standard": "ASTM F2413-18",
        "Toe Protection": "Composite, 75 ft-lbs",
        "Weight": "2.2 lbs/pair",
        "Style": "Athletic"
      },
      inStock: true,
      rating: 4.7
    },

    // Fall Protection
    {
      id: 13,
      name: "Safety Harness Kit",
      category: "fall",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgv4DRPtWU5oSYCMTJDQHIH3oVWLMsb8ycXA&s",
      price: 189.99,
      description: "Complete fall protection harness system with lanyard",
      features: ["OSHA compliant", "Full body harness", "Quick-connect buckles", "Padded straps"],
      specifications: {
        "Standard": "OSHA 1926.502",
        "Capacity": "310 lbs",
        "Material": "Nylon webbing",
        "Includes": "Harness, lanyard, carabiner"
      },
      inStock: true,
      rating: 4.9
    },
    {
      id: 14,
      name: "Retractable Lifeline",
      category: "fall",
      image: "https://images-cdn.ubuy.qa/634fd653a850724b5075e819-shengshiyu-self-retracting-lifeline-with.jpg",
      price: 245.00,
      description: "Self-retracting lifeline with shock-absorbing feature",
      features: ["Self-retracting", "Shock absorber", "Swivel connector", "Durable case"],
      specifications: {
        "Standard": "ANSI Z359.14",
        "Capacity": "310 lbs",
        "Cable Length": "50 feet",
        "Arrest Force": "<900 lbs"
      },
      inStock: true,
      rating: 4.8
    }
  ];

  // Calculate category counts
  categories[0].count = products.length;

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const searchedProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
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

  const renderStars = (rating) => {
    return "⭐".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-24 text-white bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Safety & Protective Gear
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Premium quality safety equipment and protective gear to keep your workforce safe
            and compliant with industry standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop All Safety Gear
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Bulk Order Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-yellow-600/20 backdrop-blur-sm rounded-xl border border-yellow-400/30">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{products.length}+</div>
              <div className="text-yellow-200 font-semibold">Safety Products</div>
            </div>
            <div className="p-6 bg-yellow-600/20 backdrop-blur-sm rounded-xl border border-yellow-400/30">
              <div className="text-4xl font-bold text-yellow-400 mb-2">ANSI</div>
              <div className="text-yellow-200 font-semibold">Certified Standards</div>
            </div>
            <div className="p-6 bg-yellow-600/20 backdrop-blur-sm rounded-xl border border-yellow-400/30">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-yellow-200 font-semibold">Expert Support</div>
            </div>
            <div className="p-6 bg-yellow-600/20 backdrop-blur-sm rounded-xl border border-yellow-400/30">
              <div className="text-4xl font-bold text-yellow-400 mb-2">Bulk</div>
              <div className="text-yellow-200 font-semibold">Discounts Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 space-y-4 md:space-y-0">
            <div className="flex overflow-x-auto space-x-1">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 font-semibold whitespace-nowrap rounded-full transition-all duration-300 ${selectedCategory === category.id
                      ? 'bg-yellow-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700'
                    }`}
                >
                  {category.name} <span className="text-sm opacity-80">({category.count})</span>
                </button>
              ))}
            </div>

            <div className="flex-shrink-0">
              <input
                type="text"
                placeholder="Search safety gear..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section
        className="py-16 relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {searchedProducts.map(product => (
              <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-white/50">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    In Stock
                  </div>
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {renderStars(product.rating)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-yellow-600">${product.price}</div>
                    <div className="text-sm text-gray-500">each</div>
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
                      onClick={() => setSelectedProduct(product)}
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

      {/* Safety Standards Section */}
      <section
        className="py-20 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certified Safety Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All our safety equipment meets or exceeds industry standards and certifications
              to ensure maximum protection for your workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-yellow-600/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30 hover:bg-yellow-600/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">ANSI</div>
              <p className="text-yellow-200">American National Standards Institute</p>
            </div>
            <div className="text-center p-6 bg-yellow-600/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30 hover:bg-yellow-600/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">OSHA</div>
              <p className="text-yellow-200">Occupational Safety & Health Administration</p>
            </div>
            <div className="text-center p-6 bg-yellow-600/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30 hover:bg-yellow-600/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">NFPA</div>
              <p className="text-yellow-200">National Fire Protection Association</p>
            </div>
            <div className="text-center p-6 bg-yellow-600/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30 hover:bg-yellow-600/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">ASTM</div>
              <p className="text-yellow-200">American Society for Testing and Materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(180, 83, 9, 0.9), rgba(180, 83, 9, 0.9)), url(https://images.unsplash.com/photo-1581093451225-47ed4bbad64e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Bulk Safety Gear?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Get special pricing for large orders. Our safety experts will help you select
            the right protective equipment for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-yellow-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request Bulk Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300">
              Call Safety Expert
            </button>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Safety Gear Cart</h3>
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
                  <p className="text-sm text-gray-500 mt-2">Add some safety gear to get started</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-yellow-600 font-bold">${item.price} each</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
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

                  <button className="w-full bg-yellow-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors">
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
                  onClick={() => setSelectedProduct(null)}
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
                  <div className="flex items-center mt-4">
                    <span className="text-yellow-500 text-lg mr-2">{renderStars(selectedProduct.rating)}</span>
                    <span className="text-gray-600">({selectedProduct.rating})</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-yellow-600">${selectedProduct.price}</span>
                      <span className="text-gray-600">each</span>
                    </div>
                    <div className="text-green-600 font-semibold">✓ In Stock - Ready to Ship</div>
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
                      setSelectedProduct(null);
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

      {/* Cart Floating Button */}
      {cartItems.length > 0 && !showCart && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors z-40"
        >
          <div className="relative">
            <span className="text-2xl">🛒</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {getCartItemCount()}
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default SafetyAndProtectedGear;