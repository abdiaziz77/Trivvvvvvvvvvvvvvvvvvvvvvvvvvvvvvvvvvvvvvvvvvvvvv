import React, { useState } from 'react';

const MaterialCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'cement',
      name: 'Cement & Concrete',
      description: 'Building foundations, structures, and masonry work',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN73TMe85_ZQJ7POb3w26TjY66efwVA4QAXA&s',
      productCount: 45,
      popularProducts: ['Portland Cement', 'Ready-Mix Concrete', 'Concrete Blocks', 'Mortar Mix'],
      features: ['High Strength', 'Weather Resistant', 'Fast Setting', 'Various Grades']
    },
    {
      id: 'steel',
      name: 'Steel & Rebar',
      description: 'Structural reinforcement and metal construction materials',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvQUFe03kRTV4TS8l0E15HbM5PYkSfvZ8bw&s',
      productCount: 32,
      popularProducts: ['Steel Rebar', 'Structural Beams', 'Wire Mesh', 'Steel Plates'],
      features: ['High Tensile Strength', 'Corrosion Resistant', 'ASTM Certified', 'Precision Cut']
    },
    {
      id: 'lumber',
      name: 'Lumber & Timber',
      description: 'Wood products for framing, finishing, and structural applications',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XkaistWKZJkviJRrlQfF7rfDYXCbyyzqFw&s',
      productCount: 78,
      popularProducts: ['Pressure Treated Lumber', 'Plywood Sheets', 'Dimensional Lumber', 'OSB Panels'],
      features: ['Pressure Treated', 'Kiln Dried', 'Grade Stamped', 'Sustainably Sourced']
    },
    {
      id: 'hardware',
      name: 'Hardware & Tools',
      description: 'Construction tools, fasteners, and hardware supplies',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ktI-n8kc2Zr3yc9u8VKw3RFsamk6Vrtd3w&s',
      productCount: 156,
      popularProducts: ['Power Tools', 'Hand Tools', 'Nails & Screws', 'Anchors & Fasteners'],
      features: ['Professional Grade', 'Warranty Included', 'Safety Certified', 'Heavy Duty']
    },
    {
      id: 'electrical',
      name: 'Electrical Supplies',
      description: 'Wiring, conduits, and electrical components',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yYxf4GChvvVZoGWlmZPhP9k0kAhD58AFbQ&s',
      productCount: 67,
      popularProducts: ['Electrical Wire', 'Conduit PVC', 'Circuit Breakers', 'Outlet Boxes'],
      features: ['UL Listed', 'Code Compliant', 'Easy Installation', 'Safety Rated']
    },
    {
      id: 'plumbing',
      name: 'Plumbing Materials',
      description: 'Pipes, fittings, and plumbing system components',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GxGkATeecDYN-xfHRTp14iHvr3rOqd-b9g&s',
      productCount: 54,
      popularProducts: ['PVC Pipes', 'Copper Pipes', 'Fittings & Valves', 'Water Heaters'],
      features: ['Leak Proof', 'Chemical Resistant', 'NSF Certified', 'Durable Construction']
    },
    {
      id: 'safety',
      name: 'Safety Equipment',
      description: 'Personal protective equipment and site safety gear',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMuC2Mm1yihIOaPqJ8S9uOfALna6xfJzZanQ&s',
      productCount: 89,
      popularProducts: ['Hard Hats', 'Safety Harnesses', 'Protective Gloves', 'Safety Glasses'],
      features: ['OSHA Compliant', 'Comfortable Fit', 'High Visibility', 'Durable Materials']
    },
    {
      id: 'finishing',
      name: 'Finishing Materials',
      description: 'Interior and exterior finishing products',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuvsO-OTv3ZqidLxohMleCcZZJHcJD6yWFw&s',
      productCount: 112,
      popularProducts: ['Drywall', 'Paint & Primers', 'Flooring', 'Trim & Molding'],
      features: ['Easy Application', 'Long Lasting', 'Various Finishes', 'Low VOC']
    }
  ];

  const stats = [
    { number: '500+', label: 'Products Available' },
    { number: '8', label: 'Categories' },
    { number: '24/7', label: 'Online Ordering' },
    { number: 'Next Day', label: 'Delivery Available' }
  ];

  const CategoryCard = ({ category }) => (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: selectedCategory?.id === category.id ? '2px solid #f97316' : '1px solid #e5e7eb'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
      onClick={() => setSelectedCategory(category)}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={category.image}
          alt={category.name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '4px 8px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#059669'
          }}
        >
          {category.productCount} products
        </div>
      </div>
      
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: '700', 
          color: '#111827', 
          margin: '0 0 8px 0' 
        }}>
          {category.name}
        </h3>
        <p style={{ 
          color: '#6b7280', 
          fontSize: '14px', 
          margin: '0 0 16px 0',
          lineHeight: '1.5'
        }}>
          {category.description}
        </p>
        
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            color: '#374151', 
            margin: '0 0 8px 0' 
          }}>
            Popular Products:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {category.popularProducts.slice(0, 3).map((product, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#f3f4f6',
                  color: '#4b5563',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}
              >
                {product}
              </span>
            ))}
            {category.popularProducts.length > 3 && (
              <span
                style={{
                  backgroundColor: '#f3f4f6',
                  color: '#4b5563',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}
              >
                +{category.popularProducts.length - 3} more
              </span>
            )}
          </div>
        </div>

        <button
          style={{
            width: '100%',
            backgroundColor: selectedCategory?.id === category.id ? '#ea580c' : '#f97316',
            color: 'white',
            border: 'none',
            padding: '12px 16px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#ea580c';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = selectedCategory?.id === category.id ? '#ea580c' : '#f97316';
          }}
        >
          Browse {category.name}
        </button>
      </div>
    </div>
  );

  const CategoryDetail = ({ category }) => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        zIndex: 50
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
              {category.name}
            </h2>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '24px',
                color: '#6b7280',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              ✕
            </button>
          </div>
        </div>

        <div style={{ padding: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            <img
              src={category.image}
              alt={category.name}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
                Category Overview
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '16px' }}>
                {category.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f97316' }}>
                    {category.productCount}+
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Products</div>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: '#e5e7eb' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f97316' }}>
                    24/7
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Availability</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
                Popular Products
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {category.popularProducts.map((product, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '6px'
                    }}
                  >
                    <span style={{ color: '#f97316' }}>•</span>
                    <span style={{ color: '#374151', fontSize: '14px' }}>{product}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
                Key Features
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {category.features.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      backgroundColor: '#f0fdf4',
                      borderRadius: '6px'
                    }}
                  >
                    <span style={{ color: '#10b981' }}>✓</span>
                    <span style={{ color: '#374151', fontSize: '14px' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
            <button
              style={{
                width: '100%',
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                padding: '16px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ea580c';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f97316';
              }}
            >
              View All {category.productCount} Products in {category.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px' 
        }}>
          <div style={{ 
            padding: '40px 0 30px 0',
            textAlign: 'center'
          }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: 'bold', 
              color: '#111827',
              margin: '0 0 12px 0'
            }}>
              Material Categories
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: '#6b7280',
              margin: '0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Browse our comprehensive range of construction materials organized by category
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ backgroundColor: 'white', padding: '40px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  backgroundColor: '#fffbeb',
                  borderRadius: '12px',
                  border: '1px solid #fed7aa'
                }}
              >
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 'bold', 
                  color: '#ea580c',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  fontSize: '16px', 
                  color: '#92400e',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ 
        backgroundColor: '#fffbeb',
        borderTop: '1px solid #fed7aa',
        padding: '60px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: '#92400e',
            margin: '0 0 16px 0'
          }}>
            Need Help Choosing Materials?
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#b45309',
            margin: '0 0 32px 0',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Our material specialists are ready to help you select the right products for your project
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{
                backgroundColor: '#ea580c',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#c2410c';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#ea580c';
              }}
            >
              Contact Our Specialists
            </button>
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#ea580c',
                border: '2px solid #ea580c',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ea580c';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ea580c';
              }}
            >
              Download Product Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Category Detail Modal */}
      {selectedCategory && <CategoryDetail category={selectedCategory} />}
    </div>
  );
};

export default MaterialCategories;