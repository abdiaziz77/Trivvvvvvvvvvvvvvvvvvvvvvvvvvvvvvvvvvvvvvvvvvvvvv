// src/dashboards/Userdashboard/layout/UserSidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiHome, 
  FiSettings, 
  FiTool, 
  FiBookOpen, 
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
  FiMenu
} from "react-icons/fi";

const UserSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/user/dashboard",
      icon: <FiHome className="text-xl" />,
      basePath: "/user/dashboard",
    },
    {
      name: "Projects",
      path: "/user/projects-dashboard/overview",
      icon: <FiBookOpen className="text-xl" />,
      basePath: "/user/projects-dashboard",
    },
    {
      name: "Equipment Rental",
      path: "/user/equipment-dashboard/browse-equipment",
      icon: <FiTool className="text-xl" />,
      basePath: "/user/equipment-dashboard",
    },
    {
      name: "Materials & Supplies",
      path: "/user/materials-dashboard/browse-materials",
      icon: <FiUsers className="text-xl" />,
      basePath: "/user/materials-dashboard",
    },
    {
      name: "Account & Settings",
      path: "/user/account-dashboard/profile",
      icon: <FiSettings className="text-xl" />,
      basePath: "/user/account-dashboard",
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white/80 backdrop-blur-sm border-r border-[#F4B942]/20 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} relative overflow-hidden`}>
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
                    CONSTRUCTION
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
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.basePath);

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center gap-3 p-4 rounded-xl mb-2 transition-all duration-300 group ${
                  isActive 
                    ? 'bg-[#F4B942]/20 text-[#F4B942] border-r-4 border-[#F4B942] shadow-lg' 
                    : 'text-gray-700 hover:bg-[#F4B942]/15 hover:text-[#F4B942] hover:border-r-4 hover:border-[#F4B942]/50'
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.name : ''}
              >
                {/* Active state background glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-[#F4B942]/10 rounded-xl"></div>
                )}
                
                <div className={`relative z-10 ${isActive ? 'text-[#F4B942]' : 'text-gray-500 group-hover:text-[#F4B942]'}`}>
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <span className={`relative z-10 font-bold text-sm ${isActive ? 'text-[#F4B942]' : 'text-gray-800 group-hover:text-[#F4B942]'}`}>
                    {item.name}
                  </span>
                )}
              </Link>
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

export default UserSidebar;