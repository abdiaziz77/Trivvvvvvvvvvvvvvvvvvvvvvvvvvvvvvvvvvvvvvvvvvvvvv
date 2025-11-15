// src/dashboards/Userdashboard/layout/UserFooter.jsx
import React from "react";
import { Link } from "react-router-dom";

const UserFooter = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-[#F4B942]/20 py-4 relative overflow-hidden">
      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4B942]/5 to-[#F4B942]/10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand - Slimmer */}
          <div className="flex items-center mb-3 md:mb-0">
            <div className="flex items-center">
              <div className="flex flex-col items-center justify-center mr-2">
                <span className="text-red-600 text-xl font-black leading-none">J</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-md font-black text-gray-900 tracking-tight leading-none">
                  engaNow
                </h1>
                <p className="text-xs font-semibold text-[#F4B942] tracking-widest uppercase leading-none pt-0.5">
                  CONSTRUCTION
                </p>
              </div>
            </div>
          </div>

          {/* Copyright - Slimmer */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} JengaNow Construction. All rights reserved.
            </p>
            <div className="flex space-x-3 mt-1 justify-center md:justify-end">
              <Link to="/privacy" className="text-gray-500 hover:text-[#F4B942] text-xs transition duration-300">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-[#F4B942] text-xs transition duration-300">
                Terms
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-[#F4B942] text-xs transition duration-300">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;