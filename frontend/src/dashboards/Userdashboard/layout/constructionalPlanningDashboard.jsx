import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiHome, 
  FiTool, 
  FiBarChart2, 
  FiDollarSign, 
  FiFolder, 
  FiCalendar, 
  FiFileText, 
  FiUsers, 
  FiMessageSquare 
} from 'react-icons/fi';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';

const ConstructionPlanningDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const planningMenuItems = [
     { name: 'Planning Overview', path: 'overview', icon: <FiTool className="text-xl" /> },
    { name: 'New House', path: 'new-house', icon: <FiTool className="text-xl" /> },
    { name: 'Renovations', path: 'renovations', icon: <FiBarChart2 className="text-xl" /> },
    { name: 'Payments', path: 'payments', icon: <FiDollarSign className="text-xl" /> },
    { name: 'Materials', path: 'materials', icon: <FiFolder className="text-xl" /> },
    { name: 'Task Scheduling', path: 'scheduling', icon: <FiCalendar className="text-xl" /> },
    { name: 'Blueprints', path: 'blueprints', icon: <FiFileText className="text-xl" /> },
    { name: 'Workforce', path: 'workforce', icon: <FiUsers className="text-xl" /> },
    { name: 'Chat', path: 'chat', icon: <FiMessageSquare className="text-xl" /> },
  ];

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  // Function to check if link is active
  const isLinkActive = (path) => location.pathname === `/user/construction-planning-dashboard/${path}`;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white/80 backdrop-blur-sm border-r border-[#F4B942]/20 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4B942]/10 to-[#F4B942]/5 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Return Home */}
          <div className="p-4 border-b border-[#F4B942]/10">
            <button
              onClick={() => navigate('/user/dashboard')}
              className={`flex items-center gap-2 w-full p-3 bg-[#F4B942]/10 hover:bg-[#F4B942]/20 text-[#F4B942] rounded-xl transition duration-300 font-semibold text-sm ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? "Return to Dashboard" : ""}
            >
              <FiHome className="text-lg" />
              {!isCollapsed && "Return to Dashboard"}
            </button>
          </div>

          {/* Sidebar Header */}
          <div className="border-b border-[#F4B942]/10">
            <div className={`p-6 flex items-center justify-between ${isCollapsed ? 'flex-col space-y-2' : ''}`}>
              {!isCollapsed ? (
                <div className="flex flex-col">
                  <h1 className="text-xl font-black text-gray-900 tracking-tight leading-none">
                    Construction Planning
                  </h1>
                  <p className="text-xs font-semibold text-[#F4B942] tracking-widest uppercase leading-none pt-1">
                    Management
                  </p>
                </div>
              ) : (
                <span className="text-[#F4B942] text-xl font-black">C</span>
              )}
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-[#F4B942]/20 text-gray-600 hover:text-[#F4B942] transition duration-300 z-20"
              >
                {isCollapsed ? <FiChevronRight className="text-lg" /> : <FiChevronLeft className="text-lg" />}
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-4 py-6">
            {planningMenuItems.map((item) => {
              const active = isLinkActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}          // relative path works because route has /* in App.js
                  relative="path"         // ensures react-router-dom resolves relative to parent
                  className={`flex items-center gap-3 p-4 rounded-xl mb-2 transition-all duration-300 group text-gray-700 hover:bg-[#F4B942]/15 hover:text-[#F4B942] hover:border-r-4 hover:border-[#F4B942]/50 ${isCollapsed ? 'justify-center' : ''} ${active ? 'bg-[#F4B942]/20 text-[#F4B942] border-r-4 border-[#F4B942] shadow-lg' : ''}`}
                  title={isCollapsed ? item.name : ''}
                >
                  <div className="text-gray-500 group-hover:text-[#F4B942]">{item.icon}</div>
                  {!isCollapsed && (
                    <span className="font-bold text-sm text-gray-800 group-hover:text-[#F4B942]">
                      {item.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <UserHeader />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        <UserFooter />
      </div>
    </div>
  );
};

export default ConstructionPlanningDashboard;
