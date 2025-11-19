import React, { useState, useMemo, useCallback, useEffect } from 'react';

// Construction materials data matching your existing store
const constructionMaterials = [
  // Cement & Concrete
  {
    id: 1,
    name: "Portland Cement 50kg",
    category: "cement",
    brand: "Lafarge",
    price: 8.50,
    priceUnit: "bag",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.7,
    reviews: 124,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN73TMe85_ZQJ7POb3w26TjY66efwVA4QAXA&s",
    location: "Main Warehouse",
    availability: "In Stock",
    specifications: {
      "Type": "Type I/II",
      "Strength": "42.5 MPa",
      "Setting Time": "45-90 minutes",
      "Packaging": "50kg waterproof bags"
    },
    description: "High-quality Portland cement for general construction purposes. Perfect for concrete work, masonry, and plastering.",
    features: [
      "High early strength",
      "Weather resistant", 
      "Consistent quality",
      "Easy to work with",
      "ASTM C150 compliant"
    ],
    featured: true,
    bulkDiscount: true,
    minOrder: 10,
    delivery: true,
    stock: 500
  },
  {
    id: 2,
    name: "Ready-Mix Concrete",
    category: "cement",
    brand: "Cemex",
    price: 125.00,
    priceUnit: "cubic yard",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.8,
    reviews: 89,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOewzPHp2JAmr7JPm2rfprHwQWGtleRsArw&s",
    location: "Mixing Plant",
    availability: "Available for Order",
    specifications: {
      "Mix Design": "3000 PSI",
      "Slump": "4-6 inches",
      "Aggregate Size": "3/4 inch",
      "Delivery": "Within 24 hours"
    },
    description: "Pre-mixed concrete delivered to your construction site. Ready to use upon arrival.",
    features: [
      "Ready to use",
      "Consistent quality",
      "Time saving",
      "Professional grade",
      "On-site delivery"
    ],
    featured: true,
    bulkDiscount: true,
    minOrder: 1,
    delivery: true,
    stock: 0
  },
  {
    id: 3,
    name: "Concrete Blocks (Standard)",
    category: "cement",
    brand: "Concrete Products",
    price: 2.25,
    priceUnit: "block",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.5,
    reviews: 203,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAt3dHA09osh3Zi80UPK7Fhsh_zWdqQh-8g&s",
    location: "Block Yard",
    availability: "In Stock",
    specifications: {
      "Size": "8x8x16 inches",
      "Weight": "35 lbs",
      "Strength": "1900 PSI",
      "Coverage": "65 sq ft per 100 blocks"
    },
    description: "Standard concrete blocks for construction and masonry work. Uniform size and high strength.",
    features: [
      "High compressive strength",
      "Uniform size",
      "Weather resistant",
      "Easy installation",
      "Cost effective"
    ],
    featured: false,
    bulkDiscount: true,
    minOrder: 50,
    delivery: true,
    stock: 2000
  },

  // Steel & Rebar
  {
    id: 4,
    name: "Steel Rebar #4",
    category: "steel",
    brand: "Nucor",
    price: 0.85,
    priceUnit: "foot",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.6,
    reviews: 156,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvQUFe03kRTV4TS8l0E15HbM5PYkSfvZ8bw&s",
    location: "Steel Yard",
    availability: "In Stock",
    specifications: {
      "Diameter": "1/2 inch",
      "Grade": "60 (420 MPa)",
      "Length": "20 feet standard",
      "Surface": "Deformed"
    },
    description: "Grade 60 steel rebar for reinforced concrete structures. High tensile strength and corrosion resistance.",
    features: [
      "High tensile strength",
      "Corrosion resistant",
      "ASTM compliant",
      "Easy to bend",
      "Weldable"
    ],
    featured: true,
    bulkDiscount: true,
    minOrder: 100,
    delivery: true,
    stock: 5000
  },
  {
    id: 5,
    name: "Structural Steel Beam",
    category: "steel",
    brand: "Nucor",
    price: 4.50,
    priceUnit: "foot",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.7,
    reviews: 78,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc6Do_tIb4nnmwTu-AuO8z1jV7Hrg9Ji0AA&s",
    location: "Steel Yard",
    availability: "In Stock",
    specifications: {
      "Size": "W8x31",
      "Weight": "31 lbs/ft",
      "Material": "A36 Steel",
      "Max Length": "40 feet"
    },
    description: "W8x31 structural steel beams for heavy construction. High load capacity and durable construction.",
    features: [
      "High load capacity",
      "Durable construction",
      "Weldable",
      "ASTM A36 certified",
      "Precision cut"
    ],
    featured: false,
    bulkDiscount: true,
    minOrder: 20,
    delivery: true,
    stock: 150
  },

  // Lumber & Timber
  {
    id: 6,
    name: "Pressure Treated 2x4",
    category: "lumber",
    brand: "Weyerhaeuser",
    price: 3.25,
    priceUnit: "8ft length",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.4,
    reviews: 312,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XkaistWKZJkviJRrlQfF7rfDYXCbyyzqFw&s",
    location: "Lumber Yard",
    availability: "In Stock",
    specifications: {
      "Dimensions": "2x4 inches",
      "Length": "8 feet",
      "Treatment": "ACQ",
      "Moisture Content": "19% max"
    },
    description: "Pressure treated lumber for outdoor and structural applications. Rot and insect resistant.",
    features: [
      "Rot resistant",
      "Insect resistant",
      "Weather proof",
      "Long lasting",
      "Ground contact rated"
    ],
    featured: true,
    bulkDiscount: true,
    minOrder: 10,
    delivery: true,
    stock: 800
  },
  {
    id: 7,
    name: "Plywood Sheets 4x8",
    category: "lumber",
    brand: "Georgia-Pacific",
    price: 45.00,
    priceUnit: "sheet",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.5,
    reviews: 189,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuvsO-OTv3ZqidLxohMleCcZZJHcJD6yWFw&s",
    location: "Panel Yard",
    availability: "In Stock",
    specifications: {
      "Thickness": "3/4 inch",
      "Size": "4x8 feet",
      "Grade": "CDX",
      "Plywood Type": "Exterior"
    },
    description: "3/4 inch CDX plywood for sheathing and structural applications. Weather resistant and structural grade.",
    features: [
      "Structural grade",
      "Weather resistant",
      "Smooth surface",
      "Easy to cut",
      "Exterior rated"
    ],
    featured: false,
    bulkDiscount: true,
    minOrder: 5,
    delivery: true,
    stock: 120
  },

  // Hardware & Tools
  {
    id: 8,
    name: "Heavy Duty Hammer Drill",
    category: "hardware",
    brand: "DeWalt",
    price: 189.99,
    priceUnit: "unit",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.8,
    reviews: 267,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ktI-n8kc2Zr3yc9u8VKw3RFsamk6Vrtd3w&s",
    location: "Tool Center",
    availability: "In Stock",
    specifications: {
      "Power": "7.5 Amp",
      "Impact Rate": "0-48,000 BPM",
      "Chuck Size": "1/2 inch",
      "Weight": "5.8 lbs"
    },
    description: "Professional hammer drill for concrete and masonry work. Variable speed and hammer function.",
    features: [
      "Variable speed",
      "Hammer function",
      "Comfort grip",
      "Includes case",
      "3-year warranty"
    ],
    featured: true,
    bulkDiscount: false,
    minOrder: 1,
    delivery: true,
    stock: 45
  },
  {
    id: 9,
    name: "Construction Nails (50lb)",
    category: "hardware",
    brand: "Grip-Rite",
    price: 65.00,
    priceUnit: "box",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.3,
    reviews: 178,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVHJmJCWn5d9J-MDu1jUavlrIbuwxAtnwVw&s",
    location: "Hardware Store",
    availability: "In Stock",
    specifications: {
      "Size": "16d (3-1/2 inch)",
      "Type": "Common nail",
      "Finish": "Bright",
      "Quantity": "Approx 180 nails/lb"
    },
    description: "Common nails for framing and general construction. High quality steel with sharp points.",
    features: [
      "High quality steel",
      "Sharp points",
      "Strong holding power",
      "Consistent size",
      "Galvanized option available"
    ],
    featured: false,
    bulkDiscount: true,
    minOrder: 1,
    delivery: true,
    stock: 200
  },

  // Electrical
  {
    id: 10,
    name: "Electrical Conduit PVC",
    category: "electrical",
    brand: "Carlon",
    price: 1.25,
    priceUnit: "10ft length",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.4,
    reviews: 134,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yYxf4GChvvVZoGWlmZPhP9k0kAhD58AFbQ&s",
    location: "Electrical Dept",
    availability: "In Stock",
    specifications: {
      "Diameter": "1/2 inch",
      "Schedule": "40",
      "Material": "PVC",
      "Color": "Gray"
    },
    description: "Schedule 40 PVC electrical conduit for wiring protection. Weather resistant and easy to install.",
    features: [
      "Weather resistant",
      "Easy to cut",
      "UL listed",
      "Corrosion proof",
      "Non-conductive"
    ],
    featured: false,
    bulkDiscount: true,
    minOrder: 10,
    delivery: true,
    stock: 300
  },

  // Plumbing
  {
    id: 11,
    name: "PVC Pipes Schedule 40",
    category: "plumbing",
    brand: "Charlotte Pipe",
    price: 8.75,
    priceUnit: "10ft length",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.5,
    reviews: 156,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GxGkATeecDYN-xfHRTp14iHvr3rOqd-b9g&s",
    location: "Plumbing Dept",
    availability: "In Stock",
    specifications: {
      "Diameter": "2 inches",
      "Schedule": "40",
      "Pressure Rating": "280 PSI",
      "Material": "PVC"
    },
    description: "Schedule 40 PVC pipes for plumbing and drainage systems. Corrosion resistant and durable.",
    features: [
      "Corrosion resistant",
      "Easy installation",
      "Durable",
      "NSF certified",
      "Chemical resistant"
    ],
    featured: false,
    bulkDiscount: true,
    minOrder: 5,
    delivery: true,
    stock: 180
  },

  // Safety Equipment
  {
    id: 12,
    name: "Hard Hat with Visor",
    category: "safety",
    brand: "MSA",
    price: 24.99,
    priceUnit: "each",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.6,
    reviews: 289,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMuC2Mm1yihIOaPqJ8S9uOfALna6xfJzZanQ&s",
    location: "Safety Store",
    availability: "In Stock",
    specifications: {
      "Standard": "ANSI Z89.1",
      "Suspension": "6-point",
      "Material": "HDPE",
      "Color Options": "Yellow, White, Blue"
    },
    description: "ANSI certified hard hat with attached face shield. Impact resistant and comfortable.",
    features: [
      "Impact resistant",
      "Adjustable fit",
      "UV protection",
      "Comfortable",
      "Replaceable visor"
    ],
    featured: true,
    bulkDiscount: true,
    minOrder: 1,
    delivery: true,
    stock: 150
  },
  {
    id: 13,
    name: "Safety Harness Kit",
    category: "safety",
    brand: "Miller",
    price: 89.99,
    priceUnit: "kit",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: null,
    rating: 4.7,
    reviews: 167,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-UqO-d_Es84G_kr85ZwFqWf5V2ONmOrpDw&s",
    location: "Safety Store",
    availability: "In Stock",
    specifications: {
      "Capacity": "310 lbs",
      "Standard": "OSHA 1926.502",
      "Material": "Nylon webbing",
      "Includes": "Harness, lanyard, carabiner"
    },
    description: "Complete fall protection harness system. Full body harness with quick-connect buckles.",
    features: [
      "Full body harness",
      "Quick-connect buckles",
      "Padded straps",
      "D-ring back",
      "5-year warranty"
    ],
    featured: true,
    bulkDiscount: false,
    minOrder: 1,
    delivery: true,
    stock: 75
  }
];

