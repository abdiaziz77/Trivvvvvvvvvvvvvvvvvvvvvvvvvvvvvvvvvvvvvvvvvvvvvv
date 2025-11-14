import React from "react";

const UserHeader = () => {
  return (
    <header className="bg-gradient-to-r from-[#F4B942] to-red-600 text-white shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">User Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-md text-sm font-semibold hover:bg-white/30 transition duration-300 border border-white/30">
          Profile
        </button>
        <button className="px-4 py-2 bg-white text-[#F4B942] rounded-md text-sm font-semibold hover:bg-gray-100 transition duration-300 shadow-md">
          Settings
        </button>
      </div>
    </header>
  );
};

export default UserHeader;