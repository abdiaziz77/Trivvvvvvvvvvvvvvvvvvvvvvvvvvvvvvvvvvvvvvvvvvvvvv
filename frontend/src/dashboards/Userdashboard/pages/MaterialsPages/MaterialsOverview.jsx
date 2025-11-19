import React, { useState, useMemo } from 'react';

const MaterialsOverview = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [selectedMetric, setSelectedMetric] = useState('all');

  // Mock data for materials overview
  const materialsData = {
    summary: {
      totalProducts: 523,
      categories: 8,
      lowStock: 23,
      outOfStock: 7,
      monthlyRevenue: 125430,
      growth: 12.5
    },
    categories: [
      { name: 'Cement & Concrete', count: 45, revenue: 45200, growth: 8.2, lowStock: 3 },
      { name: 'Steel & Rebar', count: 32, revenue: 38700, growth: 15.7, lowStock: 2 },
      { name: 'Lumber & Timber', count: 78, revenue: 28900, growth: 5.4, lowStock: 8 },
      { name: 'Hardware & Tools', count: 156, revenue: 42300, growth: 22.1, lowStock: 5 },
      { name: 'Electrical Supplies', count: 67, revenue: 18700, growth: 9.8, lowStock: 2 },
      { name: 'Plumbing Materials', count: 54, revenue: 15600, growth: 7.3, lowStock: 1 },
      { name: 'Safety Equipment', count: 89, revenue: 24300, growth: 18.6, lowStock: 2 },
      { name: 'Finishing Materials', count: 112, revenue: 31500, growth: 11.2, lowStock: 0 }
    ],
    recentActivity: [
      { id: 1, product: 'Portland Cement 50kg', type: 'restock', quantity: 500, date: '2024-01-15', time: '08:30 AM' },
      { id: 2, product: 'Steel Rebar #4', type: 'sale', quantity: 1200, date: '2024-01-15', time: '10:15 AM' },
      { id: 3, product: 'Pressure Treated 2x4', type: 'low_stock', quantity: 15, date: '2024-01-14', time: '02:45 PM' },
      { id: 4, product: 'Heavy Duty Hammer Drill', type: 'sale', quantity: 8, date: '2024-01-14', time: '04:20 PM' },
      { id: 5, product: 'PVC Pipes Schedule 40', type: 'restock', quantity: 200, date: '2024-01-13', time: '09:10 AM' }
    ],
    topProducts: [
      { name: 'Portland Cement 50kg', category: 'Cement', sales: 2450, revenue: 20825, growth: 12.3 },
      { name: 'Steel Rebar #4', category: 'Steel', sales: 1870, revenue: 15895, growth: 18.7 },
      { name: 'Pressure Treated 2x4', category: 'Lumber', sales: 1560, revenue: 5070, growth: 8.9 },
      { name: 'Electrical Conduit PVC', category: 'Electrical', sales: 1340, revenue: 1675, growth: 15.2 },
      { name: 'Hard Hat with Visor', category: 'Safety', sales: 890, revenue: 22250, growth: 22.1 }
    ]
  };

  const metrics = [
    { id: 'all', name: 'All Materials', value: materialsData.summary.totalProducts, change: materialsData.summary.growth, icon: '📦' },
    { id: 'categories', name: 'Categories', value: materialsData.summary.categories, change: 0, icon: '📊' },
    { id: 'lowStock', name: 'Low Stock', value: materialsData.summary.lowStock, change: -5.2, icon: '⚠️' },
    { id: 'revenue', name: 'Monthly Revenue', value: `$${materialsData.summary.monthlyRevenue.toLocaleString()}`, change: materialsData.summary.growth, icon: '💰' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'restock': return '📥';
      case 'sale': return '💰';
      case 'low_stock': return '⚠️';
      default: return '📋';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'restock': return '#10b981';
      case 'sale': return '#3b82f6';
      case 'low_stock': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getActivityText = (type) => {
    switch (type) {
      case 'restock': return 'Restocked';
      case 'sale': return 'Sold';
      case 'low_stock': return 'Low Stock';
      default: return 'Updated';
    }
  };

  const filteredCategories = useMemo(() => {
    if (selectedMetric === 'all') return materialsData.categories;
    return materialsData.categories;
  }, [selectedMetric, materialsData.categories]);

  const MetricCard = ({ metric }) => (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderLeft: selectedMetric === metric.id ? '4px solid #f97316' : '4px solid transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      onClick={() => setSelectedMetric(metric.id)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500', marginBottom: '8px' }}>
            {metric.name}
          </div>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827' }}>
            {metric.value}
          </div>
        </div>
        <div style={{ fontSize: '32px' }}>
          {metric.icon}
        </div>
      </div>
      {metric.change !== 0 && (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          color: metric.change > 0 ? '#10b981' : '#ef4444',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          <span>{metric.change > 0 ? '↗' : '↘'}</span>
          <span>{Math.abs(metric.change)}%</span>
          <span style={{ color: '#6b7280' }}>from last month</span>
        </div>
      )}
    </div>
  );

  const CategoryProgress = ({ category }) => (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '8px', 
      padding: '16px',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ fontWeight: '600', color: '#111827' }}>{category.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>{category.count} products</div>
          {category.lowStock > 0 && (
            <div style={{ 
              backgroundColor: '#fef3c7',
              color: '#92400e',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              {category.lowStock} low stock
            </div>
          )}
        </div>
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>
          <span>Revenue</span>
          <span>${category.revenue.toLocaleString()}</span>
        </div>
        <div style={{ 
          width: '100%', 
          height: '6px', 
          backgroundColor: '#e5e7eb',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div 
            style={{
              height: '100%',
              backgroundColor: '#f97316',
              borderRadius: '3px',
              width: `${(category.revenue / 50000) * 100}%`,
              maxWidth: '100%'
            }}
          />
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          color: category.growth > 0 ? '#10b981' : '#ef4444',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          <span>{category.growth > 0 ? '↗' : '↘'}</span>
          <span>{Math.abs(category.growth)}% growth</span>
        </div>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#f97316',
            border: '1px solid #f97316',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f97316';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#f97316';
          }}
        >
          View Products
        </button>
      </div>
    </div>
  );

  const ActivityItem = ({ activity }) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px', 
      padding: '12px 0',
      borderBottom: '1px solid #f3f4f6'
    }}>
      <div 
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getActivityColor(activity.type) + '20',
          color: getActivityColor(activity.type),
          fontSize: '16px'
        }}
      >
        {getActivityIcon(activity.type)}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '500', color: '#111827', marginBottom: '2px' }}>
          {activity.product}
        </div>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>
          {getActivityText(activity.type)} • {activity.quantity} units
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
          {new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </div>
        <div style={{ fontSize: '12px', color: '#6b7280' }}>
          {activity.time}
        </div>
      </div>
    </div>
  );

  const TopProductItem = ({ product, rank }) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px', 
      padding: '12px 0',
      borderBottom: '1px solid #f3f4f6'
    }}>
      <div style={{ 
        width: '24px', 
        height: '24px', 
        borderRadius: '6px', 
        backgroundColor: rank <= 3 ? '#f97316' : '#e5e7eb',
        color: rank <= 3 ? 'white' : '#6b7280',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {rank}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '500', color: '#111827', marginBottom: '2px' }}>
          {product.name}
        </div>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>
          {product.category}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontWeight: '600', color: '#111827', marginBottom: '2px' }}>
          ${product.revenue.toLocaleString()}
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2px',
          fontSize: '12px',
          color: product.growth > 0 ? '#10b981' : '#ef4444'
        }}>
          <span>{product.growth > 0 ? '↗' : '↘'}</span>
          <span>{Math.abs(product.growth)}%</span>
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
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 20px' 
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '24px 0'
          }}>
            <div>
              <h1 style={{ 
                fontSize: '32px', 
                fontWeight: 'bold', 
                color: '#111827',
                margin: '0 0 4px 0'
              }}>
                Materials Overview
              </h1>
              <p style={{ 
                fontSize: '16px', 
                color: '#6b7280',
                margin: 0
              }}>
                Monitor your construction materials inventory and performance
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  fontSize: '14px'
                }}
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
              <button
                style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: '500',
                  fontSize: '14px',
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
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '32px 20px' 
      }}>
        {/* Key Metrics */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Left Column - Categories & Performance */}
          <div>
            {/* Categories Performance */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              marginBottom: '24px'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  color: '#111827',
                  margin: 0
                }}>
                  Categories Performance
                </h2>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                  {filteredCategories.length} categories
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {filteredCategories.map((category, index) => (
                  <CategoryProgress key={index} category={category} />
                ))}
              </div>
            </div>

            {/* Top Performing Products */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                color: '#111827',
                margin: '0 0 20px 0'
              }}>
                Top Performing Products
              </h2>
              
              <div>
                {materialsData.topProducts.map((product, index) => (
                  <TopProductItem key={product.name} product={product} rank={index + 1} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity & Quick Actions */}
          <div>
            {/* Recent Activity */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              marginBottom: '24px'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  color: '#111827',
                  margin: 0
                }}>
                  Recent Activity
                </h2>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#6b7280',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  View All
                </button>
              </div>
              
              <div>
                {materialsData.recentActivity.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                color: '#111827',
                margin: '0 0 20px 0'
              }}>
                Quick Actions
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#f97316',
                    color: 'white',
                    border: 'none',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#ea580c';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f97316';
                  }}
                >
                  📦 Add New Product
                </button>
                
                <button
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.borderColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  📊 Generate Inventory Report
                </button>
                
                <button
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.borderColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  ⚠️ View Low Stock Items
                </button>
                
                <button
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.borderColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  🔄 Manage Restock Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsOverview;