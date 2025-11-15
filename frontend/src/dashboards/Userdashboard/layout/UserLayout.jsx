// src/dashboards/Userdashboard/layout/UserLayout.jsx
import React from "react";
import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

const UserLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <UserSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Now slimmer */}
        <UserHeader />
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        
        {/* Footer - Now slimmer */}
        <UserFooter />
      </div>
    </div>
  );
};

export default UserLayout;