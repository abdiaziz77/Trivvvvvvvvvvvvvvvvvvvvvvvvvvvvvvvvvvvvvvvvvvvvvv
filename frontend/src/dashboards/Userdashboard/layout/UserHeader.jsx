// src/dashboards/Userdashboard/layout/UserHeader.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut, FiChevronDown, FiBell, FiMessageSquare, FiSettings } from "react-icons/fi";

const UserHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-[#F4B942]/20 sticky top-0 z-40 relative overflow-hidden">
      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4B942]/5 to-[#F4B942]/10 pointer-events-none"></div>
      
      <div className="relative z-10 px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Welcome Message - Slimmer */}
          <div>
            <h1 className="text-xl font-black text-gray-900">
              Welcome to Your <span className="text-[#F4B942]">Dashboard</span>
            </h1>
            <p className="text-gray-600 text-xs mt-1">
              Manage your projects, equipment, and account settings
            </p>
          </div>

          {/* Header Right Section */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-[#F4B942] hover:bg-[#F4B942]/15 rounded-lg transition duration-300">
              <FiBell className="text-lg" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                3
              </span>
            </button>

            {/* Messages */}
            <button className="relative p-2 text-gray-600 hover:text-[#F4B942] hover:bg-[#F4B942]/15 rounded-lg transition duration-300">
              <FiMessageSquare className="text-lg" />
              <span className="absolute -top-1 -right-1 bg-[#F4B942] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                5
              </span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#F4B942]/15 transition duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#F4B942] to-red-600 rounded-full flex items-center justify-center shadow-sm">
                  <FiUser className="text-white text-sm" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-xs">John Doe</p>
                  <p className="text-gray-500 text-xs">Premium Member</p>
                </div>
                <FiChevronDown className={`text-gray-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-[#F4B942]/20 py-2 z-50">
                  <div className="px-4 py-2 border-b border-[#F4B942]/10">
                    <p className="font-bold text-gray-900 text-sm">John Doe</p>
                    <p className="text-gray-600 text-xs">john.doe@jenganow.com</p>
                  </div>
                  
                  <div className="py-1">
                    <Link
                      to="/user/account-dashboard/profile"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#F4B942]/15 hover:text-[#F4B942] transition duration-300 text-sm font-semibold"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FiUser className="mr-3 text-sm" />
                      My Profile
                    </Link>
                    <Link
                      to="/user/account-dashboard/settings"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#F4B942]/15 hover:text-[#F4B942] transition duration-300 text-sm font-semibold"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FiSettings className="mr-3 text-sm" />
                      Account Settings
                    </Link>
                  </div>
                  
                  <div className="border-t border-[#F4B942]/10 pt-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 transition duration-300 text-sm font-bold"
                    >
                      <FiLogOut className="mr-3 text-sm" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;