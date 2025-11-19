import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        <AdminHeader />

        {/* Outlet loads admin pages */}
        <main className="flex-grow p-6">
          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
