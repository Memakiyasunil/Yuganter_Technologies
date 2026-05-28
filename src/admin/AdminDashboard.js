import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#071d34] flex">

      {/* Sidebar */}
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-auto">

        {/* Mobile Menu */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            ☰ Menu
          </button>
        </div>

        {/* Header */}
        <div className="bg-[#0d2b47] rounded-2xl shadow-lg p-6 mb-8 border border-gray-700">

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Admin Dashboard
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            Welcome to the admin panel. Manage courses,
            services, analytics and website content easily.
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

          {/* Courses Card */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">
                Courses
              </h2>

              <span className="text-4xl">
                📚
              </span>
            </div>

            <p className="text-blue-100 mb-4">
              View, add and edit course details easily.
            </p>

            <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">
              Manage Courses
            </button>

          </div>

          {/* Services Card */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">
                Services
              </h2>

              <span className="text-4xl">
                🛠️
              </span>
            </div>

            <p className="text-green-100 mb-4">
              Update and manage all service offerings.
            </p>

            <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition">
              Manage Services
            </button>

          </div>

          {/* Analytics Card */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">
                Analytics
              </h2>

              <span className="text-4xl">
                📈
              </span>
            </div>

            <p className="text-yellow-100 mb-4">
              Check website traffic and performance reports.
            </p>

            <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-100 transition">
              View Analytics
            </button>

          </div>

        </div>

        {/* Recent Activity Section */}
        <div className="bg-[#0d2b47] rounded-2xl shadow-lg p-6 border border-gray-700">

          <h2 className="text-2xl font-bold text-white mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="bg-[#12385c] p-4 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="text-white font-semibold">
                  New Course Added
                </h3>

                <p className="text-gray-300 text-sm">
                  React Advanced Course added successfully.
                </p>
              </div>

              <span className="text-green-400 text-sm">
                2 min ago
              </span>
            </div>

            <div className="bg-[#12385c] p-4 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="text-white font-semibold">
                  Service Updated
                </h3>

                <p className="text-gray-300 text-sm">
                  Website development pricing updated.
                </p>
              </div>

              <span className="text-yellow-400 text-sm">
                1 hour ago
              </span>
            </div>

            <div className="bg-[#12385c] p-4 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="text-white font-semibold">
                  Analytics Report Generated
                </h3>

                <p className="text-gray-300 text-sm">
                  Monthly analytics report generated successfully.
                </p>
              </div>

              <span className="text-blue-400 text-sm">
                Today
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;