import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";

const UserLayout = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <UserSidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
          <h1 className="text-xl font-semibold">User Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">User Options</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet /> {/* This is the FIX */}
        </main>

        {/* Footer */}
        <footer className="p-4 border-t text-center text-gray-500 bg-white">
          © 2025 BuildPro. All rights reserved.
        </footer>

      </div>
    </div>
  );
};

export default UserLayout;