const BrowseMaterials = () => {
  const [materials] = useState(constructionMaterials);
  const [filteredMaterials, setFilteredMaterials] = useState(constructionMaterials);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [wishlist, setWishlist] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpecs, setSelectedSpecs] = useState({
    bulkDiscount: false,
    inStock: false,
    featuredOnly: false,
    deliveryAvailable: false
  });
  
  // Cart and purchase states
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [showMaterialDetails, setShowMaterialDetails] = useState(false);
  
  // Memoized categories
  const categories = useMemo(() => 
    ['all', ...new Set(constructionMaterials.map(item => item.category))],
    []
  );

  // Filter and sort materials
  useEffect(() => {
    const results = materials.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      const matchesBulk = !selectedSpecs.bulkDiscount || item.bulkDiscount;
      const matchesStock = !selectedSpecs.inStock || item.stock > 0;
      const matchesFeatured = !selectedSpecs.featuredOnly || item.featured;
      const matchesDelivery = !selectedSpecs.deliveryAvailable || item.delivery;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesBulk && 
             matchesStock && matchesFeatured && matchesDelivery;
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

    setFilteredMaterials(sortedResults);
  }, [searchTerm, selectedCategory, priceRange, sortBy, selectedSpecs, materials]);

  // Stable handlers
  const toggleWishlist = useCallback((materialId) => {
    setWishlist(prev => 
      prev.includes(materialId) 
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId]
    );
  }, []);

  const addToCart = useCallback((material, quantity = 1) => {
    const existingItem = cart.find(item => item.id === material.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === material.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...material, quantity }]);
    }
    
    setShowCart(true);
  }, [cart]);

  const removeFromCart = useCallback((materialId) => {
    setCart(cart.filter(item => item.id !== materialId));
  }, [cart]);

  const updateCartQuantity = useCallback((materialId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(materialId);
      return;
    }
    
    setCart(cart.map(item =>
      item.id === materialId ? { ...item, quantity: newQuantity } : item
    ));
  }, [cart, removeFromCart]);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const getCartItemCount = useCallback(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const viewMaterialDetails = useCallback((material) => {
    setSelectedMaterial(material);
    setShowMaterialDetails(true);
  }, []);

  const closeMaterialDetails = useCallback(() => {
    setSelectedMaterial(null);
    setShowMaterialDetails(false);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange([0, 200]);
    setSelectedSpecs({
      bulkDiscount: false,
      inStock: false,
      featuredOnly: false,
      deliveryAvailable: false
    });
  }, []);

  // StarRating component
  const StarRating = React.memo(({ rating }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              color: star <= rating ? '#fbbf24' : '#d1d5db',
              fontSize: '16px'
            }}
          >
            ★
          </span>
        ))}
        <span style={{ fontSize: '14px', color: '#6b7280', marginLeft: '4px' }}>
          ({rating.toFixed(1)})
        </span>
      </div>
    );
  });

  // MaterialCard component
  const MaterialCard = React.memo(({ material, onAddToCart, onWishlistToggle, onViewDetails, isWishlisted }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ position: 'relative' }}>
        <img 
          src={material.image} 
          alt={material.name}
          style={{ width: '100%', height: '192px', objectFit: 'cover' }}
        />
        {material.featured && (
          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
            <span style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Featured
            </span>
          </div>
        )}
        {material.bulkDiscount && (
          <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
            <span style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Bulk Discount
            </span>
          </div>
        )}
        <button 
          onClick={() => onWishlistToggle(material.id)}
          style={{
            position: 'absolute',
            top: '48px',
            right: '12px',
            padding: '8px',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <span style={{ 
            color: isWishlisted ? '#ef4444' : '#6b7280',
            fontSize: '16px'
          }}>
            {isWishlisted ? '❤️' : '🤍'}
          </span>
        </button>
      </div>

      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <h3 style={{ fontWeight: '600', fontSize: '18px', color: '#111827', margin: 0 }}>
            {material.name}
          </h3>
          <span style={{
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            fontSize: '12px',
            padding: '2px 8px',
            borderRadius: '4px',
            textTransform: 'capitalize'
          }}>
            {material.category}
          </span>
        </div>

        <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '12px' }}>{material.brand}</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: '#6b7280' }}>
              <span>📍</span>
              {material.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: '#6b7280' }}>
              <span>📦</span>
              {material.availability}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: '#6b7280' }}>Min. Order:</span>
            <span style={{ fontWeight: '600' }}>
              {material.minOrder} {material.priceUnit}{material.minOrder > 1 ? 's' : ''}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: '#6b7280' }}>Delivery:</span>
            <span style={{ 
              fontWeight: '600',
              color: material.delivery ? '#10b981' : '#9ca3af'
            }}>
              {material.delivery ? "Available" : "Not Available"}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ color: '#6b7280' }}>Stock:</span>
            <span style={{ fontWeight: '600' }}>{material.stock} units</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <StarRating rating={material.rating} />
          <span style={{ fontSize: '14px', color: '#6b7280' }}>{material.reviews} reviews</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
              ${material.price}
            </span>
            <span style={{ color: '#6b7280' }}>/{material.priceUnit}</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onViewDetails(material)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                backgroundColor: 'transparent',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <span>👁️</span>
              Details
            </button>
            <button
              onClick={() => onAddToCart(material)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '8px 12px',
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#ea580c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
            >
              <span>🛒</span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  // Material Details Modal
  const MaterialDetailsModal = () => {
    if (!selectedMaterial) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        zIndex: 50
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          maxWidth: '1024px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}>
          <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                Material Details
              </h2>
              <button
                onClick={closeMaterialDetails}
                style={{
                  padding: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '20px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                ✕
              </button>
            </div>
          </div>

          <div style={{ padding: '24px' }}>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '32px'
            }}>
              <div>
                <img 
                  src={selectedMaterial.image} 
                  alt={selectedMaterial.name}
                  style={{ 
                    width: '100%', 
                    height: '320px', 
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
                    {selectedMaterial.name}
                  </h3>
                  <p style={{ color: '#6b7280', margin: '0 0 16px 0' }}>
                    {selectedMaterial.brand} • {selectedMaterial.category}
                  </p>
                  <StarRating rating={selectedMaterial.rating} />
                  <span style={{ fontSize: '14px', color: '#6b7280', marginLeft: '8px' }}>
                    {selectedMaterial.reviews} reviews
                  </span>
                </div>

                <div style={{ backgroundColor: '#fffbeb', padding: '16px', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#ea580c' }}>
                      ${selectedMaterial.price}
                    </span>
                    <span style={{ color: '#6b7280' }}>per {selectedMaterial.priceUnit}</span>
                  </div>
                  {selectedMaterial.minOrder > 1 && (
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: '4px 0' }}>
                      Minimum order: {selectedMaterial.minOrder} {selectedMaterial.priceUnit}s
                    </p>
                  )}
                  {selectedMaterial.bulkDiscount && (
                    <p style={{ fontSize: '14px', color: '#10b981', fontWeight: '600', margin: '4px 0' }}>
                      Bulk discounts available
                    </p>
                  )}
                </div>

                <div>
                  <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '12px' }}>Description</h4>
                  <p style={{ color: '#6b7280' }}>{selectedMaterial.description}</p>
                </div>

                <div>
                  <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '12px' }}>Key Features</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                    {selectedMaterial.features.map((feature, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#10b981', fontSize: '16px' }}>✓</span>
                        <span style={{ color: '#6b7280' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '12px' }}>Specifications</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {Object.entries(selectedMaterial.specifications).map(([key, value]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#6b7280', textTransform: 'capitalize' }}>{key}:</span>
                        <span style={{ fontWeight: '600' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    addToCart(selectedMaterial);
                    closeMaterialDetails();
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#f97316',
                    color: 'white',
                    padding: '12px',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#ea580c'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
                >
                  <span>🛒</span>
                  Add to Cart - ${selectedMaterial.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Cart Sidebar
  const CartSidebar = () => {
    if (!showCart) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: 50
      }}>
        <div style={{
          backgroundColor: 'white',
          width: '100%',
          maxWidth: '448px',
          height: '100%',
          overflowY: 'auto'
        }}>
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                Shopping Cart
              </h3>
              <button 
                onClick={() => setShowCart(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '24px',
                  color: '#6b7280',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.target.style.color = '#374151'}
                onMouseOut={(e) => e.target.style.color = '#6b7280'}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛒</div>
                <p style={{ color: '#6b7280', marginBottom: '16px' }}>Your cart is empty</p>
                <button
                  onClick={() => setShowCart(false)}
                  style={{
                    padding: '8px 24px',
                    backgroundColor: '#f97316',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  {cart.map(item => (
                    <div key={item.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      backgroundColor: '#f9fafb',
                      padding: '16px',
                      borderRadius: '8px'
                    }}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontWeight: '600', color: '#1f2937', margin: '0 0 4px 0' }}>
                          {item.name}
                        </h4>
                        <p style={{ color: '#f97316', fontWeight: 'bold', margin: 0 }}>
                          ${item.price} / {item.priceUnit}
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#e5e7eb',
                            borderRadius: '50%',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                        >
                          -
                        </button>
                        <span style={{ width: '32px', textAlign: 'center' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#e5e7eb',
                            borderRadius: '50%',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            color: '#ef4444',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            marginLeft: '8px'
                          }}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>
                    <span>Total:</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert('Proceeding to checkout...');
                    setShowCart(false);
                  }}
                  style={{
                    width: '100%',
                    backgroundColor: '#f97316',
                    color: 'white',
                    padding: '16px',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#ea580c'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Main container styles
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const headerStyle = {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    borderBottom: '1px solid #e5e7eb'
  };

  const contentStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '32px 16px'
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '24px 0' 
          }}>
            <div>
              <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                Browse Materials
              </h1>
              <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>
                Quality construction materials and hardware supplies
              </p>
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              Professional materials for construction projects
            </div>
          </div>
        </div>
      </div>

      <div style={contentStyle}>
        {/* Search and Controls */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '16px'
          }}>
            {/* Search Bar */}
            <div style={{ position: 'relative', flex: 1, maxWidth: '672px' }}>
              <span style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>
                🔍
              </span>
              <input
                type="text"
                placeholder="Search materials by name, brand, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 40px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {/* View Toggle */}
              <div style={{ display: 'flex', backgroundColor: '#f3f4f6', borderRadius: '6px', padding: '4px' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '8px',
                    backgroundColor: viewMode === 'grid' ? 'white' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: viewMode === 'grid' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  <span>⏹️</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  style={{
                    padding: '8px',
                    backgroundColor: viewMode === 'list' ? 'white' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: viewMode === 'list' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  <span>📋</span>
                </button>
              </div>

              {/* Filters Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                <span>⚙️</span>
                Filters
                {Object.values(selectedSpecs).some(Boolean) && (
                  <span style={{
                    backgroundColor: '#f97316',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {Object.values(selectedSpecs).filter(Boolean).length}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white'
                }}
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* Cart Button */}
              <button
                onClick={() => setShowCart(true)}
                style={{
                  position: 'relative',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                <span>🛒</span>
                {cart.length > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    backgroundColor: '#f97316',
                    color: 'white',
                    fontSize: '12px',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getCartItemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div style={{
              marginTop: '24px',
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Filters</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={clearFilters}
                    style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    style={{
                      padding: '4px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px'
              }}>
                {/* Category Filter */}
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="all">All Categories</option>
                    {categories.filter(cat => cat !== 'all').map(category => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    style={{ width: '100%' }}
                  />
                </div>

                {/* Checkbox Filters */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={selectedSpecs.bulkDiscount}
                      onChange={(e) => setSelectedSpecs(prev => ({
                        ...prev,
                        bulkDiscount: e.target.checked
                      }))}
                      style={{ marginRight: '8px' }}
                    />
                    <span style={{ fontSize: '14px', color: '#374151' }}>Bulk Discount</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={selectedSpecs.inStock}
                      onChange={(e) => setSelectedSpecs(prev => ({
                        ...prev,
                        inStock: e.target.checked
                      }))}
                      style={{ marginRight: '8px' }}
                    />
                    <span style={{ fontSize: '14px', color: '#374151' }}>In Stock Only</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={selectedSpecs.featuredOnly}
                      onChange={(e) => setSelectedSpecs(prev => ({
                        ...prev,
                        featuredOnly: e.target.checked
                      }))}
                      style={{ marginRight: '8px' }}
                    />
                    <span style={{ fontSize: '14px', color: '#374151' }}>Featured Only</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0 }}>
              Construction Materials ({filteredMaterials.length} items)
            </h2>
            <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>
              {searchTerm && `Search results for "${searchTerm}"`}
            </p>
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            Sorted by: {sortBy === 'name' ? 'Name' : 
                      sortBy === 'price-low' ? 'Price: Low to High' :
                      sortBy === 'price-high' ? 'Price: High to Low' : 'Rating'}
          </div>
        </div>

        {/* Materials Grid */}
        {filteredMaterials.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 0',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '48px', color: '#9ca3af', marginBottom: '16px' }}>📦</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
              No materials found
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '16px' }}>Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              style={{
                padding: '8px 24px',
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {filteredMaterials.map(material => (
              <MaterialCard 
                key={material.id} 
                material={material}
                onAddToCart={addToCart}
                onWishlistToggle={toggleWishlist}
                onViewDetails={viewMaterialDetails}
                isWishlisted={wishlist.includes(material.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Material Details Modal */}
      {showMaterialDetails && <MaterialDetailsModal />}

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Floating Cart Button */}
      {cart.length > 0 && !showCart && (
        <button
          onClick={() => setShowCart(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#f97316',
            color: 'white',
            padding: '16px',
            borderRadius: '50%',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: 'none',
            cursor: 'pointer',
            zIndex: 40,
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ea580c'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
        >
          <div style={{ position: 'relative' }}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            <span style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              backgroundColor: '#ef4444',
              color: 'white',
              fontSize: '12px',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {getCartItemCount()}
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default BrowseMaterials;