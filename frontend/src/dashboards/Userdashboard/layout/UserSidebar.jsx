import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome, FiUser, FiBell, FiShoppingCart, FiTool, FiBookOpen, FiUsers,
  FiSettings, FiLogOut, FiBriefcase, FiHelpCircle
} from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

const UserSidebar = ({ activePage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) setExpandedItems(new Set());
  };

  const toggleSub = (id) => {
    const newSet = new Set(expandedItems);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setExpandedItems(newSet);
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FiHome />, link: "/dashboard" },
    { id: "profile", label: "Profile", icon: <FiUser />, link: "/dashboard/profile" },
    { id: "notifications", label: "Notifications", icon: <FiBell />, link: "/dashboard/notifications" },

    {
      id: "jobs",
      label: "Jobs",
      icon: <FiBriefcase />,
      subItems: [
        { id: "available-jobs", label: "Available Jobs", link: "/dashboard/jobs/available" },
        { id: "apply-job", label: "Apply for Job", link: "/dashboard/jobs/apply" },
        { id: "my-applications", label: "My Applications", link: "/dashboard/jobs/applications" },
      ],
    },

    {
      id: "marketplace",
      label: "Marketplace",
      icon: <FiShoppingCart />,
      subItems: [
        { id: "buy-materials", label: "Buy Materials", link: "/dashboard/marketplace/buy" },
        { id: "rent-equipment", label: "Rent Equipment", link: "/dashboard/marketplace/rent" },
        { id: "my-orders", label: "My Orders", link: "/dashboard/marketplace/orders" },
      ],
    },

    {
      id: "equipment",
      label: "Equipment",
      icon: <FiTool />,
      subItems: [
        { id: "latest-equipment", label: "Latest Equipment", link: "/dashboard/equipment/latest" },
        { id: "request-equipment", label: "Request Equipment", link: "/dashboard/equipment/request" },
      ],
    },

    {
      id: "resources",
      label: "Resources",
      icon: <FiBookOpen />,
      subItems: [
        { id: "construction-tips", label: "Construction Tips", link: "/dashboard/resources" },
        { id: "material-prices", label: "Material Prices", link: "/dashboard/resources/prices" },
        { id: "community-solutions", label: "Community Solutions", link: "/dashboard/resources/community" },
      ],
    },

    { id: "experts", label: "Experts", icon: <FiUsers />, link: "/dashboard/experts" },

    {
      id: "support",
      label: "Support",
      icon: <FiHelpCircle />,
      subItems: [
        { id: "ask-question", label: "Ask Question", link: "/dashboard/support/ask" },
        { id: "faq", label: "FAQ", link: "/dashboard/support/faq" },
        { id: "contact-support", label: "Contact Support", link: "/dashboard/support/contact" },
      ],
    },

    { id: "settings", label: "Settings", icon: <FiSettings />, link: "/dashboard/settings" },
    { id: "logout", label: "Logout", icon: <FiLogOut />, link: "/dashboard/logout" },
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 h-screen transition-all 
      ${isCollapsed ? "w-20" : "w-64"} overflow-y-auto shadow-lg`}
    >
      {/* HEADER - Matching Navbar Branding */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-50">
        {!isCollapsed && (
          <Link to="/" className="flex items-center group">
            <div className="flex items-center">
              {/* J centered between two text lines */}
              <div className="flex flex-col items-center justify-center mr-2">
                <span className="text-red-600 text-2xl font-black leading-none">J</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-black text-gray-900 tracking-tight leading-none group-hover:text-[#F4B942] transition duration-300">
                  engaNow
                </h1>
                <p className="text-xs font-semibold text-[#F4B942] tracking-widest uppercase leading-none pt-0.5">
                  CONSTRUCTION
                </p>
              </div>
            </div>
          </Link>
        )}
        <button 
          onClick={toggleCollapse}
          className="p-1.5 rounded-lg hover:bg-[#F4B942]/10 transition duration-300"
        >
          <MdKeyboardArrowRight
            className={`text-gray-600 transition-transform ${isCollapsed ? "" : "rotate-180"}`}
            size={20}
          />
        </button>
      </div>

      {/* MENU LIST */}
      <nav className="py-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.id}>
            {/* MAIN ITEM */}
            <div
              className={`flex items-center justify-between px-4 py-3 mx-2 rounded-lg cursor-pointer transition-all duration-300
              ${activePage === item.id 
                ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-4 border-[#F4B942]' 
                : 'text-gray-800 hover:bg-gray-50 hover:text-[#F4B942]'
              }`}
              onClick={() => item.subItems && !isCollapsed && toggleSub(item.id)}
            >
              <Link
                to={item.link || "#"}
                className="flex items-center space-x-3 w-full"
              >
                <span className={`${activePage === item.id ? 'text-[#F4B942]' : 'text-gray-600'}`}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="font-semibold text-sm">{item.label}</span>
                )}
              </Link>

              {!isCollapsed && item.subItems && (
                <MdKeyboardArrowRight
                  className={`transition-transform text-gray-500 ${
                    expandedItems.has(item.id) ? "rotate-90" : ""
                  }`}
                />
              )}
            </div>

            {/* SUB ITEMS */}
            {!isCollapsed && item.subItems && expandedItems.has(item.id) && (
              <div className="ml-6 mt-1 space-y-1 mr-2">
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.id}
                    to={sub.link}
                    className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-300
                    ${activePage === sub.id 
                      ? 'bg-[#F4B942]/10 text-[#F4B942] border-r-2 border-[#F4B942] font-semibold' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#F4B942]'
                    }`}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default UserSidebar;