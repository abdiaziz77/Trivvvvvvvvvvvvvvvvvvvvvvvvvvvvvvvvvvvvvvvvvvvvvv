import React, { useState } from 'react';

const Suppliers = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock suppliers data
  const suppliersData = {
    summary: {
      totalSuppliers: 24,
      activeSuppliers: 18,
      pendingApproval: 3,
      suspended: 3,
      totalSpend: 1254300.75,
      topPerforming: 8
    },
    suppliers: [
      {
        id: 'SUP-001',
        name: 'ABC Cement Supply Co.',
        contact: {
          name: 'John Smith',
          email: 'john@abccement.com',
          phone: '(555) 123-4567'
        },
        category: 'Cement & Concrete',
        rating: 4.8,
        status: 'active',
        since: '2018-03-15',
        totalOrders: 142,
        completionRate: 98.2,
        avgDeliveryTime: '2.3 days',
        totalSpend: 452000.50,
        paymentTerms: 'Net 30',
        materials: ['Portland Cement', 'Concrete Mix', 'Mortar', 'Additives'],
        address: '123 Industrial Park, Austin, TX 78701',
        certifications: ['ISO 9001', 'OSHA Certified'],
        performance: {
          quality: 4.9,
          delivery: 4.7,
          communication: 4.8,
          pricing: 4.6
        },
        recentActivity: [
          { date: '2024-01-15', type: 'order', details: 'Order #7842 - 500 units Portland Cement' },
          { date: '2024-01-10', type: 'delivery', details: 'Completed delivery ahead of schedule' },
          { date: '2024-01-08', type: 'payment', details: 'Invoice #7821 paid' }
        ]
      },
      {
        id: 'SUP-002',
        name: 'Steel Works International',
        contact: {
          name: 'Maria Rodriguez',
          email: 'maria@steelworks.com',
          phone: '(555) 234-5678'
        },
        category: 'Steel & Rebar',
        rating: 4.6,
        status: 'active',
        since: '2019-07-22',
        totalOrders: 89,
        completionRate: 95.5,
        avgDeliveryTime: '3.1 days',
        totalSpend: 387000.75,
        paymentTerms: 'Net 15',
        materials: ['Steel Rebar', 'Structural Steel', 'Wire Mesh', 'Steel Plates'],
        address: '456 Metal Ave, Houston, TX 77002',
        certifications: ['AISC Certified', 'ISO 14001'],
        performance: {
          quality: 4.7,
          delivery: 4.5,
          communication: 4.6,
          pricing: 4.4
        },
        recentActivity: [
          { date: '2024-01-14', type: 'order', details: 'Order #7841 - Steel Rebar #4' },
          { date: '2024-01-12', type: 'quality', details: 'Quality inspection passed' }
        ]
      },
      {
        id: 'SUP-003',
        name: 'Premium Lumber Depot',
        contact: {
          name: 'Robert Johnson',
          email: 'robert@premiumlumber.com',
          phone: '(555) 345-6789'
        },
        category: 'Lumber & Timber',
        rating: 4.9,
        status: 'active',
        since: '2020-01-10',
        totalOrders: 156,
        completionRate: 99.1,
        avgDeliveryTime: '1.8 days',
        totalSpend: 289000.25,
        paymentTerms: 'Net 30',
        materials: ['Pressure Treated Lumber', 'Plywood', 'Hardwood', 'Engineered Wood'],
        address: '789 Timber Lane, Dallas, TX 75201',
        certifications: ['SFI Certified', 'FSC Certified'],
        performance: {
          quality: 4.9,
          delivery: 4.8,
          communication: 4.9,
          pricing: 4.7
        },
        recentActivity: [
          { date: '2024-01-13', type: 'delivery', details: 'Emergency order completed' },
          { date: '2024-01-11', type: 'rating', details: 'Received 5-star rating' }
        ]
      },
      {
        id: 'SUP-004',
        name: 'Electrical Solutions Inc.',
        contact: {
          name: 'Sarah Chen',
          email: 'sarah@electricalsolutions.com',
          phone: '(555) 456-7890'
        },
        category: 'Electrical Supplies',
        rating: 4.4,
        status: 'pending',
        since: '2024-01-05',
        totalOrders: 12,
        completionRate: 91.7,
        avgDeliveryTime: '4.2 days',
        totalSpend: 45000.80,
        paymentTerms: 'Net 15',
        materials: ['Electrical Wire', 'Conduit', 'Breakers', 'Fixtures'],
        address: '321 Power St, San Antonio, TX 78201',
        certifications: ['UL Listed', 'NEC Compliant'],
        performance: {
          quality: 4.3,
          delivery: 4.2,
          communication: 4.5,
          pricing: 4.6
        },
        recentActivity: [
          { date: '2024-01-14', type: 'application', details: 'Application under review' },
          { date: '2024-01-12', type: 'document', details: 'Certification documents submitted' }
        ]
      },
      {
        id: 'SUP-005',
        name: 'Master Plumbing Supply',
        contact: {
          name: 'David Wilson',
          email: 'david@masterplumbing.com',
          phone: '(555) 567-8901'
        },
        category: 'Plumbing Materials',
        rating: 4.7,
        status: 'active',
        since: '2018-11-30',
        totalOrders: 203,
        completionRate: 97.8,
        avgDeliveryTime: '2.1 days',
        totalSpend: 156000.40,
        paymentTerms: 'Net 30',
        materials: ['PVC Pipes', 'Copper Pipes', 'Fittings', 'Water Heaters'],
        address: '654 Pipe Avenue, Fort Worth, TX 76102',
        certifications: ['NSF Certified', 'UPC Compliant'],
        performance: {
          quality: 4.8,
          delivery: 4.6,
          communication: 4.7,
          pricing: 4.5
        },
        recentActivity: [
          { date: '2024-01-15', type: 'order', details: 'Large commercial order received' },
          { date: '2024-01-13', type: 'delivery', details: 'On-time delivery milestone' }
        ]
      },
      {
        id: 'SUP-006',
        name: 'Safety First Equipment',
        contact: {
          name: 'Lisa Brown',
          email: 'lisa@safetyfirst.com',
          phone: '(555) 678-9012'
        },
        category: 'Safety Equipment',
        rating: 4.5,
        status: 'suspended',
        since: '2019-05-18',
        totalOrders: 67,
        completionRate: 88.9,
        avgDeliveryTime: '5.5 days',
        totalSpend: 89000.60,
        paymentTerms: 'Net 15',
        materials: ['Hard Hats', 'Safety Gloves', 'Harnesses', 'Protective Gear'],
        address: '987 Safety Blvd, El Paso, TX 79901',
        certifications: ['ANSI Certified', 'OSHA Compliant'],
        performance: {
          quality: 4.2,
          delivery: 3.8,
          communication: 4.1,
          pricing: 4.7
        },
        recentActivity: [
          { date: '2024-01-10', type: 'suspension', details: 'Temporarily suspended - delivery issues' },
          { date: '2024-01-08', type: 'warning', details: 'Performance review conducted' }
        ]
      }
    ],
    categories: [
      'Cement & Concrete',
      'Steel & Rebar',
      'Lumber & Timber',
      'Electrical Supplies',
      'Plumbing Materials',
      'Safety Equipment',
      'Hardware & Tools',
      'Finishing Materials'
    ]
  };

  const statusFilters = [
    { id: 'all', name: 'All Suppliers', count: suppliersData.summary.totalSuppliers },
    { id: 'active', name: 'Active', count: suppliersData.summary.activeSuppliers },
    { id: 'pending', name: 'Pending', count: suppliersData.summary.pendingApproval },
    { id: 'suspended', name: 'Suspended', count: suppliersData.summary.suspended }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return { bg: '#d1fae5', text: '#065f46', border: '#10b981' };
      case 'pending': return { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' };
      case 'suspended': return { bg: '#fee2e2', text: '#991b1b', border: '#ef4444' };
      default: return { bg: '#f3f4f6', text: '#374151', border: '#9ca3af' };
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'pending': return 'Pending Approval';
      case 'suspended': return 'Suspended';
      default: return 'Unknown';
    }
  };

  const filteredSuppliers = suppliersData.suppliers.filter(supplier => {
    const matchesStatus = activeTab === 'all' || supplier.status === activeTab;
    const matchesSearch = searchTerm === '' || 
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const SupplierCard = ({ supplier }) => {
    const statusColor = getStatusColor(supplier.status);

    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      onClick={() => setSelectedSupplier(supplier)}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>
                {supplier.name}
              </h3>
              <span style={{
                backgroundColor: statusColor.bg,
                color: statusColor.text,
                border: `1px solid ${statusColor.border}`,
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {getStatusText(supplier.status)}
              </span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0' }}>
              {supplier.category}
            </p>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
              Since {new Date(supplier.since).getFullYear()}
            </p>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#f59e0b' }}>
                ⭐ {supplier.rating}
              </span>
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {supplier.totalOrders} orders
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '4px' }}>
            {supplier.contact.name}
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '2px' }}>
            📧 {supplier.contact.email}
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            📞 {supplier.contact.phone}
          </div>
        </div>

        {/* Performance Metrics */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>
              Completion Rate
            </div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
              {supplier.completionRate}%
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>
              Avg. Delivery
            </div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
              {supplier.avgDeliveryTime}
            </div>
          </div>
        </div>

        {/* Materials */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
            Key Materials:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {supplier.materials.slice(0, 3).map((material, index) => (
              <span key={index} style={{
                backgroundColor: '#f3f4f6',
                color: '#374151',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '11px'
              }}>
                {material}
              </span>
            ))}
            {supplier.materials.length > 3 && (
              <span style={{
                backgroundColor: '#f3f4f6',
                color: '#6b7280',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '11px'
              }}>
                +{supplier.materials.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              flex: 1
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSupplier(supplier);
            }}
          >
            View Details
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#3b82f6',
              border: '1px solid #3b82f6',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            Contact
          </button>
        </div>
      </div>
    );
  };

  const SupplierModal = ({ supplier, onClose }) => {
    if (!supplier) return null;

    const statusColor = getStatusColor(supplier.status);

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
        zIndex: 1000,
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                  {supplier.name}
                </h2>
                <span style={{
                  backgroundColor: statusColor.bg,
                  color: statusColor.text,
                  border: `1px solid ${statusColor.border}`,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {getStatusText(supplier.status)}
                </span>
              </div>
              <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
                {supplier.category} • Supplier since {new Date(supplier.since).getFullYear()}
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '24px',
                color: '#6b7280',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              ×
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Left Column */}
            <div>
              {/* Contact Information */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                  Contact Information
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                      Primary Contact
                    </div>
                    <div style={{ fontSize: '16px', color: '#111827' }}>{supplier.contact.name}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                      Email
                    </div>
                    <div style={{ fontSize: '16px', color: '#3b82f6' }}>{supplier.contact.email}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                      Phone
                    </div>
                    <div style={{ fontSize: '16px', color: '#111827' }}>{supplier.contact.phone}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                      Address
                    </div>
                    <div style={{ fontSize: '16px', color: '#111827' }}>{supplier.address}</div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                  Performance Metrics
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
                      {supplier.rating}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>Rating</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
                      {supplier.totalOrders}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>Total Orders</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
                      {supplier.completionRate}%
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>Completion Rate</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
                      {supplier.avgDeliveryTime}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>Avg. Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Materials */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                  Materials Supplied
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {supplier.materials.map((material, index) => (
                    <span key={index} style={{
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      padding: '6px 12px',
                      borderRadius: '16px',
                      fontSize: '14px'
                    }}>
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {supplier.certifications && supplier.certifications.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                    Certifications
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {supplier.certifications.map((cert, index) => (
                      <span key={index} style={{
                        backgroundColor: '#dbeafe',
                        color: '#1e40af',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Performance Scores */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                  Performance Scores
                </h3>
                {Object.entries(supplier.performance).map(([key, value]) => (
                  <div key={key} style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '14px', color: '#374151', textTransform: 'capitalize' }}>
                        {key}
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                        {value}/5
                      </span>
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
                          backgroundColor: value >= 4.5 ? '#10b981' : value >= 4 ? '#f59e0b' : '#ef4444',
                          borderRadius: '3px',
                          width: `${(value / 5) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Recent Activity
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {supplier.recentActivity.map((activity, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px'
                  }}>
                    {activity.type === 'order' ? '📦' : 
                     activity.type === 'delivery' ? '🚚' : 
                     activity.type === 'payment' ? '💳' : 
                     activity.type === 'quality' ? '⭐' : '📝'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', color: '#111827' }}>
                      {activity.details}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>
                      {new Date(activity.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#6b7280',
                border: '1px solid #d1d5db',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
              onClick={onClose}
            >
              Close
            </button>
            <button
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Contact Supplier
            </button>
            <button
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  };

  const StatusFilter = ({ filter }) => (
    <button
      style={{
        backgroundColor: activeTab === filter.id ? '#f97316' : 'white',
        color: activeTab === filter.id ? 'white' : '#374151',
        border: `1px solid ${activeTab === filter.id ? '#f97316' : '#d1d5db'}`,
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
      onClick={() => setActiveTab(filter.id)}
    >
      <span>{filter.name}</span>
      <span style={{
        backgroundColor: activeTab === filter.id ? 'rgba(255,255,255,0.2)' : '#f3f4f6',
        color: activeTab === filter.id ? 'white' : '#6b7280',
        padding: '2px 8px',
        borderRadius: '12px',
        fontSize: '12px'
      }}>
        {filter.count}
      </span>
    </button>
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
                Suppliers
              </h1>
              <p style={{ 
                fontSize: '16px', 
                color: '#6b7280',
                margin: 0
              }}>
                Manage your construction material suppliers and partners
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button style={{
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontWeight: '500',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>➕</span>
                Add New Supplier
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              flex: 1,
              minWidth: '200px'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
                {suppliersData.summary.totalSuppliers}
              </div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>Total Suppliers</div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              flex: 1,
              minWidth: '200px'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', marginBottom: '8px' }}>
                {suppliersData.summary.activeSuppliers}
              </div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>Active Suppliers</div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              flex: 1,
              minWidth: '200px'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b', marginBottom: '8px' }}>
                {suppliersData.summary.pendingApproval}
              </div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>Pending Approval</div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              flex: 1,
              minWidth: '200px'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ef4444', marginBottom: '8px' }}>
                {suppliersData.summary.suspended}
              </div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>Suspended</div>
            </div>
          </div>

          {/* Filters */}
          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0 }}>
                Supplier Management
              </h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Search suppliers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      padding: '8px 16px 8px 40px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      width: '300px'
                    }}
                  />
                  <span style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6b7280'
                  }}>
                    🔍
                  </span>
                </div>
                
                <select
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    backgroundColor: 'white',
                    fontSize: '14px'
                  }}
                >
                  <option>All Categories</option>
                  {suppliersData.categories.map(category => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Status Filters */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {statusFilters.map(filter => (
                <StatusFilter key={filter.id} filter={filter} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '32px 20px' 
      }}>
        {/* Suppliers Grid */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: '0 0 16px 0' }}>
            {filteredSuppliers.length} Supplier{filteredSuppliers.length !== 1 ? 's' : ''} Found
          </h2>
          
          {filteredSuppliers.length === 0 ? (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '48px 24px',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏗️</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                No suppliers found
              </h3>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                {searchTerm ? 'Try adjusting your search terms' : 'No suppliers match the selected filters'}
              </p>
            </div>
          ) : (
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
              gap: '24px'
            }}>
              {filteredSuppliers.map(supplier => (
                <SupplierCard key={supplier.id} supplier={supplier} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Supplier Modal */}
      <SupplierModal 
        supplier={selectedSupplier} 
        onClose={() => setSelectedSupplier(null)} 
      />
    </div>
  );
};

export default Suppliers;