import React, { useState } from 'react';

const Payment = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Mock payment data
  const paymentData = {
    overview: {
      balance: 125430.75,
      pending: 45200.50,
      overdue: 18700.25,
      paidThisMonth: 89230.00,
      upcomingPayments: [
        { id: 1, vendor: 'ABC Cement Supply', amount: 15200.00, dueDate: '2024-01-20', status: 'due_soon' },
        { id: 2, vendor: 'Steel Works Inc', amount: 8700.50, dueDate: '2024-01-22', status: 'due_soon' },
        { id: 3, vendor: 'Lumber Depot', amount: 12300.75, dueDate: '2024-01-25', status: 'due_soon' }
      ]
    },
    invoices: [
      {
        id: 'INV-7842',
        vendor: 'ABC Cement Supply',
        date: '2024-01-15',
        dueDate: '2024-01-25',
        amount: 15200.00,
        status: 'pending',
        items: [
          { description: 'Portland Cement 50kg - 100 units', amount: 12500.00 },
          { description: 'Concrete Mix Additives', amount: 2700.00 }
        ],
        paymentTerms: 'Net 10',
        accountNumber: 'ACC784215'
      },
      {
        id: 'INV-7841',
        vendor: 'Steel Works Inc',
        date: '2024-01-14',
        dueDate: '2024-01-24',
        amount: 8700.50,
        status: 'paid',
        items: [
          { description: 'Steel Rebar #4 - 200 units', amount: 1750.00 },
          { description: 'Rebar Tying Wire', amount: 450.50 },
          { description: 'Steel Mesh Sheets', amount: 6500.00 }
        ],
        paymentTerms: 'Net 10',
        accountNumber: 'ACC784198',
        paidDate: '2024-01-18',
        paymentMethod: 'Bank Transfer'
      },
      {
        id: 'INV-7840',
        vendor: 'Lumber Depot',
        date: '2024-01-13',
        dueDate: '2024-01-23',
        amount: 12300.75,
        status: 'pending',
        items: [
          { description: 'Pressure Treated 2x4 - 500 units', amount: 2125.00 },
          { description: 'Plywood Sheets 4x8 - 100 units', amount: 4500.00 },
          { description: 'Hardwood Flooring', amount: 5675.75 }
        ],
        paymentTerms: 'Net 10',
        accountNumber: 'ACC784063'
      },
      {
        id: 'INV-7839',
        vendor: 'Electrical Supply Co',
        date: '2024-01-10',
        dueDate: '2024-01-20',
        amount: 8450.25,
        status: 'overdue',
        items: [
          { description: 'Electrical Wire 12AWG', amount: 3250.00 },
          { description: 'Circuit Breakers', amount: 1875.25 },
          { description: 'Conduit Pipes', amount: 3325.00 }
        ],
        paymentTerms: 'Net 10',
        accountNumber: 'ACC783945',
        overdueDays: 3
      },
      {
        id: 'INV-7838',
        vendor: 'Plumbing Masters',
        date: '2024-01-08',
        dueDate: '2024-01-18',
        amount: 5670.80,
        status: 'paid',
        items: [
          { description: 'PVC Pipes Schedule 40', amount: 2520.00 },
          { description: 'Pipe Fittings Kit', amount: 675.80 },
          { description: 'Water Heater Unit', amount: 2475.00 }
        ],
        paymentTerms: 'Net 10',
        accountNumber: 'ACC783812',
        paidDate: '2024-01-15',
        paymentMethod: 'Credit Card'
      }
    ],
    paymentMethods: [
      {
        id: 1,
        type: 'bank_account',
        name: 'Primary Business Account',
        details: '**** 4567',
        bank: 'Business Bank Inc.',
        isDefault: true
      },
      {
        id: 2,
        type: 'credit_card',
        name: 'Corporate Credit Card',
        details: '**** 8912',
        bank: 'Visa',
        expiry: '12/2025',
        isDefault: false
      },
      {
        id: 3,
        type: 'bank_account',
        name: 'Operating Account',
        details: '**** 3456',
        bank: 'Commercial Bank',
        isDefault: false
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return { bg: '#d1fae5', text: '#065f46', border: '#10b981' };
      case 'pending': return { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' };
      case 'overdue': return { bg: '#fee2e2', text: '#991b1b', border: '#ef4444' };
      case 'due_soon': return { bg: '#dbeafe', text: '#1e40af', border: '#3b82f6' };
      default: return { bg: '#f3f4f6', text: '#374151', border: '#9ca3af' };
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid': return 'Paid';
      case 'pending': return 'Pending';
      case 'overdue': return 'Overdue';
      case 'due_soon': return 'Due Soon';
      default: return 'Unknown';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const PaymentMetricCard = ({ title, amount, description, trend, color }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      flex: 1
    }}>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500', marginBottom: '8px' }}>
          {title}
        </div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: color || '#111827' }}>
          {formatCurrency(amount)}
        </div>
      </div>
      {trend && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: trend > 0 ? '#10b981' : '#ef4444',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          <span>{trend > 0 ? '↗' : '↘'}</span>
          <span>{Math.abs(trend)}%</span>
          <span style={{ color: '#6b7280' }}>{description}</span>
        </div>
      )}
      {!trend && (
        <div style={{ color: '#6b7280', fontSize: '14px' }}>
          {description}
        </div>
      )}
    </div>
  );

  const InvoiceCard = ({ invoice }) => {
    const statusColor = getStatusColor(invoice.status);
    const isOverdue = invoice.status === 'overdue';
    const isDueSoon = invoice.status === 'pending' && new Date(invoice.dueDate) - new Date() < 3 * 24 * 60 * 60 * 1000;

    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${isOverdue ? '#ef4444' : isDueSoon ? '#f59e0b' : '#e5e7eb'}`,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderLeft: `4px solid ${statusColor.border}`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      onClick={() => setSelectedInvoice(invoice)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
                {invoice.id}
              </h3>
              <span style={{
                backgroundColor: statusColor.bg,
                color: statusColor.text,
                border: `1px solid ${statusColor.border}`,
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {getStatusText(invoice.status)}
              </span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '2px 0' }}>
              {invoice.vendor}
            </p>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
              Due: {new Date(invoice.dueDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
              {formatCurrency(invoice.amount)}
            </div>
            {isOverdue && (
              <div style={{ color: '#ef4444', fontSize: '12px', fontWeight: '500' }}>
                {invoice.overdueDays} days overdue
              </div>
            )}
            {isDueSoon && (
              <div style={{ color: '#f59e0b', fontSize: '12px', fontWeight: '500' }}>
                Due soon
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            {invoice.items.length} item{invoice.items.length !== 1 ? 's' : ''}
          </div>
          {invoice.status !== 'paid' && (
            <button
              style={{
                backgroundColor: isOverdue ? '#ef4444' : '#f97316',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedInvoice(invoice);
              }}
            >
              Pay Now
            </button>
          )}
        </div>
      </div>
    );
  };

  const PaymentMethodCard = ({ method }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '16px',
      border: `2px solid ${method.isDefault ? '#f97316' : '#e5e7eb'}`,
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: method.type === 'credit_card' ? '#3b82f6' : '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px'
            }}>
              {method.type === 'credit_card' ? '💳' : '🏦'}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                {method.name}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                {method.details} • {method.bank}
              </div>
            </div>
          </div>
        </div>
        {method.isDefault && (
          <span style={{
            backgroundColor: '#f97316',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: '500'
          }}>
            Default
          </span>
        )}
      </div>
      
      {method.expiry && (
        <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>
          Expires: {method.expiry}
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#6b7280',
            border: '1px solid #d1d5db',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            cursor: 'pointer'
          }}
        >
          Edit
        </button>
        {!method.isDefault && (
          <button
            style={{
              backgroundColor: 'transparent',
              color: '#f97316',
              border: '1px solid #f97316',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            Set Default
          </button>
        )}
      </div>
    </div>
  );

  const InvoiceModal = ({ invoice, onClose }) => {
    if (!invoice) return null;

    const statusColor = getStatusColor(invoice.status);

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
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
                {invoice.id}
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
                {invoice.vendor}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
                {formatCurrency(invoice.amount)}
              </div>
              <span style={{
                backgroundColor: statusColor.bg,
                color: statusColor.text,
                border: `1px solid ${statusColor.border}`,
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {getStatusText(invoice.status)}
              </span>
            </div>
          </div>

          {/* Invoice Details */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Invoice Date
              </h3>
              <p style={{ color: '#111827', fontSize: '16px' }}>
                {new Date(invoice.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Due Date
              </h3>
              <p style={{ color: '#111827', fontSize: '16px' }}>
                {new Date(invoice.dueDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Payment Terms
              </h3>
              <p style={{ color: '#111827', fontSize: '16px' }}>
                {invoice.paymentTerms}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Account Number
              </h3>
              <p style={{ color: '#111827', fontSize: '16px' }}>
                {invoice.accountNumber}
              </p>
            </div>
          </div>

          {/* Items */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Items
            </h3>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
              {invoice.items.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 16px',
                  backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white',
                  borderBottom: index < invoice.items.length - 1 ? '1px solid #e5e7eb' : 'none'
                }}>
                  <div style={{ fontSize: '14px', color: '#374151' }}>
                    {item.description}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                    {formatCurrency(item.amount)}
                  </div>
                </div>
              ))}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: '#f8fafc',
                borderTop: '2px solid #e5e7eb'
              }}>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#111827' }}>
                  Total
                </div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827' }}>
                  {formatCurrency(invoice.amount)}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          {invoice.status === 'paid' && (
            <div style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#166534', marginBottom: '8px' }}>
                Payment Information
              </h3>
              <p style={{ color: '#166534', fontSize: '14px', margin: '4px 0' }}>
                <strong>Paid on:</strong> {new Date(invoice.paidDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p style={{ color: '#166534', fontSize: '14px', margin: '4px 0' }}>
                <strong>Payment Method:</strong> {invoice.paymentMethod}
              </p>
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
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
            {invoice.status !== 'paid' && (
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
                Pay Invoice
              </button>
            )}
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#3b82f6',
                border: '1px solid #3b82f6',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    );
  };

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
                Payments
              </h1>
              <p style={{ 
                fontSize: '16px', 
                color: '#6b7280',
                margin: 0
              }}>
                Manage invoices and payment processing
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
                <span>💸</span>
                Make Payment
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid #e5e7eb' }}>
            {['overview', 'invoices', 'payment-methods', 'history'].map((tab) => (
              <button
                key={tab}
                style={{
                  backgroundColor: 'transparent',
                  color: activeTab === tab ? '#f97316' : '#6b7280',
                  border: 'none',
                  padding: '12px 0',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  borderBottom: activeTab === tab ? '2px solid #f97316' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '32px 20px' 
      }}>
        {activeTab === 'overview' && (
          <>
            {/* Key Metrics */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <PaymentMetricCard 
                title="Current Balance" 
                amount={paymentData.overview.balance}
                description="Total outstanding amount"
                color="#111827"
              />
              <PaymentMetricCard 
                title="Pending Payments" 
                amount={paymentData.overview.pending}
                description="Awaiting processing"
                color="#f59e0b"
              />
              <PaymentMetricCard 
                title="Overdue Invoices" 
                amount={paymentData.overview.overdue}
                description="Past due date"
                color="#ef4444"
              />
              <PaymentMetricCard 
                title="Paid This Month" 
                amount={paymentData.overview.paidThisMonth}
                description="Successful payments"
                trend={8.2}
                color="#10b981"
              />
            </div>

            {/* Upcoming Payments */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              marginBottom: '24px'
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: '0 0 20px 0' }}>
                Upcoming Payments
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {paymentData.overview.upcomingPayments.map(payment => (
                  <div key={payment.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div>
                      <div style={{ fontWeight: '500', color: '#111827', marginBottom: '4px' }}>
                        {payment.vendor}
                      </div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>
                        Due: {new Date(payment.dueDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                        {formatCurrency(payment.amount)}
                      </div>
                      <button
                        style={{
                          backgroundColor: '#f97316',
                          color: 'white',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '500',
                          cursor: 'pointer'
                        }}
                      >
                        Schedule Payment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'invoices' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', margin: 0 }}>
                Invoices
              </h2>
              <div style={{ display: 'flex', gap: '12px' }}>
                <select style={{
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  fontSize: '14px'
                }}>
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Overdue</option>
                </select>
                <input
                  type="text"
                  placeholder="Search invoices..."
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    width: '250px'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              {paymentData.invoices.map(invoice => (
                <InvoiceCard key={invoice.id} invoice={invoice} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'payment-methods' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', margin: 0 }}>
                Payment Methods
              </h2>
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
                Add Payment Method
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {paymentData.paymentMethods.map(method => (
                <PaymentMethodCard key={method.id} method={method} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', margin: '0 0 24px 0' }}>
              Payment History
            </h2>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '48px 24px',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                Payment History
              </h3>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                View your complete payment history and transaction records
              </p>
              <button style={{
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontWeight: '500',
                fontSize: '14px',
                cursor: 'pointer',
                marginTop: '16px'
              }}>
                Download Full Report
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Invoice Modal */}
      <InvoiceModal 
        invoice={selectedInvoice} 
        onClose={() => setSelectedInvoice(null)} 
      />
    </div>
  );
};

export default Payment;