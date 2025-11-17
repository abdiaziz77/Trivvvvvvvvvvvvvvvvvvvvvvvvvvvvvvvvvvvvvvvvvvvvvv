import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Truck,
  Building,
  Users,
  MapPin,
  ArrowUp,
  ArrowDown,
  Eye,
  Download,
  Filter
} from 'lucide-react';

// Mock data for rental overview
const overviewData = {
  stats: {
    totalRentals: 24,
    activeRentals: 3,
    upcomingRentals: 2,
    completedRentals: 19,
    totalSpent: 286450,
    monthlySpent: 47200,
    savings: 12500,
    utilizationRate: 78
  },
  recentActivity: [
    {
      id: 1,
      type: 'rental_start',
      equipment: 'Hydraulic Excavator CAT 320',
      date: '2024-01-15',
      time: '08:30 AM',
      status: 'active'
    },
    {
      id: 2,
      type: 'payment_received',
      equipment: 'Crawler Dozer CAT D6',
      date: '2024-01-14',
      time: '02:15 PM',
      amount: 4200,
      status: 'completed'
    },
    {
      id: 3,
      type: 'maintenance_alert',
      equipment: 'Tower Crane L200',
      date: '2024-01-14',
      time: '10:00 AM',
      message: 'Scheduled maintenance due',
      status: 'warning'
    },
    {
      id: 4,
      type: 'rental_ending',
      equipment: 'Concrete Mixer Truck',
      date: '2024-01-13',
      time: '04:45 PM',
      daysLeft: 2,
      status: 'alert'
    }
  ],
  equipmentUsage: [
    { category: 'Excavators', count: 8, percentage: 33 },
    { category: 'Earth Moving', count: 5, percentage: 21 },
    { category: 'Lifting Equipment', count: 4, percentage: 17 },
    { category: 'Concrete Equipment', count: 3, percentage: 13 },
    { category: 'Hauling Equipment', count: 2, percentage: 8 },
    { category: 'Others', count: 2, percentage: 8 }
  ],
  financials: {
    monthly: [42000, 38500, 47200, 39100, 44500, 52300],
    categories: ['Excavators', 'Earth Moving', 'Lifting', 'Concrete', 'Hauling', 'Others'],
    upcomingPayments: [
      { id: 'JN-2024-001', amount: 15750, dueDate: '2024-01-20', equipment: 'Hydraulic Excavator' },
      { id: 'JN-2024-005', amount: 9450, dueDate: '2024-01-23', equipment: 'Concrete Mixer Truck' },
      { id: 'JN-2024-008', amount: 1575, dueDate: '2024-01-25', equipment: 'Cement Mixer' }
    ]
  }
};

const RentalOverview = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [activeTab, setActiveTab] = useState('overview');

  // Memoized calculations
  const { stats, recentActivity, equipmentUsage, financials } = overviewData;

  const kpiCards = [
    {
      title: 'Total Rentals',
      value: stats.totalRentals,
      icon: Building,
      color: 'blue',
      trend: '+12%',
      trendDirection: 'up'
    },
    {
      title: 'Active Rentals',
      value: stats.activeRentals,
      icon: Truck,
      color: 'green',
      trend: '+2',
      trendDirection: 'up'
    },
    {
      title: 'Monthly Spend',
      value: `$${stats.monthlySpent.toLocaleString()}`,
      icon: DollarSign,
      color: 'orange',
      trend: '-5%',
      trendDirection: 'down'
    },
    {
      title: 'Utilization Rate',
      value: `${stats.utilizationRate}%`,
      icon: TrendingUp,
      color: 'purple',
      trend: '+8%',
      trendDirection: 'up'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'warning':
        return <AlertTriangle size={16} className="text-yellow-500" />;
      case 'alert':
        return <AlertTriangle size={16} className="text-red-500" />;
      default:
        return <CheckCircle size={16} className="text-blue-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'warning':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'alert':
        return 'text-red-700 bg-red-50 border-red-200';
      default:
        return 'text-blue-700 bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Rental Overview</h1>
                <p className="text-gray-600 mt-1">Monitor your equipment rentals and performance</p>
              </div>
              <div className="flex gap-3">
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors">
                  <Download size={18} />
                  Export Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                    <div className={`flex items-center gap-1 mt-2 text-sm ${
                      card.trendDirection === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {card.trendDirection === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                      {card.trend} from last period
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${
                    card.color === 'blue' ? 'bg-blue-100' :
                    card.color === 'green' ? 'bg-green-100' :
                    card.color === 'orange' ? 'bg-orange-100' : 'bg-purple-100'
                  }`}>
                    <IconComponent className={
                      card.color === 'blue' ? 'text-blue-600' :
                      card.color === 'green' ? 'text-green-600' :
                      card.color === 'orange' ? 'text-orange-600' : 'text-purple-600'
                    } size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Financial Overview Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Spending Overview</h3>
                <div className="flex gap-2">
                  {['revenue', 'expenses', 'profit'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded text-sm font-medium ${
                        activeTab === tab
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Simplified Chart - Replace with actual chart library */}
              <div className="h-64 bg-gray-50 rounded-lg border border-gray-200 flex items-end justify-between p-4">
                {financials.monthly.map((amount, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-orange-500 rounded-t w-8 transition-all hover:bg-orange-600"
                      style={{ height: `${(amount / 60000) * 200}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">
                      ${(amount / 1000).toFixed(0)}k
                    </span>
                    <span className="text-xs text-gray-400 mt-1">
                      {financials.categories[index]}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <span>Last 6 months</span>
                <span>Total: ${stats.totalSpent.toLocaleString()}</span>
              </div>
            </div>

            {/* Equipment Usage */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Equipment Usage by Category</h3>
              <div className="space-y-4">
                {equipmentUsage.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span className="font-medium text-gray-700">{item.category}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {item.percentage}%
                      </span>
                      <span className="text-sm text-gray-500 w-8 text-right">
                        ({item.count})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <Eye size={18} className="text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                    {getStatusIcon(activity.status)}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.equipment}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(activity.date).toLocaleDateString()} at {activity.time}
                      </p>
                      {activity.amount && (
                        <p className="text-xs text-green-600 font-medium mt-1">
                          Payment: ${activity.amount.toLocaleString()}
                        </p>
                      )}
                      {activity.daysLeft && (
                        <p className="text-xs text-red-600 font-medium mt-1">
                          Ending in {activity.daysLeft} days
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Payments */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Payments</h3>
                <DollarSign size={18} className="text-gray-400" />
              </div>
              <div className="space-y-4">
                {financials.upcomingPayments.map((payment) => (
                  <div key={payment.id} className="flex justify-between items-center p-3 rounded-lg border border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{payment.equipment}</p>
                      <p className="text-xs text-gray-500">Due {new Date(payment.dueDate).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-orange-600">${payment.amount.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{payment.id}</p>
                    </div>
                  </div>
                ))}
                <button className="w-full py-2 text-center text-orange-600 hover:text-orange-700 font-medium text-sm border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
                  View All Payments
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Truck size={24} className="text-orange-500 mb-2" />
                  <span className="text-sm font-medium text-gray-700">New Rental</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar size={24} className="text-blue-500 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Schedule</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download size={24} className="text-green-500 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Reports</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Users size={24} className="text-purple-500 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Suppliers</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalOverview;