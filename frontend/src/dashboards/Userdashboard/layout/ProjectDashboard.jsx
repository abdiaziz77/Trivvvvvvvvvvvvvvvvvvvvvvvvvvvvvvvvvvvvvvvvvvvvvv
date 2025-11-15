import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiHome, 
  FiBarChart2, 
  FiFolder, 
  FiPlus, 
  FiDollarSign, 
  FiCalendar,
  FiFileText,
  FiUsers,
  FiMessageSquare
} from 'react-icons/fi';

const ProjectDashboard = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const projectMenuItems = [
    {
      name: "Project Overview",
      path: "overview",
      icon: <FiBarChart2 className="text-xl" />,
    },
    {
      name: "My Projects",
      path: "my-projects",
      icon: <FiFolder className="text-xl" />,
    },
    {
      name: "Start New Project",
      path: "start-new",
      icon: <FiPlus className="text-xl" />,
    },
    {
      name: "Budget & Costing",
      path: "budget-costing",
      icon: <FiDollarSign className="text-xl" />,
    },
    {
      name: "Project Timeline",
      path: "timeline",
      icon: <FiCalendar className="text-xl" />,
    },
    {
      name: "Documents & Blueprints",
      path: "documents",
      icon: <FiFileText className="text-xl" />,
    },
    {
      name: "Engineers & Experts",
      path: "engineers",
      icon: <FiUsers className="text-xl" />,
    },
    {
      name: "Communication Chat",
      path: "chat",
      icon: <FiMessageSquare className="text-xl" />,
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Project Sidebar */}
      <div className={`bg-white/80 backdrop-blur-sm border-r border-[#F4B942]/20 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} relative overflow-hidden`}>
        {/* Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4B942]/10 to-[#F4B942]/5 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Header Section with Logo and Return Button */}
          <div className="border-b border-[#F4B942]/10">
            {/* Logo and Collapse Button */}
            <div className={`p-6 flex items-center justify-between ${isCollapsed ? 'flex-col space-y-2' : ''}`}>
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

            {/* Return Button - Upper Top Next to Logo Area */}
            <div className="px-4 pb-4">
              <button
                onClick={() => navigate('/user/dashboard')}
                className={`flex items-center gap-2 w-full p-3 bg-[#F4B942]/10 hover:bg-[#F4B942]/20 text-[#F4B942] rounded-xl transition duration-300 font-semibold text-sm ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? "Return to Main Dashboard" : ""}
              >
                <FiHome className="text-lg" />
                {!isCollapsed && "Return to Main Dashboard"}
              </button>
            </div>
          </div>

        

          {/* Project Navigation Menu */}
          <nav className="flex-1 px-4 py-6">
            {projectMenuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 p-4 rounded-xl mb-2 transition-all duration-300 group text-gray-700 hover:bg-[#F4B942]/15 hover:text-[#F4B942] hover:border-r-4 hover:border-[#F4B942]/50 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? item.name : ''}
              >
                <div className="text-gray-500 group-hover:text-[#F4B942]">
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <span className="font-bold text-sm text-gray-800 group-hover:text-[#F4B942]">
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <UserHeader />
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Nested content */}
            <Outlet />
          </div>
        </main>

        <UserFooter />
      </div>
    </div>
  );
};

export default ProjectDashboard;