import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiHome, 
  FiUser, 
  FiSettings, 
  FiTool, 
  FiBookOpen, 
  FiUsers,
  FiDollarSign,
  FiFileText,
  FiBell,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiChevronDown
} from "react-icons/fi";

const AdminSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState({
    user: false,
    construction: false,
    equipment: false,
    materials: false,
    projects: false,
    finances: false,
    documents: false,
    notifications: false,
    settings: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuSections = [
    {
      key: "dashboard",
      name: "Dashboard Overview",
      path: "/admin/dashboard",
      icon: <FiHome className="text-xl" />,
      basePath: "/admin/dashboard",
    },
    {
      key: "user",
      name: "User Management",
      icon: <FiUser className="text-xl" />,
      basePath: "/admin/users",
      subItems: [
        { name: "All Users", path: "/admin/users/all" },
        { name: "Create User", path: "/admin/users/create" },
        { name: "Contractors", path: "/admin/users/contractors" },
        { name: "Clients", path: "/admin/users/clients" },
        { name: "Roles & Permissions", path: "/admin/users/roles-permissions" },
      ]
    },
    {
      key: "construction",
      name: "Construction Planning",
      icon: <FiBookOpen className="text-xl" />,
      basePath: "/admin/planning",
      subItems: [
        { name: "Overview", path: "/admin/planning/overview" },
        { name: "Manage Plans", path: "/admin/planning/manage-plans" },
        { name: "Approvals", path: "/admin/planning/approvals" },
        { name: "Progress Reports", path: "/admin/planning/progress-reports" },
      ]
    },
    {
      key: "equipment",
      name: "Equipment Management",
      icon: <FiTool className="text-xl" />,
      basePath: "/admin/equipment",
      subItems: [
        { name: "Inventory", path: "/admin/equipment/inventory" },
        { name: "Approve Requests", path: "/admin/equipment/approve-requests" },
        { name: "Add Equipment", path: "/admin/equipment/add" },
        { name: "Maintenance", path: "/admin/equipment/maintenance" },
        { name: "Usage Tracking", path: "/admin/equipment/usage-tracking" },
      ]
    },
    {
      key: "materials",
      name: "Materials Management",
      icon: <FiUsers className="text-xl" />,
      basePath: "/admin/materials",
      subItems: [
        { name: "Inventory", path: "/admin/materials/inventory" },
        { name: "Suppliers", path: "/admin/materials/suppliers" },
        { name: "Approve Requests", path: "/admin/materials/approve-requests" },
        { name: "Deliveries", path: "/admin/materials/deliveries" },
        { name: "Purchase Orders", path: "/admin/materials/purchase-orders" },
      ]
    },
    {
      key: "projects",
      name: "Project Management",
      icon: <FiBookOpen className="text-xl" />,
      basePath: "/admin/projects",
      subItems: [
        { name: "All Projects", path: "/admin/projects/all" },
        { name: "Create Project", path: "/admin/projects/create" },
        { name: "Teams", path: "/admin/projects/teams" },
        { name: "Scheduling", path: "/admin/projects/scheduling" },
        { name: "Budget", path: "/admin/projects/budget" },
        { name: "Reports", path: "/admin/projects/reports" },
      ]
    },
    {
      key: "finances",
      name: "Finances",
      icon: <FiDollarSign className="text-xl" />,
      basePath: "/admin/finances",
      subItems: [
        { name: "Invoices", path: "/admin/finances/invoices" },
        { name: "Payments", path: "/admin/finances/payments" },
        { name: "Expenses", path: "/admin/finances/expenses" },
        { name: "Budget Allocation", path: "/admin/finances/budget-allocation" },
      ]
    },
    {
      key: "documents",
      name: "Documents",
      icon: <FiFileText className="text-xl" />,
      basePath: "/admin/documents",
      subItems: [
        { name: "Contracts", path: "/admin/documents/contracts" },
        { name: "Blueprints", path: "/admin/documents/blueprints" },
        { name: "Permits", path: "/admin/documents/permits" },
        { name: "Safety Docs", path: "/admin/documents/safety-docs" },
      ]
    },
    {
      key: "notifications",
      name: "Notifications",
      path: "/admin/notifications/system",
      icon: <FiBell className="text-xl" />,
      basePath: "/admin/notifications",
    },
    {
      key: "settings",
      name: "Settings",
      icon: <FiSettings className="text-xl" />,
      basePath: "/admin/settings",
      subItems: [
        { name: "System Settings", path: "/admin/settings/system" },
        { name: "Account Settings", path: "/admin/settings/account" },
        { name: "Audit Logs", path: "/admin/settings/audit-logs" },
        { name: "Security Controls", path: "/admin/settings/security-controls" },
      ]
    },
  ];

  return (
    <div className={`bg-white/80 backdrop-blur-sm border-r border-[#F4B942]/20 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-72'} relative overflow-hidden`}>
      {/* Orange Gradient Overlay with Opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4B942]/10 to-[#F4B942]/5 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Logo Section */}
        <div className={`p-6 flex items-center justify-between border-b border-[#F4B942]/10 ${isCollapsed ? 'flex-col space-y-2' : ''}`}>
          {!isCollapsed ? (
            <Link to="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="flex flex-col items-center justify-center mr-2">
                  <span className="text-red-600 text-3xl font-black leading-none">J</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-black text-gray-900 tracking-tight leading-none group-hover:text-[#F4B942] transition duration-300">
                    engaNow
                  </h1>
                  <p className="text-xs font-semibold text-[#F4B942] tracking-widest uppercase leading-none pt-1">
                    ADMIN
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-red-600 text-2xl font-black">J</span>
            </div>
          )}
          
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-[#F4B942]/20 text-gray-600 hover:text-[#F4B942] transition duration-300 z-20"
          >
            {isCollapsed ? <FiChevronRight className="text-lg" /> : <FiChevronLeft className="text-lg" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6">
          {menuSections.map((section) => {
            const isActive = location.pathname.startsWith(section.basePath);
            const hasSubItems = section.subItems;

            if (!hasSubItems) {
              return (
                <Link
                  key={section.key}
                  to={section.path}
                  className={`relative flex items-center gap-3 p-4 rounded-xl mb-2 transition-all duration-300 group ${
                    isActive 
                      ? 'bg-[#F4B942]/20 text-[#F4B942] border-r-4 border-[#F4B942] shadow-lg' 
                      : 'text-gray-700 hover:bg-[#F4B942]/15 hover:text-[#F4B942] hover:border-r-4 hover:border-[#F4B942]/50'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  title={isCollapsed ? section.name : ''}
                >
                  {/* Active state background glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-[#F4B942]/10 rounded-xl"></div>
                  )}
                  
                  <div className={`relative z-10 ${isActive ? 'text-[#F4B942]' : 'text-gray-500 group-hover:text-[#F4B942]'}`}>
                    {section.icon}
                  </div>
                  {!isCollapsed && (
                    <span className={`relative z-10 font-bold text-sm ${isActive ? 'text-[#F4B942]' : 'text-gray-800 group-hover:text-[#F4B942]'}`}>
                      {section.name}
                    </span>
                  )}
                </Link>
              );
            }

            return (
              <div key={section.key}>
                <button
                  onClick={() => toggleSection(section.key)}
                  className={`relative flex items-center justify-between w-full gap-3 p-4 rounded-xl mb-2 transition-all duration-300 group ${
                    isActive || openSections[section.key]
                      ? 'bg-[#F4B942]/20 text-[#F4B942] border-r-4 border-[#F4B942] shadow-lg' 
                      : 'text-gray-700 hover:bg-[#F4B942]/15 hover:text-[#F4B942] hover:border-r-4 hover:border-[#F4B942]/50'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  title={isCollapsed ? section.name : ''}
                >
                  {/* Active state background glow */}
                  {(isActive || openSections[section.key]) && (
                    <div className="absolute inset-0 bg-[#F4B942]/10 rounded-xl"></div>
                  )}
                  
                  <div className="flex items-center gap-3">
                    <div className={`relative z-10 ${(isActive || openSections[section.key]) ? 'text-[#F4B942]' : 'text-gray-500 group-hover:text-[#F4B942]'}`}>
                      {section.icon}
                    </div>
                    {!isCollapsed && (
                      <span className={`relative z-10 font-bold text-sm ${(isActive || openSections[section.key]) ? 'text-[#F4B942]' : 'text-gray-800 group-hover:text-[#F4B942]'}`}>
                        {section.name}
                      </span>
                    )}
                  </div>
                  
                  {!isCollapsed && (
                    <FiChevronDown 
                      className={`relative z-10 transition-transform duration-300 ${openSections[section.key] ? 'rotate-180' : ''} ${(isActive || openSections[section.key]) ? 'text-[#F4B942]' : 'text-gray-400'}`} 
                    />
                  )}
                </button>

                {/* Sub Items */}
                {!isCollapsed && openSections[section.key] && (
                  <div className="ml-6 mt-1 space-y-1 mb-2">
                    {section.subItems.map((subItem) => {
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                            isSubActive 
                              ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-2 border-[#F4B942] font-semibold' 
                              : 'text-gray-600 hover:bg-[#F4B942]/10 hover:text-[#F4B942]'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Collapsed Menu Helper */}
        {isCollapsed && (
          <div className="p-4 border-t border-[#F4B942]/10 text-center relative z-10">
            <FiMenu className="text-[#F4B942]/40 text-lg mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;