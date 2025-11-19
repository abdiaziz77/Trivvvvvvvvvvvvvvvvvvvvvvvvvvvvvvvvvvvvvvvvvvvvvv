import React, { useState } from 'react';

const PlanningOverview= () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data
  const dashboardData = {
    summary: {
      totalProjects: 12,
      newBuilds: 8,
      renovations: 4,
      totalValue: 4850000,
      budgetStatus: 95,
      onTimeRate: 85
    },
    projects: [
      { id: 1, name: "123 Main St", type: "reno", status: "on-track", progress: 75, budget: 450000 },
      { id: 2, name: "456 Oak Ave", type: "new", status: "at-risk", progress: 45, budget: 650000 },
      { id: 3, name: "789 Pine Rd", type: "new", status: "delayed", progress: 30, budget: 720000 },
      { id: 4, name: "321 Elm St", type: "reno", status: "on-track", progress: 90, budget: 280000 }
    ],
    financials: {
      budgetVsActual: [
        { project: "123 Main St", budget: 450000, actual: 432000 },
        { project: "456 Oak Ave", budget: 650000, actual: 682000 },
        { project: "789 Pine Rd", budget: 720000, actual: 650000 },
        { project: "321 Elm St", budget: 280000, actual: 252000 }
      ]
    },
    alerts: [
      { id: 1, type: 'inspection', project: "123 Main St", date: "Tomorrow", priority: "high" },
      { id: 2, type: 'decision', project: "456 Oak Ave", date: "In 2 days", priority: "medium" },
      { id: 3, type: 'payment', project: "Smith Renovation", date: "Today", priority: "high" }
    ]
  };

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      'on-track': { color: 'bg-green-500', text: 'On Track' },
      'at-risk': { color: 'bg-yellow-500', text: 'At Risk' },
      'delayed': { color: 'bg-red-500', text: 'Delayed' }
    };
    
    const config = statusConfig[status] || statusConfig['on-track'];
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const ProgressBar = ({ progress }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-yellow-600 h-2 rounded-full progress-bar" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  const KpiCard = ({ title, value, subtitle, icon }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="p-3 bg-yellow-50 rounded-lg">
          <span className="text-yellow-600 text-xl">{icon}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-yellow-10 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Construction Planning Dashboard</h1>
            <p className="text-gray-600">Manage new builds and renovation projects</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <i className="fas fa-bell text-gray-600"></i>
            </div>
          </div>
        </div>

        {/* Executive Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KpiCard 
            title="Total Projects" 
            value={dashboardData.summary.totalProjects} 
            subtitle="Active construction projects"
            icon="🏗️"
          />
          <KpiCard 
            title="New Builds" 
            value={dashboardData.summary.newBuilds} 
            subtitle="New construction projects"
            icon="🏠"
          />
          <KpiCard 
            title="Renovations" 
            value={dashboardData.summary.renovations} 
            subtitle="Renovation projects"
            icon="🔨"
          />
          <KpiCard 
            title="Total Value" 
            value={`$${(dashboardData.summary.totalValue / 1000000).toFixed(1)}M`} 
            subtitle="Portfolio value"
            icon="💰"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Budget Status */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Status</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Overall Budget Utilization</span>
              <span className="text-sm font-medium text-gray-800">{dashboardData.summary.budgetStatus}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-green-500 h-3 rounded-full" 
                style={{ width: `${dashboardData.summary.budgetStatus}%` }}
              ></div>
            </div>
          </div>

          {/* On-Time Completion */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">On-Time Completion</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Project Delivery Rate</span>
              <span className="text-sm font-medium text-gray-800">{dashboardData.summary.onTimeRate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-yellow-600 h-3 rounded-full" 
                style={{ width: `${dashboardData.summary.onTimeRate}%` }}
              ></div>
            </div>
          </div>

          {/* Alerts & Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Alerts & Actions</h3>
            <div className="space-y-3">
              {dashboardData.alerts.map(alert => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <p className="font-medium text-gray-800">{alert.type === 'inspection' ? 'Inspection' : alert.type === 'decision' ? 'Client Decision' : 'Payment Due'}</p>
                    <p className="text-sm text-gray-600">{alert.project}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    alert.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {alert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Portfolio */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Project Portfolio</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-medium hover:bg-yellow-600 transition-colors">
                New Project
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Filter
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Project Name</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Type</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Progress</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Budget</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.projects.map(project => (
                  <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4">
                      <div className="font-medium text-gray-800">{project.name}</div>
                    </td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.type === 'new' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {project.type === 'new' ? 'New Build' : 'Renovation'}
                      </span>
                    </td>
                    <td className="py-4">
                      <StatusBadge status={project.status} />
                    </td>
                    <td className="py-4">
                      <div className="w-32">
                        <ProgressBar progress={project.progress} />
                        <span className="text-xs text-gray-600 mt-1">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="font-medium text-gray-800">${(project.budget / 1000).toFixed(0)}K</div>
                    </td>
                    <td className="py-4">
                      <button className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Health & Master Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Financial Health */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Financial Health</h2>
            <div className="space-y-4">
              {dashboardData.financials.budgetVsActual.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{item.project}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">${(item.budget / 1000).toFixed(0)}K</span>
                    <span className={`text-sm font-medium ${
                      item.actual <= item.budget ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${(item.actual / 1000).toFixed(0)}K
                    </span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.actual <= item.budget ? 'bg-green-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min(100, (item.actual / item.budget) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Master Schedule */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Master Schedule</h2>
            <div className="space-y-4">
              {['Pre-Construction', 'Foundation', 'Framing', 'Mechanical', 'Finishes', 'Final'].map((phase, index) => (
                <div key={phase} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{phase}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-yellow-500 h-3 rounded-full gantt-bar"
                        style={{ width: `${Math.max(20, 100 - index * 15)}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{Math.max(20, 100 - index * 15)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningOverview;