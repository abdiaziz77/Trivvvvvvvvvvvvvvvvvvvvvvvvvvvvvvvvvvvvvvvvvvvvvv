import React, { useState, useMemo } from 'react';

const MyOrders = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Mock order data
  const ordersData = [
    {
      id: 'ORD-7842',
      customer: 'John Construction Co.',
      date: '2024-01-15',
      deliveryDate: '2024-01-20',
      status: 'delivered',
      total: 12540.75,
      items: [
        { name: 'Portland Cement 50kg', quantity: 50, price: 12.50 },
        { name: 'Steel Rebar #4', quantity: 200, price: 8.75 },
        { name: 'Pressure Treated 2x4', quantity: 300, price: 4.25 }
      ],
      address: '123 Construction Ave, Site 5B, Austin, TX 78701',
      trackingNumber: 'TRK78421563',
      deliveryProof: ['delivery1.jpg', 'signature.pdf']
    },
    {
      id: 'ORD-7841',
      customer: 'Smith Renovations',
      date: '2024-01-14',
      deliveryDate: '2024-01-18',
      status: 'shipped',
      total: 8420.30,
      items: [
        { name: 'Electrical Conduit PVC', quantity: 150, price: 3.25 },
        { name: 'Copper Wire 12AWG', quantity: 800, price: 1.85 },
        { name: 'Circuit Breakers', quantity: 25, price: 24.99 }
      ],
      address: '456 Renovation St, Suite 200, Dallas, TX 75201',
      trackingNumber: 'TRK78419874',
      deliveryProof: []
    },
    {
      id: 'ORD-7840',
      customer: 'Davis Builders LLC',
      date: '2024-01-14',
      deliveryDate: '2024-01-22',
      status: 'processing',
      total: 15680.50,
      items: [
        { name: 'Hard Hat with Visor', quantity: 45, price: 25.00 },
        { name: 'Safety Gloves', quantity: 100, price: 8.50 },
        { name: 'Steel-toe Boots', quantity: 30, price: 89.99 }
      ],
      address: '789 Builder Blvd, Industrial Park, Houston, TX 77002',
      trackingNumber: null,
      deliveryProof: []
    },
    {
      id: 'ORD-7839',
      customer: 'Thompson Contractors',
      date: '2024-01-13',
      deliveryDate: '2024-01-17',
      status: 'cancelled',
      total: 6230.20,
      items: [
        { name: 'PVC Pipes Schedule 40', quantity: 80, price: 15.75 },
        { name: 'Pipe Fittings Kit', quantity: 15, price: 45.00 }
      ],
      address: '321 Contractor Lane, Fort Worth, TX 76102',
      trackingNumber: null,
      deliveryProof: [],
      cancellationReason: 'Customer requested cancellation'
    },
    {
      id: 'ORD-7838',
      customer: 'Miller Development',
      date: '2024-01-12',
      deliveryDate: '2024-01-16',
      status: 'delivered',
      total: 28950.80,
      items: [
        { name: 'Portland Cement 50kg', quantity: 120, price: 12.50 },
        { name: 'Concrete Mixer', quantity: 2, price: 1250.00 },
        { name: 'Rebar Tying Tool', quantity: 8, price: 85.40 }
      ],
      address: '654 Development Rd, San Antonio, TX 78201',
      trackingNumber: 'TRK78384512',
      deliveryProof: ['proof7838.jpg', 'signature7838.pdf']
    },
    {
      id: 'ORD-7837',
      customer: 'Wilson Construction',
      date: '2024-01-11',
      deliveryDate: '2024-01-25',
      status: 'processing',
      total: 8740.60,
      items: [
        { name: 'Drywall Sheets 4x8', quantity: 60, price: 12.75 },
        { name: 'Drywall Screws', quantity: 5000, price: 0.08 },
        { name: 'Joint Compound', quantity: 25, price: 18.99 }
      ],
      address: '987 Wilson Ave, El Paso, TX 79901',
      trackingNumber: null,
      deliveryProof: []
    }
  ];

  const statusFilters = [
    { id: 'all', name: 'All Orders', count: ordersData.length },
    { id: 'processing', name: 'Processing', count: ordersData.filter(order => order.status === 'processing').length },
    { id: 'shipped', name: 'Shipped', count: ordersData.filter(order => order.status === 'shipped').length },
    { id: 'delivered', name: 'Delivered', count: ordersData.filter(order => order.status === 'delivered').length },
    { id: 'cancelled', name: 'Cancelled', count: ordersData.filter(order => order.status === 'cancelled').length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing': return { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' };
      case 'shipped': return { bg: '#dbeafe', text: '#1e40af', border: '#3b82f6' };
      case 'delivered': return { bg: '#d1fae5', text: '#065f46', border: '#10b981' };
      case 'cancelled': return { bg: '#fee2e2', text: '#991b1b', border: '#ef4444' };
      default: return { bg: '#f3f4f6', text: '#374151', border: '#9ca3af' };
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'processing': return 'Processing';
      case 'shipped': return 'Shipped';
      case 'delivered': return 'Delivered';
      case 'cancelled': return 'Cancelled';
      default: return 'Unknown';
    }
  };

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = ordersData;

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(order => order.status === selectedStatus);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort orders
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'highest':
          return b.total - a.total;
        case 'lowest':
          return a.total - b.total;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedStatus, searchTerm, sortBy]);

  const OrderCard = ({ order }) => {
    const statusColor = getStatusColor(order.status);
    const [expanded, setExpanded] = useState(false);

    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        marginBottom: '16px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      }}
      onClick={() => setExpanded(!expanded)}>
        {/* Order Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>
                {order.id}
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
                {getStatusText(order.status)}
              </span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0' }}>
              {order.customer}
            </p>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
              Ordered: {new Date(order.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
              ${order.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
              {order.items.length} item{order.items.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Expanded Details */}
        {expanded && (
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
            {/* Order Items */}
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 12px 0' }}>
                Order Items
              </h4>
              {order.items.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: index < order.items.length - 1 ? '1px solid #f3f4f6' : 'none'
                }}>
                  <div>
                    <div style={{ fontWeight: '500', color: '#111827' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#6b7280' }}>
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div style={{ fontWeight: '600', color: '#111827' }}>
                    ${(item.quantity * item.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Information */}
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 8px 0' }}>
                Delivery Information
              </h4>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0' }}>
                <strong>Address:</strong> {order.address}
              </p>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0' }}>
                <strong>Estimated Delivery:</strong> {new Date(order.deliveryDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              {order.trackingNumber && (
                <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0' }}>
                  <strong>Tracking:</strong> {order.trackingNumber}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {order.status === 'processing' && (
                <>
                  <button style={{
                    backgroundColor: '#f97316',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}>
                    Update Status
                  </button>
                  <button style={{
                    backgroundColor: 'transparent',
                    color: '#ef4444',
                    border: '1px solid #ef4444',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}>
                    Cancel Order
                  </button>
                </>
              )}
              {order.status === 'shipped' && (
                <button style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  Mark as Delivered
                </button>
              )}
              <button style={{
                backgroundColor: 'transparent',
                color: '#6b7280',
                border: '1px solid #d1d5db',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Print Invoice
              </button>
              {order.deliveryProof.length > 0 && (
                <button style={{
                  backgroundColor: 'transparent',
                  color: '#3b82f6',
                  border: '1px solid #3b82f6',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  View Delivery Proof
                </button>
              )}
            </div>

            {/* Cancellation Reason */}
            {order.status === 'cancelled' && order.cancellationReason && (
              <div style={{ 
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '6px',
                padding: '12px',
                marginTop: '12px'
              }}>
                <p style={{ color: '#dc2626', fontSize: '14px', margin: 0 }}>
                  <strong>Cancellation Reason:</strong> {order.cancellationReason}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const StatusFilter = ({ filter }) => (
    <button
      style={{
        backgroundColor: selectedStatus === filter.id ? '#f97316' : 'white',
        color: selectedStatus === filter.id ? 'white' : '#374151',
        border: `1px solid ${selectedStatus === filter.id ? '#f97316' : '#d1d5db'}`,
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
      onClick={() => setSelectedStatus(filter.id)}
    >
      <span>{filter.name}</span>
      <span style={{
        backgroundColor: selectedStatus === filter.id ? 'rgba(255,255,255,0.2)' : '#f3f4f6',
        color: selectedStatus === filter.id ? 'white' : '#6b7280',
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
                My Orders
              </h1>
              <p style={{ 
                fontSize: '16px', 
                color: '#6b7280',
                margin: 0
              }}>
                Manage and track your construction material orders
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
                <span>📦</span>
                Create New Order
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
        {/* Filters and Search */}
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
              Order Management
            </h2>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search orders..."
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
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  fontSize: '14px'
                }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
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

        {/* Orders Summary */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
              {ordersData.length}
            </div>
            <div style={{ color: '#6b7280', fontSize: '14px' }}>Total Orders</div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
              ${ordersData.reduce((sum, order) => sum + order.total, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div style={{ color: '#6b7280', fontSize: '14px' }}>Total Value</div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', marginBottom: '8px' }}>
              {ordersData.filter(order => order.status === 'delivered').length}
            </div>
            <div style={{ color: '#6b7280', fontSize: '14px' }}>Completed</div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b', marginBottom: '8px' }}>
              {ordersData.filter(order => order.status === 'processing').length}
            </div>
            <div style={{ color: '#6b7280', fontSize: '14px' }}>In Progress</div>
          </div>
        </div>

        {/* Orders List */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: '0 0 16px 0' }}>
            {filteredAndSortedOrders.length} Order{filteredAndSortedOrders.length !== 1 ? 's' : ''} Found
          </h2>
          
          {filteredAndSortedOrders.length === 0 ? (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '48px 24px',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📦</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                No orders found
              </h3>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                {searchTerm ? 'Try adjusting your search terms' : 'No orders match the selected filters'}
              </p>
            </div>
          ) : (
            <div>
              {filteredAndSortedOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;