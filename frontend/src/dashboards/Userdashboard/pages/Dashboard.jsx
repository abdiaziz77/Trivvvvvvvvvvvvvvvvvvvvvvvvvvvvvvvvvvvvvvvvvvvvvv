import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="font-semibold">Active Jobs</h3>
          <p className="text-3xl mt-2">12</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="font-semibold">Materials Ordered</h3>
          <p className="text-3xl mt-2">5</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="font-semibold">Pending Requests</h3>
          <p className="text-3xl mt-2">3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
